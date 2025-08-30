import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Award, Leaf, Mail, Download } from "lucide-react";
import { useEffect, useState } from "react";
import DepartmentStaff from "@/components/DepartmentStaff";
import { useDepartmentTimetables } from "@/hooks/useDepartmentTimetables";

const Botany = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { timetables, loading, error } = useDepartmentTimetables("Botany");

  const heroImages = [
    "/lovable-uploads/26e5dd9a-23af-4d35-bf39-50ea0a90dcc1.png",
    "/lovable-uploads/3f2ac2fe-5cc6-403c-b266-c0a4bfc92b9a.png",
    "/lovable-uploads/43b08f5f-94a1-4efc-a4bc-d959843cb7ea.png",
    "/lovable-uploads/5c7ebe72-4ecd-4e54-8ce5-6bf0a6141878.png"
  ];

  const departmentPhotos = [
    "/lovable-uploads/662ebac1-9113-46ee-b212-a9a1526878d4.png",
    "/lovable-uploads/71dea894-961d-4fd6-ac1f-78e8db8d93b4.png",
    "/lovable-uploads/805efae8-1428-4b19-9a41-f2f62680aefc.png",
    "/lovable-uploads/9f96f106-897d-46e3-a4a1-4c4b8f8f9f0c.png"
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
      title="Department of Botany" 
      description="Exploring plant life, biodiversity, and ecological relationships through comprehensive botanical education and research."
    >
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Botany Department ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Botany Department</h1>
              <p className="text-xl md:text-2xl">Understanding Plant Life & Biodiversity</p>
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
                    <span>B.Sc. Botany (Regular)</span>
                    <Badge variant="secondary">35 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>B.Sc. Botany (Honours)</span>
                    <Badge variant="secondary">20 Seats</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Postgraduate Programs</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span>M.Sc. Botany</span>
                    <Badge variant="secondary">25 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                    <span>M.Sc. Plant Biotechnology</span>
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
                <h4 className="font-semibold mb-3">B.Sc. Botany (3 Years)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-blue-600 mb-2">Year 1</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Plant Morphology</li>
                      <li>• Cell Biology</li>
                      <li>• Biodiversity of Plants</li>
                      <li>• Plant Ecology</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-green-600 mb-2">Year 2</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Plant Physiology</li>
                      <li>• Plant Taxonomy</li>
                      <li>• Genetics & Evolution</li>
                      <li>• Environmental Biology</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-purple-600 mb-2">Year 3</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Plant Biotechnology</li>
                      <li>• Economic Botany</li>
                      <li>• Research Methodology</li>
                      <li>• Project Work</li>
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
              <Leaf className="h-6 w-6 text-college-blue" />
              Department Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The Department of Botany at SVRMC is dedicated to fostering understanding of plant 
              sciences, from cellular biology to ecosystem dynamics. Our comprehensive programs 
              cover plant morphology, physiology, taxonomy, ecology, and biotechnology.
            </p>
            <p>
              Our well-equipped laboratories include microscopy facilities, plant tissue culture 
              labs, and herbarium collections. Students engage in field studies, research projects, 
              and practical applications of botanical knowledge in agriculture, conservation, 
              and biotechnology sectors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="h-8 w-8 text-college-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-college-blue">140+</div>
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
                <Leaf className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">25+</div>
                <div className="text-sm text-gray-600">Research Projects</div>
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
                <li>• Understand plant structure and function</li>
                <li>• Master taxonomic classification systems</li>
                <li>• Develop field identification skills</li>
                <li>• Apply biotechnology techniques</li>
                <li>• Analyze ecological relationships</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Program Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Environmental conservation awareness</li>
                <li>• Research and analytical skills</li>
                <li>• Laboratory techniques proficiency</li>
                <li>• Scientific communication abilities</li>
                <li>• Career readiness in botanical sciences</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Department Staff */}
        <DepartmentStaff departmentName="Botany" />

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
                    alt={`Botany Lab ${index + 1}`}
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

export default Botany;