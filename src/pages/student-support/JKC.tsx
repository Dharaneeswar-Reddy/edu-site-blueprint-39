import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  useStudentSupportServices,
  useStudentSupportReports, 
  useStudentSupportStaff, 
  useStudentSupportGallery 
} from "@/hooks/useStudentSupportServices";

const JKC = () => {
  const serviceName = "JKC";
  const { services } = useStudentSupportServices(serviceName);
  const { reports } = useStudentSupportReports(serviceName);
  const { staff } = useStudentSupportStaff(serviceName);
  const { gallery } = useStudentSupportGallery(serviceName);

  const service = services[0];

  // Fallback data for when no database entries exist
  const defaultDescription = "The Jawahar Knowledge Centre (JKC) at SVRM College serves as a hub for academic research, digital learning, and knowledge dissemination. Named after India's first Prime Minister, Pandit Jawaharlal Nehru, the centre embodies his vision of scientific temper and intellectual curiosity.";
  
  const fallbackStaff = [
    { name: "Dr. Rajesh Kumar", designation: "JKC Coordinator", department: "Library Science" },
    { name: "Prof. Meera Sharma", designation: "Research Facilitator", department: "Information Technology" },
    { name: "Mr. Amit Singh", designation: "Digital Library Manager", department: "Computer Science" }
  ];

  const fallbackGallery = [
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
              {service?.description || defaultDescription}
            </p>
          </CardContent>
        </Card>

        {/* Vision and Mission */}
        {(service?.vision || service?.mission) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>
        )}

        {/* Objectives */}
        {service?.objectives && service.objectives.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {service.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

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
            <CardTitle>JKC Staff</CardTitle>
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