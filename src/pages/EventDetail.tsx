import { useEffect, useState } from "react";
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";

interface PublicEvent {
  title: string;
  slug: string;
  summary: string;
  content: string;
  event_date: string | null;
  location: string | null;
  registration_url: string | null;
  cover_image_url: string | null;
  gallery_urls: string[];
}

const safeExternalUrl = (value: string | null) => {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.toString() : null;
  } catch { return null; }
};

const EventDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [event, setEvent] = useState<PublicEvent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const load = async () => {
      if (!slug) { setLoading(false); return; }
      const { data, error } = await supabase.from("events").select("title,slug,summary,content,event_date,location,registration_url,cover_image_url,gallery_urls").eq("slug", slug).eq("is_active", true).maybeSingle();
      if (active) { setEvent(error ? null : data); setLoading(false); }
    };
    void load();
    return () => { active = false; };
  }, [slug]);

  const registrationUrl = safeExternalUrl(event?.registration_url ?? null);
  return <Layout>
    <SEO title={event?.title ?? "Event"} description={event?.summary ?? "College event details at SVRMC."} image={event?.cover_image_url ?? undefined} url={`https://svrmc.edu.in/events/${slug ?? ""}`} type="article" />
    <main className="min-h-screen bg-background pb-16 pt-32">
      <article className="container mx-auto max-w-4xl px-4">
        <Button asChild variant="ghost" className="mb-6 -ml-3"><Link to="/events"><ArrowLeft className="mr-2 h-4 w-4" />All events</Link></Button>
        {loading ? <p className="py-16 text-center text-muted-foreground">Loading event…</p> : !event ? <div className="py-16 text-center"><h1 className="text-2xl font-semibold">Event not found</h1><p className="mt-2 text-muted-foreground">This event may have ended or is no longer available.</p></div> : <>
          {event.cover_image_url && <div className="mb-8 aspect-[16/8] overflow-hidden rounded-md bg-muted"><img src={event.cover_image_url} alt={event.title} className="h-full w-full object-cover" /></div>}
          <header className="border-b pb-6"><p className="mb-3 text-sm font-semibold uppercase text-primary">College event</p><h1 className="text-3xl font-bold md:text-4xl">{event.title}</h1><p className="mt-4 text-lg text-muted-foreground">{event.summary}</p><div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">{event.event_date && <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4" />{new Date(event.event_date).toLocaleString()}</span>}{event.location && <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />{event.location}</span>}</div>{registrationUrl && <Button asChild className="mt-6"><a href={registrationUrl} target="_blank" rel="noopener noreferrer">Register for this event</a></Button>}</header>
          <div className="prose prose-slate mt-8 max-w-none whitespace-pre-line text-foreground">{event.content}</div>
          {event.gallery_urls?.length > 0 && <section className="mt-10 border-t pt-8"><h2 className="mb-5 text-xl font-semibold">Event photos</h2><div className="grid gap-4 sm:grid-cols-2">{event.gallery_urls.map((url, index) => <img key={`${url}-${index}`} src={url} alt={`${event.title} photo ${index + 1}`} className="aspect-[4/3] w-full rounded-md object-cover" />)}</div></section>}
        </>}
      </article>
    </main>
  </Layout>;
};

export default EventDetail;