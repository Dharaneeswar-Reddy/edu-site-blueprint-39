import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Microscope, TestTube, Braces, BookOpen, Lightbulb, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Research = () => {
  const researchAreas = [
    {
      id: 1,
      title: "Advanced Computing",
      description: "Research in artificial intelligence, machine learning, and high-performance computing.",
      icon: <Braces className="h-6 w-6 text-college-blue" />,
      projects: 12
    },
    {
      id: 2,
      title: "Biotechnology",
      description: "Molecular biology, genetic engineering, and pharmaceutical biotechnology research.",
      icon: <TestTube className="h-6 w-6 text-college-blue" />,
      projects: 8
    },
    {
      id: 3,
      title: "Robotics & Automation",
      description: "Development of intelligent robots and automated systems for various applications.",
      icon: <Microscope className="h-6 w-6 text-college-blue" />,
      projects: 15
    },
    {
      id: 4,
      title: "Renewable Energy",
      description: "Research on solar, wind, and other sustainable energy sources and technologies.",
      icon: <Lightbulb className="h-6 w-6 text-college-blue" />,
      projects: 7
    },
    {
      id: 5,
      title: "Educational Innovation",
      description: "Developing new pedagogical methods and educational technologies.",
      icon: <BookOpen className="h-6 w-6 text-college-blue" />,
      projects: 9
    },
    {
      id: 6,
      title: "Social Sciences",
      description: "Research on social dynamics, economic development, and cultural studies.",
      icon: <Award className="h-6 w-6 text-college-blue" />,
      projects: 6
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-24" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/lovable-uploads/52a8e7b1-5b22-4a0c-b1ec-450f99bfa9bb.png")' }}>
        <div className="container mx-auto px-4 text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Research & Innovation</h1>
          <p className="text-xl max-w-2xl">Advancing knowledge through cutting-edge research and innovative solutions to global challenges.</p>
        </div>
      </div>

      {/* Research Center Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Research Center</h2>
              <p className="mb-4">The newly inaugurated Research Center at SVRMC provides state-of-the-art facilities for advanced studies in multiple disciplines. The center is equipped with the latest technology and laboratories that facilitate groundbreaking research.</p>
              <p className="mb-4">Our faculty members and students collaborate on research projects that address real-world challenges and contribute to the advancement of knowledge in their respective fields.</p>
              <p className="mb-6">The center also hosts various workshops, seminars, and conferences that bring together researchers from around the world to share their findings and insights.</p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-college-blue hover:bg-blue-700">Research Publications</Button>
                <Button variant="outline" className="border-college-blue text-college-blue hover:bg-college-blue hover:text-white">Ongoing Projects</Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src="/lovable-uploads/52a8e7b1-5b22-4a0c-b1ec-450f99bfa9bb.png" alt="SVRMC Research Center" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area) => (
              <Card key={area.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {area.icon}
                    <CardTitle>{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">{area.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <span className="text-sm text-muted-foreground">{area.projects} active projects</span>
                  <Link to={`/research/${area.id}`} className="text-college-blue hover:underline inline-flex items-center text-sm">
                    Learn more <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Robotics Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-xl">
              <img src="/lovable-uploads/60af87cc-1db6-4454-a9d2-88641715b200.png" alt="SVRMC Robotics" className="w-full" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="section-title">Robotics Excellence</h2>
              <p className="mb-4">The Robotics lab at SVRMC is a center of excellence where students design, build, and program robots for various applications. Our students have won numerous awards in national and international robotics competitions.</p>
              <p className="mb-4">The lab is equipped with advanced tools and technologies that allow students to experiment with cutting-edge robotics concepts and develop innovative solutions to real-world problems.</p>
              <p className="mb-6">Through hands-on projects and mentorship from experienced faculty, students gain practical experience and develop skills that prepare them for careers in robotics and related fields.</p>
              <Button className="bg-college-blue hover:bg-blue-700">Robotics Projects</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Publications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Recent Publications</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Advanced Machine Learning Algorithms for Predictive Analytics in Healthcare</h3>
                  <p className="text-sm text-muted-foreground mb-4">Authors: Dr. Ramesh Kumar, Dr. Priya Singh, et al.</p>
                  <p className="mb-4 text-gray-600">This research paper presents novel machine learning algorithms that improve the accuracy of predictive analytics in healthcare settings, particularly for early disease detection.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full">International Journal of Computer Science</span>
                    <Link to="#" className="text-college-blue hover:underline">View Publication</Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-college-blue text-college-blue hover:bg-college-blue hover:text-white">
              View All Publications
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-college-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Our Research?</h2>
          <p className="max-w-2xl mx-auto mb-8">Join our research programs or collaborate with us on innovative projects.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-college-blue hover:bg-gray-100">Apply for Research Programs</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-college-blue">Partner With Us</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Research;
