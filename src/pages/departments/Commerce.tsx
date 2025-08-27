import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, BookOpen, Award, Download, DollarSign, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Commerce = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/lovable-uploads/d23b165a-50de-4010-841f-59049ee5cf3d.png",
    "/lovable-uploads/d870c473-3320-4d6a-9dd4-15ab9ceab52a.png",
    "/lovable-uploads/085f3d76b-36b0-4119-9ae0-75167cea9d0b.png",
    "/lovable-uploads/8ca0ef83-413e-4894-9e73-7361e0c0106c.png"
  ];

  const departmentPhotos = [
    "/lovable-uploads/4459cba5-4f2b-407d-9115-b78608126cab.png",
    "/lovable-uploads/455edc55-96fe-44fc-a8d0-2b69c6dd6e92.png",
    "/lovable-uploads/4b78b0b7-424d-41e9-b09c-4108e1edd3c0.png",
    "/lovable-uploads/5c7ebe72-4ecd-4e54-8ce5-6bf0a6141878.png"
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
      title="Department of Commerce" 
      description="Preparing future business leaders with comprehensive knowledge in commerce, finance, and entrepreneurship."
    >
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Commerce Department ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Commerce Department</h1>
              <p className="text-xl md:text-2xl">Building Business Acumen</p>
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
                  <DollarSign className="h-6 w-6 text-college-blue" />
                  Department Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Department of Commerce at SVRMC is committed to providing quality education in 
                  business and commerce studies. Our programs are designed to develop students' 
                  understanding of business practices, financial management, accounting principles, 
                  and entrepreneurial skills.
                </p>
                <p>
                  With a curriculum that balances theoretical knowledge with practical applications, 
                  we prepare students for diverse career opportunities in banking, finance, accounting, 
                  marketing, and entrepreneurship. Our faculty brings extensive industry experience 
                  and academic expertise to the classroom.
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
                  alt={`Commerce Classroom ${index + 1}`}
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
                    <span>B.Com (General)</span>
                    <Badge variant="secondary">60 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>B.Com (Honours)</span>
                    <Badge variant="secondary">40 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                    <span>BBA</span>
                    <Badge variant="secondary">50 Seats</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Postgraduate Programs</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span>M.Com</span>
                    <Badge variant="secondary">40 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                    <span>MBA</span>
                    <Badge variant="secondary">60 Seats</Badge>
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
                <h4 className="font-semibold mb-3">B.Com (3 Years)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-blue-600 mb-2">Year 1</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Financial Accounting</li>
                      <li>• Business Organization</li>
                      <li>• Business Economics</li>
                      <li>• Business Mathematics</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-green-600 mb-2">Year 2</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Corporate Accounting</li>
                      <li>• Business Law</li>
                      <li>• Marketing Management</li>
                      <li>• Cost Accounting</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-purple-600 mb-2">Year 3</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Financial Management</li>
                      <li>• Auditing</li>
                      <li>• Income Tax</li>
                      <li>• Entrepreneurship</li>
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
                <li>• Master accounting principles and practices</li>
                <li>• Understand business operations and management</li>
                <li>• Develop financial analysis skills</li>
                <li>• Learn taxation and auditing procedures</li>
                <li>• Gain entrepreneurial and leadership skills</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Program Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Business acumen and strategic thinking</li>
                <li>• Professional ethics and integrity</li>
                <li>• Effective communication and teamwork</li>
                <li>• Analytical and decision-making abilities</li>
                <li>• Industry readiness and adaptability</li>
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
                    src="/lovable-uploads/d23b165a-50de-4010-841f-59049ee5cf3d.png" 
                    alt="Dr. Anil Agarwal"
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow-md"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Dr. Anil Agarwal</h3>
                <p className="text-primary font-medium text-sm mb-1">Head & Professor</p>
                <p className="text-muted-foreground text-sm mb-3">Commerce Department</p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-3 w-3" />
                  <span>anil.agarwal@svrmc.edu.in</span>
                </div>
              </div>
              
              <div className="bg-card rounded-lg shadow-sm border p-6 text-center hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/8ca0ef83-413e-4894-9e73-7361e0c0106c.png" 
                    alt="Dr. Kavita Singh"
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow-md"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Dr. Kavita Singh</h3>
                <p className="text-primary font-medium text-sm mb-1">Associate Professor</p>
                <p className="text-muted-foreground text-sm mb-3">Commerce Department</p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-3 w-3" />
                  <span>kavita.singh@svrmc.edu.in</span>
                </div>
              </div>
              
              <div className="bg-card rounded-lg shadow-sm border p-6 text-center hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/85f3d76b-36b0-4119-9ae0-75167cea9d0b.png" 
                    alt="Dr. Vikram Joshi"
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow-md"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Dr. Vikram Joshi</h3>
                <p className="text-primary font-medium text-sm mb-1">Assistant Professor</p>
                <p className="text-muted-foreground text-sm mb-3">Commerce Department</p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-3 w-3" />
                  <span>vikram.joshi@svrmc.edu.in</span>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">1st Year B.Com</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">2nd Year B.Com</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">3rd Year B.Com</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">BBA</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">1st Year M.Com</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">2nd Year M.Com</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">1st Year MBA</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">2nd Year MBA</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default Commerce;