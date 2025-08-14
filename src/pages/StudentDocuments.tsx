import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, FileText, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const StudentDocuments = () => {
  const { toast } = useToast();
  const [filters, setFilters] = useState({
    semester: "all",
    department: "all"
  });
  
  const [searchQuery, setSearchQuery] = useState("");
  
  const marksheets = [
    {
      id: "1",
      title: "Mid Semester Exam Results",
      department: "Computer Science",
      semester: "4th Semester",
      uploadDate: "May 15, 2025",
      fileUrl: "#"
    },
    {
      id: "2",
      title: "Internal Assessment Marks",
      department: "Electronics & Communication",
      semester: "2nd Semester",
      uploadDate: "May 10, 2025",
      fileUrl: "#"
    },
    {
      id: "3",
      title: "Final Semester Results",
      department: "Computer Science",
      semester: "3rd Semester",
      uploadDate: "May 5, 2025",
      fileUrl: "#"
    },
    {
      id: "4",
      title: "Laboratory Performance Assessment",
      department: "Mechanical Engineering",
      semester: "5th Semester",
      uploadDate: "May 1, 2025",
      fileUrl: "#"
    },
    {
      id: "5",
      title: "Project Evaluation Results",
      department: "Civil Engineering",
      semester: "6th Semester",
      uploadDate: "April 28, 2025",
      fileUrl: "#"
    }
  ];

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMarksheets = marksheets.filter((sheet) => {
    const matchesSemester = filters.semester === "all" || sheet.semester === filters.semester;
    const matchesDepartment = filters.department === "all" || sheet.department === filters.department;
    const matchesSearch = !searchQuery || 
      sheet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sheet.department.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSemester && matchesDepartment && matchesSearch;
  });

  const handleDownload = (id) => {
    toast({
      title: "Download Started",
      description: "Your document is being downloaded.",
      variant: "default",
    });
  };

  return (
    <Layout>
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-t-4 border-t-green-600">
              <CardHeader>
                <CardTitle className="text-2xl">Student Documents</CardTitle>
                <CardDescription>Access your marksheets and other academic documents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-4">Search & Filter Documents</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="searchQuery" className="mb-2">Search</Label>
                      <div className="relative">
                        <Input
                          id="searchQuery"
                          placeholder="Search by title or department"
                          value={searchQuery}
                          onChange={handleSearchChange}
                          className="pl-9"
                        />
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="department" className="mb-2">Department</Label>
                      <Select 
                        onValueChange={(value) => handleFilterChange("department", value)}
                        value={filters.department}
                      >
                        <SelectTrigger id="department">
                          <SelectValue placeholder="All Departments" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Departments</SelectItem>
                          <SelectItem value="Computer Science">Computer Science</SelectItem>
                          <SelectItem value="Electronics & Communication">Electronics & Communication</SelectItem>
                          <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                          <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="semester" className="mb-2">Semester</Label>
                      <Select 
                        onValueChange={(value) => handleFilterChange("semester", value)}
                        value={filters.semester}
                      >
                        <SelectTrigger id="semester">
                          <SelectValue placeholder="All Semesters" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Semesters</SelectItem>
                          <SelectItem value="1st Semester">1st Semester</SelectItem>
                          <SelectItem value="2nd Semester">2nd Semester</SelectItem>
                          <SelectItem value="3rd Semester">3rd Semester</SelectItem>
                          <SelectItem value="4th Semester">4th Semester</SelectItem>
                          <SelectItem value="5th Semester">5th Semester</SelectItem>
                          <SelectItem value="6th Semester">6th Semester</SelectItem>
                          <SelectItem value="7th Semester">7th Semester</SelectItem>
                          <SelectItem value="8th Semester">8th Semester</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-4">Available Documents</h3>
                  <div className="divide-y">
                    {filteredMarksheets.length > 0 ? (
                      filteredMarksheets.map((sheet) => (
                        <div key={sheet.id} className="py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                          <div className="flex items-start gap-3">
                            <FileText size={24} className="text-green-600 mt-1" />
                            <div>
                              <h4 className="font-medium">{sheet.title}</h4>
                              <div className="text-sm text-muted-foreground">
                                {sheet.department} | {sheet.semester} | Uploaded: {sheet.uploadDate}
                              </div>
                            </div>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex items-center gap-1"
                            onClick={() => handleDownload(sheet.id)}
                          >
                            <Download size={16} />
                            Download
                          </Button>
                        </div>
                      ))
                    ) : (
                      <div className="py-8 text-center">
                        <p className="text-muted-foreground">No documents found matching your criteria</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StudentDocuments;
