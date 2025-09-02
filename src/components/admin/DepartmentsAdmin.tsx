import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Upload, Edit, Trash2, BookOpen, Eye, Users, FileText, Trophy } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import useStaff from "@/hooks/useStaff";
import useDepartmentTimetables from "@/hooks/useDepartmentTimetables";
import StudentAchievementsAdmin from "./StudentAchievementsAdmin";

interface DepartmentTimetable {
  id: string;
  department: string;
  title: string;
  description?: string;
  file_url: string;
  academic_year?: string;
  semester?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

const DEPARTMENTS = [
  "Computer Science",
  "Electronics",
  "Physics",
  "Chemistry", 
  "PG Chemistry",
  "Mathematics",
  "English",
  "Telugu",
  "Hindi",
  "History",
  "Political Science",
  "Economics",
  "Commerce",
  "Botany",
  "Zoology",
  "Physical Education",
  "Library"
];

const DepartmentsAdmin = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [activeTab, setActiveTab] = useState("staff");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  
  // Staff data
  const { staff, loading: staffLoading, refetch: refetchStaff } = useStaff(selectedDepartment);
  
  // Timetable data
  const { timetables, loading: timetablesLoading, refetch: refetchTimetables } = useDepartmentTimetables(selectedDepartment);
  
  const [uploading, setUploading] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editingTimetable, setEditingTimetable] = useState<DepartmentTimetable | null>(null);
  const [selectedTimetableToDelete, setSelectedTimetableToDelete] = useState<string | null>(null);
  
  const [timetableFormData, setTimetableFormData] = useState({
    title: "",
    description: "",
    academic_year: "",
    semester: "",
    is_active: true
  });

  const handleDepartmentChange = (department: string) => {
    setSelectedDepartment(department);
    resetTimetableForm();
    // If Physical Education is selected and user was on timetables tab, switch to staff tab
    if (department === 'Physical Education' && activeTab === 'timetables') {
      setActiveTab('staff');
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleTimetableInputChange = (field: string, value: any) => {
    setTimetableFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateFile = (file: File): string | null => {
    // File size check - 200KB limit
    const maxSize = 200 * 1024; // 200KB
    if (file.size > maxSize) {
      return `File too large (${Math.round(file.size/1024)}KB). Please compress to under 200KB.`;
    }

    // File type check
    if (file.type !== 'application/pdf') {
      return "Only PDF files are allowed.";
    }

    return null;
  };

  const uploadFileToStorage = async (file: File): Promise<string> => {
    const sanitizedDepartment = selectedDepartment.toLowerCase().replace(/\s+/g, '-');
    const timestamp = Date.now();
    const fileName = `${sanitizedDepartment}_timetable_${timestamp}.pdf`;
    const filePath = `timetables/${fileName}`;

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

  const handleTimetableSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    
    try {
      if (!timetableFormData.title.trim() || !selectedDepartment) {
        throw new Error("Please fill in all required fields");
      }

      const fileInput = fileInputRef.current;
      const file = fileInput?.files?.[0];
      
      if (!editingTimetable && !file) {
        throw new Error("Please select a file to upload");
      }

      let fileUrl = editingTimetable?.file_url || "";
      
      if (file) {
        // Validate file before upload
        const validationError = validateFile(file);
        if (validationError) {
          throw new Error(validationError);
        }

        // Additional check for file content
        console.log(`Uploading file: ${file.name}, Size: ${file.size} bytes (${Math.round(file.size/1024)}KB)`);
        
        fileUrl = await uploadFileToStorage(file);
      }

      const timetableData = {
        department: selectedDepartment,
        title: timetableFormData.title.trim(),
        description: timetableFormData.description?.trim() || null,
        file_url: fileUrl,
        academic_year: timetableFormData.academic_year?.trim() || null,
        semester: timetableFormData.semester?.trim() || null,
        is_active: timetableFormData.is_active
      };

      let error;
      if (editingTimetable) {
        ({ error } = await supabase
          .from("department_timetables")
          .update(timetableData)
          .eq("id", editingTimetable.id));
      } else {
        ({ error } = await supabase
          .from("department_timetables")
          .insert([timetableData]));
      }

      if (error) throw error;

      toast({
        title: "Success",
        description: `Timetable ${editingTimetable ? 'updated' : 'uploaded'} successfully`
      });

      resetTimetableForm();
      refetchTimetables();
    } catch (error: any) {
      console.error("Timetable submission error:", error);
      toast({
        title: "Error",
        description: error.message || `Failed to ${editingTimetable ? 'update' : 'upload'} timetable`,
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const handleTimetableEdit = (timetable: DepartmentTimetable) => {
    setEditingTimetable(timetable);
    setTimetableFormData({
      title: timetable.title,
      description: timetable.description || "",
      academic_year: timetable.academic_year || "",
      semester: timetable.semester || "",
      is_active: timetable.is_active
    });
  };

  const handleTimetableDelete = async () => {
    if (!selectedTimetableToDelete) return;

    try {
      const { error } = await supabase
        .from("department_timetables")
        .delete()
        .eq("id", selectedTimetableToDelete);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Timetable deleted successfully"
      });

      refetchTimetables();
    } catch (error) {
      console.error("Error deleting timetable:", error);
      toast({
        title: "Error",
        description: "Failed to delete timetable",
        variant: "destructive"
      });
    } finally {
      setDeleteDialogOpen(false);
      setSelectedTimetableToDelete(null);
    }
  };

  const resetTimetableForm = () => {
    setTimetableFormData({
      title: "",
      description: "",
      academic_year: "",
      semester: "",
      is_active: true
    });
    setEditingTimetable(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center space-x-3">
        <BookOpen className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold text-foreground">Departments Management</h1>
      </div>

      {/* Department Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Select Department
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={selectedDepartment} onValueChange={handleDepartmentChange}>
            <SelectTrigger className="w-full md:w-96">
              <SelectValue placeholder="Choose a department to manage" />
            </SelectTrigger>
            <SelectContent>
              {DEPARTMENTS.map((dept) => (
                <SelectItem key={dept} value={dept}>
                  {dept}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {selectedDepartment && (
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="staff" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Staff ({staff.length})
            </TabsTrigger>
            {selectedDepartment !== 'Physical Education' && (
              <TabsTrigger value="timetables" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Timetables ({timetables.length})
              </TabsTrigger>
            )}
            {selectedDepartment === 'Physical Education' && (
              <TabsTrigger value="achievements" className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                Student Achievements
              </TabsTrigger>
            )}
          </TabsList>

          {/* Staff Tab */}
          <TabsContent value="staff" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  {selectedDepartment} - Staff Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                {staffLoading ? (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-2 text-muted-foreground">Loading staff...</p>
                  </div>
                ) : staff.length > 0 ? (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Designation</TableHead>
                          <TableHead className="hidden md:table-cell">Email</TableHead>
                          <TableHead className="hidden md:table-cell">Phone</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {staff.map((member) => (
                          <TableRow key={member.id}>
                            <TableCell className="font-medium">{member.name}</TableCell>
                            <TableCell>{member.designation}</TableCell>
                            <TableCell className="hidden md:table-cell">{member.email || "N/A"}</TableCell>
                            <TableCell className="hidden md:table-cell">{member.phone || "N/A"}</TableCell>
                            <TableCell>
                              <Badge variant={member.is_active ? "default" : "secondary"}>
                                {member.is_active ? "Active" : "Inactive"}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      No staff members found for {selectedDepartment}. 
                      Use the Staff section to add members to this department.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Timetables Tab */}
          <TabsContent value="timetables" className="space-y-6">
            {/* Upload Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  {editingTimetable ? "Edit Timetable" : "Upload New Timetable"}
                  <span className="text-sm font-normal text-muted-foreground">
                    for {selectedDepartment}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTimetableSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        value={timetableFormData.title}
                        onChange={(e) => handleTimetableInputChange("title", e.target.value)}
                        placeholder="Enter timetable title"
                        required
                        className="w-full"
                      />
                    </div>

                    <div className="flex items-center space-x-3 pt-8">
                      <Switch
                        checked={timetableFormData.is_active}
                        onCheckedChange={(checked) => handleTimetableInputChange("is_active", checked)}
                      />
                      <Label>Active Status</Label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={timetableFormData.description}
                      onChange={(e) => handleTimetableInputChange("description", e.target.value)}
                      placeholder="Enter timetable description (optional)"
                      rows={3}
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="academic_year">Academic Year</Label>
                      <Input
                        id="academic_year"
                        value={timetableFormData.academic_year}
                        onChange={(e) => handleTimetableInputChange("academic_year", e.target.value)}
                        placeholder="e.g., 2024-25"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="semester">Semester</Label>
                      <Input
                        id="semester"
                        value={timetableFormData.semester}
                        onChange={(e) => handleTimetableInputChange("semester", e.target.value)}
                        placeholder="e.g., I, II, III"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="file">PDF File {!editingTimetable && "*"}</Label>
                    <Input
                      id="file"
                      type="file"
                      accept=".pdf"
                      ref={fileInputRef}
                      className="w-full"
                    />
                    <p className="text-sm text-muted-foreground">
                      {!editingTimetable && "Required: "}
                      PDF files only, maximum size 200KB. 
                      <a 
                        href="https://www.ilovepdf.com/compress_pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary hover:underline ml-1"
                      >
                        Compress PDF online
                      </a>
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button 
                      type="submit" 
                      disabled={uploading} 
                      className="flex-1 sm:flex-none"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      {uploading ? "Processing..." : editingTimetable ? "Update Timetable" : "Upload Timetable"}
                    </Button>
                    {editingTimetable && (
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={resetTimetableForm}
                        className="flex-1 sm:flex-none"
                      >
                        Cancel Edit
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Manage Timetables */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  Manage Timetables ({timetables.length})
                  <span className="text-sm font-normal text-muted-foreground ml-2">
                    {selectedDepartment}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {timetablesLoading ? (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-2 text-muted-foreground">Loading timetables...</p>
                  </div>
                ) : timetables.length > 0 ? (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="min-w-[200px]">Title</TableHead>
                          <TableHead className="hidden sm:table-cell">Academic Year</TableHead>
                          <TableHead className="hidden sm:table-cell">Semester</TableHead>
                          <TableHead className="hidden md:table-cell">Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {timetables.map((timetable) => (
                          <TableRow key={timetable.id}>
                            <TableCell className="font-medium">
                              <div>
                                <div className="font-semibold">{timetable.title}</div>
                                {timetable.description && (
                                  <div className="text-xs text-muted-foreground mt-1 sm:hidden">
                                    {timetable.description.slice(0, 50)}...
                                  </div>
                                )}
                                <div className="flex gap-1 mt-1 sm:hidden">
                                  {timetable.academic_year && (
                                    <Badge variant="outline" className="text-xs">
                                      {timetable.academic_year}
                                    </Badge>
                                  )}
                                  {timetable.semester && (
                                    <Badge variant="outline" className="text-xs">
                                      Sem {timetable.semester}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              {timetable.academic_year || "N/A"}
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              {timetable.semester || "N/A"}
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                              <Badge variant={timetable.is_active ? "default" : "secondary"}>
                                {timetable.is_active ? "Active" : "Inactive"}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-1">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => window.open(timetable.file_url, '_blank')}
                                  className="h-8 w-8 p-0"
                                  title="View PDF"
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleTimetableEdit(timetable)}
                                  className="h-8 w-8 p-0"
                                  title="Edit"
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => {
                                    setSelectedTimetableToDelete(timetable.id);
                                    setDeleteDialogOpen(true);
                                  }}
                                  className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                                  title="Delete"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      No timetables uploaded yet for {selectedDepartment}.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Student Achievements Tab - Only for Physical Education */}
          {selectedDepartment === 'Physical Education' && (
            <TabsContent value="achievements" className="space-y-6">
              <StudentAchievementsAdmin />
            </TabsContent>
          )}
        </Tabs>
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Timetable</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this timetable? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleTimetableDelete} 
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DepartmentsAdmin;