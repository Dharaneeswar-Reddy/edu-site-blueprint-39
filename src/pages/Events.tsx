import { useEffect, useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface PublicEvent {
  id: string;
  title: string;
  slug: string;
  summary: string;
  event_date: string | null;
  location: string | null;
  cover_image_url: string | null;
}

export default function Events() {
  const [events, setEvents] = useState<PublicEvent[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let active = true;
    const load = async () => {
      const { data, error } = await supabase.from("events").select("id,title,slug,summary,event_date,location,cover_image_url").eq("is_active", true).order("event_date", { ascending: false });
      if (active) {
        if (!error) setEvents(data ?? []);
        setLoading(false);
      }
    };
    void load();
    return () => { active = false; };
  }, []);

  return (
    <Layout>
      <SEO title="Current Events" description="Current events and activities at Shree Velagapudi Ramakrishna Memorial College." url="https://svrmc.edu.in/events" />
      <section className="bg-muted/30 pb-10 pt-28 sm:pt-32">
        <div className="container mx-auto px-4"><p className="mb-3 text-sm font-semibold uppercase text-primary">Shree Velagapudi Ramakrishna Memorial College</p><h1 className="text-3xl font-bold md:text-4xl">Current Events</h1></div>
      </section>
      <section className="container mx-auto min-h-[45vh] px-4 py-10">
        {loading ? <p className="py-12 text-center text-muted-foreground">Loading events…</p> : events.length === 0 ? <p className="py-16 text-center text-muted-foreground">There are no current events to display.</p> : <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{events.map((event) => (
          <article key={event.id} className="overflow-hidden rounded-md border bg-card">
            {event.cover_image_url && <img src={event.cover_image_url} alt={event.title} className="aspect-[16/9] w-full object-cover" />}
            <div className="space-y-3 p-5"><h2 className="text-xl font-semibold">{event.title}</h2>{event.event_date && <p className="flex items-center gap-2 text-sm text-muted-foreground"><CalendarDays className="h-4 w-4" />{new Date(event.event_date).toLocaleString()}</p>}{event.location && <p className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" />{event.location}</p>}<p className="line-clamp-3 text-sm text-muted-foreground">{event.summary}</p><Button asChild variant="outline"><Link to={`/events/${event.slug}`}>Event details</Link></Button></div>
          </article>
        ))}</div>}
      </section>
    </Layout>
  );
}