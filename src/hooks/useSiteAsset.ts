import { useContext } from "react";
import { SiteAssetsContext } from "@/contexts/SiteAssetsContext";

export function useSiteAsset(assetKey: string, fallbackUrl: string): string {
  const { images } = useContext(SiteAssetsContext);
  return images[assetKey] || fallbackUrl;
}