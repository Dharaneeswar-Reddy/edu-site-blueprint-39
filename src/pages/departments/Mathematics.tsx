import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, BookOpen, Award, Download, Calculator } from "lucide-react";
import { useEffect, useState } from "react";

const Mathematics = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/lovable-uploads/f7ffbe1f-5fed-4b97-9af1-ab0ad2725f32.png",
    "/lovable-uploads/fa6cd0f0-bbb2-4bf5-bc81-323b4085c47e.png",
    "/lovable-uploads/9f96f106-897d-46e3-a4a1-4c4b8f8f9f0c.png",
    "/lovable-uploads/aa64612b-a2c2-4fc2-b645-b756306336a0.png"
  ];

  const departmentPhotos = [
    "/lovable-uploads/ad1edf50-6e71-4375-91d2-7e8d76b3b7b5.png",
    "/lovable-uploads/b1fc6422-ad59-4662-83db-90f4d62b1001.png",
    "/lovable-uploads/bf17da84-634b-4ca1-b09f-996816eb4e61.png",
    "/lovable-uploads/c845d941-c566-4910-8dbb-82f90fb04f82.png"
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
      title="Department of Mathematics" 
      description="Building logical thinking and analytical skills through pure and applied mathematical sciences."
    >
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Mathematics Department ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Mathematics Department</h1>
              <p className="text-xl md:text-2xl">Logic, Reasoning & Problem Solving</p>
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
                  <Calculator className="h-6 w-6 text-college-blue" />
                  Department Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Department of Mathematics at SVRMC is dedicated to fostering analytical thinking 
                  and mathematical reasoning among students. Our comprehensive curriculum covers pure 
                  mathematics, applied mathematics, and statistics with emphasis on both theoretical 
                  understanding and practical applications.
                </p>
                <p>
                  Our experienced faculty members guide students through various branches of mathematics 
                  including algebra, calculus, differential equations, numerical analysis, and operations 
                  research. We prepare students for careers in academia, research, industry, and various 
                  competitive examinations.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Users className="h-8 w-8 text-college-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold text-college-blue">120+</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">10</div>
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
                  alt={`Mathematics Classroom ${index + 1}`}
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
                    <span>B.Sc. Mathematics (Regular)</span>
                    <Badge variant="secondary">35 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>B.Sc. Mathematics (Honours)</span>
                    <Badge variant="secondary">15 Seats</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Postgraduate Programs</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span>M.Sc. Mathematics</span>
                    <Badge variant="secondary">25 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                    <span>M.Sc. Applied Mathematics</span>
                    <Badge variant="secondary">15 Seats</Badge>
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
                <h4 className="font-semibold mb-3">B.Sc. Mathematics (3 Years)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-blue-600 mb-2">Year 1</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Calculus & Analytical Geometry</li>
                      <li>• Algebra</li>
                      <li>• Trigonometry</li>
                      <li>• Descriptive Statistics</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-green-600 mb-2">Year 2</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Differential Equations</li>
                      <li>• Vector Analysis</li>
                      <li>• Abstract Algebra</li>
                      <li>• Probability Theory</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-purple-600 mb-2">Year 3</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Real Analysis</li>
                      <li>• Complex Analysis</li>
                      <li>• Numerical Methods</li>
                      <li>• Operations Research</li>
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
                <li>• Master fundamental mathematical concepts</li>
                <li>• Develop logical reasoning and analytical skills</li>
                <li>• Apply mathematical techniques to real problems</li>
                <li>• Understand statistical methods and applications</li>
                <li>• Use computational tools effectively</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Program Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Abstract thinking and problem-solving abilities</li>
                <li>• Research aptitude and mathematical modeling</li>
                <li>• Effective communication of mathematical ideas</li>
                <li>• Professional competency in quantitative fields</li>
                <li>• Continuous learning and adaptation skills</li>
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

export default Mathematics;