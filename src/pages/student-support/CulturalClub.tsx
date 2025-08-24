import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CulturalClub = () => {
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

  const yearlyReports = [
    { year: "2024", title: "Annual Cultural Festival Report", size: "4.2 MB" },
    { year: "2023", title: "Inter-College Competition Results", size: "3.8 MB" },
    { year: "2022", title: "Cultural Activities Annual Report", size: "3.5 MB" }
  ];

  const staff = [
    { name: "Dr. Radha Krishna", designation: "Cultural Club Coordinator", department: "Fine Arts" },
    { name: "Prof. Sunita Sharma", designation: "Dance Instructor", department: "Performing Arts" },
    { name: "Mr. Ganesh Kumar", designation: "Music Director", department: "Music" }
  ];

  const galleryImages = [
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
              The Cultural Activities Club at SVRM College is a vibrant platform that celebrates the rich tapestry of Indian culture while embracing global artistic expressions. Established to nurture the creative talents of our students, the club organizes various cultural events, festivals, competitions, and workshops throughout the academic year. From traditional dance and music performances to contemporary art exhibitions and literary events, our cultural club provides students with opportunities to explore their artistic passions, develop their talents, and showcase their creativity. We believe that cultural activities play a crucial role in the holistic development of students, helping them build confidence, teamwork skills, and cultural awareness.
            </p>
          </CardContent>
        </Card>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visionMission.map((item, index) => (
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
          ))}
        </div>

        {/* Objectives */}
        <Card>
          <CardHeader>
            <CardTitle>Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Yearly Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Yearly Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {yearlyReports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h4 className="font-medium">{report.title}</h4>
                    <p className="text-sm text-muted-foreground">Year: {report.year} | Size: {report.size}</p>
                  </div>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Staff Photos and Designations */}
        <Card>
          <CardHeader>
            <CardTitle>Cultural Club Staff</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {staff.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground">Photo</span>
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
              {galleryImages.map((image, index) => (
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