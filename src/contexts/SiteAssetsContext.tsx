import { createContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";

interface SiteAssetsContextValue {
  images: Record<string, string>;
  loading: boolean;
  refresh: () => Promise<void>;
}

export const SiteAssetsContext = createContext<SiteAssetsContextValue>({
  images: {},
  loading: true,
  refresh: async () => {},
});

export function SiteAssetsProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    const { data, error } = await supabase.from("site_assets").select("asset_key,image_url");
    if (error) {
      console.error("Could not load site images:", error.message);
      return;
    }
    setImages(Object.fromEntries((data ?? []).map(({ asset_key, image_url }) => [asset_key, image_url])));
  };

  useEffect(() => {
    let active = true;
    const load = async () => {
      const { data, error } = await supabase.from("site_assets").select("asset_key,image_url");
      if (!active) return;
      if (error) {
        console.error("Could not load site images:", error.message);
      } else {
        setImages(Object.fromEntries((data ?? []).map(({ asset_key, image_url }) => [asset_key, image_url])));
      }
      setLoading(false);
    };
    void load();
    return () => { active = false; };
  }, []);

  const value = useMemo(() => ({ images, loading, refresh }), [images, loading]);
  return <SiteAssetsContext.Provider value={value}>{children}</SiteAssetsContext.Provider>;
}