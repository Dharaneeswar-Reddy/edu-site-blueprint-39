import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, BookOpen, Award, Download, Mail, ExternalLink, TestTube } from "lucide-react";
import { useEffect, useState } from "react";
import useStaff from "@/hooks/useStaff";
import useDepartmentTimetables from "@/hooks/useDepartmentTimetables";
import StaffCard from "@/components/StaffCard";

const Physics = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { staff: departmentStaff, loading: staffLoading } = useStaff("Physics", "teaching");
  const { timetables, loading: timetablesLoading } = useDepartmentTimetables("Physics");

  const heroImages = [
    "/lovable-uploads/d85fb3d3-b73a-4321-ba55-69d5399a79a5.png",
    "/lovable-uploads/a64e202d-8654-4eb7-9a72-956203b85f88.png",
    "/lovable-uploads/fd7697be-4da9-4c9f-99c3-16a23c2dc964.png",
    "/lovable-uploads/5810381d-fa14-451a-aba2-1235784bf4f2.png"
  ];

  const departmentPhotos = [
    "/lovable-uploads/26e5dd9a-23af-4d35-bf39-50ea0a90dcc1.png",
    "/lovable-uploads/3f2ac2fe-5cc6-403c-b266-c0a4bfc92b9a.png",
    "/lovable-uploads/52a8e7b1-5b22-4a0c-b1ec-450f99bfa9bb.png",
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
      title="Department of Physics" 
      description="Exploring the fundamental principles of nature and universe through cutting-edge research and education."
    >
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Physics Department ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Physics Department</h1>
              <p className="text-xl md:text-2xl">Discovering the Laws of Nature</p>
            </div>
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
                    <span>B.Sc. Physics (Regular)</span>
                    <Badge variant="secondary">40 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>B.Sc. Physics (Honours)</span>
                    <Badge variant="secondary">20 Seats</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Postgraduate Programs</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span>M.Sc. Physics</span>
                    <Badge variant="secondary">30 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                    <span>M.Sc. Applied Physics</span>
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
                <h4 className="font-semibold mb-3">B.Sc. Physics (3 Years)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-blue-600 mb-2">Year 1</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Mechanics & Properties of Matter</li>
                      <li>• Heat & Thermodynamics</li>
                      <li>• Waves & Oscillations</li>
                      <li>• Mathematical Physics I</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-green-600 mb-2">Year 2</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Electricity & Magnetism</li>
                      <li>• Optics</li>
                      <li>• Modern Physics</li>
                      <li>• Mathematical Physics II</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-purple-600 mb-2">Year 3</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Quantum Mechanics</li>
                      <li>• Statistical Mechanics</li>
                      <li>• Electronics</li>
                      <li>• Solid State Physics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Department Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-college-blue" />
              Department Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The Department of Physics at SVRMC is committed to providing excellence in physics education 
              and fostering scientific research. Our department offers comprehensive programs that combine 
              theoretical knowledge with practical applications.
            </p>
            <p>
              With state-of-the-art laboratories and experienced faculty, we prepare students for careers 
              in research, industry, and academia. Our curriculum covers classical physics, quantum mechanics, 
              thermodynamics, electromagnetism, and modern physics.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="h-8 w-8 text-college-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-college-blue">150+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">12</div>
                <div className="text-sm text-gray-600">Faculty Members</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">4</div>
                <div className="text-sm text-gray-600">Programs</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <TestTube className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">15+</div>
                <div className="text-sm text-gray-600">Research Labs</div>
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
                <li>• Understand fundamental principles of physics</li>
                <li>• Apply mathematical tools to solve physics problems</li>
                <li>• Develop experimental and analytical skills</li>
                <li>• Understand modern physics concepts</li>
                <li>• Apply physics principles to real-world problems</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Program Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Critical thinking and problem-solving abilities</li>
                <li>• Research and development skills</li>
                <li>• Effective communication of scientific concepts</li>
                <li>• Ethical understanding in scientific practice</li>
                <li>• Lifelong learning and adaptability</li>
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
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading staff information...</p>
              </div>
            ) : departmentStaff.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departmentStaff.map((staff) => (
                  <StaffCard key={staff.id} staff={staff} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Users className="h-16 w-16 mx-auto mb-4 opacity-20" />
                <p>No staff information available at the moment.</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Department Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>Department Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {departmentPhotos.map((photo, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={photo} 
                    alt={`Physics Lab ${index + 1}`}
                    className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                </div>
              ))}
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
            {timetablesLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="text-muted-foreground mt-2">Loading timetables...</p>
              </div>
            ) : timetables.length === 0 ? (
              <div className="text-center py-8">
                <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">No timetables available at the moment.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/20">
                      <th className="text-left py-3 px-4 font-semibold text-primary">S.No</th>
                      <th className="text-left py-3 px-4 font-semibold text-primary">Name</th>
                      <th className="text-center py-3 px-4 font-semibold text-primary">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timetables.map((timetable, index) => (
                      <tr key={timetable.id} className="border-b hover:bg-muted/10">
                        <td className="py-3 px-4 text-primary font-medium">{index + 1}</td>
                        <td className="py-3 px-4 text-primary">
                          <div>
                            <div className="font-medium">{timetable.title}</div>
                            {timetable.description && (
                              <div className="text-sm text-muted-foreground">{timetable.description}</div>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(timetable.file_url, '_blank')}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default Physics;