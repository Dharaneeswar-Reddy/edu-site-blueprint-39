import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Award, ScrollText, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import DepartmentStaff from "@/components/DepartmentStaff";
import useDepartmentTimetables from "@/hooks/useDepartmentTimetables";

const History = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { timetables, loading: timetablesLoading } = useDepartmentTimetables("History");

  const heroImages = [
    "/lovable-uploads/2f3492d3-c470-4933-b6f0-0009becc36bb.png",
    "/lovable-uploads/41d15808-c8f5-40b0-9b18-f874a19621a6.png",
    "/lovable-uploads/6862cc76-f986-492c-b68b-7468bff3e2a8.png"
  ];

  const departmentPhotos = [
    "/lovable-uploads/2f3492d3-c470-4933-b6f0-0009becc36bb.png",
    "/lovable-uploads/41d15808-c8f5-40b0-9b18-f874a19621a6.png",
    "/lovable-uploads/6862cc76-f986-492c-b68b-7468bff3e2a8.png"
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
      title="Department of History" 
      description="Exploring human civilization, cultural heritage, and historical processes through comprehensive historical education."
    >
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`History Department ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">History Department</h1>
              <p className="text-xl md:text-2xl">Preserving & Understanding Human Heritage</p>
            </div>
          </div>
        </div>

        {/* Vision and Mission */}
        <Card>
          <CardHeader>
            <CardTitle>Department Vision & Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">VISION</h4>
                <p className="text-sm leading-relaxed">
                  Expelling Darkness of Ignorance from the minds of young men by providing real 
                  education on the basis of principles Truth, Love, God
                </p>
                <p className="text-center font-semibold italic mt-2 text-blue-600">
                  "TAMASOMA JYOTHIRGAMAYA"
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-green-600">MISSION</h4>
                <ul className="text-sm space-y-2">
                  <li>1. To provide proper training to rural youth of the region</li>
                  <li>2. To design academic programs through which the learner fits to global necessity</li>
                  <li>3. To create and promote, brain soft skills of creativity and innovation inherent in young minds of the area</li>
                  <li>4. To evolve value based education system instilling the values of hard work, discipline and service mindedness</li>
                  <li>5. To impart holistic education based on ethical values of truth, love, god it enables the learners to develop as intellectually mature, morally upright, socially responsible and spiritually inspired leaders to serve the society</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

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
                    <span>B.A. History</span>
                    <Badge variant="secondary">60 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>B.A. History (Honours)</span>
                    <Badge variant="secondary">40 Seats</Badge>
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
                <h4 className="font-semibold mb-3">B.A. History (Honours) (4 Years)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-blue-600 mb-2">Year 1</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Ancient Indian History</li>
                      <li>• World History (Ancient)</li>
                      <li>• Historical Methods</li>
                      <li>• Archaeology & Heritage</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-green-600 mb-2">Year 2</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Medieval Indian History</li>
                      <li>• World History (Medieval)</li>
                      <li>• Social & Cultural History</li>
                      <li>• Historical Geography</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-purple-600 mb-2">Year 3</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Modern Indian History</li>
                      <li>• Contemporary World History</li>
                      <li>• Historiography</li>
                      <li>• Research Project</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-orange-600 mb-2">Year 4</h5>
                    <ul className="text-sm space-y-1">
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
              <ScrollText className="h-6 w-6 text-college-blue" />
              Department Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The Department of History at SVRMC is committed to fostering critical understanding 
              of human civilization, cultural heritage, and historical processes. Our programs 
              cover ancient, medieval, and modern history with special emphasis on Indian history 
              and world civilizations.
            </p>
            <p>
              With experienced faculty specializing in various periods and regions, we encourage 
              students to develop analytical skills, historical thinking, and research methodologies. 
              Our curriculum combines traditional historical scholarship with contemporary 
              approaches to historical studies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="h-8 w-8 text-college-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-college-blue">100+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">5</div>
                <div className="text-sm text-gray-600">Faculty Members</div>
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
                <li>• Understand historical processes and patterns</li>
                <li>• Develop critical analysis of historical sources</li>
                <li>• Master chronological and thematic approaches</li>
                <li>• Apply research methodologies</li>
                <li>• Appreciate cultural diversity and heritage</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Program Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Critical thinking and analytical skills</li>
                <li>• Historical research and writing abilities</li>
                <li>• Cultural awareness and sensitivity</li>
                <li>• Heritage conservation understanding</li>
                <li>• Career readiness in education and research</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Department Staff */}
        <DepartmentStaff departmentName="History" />

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
                    alt={`History Classroom ${index + 1}`}
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
                    <p className="text-sm text-gray-600 mb-3">{timetable.description}</p>
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

export default History;