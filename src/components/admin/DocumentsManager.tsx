
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Document {
  id: string;
  title: string;
  department: string;
  semester: string;
  date: string;
  fileUrl: string;
}

interface DocumentsManagerProps {
  initialDocuments?: Document[];
}

const DocumentsManager = ({ initialDocuments = [] }: DocumentsManagerProps) => {
  const { toast } = useToast();
  const [documents, setDocuments] = useState<Document[]>(initialDocuments);
  const [uploadData, setUploadData] = useState({
    title: "",
    department: "",
    semester: "",
    file: null,
  });

  const handleUploadChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setUploadData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setUploadData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    
    if (!uploadData.title || !uploadData.department || !uploadData.semester || !uploadData.file) {
      toast({
        title: "Error",
        description: "Please fill all fields and select a file to upload.",
        variant: "destructive",
      });
      return;
    }
    
    const newUpload = {
      id: Date.now().toString(),
      title: uploadData.title,
      department: uploadData.department,
      semester: uploadData.semester,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      fileUrl: "#"
    };
    
    setDocuments([newUpload, ...documents]);
    setUploadData({
      title: "",
      department: "",
      semester: "",
      file: null,
    });
    
    toast({
      title: "Upload Successful",
      description: "File has been uploaded successfully.",
      variant: "default",
    });
  };

  const handleDeleteUpload = (id) => {
    setDocuments(documents.filter(doc => doc.id !== id));
    toast({
      title: "File Deleted",
      description: "The file has been removed.",
      variant: "default",
    });
  };

  return (
    <div>
      <div>
        <h3 className="font-bold text-lg mb-4">Upload PDF Document</h3>
        <form onSubmit={handleFileUpload} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Document Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter document title"
                value={uploadData.title}
                onChange={handleUploadChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select name="department" value={uploadData.department} onValueChange={(value) => setUploadData(prev => ({ ...prev, department: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Computer Science">Computer Science</SelectItem>
                  <SelectItem value="Electronics & Communication">Electronics & Communication</SelectItem>
                  <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                  <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="semester">Semester</Label>
              <Select name="semester" value={uploadData.semester} onValueChange={(value) => setUploadData(prev => ({ ...prev, semester: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select semester" />
                </SelectTrigger>
                <SelectContent>
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
          
          <div className="space-y-2">
            <Label htmlFor="file">Upload File (PDF only)</Label>
            <div className="flex items-center gap-2">
              <Input
                id="file"
                name="file"
                type="file"
                accept=".pdf"
                onChange={handleUploadChange}
                required
                className="flex-1"
              />
              <Button type="submit" className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
                <Upload size={16} />
                Upload
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Maximum file size: 5MB</p>
          </div>
        </form>
      </div>
      
      <div className="mt-8">
        <h3 className="font-bold text-lg mb-4">Uploaded Documents</h3>
        <div className="divide-y">
          {documents.length > 0 ? (
            documents.map((doc) => (
              <div key={doc.id} className="py-4 flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <div className="flex items-start gap-3">
                  <FileText size={24} className="text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium">{doc.title}</h4>
                    <div className="text-sm text-muted-foreground">
                      {doc.department} | {doc.semester} | Uploaded: {doc.date}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer">View</a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    onClick={() => handleDeleteUpload(doc.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center">
              <p className="text-muted-foreground">No documents uploaded yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentsManager;
