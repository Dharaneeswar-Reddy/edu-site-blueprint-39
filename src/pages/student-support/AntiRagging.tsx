import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  useStudentSupportServices,
  useStudentSupportReports, 
  useStudentSupportStaff, 
  useStudentSupportGallery 
} from "@/hooks/useStudentSupportServices";

const AntiRagging = () => {
  const serviceName = "Anti Ragging";
  const { services } = useStudentSupportServices(serviceName);
  const { reports } = useStudentSupportReports(serviceName);
  const { staff } = useStudentSupportStaff(serviceName);
  const { gallery } = useStudentSupportGallery(serviceName);

  const service = services[0];

  // Fallback data
  const defaultDescription = "The Anti-Ragging Committee at SVRM College has been constituted as per the directives of the University Grants Commission (UGC) and the Supreme Court of India to prevent and eliminate ragging in all its forms. The committee is committed to maintaining a safe, secure, and dignified environment for all students. We have a zero-tolerance policy towards ragging and take immediate action against any reported incidents. The committee works proactively to create awareness about the psychological and physical harm caused by ragging and ensures that all students can pursue their education without fear or intimidation.";
  
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

  const fallbackStaff = [
    { name: "Dr. Vijay Kumar", designation: "Anti-Ragging Committee Chairperson", department: "Principal" },
    { name: "Prof. Sangita Devi", designation: "Committee Member", department: "Student Welfare" },
    { name: "Mr. Raman Singh", designation: "Security Officer", department: "Security" }
  ];

  const fallbackGallery = [
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
            <CardTitle>Anti-Ragging Committee Members</CardTitle>
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