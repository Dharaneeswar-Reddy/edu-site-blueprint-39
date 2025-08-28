import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface IqacDocument {
  id: string;
  title: string;
  description?: string;
  document_type: string;
  file_url: string;
  academic_year?: string;
  uploaded_at: string;
  updated_at: string;
}

export const useIqacDocuments = (documentType?: string) => {
  const [documents, setDocuments] = useState<IqacDocument[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDocuments = async () => {
    try {
      let query = supabase
        .from('iqac_documents')
        .select('*')
        .order('uploaded_at', { ascending: false });

      if (documentType) {
        query = query.eq('document_type', documentType);
      }

      const { data, error } = await query;

      if (error) throw error;
      setDocuments(data || []);
    } catch (error) {
      console.error('Error fetching IQAC documents:', error);
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
      .channel('iqac_documents_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'iqac_documents'
        },
        () => {
          fetchDocuments();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [documentType]);

  return {
    documents,
    loading,
    refetch
  };
};