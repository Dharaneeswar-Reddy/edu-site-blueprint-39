import React, { useState } from "react";
import { useStudentSupportServices, useStudentSupportReports, useStudentSupportStaff, useStudentSupportGallery } from "@/hooks/useStudentSupportServices";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Plus, Edit, Trash2, Eye, Upload } from "lucide-react";

const serviceOptions = [
  "NCC", "Women Empowerment", "Gym Sports"
];

const serviceNameMap = {
  "NCC": "NCC", 
  "Women Empowerment": "Women Empowerment",
  "Gym Sports": "Gym Sports"
};

export default function StudentSupportAdmin() {
  const [activeTab, setActiveTab] = useState("services");
  const [selectedService, setSelectedService] = useState("NCC");
  
  // Service Management
  const [serviceForm, setServiceForm] = useState({
    id: "",
    service_name: "",
    title: "",
    description: "",
    vision: "",
    mission: "",
    objectives: [""]
  });
  
  // Report Management
  const [reportForm, setReportForm] = useState({
    id: "",
    service_name: "",
    title: "",
    description: "",
    academic_year: "",
    file_url: "",
    report_type: "NCC"
  });
  const [reportFile, setReportFile] = useState<File | null>(null);
  
  // Staff Management
  const [staffForm, setStaffForm] = useState({
    id: "",
    service_name: "",
    name: "",
    designation: "",
    department: "",
    email: "",
    phone: "",
    photo_url: "",
    display_order: 0
  });
  const [staffPhoto, setStaffPhoto] = useState<File | null>(null);
  
  // Gallery Management
  const [galleryForm, setGalleryForm] = useState({
    id: "",
    service_name: "",
    title: "",
    description: "",
    image_url: "",
    display_order: 0
  });
  const [galleryImage, setGalleryImage] = useState<File | null>(null);

  const [isServiceDialogOpen, setIsServiceDialogOpen] = useState(false);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
  const [isStaffDialogOpen, setIsStaffDialogOpen] = useState(false);
  const [isGalleryDialogOpen, setIsGalleryDialogOpen] = useState(false);

  const { services, refetch: refetchServices } = useStudentSupportServices(selectedService);
  const { reports, refetch: refetchReports } = useStudentSupportReports(selectedService);
  const { staff, refetch: refetchStaff } = useStudentSupportStaff(selectedService);
  const { gallery, refetch: refetchGallery } = useStudentSupportGallery(selectedService);

  const uploadFile = async (file: File, bucket: string, folder: string) => {
    // Check file size limits - 500KB for documents, 200KB for images
    const maxSize = bucket === 'admin-uploads' && folder === 'reports' ? 500 * 1024 : 200 * 1024; // 500KB for docs, 200KB for images
    if (file.size > maxSize) {
      const sizeLimitKB = maxSize / 1024;
      throw new Error(`File size exceeds ${sizeLimitKB}KB limit. Please choose a smaller file.`);
    }

    const fileExt = file.name.split('.').pop();
    const fileName = `${folder}/${Date.now()}.${fileExt}`;
    
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      });
    
    if (error) {
      console.error('Upload error:', error);
      if (error.message.includes('maximum allowed size')) {
        throw new Error('File size exceeds the maximum allowed limit. Please choose a smaller file.');
      }
      throw error;
    }
    
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(fileName);
    
    return publicUrl;
  };

  const handleServiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const serviceData = {
        service_name: serviceForm.service_name,
        title: serviceForm.title,
        description: serviceForm.description || null,
        vision: serviceForm.vision || null,
        mission: serviceForm.mission || null,
        objectives: serviceForm.objectives.filter(obj => obj.trim() !== "")
      };

      if (serviceForm.id) {
        const { error } = await supabase
          .from("student_support_services")
          .update(serviceData)
          .eq("id", serviceForm.id);
        
        if (error) throw error;
        toast.success("Service updated successfully");
      } else {
        const { error } = await supabase
          .from("student_support_services")
          .insert([serviceData]);
        
        if (error) throw error;
        toast.success("Service created successfully");
      }

      setServiceForm({
        id: "",
        service_name: "",
        title: "",
        description: "",
        vision: "",
        mission: "",
        objectives: [""]
      });
      setIsServiceDialogOpen(false);
      refetchServices();
    } catch (error) {
      console.error("Error saving service:", error);
      toast.error("Failed to save service");
    }
  };

  const handleReportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let fileUrl = reportForm.file_url;
      
      // Upload new file if provided
      if (reportFile) {
        fileUrl = await uploadFile(reportFile, 'admin-uploads', 'reports');
      }
      
      if (!fileUrl) {
        toast.error("Please upload a file");
        return;
      }
      
      const reportData = {
        service_name: selectedService,
        title: reportForm.title,
        description: reportForm.description || null,
        academic_year: reportForm.academic_year,
        file_url: fileUrl,
        report_type: reportForm.report_type
      };

      if (reportForm.id) {
        const { error } = await supabase
          .from("student_support_reports")
          .update(reportData)
          .eq("id", reportForm.id);
        
        if (error) throw error;
        toast.success("Report updated successfully");
      } else {
        const { error } = await supabase
          .from("student_support_reports")
          .insert([reportData]);
        
        if (error) throw error;
        toast.success("Report created successfully");
      }

      setReportForm({
        id: "",
        service_name: "",
        title: "",
        description: "",
        academic_year: "",
        file_url: "",
        report_type: "NCC"
      });
      setReportFile(null);
      setIsReportDialogOpen(false);
      refetchReports();
    } catch (error: any) {
      console.error("Error saving report:", error);
      toast.error(error.message || "Failed to save report");
    }
  };

  const handleStaffSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let photoUrl = staffForm.photo_url;
      
      // Upload new photo if provided
      if (staffPhoto) {
        photoUrl = await uploadFile(staffPhoto, 'admin-uploads', 'staff');
      }
      
      const staffData = {
        service_name: selectedService,
        name: staffForm.name,
        designation: staffForm.designation,
        department: staffForm.department || null,
        email: staffForm.email || null,
        phone: staffForm.phone || null,
        photo_url: photoUrl || null,
        display_order: staffForm.display_order
      };

      if (staffForm.id) {
        const { error } = await supabase
          .from("student_support_staff")
          .update(staffData)
          .eq("id", staffForm.id);
        
        if (error) throw error;
        toast.success("Staff updated successfully");
      } else {
        const { error } = await supabase
          .from("student_support_staff")
          .insert([staffData]);
        
        if (error) throw error;
        toast.success("Staff created successfully");
      }

      setStaffForm({
        id: "",
        service_name: "",
        name: "",
        designation: "",
        department: "",
        email: "",
        phone: "",
        photo_url: "",
        display_order: 0
      });
      setStaffPhoto(null);
      setIsStaffDialogOpen(false);
      refetchStaff();
    } catch (error: any) {
      console.error("Error saving staff:", error);
      toast.error(error.message || "Failed to save staff");
    }
  };

  const handleGallerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let imageUrl = galleryForm.image_url;
      
      // Upload new image if provided
      if (galleryImage) {
        imageUrl = await uploadFile(galleryImage, 'admin-uploads', 'gallery');
      }
      
      if (!imageUrl) {
        toast.error("Please upload an image");
        return;
      }
      
      const galleryData = {
        service_name: selectedService,
        title: galleryForm.title,
        description: galleryForm.description || null,
        image_url: imageUrl,
        display_order: galleryForm.display_order
      };

      if (galleryForm.id) {
        const { error } = await supabase
          .from("student_support_galleries")
          .update(galleryData)
          .eq("id", galleryForm.id);
        
        if (error) throw error;
        toast.success("Gallery item updated successfully");
      } else {
        const { error } = await supabase
          .from("student_support_galleries")
          .insert([galleryData]);
        
        if (error) throw error;
        toast.success("Gallery item created successfully");
      }

      setGalleryForm({
        id: "",
        service_name: "",
        title: "",
        description: "",
        image_url: "",
        display_order: 0
      });
      setGalleryImage(null);
      setIsGalleryDialogOpen(false);
      refetchGallery();
    } catch (error: any) {
      console.error("Error saving gallery item:", error);
      toast.error(error.message || "Failed to save gallery item");
    }
  };

  const handleDeleteService = async (id: string) => {
    if (!confirm("Are you sure you want to delete this service?")) return;
    
    try {
      const { error } = await supabase
        .from("student_support_services")
        .update({ is_active: false })
        .eq("id", id);
      
      if (error) throw error;
      toast.success("Service deleted successfully");
      refetchServices();
    } catch (error) {
      console.error("Error deleting service:", error);
      toast.error("Failed to delete service");
    }
  };

  const handleDeleteReport = async (id: string) => {
    if (!confirm("Are you sure you want to delete this report?")) return;
    
    try {
      const { error } = await supabase
        .from("student_support_reports")
        .update({ is_active: false })
        .eq("id", id);
      
      if (error) throw error;
      toast.success("Report deleted successfully");
      refetchReports();
    } catch (error) {
      console.error("Error deleting report:", error);
      toast.error("Failed to delete report");
    }
  };

  const handleDeleteStaff = async (id: string) => {
    if (!confirm("Are you sure you want to delete this staff member?")) return;
    
    try {
      const { error } = await supabase
        .from("student_support_staff")
        .update({ is_active: false })
        .eq("id", id);
      
      if (error) throw error;
      toast.success("Staff member deleted successfully");
      refetchStaff();
    } catch (error) {
      console.error("Error deleting staff member:", error);
      toast.error("Failed to delete staff member");
    }
  };

  const handleDeleteGallery = async (id: string) => {
    if (!confirm("Are you sure you want to delete this gallery item?")) return;
    
    try {
      const { error } = await supabase
        .from("student_support_galleries")
        .update({ is_active: false })
        .eq("id", id);
      
      if (error) throw error;
      toast.success("Gallery item deleted successfully");
      refetchGallery();
    } catch (error) {
      console.error("Error deleting gallery item:", error);
      toast.error("Failed to delete gallery item");
    }
  };

  const addObjective = () => {
    setServiceForm(prev => ({
      ...prev,
      objectives: [...prev.objectives, ""]
    }));
  };

  const updateObjective = (index: number, value: string) => {
    setServiceForm(prev => ({
      ...prev,
      objectives: prev.objectives.map((obj, i) => i === index ? value : obj)
    }));
  };

  const removeObjective = (index: number) => {
    setServiceForm(prev => ({
      ...prev,
      objectives: prev.objectives.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Student Support Services Management</h1>
        <div className="flex items-center gap-4">
          <label htmlFor="service-select" className="text-sm font-medium">Select Service:</label>
          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Choose service" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map(option => (
                <SelectItem key={option} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="services">Service Info</TabsTrigger>
          <TabsTrigger value="reports">Yearly Reports</TabsTrigger>
          <TabsTrigger value="staff">Staff</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
        </TabsList>

        <TabsContent value="services" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>{selectedService} - Service Information</CardTitle>
                <Dialog open={isServiceDialogOpen} onOpenChange={setIsServiceDialogOpen}>
                  <DialogTrigger asChild>
                    <Button onClick={() => setServiceForm({
                      id: "",
                      service_name: selectedService,
                      title: "",
                      description: "",
                      vision: "",
                      mission: "",
                      objectives: [""]
                    })}>
                      <Plus className="mr-2 h-4 w-4" /> Add Service Info
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{serviceForm.id ? "Edit" : "Add"} Service</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleServiceSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="service_name">Service Name</Label>
                        <Input
                          id="service_name"
                          value={serviceForm.service_name}
                          readOnly
                          className="bg-muted"
                        />
                      </div>
                      <div>
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          value={serviceForm.title}
                          onChange={(e) => setServiceForm(prev => ({ ...prev, title: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={serviceForm.description}
                          onChange={(e) => setServiceForm(prev => ({ ...prev, description: e.target.value }))}
                          rows={3}
                        />
                      </div>
                      <div>
                        <Label htmlFor="vision">Vision</Label>
                        <Textarea
                          id="vision"
                          value={serviceForm.vision}
                          onChange={(e) => setServiceForm(prev => ({ ...prev, vision: e.target.value }))}
                          rows={2}
                        />
                      </div>
                      <div>
                        <Label htmlFor="mission">Mission</Label>
                        <Textarea
                          id="mission"
                          value={serviceForm.mission}
                          onChange={(e) => setServiceForm(prev => ({ ...prev, mission: e.target.value }))}
                          rows={2}
                        />
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <Label>Objectives</Label>
                          <Button type="button" size="sm" onClick={addObjective}>
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        {serviceForm.objectives.map((objective, index) => (
                          <div key={index} className="flex gap-2 mb-2">
                            <Input
                              value={objective}
                              onChange={(e) => updateObjective(index, e.target.value)}
                              placeholder={`Objective ${index + 1}`}
                            />
                            {serviceForm.objectives.length > 1 && (
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => removeObjective(index)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button type="submit">Save</Button>
                        <Button type="button" variant="outline" onClick={() => setIsServiceDialogOpen(false)}>
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service Name</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Objectives</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {services.map((service) => (
                    <TableRow key={service.id}>
                      <TableCell>
                        <Badge variant="secondary">{service.service_name}</Badge>
                      </TableCell>
                      <TableCell>{service.title}</TableCell>
                      <TableCell>{service.objectives?.length || 0} objectives</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              setServiceForm({
                                id: service.id,
                                service_name: service.service_name,
                                title: service.title,
                                description: service.description || "",
                                vision: service.vision || "",
                                mission: service.mission || "",
                                objectives: service.objectives || [""]
                              });
                              setIsServiceDialogOpen(true);
                            }}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDeleteService(service.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Yearly Reports</CardTitle>
                <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
                  <DialogTrigger asChild>
                    <Button onClick={() => setReportForm({
                      id: "",
                      service_name: selectedService,
                      title: "",
                      description: "",
                      academic_year: "",
                      file_url: "",
                      report_type: "NCC"
                    })}>
                      <Plus className="mr-2 h-4 w-4" /> Add Report
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{reportForm.id ? "Edit" : "Add"} Report</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleReportSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          value={reportForm.title}
                          onChange={(e) => setReportForm(prev => ({ ...prev, title: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="academic_year">Academic Year</Label>
                        <Input
                          id="academic_year"
                          value={reportForm.academic_year}
                          onChange={(e) => setReportForm(prev => ({ ...prev, academic_year: e.target.value }))}
                          placeholder="2023-24"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="report_type">Report Type</Label>
                        <Select 
                          value={reportForm.report_type || "NCC"} 
                          onValueChange={(value) => setReportForm(prev => ({ ...prev, report_type: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select report type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="NCC">NCC</SelectItem>
                            <SelectItem value="NSS">NSS</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                         <Label htmlFor="report_file">Upload Document</Label>
                         <Input
                           id="report_file"
                           type="file"
                           accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                           onChange={(e) => setReportFile(e.target.files?.[0] || null)}
                           required={!reportForm.id}
                         />
                         <p className="text-xs text-muted-foreground mt-1">Maximum file size: 500KB. Supported formats: PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX</p>
                         {reportForm.file_url && (
                           <p className="text-sm text-muted-foreground mt-1">
                             Current file: <a href={reportForm.file_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View</a>
                           </p>
                         )}
                      </div>
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={reportForm.description}
                          onChange={(e) => setReportForm(prev => ({ ...prev, description: e.target.value }))}
                          rows={3}
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button type="submit">Save</Button>
                        <Button type="button" variant="outline" onClick={() => setIsReportDialogOpen(false)}>
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Report Type</TableHead>
                    <TableHead>Academic Year</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell>
                        <Badge variant="secondary">{report.service_name}</Badge>
                      </TableCell>
                      <TableCell>{report.title}</TableCell>
                      <TableCell>
                        <Badge variant={report.report_type === 'NSS' ? 'default' : 'outline'}>
                          {report.report_type || 'NCC'}
                        </Badge>
                      </TableCell>
                      <TableCell>{report.academic_year}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              setReportForm({
                                id: report.id,
                                service_name: report.service_name,
                                title: report.title,
                                description: report.description || "",
                                academic_year: report.academic_year,
                                file_url: report.file_url,
                                report_type: report.report_type || "NCC"
                              });
                              setIsReportDialogOpen(true);
                            }}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => window.open(report.file_url, '_blank')}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDeleteReport(report.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="staff" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Staff Members</CardTitle>
                <Dialog open={isStaffDialogOpen} onOpenChange={setIsStaffDialogOpen}>
                  <DialogTrigger asChild>
                    <Button onClick={() => setStaffForm({
                      id: "",
                      service_name: selectedService,
                      name: "",
                      designation: "",
                      department: "",
                      email: "",
                      phone: "",
                      photo_url: "",
                      display_order: 0
                    })}>
                      <Plus className="mr-2 h-4 w-4" /> Add Staff
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{staffForm.id ? "Edit" : "Add"} Staff Member</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleStaffSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={staffForm.name}
                          onChange={(e) => setStaffForm(prev => ({ ...prev, name: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="designation">Designation</Label>
                        <Input
                          id="designation"
                          value={staffForm.designation}
                          onChange={(e) => setStaffForm(prev => ({ ...prev, designation: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="department">Department</Label>
                        <Input
                          id="department"
                          value={staffForm.department}
                          onChange={(e) => setStaffForm(prev => ({ ...prev, department: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={staffForm.email}
                          onChange={(e) => setStaffForm(prev => ({ ...prev, email: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={staffForm.phone}
                          onChange={(e) => setStaffForm(prev => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>
                      <div>
                         <Label htmlFor="staff_photo">Upload Photo</Label>
                         <Input
                           id="staff_photo"
                           type="file"
                           accept="image/*"
                           onChange={(e) => setStaffPhoto(e.target.files?.[0] || null)}
                         />
                         <p className="text-xs text-muted-foreground mt-1">Maximum file size: 200KB. Supported formats: JPG, PNG, GIF, WEBP</p>
                         {staffForm.photo_url && (
                           <p className="text-sm text-muted-foreground mt-1">
                             Current photo: <a href={staffForm.photo_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View</a>
                           </p>
                         )}
                      </div>
                      <div>
                        <Label htmlFor="display_order">Display Order</Label>
                        <Input
                          id="display_order"
                          type="number"
                          value={staffForm.display_order}
                          onChange={(e) => setStaffForm(prev => ({ ...prev, display_order: parseInt(e.target.value) || 0 }))}
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button type="submit">Save</Button>
                        <Button type="button" variant="outline" onClick={() => setIsStaffDialogOpen(false)}>
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Designation</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {staff.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell>
                        <Badge variant="secondary">{member.service_name}</Badge>
                      </TableCell>
                      <TableCell>{member.name}</TableCell>
                      <TableCell>{member.designation}</TableCell>
                      <TableCell>{member.department}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              setStaffForm({
                                id: member.id,
                                service_name: member.service_name,
                                name: member.name,
                                designation: member.designation,
                                department: member.department || "",
                                email: member.email || "",
                                phone: member.phone || "",
                                photo_url: member.photo_url || "",
                                display_order: member.display_order
                              });
                              setIsStaffDialogOpen(true);
                            }}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDeleteStaff(member.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gallery" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Photo Gallery</CardTitle>
                <Dialog open={isGalleryDialogOpen} onOpenChange={setIsGalleryDialogOpen}>
                  <DialogTrigger asChild>
                    <Button onClick={() => setGalleryForm({
                      id: "",
                      service_name: selectedService,
                      title: "",
                      description: "",
                      image_url: "",
                      display_order: 0
                    })}>
                      <Plus className="mr-2 h-4 w-4" /> Add Image
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{galleryForm.id ? "Edit" : "Add"} Gallery Image</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleGallerySubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          value={galleryForm.title}
                          onChange={(e) => setGalleryForm(prev => ({ ...prev, title: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                         <Label htmlFor="gallery_image">Upload Image</Label>
                         <Input
                           id="gallery_image"
                           type="file"
                           accept="image/*"
                           onChange={(e) => setGalleryImage(e.target.files?.[0] || null)}
                           required={!galleryForm.id}
                         />
                         <p className="text-xs text-muted-foreground mt-1">Maximum file size: 200KB. Supported formats: JPG, PNG, GIF, WEBP</p>
                         {galleryForm.image_url && (
                           <p className="text-sm text-muted-foreground mt-1">
                             Current image: <a href={galleryForm.image_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View</a>
                           </p>
                         )}
                      </div>
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={galleryForm.description}
                          onChange={(e) => setGalleryForm(prev => ({ ...prev, description: e.target.value }))}
                          rows={2}
                        />
                      </div>
                      <div>
                        <Label htmlFor="display_order">Display Order</Label>
                        <Input
                          id="display_order"
                          type="number"
                          value={galleryForm.display_order}
                          onChange={(e) => setGalleryForm(prev => ({ ...prev, display_order: parseInt(e.target.value) || 0 }))}
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button type="submit">Save</Button>
                        <Button type="button" variant="outline" onClick={() => setIsGalleryDialogOpen(false)}>
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {gallery.map((item) => (
                  <Card key={item.id}>
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="text-xs">{item.service_name}</Badge>
                      </div>
                      <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                      {item.description && (
                        <p className="text-xs text-muted-foreground mb-3">{item.description}</p>
                      )}
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setGalleryForm({
                              id: item.id,
                              service_name: item.service_name,
                              title: item.title,
                              description: item.description || "",
                              image_url: item.image_url,
                              display_order: item.display_order
                            });
                            setIsGalleryDialogOpen(true);
                          }}
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDeleteGallery(item.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}