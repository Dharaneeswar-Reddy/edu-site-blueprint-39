import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, Award, BookOpen } from "lucide-react";

// Import generated images
import malePrincipal from "@/assets/male-principal.jpg";
import femaleVicePrincipal from "@/assets/female-vice-principal.jpg";
import maleProfessor1 from "@/assets/male-professor-1.jpg";
import maleProfessor2 from "@/assets/male-professor-2.jpg";
import maleProfessor3 from "@/assets/male-professor-3.jpg";
import femaleProfessor1 from "@/assets/female-professor-1.jpg";
import femaleProfessor2 from "@/assets/female-professor-2.jpg";
import femaleProfessor3 from "@/assets/female-professor-3.jpg";

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
        image: malePrincipal,
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
        image: femaleVicePrincipal,
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
        image: maleProfessor1,
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
        image: maleProfessor2,
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
        image: femaleProfessor1,
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
        image: femaleProfessor2,
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
        image: maleProfessor3,
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
        image: femaleProfessor3,
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
        image: maleProfessor1,
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
        image: femaleProfessor1,
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
        image: maleProfessor2,
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
        image: femaleProfessor2,
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
        image: maleProfessor3,
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
        image: maleProfessor1,
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
        image: femaleProfessor3,
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
        image: maleProfessor2,
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
        image: femaleProfessor1,
        specialization: "Public Administration, International Relations"
      }
    ]
  };

  const StaffCard = ({ member }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full bg-white">
      <div className="h-64 overflow-hidden bg-gray-100">
        <img 
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6 text-center">
        <h3 className="text-lg font-bold text-college-blue mb-1">{member.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{member.designation}</p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-center space-x-2 text-red-600">
            <Mail className="h-4 w-4" />
            <span>{member.email}</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-red-600">
            <Phone className="h-4 w-4" />
            <span>{member.phone}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/lovable-uploads/ad1edf50-6e71-4375-91d2-7e8d76b3b7b5.png")' 
        }}>
        <div className="container mx-auto px-4 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Faculty & Staff</h1>
          <p className="text-xl max-w-3xl mx-auto">Meet our distinguished faculty members and staff who are dedicated to excellence in education and research</p>
        </div>
      </section>

      {/* Faculty Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-college-blue mb-2">150+</div>
              <div className="text-sm text-gray-600 font-medium">Total Faculty</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-college-blue mb-2">80%</div>
              <div className="text-sm text-gray-600 font-medium">With Ph.D</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-college-blue mb-2">25+</div>
              <div className="text-sm text-gray-600 font-medium">Years Average Experience</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-college-blue mb-2">500+</div>
              <div className="text-sm text-gray-600 font-medium">Research Publications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Directory */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="administration" className="w-full">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-4 w-full max-w-2xl bg-white border">
                <TabsTrigger 
                  value="administration" 
                  className="data-[state=active]:bg-college-blue data-[state=active]:text-white font-medium"
                >
                  Administration
                </TabsTrigger>
                <TabsTrigger 
                  value="languages" 
                  className="data-[state=active]:bg-college-blue data-[state=active]:text-white font-medium"
                >
                  Languages
                </TabsTrigger>
                <TabsTrigger 
                  value="science" 
                  className="data-[state=active]:bg-college-blue data-[state=active]:text-white font-medium"
                >
                  Science
                </TabsTrigger>
                <TabsTrigger 
                  value="humanities" 
                  className="data-[state=active]:bg-college-blue data-[state=active]:text-white font-medium"
                >
                  Humanities
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Administration Faculty */}
            <TabsContent value="administration" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-college-blue mb-2">Administration</h2>
                <p className="text-gray-600">Leadership and administrative staff of the college</p>
                <div className="text-sm text-gray-500 mt-2">
                  <em>to email add</em> <strong>username@svrmc.edu.in</strong>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {staffData.administration.map((member, index) => (
                  <StaffCard key={index} member={member} />
                ))}
              </div>
            </TabsContent>

            {/* Languages Faculty */}
            <TabsContent value="languages" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-college-blue mb-2">Languages Faculty</h2>
                <p className="text-gray-600">Faculty members from language departments</p>
                <div className="text-sm text-gray-500 mt-2">
                  <em>to email add</em> <strong>username@svrmc.edu.in</strong>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {staffData.languages.map((member, index) => (
                  <StaffCard key={index} member={member} />
                ))}
              </div>
            </TabsContent>

            {/* Science Faculty */}
            <TabsContent value="science" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-college-blue mb-2">Science Faculty</h2>
                <p className="text-gray-600">Faculty members from science departments</p>
                <div className="text-sm text-gray-500 mt-2">
                  <em>to email add</em> <strong>username@svrmc.edu.in</strong>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {staffData.science.map((member, index) => (
                  <StaffCard key={index} member={member} />
                ))}
              </div>
            </TabsContent>

            {/* Humanities Faculty */}
            <TabsContent value="humanities" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-college-blue mb-2">Humanities Faculty</h2>
                <p className="text-gray-600">Faculty members from humanities departments</p>
                <div className="text-sm text-gray-500 mt-2">
                  <em>to email add</em> <strong>username@svrmc.edu.in</strong>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {staffData.humanities.map((member, index) => (
                  <StaffCard key={index} member={member} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
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