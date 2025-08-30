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
import { Upload, Edit, Trash2, BookOpen, Eye, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import useStaff from "@/hooks/useStaff";

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
  const [timetables, setTimetables] = useState<DepartmentTimetable[]>([]);
  const [timetablesLoading, setTimetablesLoading] = useState(false);
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

  // Fetch timetables when department changes
  const fetchTimetables = async (department: string) => {
    if (!department) return;
    
    setTimetablesLoading(true);
    try {
      const { data, error } = await supabase
        .from("department_timetables")
        .select("*")
        .eq("department", department)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setTimetables(data || []);
    } catch (error) {
      console.error("Error fetching timetables:", error);
      toast({
        title: "Error",
        description: "Failed to fetch timetables",
        variant: "destructive"
      });
    } finally {
      setTimetablesLoading(false);
    }
  };

  const handleDepartmentChange = (department: string) => {
    setSelectedDepartment(department);
    if (activeTab === "timetables") {
      fetchTimetables(department);
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === "timetables" && selectedDepartment) {
      fetchTimetables(selectedDepartment);
    }
  };

  const handleTimetableInputChange = (field: string, value: any) => {
    setTimetableFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = async (file: File) => {
    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `timetables/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('admin-uploads')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('admin-uploads')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    } finally {
      setUploading(false);
    }
  };

  const handleTimetableSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!timetableFormData.title.trim() || !selectedDepartment) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields and select a department",
        variant: "destructive"
      });
      return;
    }

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];
    
    if (!editingTimetable && !file) {
      toast({
        title: "Validation Error",
        description: "Please select a file to upload",
        variant: "destructive"
      });
      return;
    }

    try {
      let fileUrl = editingTimetable?.file_url || "";
      
      if (file) {
        fileUrl = await handleFileUpload(file);
      }

      const timetableData = {
        department: selectedDepartment,
        title: timetableFormData.title,
        description: timetableFormData.description || null,
        file_url: fileUrl,
        academic_year: timetableFormData.academic_year || null,
        semester: timetableFormData.semester || null,
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
      fetchTimetables(selectedDepartment);
    } catch (error) {
      console.error("Error saving timetable:", error);
      toast({
        title: "Error",
        description: `Failed to ${editingTimetable ? 'update' : 'upload'} timetable`,
        variant: "destructive"
      });
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

      fetchTimetables(selectedDepartment);
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
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <BookOpen className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">Departments Management</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Select Department</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={selectedDepartment} onValueChange={handleDepartmentChange}>
            <SelectTrigger className="w-full md:w-64">
              <SelectValue placeholder="Select a department" />
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
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="staff">
              <Users className="h-4 w-4 mr-2" />
              Staff ({staff.length})
            </TabsTrigger>
            <TabsTrigger value="timetables">
              <BookOpen className="h-4 w-4 mr-2" />
              Timetables ({timetables.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="staff" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{selectedDepartment} - Staff Members</CardTitle>
              </CardHeader>
              <CardContent>
                {staffLoading ? (
                  <div className="text-center py-8">Loading staff...</div>
                ) : staff.length > 0 ? (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Designation</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Phone</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {staff.map((member) => (
                          <TableRow key={member.id}>
                            <TableCell className="font-medium">{member.name}</TableCell>
                            <TableCell>{member.designation}</TableCell>
                            <TableCell>{member.email || "N/A"}</TableCell>
                            <TableCell>{member.phone || "N/A"}</TableCell>
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
                  <div className="text-center py-8 text-muted-foreground">
                    No staff members found for {selectedDepartment}. 
                    Use the Staff section to add members to this department.
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timetables" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span>{editingTimetable ? "Edit Timetable" : "Upload New Timetable"}</span>
                  <span className="text-sm text-muted-foreground font-normal">
                    for {selectedDepartment}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTimetableSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={timetableFormData.title}
                      onChange={(e) => handleTimetableInputChange("title", e.target.value)}
                      placeholder="Enter timetable title"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={timetableFormData.description}
                      onChange={(e) => handleTimetableInputChange("description", e.target.value)}
                      placeholder="Enter timetable description"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="academic_year">Academic Year</Label>
                      <Input
                        id="academic_year"
                        value={timetableFormData.academic_year}
                        onChange={(e) => handleTimetableInputChange("academic_year", e.target.value)}
                        placeholder="e.g., 2023-24"
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

                    <div className="flex items-center space-x-2 pt-8">
                      <Switch
                        checked={timetableFormData.is_active}
                        onCheckedChange={(checked) => handleTimetableInputChange("is_active", checked)}
                      />
                      <Label>Active</Label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="file">File {!editingTimetable && "*"}</Label>
                    <Input
                      id="file"
                      type="file"
                      accept=".pdf,.doc,.docx,.xls,.xlsx"
                      ref={fileInputRef}
                    />
                    {!editingTimetable && <p className="text-sm text-muted-foreground">Please select a file to upload (PDF, DOC, XLS)</p>}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button type="submit" disabled={uploading} className="flex-1">
                      <Upload className="h-4 w-4 mr-2" />
                      {uploading ? "Uploading..." : editingTimetable ? "Update Timetable" : "Upload Timetable"}
                    </Button>
                    {editingTimetable && (
                      <Button type="button" variant="outline" onClick={resetTimetableForm} className="flex-1 sm:flex-none">
                        Cancel Edit
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span>Manage Timetables ({timetables.length})</span>
                  <span className="text-sm text-muted-foreground font-normal">
                    {selectedDepartment}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {timetablesLoading ? (
                  <div className="text-center py-8">Loading timetables...</div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="min-w-[150px]">Title</TableHead>
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
                                 >
                                   <Eye className="h-4 w-4" />
                                 </Button>
                                 <Button
                                   variant="ghost"
                                   size="sm"
                                   onClick={() => handleTimetableEdit(timetable)}
                                   className="h-8 w-8 p-0"
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
                                 >
                                   <Trash2 className="h-4 w-4" />
                                 </Button>
                               </div>
                             </TableCell>
                           </TableRow>
                         ))}
                       </TableBody>
                    </Table>

                    {timetables.length === 0 && (
                      <div className="text-center py-8 text-muted-foreground">
                        No timetables uploaded yet for {selectedDepartment}.
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}

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
            <AlertDialogAction onClick={handleTimetableDelete} className="bg-destructive text-destructive-foreground">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DepartmentsAdmin;