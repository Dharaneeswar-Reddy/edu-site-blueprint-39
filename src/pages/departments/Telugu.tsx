import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, BookOpen, Award, Download, Languages, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import DepartmentStaff from "@/components/DepartmentStaff";
import { useDepartmentTimetables } from "@/hooks/useDepartmentTimetables";

const Telugu = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { timetables, loading, error } = useDepartmentTimetables("Telugu");

  const heroImages = [
    "/lovable-uploads/17bb2e0f-adc8-46fd-b6dc-aa370c366ef2.png",
    "/lovable-uploads/2132c67c-81c1-4c7b-a949-3054c289f2ce.png",
    "/lovable-uploads/3135e1f8-603d-4960-af26-bdc4f401f693.png",
    "/lovable-uploads/33bce374-c279-4e5c-afa1-9a764d7977c4.png"
  ];

  const departmentPhotos = [
    "/lovable-uploads/365bcf12-2218-4dd4-a6e7-6d4bc591739a.png",
    "/lovable-uploads/43b08f5f-94a1-4efc-a4bc-d959843cb7ea.png",
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
      title="తెలుగు విభాగం - Department of Telugu" 
      description="తెలుగు భాష, సాహిత్యం మరియు సంస్కృతిని పరిరక్షిస్తూ, అభివృద్ధి చేస్తూ విద్యా వ్యవస్థను మెరుగుపరచుట."
    >
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Telugu Department ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">తెలుగు విభాగం</h1>
              <p className="text-xl md:text-2xl">సాహిత్య సంస్కృతి పరిరక్షణ</p>
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
                  The Department of Telugu at SVRMC is committed to preserving and promoting the 
                  rich heritage of Telugu language and literature. Our department serves as a 
                  cultural beacon, nurturing students' understanding of classical and contemporary 
                  Telugu literature while fostering linguistic competence.
                </p>
                <p>
                  తెలుగు విభాగం ప్రాచీన మరియు ఆధునిక తెలుగు సాహిత్యాన్ని అధ్యయనం చేయడంలో విద్యార్థులకు 
                  మార్గదర్శనం అందిస్తుంది. మా అనుభవజ్ఞులైన అధ్యాపకులు భాషా నైపుణ్యం, సాహిత్య విశ్లేషణ 
                  మరియు సాంస్కృతిక అవగాహనను పెంపొందించడంలో కృషి చేస్తారు.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Users className="h-8 w-8 text-college-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold text-college-blue">180+</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">12</div>
                    <div className="text-sm text-gray-600">Faculty Members</div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                    <span>B.A. Telugu Literature</span>
                    <Badge variant="secondary">60 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>B.A. Telugu (Honours)</span>
                    <Badge variant="secondary">30 Seats</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Postgraduate Programs</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span>M.A. Telugu Literature</span>
                    <Badge variant="secondary">40 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                    <span>M.A. Telugu Language</span>
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
                <h4 className="font-semibold mb-3">B.A. Telugu Literature (3 Years)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-blue-600 mb-2">Year 1</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Classical Telugu Literature</li>
                      <li>• Telugu Grammar & Prosody</li>
                      <li>• Ancient Telugu Poetry</li>
                      <li>• Language Skills Development</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-green-600 mb-2">Year 2</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Medieval Telugu Literature</li>
                      <li>• Drama & Theatre</li>
                      <li>• Literary Criticism</li>
                      <li>• Comparative Literature</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-purple-600 mb-2">Year 3</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Modern Telugu Literature</li>
                      <li>• Contemporary Poetry & Prose</li>
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
                <li>• Master Telugu language proficiency and literature</li>
                <li>• Understand cultural and historical contexts</li>
                <li>• Develop literary analysis and critical thinking</li>
                <li>• Enhance creative writing and expression skills</li>
                <li>• Apply research methods in Telugu studies</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Program Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Cultural preservation and promotion</li>
                <li>• Effective communication in Telugu</li>
                <li>• Teaching and academic excellence</li>
                <li>• Translation and interpretation skills</li>
                <li>• Literary research and documentation</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Department Staff */}
        <DepartmentStaff departmentName="Telugu" />

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
                    alt={`Telugu Department ${index + 1}`}
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
            {loading ? (
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

export default Telugu;