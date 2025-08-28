import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, BookOpen, Award, Download, TestTube, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { useStaff } from "@/hooks/useStaff";
import StaffCard from "@/components/StaffCard";

const Chemistry = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { staff: chemistryStaff, loading: staffLoading } = useStaff("Chemistry");

  const heroImages = [
    "/lovable-uploads/71dea894-961d-4fd6-ac1f-78e8db8d93b4.png",
    "/lovable-uploads/828ea20e-f759-4b97-aa60-3dc97555221f.png",
    "/lovable-uploads/9ecf085a-3abc-45e7-844b-b132bfa85970.png",
    "/lovable-uploads/b010e240-0ffe-43a4-884e-04e9e6094c36.png"
  ];

  const departmentPhotos = [
    "/lovable-uploads/c2330428-4591-4e58-92a3-ff6d9918a338.png",
    "/lovable-uploads/d1d2add7-8d38-40a3-9b07-6b30cc16b6bc.png",
    "/lovable-uploads/dd09abc5-6c94-4cbf-898d-c7df488183a6.png",
    "/lovable-uploads/ee497235-78d2-427a-9aca-40010a64e520.png"
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
      title="Department of Chemistry" 
      description="Advancing chemical sciences through innovative research, practical applications, and comprehensive education."
    >
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Chemistry Department ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Chemistry Department</h1>
              <p className="text-xl md:text-2xl">Exploring Molecular Frontiers</p>
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
                  <TestTube className="h-6 w-6 text-college-blue" />
                  Department Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Department of Chemistry at SVRMC stands as a beacon of excellence in chemical education 
                  and research. Our comprehensive programs integrate theoretical foundations with hands-on 
                  laboratory experience to prepare students for diverse career opportunities.
                </p>
                <p>
                  Our state-of-the-art laboratories are equipped with modern instrumentation including 
                  spectrophotometers, chromatography systems, and analytical instruments. Faculty members 
                  are actively engaged in research areas spanning organic synthesis, environmental chemistry, 
                  and materials science.
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
                  alt={`Chemistry Lab ${index + 1}`}
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
                    <span>B.Sc. Chemistry (Regular)</span>
                    <Badge variant="secondary">45 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>B.Sc. Chemistry (Honours)</span>
                    <Badge variant="secondary">25 Seats</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Postgraduate Programs</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span>M.Sc. Chemistry</span>
                    <Badge variant="secondary">35 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                    <span>M.Sc. Analytical Chemistry</span>
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
                <h4 className="font-semibold mb-3">B.Sc. Chemistry (3 Years)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-blue-600 mb-2">Year 1</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Inorganic Chemistry I</li>
                      <li>• Organic Chemistry I</li>
                      <li>• Physical Chemistry I</li>
                      <li>• Chemical Bonding</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-green-600 mb-2">Year 2</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Inorganic Chemistry II</li>
                      <li>• Organic Chemistry II</li>
                      <li>• Physical Chemistry II</li>
                      <li>• Analytical Chemistry</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-purple-600 mb-2">Year 3</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Inorganic Chemistry III</li>
                      <li>• Organic Chemistry III</li>
                      <li>• Physical Chemistry III</li>
                      <li>• Spectroscopy</li>
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
                <li>• Master fundamental chemical principles and theories</li>
                <li>• Develop laboratory skills and safety practices</li>
                <li>• Understand molecular structure and bonding</li>
                <li>• Apply analytical and synthetic techniques</li>
                <li>• Interpret spectroscopic data effectively</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Program Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Critical analysis and problem-solving skills</li>
                <li>• Research methodology and scientific writing</li>
                <li>• Environmental awareness and sustainability</li>
                <li>• Industry readiness and professional ethics</li>
                <li>• Innovation and entrepreneurial thinking</li>
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
            {staffLoading ? (
              <div className="text-center py-8">Loading staff information...</div>
            ) : chemistryStaff.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No staff information available yet.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {chemistryStaff.map((staffMember) => (
                  <StaffCard key={staffMember.id} staff={staffMember} />
                ))}
              </div>
            )}
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

export default Chemistry;