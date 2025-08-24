import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ConsumerClub = () => {
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

  const yearlyReports = [
    { year: "2024", title: "Consumer Awareness Campaign Report", size: "2.4 MB" },
    { year: "2023", title: "Workshop on Consumer Rights", size: "1.9 MB" },
    { year: "2022", title: "Consumer Club Activities Report", size: "2.1 MB" }
  ];

  const staff = [
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
              The Consumer Awareness Club at SVRM College is dedicated to educating students about their rights as consumers and promoting responsible consumption practices. Through workshops, seminars, and awareness campaigns, we help students understand product quality, safety standards, pricing mechanisms, and complaint redressal procedures.
            </p>
          </CardContent>
        </Card>

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

        <Card>
          <CardHeader>
            <CardTitle>Consumer Club Staff</CardTitle>
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
      </div>
    </PageLayout>
  );
};

export default ConsumerClub;