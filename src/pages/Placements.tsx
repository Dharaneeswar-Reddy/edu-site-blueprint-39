
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Building, Users, Award, TrendingUp, Target, MapPin, GraduationCap, UserCheck, Calendar, Building2 } from "lucide-react";

const Placements = () => {
  const topRecruiters = [
    "Microsoft", "TCS", "Infosys", "Wipro", "Amazon", 
    "IBM", "Accenture", "L&T Infotech", "Cognizant", "Tech Mahindra",
    "Google", "HCL", "Capgemini", "Deloitte", "Oracle"
  ];

  const placementStats = [
    { year: "2024-25", placed: 382, totalStudents: 425, percentagePlaced: 90 },
    { year: "2023-24", placed: 364, totalStudents: 412, percentagePlaced: 88 },
    { year: "2022-23", placed: 345, totalStudents: 401, percentagePlaced: 86 },
    { year: "2021-22", placed: 302, totalStudents: 376, percentagePlaced: 80 }
  ];

  const departmentPlacements = [
    { department: "Computer Science", placed: 145, total: 152, percentage: 95, avgPackage: "7.2 LPA" },
    { department: "Commerce", placed: 89, total: 98, percentage: 91, avgPackage: "4.5 LPA" },
    { department: "Mathematics", placed: 67, total: 75, percentage: 89, avgPackage: "5.8 LPA" },
    { department: "Physics", placed: 45, total: 52, percentage: 87, avgPackage: "6.1 LPA" },
    { department: "Chemistry", placed: 36, total: 48, percentage: 75, avgPackage: "5.2 LPA" }
  ];

  const placementStaff = [
    { name: "Dr. Rajesh Kumar", designation: "Placement Officer", experience: "15 Years", contact: "placement@svrmc.edu.in" },
    { name: "Ms. Priya Sharma", designation: "Training Coordinator", experience: "8 Years", contact: "training@svrmc.edu.in" },
    { name: "Mr. Suresh Reddy", designation: "Industry Relations", experience: "12 Years", contact: "industry@svrmc.edu.in" },
    { name: "Ms. Lakshmi Devi", designation: "Student Counselor", experience: "6 Years", contact: "counseling@svrmc.edu.in" }
  ];

  const activities = [
    { title: "Industry Interaction Sessions", description: "Regular sessions with industry experts", frequency: "Monthly" },
    { title: "Mock Interviews", description: "Practice interviews with feedback", frequency: "Weekly" },
    { title: "Resume Building Workshops", description: "Professional resume writing guidance", frequency: "Bi-weekly" },
    { title: "Soft Skills Training", description: "Communication and personality development", frequency: "Weekly" },
    { title: "Technical Training", description: "Latest technology and skill enhancement", frequency: "Daily" },
    { title: "Campus Drives", description: "On-campus recruitment drives", frequency: "Regular" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Campus Placements</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SVRMC takes immense pride in its outstanding placement record, consistently achieving excellence 
              in connecting our talented students with leading organizations across diverse industries.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto p-4 rounded-full bg-primary/10">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary mt-4">90%+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">Placement Rate</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto p-4 rounded-full bg-secondary/20">
                  <Building className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-3xl font-bold text-secondary mt-4">150+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">Recruiting Companies</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto p-4 rounded-full bg-accent/20">
                  <Award className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-3xl font-bold text-accent-foreground mt-4">18 LPA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">Highest Package</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto p-4 rounded-full bg-primary/10">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary mt-4">6.5 LPA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">Average Package</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Placements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">About Placements</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            </div>
            
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      The Training and Placement Cell at SVRMC is dedicated to bridging the gap between academia and industry. 
                      We focus on holistic development of our students, ensuring they are industry-ready with both technical 
                      competence and professional skills.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-primary mb-4">Our Approach</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We believe in personalized career guidance, comprehensive skill development, and strong industry partnerships. 
                      Our systematic approach includes pre-placement training, career counseling, and continuous support 
                      throughout the placement process.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Target className="h-6 w-6 text-primary" />
                      <span className="font-medium">Industry-Aligned Curriculum</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-6 w-6 text-primary" />
                      <span className="font-medium">Personalized Mentoring</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Building2 className="h-6 w-6 text-primary" />
                      <span className="font-medium">Strong Industry Connect</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="h-6 w-6 text-primary" />
                      <span className="font-medium">Continuous Skill Development</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Campus Selection Process */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Campus Selection Process</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-primary/10 mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <CardTitle className="text-lg">Pre-Placement Talk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Company presentation about opportunities and requirements</p>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-secondary/20 mb-4">
                  <span className="text-xl font-bold text-secondary">2</span>
                </div>
                <CardTitle className="text-lg">Written Test</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Aptitude, technical, and domain-specific assessments</p>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-accent/20 mb-4">
                  <span className="text-xl font-bold text-accent-foreground">3</span>
                </div>
                <CardTitle className="text-lg">Group Discussion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Communication skills and teamwork evaluation</p>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-primary/10 mb-4">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <CardTitle className="text-lg">Personal Interview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Final assessment and offer discussion</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Department-wise Placements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Department-wise Placements</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <Card className="border-primary/20">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-primary/20">
                      <th className="text-left py-4 px-4 font-semibold text-primary">Department</th>
                      <th className="text-left py-4 px-4 font-semibold text-primary">Students Placed</th>
                      <th className="text-left py-4 px-4 font-semibold text-primary">Total Students</th>
                      <th className="text-left py-4 px-4 font-semibold text-primary">Percentage</th>
                      <th className="text-left py-4 px-4 font-semibold text-primary">Avg Package</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departmentPlacements.map((dept, index) => (
                      <tr key={index} className="border-b border-muted hover:bg-secondary/5 transition-colors">
                        <td className="py-4 px-4 font-medium">{dept.department}</td>
                        <td className="py-4 px-4">{dept.placed}</td>
                        <td className="py-4 px-4">{dept.total}</td>
                        <td className="py-4 px-4">
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm font-medium">
                            {dept.percentage}%
                          </span>
                        </td>
                        <td className="py-4 px-4 font-medium text-secondary">{dept.avgPackage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Placement Staff */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Placement Staff</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {placementStaff.map((staff, index) => (
              <Card key={index} className="text-center border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto p-4 rounded-full bg-primary/10 mb-4">
                    <UserCheck className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{staff.name}</CardTitle>
                  <CardDescription className="font-medium text-secondary">{staff.designation}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">Experience: {staff.experience}</p>
                  <p className="text-sm text-primary font-medium">{staff.contact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Placement Activities</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <Calendar className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium text-secondary">{activity.frequency}</span>
                  </div>
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Official Recruiters */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Official Recruiters</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our strong industry partnerships have led to consistent recruitment from leading organizations
            </p>
          </div>

          <Card className="border-primary/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {topRecruiters.map((company, index) => (
                  <div 
                    key={index} 
                    className="border border-muted rounded-lg p-6 flex items-center justify-center h-24 bg-background hover:shadow-md hover:border-primary/30 transition-all duration-300"
                  >
                    <span className="font-semibold text-primary text-center">{company}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-4">Ready to Launch Your Career?</h2>
            <p className="text-muted-foreground mb-8">
              Get in touch with our placement cell for personalized career guidance and opportunities
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/contact" className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  Contact Placement Cell
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/student-login" className="flex items-center">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Student Portal
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Placements;
