import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const Departments = () => {
  const [activeTab, setActiveTab] = useState("languages");

  const departments = {
    languages: [
      {
        id: "telugu",
        name: "Telugu",
        description: "Studies focused on Telugu literature, grammar, and cultural aspects.",
        programs: ["B.A.", "M.A.", "Ph.D"]
      },
      {
        id: "hindi",
        name: "Hindi",
        description: "Comprehensive programs covering Hindi literature, poetry, and linguistic studies.",
        programs: ["B.A.", "M.A.", "Ph.D"]
      },
      {
        id: "english",
        name: "English",
        description: "Programs focusing on English literature, communication skills, and linguistic analysis.",
        programs: ["B.A.", "M.A.", "Ph.D"]
      }
    ],
    science: [
      {
        id: "physics",
        name: "Physics",
        description: "Study of matter, energy, and the fundamental forces of nature.",
        programs: ["B.Sc", "M.Sc", "Ph.D"]
      },
      {
        id: "chemistry",
        name: "Chemistry",
        description: "Study of chemical reactions, molecular structures, and laboratory techniques.",
        programs: ["B.Sc", "M.Sc", "Ph.D"]
      },
      {
        id: "mathematics",
        name: "Mathematics",
        description: "Focuses on mathematical theories, computational techniques, and applications.",
        programs: ["B.Sc", "M.Sc", "Ph.D"]
      },
      {
        id: "computerscience",
        name: "Computer Science",
        description: "Programs covering programming, algorithms, data structures and advanced computing.",
        programs: ["B.Sc", "M.Sc", "Ph.D"]
      },
      {
        id: "electronics",
        name: "Electronics",
        description: "Study of electronic systems, circuits, communication technology and embedded systems.",
        programs: ["B.Sc", "M.Sc", "Ph.D"]
      },
      {
        id: "botany",
        name: "Botany",
        description: "Study of plant life, plant structure, growth, reproduction, and evolution.",
        programs: ["B.Sc", "M.Sc", "Ph.D"]
      },
      {
        id: "zoology",
        name: "Zoology",
        description: "Study of animals, their behavior, structure, physiology, and classification.",
        programs: ["B.Sc", "M.Sc", "Ph.D"]
      },
      {
        id: "aquaculture",
        name: "Aquaculture Technology",
        description: "Programs focusing on fish farming, aquatic organisms, and water resource management.",
        programs: ["B.Sc", "M.Sc"]
      }
    ],
    humanities: [
      {
        id: "commerce",
        name: "Commerce",
        description: "Covers accounting, taxation, business law, and economics principles.",
        programs: ["B.Com", "M.Com", "Ph.D"]
      },
      {
        id: "economics",
        name: "Economics",
        description: "Study of resource allocation, production, consumption and wealth distribution.",
        programs: ["B.A.", "M.A.", "Ph.D"]
      },
      {
        id: "history",
        name: "History",
        description: "Examination of past events, civilizations, and cultural developments.",
        programs: ["B.A.", "M.A.", "Ph.D"]
      },
      {
        id: "politicalscience",
        name: "Political Science",
        description: "Study of governance systems, political behavior, and public policy.",
        programs: ["B.A.", "M.A.", "Ph.D"]
      },
      {
        id: "physicaleducation",
        name: "Physical Education",
        description: "Focuses on physical fitness, sports science, and health education.",
        programs: ["B.P.Ed", "M.P.Ed", "Ph.D"]
      }
    ]
  };

  return (
    <Layout>
      {/* Hero Section with New Background */}
      <section className="relative pt-32 pb-20 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/lovable-uploads/ad1edf50-6e71-4375-91d2-7e8d76b3b7b5.png")' 
        }}>
        <div className="container mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Departments</h1>
            <p className="text-xl">Explore our diverse academic departments offering quality degree education across various disciplines.</p>
          </div>
        </div>
      </section>

      {/* Departments List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="languages" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="languages" className="bg-college-blue text-white data-[state=active]:bg-college-gold data-[state=active]:text-black">Languages</TabsTrigger>
                <TabsTrigger value="science" className="bg-college-blue text-white data-[state=active]:bg-college-gold data-[state=active]:text-black">Science</TabsTrigger>
                <TabsTrigger value="humanities" className="bg-college-blue text-white data-[state=active]:bg-college-gold data-[state=active]:text-black">Humanities</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="languages" className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-college-blue">Languages Departments</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
                  Our language departments focus on developing strong communication skills and cultural understanding.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departments.languages.map((dept) => (
                  <DepartmentCard key={dept.id} department={dept} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="science" className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-college-blue">Science Departments</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
                  Our science departments provide a strong foundation in theoretical concepts and laboratory skills.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departments.science.map((dept) => (
                  <DepartmentCard key={dept.id} department={dept} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="humanities" className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-college-blue">Humanities Departments</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
                  Our humanities programs focus on developing critical thinking and analytical skills.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departments.humanities.map((dept) => (
                  <DepartmentCard key={dept.id} department={dept} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Department Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Department Facilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All our departments are equipped with state-of-the-art facilities to enhance the learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 mb-4 overflow-hidden rounded-md">
                <img 
                  src="/lovable-uploads/4b78b0b7-424d-41e9-b09c-4108e1edd3c0.png" 
                  alt="Modern Laboratories" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-college-blue mb-2">Modern Laboratories</h3>
              <p className="text-gray-700">
                Well-equipped labs with the latest equipment and technology to support practical learning and research activities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 mb-4 overflow-hidden rounded-md">
                <img 
                  src="/lovable-uploads/c2330428-4591-4e58-92a3-ff6d9918a338.png" 
                  alt="Lecture Halls" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-college-blue mb-2">Lecture Halls</h3>
              <p className="text-gray-700">
                Modern lecture halls with audio-visual facilities for an enhanced learning experience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 mb-4 overflow-hidden rounded-md">
                <img 
                  src="/lovable-uploads/dd09abc5-6c94-4cbf-898d-c7df488183a6.png" 
                  alt="Computing Facilities" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-college-blue mb-2">Computing Facilities</h3>
              <p className="text-gray-700">
                High-performance computing labs with the latest software tools and high-speed internet connectivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Excellence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Faculty Excellence</h2>
              <p className="mb-4">
                Our departments are led by distinguished faculty members who are experts in their respective fields. With a perfect blend of academic credentials and industry experience, our professors bring valuable insights into classrooms.
              </p>
              <p className="mb-4">
                Many of our faculty members are actively involved in research, have published papers in reputed journals, and have received prestigious grants for their work. Their dedication to teaching and research creates a stimulating learning environment for students.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-college-gold rounded-full mr-2"></span>
                  <span>150+ faculty members with doctoral degrees</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-college-gold rounded-full mr-2"></span>
                  <span>Regular faculty development programs</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-college-gold rounded-full mr-2"></span>
                  <span>Industry collaborations for practical learning</span>
                </li>
              </ul>
              <Button className="bg-college-blue hover:bg-blue-700 text-white" asChild>
                <Link to="/faculty-directory">Meet Our Faculty</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/lovable-uploads/aa64612b-a2c2-4fc2-b645-b756306336a0.png" 
                alt="Classroom" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
              <img 
                src="/lovable-uploads/4b78b0b7-424d-41e9-b09c-4108e1edd3c0.png"
                alt="Research" 
                className="rounded-lg shadow-md h-64 w-full object-cover mt-8"
              />
              <img 
                src="/lovable-uploads/dd09abc5-6c94-4cbf-898d-c7df488183a6.png" 
                alt="Laboratory" 
                className="rounded-lg shadow-md h-64 w-full object-cover mt-8"
              />
              <img 
                src="/lovable-uploads/c2330428-4591-4e58-92a3-ff6d9918a338.png" 
                alt="Lecture Hall" 
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-college-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Our Programs?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Explore our comprehensive range of degree programs and take the first step towards a successful career.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-college-gold text-black hover:bg-yellow-500" asChild>
              <Link to="/admission">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white" asChild>
              <Link to="/contact">Request Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const DepartmentCard = ({ department }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{department.name}</CardTitle>
        <CardDescription className="flex gap-2 flex-wrap">
          {department.programs.map((program, index) => (
            <span key={index} className="bg-muted px-2 py-0.5 rounded-full text-xs">
              {program}
            </span>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-sm text-muted-foreground">
          {department.description}
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="text-college-blue px-0 flex items-center" asChild>
          <Link to={`/departments/${department.id}`}>
            Learn More <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Departments;
