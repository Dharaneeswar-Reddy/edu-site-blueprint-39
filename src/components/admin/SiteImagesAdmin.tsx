import { useEffect, useMemo, useRef, useState } from "react";
import { ImagePlus, Pencil, RotateCcw, Save, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useSiteAsset } from "@/hooks/useSiteAsset";
import { SiteAssetsContext } from "@/contexts/SiteAssetsContext";
import { SITE_ASSET_PLACEMENTS } from "@/lib/site-asset-catalog";
import { toAssetKey, uploadAdminImage } from "@/lib/admin-media";
import { useContext } from "react";

interface SiteAssetRow {
  id: string;
  asset_key: string;
  title: string;
  description: string | null;
  image_url: string;
  storage_path: string | null;
}

interface PlacementCardProps {
  placement: (typeof SITE_ASSET_PLACEMENTS)[number];
  override?: SiteAssetRow;
  onEdit: (placement: (typeof SITE_ASSET_PLACEMENTS)[number], override?: SiteAssetRow) => void;
  onReset: (asset: SiteAssetRow) => void;
}

function PlacementCard({ placement, override, onEdit, onReset }: PlacementCardProps) {
  const imageUrl = useSiteAsset(placement.key, placement.fallbackUrl);
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[16/9] bg-muted">
        <img src={imageUrl} alt={override?.title ?? placement.title} className="h-full w-full object-cover" />
      </div>
      <CardContent className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="font-semibold">{override?.title ?? placement.title}</h2>
            <p className="text-sm text-muted-foreground">{placement.location}</p>
          </div>
          <Badge variant={override ? "default" : "secondary"}>{override ? "Updated" : "Original"}</Badge>
        </div>
        <div className="flex gap-2">
          <Button type="button" size="sm" variant="outline" onClick={() => onEdit(placement, override)}>
            <Pencil className="mr-2 h-4 w-4" /> Replace
          </Button>
          {override && (
            <Button type="button" size="sm" variant="ghost" onClick={() => onReset(override)} aria-label={`Restore original ${placement.title}`} title="Restore original image">
              <RotateCcw className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

const SiteImagesAdmin = () => {
  const { toast } = useToast();
  const { refresh } = useContext(SiteAssetsContext);
  const [assets, setAssets] = useState<SiteAssetRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [selected, setSelected] = useState<SiteAssetRow | null>(null);
  const [selectedPlacement, setSelectedPlacement] = useState<(typeof SITE_ASSET_PLACEMENTS)[number] | null>(null);
  const [customOpen, setCustomOpen] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({ asset_key: "", title: "", description: "" });

  const placementByKey = useMemo(() => new Map(SITE_ASSET_PLACEMENTS.map((item) => [item.key, item])), []);
  const customAssets = assets.filter((asset) => !placementByKey.has(asset.asset_key));

  const loadAssets = async () => {
    const { data, error } = await supabase.from("site_assets").select("*").order("title");
    if (error) {
      toast({ title: "Could not load images", description: error.message, variant: "destructive" });
      return;
    }
    setAssets(data ?? []);
    setLoading(false);
  };

  useEffect(() => { void loadAssets(); }, []);

  const startEdit = (placement: (typeof SITE_ASSET_PLACEMENTS)[number], override?: SiteAssetRow) => {
    setSelectedPlacement(placement);
    setSelected(override ?? null);
    setCustomOpen(false);
    setForm({
      asset_key: placement.key,
      title: override?.title ?? placement.title,
      description: override?.description ?? "",
    });
    if (fileRef.current) fileRef.current.value = "";
  };

  const startCustom = () => {
    setSelectedPlacement(null);
    setSelected(null);
    setCustomOpen(true);
    setForm({ asset_key: "", title: "", description: "" });
    if (fileRef.current) fileRef.current.value = "";
  };

  const cancelEdit = () => {
    setSelectedPlacement(null);
    setSelected(null);
    setCustomOpen(false);
  };

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const assetKey = toAssetKey(form.asset_key);
    const file = fileRef.current?.files?.[0];
    if (!assetKey || !form.title.trim() || (!file && !selected)) {
      toast({ title: "Image and title required", description: "Choose an image file and enter a name for this placement.", variant: "destructive" });
      return;
    }

    setSaving(true);
    try {
      const uploaded = file ? await uploadAdminImage(file, "site-assets") : null;
      const { error } = await supabase.from("site_assets").upsert({
        asset_key: assetKey,
        title: form.title.trim(),
        description: form.description.trim() || null,
        image_url: uploaded?.url ?? selected?.image_url ?? "",
        storage_path: uploaded?.path ?? selected?.storage_path ?? null,
      }, { onConflict: "asset_key" });
      if (error) throw error;

      toast({ title: "Image saved", description: "The website image has been updated." });
      cancelEdit();
      await Promise.all([loadAssets(), refresh()]);
    } catch (error) {
      toast({ title: "Could not save image", description: error instanceof Error ? error.message : "Please try again.", variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  const resetAsset = async (asset: SiteAssetRow) => {
    if (!window.confirm(`Restore the original image for “${asset.title}”?`)) return;
    const { error } = await supabase.from("site_assets").delete().eq("id", asset.id);
    if (error) {
      toast({ title: "Could not restore image", description: error.message, variant: "destructive" });
      return;
    }
    if (asset.storage_path) await supabase.storage.from("admin-uploads").remove([asset.storage_path]);
    toast({ title: "Original restored" });
    await Promise.all([loadAssets(), refresh()]);
  };

  const deleteCustomAsset = async (asset: SiteAssetRow) => {
    if (!window.confirm(`Delete “${asset.title}” from the image list?`)) return;
    const { error } = await supabase.from("site_assets").delete().eq("id", asset.id);
    if (error) {
      toast({ title: "Could not delete image", description: error.message, variant: "destructive" });
      return;
    }
    if (asset.storage_path) await supabase.storage.from("admin-uploads").remove([asset.storage_path]);
    toast({ title: "Image deleted" });
    await Promise.all([loadAssets(), refresh()]);
  };

  if (loading) return <div className="py-16 text-center text-muted-foreground">Loading images…</div>;

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Website Images</h1>
          <p className="mt-1 text-muted-foreground">Images currently used across the home page, header, and footer.</p>
        </div>
        <Button onClick={startCustom}><ImagePlus className="mr-2 h-4 w-4" />Add image placement</Button>
      </div>

      {(selectedPlacement || customOpen) && (
        <Card>
          <CardHeader><CardTitle>{selected ? "Replace website image" : "Add website image"}</CardTitle></CardHeader>
          <CardContent>
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="site-asset-title">Image name</Label>
                  <Input id="site-asset-title" value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} required />
                </div>
                {customOpen && <div className="space-y-2">
                  <Label htmlFor="site-asset-key">Placement key</Label>
                  <Input id="site-asset-key" value={form.asset_key} onChange={(event) => setForm({ ...form, asset_key: event.target.value })} placeholder="example: home_news_photo" required />
                </div>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="site-asset-description">Notes</Label>
                <Textarea id="site-asset-description" value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} rows={2} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="site-asset-file">Image file {selected ? "(optional)" : "*"}</Label>
                <Input ref={fileRef} id="site-asset-file" type="file" accept="image/*" />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button type="submit" disabled={saving}><Save className="mr-2 h-4 w-4" />{saving ? "Saving…" : "Save image"}</Button>
                <Button type="button" variant="outline" onClick={cancelEdit}><X className="mr-2 h-4 w-4" />Cancel</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Current placements</h2>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {SITE_ASSET_PLACEMENTS.map((placement) => (
            <PlacementCard key={placement.key} placement={placement} override={assets.find((asset) => asset.asset_key === placement.key)} onEdit={startEdit} onReset={resetAsset} />
          ))}
        </div>
      </section>

      {customAssets.length > 0 && <section className="space-y-4">
        <h2 className="text-lg font-semibold">Additional placements</h2>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {customAssets.map((asset) => (
            <Card key={asset.id} className="overflow-hidden">
              <div className="aspect-[16/9] bg-muted"><img src={asset.image_url} alt={asset.title} className="h-full w-full object-cover" /></div>
              <CardContent className="space-y-3 p-4">
                <div><h3 className="font-semibold">{asset.title}</h3><p className="text-sm text-muted-foreground">{asset.asset_key}</p></div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => {
                    setSelected(asset); setSelectedPlacement(null); setCustomOpen(true);
                    setForm({ asset_key: asset.asset_key, title: asset.title, description: asset.description ?? "" });
                    if (fileRef.current) fileRef.current.value = "";
                  }}><Pencil className="mr-2 h-4 w-4" />Edit</Button>
                  <Button size="sm" variant="ghost" onClick={() => void deleteCustomAsset(asset)} aria-label={`Delete ${asset.title}`} title="Delete image"><X className="h-4 w-4" /></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>}
    </div>
  );
};

export default SiteImagesAdmin;