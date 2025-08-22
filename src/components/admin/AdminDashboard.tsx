import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Calendar, Image, BookOpen, Settings, TrendingUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Stats {
  announcements: number;
  staff: number;
  nccEvents: number;
  galleryImages: number;
  iqacDocuments: number;
  examinationDocuments: number;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<Stats>({
    announcements: 0,
    staff: 0,
    nccEvents: 0,
    galleryImages: 0,
    iqacDocuments: 0,
    examinationDocuments: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [
        announcementsRes,
        staffRes,
        nccEventsRes,
        galleryRes,
        iqacRes,
        examRes,
      ] = await Promise.all([
        supabase.from("announcements").select("*", { count: "exact", head: true }),
        supabase.from("staff").select("*", { count: "exact", head: true }),
        supabase.from("ncc_events").select("*", { count: "exact", head: true }),
        supabase.from("gallery_images").select("*", { count: "exact", head: true }),
        supabase.from("iqac_documents").select("*", { count: "exact", head: true }),
        supabase.from("examination_documents").select("*", { count: "exact", head: true }),
      ]);

      setStats({
        announcements: announcementsRes.count || 0,
        staff: staffRes.count || 0,
        nccEvents: nccEventsRes.count || 0,
        galleryImages: galleryRes.count || 0,
        iqacDocuments: iqacRes.count || 0,
        examinationDocuments: examRes.count || 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const dashboardCards = [
    {
      title: "Announcements",
      description: "Active announcements",
      value: stats.announcements,
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Staff Members",
      description: "Total staff records",
      value: stats.staff,
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "NCC Events",
      description: "Scheduled events",
      value: stats.nccEvents,
      icon: Calendar,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Gallery Images",
      description: "Published images",
      value: stats.galleryImages,
      icon: Image,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "IQAC Documents",
      description: "Quality documents",
      value: stats.iqacDocuments,
      icon: Settings,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      title: "Exam Documents",
      description: "Examination files",
      value: stats.examinationDocuments,
      icon: BookOpen,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-20 bg-muted rounded"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <TrendingUp className="h-6 w-6 text-primary" />
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardCards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.title} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                <div className={`p-2 rounded-full ${card.bgColor}`}>
                  <Icon className={`h-4 w-4 ${card.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common administrative tasks you might want to perform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">
            Use the navigation menu above to access specific management sections:
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Add new announcements to keep students informed</li>
              <li>Upload examination results and documents</li>
              <li>Manage staff profiles and contact information</li>
              <li>Schedule NCC events and activities</li>
              <li>Update photo gallery with latest images</li>
              <li>Upload IQAC documents and reports</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;