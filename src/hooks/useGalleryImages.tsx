import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface GalleryImage {
  id: string;
  title: string;
  description?: string;
  image_url: string;
  category: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const useGalleryImages = (category?: string) => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchImages();
  }, [category]);

  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    
    try {
      let query = supabase
        .from("gallery_images")
        .select("*")
        .eq("is_active", true);

      if (category) {
        query = query.eq("category", category);
      }

      const { data, error: fetchError } = await query
        .order("display_order", { ascending: true })
        .order("created_at", { ascending: false });

      if (fetchError) {
        throw fetchError;
      }

      setImages(data || []);
    } catch (err) {
      console.error("Error fetching gallery images:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch gallery images");
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    fetchImages();
  };

  return {
    images,
    loading,
    error,
    refetch
  };
};

export default useGalleryImages;