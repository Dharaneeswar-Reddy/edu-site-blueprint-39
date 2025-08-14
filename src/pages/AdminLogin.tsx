
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

// Import our new components
import LoginForm from "@/components/admin/LoginForm";
import DocumentsManager from "@/components/admin/DocumentsManager";
import AnnouncementsManager from "@/components/admin/AnnouncementsManager";

const AdminLogin = () => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("documents");
  
  // Initial data for documents and announcements
  const initialDocuments = [
    {
      id: "1",
      title: "Mid Semester Exam Results",
      department: "Computer Science",
      semester: "4th Semester",
      date: "May 15, 2025",
      fileUrl: "#"
    },
    {
      id: "2",
      title: "Internal Assessment Marks",
      department: "Electronics & Communication",
      semester: "2nd Semester",
      date: "May 10, 2025",
      fileUrl: "#"
    }
  ];
  
  const initialAnnouncements = [
    {
      id: "1",
      title: "Summer Vacation Announcement",
      content: "The college will remain closed from June 1 to June 30, 2025 for summer vacation.",
      type: "holiday",
      date: "May 15, 2025"
    },
    {
      id: "2",
      title: "Annual Sports Meet",
      content: "Annual sports meet will be held from May 25-27, 2025. All students are encouraged to participate.",
      type: "event",
      date: "May 10, 2025"
    },
    {
      id: "3",
      title: "New Library Resources",
      content: "Library has been updated with new resources for engineering students.",
      type: "general",
      date: "May 5, 2025"
    }
  ];

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      variant: "default",
    });
  };

  return (
    <Layout>
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          {!isLoggedIn ? (
            <div className="max-w-md mx-auto">
              <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />
            </div>
          ) : (
            <div className="max-w-6xl mx-auto">
              <Card className="border-t-4 border-t-green-600">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Admin Portal</CardTitle>
                    <CardDescription>Manage college documents and announcements</CardDescription>
                  </div>
                  <Button variant="outline" onClick={handleLogout}>Logout</Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="documents">Documents Management</TabsTrigger>
                      <TabsTrigger value="announcements">Announcements Management</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="documents" className="pt-4">
                      <DocumentsManager initialDocuments={initialDocuments} />
                    </TabsContent>
                    
                    <TabsContent value="announcements" className="pt-4">
                      <AnnouncementsManager initialAnnouncements={initialAnnouncements} />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AdminLogin;
