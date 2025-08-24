import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NCCProgram = () => {
  const visionMission = [
    {
      type: "Vision",
      content: "To develop character, comradeship, discipline, leadership, secular outlook, spirit of adventure and ideals of selfless service among young citizens."
    },
    {
      type: "Mission",
      content: "To create a human resource of organized, trained and motivated youth to provide leadership in all walks of life and be always available for the service of the nation."
    }
  ];

  const objectives = [
    "Develop character, comradeship, discipline, leadership and secular outlook among cadets",
    "Create a sense of adventure and sportsmanship",
    "Develop ideals of selfless service and patriotism",
    "Create a pool of organized, trained and motivated youth",
    "Provide an environment conducive to motivating young Indians",
    "Develop capacity to meet challenges and be useful citizens"
  ];

  const yearlyReports = [
    { year: "2024", title: "NCC Annual Training Report", size: "4.5 MB" },
    { year: "2023", title: "Republic Day Camp Participation", size: "3.2 MB" },
    { year: "2022", title: "Best Unit Award Documentation", size: "2.8 MB" }
  ];

  const staff = [
    { name: "Lt. Col. Rajesh Singh", designation: "NCC Officer", department: "Defense Studies" },
    { name: "Sgt. Priya Malhotra", designation: "Assistant NCC Officer", department: "Physical Education" },
    { name: "Sub. Amit Kumar", designation: "NCC Instructor", department: "Sports" }
  ];

  const galleryImages = [
    "/lovable-uploads/061b3c84-914c-4bb5-893f-d12d6cff9d3f.png",
    "/lovable-uploads/a2d2ff22-61cc-47fe-8ef4-7086790f77d0.png",
    "/lovable-uploads/17bb2e0f-adc8-46fd-b6dc-aa370c366ef2.png"
  ];

  return (
    <PageLayout 
      title="National Cadet Corps (NCC)" 
      description="Character building and leadership development program through military training at SVRM College"
    >
      <div className="space-y-8">
        {/* About NCC */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">About National Cadet Corps</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              The National Cadet Corps (NCC) unit at SVRM College was established in 1995 with the aim of developing character, comradeship, discipline, leadership, secular outlook, and the spirit of adventure among the youth of our nation. Our NCC unit is affiliated with the 15 Andhra Battalion and operates under the motto "Unity and Discipline". We offer training in both Army and Navy wings, providing comprehensive military training to our cadets. The NCC aims to develop qualities of character, courage, comradeship, discipline, leadership, secular outlook, spirit of adventure and sportsmanship and the ideals of selfless service among the youth.
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
            <CardTitle>NCC Staff</CardTitle>
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
                    alt={`NCC Activity ${index + 1}`}
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

export default NCCProgram;