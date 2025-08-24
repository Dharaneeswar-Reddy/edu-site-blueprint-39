import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NSS = () => {
  const visionMission = [
    {
      type: "Vision",
      content: "To develop social consciousness and civic responsibility among students through community service and nation-building activities."
    },
    {
      type: "Mission",
      content: "To provide opportunities for students to work with communities and understand social issues while developing leadership qualities and contributing to national development."
    }
  ];

  const objectives = [
    "Understand the community in which they work",
    "Understand themselves in relation to their community",
    "Identify the needs and problems of the community",
    "Develop among themselves a sense of social and civic responsibility",
    "Utilize their knowledge in finding practical solutions to individual and community problems",
    "Develop competency required for group-living and sharing of responsibilities"
  ];

  const yearlyReports = [
    { year: "2024", title: "NSS Annual Activity Report", size: "3.2 MB" },
    { year: "2023", title: "Community Service Impact Assessment", size: "2.8 MB" },
    { year: "2022", title: "Special Camp Activities Report", size: "4.1 MB" }
  ];

  const staff = [
    { name: "Dr. Sunita Reddy", designation: "NSS Programme Officer", department: "Social Work" },
    { name: "Prof. Ravi Kumar", designation: "Assistant Programme Officer", department: "Sociology" },
    { name: "Ms. Priya Rani", designation: "NSS Coordinator", department: "Community Development" }
  ];

  const galleryImages = [
    "/lovable-uploads/365bcf12-2218-4dd4-a6e7-6d4bc591739a.png",
    "/lovable-uploads/3f2ac2fe-5cc6-403c-b266-c0a4bfc92b9a.png",
    "/lovable-uploads/43b08f5f-94a1-4efc-a4bc-d959843cb7ea.png"
  ];

  return (
    <PageLayout 
      title="National Service Scheme (NSS)" 
      description="Community service and social development program for students at SVRM College"
    >
      <div className="space-y-8">
        {/* About NSS */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">About National Service Scheme</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              The National Service Scheme (NSS) at SVRM College is a Central Sector Scheme of Government of India, Ministry of Youth Affairs & Sports. It provides opportunity to the student youth of 11th & 12th Class of schools at +2 Board level and student youth of Technical Institution, Graduate & Post Graduate at colleges and University level of India to take part in various government led community service activities & programmes. The sole aim of the NSS is to provide hands on experience to young students in delivering community service.
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
            <CardTitle>NSS Staff</CardTitle>
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
                    alt={`NSS Activity ${index + 1}`}
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

export default NSS;