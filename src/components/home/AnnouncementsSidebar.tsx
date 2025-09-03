import { Link } from "react-router-dom";
import { Bell, ArrowRight, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
interface Announcement {
  id: number;
  title: string;
  date: string;
  link: string;
  category: string;
}
interface AnnouncementsSidebarProps {
  announcements: Announcement[];
}
const AnnouncementsSidebar = ({
  announcements
}: AnnouncementsSidebarProps) => {
  const {
    toast
  } = useToast();
  const handleAnnouncementView = (announcement: Announcement) => {
    toast({
      title: `Viewing: ${announcement.title}`,
      description: `Opening document from ${announcement.date}`
    });
  };
  return <div className="lg:col-span-1">
      <div className="sticky top-24">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-college-blue flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              Announcements
            </h2>
          </div>
          <div className="space-y-4 announcements-container">
            {announcements.map((announcement, index) => <div key={announcement.id} className="announcement-card slide-in-right" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-2 py-1 text-xs rounded bg-college-blue/10 text-college-blue mb-2">
                      {announcement.category}
                    </span>
                    <h3 className="font-medium mb-1">{announcement.title}</h3>
                    <p className="text-sm text-gray-500 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" /> {announcement.date}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => handleAnnouncementView(announcement)}>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>)}
          </div>
        </div>
        
        <div className="bg-college-blue text-white p-6 rounded-lg shadow-md animate-fade-in">
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/iqac" className="flex items-center hover:text-college-gold transition-colors">
                <ArrowRight className="h-4 w-4 mr-2" />
                IQAC
              </Link>
            </li>
            <li>
              <Link to="/student-support" className="flex items-center hover:text-college-gold transition-colors">
                <ArrowRight className="h-4 w-4 mr-2" />
                Student Support
              </Link>
            </li>
            <li>
              <Link to="/placements" className="flex items-center hover:text-college-gold transition-colors">
                <ArrowRight className="h-4 w-4 mr-2" />
                Placements
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="flex items-center hover:text-college-gold transition-colors">
                <ArrowRight className="h-4 w-4 mr-2" />
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>;
};
export default AnnouncementsSidebar;