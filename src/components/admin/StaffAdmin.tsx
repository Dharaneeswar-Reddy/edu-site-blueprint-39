import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Users, Edit, Trash2, Mail, Phone, User, Upload } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Staff {
  id: string;
  name: string;
  designation: string;
  department?: string;
  email?: string;
  phone?: string;
  photo_url?: string;
  bio?: string;
  qualification?: string;
  experience?: string;
  staff_type: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

const DEPARTMENTS = [
  "Computer Science",
  "Physics", 
  "Chemistry",
  "Mathematics",
  "Commerce",
  "English",
  "Telugu",
  "Hindi",
  "Botany",
  "Zoology",
  "Economics",
  "History",
  "Political Science",
  "Physical Education",
  "Library",
  "Administration"
];

const STAFF_TYPES = [
  { value: "teaching", label: "Teaching Staff" },
  { value: "non-teaching", label: "Non-Teaching Staff" },
  { value: "administration", label: "Administration" }
];

const StaffAdmin = () => {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [editingStaff, setEditingStaff] = useState<Staff | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedStaffType, setSelectedStaffType] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    department: "",
    email: "",
    phone: "",
    bio: "",
    qualification: "",
    experience: "",
    staff_type: "teaching",
    is_active: true,
    photo: null as File | null,
  });

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("staff")
        .select("*")
        .order("department", { ascending: true })
        .order("name", { ascending: true });

      if (error) throw error;
      setStaff(data || []);
    } catch (error) {
      console.error("Error fetching staff:", error);
      toast({
        title: "Error",
        description: "Failed to fetch staff data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePhotoUpload = async (file: File) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `staff-photos/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('staff-photos')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('staff-photos')
      .getPublicUrl(filePath);

    return publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.designation || !formData.staff_type) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    try {
      let photoUrl = editingStaff?.photo_url || "";
      
      if (formData.photo) {
        photoUrl = await handlePhotoUpload(formData.photo);
      }

      const staffData = {
        name: formData.name,
        designation: formData.designation,
        department: formData.department || null,
        email: formData.email || null,
        phone: formData.phone || null,
        photo_url: photoUrl || null,
        bio: formData.bio || null,
        qualification: formData.qualification || null,
        experience: formData.experience || null,
        staff_type: formData.staff_type,
        is_active: formData.is_active,
      };

      if (editingStaff) {
        const { error } = await supabase
          .from("staff")
          .update(staffData)
          .eq("id", editingStaff.id);

        if (error) throw error;
        toast({
          title: "Success",
          description: "Staff member updated successfully",
        });
      } else {
        const { error } = await supabase
          .from("staff")
          .insert([staffData]);

        if (error) throw error;
        toast({
          title: "Success",
          description: "Staff member added successfully",
        });
      }

      resetForm();
      fetchStaff();
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to save staff member",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (member: Staff) => {
    setEditingStaff(member);
    setFormData({
      name: member.name,
      designation: member.designation,
      department: member.department || "",
      email: member.email || "",
      phone: member.phone || "",
      bio: member.bio || "",
      qualification: member.qualification || "",
      experience: member.experience || "",
      staff_type: member.staff_type,
      is_active: member.is_active,
      photo: null,
    });
  };

  const handleDelete = async (staffId: string) => {
    try {
      const { error } = await supabase
        .from("staff")
        .delete()
        .eq("id", staffId);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Staff member deleted successfully",
      });
      fetchStaff();
    } catch (error) {
      console.error("Error deleting staff:", error);
      toast({
        title: "Error",
        description: "Failed to delete staff member",
        variant: "destructive",
      });
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      designation: "",
      department: "",
      email: "",
      phone: "",
      bio: "",
      qualification: "",
      experience: "",
      staff_type: "teaching",
      is_active: true,
      photo: null,
    });
    setEditingStaff(null);
  };

  const filteredStaff = staff.filter(member => {
    const departmentMatch = !selectedDepartment || selectedDepartment === "all" || member.department === selectedDepartment;
    const typeMatch = !selectedStaffType || selectedStaffType === "all" || member.staff_type === selectedStaffType;
    return departmentMatch && typeMatch;
  });

  const getStaffTypeLabel = (type: string) => {
    const staffType = STAFF_TYPES.find(t => t.value === type);
    return staffType?.label || type;
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Staff Management</h1>
          <p className="text-muted-foreground">
            Manage teaching and non-teaching staff profiles
          </p>
        </div>
      </div>

      <Tabs defaultValue="add" className="space-y-6">
        <TabsList>
          <TabsTrigger value="add">Add/Edit Staff</TabsTrigger>
          <TabsTrigger value="manage">Manage Staff</TabsTrigger>
        </TabsList>

        <TabsContent value="add">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                {editingStaff ? "Edit Staff Member" : "Add New Staff Member"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="designation">Designation *</Label>
                    <Input
                      id="designation"
                      value={formData.designation}
                      onChange={(e) => setFormData(prev => ({ ...prev, designation: e.target.value }))}
                      placeholder="e.g., Assistant Professor, Lecturer"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="staff_type">Staff Type *</Label>
                    <Select
                      value={formData.staff_type}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, staff_type: value }))}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select staff type" />
                      </SelectTrigger>
                      <SelectContent>
                        {STAFF_TYPES.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select
                      value={formData.department}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, department: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {DEPARTMENTS.map((dept) => (
                          <SelectItem key={dept} value={dept}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="Enter email address"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="qualification">Qualification</Label>
                    <Input
                      id="qualification"
                      value={formData.qualification}
                      onChange={(e) => setFormData(prev => ({ ...prev, qualification: e.target.value }))}
                      placeholder="e.g., M.Sc., Ph.D."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience</Label>
                    <Input
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                      placeholder="e.g., 5 years"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="photo">Profile Photo</Label>
                    <Input
                      id="photo"
                      type="file"
                      accept="image/*"
                      onChange={(e) => setFormData(prev => ({ ...prev, photo: e.target.files?.[0] || null }))}
                    />
                    <p className="text-xs text-muted-foreground">
                      Upload a profile photo (JPG, PNG - Max 5MB)
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Biography</Label>
                  <Textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                    placeholder="Enter brief biography"
                    rows={3}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="is_active"
                    checked={formData.is_active}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_active: checked }))}
                  />
                  <Label htmlFor="is_active">Active Staff Member</Label>
                </div>

                <div className="flex gap-2">
                  <Button type="submit" disabled={uploading}>
                    {uploading ? "Saving..." : editingStaff ? "Update Staff Member" : "Add Staff Member"}
                  </Button>
                  {editingStaff && (
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
                <Users className="h-5 w-5" />
                Staff Directory
              </CardTitle>
              <div className="flex gap-2">
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by department" />
                  </SelectTrigger>
                  <SelectContent className="max-h-64 overflow-y-auto">
                    <SelectItem value="all">All Departments</SelectItem>
                    {DEPARTMENTS.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedStaffType} onValueChange={setSelectedStaffType}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by staff type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Staff Types</SelectItem>
                    {STAFF_TYPES.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {((selectedDepartment && selectedDepartment !== "all") || (selectedStaffType && selectedStaffType !== "all")) && (
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSelectedDepartment("all");
                      setSelectedStaffType("all");
                    }}
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-center py-4">Loading staff data...</div>
              ) : filteredStaff.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No staff members found. Add your first staff member to get started.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Photo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Designation</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredStaff.map((member) => (
                        <TableRow key={member.id}>
                          <TableCell>
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={member.photo_url} alt={member.name} />
                              <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                            </Avatar>
                          </TableCell>
                          <TableCell className="font-medium">{member.name}</TableCell>
                          <TableCell>{member.designation}</TableCell>
                          <TableCell>{member.department || "-"}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">
                              {getStaffTypeLabel(member.staff_type)}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              {member.email && (
                                <div className="flex items-center gap-1 text-xs">
                                  <Mail className="h-3 w-3" />
                                  {member.email}
                                </div>
                              )}
                              {member.phone && (
                                <div className="flex items-center gap-1 text-xs">
                                  <Phone className="h-3 w-3" />
                                  {member.phone}
                                </div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant={member.is_active ? "default" : "secondary"}>
                              {member.is_active ? "Active" : "Inactive"}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleEdit(member)}
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
                                    <AlertDialogTitle>Delete Staff Member</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Are you sure you want to delete {member.name}? This action cannot be undone.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => handleDelete(member.id)}>
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

export default StaffAdmin;