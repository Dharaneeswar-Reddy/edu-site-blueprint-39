import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AcademicCalendar {
  id: string;
  title: string;
  document_type: string;
  department: string | null;
  semester: string | null;
  academic_year: string | null;
  description: string | null;
  file_url: string;
  uploaded_at: string;
  updated_at: string;
}

export const useAcademicCalendar = () => {
  const [latestCalendar, setLatestCalendar] = useState<AcademicCalendar | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLatestCalendar = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('examination_documents')
        .select('*')
        .eq('document_type', 'Academic Calendars')
        .order('uploaded_at', { ascending: false })
        .limit(1);

      if (error) throw error;
      
      setLatestCalendar(data && data.length > 0 ? data[0] : null);
    } catch (error) {
      console.error('Error fetching latest academic calendar:', error);
      setError(error instanceof Error ? error.message : 'Failed to fetch academic calendar');
      setLatestCalendar(null);
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchLatestCalendar();
  };

  useEffect(() => {
    fetchLatestCalendar();

    // Set up real-time subscription for academic calendars
    const channel = supabase
      .channel('academic_calendar_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'examination_documents',
          filter: 'document_type=eq.Academic Calendars'
        },
        () => {
          fetchLatestCalendar();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return {
    latestCalendar,
    loading,
    error,
    refetch
  };
};