import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Award, Bug, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import DepartmentStaff from "@/components/DepartmentStaff";

const Zoology = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/lovable-uploads/33bce374-c279-4e5c-afa1-9a764d7977c4.png",
    "/lovable-uploads/365bcf12-2218-4dd4-a6e7-6d4bc591739a.png",
    "/lovable-uploads/43b08f5f-94a1-4efc-a4bc-d959843cb7ea.png",
    "/lovable-uploads/52a8e7b1-5b22-4a0c-b1ec-450f99bfa9bb.png"
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
      title="Department of Zoology" 
      description="Understanding animal life, behavior, and evolution through comprehensive zoological education and research."
    >
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Zoology Department ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Zoology Department</h1>
              <p className="text-xl md:text-2xl">Exploring Animal Life & Behavior</p>
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
                  <Bug className="h-6 w-6 text-college-blue" />
                  Department Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Department of Zoology at SVRMC is committed to advancing knowledge of animal 
                  sciences through comprehensive study of animal structure, function, behavior, 
                  and evolution. Our programs encompass invertebrate and vertebrate zoology, 
                  ecology, and conservation biology.
                </p>
                <p>
                  Our modern laboratories feature microscopy facilities, specimen collections, 
                  and research equipment for physiological studies. Students engage in field work, 
                  laboratory experiments, and research projects that prepare them for careers 
                  in research, wildlife conservation, and biotechnology.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Users className="h-8 w-8 text-college-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold text-college-blue">130+</div>
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
                  alt={`Zoology Lab ${index + 1}`}
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
                    <span>B.Sc. Zoology (Regular)</span>
                    <Badge variant="secondary">40 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>B.Sc. Zoology (Honours)</span>
                    <Badge variant="secondary">20 Seats</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Postgraduate Programs</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span>M.Sc. Zoology</span>
                    <Badge variant="secondary">25 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                    <span>M.Sc. Wildlife Biology</span>
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
                <h4 className="font-semibold mb-3">B.Sc. Zoology (3 Years)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-blue-600 mb-2">Year 1</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Animal Diversity</li>
                      <li>• Cell Biology</li>
                      <li>• Invertebrate Zoology</li>
                      <li>• Animal Physiology</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-green-600 mb-2">Year 2</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Vertebrate Zoology</li>
                      <li>• Genetics & Evolution</li>
                      <li>• Developmental Biology</li>
                      <li>• Ecology & Behavior</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-purple-600 mb-2">Year 3</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Molecular Biology</li>
                      <li>• Conservation Biology</li>
                      <li>• Research Methodology</li>
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
                <li>• Understand animal structure and function</li>
                <li>• Master taxonomic classification</li>
                <li>• Analyze animal behavior patterns</li>
                <li>• Apply molecular techniques</li>
                <li>• Evaluate conservation strategies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Program Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Wildlife conservation awareness</li>
                <li>• Research and analytical skills</li>
                <li>• Laboratory techniques mastery</li>
                <li>• Scientific documentation abilities</li>
                <li>• Career readiness in zoological sciences</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Department Staff */}
        <DepartmentStaff departmentName="Zoology" />

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

export default Zoology;