import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface ExaminationDocument {
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

export const useExaminationDocuments = () => {
  const [documents, setDocuments] = useState<ExaminationDocument[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDocuments = async () => {
    try {
      const { data, error } = await supabase
        .from('examination_documents')
        .select('*')
        .order('uploaded_at', { ascending: false });

      if (error) throw error;
      setDocuments(data || []);
    } catch (error) {
      console.error('Error fetching examination documents:', error);
      setDocuments([]);
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    setLoading(true);
    fetchDocuments();
  };

  useEffect(() => {
    fetchDocuments();

    // Set up real-time subscription
    const channel = supabase
      .channel('examination_documents_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'examination_documents'
        },
        () => {
          fetchDocuments();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return {
    documents,
    loading,
    refetch
  };
};