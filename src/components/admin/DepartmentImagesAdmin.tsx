import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Upload, Edit, Trash2, Image as ImageIcon, Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import useDepartmentImages from "@/hooks/useDepartmentImages";

interface DepartmentImagesAdminProps {
  department: string;
  imageType: 'hero' | 'gallery';
  title: string;
}

interface DepartmentImage {
  id: string;
  department: string;
  image_type: string;
  image_url: string;
  title?: string;
  description?: string;
  display_order: number;
  is_active: boolean;
}

const DepartmentImagesAdmin = ({ department, imageType, title }: DepartmentImagesAdminProps) => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { images, loading, refetch } = useDepartmentImages(department, imageType);

  const [uploading, setUploading] = useState(false);
  const [editingImage, setEditingImage] = useState<DepartmentImage | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedImageToDelete, setSelectedImageToDelete] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    display_order: 0,
    is_active: true
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateFile = (file: File): string | null => {
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return `File too large (${Math.round(file.size / 1024 / 1024)}MB). Please use an image under 5MB.`;
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      return "Only JPEG, PNG, WebP, and GIF images are allowed.";
    }

    return null;
  };

  const uploadFileToStorage = async (file: File): Promise<string> => {
    const sanitizedDepartment = department.toLowerCase().replace(/\s+/g, '-');
    const timestamp = Date.now();
    const ext = file.name.split('.').pop();
    const fileName = `${sanitizedDepartment}_${imageType}_${timestamp}.${ext}`;
    const filePath = `department-images/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('admin-uploads')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) {
      console.error('Storage upload error:', uploadError);
      throw new Error(uploadError.message || 'Upload failed');
    }

    const { data: { publicUrl } } = supabase.storage
      .from('admin-uploads')
      .getPublicUrl(filePath);

    return publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      const fileInput = fileInputRef.current;
      const file = fileInput?.files?.[0];

      if (!editingImage && !file) {
        throw new Error("Please select an image to upload");
      }

      let imageUrl = editingImage?.image_url || "";

      if (file) {
        const validationError = validateFile(file);
        if (validationError) {
          throw new Error(validationError);
        }
        imageUrl = await uploadFileToStorage(file);
      }

      const imageData = {
        department,
        image_type: imageType,
        image_url: imageUrl,
        title: formData.title.trim() || null,
        description: formData.description.trim() || null,
        display_order: formData.display_order,
        is_active: formData.is_active
      };

      let error;
      if (editingImage) {
        ({ error } = await supabase
          .from("department_images")
          .update(imageData)
          .eq("id", editingImage.id));
      } else {
        ({ error } = await supabase
          .from("department_images")
          .insert([imageData]));
      }

      if (error) throw error;

      toast({
        title: "Success",
        description: `Image ${editingImage ? 'updated' : 'uploaded'} successfully`
      });

      resetForm();
      refetch();
    } catch (error: any) {
      console.error("Image submission error:", error);
      toast({
        title: "Error",
        description: error.message || `Failed to ${editingImage ? 'update' : 'upload'} image`,
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (image: DepartmentImage) => {
    setEditingImage(image);
    setFormData({
      title: image.title || "",
      description: image.description || "",
      display_order: image.display_order,
      is_active: image.is_active
    });
  };

  const handleDelete = async () => {
    if (!selectedImageToDelete) return;

    try {
      const { error } = await supabase
        .from("department_images")
        .delete()
        .eq("id", selectedImageToDelete);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Image deleted successfully"
      });

      refetch();
    } catch (error) {
      console.error("Error deleting image:", error);
      toast({
        title: "Error",
        description: "Failed to delete image",
        variant: "destructive"
      });
    } finally {
      setDeleteDialogOpen(false);
      setSelectedImageToDelete(null);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      display_order: 0,
      is_active: true
    });
    setEditingImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-6">
      {/* Upload Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Upload className="h-5 w-5" />
            {editingImage ? `Edit ${title}` : `Upload ${title}`}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="image_title">Title (Optional)</Label>
                <Input
                  id="image_title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="Enter image title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="display_order">Display Order</Label>
                <Input
                  id="display_order"
                  type="number"
                  value={formData.display_order}
                  onChange={(e) => handleInputChange("display_order", parseInt(e.target.value) || 0)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image_description">Description (Optional)</Label>
              <Textarea
                id="image_description"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                placeholder="Enter image description"
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image_file">Image File {!editingImage && "*"}</Label>
              <Input
                id="image_file"
                type="file"
                accept="image/*"
                ref={fileInputRef}
              />
              <p className="text-sm text-muted-foreground">
                JPEG, PNG, WebP, or GIF. Max 5MB.
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <Switch
                checked={formData.is_active}
                onCheckedChange={(checked) => handleInputChange("is_active", checked)}
              />
              <Label>Active</Label>
            </div>

            <div className="flex gap-3">
              <Button type="submit" disabled={uploading}>
                <Upload className="h-4 w-4 mr-2" />
                {uploading ? "Processing..." : editingImage ? "Update" : "Upload"}
              </Button>
              {editingImage && (
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Images List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <ImageIcon className="h-5 w-5" />
            {title} ({images.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            </div>
          ) : images.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image) => (
                <div key={image.id} className="relative group border rounded-lg overflow-hidden">
                  <img
                    src={image.image_url}
                    alt={image.title || "Department image"}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => window.open(image.image_url, '_blank')}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleEdit(image)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => {
                        setSelectedImageToDelete(image.id);
                        setDeleteDialogOpen(true);
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-2 text-xs">
                    <p className="truncate font-medium">{image.title || "No title"}</p>
                    <p className="text-muted-foreground">Order: {image.display_order}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No images uploaded yet.</p>
            </div>
          )}
        </CardContent>
      </Card>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Image</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this image? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DepartmentImagesAdmin;
