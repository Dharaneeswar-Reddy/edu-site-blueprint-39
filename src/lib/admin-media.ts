import { supabase } from "@/integrations/supabase/client";

export async function uploadAdminImage(file: File, folder: string) {
  const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const path = `${folder}/${Date.now()}-${crypto.randomUUID()}.${extension}`;
  const { error } = await supabase.storage.from("admin-uploads").upload(path, file, {
    contentType: file.type || undefined,
    upsert: false,
  });

  if (error) throw error;

  const { data } = supabase.storage.from("admin-uploads").getPublicUrl(path);
  return { url: data.publicUrl, path };
}

export function toAssetKey(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}