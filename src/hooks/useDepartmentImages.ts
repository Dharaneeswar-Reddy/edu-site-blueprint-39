import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

interface DepartmentImage {
  id: string;
  department: string;
  image_type: 'hero' | 'gallery';
  image_url: string;
  title?: string;
  description?: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

const useDepartmentImages = (department?: string, imageType?: 'hero' | 'gallery') => {
  const [images, setImages] = useState<DepartmentImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = useCallback(async () => {
    if (!department) {
      setImages([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      let query = supabase
        .from("department_images")
        .select("*")
        .eq("department", department)
        .order("display_order", { ascending: true });

      if (imageType) {
        query = query.eq("image_type", imageType);
      }

      const { data, error: fetchError } = await query;

      if (fetchError) throw fetchError;
      setImages((data as DepartmentImage[]) || []);
    } catch (err: any) {
      console.error("Error fetching department images:", err);
      setError(err.message);
      setImages([]);
    } finally {
      setLoading(false);
    }
  }, [department, imageType]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return { images, loading, error, refetch: fetchImages };
};

export default useDepartmentImages;
