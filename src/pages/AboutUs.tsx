import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Users, Eye, Heart, Trophy, FileCheck, Shield, Globe } from "lucide-react";

const AboutUs = () => {
  const principals = [
    {
      name: "Dr. K. Veerabhadra Rao",
      period: "2020 - Present",
      achievements: "Enhanced digital infrastructure, NAAC accreditation"
    },
    {
      name: "Prof. M. Lakshmi Prasad",
      period: "2015 - 2020", 
      achievements: "Research excellence, industry partnerships"
    },
    {
      name: "Dr. S. Rama Krishna",
      period: "2010 - 2015",
      achievements: "Academic reforms, quality enhancement"
    },
    {
      name: "Prof. V. Suryanarayana",
      period: "2005 - 2010",
      achievements: "Infrastructure development, student welfare"
    }
  ];

  const bestTeachers = [
    {
      year: "2024",
      name: "Dr. P. Srinivasa Rao",
      department: "Computer Science",
      achievement: "Excellence in Teaching and Research"
    },
    {
      year: "2023", 
      name: "Prof. M. Bharathi",
      department: "Mathematics",
      achievement: "Outstanding Contribution to Education"
    },
    {
      year: "2022",
      name: "Dr. K. Ramesh",
      department: "Physics", 
      achievement: "Innovation in Teaching Methods"
    }
  ];

  const coreValues = [
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: "Integrity",
      description: "Maintaining highest ethical standards in all academic and administrative practices"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Excellence", 
      description: "Striving for academic excellence and continuous improvement in all endeavors"
    },
    {
      icon: <Globe className="h-6 w-6 text-green-500" />,
      title: "Innovation",
      description: "Fostering creativity and innovative thinking in teaching and research"
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      title: "Inclusivity",
      description: "Creating an inclusive environment that respects diversity and promotes equity"
    }
  ];

  return (
    <PageLayout
      title="About Us"
      description="Learn about SVRMC's rich history, vision, mission, and commitment to academic excellence"
    >
      <div className="space-y-12">
        {/* College Profile */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <Award className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">College Profile</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Shri Velagapudi Ramakrishna Memorial College (SVRMC) stands as a beacon of quality education in Andhra Pradesh. 
                Established with the noble vision of providing accessible and excellent higher education, our institution has been 
                nurturing young minds for over five decades.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                As a Government Aided College sponsored by R.T.E.I. Society, we are committed to academic excellence, 
                research innovation, and holistic development of our students. Our college is affiliated with Krishna University 
                and offers undergraduate and postgraduate programs across various disciplines.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With state-of-the-art infrastructure, dedicated faculty, and a vibrant campus life, SVRMC continues to 
                be the preferred choice for quality education in the region.
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">50+</div>
                    <div className="text-sm text-gray-600">Years of Excellence</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">5000+</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">15</div>
                    <div className="text-sm text-gray-600">Departments</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision and Mission */}
        <section>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Eye className="h-6 w-6 text-blue-500" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To be a premier institution of higher learning that nurtures intellectual curiosity, promotes 
                  research excellence, and develops socially responsible global citizens who contribute meaningfully 
                  to society and nation-building.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-green-500" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To provide quality education that is accessible, affordable, and relevant to societal needs while 
                  fostering innovation, critical thinking, and ethical leadership through excellence in teaching, 
                  research, and community engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Successive Principals */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-6 w-6 text-blue-600" />
                Successive Principals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {principals.map((principal, index) => (
                  <div key={index} className="border-l-4 border-l-blue-200 pl-6 py-4 bg-gray-50 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-gray-900">{principal.name}</h3>
                    <p className="text-blue-600 font-medium">{principal.period}</p>
                    <p className="text-gray-700 mt-2">{principal.achievements}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Principal's Message */}
        <section className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Principal's Message</h2>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <img 
                src="/lovable-uploads/43b08f5f-94a1-4efc-a4bc-d959843cb7ea.png" 
                alt="Principal" 
                className="w-48 h-48 rounded-full mx-auto border-4 border-white shadow-lg"
              />
              <h3 className="text-xl font-semibold mt-4">Dr. K. Veerabhadra Rao</h3>
              <p className="text-blue-600">Principal</p>
            </div>
            <div className="md:col-span-2">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "Education is not just about acquiring knowledge; it's about transforming lives and building character. 
                At SVRMC, we are committed to providing an educational environment that nurtures intellectual growth, 
                promotes innovation, and instills values that will guide our students throughout their lives."
              </blockquote>
              <p className="text-gray-700 leading-relaxed">
                As we move forward in the 21st century, our college continues to adapt and evolve while maintaining 
                our core commitment to excellence. We strive to prepare our students not just for careers, but for 
                life itself, ensuring they become responsible citizens who contribute positively to society.
              </p>
            </div>
          </div>
        </section>

        {/* Best Teacher Awards */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Trophy className="h-6 w-6 text-yellow-500" />
                Best Teacher Awards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {bestTeachers.map((teacher, index) => (
                  <Card key={index} className="border border-yellow-200 bg-yellow-50">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-yellow-600 mb-2">{teacher.year}</div>
                      <h3 className="text-lg font-semibold mb-1">{teacher.name}</h3>
                      <p className="text-blue-600 font-medium mb-2">{teacher.department}</p>
                      <p className="text-gray-700 text-sm">{teacher.achievement}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Certificates */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Accreditations & Certifications</h2>
          <Tabs defaultValue="naac" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="naac">NAAC Certificate</TabsTrigger>
              <TabsTrigger value="aishe">AISHE Certificate</TabsTrigger>
              <TabsTrigger value="iso">ISO Certificate</TabsTrigger>
            </TabsList>
            
            <TabsContent value="naac" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileCheck className="h-6 w-6 text-green-600" />
                    NAAC Accreditation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Our college has been accredited by the National Assessment and Accreditation Council (NAAC) 
                        with an 'A' grade, recognizing our commitment to quality education and institutional excellence.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Grade: A (3.2 CGPA)</li>
                        <li>• Validity: 2023-2028</li>
                        <li>• Peer Team Visit: March 2023</li>
                        <li>• Key Strengths: Teaching-Learning, Infrastructure, Research</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">A</div>
                      <div className="text-lg font-semibold text-gray-900">NAAC Grade</div>
                      <div className="text-sm text-gray-600">Valid until 2028</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="aishe" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileCheck className="h-6 w-6 text-blue-600" />
                    AISHE Registration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Registered under All India Survey on Higher Education (AISHE), demonstrating our compliance 
                        with national higher education standards and data transparency.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• AISHE Code: C-2301</li>
                        <li>• Registration Year: 2018</li>
                        <li>• Status: Active</li>
                        <li>• Data Submission: Annual</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-2">C-2301</div>
                      <div className="text-lg font-semibold text-gray-900">AISHE Code</div>
                      <div className="text-sm text-gray-600">Since 2018</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="iso" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-purple-600" />
                    ISO Certification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Certified under ISO 9001:2015 Quality Management System, ensuring adherence to international 
                        quality standards in educational service delivery.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Standard: ISO 9001:2015</li>
                        <li>• Certificate No: QMS-EDU-2023-001</li>
                        <li>• Validity: 2023-2026</li>
                        <li>• Scope: Educational Services</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg text-center">
                      <div className="text-xl font-bold text-purple-600 mb-2">ISO 9001:2015</div>
                      <div className="text-lg font-semibold text-gray-900">Quality Management</div>
                      <div className="text-sm text-gray-600">Valid until 2026</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </PageLayout>
  );
};

export default AboutUs;