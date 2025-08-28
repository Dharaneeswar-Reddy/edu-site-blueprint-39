import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  useStudentSupportServices,
  useStudentSupportReports, 
  useStudentSupportStaff, 
  useStudentSupportGallery 
} from "@/hooks/useStudentSupportServices";

const EcoClub = () => {
  const serviceName = "Eco Club";
  const { services } = useStudentSupportServices(serviceName);
  const { reports } = useStudentSupportReports(serviceName);
  const { staff } = useStudentSupportStaff(serviceName);
  const { gallery } = useStudentSupportGallery(serviceName);

  const service = services[0];

  const defaultDescription = "The Eco Club at SVRM College, established in 2017, is dedicated to creating environmental awareness and promoting sustainable practices among students and the local community. Our club works towards building an eco-friendly campus and fostering a sense of responsibility towards environmental conservation. We organize various activities including tree plantation drives, waste management programs, awareness campaigns, and research initiatives focused on environmental sustainability. Through hands-on projects and educational programs, we aim to develop environmentally conscious citizens who can contribute to global efforts in combating climate change and preserving our planet for future generations.";
  const visionMission = [
    {
      type: "Vision",
      content: "To create environmental awareness and promote sustainable practices among students and the community for a greener future."
    },
    {
      type: "Mission",
      content: "To engage students in environmental conservation activities, promote ecological consciousness, and develop sustainable solutions for environmental challenges."
    }
  ];

  const objectives = [
    "Raise awareness about environmental issues and climate change",
    "Promote sustainable practices and eco-friendly lifestyle",
    "Organize tree plantation and campus beautification drives",
    "Conduct waste management and recycling programs",
    "Educate students about biodiversity conservation",
    "Foster research in environmental sciences and green technology"
  ];

  const yearlyReports = [
    { year: "2024", title: "Environmental Action Report", size: "3.2 MB" },
    { year: "2023", title: "Green Campus Initiative Report", size: "2.8 MB" },
    { year: "2022", title: "Earth Day Activities Documentation", size: "2.5 MB" }
  ];

  const staff = [
    { name: "Dr. Sreenivas Kumar", designation: "Eco Club Coordinator", department: "Botany" },
    { name: "Prof. Lakshmi Devi", designation: "Environmental Sciences Expert", department: "Chemistry" },
    { name: "Mr. Rajesh Varma", designation: "Sustainability Advisor", department: "Zoology" }
  ];

  const galleryImages = [
    "/lovable-uploads/52a8e7b1-5b22-4a0c-b1ec-450f99bfa9bb.png",
    "/lovable-uploads/5810381d-fa14-451a-aba2-1235784bf4f2.png",
    "/lovable-uploads/5c7ebe72-4ecd-4e54-8ce5-6bf0a6141878.png"
  ];

  return (
    <PageLayout 
      title="Eco Club" 
      description="Environmental awareness and conservation initiatives at SVRM College"
    >
      <div className="space-y-8">
        {/* About Eco Club */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">About Eco Club</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              The Eco Club at SVRM College, established in 2017, is dedicated to creating environmental awareness and promoting sustainable practices among students and the local community. Our club works towards building an eco-friendly campus and fostering a sense of responsibility towards environmental conservation. We organize various activities including tree plantation drives, waste management programs, awareness campaigns, and research initiatives focused on environmental sustainability. Through hands-on projects and educational programs, we aim to develop environmentally conscious citizens who can contribute to global efforts in combating climate change and preserving our planet for future generations.
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
            <CardTitle>Eco Club Staff</CardTitle>
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
                    alt={`Eco Club Activity ${index + 1}`}
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

export default EcoClub;