import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, ArrowRight, ExternalLink, Calendar, Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
interface Announcement {
  id: number;
  title: string;
  date: string;
  link: string;
  category: string;
  image?: string;
  content?: string;
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
  const [enlargedImage, setEnlargedImage] = useState<Announcement | null>(null);
  const handleAnnouncementView = (announcement: Announcement) => {
    if (announcement.link && announcement.link !== "#") {
      window.open(announcement.link, "_blank", "noopener,noreferrer");
      return;
    }
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
          <div className="max-h-[520px] overflow-y-auto pr-1.5 -mr-1.5 space-y-4 announcements-container announcements-scroll">
            {announcements.map((announcement, index) => {
              const hasLink = announcement.link && announcement.link !== "#";
              const hasImage = !!announcement.image;
              return <div
                key={announcement.id}
                className={`announcement-card slide-in-right ${hasLink ? "cursor-pointer" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={hasLink ? () => handleAnnouncementView(announcement) : undefined}
              >
                {hasImage && (
                  <div
                    className="relative group/image rounded-md overflow-hidden mb-3 cursor-zoom-in"
                    onClick={(e) => {
                      e.stopPropagation();
                      setEnlargedImage(announcement);
                    }}
                  >
                    <img
                      src={announcement.image}
                      alt={announcement.title}
                      loading="lazy"
                      className="w-full h-44 object-cover transition-transform duration-300 group-hover/image:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/25 transition-colors duration-200 flex items-center justify-center">
                      <span className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-200 bg-white/90 text-college-blue rounded-full p-2 shadow-md">
                        <Maximize2 className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                )}
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
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={(e) => { e.stopPropagation(); handleAnnouncementView(announcement); }}>
                     <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>;
            })}
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

      {/* Enlarged image popup */}
      <Dialog open={!!enlargedImage} onOpenChange={(open) => !open && setEnlargedImage(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-0 shadow-none [&>button]:hidden">
          <DialogTitle className="sr-only">{enlargedImage?.title}</DialogTitle>
          {enlargedImage && (
            <div className="relative">
              <button
                onClick={() => setEnlargedImage(null)}
                className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-colors"
                aria-label="Close enlarged image"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={enlargedImage.image}
                alt={enlargedImage.title}
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-3 bg-college-blue/95 text-white rounded-lg px-4 py-3">
                <span className="text-xs uppercase tracking-wide text-college-gold">
                  {enlargedImage.category} · {enlargedImage.date}
                </span>
                <h3 className="font-semibold mt-1">{enlargedImage.title}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>;
};
export default AnnouncementsSidebar;
