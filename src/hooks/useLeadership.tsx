import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Leadership {
  id: string;
  position: string;
  name: string;
  designation: string;
  department?: string;
  email?: string;
  phone?: string;
  photo_url?: string;
  bio?: string;
  qualifications?: string;
  experience?: string;
  specialization?: string;
  message?: string;
  achievements?: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const useLeadership = () => {
  const [leadership, setLeadership] = useState<Leadership[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLeadership();
  }, []);

  const fetchLeadership = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const { data, error: fetchError } = await supabase
        .from("leadership")
        .select("*")
        .eq("is_active", true)
        .order("position", { ascending: true });

      if (fetchError) {
        throw fetchError;
      }

      setLeadership(data || []);
    } catch (err) {
      console.error("Error fetching leadership:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch leadership");
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchLeadership();
  };

  return {
    leadership,
    loading,
    error,
    refetch
  };
};

export default useLeadership;