
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Edit, Trash2, Plus, Calendar, Bell, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Announcement {
  id: string;
  title: string;
  content: string;
  type: string;
  date: string;
}

interface AnnouncementsManagerProps {
  initialAnnouncements?: Announcement[];
}

const AnnouncementsManager = ({ initialAnnouncements = [] }: AnnouncementsManagerProps) => {
  const { toast } = useToast();
  const [announcements, setAnnouncements] = useState<Announcement[]>(initialAnnouncements);
  const [announcementData, setAnnouncementData] = useState({
    title: "",
    content: "",
    type: "general",
    date: new Date().toISOString().split('T')[0]
  });
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);

  const handleAnnouncementChange = (e) => {
    const { name, value } = e.target;
    setAnnouncementData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateAnnouncement = (e) => {
    e.preventDefault();
    
    if (!announcementData.title || !announcementData.content) {
      toast({
        title: "Error",
        description: "Please provide a title and content for the announcement.",
        variant: "destructive",
      });
      return;
    }
    
    if (editingAnnouncement) {
      // Update existing announcement
      const updatedAnnouncements = announcements.map(ann => 
        ann.id === editingAnnouncement 
          ? { 
              ...ann, 
              title: announcementData.title,
              content: announcementData.content,
              type: announcementData.type,
              date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            } 
          : ann
      );
      
      setAnnouncements(updatedAnnouncements);
      setEditingAnnouncement(null);
      toast({
        title: "Announcement Updated",
        description: "The announcement has been updated successfully.",
        variant: "default",
      });
    } else {
      // Create new announcement
      const newAnnouncement = {
        id: Date.now().toString(),
        title: announcementData.title,
        content: announcementData.content,
        type: announcementData.type,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      };
      
      setAnnouncements([newAnnouncement, ...announcements]);
      toast({
        title: "Announcement Created",
        description: "New announcement has been created successfully.",
        variant: "default",
      });
    }
    
    setAnnouncementData({
      title: "",
      content: "",
      type: "general",
      date: new Date().toISOString().split('T')[0]
    });
  };

  const handleEditAnnouncement = (id) => {
    const announcement = announcements.find(a => a.id === id);
    if (announcement) {
      setAnnouncementData({
        title: announcement.title,
        content: announcement.content,
        type: announcement.type,
        date: announcement.date
      });
      setEditingAnnouncement(id);
    }
  };

  const handleDeleteAnnouncement = (id) => {
    setAnnouncements(announcements.filter(a => a.id !== id));
    toast({
      title: "Announcement Deleted",
      description: "The announcement has been removed.",
      variant: "default",
    });
  };

  const getAnnouncementTypeStyles = (type) => {
    switch (type) {
      case "event":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "holiday":
        return "bg-green-100 text-green-800 border-green-300";
      case "exam":
        return "bg-purple-100 text-purple-800 border-purple-300";
      case "important":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getAnnouncementIcon = (type) => {
    switch (type) {
      case "event":
        return <Calendar className="w-5 h-5 text-blue-600" />;
      case "holiday":
        return <Calendar className="w-5 h-5 text-green-600" />;
      case "exam":
        return <FileText className="w-5 h-5 text-purple-600" />;
      case "important":
        return <Bell className="w-5 h-5 text-red-600" />;
      default:
        return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div>
      <div>
        <h3 className="font-bold text-lg mb-4">
          {editingAnnouncement ? "Edit Announcement" : "Create New Announcement"}
        </h3>
        <form onSubmit={handleCreateAnnouncement} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Announcement Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter announcement title"
                value={announcementData.title}
                onChange={handleAnnouncementChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Announcement Type</Label>
              <Select name="type" value={announcementData.type} onValueChange={(value) => setAnnouncementData(prev => ({ ...prev, type: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="event">Event</SelectItem>
                  <SelectItem value="holiday">Holiday</SelectItem>
                  <SelectItem value="exam">Examination</SelectItem>
                  <SelectItem value="important">Important</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Announcement Content</Label>
            <Textarea
              id="content"
              name="content"
              placeholder="Enter announcement content"
              value={announcementData.content}
              onChange={handleAnnouncementChange}
              rows={4}
              required
            />
          </div>
          <div className="flex justify-end">
            {editingAnnouncement && (
              <Button 
                type="button" 
                variant="outline" 
                className="mr-2"
                onClick={() => {
                  setEditingAnnouncement(null);
                  setAnnouncementData({
                    title: "",
                    content: "",
                    type: "general",
                    date: new Date().toISOString().split('T')[0]
                  });
                }}
              >
                Cancel
              </Button>
            )}
            <Button type="submit" className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
              {editingAnnouncement ? (
                <>
                  <Edit size={16} />
                  Update Announcement
                </>
              ) : (
                <>
                  <Plus size={16} />
                  Create Announcement
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
      
      <div className="mt-8">
        <h3 className="font-bold text-lg mb-4">All Announcements</h3>
        <div className="space-y-4">
          {announcements.length > 0 ? (
            announcements.map((announcement) => (
              <div 
                key={announcement.id} 
                className={`border p-4 rounded-lg hover:shadow-md transition-shadow ${getAnnouncementTypeStyles(announcement.type)}`}
              >
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    {getAnnouncementIcon(announcement.type)}
                    <h4 className="font-medium">{announcement.title}</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                      onClick={() => handleEditAnnouncement(announcement.id)}
                    >
                      <Edit size={16} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={() => handleDeleteAnnouncement(announcement.id)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
                <p className="mt-2 text-sm">{announcement.content}</p>
                <div className="text-xs text-gray-500 mt-2">
                  Posted: {announcement.date}
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center border rounded-lg">
              <p className="text-muted-foreground">No announcements created yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsManager;
