import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { useState } from "react";
import { 
  useStudentSupportServices,
  useStudentSupportReports, 
  useStudentSupportStaff, 
  useStudentSupportGallery 
} from "@/hooks/useStudentSupportServices";
import { useStaff } from "@/hooks/useStaff";

const WomenEmpowerment = () => {
  const serviceName = "Women Empowerment";
  const { services } = useStudentSupportServices(serviceName);
  const { reports } = useStudentSupportReports(serviceName);
  const { staff } = useStudentSupportStaff(serviceName);
  const { gallery } = useStudentSupportGallery(serviceName);
  const { staff: allStaff } = useStaff(); // Fetch all staff from main staff table
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const service = services[0];

  // Hero Images for Carousel
  const heroImages = [
    "/lovable-uploads/6a2b44b6-d72d-4784-a34a-3284ab8169ef.png",
    "/lovable-uploads/ab5d75c3-27a7-4caa-a1c7-677b4d9e9bc4.png",
    "/lovable-uploads/3e99491d-fec2-46a4-a6d5-ff378163a269.png",
    "/lovable-uploads/9fcede44-1406-4f84-bcdf-dd3228a79578.png"
  ];

  // Updated About Us content
  const aboutContent = "The Women Empowerment Cell (WEC) is a dedicated initiative committed to creating a safe, inclusive, and empowering environment for women. Established with the goal of promoting gender equality and fostering personal and professional growth, the Cell actively works to raise awareness, support leadership, and address issues that affect women's well-being and rights. We believe that empowered women are key to a progressive and equitable society. Through education, advocacy, and capacity-building activities, WEC strives to nurture confidence, self-reliance, and a strong sense of agency among women.";

  // Vision and Mission
  const vision = "To create an empowering environment that fosters gender equality, women's leadership, and holistic development of female students.";
  const mission = "To empower women by promoting gender equality, enhancing awareness of women's rights, and fostering an inclusive environment where women feel safe, respected, and encouraged to realize their full potential academically, professionally, and personally.";

  // Objectives
  const objectives = [
    "To empower women through education, skill development, and leadership opportunities.",
    "To promote awareness of women's rights, safety, and equality.",
    "To provide a platform for discussion on gender-related issues.",
    "To organize workshops, seminars, and awareness campaigns related to women's welfare.",
    "To create a supportive environment for addressing grievances and ensuring safety."
  ];

  // Initiatives
  const initiatives = [
    {
      title: "Workshops & Seminars",
      description: "Regular events on topics such as self-defense, legal rights, mental health, financial literacy, and career development."
    },
    {
      title: "Awareness Campaigns",
      description: "Gender sensitization drives, health awareness programs, and observance of key days like International Women's Day."
    },
    {
      title: "Mentorship & Support",
      description: "Providing guidance, mentorship, and counseling support for female students and staff."
    },
    {
      title: "Collaborations",
      description: "Partnering with NGOs, experts, and government bodies to extend outreach and impact."
    }
  ];

  // Activities & Events
  const activities = [
    "Self-Defense Training Sessions",
    "Health & Hygiene Awareness Drives",
    "Financial Independence Workshops",
    "Guest Lectures by Women Achievers",
    "Gender Sensitization Programs",
    "Career Guidance and Skill Development Sessions"
  ];

  // WEC Staff
  const wecStaff = [
    {
      name: "Smt B. Anuradha",
      designation: "Convener",
      department: "Lecturer in Zoology",
      photo_url: "https://fvnbynqxgycqxzmzmftm.supabase.co/storage/v1/object/public/staff-photos/1756759922592.png"
    },
    {
      name: "Smt A. Sridevi",
      designation: "Member",
      department: "Lecturer in Electronics"
    },
    {
      name: "Smt A. Kokila",
      designation: "Member",
      department: "Lecturer in Chemistry"
    },
    {
      name: "Smt P. Rajya Lakshmi",
      designation: "Member",
      department: "Lecturer in Mathematics"
    },
    {
      name: "Smt P. Bala Velankanni Rani",
      designation: "Member",
      department: "Lecturer in English"
    }
  ];

  // Recent Activities
  const recentActivities = [
    { event: "Women's day celebrations", date: "March 8th, 2025" },
    { event: "National Girl child Day", date: "January 24th, 2025" },
    { event: "Kishori vikas programme", date: "December 16th, 2024" },
    { event: "Rangoli competitions", date: "January 9th, 2025" },
    { event: "Women participation in N.C.C.", date: "Ongoing" },
    { event: "Yuva vusthv", date: "December 6th, 2024" }
  ];

  // Gallery Images
  const galleryImages = [
    "/lovable-uploads/6a2b44b6-d72d-4784-a34a-3284ab8169ef.png",
    "/lovable-uploads/ab5d75c3-27a7-4caa-a1c7-677b4d9e9bc4.png",
    "/lovable-uploads/3e99491d-fec2-46a4-a6d5-ff378163a269.png",
    "/lovable-uploads/cb5ba754-a035-461e-9d24-585d3fba4c0e.png",
    "/lovable-uploads/208fefeb-3f17-49ce-b968-a91e37977d0d.png",
    "/lovable-uploads/d1ea38a5-468c-4c06-a7c1-b912afbf80b4.png",
    "/lovable-uploads/9fcede44-1406-4f84-bcdf-dd3228a79578.png",
    "/lovable-uploads/3134223b-be7a-45e7-9cfb-e7c8a4975cc8.png",
    "/lovable-uploads/dc4cbafb-831e-4f3c-a371-4b4565682112.png",
    "/lovable-uploads/ddc8efe5-f793-4800-bbbc-f325d7b487b5.png"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <PageLayout 
      title="Women Empowerment Cell (WEC)" 
      description="Promoting gender equality and women's development at SVRM College"
    >
      <div className="space-y-8">
        {/* Hero Image Carousel */}
        <Card>
          <div className="relative h-96 overflow-hidden rounded-lg">
            <img 
              src={heroImages[currentImageIndex]} 
              alt="Women Empowerment Activities"
              className="w-full h-full object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </Card>

        {/* About Women Empowerment Cell */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">About Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {service?.description || aboutContent}
            </p>
          </CardContent>
        </Card>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">Vision</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service?.vision || vision}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">Mission</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service?.mission || mission}</p>
            </CardContent>
          </Card>
        </div>

        {/* Objectives */}
        <Card>
          <CardHeader>
            <CardTitle>Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {(service?.objectives && service.objectives.length > 0 ? service.objectives : objectives).map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Our Initiatives */}
        <Card>
          <CardHeader>
            <CardTitle>Our Initiatives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {initiatives.map((initiative, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">{initiative.title}</h4>
                  <p className="text-sm text-muted-foreground">{initiative.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activities & Events */}
        <Card>
          <CardHeader>
            <CardTitle>Activities & Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm">{activity}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Grievance Redressal */}
        <Card>
          <CardHeader>
            <CardTitle>Grievance Redressal</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The Women Empowerment Cell also functions in coordination with the Internal Complaints Committee (ICC) to address any gender-based grievances or incidents of harassment, ensuring that every woman feels safe, heard, and respected.
            </p>
          </CardContent>
        </Card>

        {/* Staff */}
        <Card>
          <CardHeader>
            <CardTitle>Women Empowerment Cell Staff</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Student Support Staff */}
              {staff.map((member, index) => (
                <div key={member.id || index} className="text-center">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    {member.photo_url ? (
                      <img 
                        src={member.photo_url} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-muted-foreground">Photo</span>
                    )}
                  </div>
                  <h4 className="font-medium">{member.name}</h4>
                  <p className="text-sm text-primary">{member.designation}</p>
                  <p className="text-xs text-muted-foreground">{member.department}</p>
                </div>
              ))}
              
              {/* Main Staff Table - Female Staff */}
              {allStaff
                .filter(member => member.name.toLowerCase().includes('smt') || member.name.toLowerCase().includes('mrs') || member.name.toLowerCase().includes('dr') || member.department?.toLowerCase().includes('women'))
                .map((member, index) => (
                <div key={member.id || `staff-${index}`} className="text-center">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    {member.photo_url ? (
                      <img 
                        src={member.photo_url} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-muted-foreground">Photo</span>
                    )}
                  </div>
                  <h4 className="font-medium">{member.name}</h4>
                  <p className="text-sm text-primary">{member.designation}</p>
                  <p className="text-xs text-muted-foreground">{member.department}</p>
                </div>
              ))}

              {/* Hardcoded WEC Staff (fallback if no data from database) */}
              {staff.length === 0 && allStaff.length === 0 && wecStaff.map((member, index) => (
                <div key={`wec-${index}`} className="text-center">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    {member.photo_url ? (
                      <img 
                        src={member.photo_url} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-muted-foreground">Photo</span>
                    )}
                  </div>
                  <h4 className="font-medium">{member.name}</h4>
                  <p className="text-sm text-primary">{member.designation}</p>
                  <p className="text-xs text-muted-foreground">{member.department}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h4 className="font-medium">{activity.event}</h4>
                    <p className="text-sm text-muted-foreground">Date: {activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Yearly Reports */}
        {reports.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Yearly Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h4 className="font-medium">{report.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        Year: {report.academic_year}
                        {report.description && ` | ${report.description}`}
                      </p>
                    </div>
                    <a 
                      href={report.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                    >
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Contact Us */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Email:</p>
                <a href="mailto:info@svrmc.edu.in" className="text-primary hover:underline">
                  info@svrmc.edu.in
                </a>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">
              We encourage all students and staff to participate in the activities of the Women Empowerment Cell. Together, let's build a community where women feel empowered to lead, inspire, and thrive.
            </p>
          </CardContent>
        </Card>

        {/* Photo Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>Photo Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(gallery.length > 0 ? gallery.map(img => img.image_url) : galleryImages).map((image, index) => (
                <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Women Empowerment Activity ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default WomenEmpowerment;