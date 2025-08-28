import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  useStudentSupportServices,
  useStudentSupportReports, 
  useStudentSupportStaff, 
  useStudentSupportGallery 
} from "@/hooks/useStudentSupportServices";

const ConsumerClub = () => {
  const serviceName = "Consumer Club";
  const { services } = useStudentSupportServices(serviceName);
  const { reports } = useStudentSupportReports(serviceName);
  const { staff } = useStudentSupportStaff(serviceName);
  const { gallery } = useStudentSupportGallery(serviceName);

  const service = services[0];

  const defaultDescription = "The Consumer Awareness Club at SVRM College is dedicated to educating students about their rights as consumers and promoting responsible consumption practices. Through workshops, seminars, and awareness campaigns, we help students understand product quality, safety standards, pricing mechanisms, and complaint redressal procedures.";
  
  const visionMission = [
    {
      type: "Vision",
      content: "To create aware and informed consumers who understand their rights and responsibilities in the marketplace."
    },
    {
      type: "Mission",  
      content: "To educate students about consumer rights, promote ethical business practices, and develop skills for informed decision-making in consumer transactions."
    }
  ];

  const objectives = [
    "Create awareness about consumer rights and responsibilities",
    "Educate about quality standards and product safety",
    "Promote ethical consumption and sustainable practices",
    "Develop skills for complaint redressal mechanisms",
    "Organize consumer awareness campaigns",
    "Foster responsible consumer behavior"
  ];

  const fallbackStaff = [
    { name: "Prof. Lakshmi Devi", designation: "Consumer Club Coordinator", department: "Commerce" },
    { name: "Dr. Hari Krishna", designation: "Legal Advisor", department: "Law" },
    { name: "Ms. Bharati Sharma", designation: "Program Assistant", department: "Economics" }
  ];

  return (
    <PageLayout 
      title="Consumer Awareness Club" 
      description="Promoting consumer rights and responsible consumption practices at SVRM College"
    >
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">About Consumer Awareness Club</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {service?.description || defaultDescription}
            </p>
          </CardContent>
        </Card>

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

        <Card>
          <CardHeader>
            <CardTitle>Consumer Club Staff</CardTitle>
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

        {gallery.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Photo Gallery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {gallery.map((img, index) => (
                  <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <img 
                      src={img.image_url} 
                      alt={`Consumer Club Activity ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </PageLayout>
  );
};

export default ConsumerClub;