
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Calendar, Award, FileText, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Academics = () => {
  const departments = [
    {
      id: 1,
      name: "Computer Science & Engineering",
      icon: <BookOpen className="h-6 w-6 text-college-blue" />,
      programs: 6,
      faculty: 28,
      image: "https://source.unsplash.com/random/300x200?computer"
    },
    {
      id: 2,
      name: "Mechanical Engineering",
      icon: <BookOpen className="h-6 w-6 text-college-blue" />,
      programs: 4,
      faculty: 22,
      image: "https://source.unsplash.com/random/300x200?mechanical"
    },
    {
      id: 3,
      name: "Electronics & Communication",
      icon: <BookOpen className="h-6 w-6 text-college-blue" />,
      programs: 5,
      faculty: 25,
      image: "https://source.unsplash.com/random/300x200?electronics"
    },
    {
      id: 4,
      name: "Civil Engineering",
      icon: <BookOpen className="h-6 w-6 text-college-blue" />,
      programs: 3,
      faculty: 18,
      image: "https://source.unsplash.com/random/300x200?construction"
    },
    {
      id: 5,
      name: "Electrical Engineering",
      icon: <BookOpen className="h-6 w-6 text-college-blue" />,
      programs: 4,
      faculty: 20,
      image: "https://source.unsplash.com/random/300x200?electrical"
    },
    {
      id: 6,
      name: "Science & Mathematics",
      icon: <BookOpen className="h-6 w-6 text-college-blue" />,
      programs: 7,
      faculty: 32,
      image: "https://source.unsplash.com/random/300x200?mathematics"
    },
    {
      id: 7,
      name: "Management Studies",
      icon: <BookOpen className="h-6 w-6 text-college-blue" />,
      programs: 4,
      faculty: 15,
      image: "https://source.unsplash.com/random/300x200?management"
    },
    {
      id: 8,
      name: "Humanities & Social Sciences",
      icon: <BookOpen className="h-6 w-6 text-college-blue" />,
      programs: 5,
      faculty: 24,
      image: "https://source.unsplash.com/random/300x200?humanities"
    }
  ];
  
  const facilities = [
    {
      name: "Central Library",
      description: "Over 50,000 books, online journals, e-books, and dedicated study spaces.",
      icon: <BookOpen className="h-6 w-6 text-white" />
    },
    {
      name: "Research Laboratories",
      description: "State-of-the-art research facilities across various disciplines.",
      icon: <FileText className="h-6 w-6 text-white" />
    },
    {
      name: "Computing Centers",
      description: "Multiple computer labs with the latest hardware and software resources.",
      icon: <BookOpen className="h-6 w-6 text-white" />
    },
    {
      name: "Seminar Halls",
      description: "Fully equipped seminar halls for academic events and conferences.",
      icon: <Users className="h-6 w-6 text-white" />
    },
    {
      name: "Innovation Hub",
      description: "Dedicated space for fostering innovation and entrepreneurship.",
      icon: <Award className="h-6 w-6 text-white" />
    },
    {
      name: "Smart Classrooms",
      description: "Technology-enabled classrooms for enhanced learning experiences.",
      icon: <GraduationCap className="h-6 w-6 text-white" />
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-college-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Academic Excellence</h1>
            <p className="text-lg md:text-xl mb-8">Discover our comprehensive academic programs, cutting-edge research opportunities, and innovative teaching methodologies that prepare students for success.</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-college-blue hover:bg-gray-100" asChild>
                <Link to="/departments">Explore Departments</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-college-blue" asChild>
                <Link to="/research">Research Initiatives</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Academic Philosophy</h2>
              <p className="mb-4">At SVRMC, we believe in providing a holistic educational experience that combines theoretical knowledge with practical skills. Our academic philosophy is centered around fostering critical thinking, innovation, and ethical leadership.</p>
              <p className="mb-6">We are committed to maintaining high academic standards through a rigorous curriculum, qualified faculty, and continuous assessment and improvement of our teaching methodologies.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-college-blue mr-2" />
                    <h3 className="font-semibold">Semester System</h3>
                  </div>
                  <p className="text-sm text-gray-600">Structured academic calendar with two semesters per year.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-2">
                    <FileText className="h-5 w-5 text-college-blue mr-2" />
                    <h3 className="font-semibold">Choice-Based Credits</h3>
                  </div>
                  <p className="text-sm text-gray-600">Flexibility to choose electives across disciplines.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-2">
                    <Users className="h-5 w-5 text-college-blue mr-2" />
                    <h3 className="font-semibold">Mentorship Program</h3>
                  </div>
                  <p className="text-sm text-gray-600">Dedicated faculty mentors for academic guidance.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-2">
                    <Award className="h-5 w-5 text-college-blue mr-2" />
                    <h3 className="font-semibold">Industry Integration</h3>
                  </div>
                  <p className="text-sm text-gray-600">Regular industry exposure through projects and internships.</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="/lovable-uploads/bf17da84-634b-4ca1-b09f-996816eb4e61.png" alt="Academic Excellence" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Departments */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="section-title">Our Departments</h2>
            <Button variant="outline" className="mt-4 md:mt-0" asChild>
              <Link to="/departments">View All Departments</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => (
              <Card key={dept.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <img 
                  src={dept.image} 
                  alt={dept.name} 
                  className="w-full h-40 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{dept.name}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <GraduationCap className="h-4 w-4 mr-1" /> {dept.programs} Programs
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" /> {dept.faculty} Faculty
                    </span>
                  </div>
                  <Link 
                    to={`/departments/${dept.id}`} 
                    className="text-college-blue hover:underline inline-flex items-center font-medium text-sm"
                  >
                    Department Details <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-8 text-center">Academic Programs</h2>
          
          <Tabs defaultValue="undergraduate" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-1 sm:grid-cols-3 w-full mb-8">
              <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
              <TabsTrigger value="postgraduate">Postgraduate</TabsTrigger>
              <TabsTrigger value="research">Research Programs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="undergraduate">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "B.Tech in Computer Science & Engineering",
                    duration: "4 Years",
                    eligibility: "10+2 with PCM, JEE Main/State Level Entrance Test",
                    highlights: ["AICTE Approved", "Industry-Oriented Curriculum", "Specialized Electives"]
                  },
                  {
                    title: "B.Tech in Electronics & Communication Engineering",
                    duration: "4 Years",
                    eligibility: "10+2 with PCM, JEE Main/State Level Entrance Test",
                    highlights: ["Advanced Electronics Labs", "IoT Specialization", "Industry Partnerships"]
                  },
                  {
                    title: "B.Sc in Computer Science",
                    duration: "3 Years",
                    eligibility: "10+2 with Mathematics",
                    highlights: ["Programming Fundamentals", "Data Science Track", "Project-Based Learning"]
                  },
                  {
                    title: "Bachelor of Commerce (B.Com)",
                    duration: "3 Years",
                    eligibility: "10+2 in any stream",
                    highlights: ["Accounting Specialization", "Finance Focus", "Industry Internships"]
                  }
                ].map((program, index) => (
                  <Card key={index} className="hover:shadow-md transition-all">
                    <CardHeader>
                      <CardTitle className="flex items-start justify-between">
                        <span>{program.title}</span>
                        <span className="text-sm bg-college-blue/10 text-college-blue px-3 py-1 rounded-full">
                          {program.duration}
                        </span>
                      </CardTitle>
                      <CardDescription>Eligibility: {program.eligibility}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        {program.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-college-blue mr-2"></div>
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="link" className="pl-0 text-college-blue mt-4" asChild>
                        <Link to="#">View Program Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild>
                  <Link to="/admission">Apply for Undergraduate Programs</Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="postgraduate">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "M.Tech in Computer Science & Engineering",
                    duration: "2 Years",
                    eligibility: "B.Tech/B.E in relevant discipline, GATE score preferred",
                    highlights: ["Specializations in AI/ML", "Research Projects", "Teaching Assistantships"]
                  },
                  {
                    title: "M.Tech in Digital Communications",
                    duration: "2 Years",
                    eligibility: "B.Tech/B.E in ECE/EEE, GATE score preferred",
                    highlights: ["Advanced Signal Processing", "5G Technologies", "Industry Collaborations"]
                  },
                  {
                    title: "MBA",
                    duration: "2 Years",
                    eligibility: "Bachelor's degree in any discipline, MBA entrance test",
                    highlights: ["Multiple Specializations", "Industry Mentorship", "Leadership Development"]
                  },
                  {
                    title: "M.Sc in Applied Mathematics",
                    duration: "2 Years",
                    eligibility: "B.Sc with Mathematics",
                    highlights: ["Advanced Numerical Methods", "Computational Mathematics", "Research Focus"]
                  }
                ].map((program, index) => (
                  <Card key={index} className="hover:shadow-md transition-all">
                    <CardHeader>
                      <CardTitle className="flex items-start justify-between">
                        <span>{program.title}</span>
                        <span className="text-sm bg-college-blue/10 text-college-blue px-3 py-1 rounded-full">
                          {program.duration}
                        </span>
                      </CardTitle>
                      <CardDescription>Eligibility: {program.eligibility}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        {program.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-college-blue mr-2"></div>
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="link" className="pl-0 text-college-blue mt-4" asChild>
                        <Link to="#">View Program Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild>
                  <Link to="/admission">Apply for Postgraduate Programs</Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="research">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Ph.D in Engineering",
                    duration: "3-5 Years",
                    eligibility: "Master's degree in relevant discipline, entrance test/interview",
                    highlights: ["Fully-funded scholarships available", "Research Publications", "International Collaborations"]
                  },
                  {
                    title: "Ph.D in Sciences",
                    duration: "3-5 Years",
                    eligibility: "Master's degree in Science, NET/GATE/SLET qualification preferred",
                    highlights: ["Well-equipped Research Laboratories", "Conference Funding", "Industry Projects"]
                  },
                  {
                    title: "Ph.D in Management",
                    duration: "3-5 Years",
                    eligibility: "Master's degree in Management/relevant discipline, entrance test/interview",
                    highlights: ["Contemporary Research Areas", "Case Study Development", "Academic Mentoring"]
                  },
                  {
                    title: "Research Fellowship Programs",
                    duration: "1-2 Years",
                    eligibility: "Bachelor's/Master's degree with exceptional academic record",
                    highlights: ["Stipend Support", "Publication Opportunities", "Career Development"]
                  }
                ].map((program, index) => (
                  <Card key={index} className="hover:shadow-md transition-all">
                    <CardHeader>
                      <CardTitle className="flex items-start justify-between">
                        <span>{program.title}</span>
                        <span className="text-sm bg-college-blue/10 text-college-blue px-3 py-1 rounded-full">
                          {program.duration}
                        </span>
                      </CardTitle>
                      <CardDescription>Eligibility: {program.eligibility}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        {program.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-college-blue mr-2"></div>
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="link" className="pl-0 text-college-blue mt-4" asChild>
                        <Link to="#">View Program Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild>
                  <Link to="/research">Explore Research Opportunities</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Academic Facilities */}
      <section className="py-16 bg-college-blue text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-white after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2">Academic Facilities</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all">
                <div className="bg-college-gold p-3 rounded-full w-fit mb-4">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{facility.name}</h3>
                <p className="text-white/80">{facility.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-white text-college-blue hover:bg-gray-100">
              Explore Campus Facilities
            </Button>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title">Academic Calendar</h2>
              <p className="mb-6">Our academic year is divided into two semesters, with various academic activities, examinations, and events scheduled throughout the year.</p>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader className="bg-college-blue/10 py-3">
                    <CardTitle className="text-center">Odd Semester (July - December)</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span>Registration & Orientation</span>
                        <span className="font-medium">July 1-7, 2025</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Classes Begin</span>
                        <span className="font-medium">July 8, 2025</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Mid-Semester Examinations</span>
                        <span className="font-medium">September 15-22, 2025</span>
                      </li>
                      <li className="flex justify-between">
                        <span>End-Semester Examinations</span>
                        <span className="font-medium">November 25 - December 10, 2025</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Semester Break</span>
                        <span className="font-medium">December 11-31, 2025</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="bg-college-blue/10 py-3">
                    <CardTitle className="text-center">Even Semester (January - June)</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span>Registration</span>
                        <span className="font-medium">January 2-5, 2026</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Classes Begin</span>
                        <span className="font-medium">January 6, 2026</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Mid-Semester Examinations</span>
                        <span className="font-medium">March 10-17, 2026</span>
                      </li>
                      <li className="flex justify-between">
                        <span>End-Semester Examinations</span>
                        <span className="font-medium">May 20 - June 5, 2026</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Summer Break</span>
                        <span className="font-medium">June 6-30, 2026</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-6">
                <Button variant="outline" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> Download Detailed Calendar
                </Button>
              </div>
            </div>
            
            <div>
              <h2 className="section-title">Academic Resources</h2>
              <p className="mb-6">SVRMC provides a range of academic resources to support student learning and development.</p>
              
              <div className="space-y-4">
                <Card className="p-5 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-college-blue/10 p-3 rounded-full">
                      <BookOpen className="h-5 w-5 text-college-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Digital Library</h3>
                      <p className="text-gray-600 text-sm">Access to e-books, journals, and research papers. Available 24/7 for all enrolled students.</p>
                      <Button variant="link" className="pl-0 text-college-blue text-sm mt-1">Access Digital Library</Button>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-5 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-college-blue/10 p-3 rounded-full">
                      <FileText className="h-5 w-5 text-college-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Learning Management System</h3>
                      <p className="text-gray-600 text-sm">Online platform for course materials, assignments, and discussions.</p>
                      <Button variant="link" className="pl-0 text-college-blue text-sm mt-1">Login to LMS</Button>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-5 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-college-blue/10 p-3 rounded-full">
                      <GraduationCap className="h-5 w-5 text-college-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Academic Support Center</h3>
                      <p className="text-gray-600 text-sm">Tutoring services, writing assistance, and academic counseling.</p>
                      <Button variant="link" className="pl-0 text-college-blue text-sm mt-1">Schedule Appointment</Button>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-5 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-college-blue/10 p-3 rounded-full">
                      <Award className="h-5 w-5 text-college-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Student Research Portal</h3>
                      <p className="text-gray-600 text-sm">Information on research opportunities, conferences, and publications.</p>
                      <Button variant="link" className="pl-0 text-college-blue text-sm mt-1">Visit Research Portal</Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Academic Community?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Explore our programs and take the next step towards a rewarding educational journey at SVRMC.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-college-blue hover:bg-blue-700" asChild>
              <Link to="/admission">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-college-blue text-college-blue hover:bg-college-blue hover:text-white" asChild>
              <Link to="/contact">Contact Academic Office</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
