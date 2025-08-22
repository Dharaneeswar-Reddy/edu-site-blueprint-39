
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Announcement {
  id: string;
  title: string;
  content: string;
  type: string;
  priority: number;
  is_active: boolean;
  created_at: string;
}

interface FormattedAnnouncement {
  id: number;
  title: string;
  date: string;
  link: string;
  category: string;
}

export const useAnnouncements = () => {
  const [announcements, setAnnouncements] = useState<FormattedAnnouncement[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchAnnouncements = async () => {
    try {
      const { data, error } = await supabase
        .from("announcements")
        .select("*")
        .eq("is_active", true)
        .order("priority", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) throw error;

      // Format announcements to match the existing interface
      const formattedAnnouncements: FormattedAnnouncement[] = (data || []).map((announcement, index) => ({
        id: index + 1,
        title: announcement.title,
        date: new Date(announcement.created_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        link: "#", // You can modify this to link to announcement details if needed
        category: announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)
      }));

      setAnnouncements(formattedAnnouncements);
    } catch (error: any) {
      console.error("Error fetching announcements:", error);
      toast({
        title: "Error",
        description: "Failed to fetch announcements",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();

    // Set up real-time subscription
    const channel = supabase
      .channel('announcements-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'announcements'
        },
        () => {
          console.log('Announcements updated, refetching...');
          fetchAnnouncements();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return { announcements, loading, refetch: fetchAnnouncements };
};
