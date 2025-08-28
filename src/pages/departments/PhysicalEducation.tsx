import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Award, Zap, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import DepartmentStaff from "@/components/DepartmentStaff";

const PhysicalEducation = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/lovable-uploads/26e5dd9a-23af-4d35-bf39-50ea0a90dcc1.png",
    "/lovable-uploads/33bce374-c279-4e5c-afa1-9a764d7977c4.png",
    "/lovable-uploads/365bcf12-2218-4dd4-a6e7-6d4bc591739a.png",
    "/lovable-uploads/43b08f5f-94a1-4efc-a4bc-d959843cb7ea.png"
  ];

  const departmentPhotos = [
    "/lovable-uploads/52a8e7b1-5b22-4a0c-b1ec-450f99bfa9bb.png",
    "/lovable-uploads/5810381d-fa14-451a-aba2-1235784bf4f2.png",
    "/lovable-uploads/60af87cc-1db6-4454-a9d2-88641715b200.png",
    "/lovable-uploads/662ebac1-9113-46ee-b212-a9a1526878d4.png"
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
      title="Department of Physical Education" 
      description="Promoting physical fitness, sports excellence, and holistic health through comprehensive physical education programs."
    >
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Physical Education Department ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Physical Education Department</h1>
              <p className="text-xl md:text-2xl">Fitness, Sports & Holistic Health</p>
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
                  The Department of Physical Education at SVRMC is dedicated to promoting physical 
                  fitness, sports excellence, and holistic health development among students. Our 
                  comprehensive programs integrate theoretical knowledge with practical training 
                  in various sports and fitness activities.
                </p>
                <p>
                  Our modern sports facilities include playgrounds, gymnasium, swimming pool, and 
                  specialized equipment for various sports. Qualified coaches and trainers guide 
                  students in developing athletic skills, understanding sports science, and 
                  pursuing careers in sports and fitness industries.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Users className="h-8 w-8 text-college-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold text-college-blue">200+</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">16</div>
                    <div className="text-sm text-gray-600">Faculty & Coaches</div>
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
                  alt={`Sports Facility ${index + 1}`}
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
                    <span>B.P.Ed</span>
                    <Badge variant="secondary">40 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>B.A. Physical Education</span>
                    <Badge variant="secondary">30 Seats</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Postgraduate Programs</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span>M.P.Ed</span>
                    <Badge variant="secondary">30 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                    <span>M.A. Sports Management</span>
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
                <h4 className="font-semibold mb-3">B.P.Ed (2 Years)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-blue-600 mb-2">Year 1</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Foundations of Physical Education</li>
                      <li>• Anatomy & Physiology</li>
                      <li>• Track & Field Athletics</li>
                      <li>• Games & Sports</li>
                      <li>• Yoga & Traditional Sports</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-green-600 mb-2">Year 2</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Sports Psychology</li>
                      <li>• Sports Medicine & Nutrition</li>
                      <li>• Coaching Methodology</li>
                      <li>• Sports Management</li>
                      <li>• Teaching Practice</li>
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
                <li>• Master fundamentals of physical fitness</li>
                <li>• Develop coaching and training skills</li>
                <li>• Understand sports science principles</li>
                <li>• Apply injury prevention techniques</li>
                <li>• Promote health and wellness awareness</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Program Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Professional competency in physical education</li>
                <li>• Sports coaching and training expertise</li>
                <li>• Health and fitness consultation skills</li>
                <li>• Leadership in sports management</li>
                <li>• Career readiness in sports industry</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Department Staff */}
        <DepartmentStaff departmentName="Physical Education" />

        {/* Time Tables */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-college-blue" />
              Training Schedules
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">1st Year B.P.Ed</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">2nd Year B.P.Ed</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">1st Year M.P.Ed</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">2nd Year M.P.Ed</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">Sports Training</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default PhysicalEducation;