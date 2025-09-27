import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, BookOpen, Award, Download, Calculator, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import DepartmentStaff from "@/components/DepartmentStaff";
import { useDepartmentTimetables } from "@/hooks/useDepartmentTimetables";
const Mathematics = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const {
    timetables,
    loading,
    error
  } = useDepartmentTimetables("Mathematics");
  const heroImages = ["/lovable-uploads/ad1edf50-6e71-4375-91d2-7e8d76b3b7b5.png", "/lovable-uploads/b1fc6422-ad59-4662-83db-90f4d62b1001.png", "/lovable-uploads/76e749fc-2917-4512-b28a-328266b210fe.png", "/lovable-uploads/efecdc8b-f78a-4ff1-947b-c70afb2f2b33.png"];
  const departmentPhotos = ["/lovable-uploads/ad1edf50-6e71-4375-91d2-7e8d76b3b7b5.png", "/lovable-uploads/b1fc6422-ad59-4662-83db-90f4d62b1001.png", "/lovable-uploads/76e749fc-2917-4512-b28a-328266b210fe.png", "/lovable-uploads/efecdc8b-f78a-4ff1-947b-c70afb2f2b33.png"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  return <PageLayout title="Department of Mathematics" description="Building logical thinking and analytical skills through pure and applied mathematical sciences.">
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
          {heroImages.map((image, index) => <img key={index} src={image} alt={`Mathematics Department ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} />)}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              
              
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

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                To Create an Academically sound environment that nurtures, motivates and inspires 
                excellence in research and teaching in Mathematics along with concern for society.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li>• To provide proper training to rural youth of the region to acquire skills and techniques to cater the meets of the society.</li>
                <li>• To Providing the Academic Environment to the students that they can transform as skilled users having strong foundation in Applications of Mathematics in other Science Subjects.</li>
                <li>• To Equip the students with the necessary Competitive skills to build up Their career.</li>
                <li>• To develop logical, analytical and Mathematical thinking power in the minds of students in order to cater the Mathematical needs of the society.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Department Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-6 w-6 text-college-blue" />
              About the Department
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Department of Mathematics was established in 1970 with PUC. In 1970, B. Sc. Course with Mathematics, Physics and Chemistry combination was started.
            </p>
            <p>
              In The Academic year 2014-15, M.Sc Mathematics Program Introduced. In 2023, under the revised Curriculum and Credit Framework for Undergraduate Programmes (CCFUP) aligned with NEP 2020, many universities—including those in Andhra Pradesh—introduced a 4-year UG Honours program with a Single Major and one Minor.
            </p>
            <p>
              Mathematics did not become a major subject by default. Instead:
            </p>
            <ul className="space-y-1 text-sm ml-4">
              <li>• Students now choose one subject as their Major and another as their Minor.</li>
              <li>• Mathematics can be a Minor, depending on the student's selection and the program structure.</li>
              <li>• For example, in B.Sc. Hons. (Computer Science) program, Mathematics is offered as a Minor subject.</li>
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
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
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">4</div>
                <div className="text-sm text-gray-600">Programs</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <Calculator className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
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

        {/* Department Staff */}
        <DepartmentStaff departmentName="Mathematics" />

        {/* Department Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>Department Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {departmentPhotos.map((photo, index) => <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <img src={photo} alt={`Mathematics Classroom ${index + 1}`} className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                </div>)}
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
            {loading ? <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="text-muted-foreground mt-2">Loading timetables...</p>
              </div> : timetables.length === 0 ? <div className="text-center py-8">
                <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">No timetables available at the moment.</p>
              </div> : <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/20">
                      <th className="text-left py-3 px-4 font-semibold text-primary">S.No</th>
                      <th className="text-left py-3 px-4 font-semibold text-primary">Name</th>
                      <th className="text-center py-3 px-4 font-semibold text-primary">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timetables.map((timetable, index) => <tr key={timetable.id} className="border-b hover:bg-muted/10">
                        <td className="py-3 px-4 text-primary font-medium">{index + 1}</td>
                        <td className="py-3 px-4 text-primary">
                          <div>
                            <div className="font-medium">{timetable.title}</div>
                            {timetable.description && <div className="text-sm text-muted-foreground">{timetable.description}</div>}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <Button variant="outline" size="sm" onClick={() => window.open(timetable.file_url, '_blank')}>
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </Button>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>}
          </CardContent>
        </Card>

      </div>
    </PageLayout>;
};
export default Mathematics;