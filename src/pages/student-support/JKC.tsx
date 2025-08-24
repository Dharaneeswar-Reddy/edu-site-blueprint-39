import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const JKC = () => {
  const visionMission = [
    {
      type: "Vision",
      content: "To establish a comprehensive knowledge centre that facilitates research, innovation, and academic excellence through modern information technology and resources."
    },
    {
      type: "Mission",
      content: "To provide students and faculty with access to digital libraries, research databases, and collaborative learning spaces that foster intellectual growth and knowledge creation."
    }
  ];

  const objectives = [
    "Provide access to digital libraries and research databases",
    "Facilitate collaborative learning and research projects",
    "Organize workshops on information literacy and research methodologies",
    "Support academic writing and publication activities",
    "Promote innovative teaching and learning practices",
    "Establish partnerships with other academic institutions and libraries"
  ];

  const yearlyReports = [
    { year: "2024", title: "Annual Research and Innovation Report", size: "2.3 MB" },
    { year: "2023", title: "Digital Library Usage Statistics", size: "1.8 MB" },
    { year: "2022", title: "Knowledge Centre Development Report", size: "2.1 MB" }
  ];

  const staff = [
    { name: "Dr. Rajesh Kumar", designation: "JKC Coordinator", department: "Library Science" },
    { name: "Prof. Meera Sharma", designation: "Research Facilitator", department: "Information Technology" },
    { name: "Mr. Amit Singh", designation: "Digital Library Manager", department: "Computer Science" }
  ];

  const galleryImages = [
    "/lovable-uploads/14236ae3-818e-41ef-a801-cd1e4e2eb10e.png",
    "/lovable-uploads/26e5dd9a-23af-4d35-bf39-50ea0a90dcc1.png",
    "/lovable-uploads/33bce374-c279-4e5c-afa1-9a764d7977c4.png"
  ];

  return (
    <PageLayout 
      title="Jawahar Knowledge Centre (JKC)" 
      description="Center for research, innovation, and digital learning resources at SVRM College"
    >
      <div className="space-y-8">
        {/* About JKC */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">About Jawahar Knowledge Centre</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              The Jawahar Knowledge Centre (JKC) at SVRM College serves as a hub for academic research, digital learning, and knowledge dissemination. Named after India's first Prime Minister, Pandit Jawaharlal Nehru, the centre embodies his vision of scientific temper and intellectual curiosity. Established in 2018, the JKC provides state-of-the-art facilities including digital libraries, research databases, collaborative learning spaces, and modern IT infrastructure to support the academic and research needs of students and faculty.
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
            <CardTitle>JKC Staff</CardTitle>
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
                    alt={`JKC Activity ${index + 1}`}
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

export default JKC;