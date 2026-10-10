import { useEffect, useRef, useState } from "react";
import { CalendarDays, ExternalLink, ImagePlus, Pencil, Plus, Save, Trash2, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { uploadAdminImage } from "@/lib/admin-media";

interface EventRecord {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  event_date: string | null;
  location: string | null;
  registration_url: string | null;
  cover_image_url: string | null;
  gallery_urls: string[];
  is_active: boolean;
  created_at: string;
}

const emptyForm = { title: "", slug: "", summary: "", content: "", event_date: "", location: "", registration_url: "", is_active: true };
const slugify = (value: string) => value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const EventsAdmin = () => {
  const { toast } = useToast();
  const coverRef = useRef<HTMLInputElement>(null);
  const galleryRef = useRef<HTMLInputElement>(null);
  const [events, setEvents] = useState<EventRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState<EventRecord | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [coverUrl, setCoverUrl] = useState("");
  const [galleryUrls, setGalleryUrls] = useState<string[]>([]);

  const loadEvents = async () => {
    const { data, error } = await supabase.from("events").select("*").order("created_at", { ascending: false });
    if (error) toast({ title: "Could not load events", description: error.message, variant: "destructive" });
    setEvents(data ?? []);
    setLoading(false);
  };

  useEffect(() => { void loadEvents(); }, []);

  const beginCreate = () => {
    setEditing(null); setForm(emptyForm); setCoverUrl(""); setGalleryUrls([]); setFormOpen(true);
    if (coverRef.current) coverRef.current.value = "";
    if (galleryRef.current) galleryRef.current.value = "";
  };

  const beginEdit = (item: EventRecord) => {
    setEditing(item);
    setForm({
      title: item.title, slug: item.slug, summary: item.summary, content: item.content,
      event_date: item.event_date ? new Date(item.event_date).toISOString().slice(0, 16) : "",
      location: item.location ?? "", registration_url: item.registration_url ?? "", is_active: item.is_active,
    });
    setCoverUrl(item.cover_image_url ?? ""); setGalleryUrls(item.gallery_urls ?? []); setFormOpen(true);
    if (coverRef.current) coverRef.current.value = "";
    if (galleryRef.current) galleryRef.current.value = "";
  };

  const closeForm = () => { setEditing(null); setFormOpen(false); };

  const saveEvent = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const eventSlug = slugify(form.slug || form.title);
    if (!eventSlug) {
      toast({ title: "A page address is required", description: "Add a title or page address for this event.", variant: "destructive" });
      return;
    }
    setSaving(true);
    try {
      const coverFile = coverRef.current?.files?.[0];
      const uploadedCover = coverFile ? await uploadAdminImage(coverFile, "events/covers") : null;
      const galleryFiles = Array.from(galleryRef.current?.files ?? []);
      const uploadedGallery = await Promise.all(galleryFiles.map((file) => uploadAdminImage(file, "events/gallery")));
      const payload = {
        title: form.title.trim(), slug: eventSlug, summary: form.summary.trim(), content: form.content.trim(),
        event_date: form.event_date ? new Date(form.event_date).toISOString() : null,
        location: form.location.trim() || null, registration_url: form.registration_url.trim() || null,
        cover_image_url: uploadedCover?.url ?? (coverUrl || null),
        gallery_urls: [...galleryUrls, ...uploadedGallery.map((image) => image.url)],
        is_active: form.is_active,
      };
      const result = editing
        ? await supabase.from("events").update(payload).eq("id", editing.id)
        : await supabase.from("events").insert(payload);
      if (result.error) throw result.error;
      toast({ title: editing ? "Event updated" : "Event created" });
      closeForm(); await loadEvents();
    } catch (error) {
      toast({ title: "Could not save event", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    } finally { setSaving(false); }
  };

  const togglePublished = async (item: EventRecord, is_active: boolean) => {
    const { error } = await supabase.from("events").update({ is_active }).eq("id", item.id);
    if (error) toast({ title: "Could not update event", description: error.message, variant: "destructive" });
    else await loadEvents();
  };

  const deleteEvent = async (item: EventRecord) => {
    if (!window.confirm(`Delete “${item.title}”?`)) return;
    const { error } = await supabase.from("events").delete().eq("id", item.id);
    if (error) toast({ title: "Could not delete event", description: error.message, variant: "destructive" });
    else { toast({ title: "Event deleted" }); await loadEvents(); }
  };

  if (loading) return <div className="py-16 text-center text-muted-foreground">Loading events…</div>;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div><h1 className="text-2xl font-bold">Current Events</h1><p className="mt-1 text-muted-foreground">Create and publish event pages for the college website.</p></div>
        <Button onClick={beginCreate}><Plus className="mr-2 h-4 w-4" />Add event</Button>
      </div>

      {formOpen && <Card>
        <CardHeader><CardTitle>{editing ? "Edit event" : "Create event"}</CardTitle></CardHeader>
        <CardContent>
          <form onSubmit={saveEvent} className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="event-title">Event name</Label><Input id="event-title" value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value, slug: editing ? form.slug : slugify(event.target.value) })} required /></div>
              <div className="space-y-2"><Label htmlFor="event-slug">Page address</Label><Input id="event-slug" value={form.slug} onChange={(event) => setForm({ ...form, slug: slugify(event.target.value) })} required /></div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="event-date">Date and time</Label><Input id="event-date" type="datetime-local" value={form.event_date} onChange={(event) => setForm({ ...form, event_date: event.target.value })} /></div>
              <div className="space-y-2"><Label htmlFor="event-location">Location</Label><Input id="event-location" value={form.location} onChange={(event) => setForm({ ...form, location: event.target.value })} /></div>
            </div>
            <div className="space-y-2"><Label htmlFor="event-summary">Brief description</Label><Textarea id="event-summary" value={form.summary} onChange={(event) => setForm({ ...form, summary: event.target.value })} rows={2} required /></div>
            <div className="space-y-2"><Label htmlFor="event-content">Full event details</Label><Textarea id="event-content" value={form.content} onChange={(event) => setForm({ ...form, content: event.target.value })} rows={7} required /></div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="event-registration">Registration link</Label><Input id="event-registration" type="url" value={form.registration_url} onChange={(event) => setForm({ ...form, registration_url: event.target.value })} placeholder="https://" /></div>
              <div className="flex items-end gap-3 pb-2"><Switch id="event-published" checked={form.is_active} onCheckedChange={(is_active) => setForm({ ...form, is_active })} /><Label htmlFor="event-published">Published on website</Label></div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="event-cover">Cover photo</Label><Input ref={coverRef} id="event-cover" type="file" accept="image/*" />{coverUrl && <img src={coverUrl} alt="Current event cover" className="mt-2 aspect-video w-full max-w-sm rounded object-cover" />}</div>
              <div className="space-y-2"><Label htmlFor="event-gallery">Additional photos</Label><Input ref={galleryRef} id="event-gallery" type="file" accept="image/*" multiple /><div className="flex flex-wrap gap-2">{galleryUrls.map((url) => <div key={url} className="relative"><img src={url} alt="Event photo" className="h-20 w-24 rounded object-cover" /><Button type="button" variant="destructive" size="icon" className="absolute -right-2 -top-2 h-6 w-6" onClick={() => setGalleryUrls((current) => current.filter((item) => item !== url))} aria-label="Remove event photo"><X className="h-3 w-3" /></Button></div>)}</div></div>
            </div>
            <div className="flex flex-wrap gap-2"><Button type="submit" disabled={saving}><Save className="mr-2 h-4 w-4" />{saving ? "Saving…" : editing ? "Save changes" : "Create event"}</Button><Button type="button" variant="outline" onClick={closeForm}><X className="mr-2 h-4 w-4" />Cancel</Button></div>
          </form>
        </CardContent>
      </Card>}

      {events.length === 0 ? <Card><CardContent className="py-12 text-center text-muted-foreground">No events have been added.</CardContent></Card> : <div className="space-y-4">
        {events.map((item) => <Card key={item.id} className="overflow-hidden">
          <div className="grid md:grid-cols-[220px_1fr]">
            <div className="min-h-40 bg-muted">{item.cover_image_url ? <img src={item.cover_image_url} alt={item.title} className="h-full min-h-40 w-full object-cover" /> : <div className="flex h-full min-h-40 items-center justify-center text-muted-foreground"><ImagePlus className="h-8 w-8" /></div>}</div>
            <div className="p-5"><div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2"><div className="flex flex-wrap items-center gap-2"><h2 className="text-lg font-semibold">{item.title}</h2><Badge variant={item.is_active ? "default" : "secondary"}>{item.is_active ? "Published" : "Draft"}</Badge></div><p className="text-sm text-muted-foreground">{item.summary}</p><div className="flex flex-wrap gap-4 text-sm text-muted-foreground">{item.event_date && <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4" />{new Date(item.event_date).toLocaleString()}</span>}{item.location && <span>{item.location}</span>}</div></div>
              <div className="flex shrink-0 items-center gap-2"><Switch checked={item.is_active} onCheckedChange={(checked) => void togglePublished(item, checked)} aria-label={`Publish ${item.title}`} /><Button type="button" variant="outline" size="icon" onClick={() => beginEdit(item)} aria-label={`Edit ${item.title}`}><Pencil className="h-4 w-4" /></Button><Button type="button" variant="ghost" size="icon" onClick={() => void deleteEvent(item)} aria-label={`Delete ${item.title}`}><Trash2 className="h-4 w-4" /></Button>{item.is_active && <Button asChild type="button" variant="ghost" size="icon" aria-label={`Open ${item.title} page`}><a href={`/events/${item.slug}`} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" /></a></Button>}</div>
            </div></div>
          </div>
        </Card>)}
      </div>}
    </div>
  );
};

export default EventsAdmin;