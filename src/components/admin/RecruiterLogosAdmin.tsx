import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { Upload, Download, Trash2, Edit, Plus } from "lucide-react";
import { useRecruiterLogos } from "@/hooks/useRecruiterLogos";

export const RecruiterLogosAdmin = () => {
  const { logos, loading, importFromCanva, createLogoMapping, updateLogoMapping, deleteLogoMapping, refetch } = useRecruiterLogos();
  const [canvaUrl, setCanvaUrl] = useState("");
  const [importing, setImporting] = useState(false);
  const [newCompanyName, setNewCompanyName] = useState("");
  const [newLogoUrl, setNewLogoUrl] = useState("");
  const [editingLogo, setEditingLogo] = useState<any>(null);

  const handleImportFromCanva = async () => {
    if (!canvaUrl) {
      toast.error("Please enter a Canva URL");
      return;
    }

    setImporting(true);
    try {
      const result = await importFromCanva(canvaUrl);
      if (result.success) {
        toast.success(`Successfully imported ${result.totalUploaded} logos from Canva`);
        setCanvaUrl("");
        refetch();
      } else {
        toast.error(result.error || "Failed to import logos");
      }
    } catch (error) {
      console.error("Import error:", error);
      toast.error("Failed to import logos from Canva");
    } finally {
      setImporting(false);
    }
  };

  const handleCreateMapping = async () => {
    if (!newCompanyName || !newLogoUrl) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      await createLogoMapping(newCompanyName, newLogoUrl);
      toast.success("Logo mapping created successfully");
      setNewCompanyName("");
      setNewLogoUrl("");
    } catch (error) {
      toast.error("Failed to create logo mapping");
    }
  };

  const handleUpdateMapping = async () => {
    if (!editingLogo) return;

    try {
      await updateLogoMapping(editingLogo.id, {
        company_name: editingLogo.company_name,
        logo_url: editingLogo.logo_url,
        display_order: editingLogo.display_order
      });
      toast.success("Logo mapping updated successfully");
      setEditingLogo(null);
    } catch (error) {
      toast.error("Failed to update logo mapping");
    }
  };

  const handleDeleteMapping = async (id: string) => {
    try {
      await deleteLogoMapping(id);
      toast.success("Logo mapping deleted successfully");
    } catch (error) {
      toast.error("Failed to delete logo mapping");
    }
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Recruiter Logos Management</h1>
      </div>

      <Tabs defaultValue="import" className="w-full">
        <TabsList>
          <TabsTrigger value="import">Import from Canva</TabsTrigger>
          <TabsTrigger value="manage">Manage Logos</TabsTrigger>
          <TabsTrigger value="create">Create Mapping</TabsTrigger>
        </TabsList>

        <TabsContent value="import" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Import Logos from Canva
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="canva-url">Canva Design URL</Label>
                <Input
                  id="canva-url"
                  value={canvaUrl}
                  onChange={(e) => setCanvaUrl(e.target.value)}
                  placeholder="https://www.canva.com/design/..."
                  disabled={importing}
                />
              </div>
              <Button 
                onClick={handleImportFromCanva}
                disabled={importing || !canvaUrl}
                className="w-full"
              >
                <Upload className="mr-2 h-4 w-4" />
                {importing ? "Importing..." : "Import Logos"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manage" className="space-y-4">
          <div className="grid gap-4">
            {logos.map((logo) => (
              <Card key={logo.id}>
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src={logo.logo_url} 
                      alt={logo.company_name}
                      className="h-12 w-12 object-contain bg-background rounded border"
                    />
                    <div>
                      <h3 className="font-semibold">{logo.company_name}</h3>
                      <p className="text-sm text-muted-foreground">Order: {logo.display_order}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={logo.is_active ? "default" : "secondary"}>
                      {logo.is_active ? "Active" : "Inactive"}
                    </Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setEditingLogo(logo)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button size="sm" variant="destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Logo Mapping</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete the logo mapping for {logo.company_name}?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDeleteMapping(logo.id)}>
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="create" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Create New Logo Mapping
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="company-name">Company Name</Label>
                <Input
                  id="company-name"
                  value={newCompanyName}
                  onChange={(e) => setNewCompanyName(e.target.value)}
                  placeholder="Company Name"
                />
              </div>
              <div>
                <Label htmlFor="logo-url">Logo URL</Label>
                <Input
                  id="logo-url"
                  value={newLogoUrl}
                  onChange={(e) => setNewLogoUrl(e.target.value)}
                  placeholder="https://..."
                />
              </div>
              <Button onClick={handleCreateMapping} className="w-full">
                Create Mapping
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Edit Dialog */}
      {editingLogo && (
        <AlertDialog open={!!editingLogo} onOpenChange={() => setEditingLogo(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Edit Logo Mapping</AlertDialogTitle>
            </AlertDialogHeader>
            <div className="space-y-4">
              <div>
                <Label>Company Name</Label>
                <Input
                  value={editingLogo.company_name}
                  onChange={(e) => setEditingLogo({...editingLogo, company_name: e.target.value})}
                />
              </div>
              <div>
                <Label>Logo URL</Label>
                <Input
                  value={editingLogo.logo_url}
                  onChange={(e) => setEditingLogo({...editingLogo, logo_url: e.target.value})}
                />
              </div>
              <div>
                <Label>Display Order</Label>
                <Input
                  type="number"
                  value={editingLogo.display_order}
                  onChange={(e) => setEditingLogo({...editingLogo, display_order: parseInt(e.target.value) || 0})}
                />
              </div>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleUpdateMapping}>
                Update
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
};

export default RecruiterLogosAdmin;