import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WomenEmpowerment = () => {
  const visionMission = [
    {
      type: "Vision",
      content: "To create an empowering environment that fosters gender equality, women's leadership, and holistic development of female students."
    },
    {
      type: "Mission",
      content: "To provide comprehensive support, resources, and opportunities for women students to excel academically, professionally, and personally while promoting gender sensitization across the campus."
    }
  ];

  const objectives = [
    "Promote gender equality and women's rights awareness",
    "Provide skill development and leadership training programs",
    "Create a safe and supportive environment for women students",
    "Offer career guidance and mentorship opportunities",
    "Organize workshops on women's health and wellness",
    "Facilitate networking and collaboration among women students"
  ];

  const yearlyReports = [
    { year: "2024", title: "Women Empowerment Annual Report", size: "2.7 MB" },
    { year: "2023", title: "Gender Sensitization Program Report", size: "2.1 MB" },
    { year: "2022", title: "Women's Day Celebration Activities", size: "3.4 MB" }
  ];

  const staff = [
    { name: "Dr. Kavitha Sharma", designation: "Women Empowerment Cell Coordinator", department: "Sociology" },
    { name: "Prof. Rekha Patel", designation: "Gender Studies Expert", department: "Psychology" },
    { name: "Ms. Anita Reddy", designation: "Counselor", department: "Social Work" }
  ];

  const galleryImages = [
    "/lovable-uploads/4459cba5-4f2b-407d-9115-b78608126cab.png",
    "/lovable-uploads/455edc55-96fe-44fc-a8d0-2b69c6dd6e92.png",
    "/lovable-uploads/4b78b0b7-424d-41e9-b09c-4108e1edd3c0.png"
  ];

  return (
    <PageLayout 
      title="Women Empowerment Cell" 
      description="Promoting gender equality and women's development at SVRM College"
    >
      <div className="space-y-8">
        {/* About Women Empowerment */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">About Women Empowerment Cell</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              The Women Empowerment Cell at SVRM College is dedicated to creating an inclusive and supportive environment that promotes gender equality and empowers women students to achieve their full potential. Established in 2016, our cell works towards breaking gender barriers, promoting women's rights, and fostering leadership qualities among female students. We organize various programs, workshops, and initiatives that address issues related to women's safety, career development, health awareness, and skill enhancement. Our goal is to create confident, independent, and socially responsible women leaders who can contribute meaningfully to society.
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
            <CardTitle>Women Empowerment Cell Staff</CardTitle>
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
                    alt={`Women Empowerment Activity ${index + 1}`}
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

export default WomenEmpowerment;