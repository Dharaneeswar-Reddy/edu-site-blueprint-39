import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const GymSports = () => {
  const visionMission = [
    {
      type: "Vision",
      content: "To promote physical fitness, sportsmanship, and healthy lifestyle among students through comprehensive sports and fitness facilities."
    },
    {
      type: "Mission",
      content: "To provide state-of-the-art sports facilities and professional training that enables students to excel in sports while maintaining physical and mental wellness."
    }
  ];

  const objectives = [
    "Promote physical fitness and healthy lifestyle among students",
    "Develop sportsmanship and team spirit",
    "Identify and nurture sporting talents",
    "Organize inter-college and intra-college competitions",
    "Provide professional coaching and training",
    "Maintain world-class sports facilities and equipment"
  ];

  const yearlyReports = [
    { year: "2024", title: "Sports Achievement Report", size: "3.8 MB" },
    { year: "2023", title: "Inter-College Tournament Results", size: "2.9 MB" },
    { year: "2022", title: "Fitness Program Impact Assessment", size: "2.4 MB" }
  ];

  const staff = [
    { name: "Mr. Ravi Kumar", designation: "Sports Director", department: "Physical Education" },
    { name: "Ms. Pooja Sharma", designation: "Fitness Instructor", department: "Sports Science" },
    { name: "Coach Suresh Babu", designation: "Cricket Coach", department: "Sports" }
  ];

  const galleryImages = [
    "/lovable-uploads/5eef37d5-a7a2-416d-9fb3-7df167c87f7e.png",
    "/lovable-uploads/60af87cc-1db6-4454-a9d2-88641715b200.png",
    "/lovable-uploads/662ebac1-9113-46ee-b212-a9a1526878d4.png"
  ];

  return (
    <PageLayout 
      title="Gym and Sports Facility" 
      description="Modern fitness and sports facilities for student wellness and athletic development at SVRM College"
    >
      <div className="space-y-8">
        {/* About Gym and Sports */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">About Gym and Sports Facility</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              The Gym and Sports Facility at SVRM College is designed to promote physical fitness, mental wellness, and sporting excellence among our students. Our state-of-the-art facility includes a modern gymnasium equipped with the latest fitness equipment, multiple sports courts for basketball, volleyball, and badminton, a well-maintained cricket ground, and dedicated spaces for indoor games. We believe that physical education is an integral part of overall development, and our facility provides students with opportunities to engage in various sports activities, maintain their fitness, and develop teamwork and leadership skills through competitive sports.
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
            <CardTitle>Sports Staff</CardTitle>
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
                    alt={`Sports Activity ${index + 1}`}
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

export default GymSports;