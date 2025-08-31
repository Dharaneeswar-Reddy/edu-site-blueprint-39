import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { FileText, Edit, Trash2, Download, Upload } from "lucide-react";

interface IqacDocument {
  id: string;
  title: string;
  description?: string;
  document_type: string;
  file_url: string;
  academic_year?: string;
  uploaded_at: string;
  updated_at: string;
}

const DOCUMENT_TYPES = [
  { value: "iqac_minutes", label: "IQAC Meeting Minutes" },
  { value: "aqar", label: "AQAR Reports" },
  { value: "nirf", label: "NIRF Reports" },
  { value: "naac_records", label: "NAAC Records" },
  { value: "ssr", label: "Self Study Report (SSR)" },
  { value: "grade_sheet", label: "Grade Sheet" },
  { value: "accreditation_certificate", label: "Accreditation Certificate" },
  { value: "satisfaction_survey", label: "Student Satisfaction Survey" },
  { value: "feedback_student", label: "Student Feedback on Curriculum" },
  { value: "feedback_teacher", label: "Teacher Feedback on Curriculum" },
  { value: "feedback_employer", label: "Employer Feedback on Curriculum" },
  { value: "feedback_alumni", label: "Alumni Feedback on Curriculum" },
];

const IqacAdmin = () => {
  const [documents, setDocuments] = useState<IqacDocument[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [editingDoc, setEditingDoc] = useState<IqacDocument | null>(null);
  const [selectedType, setSelectedType] = useState<string>("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    document_type: "",
    academic_year: "",
    file: null as File | null,
  });

  // All hooks must be called before any returns - no conditional hook usage
  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("iqac_documents")
        .select("*")
        .order("updated_at", { ascending: false });

      if (error) throw error;
      setDocuments(data || []);
    } catch (error) {
      console.error("Error fetching documents:", error);
      toast({
        title: "Error",
        description: "Failed to fetch documents",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (file: File) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = fileName;

    console.log('Starting file upload:', fileName, 'Size:', file.size);

    // Validate file size (10MB limit)
    if (file.size > 10485760) {
      throw new Error('File size must be less than 10MB');
    }

    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      throw new Error('Invalid file type. Please upload PDF, DOC, DOCX, JPG, or PNG files only.');
    }

    const { error: uploadError } = await supabase.storage
      .from('iqac-documents')
      .upload(filePath, file);

    if (uploadError) {
      console.error('Storage upload error:', uploadError);
      throw new Error(`Upload failed: ${uploadError.message}`);
    }

    const { data: { publicUrl } } = supabase.storage
      .from('iqac-documents')
      .getPublicUrl(filePath);

    console.log('File uploaded successfully:', publicUrl);
    return publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.document_type || (!formData.file && !editingDoc)) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    try {
      let fileUrl = editingDoc?.file_url || "";
      
      if (formData.file) {
        fileUrl = await handleFileUpload(formData.file);
      }

      console.log('Submitting document data:', {
        title: formData.title,
        document_type: formData.document_type,
        academic_year: formData.academic_year,
        description: formData.description
      });

      const documentData = {
        title: formData.title,
        description: formData.description || null,
        document_type: formData.document_type,
        academic_year: formData.academic_year || null,
        file_url: fileUrl,
      };

      if (editingDoc) {
        console.log('Updating document:', editingDoc.id);
        const { error } = await supabase
          .from("iqac_documents")
          .update(documentData)
          .eq("id", editingDoc.id);

        if (error) {
          console.error('Database update error:', error);
          throw error;
        }
        toast({
          title: "Success",
          description: "Document updated successfully",
        });
      } else {
        console.log('Inserting new document');
        const { error } = await supabase
          .from("iqac_documents")
          .insert([documentData]);

        if (error) {
          console.error('Database insert error:', error);
          throw error;
        }
        toast({
          title: "Success",
          description: "Document uploaded successfully",
        });
      }

      resetForm();
      fetchDocuments();
    } catch (error: any) {
      console.error("Error saving document:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to save document",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (doc: IqacDocument) => {
    setEditingDoc(doc);
    setFormData({
      title: doc.title,
      description: doc.description || "",
      document_type: doc.document_type,
      academic_year: doc.academic_year || "",
      file: null,
    });
  };

  const handleDelete = async (docId: string) => {
    try {
      const { error } = await supabase
        .from("iqac_documents")
        .delete()
        .eq("id", docId);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Document deleted successfully",
      });
      fetchDocuments();
    } catch (error) {
      console.error("Error deleting document:", error);
      toast({
        title: "Error",
        description: "Failed to delete document",
        variant: "destructive",
      });
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      document_type: "",
      academic_year: "",
      file: null,
    });
    setEditingDoc(null);
  };

  const filteredDocuments = selectedType 
    ? documents.filter(doc => doc.document_type === selectedType)
    : documents;

  const getDocumentTypeLabel = (type: string) => {
    const docType = DOCUMENT_TYPES.find(t => t.value === type);
    return docType?.label || type;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">IQAC Document Management</h1>
          <p className="text-muted-foreground">
            Manage IQAC documents, reports, and curriculum feedback
          </p>
        </div>
      </div>

      <Tabs defaultValue="upload" className="space-y-6">
        <TabsList>
          <TabsTrigger value="upload">Upload Documents</TabsTrigger>
          <TabsTrigger value="manage">Manage Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="upload">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                {editingDoc ? "Edit Document" : "Upload New Document"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Document Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter document title"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="document_type">Document Type *</Label>
                    <Select
                      value={formData.document_type}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, document_type: value }))}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select document type" />
                      </SelectTrigger>
                      <SelectContent>
                        {DOCUMENT_TYPES.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="academic_year">Academic Year</Label>
                    <Input
                      id="academic_year"
                      value={formData.academic_year}
                      onChange={(e) => setFormData(prev => ({ ...prev, academic_year: e.target.value }))}
                      placeholder="e.g., 2023-24"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="file">Document File {!editingDoc && "*"}</Label>
                    <Input
                      id="file"
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={(e) => setFormData(prev => ({ ...prev, file: e.target.files?.[0] || null }))}
                      required={!editingDoc}
                    />
                    <p className="text-xs text-muted-foreground">
                      Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Enter document description"
                    rows={3}
                  />
                </div>

                <div className="flex gap-2">
                  <Button type="submit" disabled={uploading}>
                    {uploading ? "Uploading..." : editingDoc ? "Update Document" : "Upload Document"}
                  </Button>
                  {editingDoc && (
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancel Edit
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manage">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Document Library
              </CardTitle>
              <div className="flex gap-2">
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-64">
                    <SelectValue placeholder="Filter by document type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Documents</SelectItem>
                    {DOCUMENT_TYPES.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedType && (
                  <Button variant="outline" onClick={() => setSelectedType("")}>
                    Clear Filter
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-center py-4">Loading documents...</div>
              ) : filteredDocuments.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No documents found. Upload your first document to get started.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Academic Year</TableHead>
                        <TableHead>Upload Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredDocuments.map((doc) => (
                        <TableRow key={doc.id}>
                          <TableCell className="font-medium">{doc.title}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">
                              {getDocumentTypeLabel(doc.document_type)}
                            </Badge>
                          </TableCell>
                          <TableCell>{doc.academic_year || "-"}</TableCell>
                          <TableCell>
                            {new Date(doc.uploaded_at).toLocaleDateString()}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => window.open(doc.file_url, '_blank')}
                              >
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleEdit(doc)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button variant="outline" size="sm">
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Delete Document</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Are you sure you want to delete "{doc.title}"? This action cannot be undone.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => handleDelete(doc.id)}>
                                      Delete
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IqacAdmin;