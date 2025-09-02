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
    "/lovable-uploads/5ac5ea4b-5580-4969-8658-192e082f8417.png",
    "/lovable-uploads/d4627f03-9552-464e-93cf-2eca5d4c1408.png",
    "/lovable-uploads/0f1c4da3-be3f-40ea-8a8e-99e833035b28.png",
    "/lovable-uploads/9f78b4d0-4434-4a94-b8a6-88be11989e42.png",
    "/lovable-uploads/07f517fb-d713-4aaf-944d-b8f8d448db39.png"
  ];

  const departmentPhotos = [
    "/lovable-uploads/596e11b2-cd25-48ed-8769-88d01f850463.png",
    "/lovable-uploads/5ac5ea4b-5580-4969-8658-192e082f8417.png",
    "/lovable-uploads/d4627f03-9552-464e-93cf-2eca5d4c1408.png",
    "/lovable-uploads/0f1c4da3-be3f-40ea-8a8e-99e833035b28.png",
    "/lovable-uploads/225096ea-f8cf-438e-8c55-9040932e6d87.png",
    "/lovable-uploads/9f78b4d0-4434-4a94-b8a6-88be11989e42.png",
    "/lovable-uploads/07f517fb-d713-4aaf-944d-b8f8d448db39.png",
    "/lovable-uploads/0523c75f-0802-48bd-8253-e99fd2384d50.png",
    "/lovable-uploads/80fc22e8-dd51-4a45-ab3c-1a1af16f51ef.png",
    "/lovable-uploads/ef841f31-b3bb-40b7-a2f2-d5af0b0957bf.png"
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

        {/* Department Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-college-blue" />
              Department Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3 text-blue-800">VISION</h4>
              <p className="text-blue-700">
                Expelling the Darkness of ignorance from the minds of young men by providing real education on the basis of the principles "Truth – Love - God" ("Tama soma Jyothirgamaya")
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3 text-green-800">MISSION</h4>
              <ul className="text-green-700 space-y-2">
                <li>• To provide proper training to rural youth in the region</li>
                <li>• To design academic programs through which the learner fits into global necessity</li>
                <li>• To create and promote brain storming skills of creativity and innovation inherent in the young minds of the area</li>
                <li>• To evolve a value-based education system instilling the values of hard work, discipline, and service mindedness</li>
                <li>• To impart holistic education based on the ethical values of Truth, Love, God. It enables the learners to develop as intellectually mature, morally upright, socially responsible, and spiritually inspired leaders to serve society.</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3 text-purple-800">OBJECTIVES & GOALS</h4>
              <ul className="text-purple-700 space-y-2">
                <li>• Creating a genuine interest in physics by means of the teaching and learning process</li>
                <li>• Motivating students to learn basic experimental work to get a conceptual background in physics</li>
                <li>• Maintaining the departmental library to keep valuable books and internet resources at the disposal of the students</li>
                <li>• Promoting students towards self-employment and also encouraging them to participate in internships with renowned industries and laboratories</li>
                <li>• Imparting high-quality education by adopting advanced methods of teaching</li>
                <li>• Conducting national-level seminars and workshops to develop a scientific attitude among students</li>
                <li>• Establishing curriculum-related features towards applications of AI in physics by conducting workshops and webinars by eminent resource persons</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3 text-yellow-800">ABOUT PHYSICS</h4>
              <p className="text-yellow-700 mb-3">
                Physics is the study of nature. All the different events in nature take place according to basic laws. For example, the orbiting of the moon around the earth, the falling of an apple from a tree, and the tides in the sea on a full moon night can all be explained if we know Newton's law of motion and Newton's gravitational law.
              </p>
              <p className="text-yellow-700">
                Physics is related to the rules that are applicable to all domains of life. Understanding physics therefore leads to applications in many fields like communications, information technology, nanotechnology, bio-medical sciences, and artificial intelligence. Physics, being one of the vital basic sciences, has played a significant role in improving the quality of life for mankind.
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3 text-indigo-800">BRIEF HISTORY OF THE DEPARTMENT</h4>
              <p className="text-indigo-700 mb-3">
                The department of Physics, Shree Velagapudi Ramakrishna Memorial College, Nagaram, was established in the year 1970. It has a great reputation and distinction of producing many Scholars, Administrators, Scientists, Physicists, Mathematicians, Chemists and other illustrious personalities in various fields.
              </p>
              <p className="text-indigo-700">
                Under the leadership of eminent founder teachers like Dr. M.V. Subba Rao, Dr. T.V. Krishna Rao and under the guidance of many great faculty like Sri. M. Satya Murty, Sri. G.S.B. Prabhakara Rao, Sri G. Srinivasa Rao and Sri Ch. Kishore Babu and with greatly influenced former distinguished staff, the department has developed by leaps and bounds to the present stage of dynamic standards. Currently, Dr. P. Srinivasa Rao is acting as HOD of the department and the remaining faculty are namely Sri B. Venkateswara Rao and Sri Ch. Nageswara Rao.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Infrastructure and Learning Resources */}
        <Card>
          <CardHeader>
            <CardTitle>Infrastructure and Learning Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Laboratory Facilities</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span>Lab I: Mechanics and Properties of matter</span>
                    <Badge variant="secondary">30' × 20'</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>Lab II: Optics</span>
                    <Badge variant="secondary">30' × 20'</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span>Lab III: Electricity and Magnetism</span>
                    <Badge variant="secondary">30' × 20'</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                    <span>Lab IV: Modern Physics and Electronics</span>
                    <Badge variant="secondary">30' × 12'</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                    <span>Staff Room</span>
                    <Badge variant="secondary">30' × 20'</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Resources</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded">
                    <strong>Library:</strong> The department library has about 211 books for the use of students and faculty members.
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <strong>Equipment:</strong> The department has procured a sufficient quantity of equipment since its inception.
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <strong>Research Equipment:</strong> High temperature box furnace-1400°C (digital), High temperature furnace-1200°C, Digital electronic balance SHIMADZU, Agate Mortar & Pestle.
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <strong>Heritage Instrument:</strong> SKYSCAN 851 T 75mm refractor telescope used to observe Solar and Lunar eclipses, Saturn rings, Jupiter moons, and Moon craters.
                  </div>
                </div>
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
            <div className="space-y-4">
              <h4 className="font-semibold mb-3">Under Graduate - Honours Programs</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                  <span>B.Sc., Physics (Major)</span>
                  <Badge variant="secondary">24 Seats</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span>B.Sc., Chemistry (Major) – Physics (Minor) (Choice based)</span>
                  <Badge variant="secondary">78 Seats</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                  <span>B.Sc., Computer Science (Major) – Physics (Minor) (Choice based)</span>
                  <Badge variant="secondary">88 Seats</Badge>
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
                <h4 className="font-semibold mb-3">B.Sc Physics Courses (3 years)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-blue-600 mb-2">Year 1</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Introduction to Mathematical Physics (Major)</li>
                      <li>• Mechanics and Properties of Matter (Major)</li>
                      <li>• Principles of Physical Sciences (M.D)</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-green-600 mb-2">Year 2</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Optics (Minor)</li>
                      <li>• Electricity, Magnetism and Electronics (Minor)</li>
                      <li>• Modern Physics (Minor)</li>
                      <li>• Introduction to Nano-Technology (M.D)</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-purple-600 mb-2">Year 3</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Applications of Electricity & Magnetism (Minor)</li>
                      <li>• Electronic Instrumentation (Minor)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activities and Development */}
        <Card>
          <CardHeader>
            <CardTitle>Activities and Development</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h5 className="font-semibold text-blue-600">Staff Development Activities</h5>
                <p className="text-sm">Staff members are encouraged to do research and publications, and are asked to perform faculty development programmes. Most teaching staff have attended orientation programmes and refresher courses.</p>
              </div>
              <div className="space-y-3">
                <h5 className="font-semibold text-green-600">Student Development Activities</h5>
                <p className="text-sm">Students are provided with quiz programmes, field visits organized by the department. Periodical study projects, group discussions and classroom seminars are arranged for their subject acquaintance.</p>
              </div>
              <div className="space-y-3">
                <h5 className="font-semibold text-purple-600">Overall Development Activities</h5>
                <p className="text-sm">National and Regional level seminars are arranged by the department. NGPE, a national level physics competitive examination is being hosted by the physics department for the last two decades.</p>
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
                {departmentStaff
                  .sort((a, b) => {
                    // HODs first, then others alphabetically - comprehensive HOD detection
                    const aDesignation = a.designation.toLowerCase();
                    const bDesignation = b.designation.toLowerCase();
                    
                    const aIsHOD = aDesignation.includes('hod') || 
                                  aDesignation.includes('head of department') || 
                                  aDesignation.includes('head of the department') ||
                                  aDesignation.includes('department head') ||
                                  aDesignation.includes('head - department') ||
                                  aDesignation.includes('head-department') ||
                                  aDesignation.includes('dept. head') ||
                                  aDesignation.includes('dept head');
                                  
                    const bIsHOD = bDesignation.includes('hod') || 
                                  bDesignation.includes('head of department') || 
                                  bDesignation.includes('head of the department') ||
                                  bDesignation.includes('department head') ||
                                  bDesignation.includes('head - department') ||
                                  bDesignation.includes('head-department') ||
                                  bDesignation.includes('dept. head') ||
                                  bDesignation.includes('dept head');
                    
                    if (aIsHOD && !bIsHOD) return -1;
                    if (!aIsHOD && bIsHOD) return 1;
                    return a.name.localeCompare(b.name);
                  })
                  .map((staff) => (
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