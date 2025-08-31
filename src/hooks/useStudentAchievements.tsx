import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface StudentAchievement {
  id: string;
  department: string;
  title: string;
  description?: string;
  file_url: string;
  file_type: string;
  academic_year?: string;
  achievement_date?: string;
  is_active: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export const useStudentAchievements = (department: string) => {
  const [achievements, setAchievements] = useState<StudentAchievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAchievements();
  }, [department]);

  const fetchAchievements = async () => {
    if (!department) {
      setAchievements([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const { data, error: fetchError } = await supabase
        .from("student_achievements")
        .select("*")
        .eq("department", department)
        .eq("is_active", true)
        .order("display_order", { ascending: true })
        .order("created_at", { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

      setAchievements(data || []);
    } catch (err) {
      console.error("Error fetching student achievements:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch student achievements");
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchAchievements();
  };

  return {
    achievements,
    loading,
    error,
    refetch
  };
};

export default useStudentAchievements;