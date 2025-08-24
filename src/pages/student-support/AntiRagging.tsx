import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AntiRagging = () => {
  const visionMission = [
    {
      type: "Vision",
      content: "To create a ragging-free environment that promotes dignity, respect, and psychological well-being of all students."
    },
    {
      type: "Mission",
      content: "To prevent and eliminate ragging through awareness, strict monitoring, and immediate action against any form of harassment or intimidation."
    }
  ];

  const objectives = [
    "Prohibit any conduct that constitutes ragging",
    "Create awareness about the harmful effects of ragging",
    "Establish mechanisms for reporting and addressing ragging incidents",
    "Provide support and counseling to affected students",
    "Implement preventive measures and monitoring systems",
    "Ensure swift and appropriate action against perpetrators"
  ];

  const yearlyReports = [
    { year: "2024", title: "Anti-Ragging Compliance Report", size: "1.6 MB" },
    { year: "2023", title: "Awareness Campaign Report", size: "2.1 MB" },
    { year: "2022", title: "Committee Activities Report", size: "1.9 MB" }
  ];

  const staff = [
    { name: "Dr. Vijay Kumar", designation: "Anti-Ragging Committee Chairperson", department: "Principal" },
    { name: "Prof. Sangita Devi", designation: "Committee Member", department: "Student Welfare" },
    { name: "Mr. Raman Singh", designation: "Security Officer", department: "Security" }
  ];

  const galleryImages = [
    "/lovable-uploads/71dea894-961d-4fd6-ac1f-78e8db8d93b4.png",
    "/lovable-uploads/7e88e73b-ef9a-4c29-a6b7-de49570db1f5.png",
    "/lovable-uploads/805efae8-1428-4b19-9a41-f2f62680aefc.png"
  ];

  return (
    <PageLayout 
      title="Anti-Ragging Committee" 
      description="Ensuring a safe and harassment-free campus environment at SVRM College"
    >
      <div className="space-y-8">
        {/* About Anti-Ragging */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">About Anti-Ragging Committee</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              The Anti-Ragging Committee at SVRM College has been constituted as per the directives of the University Grants Commission (UGC) and the Supreme Court of India to prevent and eliminate ragging in all its forms. The committee is committed to maintaining a safe, secure, and dignified environment for all students. We have a zero-tolerance policy towards ragging and take immediate action against any reported incidents. The committee works proactively to create awareness about the psychological and physical harm caused by ragging and ensures that all students can pursue their education without fear or intimidation.
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
            <CardTitle>Anti-Ragging Committee Members</CardTitle>
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
                    alt={`Anti-Ragging Activity ${index + 1}`}
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

export default AntiRagging;