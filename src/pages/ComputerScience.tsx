import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Users, BookOpen, Award, GraduationCap, Code, Database, Globe, Cpu } from "lucide-react";

// Import generated images
import maleProfessor1 from "@/assets/male-professor-1.jpg";
import maleProfessor3 from "@/assets/male-professor-3.jpg";
import femaleProfessor3 from "@/assets/female-professor-3.jpg";

const ComputerScience = () => {
  const courses = [
    {
      level: "Undergraduate",
      programs: [
        { name: "B.Sc Computer Science", duration: "3 Years", seats: 60 },
        { name: "B.Sc Computer Applications", duration: "3 Years", seats: 40 }
      ]
    },
    {
      level: "Postgraduate", 
      programs: [
        { name: "M.Sc Computer Science", duration: "2 Years", seats: 30 },
        { name: "M.Sc Information Technology", duration: "2 Years", seats: 25 }
      ]
    },
    {
      level: "Research",
      programs: [
        { name: "Ph.D Computer Science", duration: "3-5 Years", seats: 10 }
      ]
    }
  ];

  const faculty = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Professor & Head",
      specialization: "Artificial Intelligence, Machine Learning",
      experience: "15+ years",
      image: maleProfessor3
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Associate Professor",
      specialization: "Data Structures, Algorithms",
      experience: "12+ years", 
      image: femaleProfessor3
    },
    {
      name: "Prof. Amit Patel",
      designation: "Assistant Professor",
      specialization: "Web Development, Database Systems",
      experience: "8+ years",
      image: maleProfessor1
    }
  ];

  const facilities = [
    {
      title: "Advanced Computing Lab",
      description: "State-of-the-art computers with latest software and development tools",
      icon: <Cpu className="h-8 w-8 text-college-blue" />,
      image: "/lovable-uploads/dd09abc5-6c94-4cbf-898d-c7df488183a6.png"
    },
    {
      title: "Programming Lab",
      description: "Dedicated spaces for coding practice and software development",
      icon: <Code className="h-8 w-8 text-college-blue" />,
      image: "/lovable-uploads/4b78b0b7-424d-41e9-b09c-4108e1edd3c0.png"
    },
    {
      title: "Database Lab",
      description: "Specialized lab for database design and management training",
      icon: <Database className="h-8 w-8 text-college-blue" />,
      image: "/lovable-uploads/c2330428-4591-4e58-92a3-ff6d9918a338.png"
    },
    {
      title: "Network Lab",
      description: "Networking equipment for hands-on learning of network concepts",
      icon: <Globe className="h-8 w-8 text-college-blue" />,
      image: "/lovable-uploads/aa64612b-a2c2-4fc2-b645-b756306336a0.png"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/lovable-uploads/ad1edf50-6e71-4375-91d2-7e8d76b3b7b5.png")' 
        }}>
        <div className="container mx-auto px-4 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Department of Computer Science</h1>
            <p className="text-xl mb-8">Empowering the next generation of technology leaders through innovative education and cutting-edge research in computer science and information technology.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-college-gold text-black hover:bg-yellow-500" asChild>
                <Link to="/admission">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/20 hover:text-black" asChild>
                <Link to="/contact">Contact Department</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-college-blue mb-6">About the Department</h2>
              <p className="text-gray-700 mb-4">
                The Department of Computer Science at SVRMC was established in 2005 with a vision to provide quality education in computer science and prepare students for successful careers in the rapidly evolving technology sector.
              </p>
              <p className="text-gray-700 mb-6">
                Our department offers comprehensive programs that combine theoretical foundations with practical skills, ensuring graduates are well-equipped to meet industry demands and contribute to technological advancement.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="h-8 w-8 text-college-blue mx-auto mb-2" />
                  <div className="font-bold text-2xl text-college-blue">500+</div>
                  <div className="text-sm text-gray-600">Alumni</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-college-blue mx-auto mb-2" />
                  <div className="font-bold text-2xl text-college-blue">95%</div>
                  <div className="text-sm text-gray-600">Placement Rate</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/lovable-uploads/dd09abc5-6c94-4cbf-898d-c7df488183a6.png"
                alt="Computer Lab" 
                className="rounded-lg shadow-md h-48 w-full object-cover"
              />
              <img 
                src="/lovable-uploads/4b78b0b7-424d-41e9-b09c-4108e1edd3c0.png"
                alt="Students Coding" 
                className="rounded-lg shadow-md h-48 w-full object-cover mt-8"
              />
              <img 
                src="/lovable-uploads/c2330428-4591-4e58-92a3-ff6d9918a338.png"
                alt="Lecture Hall" 
                className="rounded-lg shadow-md h-48 w-full object-cover"
              />
              <img 
                src="/lovable-uploads/aa64612b-a2c2-4fc2-b645-b756306336a0.png"
                alt="Research Lab" 
                className="rounded-lg shadow-md h-48 w-full object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-college-blue mb-4">Academic Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our department offers a comprehensive range of programs designed to meet the diverse needs of students interested in computer science and technology.
            </p>
          </div>
          
          <div className="space-y-8">
            {courses.map((level, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-college-blue text-white">
                  <CardTitle className="text-xl">{level.level} Programs</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {level.programs.map((program, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-lg border hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-college-blue mb-2">{program.name}</h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary">Duration: {program.duration}</Badge>
                          <Badge variant="outline">Seats: {program.seats}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-college-blue mb-4">Our Faculty</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our experienced and dedicated faculty members who are committed to providing quality education and mentoring students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Specialization:</strong> {member.specialization}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Experience:</strong> {member.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-college-blue text-college-blue hover:bg-college-blue hover:text-white" asChild>
              <Link to="/staff">View All Faculty</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-college-blue mb-4">Department Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our department is equipped with modern facilities and state-of-the-art equipment to provide hands-on learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="h-32 overflow-hidden">
                  <img 
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="text-center">
                  {facility.icon}
                  <CardTitle className="text-lg mt-2">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-college-blue mb-6">Research & Innovation</h2>
              <p className="text-gray-700 mb-4">
                Our department actively encourages research and innovation among faculty and students. We focus on emerging technologies and real-world problem solving.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-college-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Student Research Projects</h4>
                    <p className="text-sm text-gray-600">Final year students work on innovative projects with industry mentorship</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="h-6 w-6 text-college-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Publications</h4>
                    <p className="text-sm text-gray-600">Faculty and students regularly publish in reputed journals and conferences</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-college-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Industry Collaboration</h4>
                    <p className="text-sm text-gray-600">Strong partnerships with tech companies for internships and projects</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <img 
                src="/lovable-uploads/4b78b0b7-424d-41e9-b09c-4108e1edd3c0.png"
                alt="Research Lab" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
              <img 
                src="/lovable-uploads/dd09abc5-6c94-4cbf-898d-c7df488183a6.png"
                alt="Innovation" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-college-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join the Department of Computer Science and be part of the next generation of technology innovators.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-college-gold text-black hover:bg-yellow-500" asChild>
              <Link to="/admission">Apply for Admission</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white" asChild>
              <Link to="/contact">Get More Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ComputerScience;