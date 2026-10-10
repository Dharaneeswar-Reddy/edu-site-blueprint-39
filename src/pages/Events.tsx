import { CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";

interface PublicEvent {
  id: string;
  title: string;
  slug: string;
  summary: string;
  event_date: string | null;
  location: string | null;
  cover_image_url: string | null;
}

const Events = () => {
  const [events, setEvents] = useState<PublicEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const load = async () => {
      const { data, error } = await supabase.from("events").select("id,title,slug,summary,event_date,location,cover_image_url").eq("is_active", true).order("event_date", { ascending: true, nullsFirst: false });
      if (active) { setEvents(error ? [] : data ?? []); setLoading(false); }
    };
    void load();
    return () => { active = false; };
  }, []);

  return <Layout>
    <SEO title="Current Events" description="Upcoming events and activities at Shree Velagapudi Ramakrishna Memorial College." url="https://svrmc.edu.in/events" />
    <main className="min-h-screen bg-background pb-16 pt-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-10 border-b pb-6"><p className="mb-2 text-sm font-semibold uppercase text-primary">Campus life</p><h1 className="text-3xl font-bold md:text-4xl">Current Events</h1><p className="mt-3 max-w-2xl text-muted-foreground">Discover programmes, celebrations, and activities at SVRMC.</p></div>
        {loading ? <p className="py-12 text-center text-muted-foreground">Loading events…</p> : events.length === 0 ? <div className="py-16 text-center"><h2 className="text-xl font-semibold">No current events</h2><p className="mt-2 text-muted-foreground">Please check back for upcoming college events.</p></div> : <div className="grid gap-6 md:grid-cols-2">
          {events.map((item) => <Card key={item.id} className="overflow-hidden">
            <Link to={`/events/${item.slug}`} className="group block">
              <div className="aspect-[16/9] overflow-hidden bg-muted">{item.cover_image_url ? <img src={item.cover_image_url} alt={item.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" /> : <div className="flex h-full items-center justify-center text-muted-foreground"><CalendarDays className="h-10 w-10" /></div>}</div>
              <CardContent className="space-y-3 p-5">
                <Badge variant="secondary">Event</Badge><h2 className="text-xl font-semibold group-hover:text-primary">{item.title}</h2><p className="line-clamp-3 text-sm text-muted-foreground">{item.summary}</p>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">{item.event_date && <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4" />{new Date(item.event_date).toLocaleDateString()}</span>}{item.location && <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{item.location}</span>}</div>
                <span className="inline-flex pt-1 text-sm font-semibold text-primary">View event details</span>
              </CardContent>
            </Link>
          </Card>)}
        </div>}
      </div>
    </main>
  </Layout>;
};

export default Events;