import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Staff {
  id: string;
  name: string;
  designation: string;
  department?: string;
  email?: string;
  phone?: string;
  photo_url?: string;
  bio?: string;
  qualification?: string;
  experience?: string;
  staff_type: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const useStaff = (department?: string, staffType?: string) => {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStaff();
  }, [department, staffType]);

  const fetchStaff = async () => {
    setLoading(true);
    setError(null);
    
    try {
      let query = supabase
        .from("staff")
        .select("*")
        .eq("is_active", true);

      if (department) {
        query = query.eq("department", department);
      }

      if (staffType) {
        query = query.eq("staff_type", staffType);
      }

      const { data, error: fetchError } = await query
        .order("name", { ascending: true });

      if (fetchError) {
        throw fetchError;
      }

      setStaff(data || []);
    } catch (err) {
      console.error("Error fetching staff:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch staff");
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchStaff();
  };

  return {
    staff,
    loading,
    error,
    refetch
  };
};

export default useStaff;