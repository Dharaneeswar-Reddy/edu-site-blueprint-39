import { useEffect, useState } from "react";
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface EventDetails {
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

export default function EventDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [event, setEvent] = useState<EventDetails | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let active = true;
    const load = async () => {
      if (!slug) { setLoading(false); return; }
      const { data } = await supabase.from("events").select("title,slug,summary,content,event_date,location,registration_url,cover_image_url,gallery_urls").eq("slug", slug).eq("is_active", true).maybeSingle();
      if (active) { setEvent(data); setLoading(false); }
    };
    void load();
    return () => { active = false; };
  }, [slug]);

  return (
    <Layout>
      <SEO title={event?.title ?? "Event details"} description={event?.summary ?? "College event details."} url={`https://svrmc.edu.in/events/${slug ?? ""}`} />
      <section className="container mx-auto min-h-[60vh] px-4 pb-14 pt-28 sm:pt-32">
        <Button asChild variant="ghost" className="mb-6 -ml-3"><Link to="/events"><ArrowLeft className="mr-2 h-4 w-4" />All events</Link></Button>
        {loading ? <p className="py-12 text-center text-muted-foreground">Loading event…</p> : !event ? <div className="py-12 text-center"><h1 className="text-2xl font-semibold">Event not found</h1><p className="mt-2 text-muted-foreground">This event may have ended or is no longer available.</p></div> : <article className="mx-auto max-w-4xl">
          {event.cover_image_url && <img src={event.cover_image_url} alt={event.title} className="mb-8 aspect-[16/8] w-full rounded-md object-cover" />}
          <h1 className="text-3xl font-bold md:text-4xl">{event.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{event.summary}</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">{event.event_date && <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4" />{new Date(event.event_date).toLocaleString()}</span>}{event.location && <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />{event.location}</span>}</div>
          <div className="mt-8 whitespace-pre-wrap leading-7">{event.content}</div>
          {event.gallery_urls.length > 0 && <div className="mt-10 grid gap-4 sm:grid-cols-2">{event.gallery_urls.map((url, index) => <img key={`${url}-${index}`} src={url} alt={`${event.title} photo ${index + 1}`} className="aspect-[4/3] w-full rounded-md object-cover" />)}</div>}
          {event.registration_url && <Button asChild className="mt-8"><a href={event.registration_url} target="_blank" rel="noopener noreferrer">Register for this event</a></Button>}
        </article>}
      </section>
    </Layout>
  );
}