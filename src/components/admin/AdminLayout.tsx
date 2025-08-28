import { ReactNode } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, Settings, Home, Users, FileText, Calendar, Image, BookOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;

  const navigationItems = [
    { icon: Home, label: "Dashboard", path: "/admin" },
    { icon: FileText, label: "Announcements", path: "/admin/announcements" },
    { icon: BookOpen, label: "Examination", path: "/admin/examination" },
    { icon: Settings, label: "IQAC", path: "/admin/iqac" },
    { icon: Users, label: "Staff", path: "/admin/staff" },
    { icon: Image, label: "Gallery", path: "/admin/gallery" },
    { icon: BookOpen, label: "Departments", path: "/admin/departments" },
  ];

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Header */}
      <header className="bg-card border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-primary">Admin Panel</h1>
              <span className="text-sm text-muted-foreground">
                Welcome, {user?.email}
              </span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleSignOut}
              className="flex items-center space-x-2"
            >
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Navigation</CardTitle>
          </CardHeader>
          <div className="px-6 pb-6">
            <nav className="flex flex-wrap gap-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPath === item.path;
                
                return (
                  <Link key={item.path} to={item.path}>
                    <Button 
                      variant={isActive ? "default" : "outline"}
                      size="sm"
                      className="flex items-center space-x-2"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Button>
                  </Link>
                );
              })}
            </nav>
          </div>
        </Card>

        {/* Main Content */}
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;