import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface RecruiterLogo {
  id: string;
  company_name: string;
  logo_url: string;
  normalized_name: string;
  is_active: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export const useRecruiterLogos = () => {
  const [logos, setLogos] = useState<RecruiterLogo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLogos();
  }, []);

  const fetchLogos = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const { data, error: fetchError } = await supabase
        .from("recruiter_logos")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true })
        .order("company_name", { ascending: true });

      if (fetchError) {
        throw fetchError;
      }

      setLogos(data || []);
    } catch (err) {
      console.error("Error fetching recruiter logos:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch logos");
    } finally {
      setLoading(false);
    }
  };

  const importFromCanva = async (canvaUrl: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('fetch-recruiter-logos', {
        body: { canvaUrl }
      });

      if (error) throw error;
      
      return data;
    } catch (err) {
      console.error("Error importing from Canva:", err);
      throw err;
    }
  };

  const createLogoMapping = async (companyName: string, logoUrl: string) => {
    try {
      const normalizedName = companyName.toLowerCase().replace(/[^a-z0-9]/g, '');
      
      const { error } = await supabase
        .from("recruiter_logos")
        .insert({
          company_name: companyName,
          logo_url: logoUrl,
          normalized_name: normalizedName
        });

      if (error) throw error;
      
      await fetchLogos();
    } catch (err) {
      console.error("Error creating logo mapping:", err);
      throw err;
    }
  };

  const updateLogoMapping = async (id: string, updates: Partial<RecruiterLogo>) => {
    try {
      const { error } = await supabase
        .from("recruiter_logos")
        .update(updates)
        .eq("id", id);

      if (error) throw error;
      
      await fetchLogos();
    } catch (err) {
      console.error("Error updating logo mapping:", err);
      throw err;
    }
  };

  const deleteLogoMapping = async (id: string) => {
    try {
      const { error } = await supabase
        .from("recruiter_logos")
        .delete()
        .eq("id", id);

      if (error) throw error;
      
      await fetchLogos();
    } catch (err) {
      console.error("Error deleting logo mapping:", err);
      throw err;
    }
  };

  const getLogoForCompany = (companyName: string): string | null => {
    const normalizedSearch = companyName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const logo = logos.find(logo => 
      logo.normalized_name === normalizedSearch ||
      logo.company_name.toLowerCase() === companyName.toLowerCase() ||
      normalizedSearch.includes(logo.normalized_name) ||
      logo.normalized_name.includes(normalizedSearch)
    );
    return logo?.logo_url || null;
  };

  return {
    logos,
    loading,
    error,
    refetch: fetchLogos,
    importFromCanva,
    createLogoMapping,
    updateLogoMapping,
    deleteLogoMapping,
    getLogoForCompany
  };
};

export default useRecruiterLogos;