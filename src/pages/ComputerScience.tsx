import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, BookOpen, Award, Download, Cpu } from "lucide-react";
import { useEffect, useState } from "react";

const ComputerScience = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/lovable-uploads/dd09abc5-6c94-4cbf-898d-c7df488183a6.png",
    "/lovable-uploads/4b78b0b7-424d-41e9-b09c-4108e1edd3c0.png",
    "/lovable-uploads/c2330428-4591-4e58-92a3-ff6d9918a338.png",
    "/lovable-uploads/aa64612b-a2c2-4fc2-b645-b756306336a0.png"
  ];

  const departmentPhotos = [
    "/lovable-uploads/ad1edf50-6e71-4375-91d2-7e8d76b3b7b5.png",
    "/lovable-uploads/9f96f106-897d-46e3-a4a1-4c4b8f8f9f0c.png",
    "/lovable-uploads/662ebac1-9113-46ee-b212-a9a1526878d4.png",
    "/lovable-uploads/455edc55-96fe-44fc-a8d0-2b69c6dd6e92.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <PageLayout 
      title="Department of Computer Science" 
      description="Advancing computer science through innovative research, practical applications, and comprehensive education."
    >
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Computer Science Department ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Computer Science Department</h1>
              <p className="text-xl md:text-2xl">Shaping Digital Innovators</p>
            </div>
          </div>
        </div>

        {/* Department Overview and Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Department Overview */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-6 w-6 text-college-blue" />
                  Department Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Department of Computer Science at SVRMC stands at the forefront of technological 
                  education and innovation. Our comprehensive programs integrate theoretical foundations 
                  with cutting-edge practical applications to prepare students for dynamic careers in technology.
                </p>
                <p>
                  Our state-of-the-art laboratories are equipped with modern computing infrastructure including 
                  high-performance workstations, cloud computing platforms, and development environments. 
                  Faculty members are actively engaged in research areas spanning artificial intelligence, 
                  machine learning, cybersecurity, and software engineering.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Users className="h-8 w-8 text-college-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold text-college-blue">250+</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">18</div>
                    <div className="text-sm text-gray-600">Faculty Members</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Department Photos */}
          <div className="space-y-4">
            {departmentPhotos.map((photo, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={photo} 
                  alt={`Computer Science Lab ${index + 1}`}
                  className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Seat Structure and Programs */}
        <Card>
          <CardHeader>
            <CardTitle>Seat Structure & Programs Offered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Undergraduate Programs</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span>B.Sc. Computer Science</span>
                    <Badge variant="secondary">60 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>B.Sc. Computer Applications</span>
                    <Badge variant="secondary">40 Seats</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Postgraduate Programs</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span>M.Sc. Computer Science</span>
                    <Badge variant="secondary">30 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                    <span>M.Sc. Information Technology</span>
                    <Badge variant="secondary">25 Seats</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Program Structure */}
        <Card>
          <CardHeader>
            <CardTitle>Program Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">B.Sc. Computer Science (3 Years)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-blue-600 mb-2">Year 1</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Programming Fundamentals</li>
                      <li>• Computer Organization</li>
                      <li>• Discrete Mathematics</li>
                      <li>• Digital Logic Design</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-green-600 mb-2">Year 2</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Data Structures</li>
                      <li>• Object-Oriented Programming</li>
                      <li>• Database Management</li>
                      <li>• Operating Systems</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-purple-600 mb-2">Year 3</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Software Engineering</li>
                      <li>• Computer Networks</li>
                      <li>• Artificial Intelligence</li>
                      <li>• Project Work</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Course Outcomes & Program Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Master programming concepts and software development</li>
                <li>• Understand computer systems and architecture</li>
                <li>• Design and implement efficient algorithms</li>
                <li>• Develop database and network applications</li>
                <li>• Apply artificial intelligence and machine learning</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Program Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Analytical thinking and problem-solving abilities</li>
                <li>• Software project management skills</li>
                <li>• Ethical computing and cybersecurity awareness</li>
                <li>• Industry readiness and professional competence</li>
                <li>• Innovation and entrepreneurial mindset</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Academic Calendar */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-college-blue" />
              Academic Calendar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Download the latest academic calendar for important dates and schedules.</p>
            <Button className="bg-college-blue hover:bg-college-blue/90">
              <Download className="h-4 w-4 mr-2" />
              Download Academic Calendar (PDF)
            </Button>
          </CardContent>
        </Card>

        {/* Time Tables */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-college-blue" />
              Time Tables
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">1st Year B.Sc.</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">2nd Year B.Sc.</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">3rd Year B.Sc.</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">1st Year M.Sc.</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">2nd Year M.Sc.</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default ComputerScience;