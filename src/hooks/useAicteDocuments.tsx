import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AicteDocument {
  id: string;
  title: string;
  description?: string;
  file_url: string;
  display_order: number;
  is_active: boolean;
  uploaded_at: string;
  updated_at: string;
}

export const useAicteDocuments = () => {
  const [documents, setDocuments] = useState<AicteDocument[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDocuments = async () => {
    try {
      const { data, error } = await supabase
        .from('aicte_documents')
        .select('*')
        .eq('is_active', true)
        .order('uploaded_at', { ascending: false });

      if (error) throw error;
      setDocuments(data || []);
    } catch (error) {
      console.error('Error fetching AICTE documents:', error);
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

    const channel = supabase
      .channel('aicte_documents_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'aicte_documents'
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