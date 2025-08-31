
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Trash2, Eye, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useExaminationDocuments } from "@/hooks/useExaminationDocuments";
import { supabase } from "@/integrations/supabase/client";

interface UploadData {
  title: string;
  document_type: string;
  department: string;
  semester: string;
  academic_year: string;
  description: string;
  file: File | null;
}

const ExaminationDocumentsAdmin = () => {
  const { toast } = useToast();
  const { documents, loading, refetch } = useExaminationDocuments();
  const [activeTab, setActiveTab] = useState("Academic Calendars");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadData, setUploadData] = useState<UploadData>({
    title: "",
    document_type: "Academic Calendars",
    department: "",
    semester: "",
    academic_year: "",
    description: "",
    file: null,
  });

  const documentTypes = [
    "Academic Calendars",
    "Exam Fee Notifications", 
    "External Time Tables",
    "Internal Time Tables",
    "Internal Circulars",
    "Results"
  ];

  const handleUploadChange = (field: keyof UploadData, value: string | File) => {
    setUploadData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!uploadData.title || !uploadData.file) {
      toast({
        title: "Error",
        description: "Please fill in the title and select a file.",
        variant: "destructive",
      });
      return;
    }

    if (uploadData.file.type !== 'application/pdf') {
      toast({
        title: "Error", 
        description: "Please select a PDF file only.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    try {
      // Check authentication first
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError || !user) {
        throw new Error("Authentication required. Please log in again.");
      }

      // Upload file to the examination-docs bucket
      const fileExt = uploadData.file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `examination-documents/${fileName}`;

      console.log('Uploading file to:', filePath);

      const { data: uploadResult, error: uploadError } = await supabase.storage
        .from('examination-docs')
        .upload(filePath, uploadData.file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        console.error('Upload error:', uploadError);
        throw new Error(`File upload failed: ${uploadError.message}`);
      }

      console.log('Upload successful:', uploadResult);

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('examination-docs')
        .getPublicUrl(filePath);

      console.log('Public URL:', publicUrl);

      // Insert document record
      const { data: insertResult, error: insertError } = await supabase
        .from('examination_documents')
        .insert({
          title: uploadData.title,
          document_type: uploadData.document_type,
          department: uploadData.department || null,
          semester: uploadData.semester || null,
          academic_year: uploadData.academic_year || null,
          description: uploadData.description || null,
          file_url: publicUrl,
        })
        .select();

      if (insertError) {
        console.error('Insert error:', insertError);
        // If database insert fails, clean up the uploaded file
        await supabase.storage
          .from('examination-docs')
          .remove([filePath]);
        throw new Error(`Failed to save document record: ${insertError.message}`);
      }

      console.log('Document saved:', insertResult);

      toast({
        title: "Success",
        description: "Document uploaded successfully!",
      });

      // Reset form
      setUploadData({
        title: "",
        document_type: activeTab,
        department: "",
        semester: "",
        academic_year: "",
        description: "",
        file: null,
      });

      // Reset file input
      const fileInput = document.getElementById('file') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }

      // Refresh documents
      refetch();
    } catch (error: any) {
      console.error('Upload process error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to upload document. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteDocument = async (id: string, fileUrl: string) => {
    try {
      // Extract file path from URL to determine which bucket to use
      const urlParts = fileUrl.split('/');
      const bucketIndex = urlParts.findIndex(part => part === 'examination-docs' || part === 'admin-uploads');
      
      if (bucketIndex !== -1) {
        const bucketName = urlParts[bucketIndex];
        const filePath = urlParts.slice(bucketIndex + 1).join('/');
        
        // Delete from storage (handles both old and new bucket files)
        const { error: storageError } = await supabase.storage
          .from(bucketName)
          .remove([filePath]);

        if (storageError) {
          console.warn('Storage deletion warning:', storageError);
          // Continue with database deletion even if storage fails
        }
      }

      // Delete from database
      const { error } = await supabase
        .from('examination_documents')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Document deleted successfully!",
      });

      refetch();
    } catch (error: any) {
      console.error('Delete error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to delete document. Please try again.",
        variant: "destructive",
      });
    }
  };

  const filteredDocuments = documents.filter(doc => doc.document_type === activeTab);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Examination Documents Management</h1>
        <p className="text-muted-foreground">Upload and manage examination documents for different categories.</p>
      </div>

      {/* Document Type Tabs */}
      <div className="flex flex-wrap border-b bg-card rounded-lg shadow-sm">
        {documentTypes.map((type) => (
          <button
            key={type}
            onClick={() => {
              setActiveTab(type);
              setUploadData(prev => ({ ...prev, document_type: type }));
            }}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === type
                ? 'border-primary text-primary bg-primary/10'
                : 'border-transparent text-muted-foreground hover:text-primary hover:bg-muted/50'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload New Document
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFileUpload} className="space-y-4">
              <div>
                <Label htmlFor="title">Document Title *</Label>
                <Input
                  id="title"
                  value={uploadData.title}
                  onChange={(e) => handleUploadChange('title', e.target.value)}
                  placeholder="Enter document title"
                  required
                  disabled={isUploading}
                />
              </div>

              <div>
                <Label htmlFor="department">Department</Label>
                <Input
                  id="department"
                  value={uploadData.department}
                  onChange={(e) => handleUploadChange('department', e.target.value)}
                  placeholder="e.g., Computer Science"
                  disabled={isUploading}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="semester">Semester</Label>
                  <Input
                    id="semester"
                    value={uploadData.semester}
                    onChange={(e) => handleUploadChange('semester', e.target.value)}
                    placeholder="e.g., I, II"
                    disabled={isUploading}
                  />
                </div>
                <div>
                  <Label htmlFor="academic_year">Academic Year</Label>
                  <Input
                    id="academic_year"
                    value={uploadData.academic_year}
                    onChange={(e) => handleUploadChange('academic_year', e.target.value)}
                    placeholder="e.g., 2024-25"
                    disabled={isUploading}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={uploadData.description}
                  onChange={(e) => handleUploadChange('description', e.target.value)}
                  placeholder="Optional description"
                  rows={3}
                  disabled={isUploading}
                />
              </div>

              <div>
                <Label htmlFor="file">PDF File *</Label>
                <Input
                  id="file"
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleUploadChange('file', e.target.files?.[0] || null)}
                  required
                  disabled={isUploading}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isUploading}>
                <Upload className="h-4 w-4 mr-2" />
                {isUploading ? 'Uploading...' : 'Upload Document'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Documents List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              {activeTab} ({filteredDocuments.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="text-muted-foreground mt-2">Loading documents...</p>
              </div>
            ) : filteredDocuments.length === 0 ? (
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No documents uploaded yet for {activeTab}.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {filteredDocuments.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-3 border rounded-lg bg-muted/20">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{doc.title}</h4>
                      {doc.department && (
                        <p className="text-sm text-muted-foreground">Department: {doc.department}</p>
                      )}
                      {(doc.semester || doc.academic_year) && (
                        <p className="text-sm text-muted-foreground">
                          {doc.semester && `Semester: ${doc.semester}`}
                          {doc.semester && doc.academic_year && ' | '}
                          {doc.academic_year && `Year: ${doc.academic_year}`}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(doc.file_url, '_blank')}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeleteDocument(doc.id, doc.file_url)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExaminationDocumentsAdmin;
