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
import { Plus, Users, Edit, Trash2, Mail, Phone, User, Upload, Minus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLeadership } from "@/hooks/useLeadership";

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

interface Leadership {
  id: string;
  position: string;
  name: string;
  designation: string;
  department?: string;
  email?: string;
  phone?: string;
  photo_url?: string;
  bio?: string;
  qualifications?: string;
  experience?: string;
  specialization?: string;
  message?: string;
  achievements?: string[];
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

  // Leadership management state
  const { leadership, loading: leadershipLoading, error: leadershipError, refetch: refetchLeadership } = useLeadership();
  const [leadershipFormData, setLeadershipFormData] = useState({
    position: 'chairman',
    name: '',
    designation: '',
    department: '',
    email: '',
    phone: '',
    bio: '',
    qualifications: '',
    experience: '',
    specialization: '',
    message: '',
    achievements: [''],
    is_active: true
  });
  const [editingLeadershipId, setEditingLeadershipId] = useState<string | null>(null);
  const [leadershipPhotoFile, setLeadershipPhotoFile] = useState<File | null>(null);

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

  // Leadership management functions
  const handleLeadershipPhotoUpload = async (file: File): Promise<string | null> => {
    try {
      setUploading(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `leadership/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('staff-photos')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('staff-photos')
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      console.error('Error uploading photo:', error);
      toast({
        title: "Error",
        description: "Failed to upload photo",
        variant: "destructive"
      });
      return null;
    } finally {
      setUploading(false);
    }
  };

  const handleLeadershipSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      let photoUrl = null;
      if (leadershipPhotoFile) {
        photoUrl = await handleLeadershipPhotoUpload(leadershipPhotoFile);
        if (!photoUrl) return;
      }

      const leadershipData = {
        ...leadershipFormData,
        photo_url: photoUrl || (editingLeadershipId ? leadership.find(l => l.id === editingLeadershipId)?.photo_url : null),
        achievements: leadershipFormData.achievements.filter(a => a.trim() !== '')
      };

      if (editingLeadershipId) {
        const { error } = await supabase
          .from('leadership')
          .update(leadershipData)
          .eq('id', editingLeadershipId);

        if (error) throw error;
        toast({
          title: "Success",
          description: "Leadership updated successfully!"
        });
      } else {
        const { error } = await supabase
          .from('leadership')
          .insert([leadershipData]);

        if (error) throw error;
        toast({
          title: "Success",
          description: "Leadership added successfully!"
        });
      }

      resetLeadershipForm();
      refetchLeadership();
    } catch (error) {
      console.error('Error saving leadership:', error);
      toast({
        title: "Error",
        description: "Failed to save leadership",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const handleLeadershipEdit = (leadership: Leadership) => {
    setLeadershipFormData({
      position: leadership.position,
      name: leadership.name,
      designation: leadership.designation,
      department: leadership.department || '',
      email: leadership.email || '',
      phone: leadership.phone || '',
      bio: leadership.bio || '',
      qualifications: leadership.qualifications || '',
      experience: leadership.experience || '',
      specialization: leadership.specialization || '',
      message: leadership.message || '',
      achievements: leadership.achievements || [''],
      is_active: leadership.is_active
    });
    setEditingLeadershipId(leadership.id);
    setLeadershipPhotoFile(null);
  };

  const handleLeadershipDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this leadership entry?')) return;

    try {
      const { error } = await supabase
        .from('leadership')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Leadership deleted successfully!"
      });
      refetchLeadership();
    } catch (error) {
      console.error('Error deleting leadership:', error);
      toast({
        title: "Error",
        description: "Failed to delete leadership",
        variant: "destructive"
      });
    }
  };

  const resetLeadershipForm = () => {
    setLeadershipFormData({
      position: 'chairman',
      name: '',
      designation: '',
      department: '',
      email: '',
      phone: '',
      bio: '',
      qualifications: '',
      experience: '',
      specialization: '',
      message: '',
      achievements: [''],
      is_active: true
    });
    setEditingLeadershipId(null);
    setLeadershipPhotoFile(null);
  };

  const addAchievement = () => {
    setLeadershipFormData({
      ...leadershipFormData,
      achievements: [...leadershipFormData.achievements, '']
    });
  };

  const removeAchievement = (index: number) => {
    setLeadershipFormData({
      ...leadershipFormData,
      achievements: leadershipFormData.achievements.filter((_, i) => i !== index)
    });
  };

  const updateAchievement = (index: number, value: string) => {
    const newAchievements = [...leadershipFormData.achievements];
    newAchievements[index] = value;
    setLeadershipFormData({
      ...leadershipFormData,
      achievements: newAchievements
    });
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
          <TabsTrigger value="leadership">Leadership</TabsTrigger>
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

        <TabsContent value="leadership" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Leadership Form */}
            <div className="bg-card rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">
                {editingLeadershipId ? 'Edit Leadership' : 'Add Leadership'}
              </h2>
              
              <form onSubmit={handleLeadershipSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="position">Position</Label>
                  <Select
                    value={leadershipFormData.position}
                    onValueChange={(value) => setLeadershipFormData({...leadershipFormData, position: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chairman">Chairman</SelectItem>
                      <SelectItem value="principal">Principal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={leadershipFormData.name}
                    onChange={(e) => setLeadershipFormData({...leadershipFormData, name: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="designation">Designation *</Label>
                  <Input
                    id="designation"
                    type="text"
                    value={leadershipFormData.designation}
                    onChange={(e) => setLeadershipFormData({...leadershipFormData, designation: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    type="text"
                    value={leadershipFormData.department}
                    onChange={(e) => setLeadershipFormData({...leadershipFormData, department: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={leadershipFormData.email}
                    onChange={(e) => setLeadershipFormData({...leadershipFormData, email: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="text"
                    value={leadershipFormData.phone}
                    onChange={(e) => setLeadershipFormData({...leadershipFormData, phone: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="qualifications">Qualifications</Label>
                  <Textarea
                    id="qualifications"
                    value={leadershipFormData.qualifications}
                    onChange={(e) => setLeadershipFormData({...leadershipFormData, qualifications: e.target.value})}
                    rows={2}
                  />
                </div>

                <div>
                  <Label htmlFor="experience">Experience</Label>
                  <Textarea
                    id="experience"
                    value={leadershipFormData.experience}
                    onChange={(e) => setLeadershipFormData({...leadershipFormData, experience: e.target.value})}
                    rows={2}
                  />
                </div>

                <div>
                  <Label htmlFor="specialization">Specialization</Label>
                  <Input
                    id="specialization"
                    type="text"
                    value={leadershipFormData.specialization}
                    onChange={(e) => setLeadershipFormData({...leadershipFormData, specialization: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="bio">Biography</Label>
                  <Textarea
                    id="bio"
                    value={leadershipFormData.bio}
                    onChange={(e) => setLeadershipFormData({...leadershipFormData, bio: e.target.value})}
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={leadershipFormData.message}
                    onChange={(e) => setLeadershipFormData({...leadershipFormData, message: e.target.value})}
                    rows={3}
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <Label>Achievements</Label>
                    <Button
                      type="button"
                      onClick={addAchievement}
                      size="sm"
                      variant="outline"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {leadershipFormData.achievements.map((achievement, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          value={achievement}
                          onChange={(e) => updateAchievement(index, e.target.value)}
                          placeholder={`Achievement ${index + 1}`}
                        />
                        {leadershipFormData.achievements.length > 1 && (
                          <Button
                            type="button"
                            onClick={() => removeAchievement(index)}
                            size="sm"
                            variant="outline"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="photo">Profile Photo</Label>
                  <Input
                    id="photo"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setLeadershipPhotoFile(e.target.files?.[0] || null)}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="is_active"
                    checked={leadershipFormData.is_active}
                    onCheckedChange={(checked) => setLeadershipFormData({...leadershipFormData, is_active: checked})}
                  />
                  <Label htmlFor="is_active">Active</Label>
                </div>

                <div className="flex gap-4">
                  <Button type="submit" disabled={uploading}>
                    <Upload className="w-4 h-4 mr-2" />
                    {uploading ? 'Saving...' : editingLeadershipId ? 'Update Leadership' : 'Add Leadership'}
                  </Button>
                  
                  {editingLeadershipId && (
                    <Button type="button" variant="outline" onClick={resetLeadershipForm}>
                      Cancel Edit
                    </Button>
                  )}
                </div>
              </form>
            </div>

            {/* Leadership List */}
            <div className="bg-card rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Current Leadership</h2>
              
              {leadershipLoading ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Loading leadership...</p>
                </div>
              ) : leadershipError ? (
                <div className="text-center py-8">
                  <p className="text-red-500">Error: {leadershipError}</p>
                </div>
              ) : leadership.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No leadership entries found.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {leadership.map((leader) => (
                    <div key={leader.id} className="border rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          {leader.photo_url ? (
                            <img 
                              src={leader.photo_url} 
                              alt={leader.name}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-sm font-semibold">
                              {getInitials(leader.name)}
                            </div>
                          )}
                        </div>
                        <div className="flex-grow min-w-0">
                          <h3 className="font-semibold text-lg">{leader.name}</h3>
                          <p className="text-sm text-primary font-medium capitalize">{leader.position}</p>
                          <p className="text-sm text-muted-foreground">{leader.designation}</p>
                          {leader.department && (
                            <p className="text-sm text-muted-foreground">{leader.department}</p>
                          )}
                          {leader.email && (
                            <p className="text-sm text-muted-foreground">{leader.email}</p>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            onClick={() => handleLeadershipEdit(leader)}
                            size="sm"
                            variant="outline"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            onClick={() => handleLeadershipDelete(leader.id)}
                            size="sm"
                            variant="outline"
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StaffAdmin;