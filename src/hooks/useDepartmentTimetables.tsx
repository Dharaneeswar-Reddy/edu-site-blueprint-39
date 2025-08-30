import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface DepartmentTimetable {
  id: string;
  department: string;
  title: string;
  description?: string;
  file_url: string;
  academic_year?: string;
  semester?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const useDepartmentTimetables = (department: string) => {
  const [timetables, setTimetables] = useState<DepartmentTimetable[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTimetables();
  }, [department]);

  const fetchTimetables = async () => {
    if (!department) {
      setTimetables([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const { data, error: fetchError } = await supabase
        .from("department_timetables")
        .select("*")
        .eq("department", department)
        .eq("is_active", true)
        .order("created_at", { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

      setTimetables(data || []);
    } catch (err) {
      console.error("Error fetching timetables:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch timetables");
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchTimetables();
  };

  return {
    timetables,
    loading,
    error,
    refetch
  };
};

export default useDepartmentTimetables;