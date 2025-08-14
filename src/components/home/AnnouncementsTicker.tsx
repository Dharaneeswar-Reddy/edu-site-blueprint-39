
import { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Announcement {
  id: number;
  title: string;
  date: string;
  link: string;
  category: string;
}

interface AnnouncementsTickerProps {
  announcements: Announcement[];
}

const AnnouncementsTicker = ({ announcements }: AnnouncementsTickerProps) => {
  const { toast } = useToast();
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [announcements.length]);
  
  const handleAnnouncementView = (announcement: Announcement) => {
    toast({
      title: `Viewing: ${announcement.title}`,
      description: `Opening document from ${announcement.date}`,
    });
  };

  return (
    <div className="bg-college-blue text-white py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="font-bold whitespace-nowrap mr-4 flex items-center">
            <Bell className="h-4 w-4 mr-2 animate-pulse-slow" />
            ANNOUNCEMENTS:
          </div>
          <div className="overflow-hidden flex-1 relative h-6">
            {announcements.map((announcement, index) => (
              <div 
                key={announcement.id}
                className={`absolute w-full transition-all duration-1000 ease-in-out ${
                  index === currentAnnouncement ? "top-0 opacity-100" : "top-10 opacity-0"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{announcement.title}</span>
                  <a 
                    href={announcement.link} 
                    className="text-sm text-college-gold hover:underline whitespace-nowrap"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleAnnouncementView(announcement)}
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsTicker;
