import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Award, Users, Eye, Heart, Trophy, FileCheck, Shield, Globe, Building, BookOpen, FlaskConical, Computer, GraduationCap, ChevronRight } from "lucide-react";

const AboutUs = () => {
  const [expandedBuilding, setExpandedBuilding] = useState<string | null>(null);

  const infrastructureData = [
    {
      id: "library",
      name: "Central Library",
      image: "/lovable-uploads/9ecf085a-3abc-45e7-844b-b132bfa85970.png",
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      shortDescription: "Our state-of-the-art central library houses over 50,000 books, journals, and digital resources. It serves as the academic heart of our institution with modern reading facilities and research amenities.",
      fullDescription: "The Central Library spans across 10,000 sq ft with a seating capacity of 200 students. It features air-conditioned reading halls, digital library section with 50 computers, OPAC terminals, reprographic facilities, and separate sections for reference books, periodicals, and rare collections. The library operates on automation software and provides access to national and international e-journals and databases. Special facilities include discussion rooms, faculty research cabins, and multimedia viewing centers.",
      facilities: ["50,000+ Books & Journals", "Digital Library Section", "Air-conditioned Reading Halls", "OPAC Terminals", "Research Cabins"]
    },
    {
      id: "classrooms",
      name: "Smart Classrooms",
      image: "/lovable-uploads/9f96f106-897d-46e3-a4a1-4c4b8f8f9f0c.png",
      icon: <GraduationCap className="h-6 w-6 text-green-600" />,
      shortDescription: "Modern classrooms equipped with interactive smart boards, projectors, and audio-visual systems. Each classroom accommodates 60 students with ergonomic furniture and optimal lighting.",
      fullDescription: "Our 40 smart classrooms are designed with contemporary teaching methodologies in mind. Each classroom features interactive whiteboards, high-definition projectors, surround sound systems, and climate control. The ergonomic furniture includes adjustable desks and chairs, proper ventilation systems, and natural lighting optimization. Wi-Fi connectivity ensures seamless integration of digital learning resources. The classrooms also have recording capabilities for creating educational content and virtual learning sessions.",
      facilities: ["Interactive Smart Boards", "HD Projectors", "Climate Control", "Wi-Fi Connectivity", "Recording Facilities"]
    },
    {
      id: "computer-lab",
      name: "Computer Science Laboratory",
      image: "/lovable-uploads/a29d5e18-fb3d-47a3-b3d2-a210ce08d66c.png",
      icon: <Computer className="h-6 w-6 text-purple-600" />,
      shortDescription: "Advanced computer laboratory with 100 high-performance systems, latest software, and high-speed internet connectivity. Supports programming, research, and digital literacy programs.",
      fullDescription: "The Computer Science Laboratory is a 3000 sq ft facility housing 100 latest-generation computers with high-performance processors, 16GB RAM, and SSD storage. The lab runs on a dedicated fiber optic internet connection with 1Gbps speed. It features specialized software for programming languages, database management, web development, and multimedia editing. The lab includes a server room, network administration center, and separate sections for different computing disciplines. Advanced security systems and backup power ensure uninterrupted operations.",
      facilities: ["100 High-Performance Systems", "1Gbps Internet", "Latest Programming Software", "Server Room", "Backup Power Systems"]
    },
    {
      id: "physics-lab",
      name: "Physics Laboratory",
      image: "/lovable-uploads/60af87cc-1db6-4454-a9d2-88641715b200.png",
      icon: <FlaskConical className="h-6 w-6 text-orange-600" />,
      shortDescription: "Well-equipped physics laboratory with modern instruments for mechanics, optics, electronics, and quantum physics experiments. Facilitates hands-on learning and research.",
      fullDescription: "The Physics Laboratory complex includes separate labs for different branches - Mechanics Lab, Optics Lab, Electronics Lab, and Advanced Physics Lab. Each lab is equipped with precision instruments including digital oscilloscopes, function generators, spectrometers, interferometers, and quantum physics demonstration kits. The facility includes fume hoods, safety equipment, and specialized storage for sensitive instruments. Research-grade equipment enables students to conduct experiments at undergraduate and postgraduate levels.",
      facilities: ["Precision Instruments", "Digital Oscilloscopes", "Spectrometers", "Research Equipment", "Safety Systems"]
    },
    {
      id: "chemistry-lab",
      name: "Chemistry Laboratory",
      image: "/lovable-uploads/5eef37d5-a7a2-416d-9fb3-7df167c87f7e.png",
      icon: <FlaskConical className="h-6 w-6 text-red-600" />,
      shortDescription: "Modern chemistry laboratory with organic, inorganic, and analytical chemistry sections. Features fume hoods, analytical instruments, and safety systems for comprehensive chemical education.",
      fullDescription: "The Chemistry Laboratory complex spans 4000 sq ft with separate sections for Organic, Inorganic, Physical, and Analytical Chemistry. It features modern fume hoods, gas chromatography systems, UV-Vis spectrophotometers, pH meters, and precision balances. The laboratory includes chemical storage rooms with proper ventilation, emergency shower systems, and waste disposal facilities. Advanced analytical instruments like FTIR, atomic absorption spectrometer, and electrochemical analyzers support both teaching and research activities.",
      facilities: ["Fume Hoods", "Analytical Instruments", "Safety Systems", "Chemical Storage", "Research Equipment"]
    },
    {
      id: "admin-block",
      name: "Administrative Block",
      image: "/lovable-uploads/828ea20e-f759-4b97-aa60-3dc97555221f.png",
      icon: <Building className="h-6 w-6 text-indigo-600" />,
      shortDescription: "The administrative hub housing principal's office, registrar, accounts, examination cell, and student services. Features modern offices with digital infrastructure and student-friendly facilities.",
      fullDescription: "The Administrative Block is a four-story building that serves as the nerve center of college operations. It houses the Principal's office, Vice-Principal chambers, Registrar office, Accounts department, HR department, Examination cell, Admissions office, and Student services center. The building features modern office infrastructure with centralized air conditioning, high-speed internet, digital record management systems, and conference facilities. Special provisions include waiting areas for students and parents, information kiosks, and accessibility features for differently-abled individuals.",
      facilities: ["Principal's Office", "Examination Cell", "Digital Records", "Conference Rooms", "Student Services"]
    }
  ];

  const toggleExpansion = (buildingId: string) => {
    setExpandedBuilding(expandedBuilding === buildingId ? null : buildingId);
  };

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

        {/* Infrastructure Section */}
        <section className="bg-white">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Building className="h-8 w-8 text-indigo-600" />
              <h2 className="text-3xl font-bold text-gray-900">Infrastructure</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our campus boasts world-class infrastructure designed to provide an optimal learning environment. 
              From modern classrooms to advanced laboratories, every facility is crafted to enhance the educational experience.
            </p>
          </div>

          <div className="space-y-16">
            {infrastructureData.map((building, index) => {
              const isExpanded = expandedBuilding === building.id;
              const isEven = index % 2 === 0;
              
              return (
                <div key={building.id} className={`grid lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                  {/* Image Container */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} group`}>
                    <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                      <img 
                        src={building.image} 
                        alt={building.name}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                    <div className="flex items-center gap-3 mb-4">
                      {building.icon}
                      <h3 className="text-2xl font-bold text-gray-900">{building.name}</h3>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-lg">
                      {isExpanded ? building.fullDescription : building.shortDescription}
                    </p>

                    {/* Facilities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {building.facilities.map((facility, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <ChevronRight className="h-4 w-4 text-indigo-500" />
                          <span>{facility}</span>
                        </div>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <Button 
                      variant="outline" 
                      onClick={() => toggleExpansion(building.id)}
                      className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-200"
                    >
                      {isExpanded ? 'Show Less' : 'Read More'}
                      <ChevronRight className={`ml-2 h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} />
                    </Button>
                  </div>
                </div>
              );
            })}
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