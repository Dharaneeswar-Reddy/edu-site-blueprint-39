import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, BookOpen, Award, Download, Zap, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Electronics = () => {
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
      title="Department of Electronics" 
      description="Advancing electronics through innovative research, practical applications, and comprehensive education in electronic systems and communication technology."
    >
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Electronics Department ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Electronics Department</h1>
              <p className="text-xl md:text-2xl">Powering Electronic Innovation</p>
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
                  <Zap className="h-6 w-6 text-college-blue" />
                  Department Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Department of Electronics at SVRMC stands at the forefront of electronic 
                  education and innovation. Our comprehensive programs integrate theoretical foundations 
                  with cutting-edge practical applications to prepare students for dynamic careers in electronics and communication technology.
                </p>
                <p>
                  Our state-of-the-art laboratories are equipped with modern electronic equipment including 
                  oscilloscopes, function generators, microprocessor development kits, and communication systems. 
                  Faculty members are actively engaged in research areas spanning embedded systems, 
                  digital signal processing, VLSI design, and wireless communication.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Users className="h-8 w-8 text-college-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold text-college-blue">180+</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">15</div>
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
                  alt={`Electronics Lab ${index + 1}`}
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
                    <span>B.Sc. Electronics</span>
                    <Badge variant="secondary">50 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>B.Sc. Electronics & Communication</span>
                    <Badge variant="secondary">40 Seats</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Postgraduate Programs</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span>M.Sc. Electronics</span>
                    <Badge variant="secondary">25 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                    <span>M.Sc. Communication Systems</span>
                    <Badge variant="secondary">20 Seats</Badge>
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
                <h4 className="font-semibold mb-3">B.Sc. Electronics (3 Years)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-blue-600 mb-2">Year 1</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Basic Electronics</li>
                      <li>• Circuit Theory</li>
                      <li>• Mathematics for Electronics</li>
                      <li>• Digital Electronics</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-green-600 mb-2">Year 2</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Analog Electronics</li>
                      <li>• Microprocessors</li>
                      <li>• Communication Systems</li>
                      <li>• Control Systems</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-purple-600 mb-2">Year 3</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Embedded Systems</li>
                      <li>• VLSI Design</li>
                      <li>• Wireless Communication</li>
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
                <li>• Master electronic circuit design and analysis</li>
                <li>• Understand microprocessor and embedded systems</li>
                <li>• Design and implement communication systems</li>
                <li>• Develop VLSI and digital signal processing applications</li>
                <li>• Apply control systems and automation concepts</li>
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
                <li>• Electronic system design and development skills</li>
                <li>• Industry readiness and professional competence</li>
                <li>• Research and innovation capabilities</li>
                <li>• Entrepreneurial mindset in electronics field</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Department Staff */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-college-blue" />
              Department Staff
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg shadow-sm border p-6 text-center hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/52a8e7b1-5b22-4a0c-b1ec-450f99bfa9bb.png" 
                    alt="Dr. Rajesh Kumar"
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow-md"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Dr. Rajesh Kumar</h3>
                <p className="text-primary font-medium text-sm mb-1">Head & Professor</p>
                <p className="text-muted-foreground text-sm mb-3">Electronics Department</p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-3 w-3" />
                  <span>rajesh.k@svrmc.edu.in</span>
                </div>
              </div>
              
              <div className="bg-card rounded-lg shadow-sm border p-6 text-center hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/805efae8-1428-4b19-9a41-f2f62680aefc.png" 
                    alt="Dr. Sunita Sharma"
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow-md"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Dr. Sunita Sharma</h3>
                <p className="text-primary font-medium text-sm mb-1">Associate Professor</p>
                <p className="text-muted-foreground text-sm mb-3">Electronics Department</p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-3 w-3" />
                  <span>sunita.s@svrmc.edu.in</span>
                </div>
              </div>
              
              <div className="bg-card rounded-lg shadow-sm border p-6 text-center hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/662ebac1-9113-46ee-b212-a9a1526878d4.png" 
                    alt="Dr. Amit Patel"
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow-md"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Dr. Amit Patel</h3>
                <p className="text-primary font-medium text-sm mb-1">Assistant Professor</p>
                <p className="text-muted-foreground text-sm mb-3">Electronics Department</p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-3 w-3" />
                  <span>amit.patel@svrmc.edu.in</span>
                </div>
              </div>
            </div>
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

export default Electronics;