import { FormEvent, useEffect, useRef, useState } from "react";
import { CalendarDays, ImagePlus, Pencil, Plus, Trash2, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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
}

interface EventForm {
  title: string;
  slug: string;
  summary: string;
  content: string;
  eventDate: string;
  location: string;
  registrationUrl: string;
  coverUrl: string;
  galleryUrls: string[];
  isActive: boolean;
}

const blankForm: EventForm = {
  title: "", slug: "", summary: "", content: "", eventDate: "", location: "",
  registrationUrl: "", coverUrl: "", galleryUrls: [], isActive: true,
};

const slugify = (value: string) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function EventsAdmin() {
  const { toast } = useToast();
  const coverInput = useRef<HTMLInputElement>(null);
  const galleryInput = useRef<HTMLInputElement>(null);
  const [events, setEvents] = useState<EventRecord[]>([]);
  const [form, setForm] = useState<EventForm>(blankForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const loadEvents = async () => {
    const { data, error } = await supabase.from("events").select("*").order("created_at", { ascending: false });
    if (error) {
      toast({ title: "Could not load events", description: error.message, variant: "destructive" });
      return;
    }
    setEvents(data ?? []);
  };

  useEffect(() => {
    void loadEvents().finally(() => setLoading(false));
  }, []);

  const setField = <K extends keyof EventForm>(key: K, value: EventForm[K]) => {
    setForm((previous) => ({ ...previous, [key]: value }));
  };

  const uploadImage = async (file: File, folder: "event-covers" | "event-gallery") => {
    const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const path = `events/${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${extension}`;
    const { error } = await supabase.storage.from("admin-uploads").upload(path, file, { cacheControl: "3600", upsert: false });
    if (error) throw error;
    return { path, url: supabase.storage.from("admin-uploads").getPublicUrl(path).data.publicUrl };
  };

  const clearForm = () => {
    setEditingId(null);
    setForm(blankForm);
    setCoverFile(null);
    setGalleryFiles([]);
    if (coverInput.current) coverInput.current.value = "";
    if (galleryInput.current) galleryInput.current.value = "";
  };

  const saveEvent = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.title.trim() || !form.summary.trim() || !form.content.trim()) {
      toast({ title: "Complete the required fields", description: "Add a title, short summary, and event details.", variant: "destructive" });
      return;
    }
    setSaving(true);
    try {
      let coverUrl = form.coverUrl;
      if (coverFile) coverUrl = (await uploadImage(coverFile, "event-covers")).url;
      const addedGallery = await Promise.all(galleryFiles.map(async (file) => (await uploadImage(file, "event-gallery")).url));
      const slug = form.slug.trim() ? slugify(form.slug) : slugify(form.title);
      if (!slug) throw new Error("Enter a valid event title or page address.");
      const payload = {
        title: form.title.trim(), slug, summary: form.summary.trim(), content: form.content.trim(),
        event_date: form.eventDate ? new Date(form.eventDate).toISOString() : null,
        location: form.location.trim() || null,
        registration_url: form.registrationUrl.trim() || null,
        cover_image_url: coverUrl || null,
        gallery_urls: [...form.galleryUrls, ...addedGallery],
        is_active: form.isActive,
      };
      const result = editingId
        ? await supabase.from("events").update(payload).eq("id", editingId)
        : await supabase.from("events").insert(payload);
      if (result.error) throw result.error;
      toast({ title: editingId ? "Event updated" : "Event created", description: form.isActive ? "The event is published." : "The event is saved as a draft." });
      clearForm();
      await loadEvents();
    } catch (error) {
      toast({ title: "Could not save event", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  const editEvent = (item: EventRecord) => {
    setEditingId(item.id);
    setForm({
      title: item.title,
      slug: item.slug,
      summary: item.summary,
      content: item.content,
      eventDate: item.event_date ? new Date(item.event_date).toISOString().slice(0, 16) : "",
      location: item.location ?? "",
      registrationUrl: item.registration_url ?? "",
      coverUrl: item.cover_image_url ?? "",
      galleryUrls: item.gallery_urls ?? [],
      isActive: item.is_active,
    });
    setCoverFile(null);
    setGalleryFiles([]);
  };

  const deleteEvent = async (item: EventRecord) => {
    if (!window.confirm(`Delete “${item.title}”?`)) return;
    const { error } = await supabase.from("events").delete().eq("id", item.id);
    if (error) {
      toast({ title: "Could not delete event", description: error.message, variant: "destructive" });
      return;
    }
    if (editingId === item.id) clearForm();
    toast({ title: "Event deleted" });
    await loadEvents();
  };

  const togglePublished = async (item: EventRecord) => {
    const { error } = await supabase.from("events").update({ is_active: !item.is_active }).eq("id", item.id);
    if (error) {
      toast({ title: "Could not update event", description: error.message, variant: "destructive" });
      return;
    }
    await loadEvents();
  };

  if (loading) return <div className="flex min-h-48 items-center justify-center text-muted-foreground">Loading events…</div>;

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <CalendarDays className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">Current Events</h1>
      </div>
      <Card>
        <CardHeader><CardTitle>{editingId ? "Edit event" : "Create an event"}</CardTitle></CardHeader>
        <CardContent>
          <form onSubmit={(event) => void saveEvent(event)} className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="event-title">Event name *</Label><Input id="event-title" value={form.title} onChange={(event) => setField("title", event.target.value)} required /></div>
              <div className="space-y-2"><Label htmlFor="event-slug">Page address</Label><Input id="event-slug" value={form.slug} onChange={(event) => setField("slug", event.target.value)} placeholder={slugify(form.title) || "event-name"} /></div>
              <div className="space-y-2"><Label htmlFor="event-date">Date and time</Label><Input id="event-date" type="datetime-local" value={form.eventDate} onChange={(event) => setField("eventDate", event.target.value)} /></div>
              <div className="space-y-2"><Label htmlFor="event-location">Location</Label><Input id="event-location" value={form.location} onChange={(event) => setField("location", event.target.value)} /></div>
              <div className="space-y-2 md:col-span-2"><Label htmlFor="event-summary">Brief summary *</Label><Textarea id="event-summary" value={form.summary} onChange={(event) => setField("summary", event.target.value)} rows={2} required /></div>
              <div className="space-y-2 md:col-span-2"><Label htmlFor="event-content">Full event details *</Label><Textarea id="event-content" value={form.content} onChange={(event) => setField("content", event.target.value)} rows={6} required /></div>
              <div className="space-y-2 md:col-span-2"><Label htmlFor="event-registration">Registration link</Label><Input id="event-registration" type="url" value={form.registrationUrl} onChange={(event) => setField("registrationUrl", event.target.value)} placeholder="https://" /></div>
              <div className="space-y-2"><Label htmlFor="event-cover">Cover photo</Label><Input id="event-cover" ref={coverInput} type="file" accept="image/*" onChange={(event) => setCoverFile(event.target.files?.[0] ?? null)} />{form.coverUrl && !coverFile && <img src={form.coverUrl} alt="Current event cover" className="mt-2 aspect-video max-h-40 rounded-md object-cover" />}</div>
              <div className="space-y-2"><Label htmlFor="event-gallery">Additional photos</Label><Input id="event-gallery" ref={galleryInput} type="file" accept="image/*" multiple onChange={(event) => setGalleryFiles(Array.from(event.target.files ?? []))} />{galleryFiles.length > 0 && <p className="text-sm text-muted-foreground">{galleryFiles.length} photo(s) selected</p>}</div>
            </div>
            {form.galleryUrls.length > 0 && (
              <div className="space-y-2"><Label>Event photos</Label><div className="flex flex-wrap gap-3">{form.galleryUrls.map((url, index) => <div key={`${url}-${index}`} className="relative"><img src={url} alt={`Event ${index + 1}`} className="h-20 w-24 rounded-md object-cover" /><Button type="button" size="icon" variant="destructive" aria-label="Remove photo" className="absolute -right-2 -top-2 h-6 w-6" onClick={() => setField("galleryUrls", form.galleryUrls.filter((_, photoIndex) => photoIndex !== index))}><X className="h-3 w-3" /></Button></div>)}</div></div>
            )}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t pt-4">
              <div className="flex items-center gap-3"><Switch checked={form.isActive} onCheckedChange={(checked) => setField("isActive", checked)} id="event-published" /><Label htmlFor="event-published">Published</Label></div>
              <div className="flex gap-2"><Button type="submit" disabled={saving}>{editingId ? <Pencil className="mr-2 h-4 w-4" /> : <Plus className="mr-2 h-4 w-4" />}{saving ? "Saving…" : editingId ? "Save changes" : "Create event"}</Button>{editingId && <Button type="button" variant="outline" onClick={clearForm}>Cancel</Button>}</div>
            </div>
          </form>
        </CardContent>
      </Card>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Events ({events.length})</h2>
        {events.length === 0 ? <p className="py-8 text-center text-muted-foreground">No events have been added yet.</p> : events.map((item) => (
          <Card key={item.id}>
            <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
              {item.cover_image_url ? <img src={item.cover_image_url} alt="" className="h-24 w-full rounded-md object-cover sm:w-36" /> : <div className="flex h-24 w-full items-center justify-center rounded-md bg-muted sm:w-36"><ImagePlus className="h-6 w-6 text-muted-foreground" /></div>}
              <div className="min-w-0 flex-1"><div className="mb-1 flex flex-wrap items-center gap-2"><h3 className="font-semibold">{item.title}</h3><Badge variant={item.is_active ? "default" : "secondary"}>{item.is_active ? "Published" : "Draft"}</Badge></div><p className="line-clamp-2 text-sm text-muted-foreground">{item.summary}</p>{item.event_date && <p className="mt-1 text-xs text-muted-foreground">{new Date(item.event_date).toLocaleString()}</p>}</div>
              <div className="flex gap-2"><Button type="button" variant="outline" size="sm" onClick={() => togglePublished(item)}>{item.is_active ? "Unpublish" : "Publish"}</Button><Button type="button" variant="outline" size="icon" aria-label={`Edit ${item.title}`} onClick={() => editEvent(item)}><Pencil className="h-4 w-4" /></Button><Button type="button" variant="destructive" size="icon" aria-label={`Delete ${item.title}`} onClick={() => void deleteEvent(item)}><Trash2 className="h-4 w-4" /></Button></div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}