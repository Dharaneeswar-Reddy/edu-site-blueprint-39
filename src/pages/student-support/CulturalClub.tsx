import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  useStudentSupportServices,
  useStudentSupportReports, 
  useStudentSupportStaff, 
  useStudentSupportGallery 
} from "@/hooks/useStudentSupportServices";

const CulturalClub = () => {
  const serviceName = "Cultural Club";
  const { services } = useStudentSupportServices(serviceName);
  const { reports } = useStudentSupportReports(serviceName);
  const { staff } = useStudentSupportStaff(serviceName);
  const { gallery } = useStudentSupportGallery(serviceName);

  const service = services[0];

  // Fallback data
  const defaultDescription = "The Cultural Activities Club at SVRM College is a vibrant platform that celebrates the rich tapestry of Indian culture while embracing global artistic expressions. Established to nurture the creative talents of our students, the club organizes various cultural events, festivals, competitions, and workshops throughout the academic year. From traditional dance and music performances to contemporary art exhibitions and literary events, our cultural club provides students with opportunities to explore their artistic passions, develop their talents, and showcase their creativity. We believe that cultural activities play a crucial role in the holistic development of students, helping them build confidence, teamwork skills, and cultural awareness.";
  
  const visionMission = [
    {
      type: "Vision",
      content: "To foster cultural awareness, artistic expression, and creative talents among students while preserving and promoting our rich cultural heritage."
    },
    {
      type: "Mission",
      content: "To provide a platform for students to explore, develop, and showcase their artistic and cultural talents through various programs, events, and competitions."
    }
  ];

  const objectives = [
    "Promote cultural awareness and artistic expression",
    "Organize cultural festivals and competitions",
    "Preserve and celebrate traditional arts and crafts",
    "Develop stage confidence and presentation skills",
    "Encourage participation in inter-college cultural events",
    "Create a vibrant cultural atmosphere on campus"
  ];

  const fallbackStaff = [
    { name: "Dr. Radha Krishna", designation: "Cultural Club Coordinator", department: "Fine Arts" },
    { name: "Prof. Sunita Sharma", designation: "Dance Instructor", department: "Performing Arts" },
    { name: "Mr. Ganesh Kumar", designation: "Music Director", department: "Music" }
  ];

  const fallbackGallery = [
    "/lovable-uploads/828ea20e-f759-4b97-aa60-3dc97555221f.png",
    "/lovable-uploads/85f3d76b-36b0-4119-9ae0-75167cea9d0b.png",
    "/lovable-uploads/8ca0ef83-413e-4894-9e73-7361e0c0106c.png"
  ];

  return (
    <PageLayout 
      title="Cultural Activities Club" 
      description="Promoting artistic expression and cultural heritage through various cultural programs at SVRM College"
    >
      <div className="space-y-8">
        {/* About Cultural Club */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">About Cultural Activities Club</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {service?.description || defaultDescription}
            </p>
          </CardContent>
        </Card>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(service?.vision || service?.mission) ? (
            <>
              {service?.vision && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="outline">Vision</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.vision}</p>
                  </CardContent>
                </Card>
              )}
              {service?.mission && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="outline">Mission</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.mission}</p>
                  </CardContent>
                </Card>
              )}
            </>
          ) : (
            visionMission.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline">{item.type}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            ))
          )}
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

        {/* Staff Photos and Designations */}
        <Card>
          <CardHeader>
            <CardTitle>Cultural Club Staff</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(staff.length > 0 ? staff : fallbackStaff).map((member, index) => (
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
            </div>
          </CardContent>
        </Card>

        {/* Photo Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>Photo Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(gallery.length > 0 ? gallery.map(img => img.image_url) : fallbackGallery).map((image, index) => (
                <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Cultural Activity ${index + 1}`}
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

export default CulturalClub;