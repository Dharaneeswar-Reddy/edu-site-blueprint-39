import { useEffect, useRef, useState } from "react";
import { Image, RotateCcw, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { SITE_ASSET_PLACEMENTS } from "@/lib/site-asset-catalog";
import { useSiteAssets } from "@/contexts/SiteAssetsContext";

interface SiteAssetRecord {
  asset_key: string;
  title: string;
  description: string | null;
  image_url: string;
  storage_path: string | null;
}

export default function SiteImagesAdmin() {
  const { toast } = useToast();
  const { refresh } = useSiteAssets();
  const [assets, setAssets] = useState<SiteAssetRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyKey, setBusyKey] = useState<string | null>(null);
  const [files, setFiles] = useState<Record<string, File | undefined>>({});
  const [titles, setTitles] = useState<Record<string, string>>({});
  const [descriptions, setDescriptions] = useState<Record<string, string>>({});
  const fileInputs = useRef<Record<string, HTMLInputElement | null>>({});

  const loadAssets = async () => {
    const { data, error } = await supabase
      .from("site_assets")
      .select("asset_key,title,description,image_url,storage_path")
      .order("title");
    if (error) {
      toast({ title: "Could not load site images", description: error.message, variant: "destructive" });
      return;
    }
    setAssets(data ?? []);
  };

  useEffect(() => {
    void loadAssets().finally(() => setLoading(false));
  }, []);

  const saveImage = async (key: string, title: string, description: string, file: File | undefined) => {
    if (!file) {
      toast({ title: "Choose an image first", variant: "destructive" });
      return;
    }
    setBusyKey(key);
    try {
      const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
      const path = `site-assets/${key}/${Date.now()}.${extension}`;
      const { error: uploadError } = await supabase.storage.from("admin-uploads").upload(path, file, {
        cacheControl: "3600",
        upsert: false,
      });
      if (uploadError) throw uploadError;
      const { data: publicUrl } = supabase.storage.from("admin-uploads").getPublicUrl(path);
      const { error: saveError } = await supabase.from("site_assets").upsert({
        asset_key: key,
        title: title.trim() || key,
        description: description.trim() || null,
        image_url: publicUrl.publicUrl,
        storage_path: path,
      }, { onConflict: "asset_key" });
      if (saveError) throw saveError;
      setFiles((current) => ({ ...current, [key]: undefined }));
      if (fileInputs.current[key]) fileInputs.current[key].value = "";
      await Promise.all([loadAssets(), refresh()]);
      toast({ title: "Image updated", description: "The selected image is now used on the website." });
    } catch (error) {
      toast({ title: "Image update failed", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    } finally {
      setBusyKey(null);
    }
  };

  const resetImage = async (key: string) => {
    const existing = assets.find((asset) => asset.asset_key === key);
    if (!existing) return;
    setBusyKey(key);
    try {
      const { error } = await supabase.from("site_assets").delete().eq("asset_key", key);
      if (error) throw error;
      if (existing.storage_path) {
        await supabase.storage.from("admin-uploads").remove([existing.storage_path]);
      }
      await Promise.all([loadAssets(), refresh()]);
      toast({ title: "Original image restored", description: "The website is using its saved image again." });
    } catch (error) {
      toast({ title: "Could not restore image", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    } finally {
      setBusyKey(null);
    }
  };

  if (loading) return <div className="flex min-h-48 items-center justify-center text-muted-foreground">Loading site images…</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Image className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">Website Images</h1>
      </div>
      <p className="max-w-3xl text-sm text-muted-foreground">Update shared images used across the home page, navigation, and footer. Leaving an image unchanged keeps the current website photo.</p>
      <div className="space-y-5">
        {SITE_ASSET_PLACEMENTS.map((placement) => {
          const current = assets.find((asset) => asset.asset_key === placement.key);
          const title = titles[placement.key] ?? current?.title ?? placement.title;
          const description = descriptions[placement.key] ?? current?.description ?? "";
          const image = current?.image_url ?? placement.fallbackUrl;
          return (
            <Card key={placement.key}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{placement.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{placement.location}</p>
              </CardHeader>
              <CardContent className="grid gap-5 md:grid-cols-[220px_1fr]">
                <img src={image} alt={placement.title} className="aspect-video w-full rounded-md border object-cover" />
                <div className="space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor={`${placement.key}-title`}>Image name</Label>
                      <Input id={`${placement.key}-title`} value={title} onChange={(event) => setTitles((prev) => ({ ...prev, [placement.key]: event.target.value }))} />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor={`${placement.key}-file`}>Choose replacement</Label>
                      <Input
                        id={`${placement.key}-file`}
                        type="file"
                        accept="image/*"
                        ref={(node) => { fileInputs.current[placement.key] = node; }}
                        onChange={(event) => setFiles((prev) => ({ ...prev, [placement.key]: event.target.files?.[0] }))}
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor={`${placement.key}-description`}>Description</Label>
                    <Textarea id={`${placement.key}-description`} value={description} rows={2} onChange={(event) => setDescriptions((prev) => ({ ...prev, [placement.key]: event.target.value }))} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button onClick={() => void saveImage(placement.key, title, description, files[placement.key])} disabled={busyKey === placement.key || !files[placement.key]}>
                      <Upload className="mr-2 h-4 w-4" />{busyKey === placement.key ? "Saving…" : "Update image"}
                    </Button>
                    {current && (
                      <Button variant="outline" onClick={() => void resetImage(placement.key)} disabled={busyKey === placement.key}>
                        <RotateCcw className="mr-2 h-4 w-4" />Restore original
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}