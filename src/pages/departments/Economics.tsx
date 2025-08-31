import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Award, TrendingUp, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import DepartmentStaff from "@/components/DepartmentStaff";
import { useDepartmentTimetables } from "@/hooks/useDepartmentTimetables";

const Economics = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { timetables, loading: timetablesLoading } = useDepartmentTimetables("Economics");

  const heroImages = [
    "/lovable-uploads/a79c3d10-11cb-4e52-8ae9-554109f98dee.png",
    "/lovable-uploads/a2c89c7b-21a3-4823-84ca-e5946d4ade86.png",
    "/lovable-uploads/7babac86-1879-4665-8a31-1919527d2637.png",
    "/lovable-uploads/d7b80186-a39d-4729-91b0-0d72e31950a2.png"
  ];

  const departmentPhotos = [
    "/lovable-uploads/a79c3d10-11cb-4e52-8ae9-554109f98dee.png",
    "/lovable-uploads/a2c89c7b-21a3-4823-84ca-e5946d4ade86.png",
    "/lovable-uploads/7babac86-1879-4665-8a31-1919527d2637.png",
    "/lovable-uploads/d7b80186-a39d-4729-91b0-0d72e31950a2.png"
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
      title="Department of Economics" 
      description="Understanding economic principles, market dynamics, and policy implications through comprehensive economic education."
    >
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Economics Department ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Economics Department</h1>
              <p className="text-xl md:text-2xl">Analyzing Markets & Economic Policy</p>
            </div>
          </div>
        </div>

        {/* Vision and Mission */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-college-blue">Vision and Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-college-blue">Vision</h4>
              <p className="text-gray-700 italic">
                "TAMASOMA JYOTHIRGAMAYA" - Expelling darkness of ignorance from the minds of young men by providing real education on the basis of principles TRUTH, LOVE, GOD.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-college-blue">Mission</h4>
              <ul className="space-y-2 text-gray-700">
                <li>1. To provide proper training to rural youth of the region</li>
                <li>2. To design academic programs through which the learner fits to global necessity</li>
                <li>3. To create and promote brain soft skills of creativity and innovation inherent in young minds of the area</li>
                <li>4. To evolve value based education system instilling the values of hard work, discipline and service mindedness</li>
                <li>5. To impart holistic education based on ethical values of truth, love, god that enables the learners to develop as intellectually mature, morally upright, socially responsible and spiritually inspired leaders to serve the society</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Department Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Department Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div className="p-6 bg-blue-50 rounded-lg">
                <Users className="h-12 w-12 text-college-blue mx-auto mb-3" />
                <div className="text-4xl font-bold text-college-blue">60+</div>
                <div className="text-lg text-gray-600">Students</div>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <div className="text-4xl font-bold text-green-600">1</div>
                <div className="text-lg text-gray-600">Faculty Members</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Programs Offered */}
        <Card>
          <CardHeader>
            <CardTitle>Programs Offered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h4 className="font-semibold mb-3">Undergraduate Programs</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium">B.A. Economics</span>
                  <Badge variant="secondary">60 Seats</Badge>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-medium">B.A. Economics (Honours)</span>
                  <Badge variant="secondary">40 Seats</Badge>
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
                <h4 className="font-semibold mb-3">B.A. Economics (3 Years)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-blue-600 mb-2">Year 1</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Principles of Microeconomics</li>
                      <li>• Principles of Macroeconomics</li>
                      <li>• Statistics for Economics</li>
                      <li>• Economic History</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-green-600 mb-2">Year 2</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Intermediate Microeconomics</li>
                      <li>• Intermediate Macroeconomics</li>
                      <li>• Development Economics</li>
                      <li>• International Economics</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-purple-600 mb-2">Year 3</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Econometrics</li>
                      <li>• Public Economics</li>
                      <li>• Environmental Economics</li>
                      <li>• Research Project</li>
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
              <TrendingUp className="h-6 w-6 text-college-blue" />
              Department Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The Department of Economics at SVRMC provides comprehensive education in economic 
              theory, quantitative methods, and policy analysis. Our programs prepare students 
              to understand complex economic phenomena and contribute to evidence-based 
              decision making in various sectors.
            </p>
            <p>
              With experienced faculty specializing in microeconomics, macroeconomics, 
              econometrics, and development economics, we offer both theoretical foundations 
              and practical applications. Students engage with real-world economic data and 
              policy challenges through research projects and internships.
            </p>
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
                <li>• Understand economic theories and models</li>
                <li>• Analyze market mechanisms and failures</li>
                <li>• Apply quantitative methods to economic data</li>
                <li>• Evaluate economic policies and outcomes</li>
                <li>• Develop critical thinking about economic issues</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Program Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Analytical and problem-solving skills</li>
                <li>• Data analysis and interpretation abilities</li>
                <li>• Policy analysis and recommendation skills</li>
                <li>• Economic research methodologies</li>
                <li>• Career readiness in economics and finance</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Department Staff */}
        <DepartmentStaff departmentName="Economics" />

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
                    alt={`Economics Classroom ${index + 1}`}
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
              <div className="text-center py-4">Loading timetables...</div>
            ) : timetables.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {timetables.map((timetable) => (
                  <div key={timetable.id} className="p-4 border rounded-lg text-center">
                    <h4 className="font-semibold mb-2">{timetable.title}</h4>
                    {timetable.description && (
                      <p className="text-sm text-gray-600 mb-3">{timetable.description}</p>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(timetable.file_url, '_blank')}
                    >
                      View Schedule
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No timetables available at the moment.
              </div>
            )}
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default Economics;