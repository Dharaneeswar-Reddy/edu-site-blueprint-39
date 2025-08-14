import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, Award, BookOpen } from "lucide-react";

const Staff = () => {
  const staffData = {
    administration: [
      {
        name: "Dr. Venkat Rao",
        designation: "Principal",
        department: "Administration",
        qualification: "Ph.D in Physics",
        experience: "25+ years",
        email: "principal@svrmc.edu.in",
        phone: "+91 9999999999",
        image: "/lovable-uploads/662ebac1-9113-46ee-b212-a9a1526878d4.png",
        specialization: "Educational Administration, Physics Research"
      },
      {
        name: "Prof. Lakshmi Devi",
        designation: "Vice Principal",
        department: "Administration", 
        qualification: "M.A. English",
        experience: "20+ years",
        email: "vp@svrmc.edu.in",
        phone: "+91 9999999998",
        image: "/lovable-uploads/9f96f106-897d-46e3-a4a1-4c4b8f8f9f0c.png",
        specialization: "Academic Planning, English Literature"
      },
      {
        name: "Dr. Ramesh Kumar",
        designation: "Dean of Academics",
        department: "Administration",
        qualification: "Ph.D in Chemistry",
        experience: "18+ years",
        email: "dean@svrmc.edu.in", 
        phone: "+91 9999999997",
        image: "/lovable-uploads/365bcf12-2218-4dd4-a6e7-6d4bc591739a.png",
        specialization: "Curriculum Development, Organic Chemistry"
      }
    ],
    languages: [
      {
        name: "Dr. Sita Rama Sastry",
        designation: "Professor & Head",
        department: "Telugu",
        qualification: "Ph.D in Telugu Literature",
        experience: "20+ years",
        email: "telugu.head@svrmc.edu.in",
        phone: "+91 9999999996",
        image: "/lovable-uploads/662ebac1-9113-46ee-b212-a9a1526878d4.png",
        specialization: "Classical Telugu Literature, Poetry"
      },
      {
        name: "Prof. Sunita Sharma",
        designation: "Associate Professor",
        department: "Hindi",
        qualification: "M.A., M.Phil Hindi",
        experience: "15+ years",
        email: "hindi.prof@svrmc.edu.in",
        phone: "+91 9999999995",
        image: "/lovable-uploads/9f96f106-897d-46e3-a4a1-4c4b8f8f9f0c.png",
        specialization: "Modern Hindi Literature, Linguistics"
      },
      {
        name: "Dr. Margaret Jones",
        designation: "Professor",
        department: "English",
        qualification: "Ph.D in English Literature",
        experience: "22+ years",
        email: "english.head@svrmc.edu.in",
        phone: "+91 9999999994",
        image: "/lovable-uploads/9f96f106-897d-46e3-a4a1-4c4b8f8f9f0c.png",
        specialization: "Victorian Literature, Creative Writing"
      }
    ],
    science: [
      {
        name: "Dr. Rajesh Kumar",
        designation: "Professor & Head",
        department: "Computer Science",
        qualification: "Ph.D in Computer Science",
        experience: "15+ years",
        email: "cs.head@svrmc.edu.in",
        phone: "+91 9999999993",
        image: "/lovable-uploads/662ebac1-9113-46ee-b212-a9a1526878d4.png",
        specialization: "Artificial Intelligence, Machine Learning"
      },
      {
        name: "Dr. Priya Sharma",
        designation: "Associate Professor",
        department: "Computer Science",
        qualification: "Ph.D in Information Technology",
        experience: "12+ years",
        email: "priya.cs@svrmc.edu.in",
        phone: "+91 9999999992",
        image: "/lovable-uploads/9f96f106-897d-46e3-a4a1-4c4b8f8f9f0c.png",
        specialization: "Data Structures, Algorithms"
      },
      {
        name: "Dr. Suresh Babu",
        designation: "Professor & Head",
        department: "Physics",
        qualification: "Ph.D in Nuclear Physics",
        experience: "25+ years",
        email: "physics.head@svrmc.edu.in",
        phone: "+91 9999999991",
        image: "/lovable-uploads/662ebac1-9113-46ee-b212-a9a1526878d4.png",
        specialization: "Nuclear Physics, Quantum Mechanics"
      },
      {
        name: "Dr. Kavitha Reddy",
        designation: "Associate Professor",
        department: "Chemistry",
        qualification: "Ph.D in Organic Chemistry",
        experience: "14+ years",
        email: "chemistry.prof@svrmc.edu.in",
        phone: "+91 9999999990",
        image: "/lovable-uploads/9f96f106-897d-46e3-a4a1-4c4b8f8f9f0c.png",
        specialization: "Organic Synthesis, Medicinal Chemistry"
      },
      {
        name: "Prof. Ravi Kiran",
        designation: "Assistant Professor",
        department: "Mathematics",
        qualification: "M.Sc., M.Phil Mathematics",
        experience: "10+ years",
        email: "math.prof@svrmc.edu.in",
        phone: "+91 9999999989",
        image: "/lovable-uploads/365bcf12-2218-4dd4-a6e7-6d4bc591739a.png",
        specialization: "Applied Mathematics, Statistics"
      },
      {
        name: "Dr. Madhavi Latha",
        designation: "Professor",
        department: "Botany",
        qualification: "Ph.D in Plant Biology",
        experience: "18+ years",
        email: "botany.head@svrmc.edu.in",
        phone: "+91 9999999988",
        image: "/lovable-uploads/9f96f106-897d-46e3-a4a1-4c4b8f8f9f0c.png",
        specialization: "Plant Physiology, Ecology"
      },
      {
        name: "Dr. Srinivas Reddy",
        designation: "Associate Professor",
        department: "Zoology",
        qualification: "Ph.D in Animal Sciences",
        experience: "16+ years",
        email: "zoology.prof@svrmc.edu.in",
        phone: "+91 9999999987",
        image: "/lovable-uploads/662ebac1-9113-46ee-b212-a9a1526878d4.png",
        specialization: "Animal Behavior, Genetics"
      }
    ],
    humanities: [
      {
        name: "Dr. Vidhya Sagar",
        designation: "Professor & Head",
        department: "Commerce",
        qualification: "Ph.D in Commerce",
        experience: "20+ years",
        email: "commerce.head@svrmc.edu.in",
        phone: "+91 9999999986",
        image: "/lovable-uploads/662ebac1-9113-46ee-b212-a9a1526878d4.png",
        specialization: "Financial Management, Taxation"
      },
      {
        name: "Prof. Anitha Kumari",
        designation: "Associate Professor",
        department: "Economics",
        qualification: "M.A., M.Phil Economics",
        experience: "13+ years",
        email: "economics.prof@svrmc.edu.in",
        phone: "+91 9999999985",
        image: "/lovable-uploads/9f96f106-897d-46e3-a4a1-4c4b8f8f9f0c.png",
        specialization: "Development Economics, Econometrics"
      },
      {
        name: "Dr. Krishna Murthy",
        designation: "Professor",
        department: "History",
        qualification: "Ph.D in Ancient History",
        experience: "22+ years",
        email: "history.prof@svrmc.edu.in",
        phone: "+91 9999999984",
        image: "/lovable-uploads/365bcf12-2218-4dd4-a6e7-6d4bc591739a.png",
        specialization: "Ancient Indian History, Archaeology"
      },
      {
        name: "Prof. Bharathi Devi",
        designation: "Assistant Professor",
        department: "Political Science",
        qualification: "M.A. Political Science",
        experience: "8+ years",
        email: "polsci.prof@svrmc.edu.in",
        phone: "+91 9999999983",
        image: "/lovable-uploads/9f96f106-897d-46e3-a4a1-4c4b8f8f9f0c.png",
        specialization: "Public Administration, International Relations"
      }
    ]
  };

  const StaffCard = ({ member }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
      <div className="h-48 overflow-hidden">
        <img 
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{member.name}</CardTitle>
        <CardDescription>{member.designation}</CardDescription>
        <Badge variant="outline" className="w-fit">{member.department}</Badge>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-sm font-medium text-gray-700">Qualification:</p>
          <p className="text-sm text-gray-600">{member.qualification}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">Experience:</p>
          <p className="text-sm text-gray-600">{member.experience}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700">Specialization:</p>
          <p className="text-sm text-gray-600">{member.specialization}</p>
        </div>
        <div className="space-y-2 pt-2 border-t">
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4 text-college-blue" />
            <span className="text-xs text-gray-600">{member.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-college-blue" />
            <span className="text-xs text-gray-600">{member.phone}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/lovable-uploads/ad1edf50-6e71-4375-91d2-7e8d76b3b7b5.png")' 
        }}>
        <div className="container mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Faculty & Staff</h1>
            <p className="text-xl">Meet our experienced and dedicated faculty members who are committed to providing quality education and shaping the future of our students.</p>
          </div>
        </div>
      </section>

      {/* Faculty Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-college-blue text-white rounded-lg">
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-sm">Total Faculty</div>
            </div>
            <div className="text-center p-6 bg-college-gold text-black rounded-lg">
              <div className="text-3xl font-bold mb-2">80%</div>
              <div className="text-sm">With Ph.D</div>
            </div>
            <div className="text-center p-6 bg-college-green text-white rounded-lg">
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-sm">Years Average Experience</div>
            </div>
            <div className="text-center p-6 bg-purple-600 text-white rounded-lg">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm">Research Publications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Directory */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-college-blue mb-4">Faculty Directory</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our faculty members are highly qualified professionals with extensive academic and industry experience.
            </p>
          </div>

          <Tabs defaultValue="administration" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="administration" className="bg-college-blue text-white data-[state=active]:bg-college-gold data-[state=active]:text-black">Administration</TabsTrigger>
                <TabsTrigger value="languages" className="bg-college-blue text-white data-[state=active]:bg-college-gold data-[state=active]:text-black">Languages</TabsTrigger>
                <TabsTrigger value="science" className="bg-college-blue text-white data-[state=active]:bg-college-gold data-[state=active]:text-black">Science</TabsTrigger>
                <TabsTrigger value="humanities" className="bg-college-blue text-white data-[state=active]:bg-college-gold data-[state=active]:text-black">Humanities</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="administration" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-college-blue">Administrative Team</h3>
                <p className="text-muted-foreground">Leadership and administrative staff of the college</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {staffData.administration.map((member, index) => (
                  <StaffCard key={index} member={member} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="languages" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-college-blue">Languages Faculty</h3>
                <p className="text-muted-foreground">Faculty members from language departments</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {staffData.languages.map((member, index) => (
                  <StaffCard key={index} member={member} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="science" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-college-blue">Science Faculty</h3>
                <p className="text-muted-foreground">Faculty members from science departments</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {staffData.science.map((member, index) => (
                  <StaffCard key={index} member={member} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="humanities" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-college-blue">Humanities Faculty</h3>
                <p className="text-muted-foreground">Faculty members from humanities departments</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {staffData.humanities.map((member, index) => (
                  <StaffCard key={index} member={member} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Research & Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-college-blue mb-4">Faculty Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our faculty members have made significant contributions to research and academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Award className="h-12 w-12 text-college-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-college-blue mb-2">Awards & Recognition</h3>
              <p className="text-gray-600">
                Multiple faculty members have received prestigious awards for teaching excellence and research contributions.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <BookOpen className="h-12 w-12 text-college-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-college-blue mb-2">Publications</h3>
              <p className="text-gray-600">
                Over 500 research papers published in national and international journals by our faculty.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Mail className="h-12 w-12 text-college-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-college-blue mb-2">Collaborations</h3>
              <p className="text-gray-600">
                Active collaborations with leading universities and research institutions worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-college-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch with Our Faculty</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our faculty members are always available to help and guide students. Feel free to reach out for academic support and mentorship.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>faculty@svrmc.edu.in</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>+91 9999999999</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Staff;