import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, BookOpen, Award, Download, Languages } from "lucide-react";
import { useEffect, useState } from "react";

const Hindi = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/lovable-uploads/a29d5e18-fb3d-47a3-b3d2-a210ce08d66c.png",
    "/lovable-uploads/a2d2ff22-61cc-47fe-8ef4-7086790f77d0.png",
    "/lovable-uploads/b010e240-0ffe-43a4-884e-04e9e6094c36.png",
    "/lovable-uploads/c2330428-4591-4e58-92a3-ff6d9918a338.png"
  ];

  const departmentPhotos = [
    "/lovable-uploads/d1d2add7-8d38-40a3-9b07-6b30cc16b6bc.png",
    "/lovable-uploads/dd09abc5-6c94-4cbf-898d-c7df488183a6.png",
    "/lovable-uploads/ee497235-78d2-427a-9aca-40010a64e520.png",
    "/lovable-uploads/f7ffbe1f-5fed-4b97-9af1-ab0ad2725f32.png"
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
      title="हिंदी विभाग - Department of Hindi" 
      description="हिंदी भाषा और साहित्य की समृद्ध परंपरा को आगे बढ़ाते हुए राष्ट्रीय एकता और सांस्कृतिक मूल्यों का संवर्धन।"
    >
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Hindi Department ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">हिंदी विभाग</h1>
              <p className="text-xl md:text-2xl">भाषा, साहित्य और संस्कृति</p>
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
                  <Languages className="h-6 w-6 text-college-blue" />
                  Department Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Department of Hindi at SVRMC is dedicated to promoting the rich literary 
                  heritage of Hindi language and literature. As the national language of India, 
                  Hindi serves as a bridge connecting diverse cultures and communities across 
                  the nation. Our department emphasizes both classical and contemporary aspects 
                  of Hindi literature.
                </p>
                <p>
                  हिंदी विभाग भारतीय संस्कृति और साहित्य की समृद्ध परंपरा को आगे बढ़ाने में 
                  महत्वपूर्ण भूमिका निभाता है। हमारे अनुभवी प्राध्यापक छात्रों को हिंदी भाषा 
                  की गहराई से समझ प्रदान करते हैं और उन्हें राष्ट्रीय एवं सांस्कृतिक मूल्यों 
                  से जोड़ते हैं।
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Users className="h-8 w-8 text-college-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold text-college-blue">160+</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">11</div>
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
                  alt={`Hindi Classroom ${index + 1}`}
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
                    <span>B.A. Hindi Literature</span>
                    <Badge variant="secondary">55 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>B.A. Hindi (Honours)</span>
                    <Badge variant="secondary">25 Seats</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Postgraduate Programs</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span>M.A. Hindi Literature</span>
                    <Badge variant="secondary">35 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                    <span>M.A. Hindi Language</span>
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
                <h4 className="font-semibold mb-3">B.A. Hindi Literature (3 Years)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-blue-600 mb-2">Year 1</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Hindi Grammar & Language</li>
                      <li>• Ancient Hindi Literature</li>
                      <li>• Medieval Poetry</li>
                      <li>• Language Skills Development</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-green-600 mb-2">Year 2</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Modern Hindi Literature</li>
                      <li>• Hindi Drama & Theatre</li>
                      <li>• Literary Criticism</li>
                      <li>• Comparative Literature</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-purple-600 mb-2">Year 3</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Contemporary Hindi Literature</li>
                      <li>• Hindi Journalism</li>
                      <li>• Translation Studies</li>
                      <li>• Research Methodology</li>
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
                <li>• Master Hindi language proficiency and literature</li>
                <li>• Understand cultural and national heritage</li>
                <li>• Develop literary analysis and critical thinking</li>
                <li>• Enhance creative writing and expression skills</li>
                <li>• Apply research methods in Hindi studies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Program Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• National integration and cultural awareness</li>
                <li>• Effective communication in Hindi</li>
                <li>• Teaching and academic excellence</li>
                <li>• Media and journalism skills</li>
                <li>• Literary research and documentation</li>
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
                <h4 className="font-semibold mb-2">1st Year B.A.</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">2nd Year B.A.</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">3rd Year B.A.</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">1st Year M.A.</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <h4 className="font-semibold mb-2">2nd Year M.A.</h4>
                <Button variant="outline" size="sm">View Schedule</Button>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default Hindi;