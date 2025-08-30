import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Users, BookOpen, Award, Download, TestTube, Mail, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { useStaff } from "@/hooks/useStaff";
import useDepartmentTimetables from "@/hooks/useDepartmentTimetables";
import StaffCard from "@/components/StaffCard";

const Chemistry = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { staff: chemistryStaff, loading: staffLoading } = useStaff("Chemistry");
  const { staff: pgChemistryStaff, loading: pgStaffLoading } = useStaff("PG Chemistry");
  const { timetables: ugTimetables, loading: ugTimetablesLoading } = useDepartmentTimetables("Chemistry");
  const { timetables: pgTimetables, loading: pgTimetablesLoading } = useDepartmentTimetables("PG Chemistry");

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
        <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
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

        {/* Chemistry Program Tabs */}
        <Tabs defaultValue="ug" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="ug">UG Chemistry</TabsTrigger>
            <TabsTrigger value="pg">PG Chemistry</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ug" className="space-y-8">
            {/* UG Department Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TestTube className="h-6 w-6 text-college-blue" />
                    UG Department Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The Undergraduate Chemistry Department at SVRMC provides a solid foundation in chemical sciences 
                    with comprehensive laboratory experience and theoretical knowledge to prepare students for 
                    various career opportunities.
                  </p>
                  <p>
                    Our well-equipped laboratories include modern instrumentation and facilities for hands-on 
                    learning in organic, inorganic, and physical chemistry.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Users className="h-8 w-8 text-college-blue mx-auto mb-2" />
                      <div className="text-2xl font-bold text-college-blue">120+</div>
                      <div className="text-sm text-gray-600">UG Students</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-green-600">8</div>
                      <div className="text-sm text-gray-600">UG Faculty Members</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>UG Programs & Seats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                      <span>B.Sc. Chemistry (Regular)</span>
                      <Badge variant="secondary">45 Seats</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                      <span>B.Sc. Chemistry (Honours)</span>
                      <Badge variant="secondary">25 Seats</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* UG Program Structure */}
            <Card>
              <CardHeader>
                <CardTitle>B.Sc. Chemistry Program Structure</CardTitle>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>

            {/* UG Course & Program Outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>UG Course Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Master fundamental chemical principles and theories</li>
                    <li>• Develop basic laboratory skills and safety practices</li>
                    <li>• Understand molecular structure and bonding</li>
                    <li>• Apply basic analytical techniques</li>
                    <li>• Prepare for advanced studies or industry roles</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>UG Program Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Strong foundation in chemical sciences</li>
                    <li>• Problem-solving and analytical thinking</li>
                    <li>• Laboratory safety and protocols</li>
                    <li>• Professional ethics and responsibility</li>
                    <li>• Preparation for further studies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* UG Department Staff */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-college-blue" />
                  UG Department Staff
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

            {/* UG Department Gallery */}
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
                        alt={`Chemistry Lab ${index + 1}`}
                        className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* UG Time Tables */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-college-blue" />
                  UG Time Tables
                </CardTitle>
              </CardHeader>
              <CardContent>
                {ugTimetablesLoading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="text-muted-foreground mt-2">Loading timetables...</p>
                  </div>
                ) : ugTimetables.length === 0 ? (
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
                        {ugTimetables.map((timetable, index) => (
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
          </TabsContent>

          <TabsContent value="pg" className="space-y-8">
            {/* PG Department Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TestTube className="h-6 w-6 text-college-blue" />
                    PG Department Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    The Postgraduate Chemistry Department at SVRMC offers advanced studies in chemical sciences 
                    with specialized research opportunities, modern instrumentation, and comprehensive training 
                    for research and industry careers.
                  </p>
                  <p>
                    Our state-of-the-art research laboratories are equipped with advanced instrumentation including 
                    NMR, IR spectroscopy, chromatography systems, and sophisticated analytical instruments for 
                    cutting-edge research.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-purple-600">60+</div>
                      <div className="text-sm text-gray-600">PG Students</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-orange-600">7</div>
                      <div className="text-sm text-gray-600">PG Faculty Members</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>PG Programs & Seats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                      <span>M.Sc. Chemistry</span>
                      <Badge variant="secondary">35 Seats</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                      <span>M.Sc. Analytical Chemistry</span>
                      <Badge variant="secondary">20 Seats</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* PG Program Structure */}
            <Card>
              <CardHeader>
                <CardTitle>M.Sc. Chemistry Program Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-purple-600 mb-2">Year 1</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Advanced Inorganic Chemistry</li>
                      <li>• Advanced Organic Chemistry</li>
                      <li>• Advanced Physical Chemistry</li>
                      <li>• Quantum Chemistry</li>
                      <li>• Spectroscopy & Structure</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-orange-600 mb-2">Year 2</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Research Methodology</li>
                      <li>• Advanced Analytical Chemistry</li>
                      <li>• Organometallic Chemistry</li>
                      <li>• Materials Chemistry</li>
                      <li>• Dissertation Project</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PG Course & Program Outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>PG Course Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Advanced understanding of chemical principles</li>
                    <li>• Research skills and methodology</li>
                    <li>• Advanced instrumentation expertise</li>
                    <li>• Independent research capabilities</li>
                    <li>• Scientific writing and presentation skills</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>PG Program Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Advanced research and analytical skills</li>
                    <li>• Innovation and critical thinking</li>
                    <li>• Industry and academic readiness</li>
                    <li>• Leadership and project management</li>
                    <li>• Preparation for Ph.D. studies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* PG Department Staff */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-college-blue" />
                  PG Department Staff
                </CardTitle>
              </CardHeader>
              <CardContent>
                {pgStaffLoading ? (
                  <div className="text-center py-8">Loading staff information...</div>
                ) : pgChemistryStaff.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No staff information available yet.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pgChemistryStaff.map((staffMember) => (
                      <StaffCard key={staffMember.id} staff={staffMember} />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* PG Department Gallery */}
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
                        alt={`Chemistry Research Lab ${index + 1}`}
                        className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* PG Time Tables */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-6 w-6 text-college-blue" />
                  PG Time Tables
                </CardTitle>
              </CardHeader>
              <CardContent>
                {pgTimetablesLoading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="text-muted-foreground mt-2">Loading timetables...</p>
                  </div>
                ) : pgTimetables.length === 0 ? (
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
                        {pgTimetables.map((timetable, index) => (
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
          </TabsContent>
        </Tabs>

      </div>
    </PageLayout>
  );
};

export default Chemistry;