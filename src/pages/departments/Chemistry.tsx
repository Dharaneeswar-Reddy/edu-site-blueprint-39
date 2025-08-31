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
    "/lovable-uploads/0fe00b38-b99b-4a27-bf5b-d43c2778a8fa.png",
    "/lovable-uploads/5bcaeb67-6bff-44ae-a93c-1d97ef3bac8d.png",
    "/lovable-uploads/380523da-c2c1-4014-b1ae-6fa50c1df600.png",
    "/lovable-uploads/7ac42b67-07fe-42f1-9b41-6f119490b786.png",
    "/lovable-uploads/ac73ea26-e8e0-4756-9c7b-c2a4a18f6d66.png",
    "/lovable-uploads/6c0f963f-de81-4600-be2e-a311fe83bb96.png",
    "/lovable-uploads/958295e9-3189-4f34-8a51-d2aeb431f9ee.png",
    "/lovable-uploads/44151e06-0086-45c1-b1b8-dea0cce05c3b.png",
    "/lovable-uploads/c06797f6-5188-4a68-893e-92274a14b172.png",
    "/lovable-uploads/dec9abef-758a-4d15-a93a-a9e7e7575c05.png"
  ];

  const departmentPhotos = [
    "/lovable-uploads/0fe00b38-b99b-4a27-bf5b-d43c2778a8fa.png",
    "/lovable-uploads/5bcaeb67-6bff-44ae-a93c-1d97ef3bac8d.png",
    "/lovable-uploads/380523da-c2c1-4014-b1ae-6fa50c1df600.png",
    "/lovable-uploads/7ac42b67-07fe-42f1-9b41-6f119490b786.png",
    "/lovable-uploads/ac73ea26-e8e0-4756-9c7b-c2a4a18f6d66.png",
    "/lovable-uploads/6c0f963f-de81-4600-be2e-a311fe83bb96.png",
    "/lovable-uploads/958295e9-3189-4f34-8a51-d2aeb431f9ee.png",
    "/lovable-uploads/44151e06-0086-45c1-b1b8-dea0cce05c3b.png",
    "/lovable-uploads/c06797f6-5188-4a68-893e-92274a14b172.png",
    "/lovable-uploads/dec9abef-758a-4d15-a93a-a9e7e7575c05.png"
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
            <Card className="col-span-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TestTube className="h-6 w-6 text-college-blue" />
                  Overview of the Department of Chemistry
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p>
                  The Department of Chemistry, established in 1969, had distinguished founding faculty members P.L. Narayana, P. Bhaskara Rao, and V. Kutumba Rao. Over the years, it grew with contributions from esteemed educators and is currently led by Sri R. Prasanna Babu. The department prepares students for university and competitive exams, ensuring academic and professional excellence.
                </p>
                <p>
                  It regularly hosts international and national seminars, offering valuable insights. Two postgraduate courses in Inorganic Chemistry and Analytical Chemistry are offered, led by Dr. A. Koteswara Rao and Dr. K. Surendra Babu, the Director for P.G. courses. Guest and extension lectures on contemporary topics further enrich students' learning.
                </p>
                <p>
                  With consistent student success in various employment sectors, the department also conducts special classes on personality development, career orientation, and interdisciplinary knowledge, fostering holistic growth and future readiness.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-blue-800">VISION</h4>
                  <p className="text-blue-700">
                    To provide high-quality education in Chemistry, fostering scientific knowledge, research skills, and innovation to contribute to societal and industrial advancements.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-green-800">MISSION</h4>
                  <ul className="text-green-700 space-y-2">
                    <li>• To impart fundamental and advanced knowledge in Chemistry through quality teaching and research</li>
                    <li>• To develop analytical and problem-solving skills among students</li>
                    <li>• To encourage research and innovation in chemical sciences</li>
                    <li>• To prepare students for careers in academia, research, and industry</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-purple-800">FACILITIES & INFRASTRUCTURE</h4>
                  <ul className="text-purple-700 space-y-2">
                    <li>• Well-equipped laboratories for both UG and PG students</li>
                    <li>• Advanced instrumentation for research and practical learning</li>
                    <li>• Library resources with textbooks, reference materials, and research journals</li>
                    <li>• Collaborations with industries and research institutions for hands-on training and projects</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-yellow-800">ACADEMIC PROGRAMS</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-yellow-700 mb-2">Undergraduate Programs:</h5>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• B.Sc. (M.P.C) – Mathematics, Physics, Chemistry</li>
                        <li>• B.Sc. (C.B.Z) – Chemistry, Botany, Zoology</li>
                        <li>• B.Sc. (C.Z.A) – Chemistry, Zoology, Agriculture</li>
                        <li>• B.Sc. Chemistry Major (Introduced in 2023-24)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-yellow-700 mb-2">Postgraduate Programs:</h5>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• M.Sc. Organic Chemistry</li>
                        <li>• M.Sc. Analytical Chemistry (Introduced in 2017)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-indigo-800">CURRENT FACULTY</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span>Sri R. Prasanna Babu</span>
                      <Badge variant="outline">HOD of Chemistry (UG)</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded">
                      <span>Smt. A. Kokila</span>
                      <Badge variant="outline">Lecturer in Chemistry</Badge>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Users className="h-8 w-8 text-college-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold text-college-blue">120+</div>
                    <div className="text-sm text-gray-600">UG Students</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">2</div>
                    <div className="text-sm text-gray-600">Current Faculty Members</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

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
                <CardTitle>B.Sc. (Honours) Chemistry – Major Course Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/20">
                        <th className="text-left py-2 px-3 font-semibold">Semester</th>
                        <th className="text-left py-2 px-3 font-semibold">Course Code</th>
                        <th className="text-left py-2 px-3 font-semibold">Title of the Course</th>
                        <th className="text-center py-2 px-3 font-semibold">Credits</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 px-3 text-center bg-blue-50 font-medium">I</td>
                        <td className="py-2 px-3">1</td>
                        <td className="py-2 px-3">Essentials and Applications of Mathematical, Physical and Chemical Sciences</td>
                        <td className="py-2 px-3 text-center">4</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3 text-center bg-blue-50 font-medium"></td>
                        <td className="py-2 px-3">2</td>
                        <td className="py-2 px-3">Advances in Mathematical, Physical and Chemical Sciences</td>
                        <td className="py-2 px-3 text-center">4</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3 text-center bg-green-50 font-medium">II</td>
                        <td className="py-2 px-3">3 (T/P)</td>
                        <td className="py-2 px-3">General & Inorganic Chemistry (Theory + Practical)</td>
                        <td className="py-2 px-3 text-center">4</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3 text-center bg-green-50 font-medium"></td>
                        <td className="py-2 px-3">4 (T/P)</td>
                        <td className="py-2 px-3">Inorganic Chemistry–I (Theory + Practical)</td>
                        <td className="py-2 px-3 text-center">4</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3 text-center bg-purple-50 font-medium">III</td>
                        <td className="py-2 px-3">5-8 (T/P)</td>
                        <td className="py-2 px-3">Fundamentals of Organic Chemistry, Organic Chemistry (Halogen & Oxygen Compounds), Physical Chemistry–I (Solutions & Electrochemistry), Inorganic & Physical Chemistry</td>
                        <td className="py-2 px-3 text-center">16</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3 text-center bg-orange-50 font-medium">IV</td>
                        <td className="py-2 px-3">9-11 (T/P)</td>
                        <td className="py-2 px-3">Physical Chemistry–II (States of Matter, Phase Rule & Surface Chemistry), General & Physical Chemistry, Nitrogen–Containing Organic Compounds & Spectroscopy</td>
                        <td className="py-2 px-3 text-center">12</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3 text-center bg-yellow-50 font-medium">V</td>
                        <td className="py-2 px-3">12A/B-15A/B</td>
                        <td className="py-2 px-3">Analytical Methods, Environmental Chemistry, Chromatography & Instrumental Methods, Green Chemistry & Nanotechnology, Synthetic Organic Chemistry, Industrial Chemistry</td>
                        <td className="py-2 px-3 text-center">16</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3 text-center bg-red-50 font-medium">VI</td>
                        <td className="py-2 px-3">-</td>
                        <td className="py-2 px-3">Internship</td>
                        <td className="py-2 px-3 text-center">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Programme Specific Outcomes */}
            <Card>
              <CardHeader>
                <CardTitle>Programme Specific Outcomes (PSOs) – B.Sc. Chemistry</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2">PSO1</h5>
                    <p className="text-blue-700 text-sm">On successful completion of the B.Sc. Chemistry programme, students acquire strong theoretical foundations and practical skills in handling chemicals, laboratory techniques, and experimental methods.</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">PSO2</h5>
                    <p className="text-green-700 text-sm">Graduates become eligible for careers in government sectors such as food safety departments, water testing laboratories, and pharmacy services, including roles like pharmacist and laboratory analyst.</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-2">PSO3</h5>
                    <p className="text-purple-700 text-sm">In the private sector, students can pursue opportunities in pharmaceutical industries, paint industries, plastic industries, and related chemical enterprises as trainee chemists or quality control assistants. They are also qualified to take up teaching positions in schools as chemistry educators.</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h5 className="font-semibold text-orange-800 mb-2">PSO4</h5>
                    <p className="text-orange-700 text-sm">The programme prepares students for higher education, enabling them to pursue postgraduate studies (M.Sc.) in various specializations of chemistry, including Organic, Inorganic, Physical, Analytical, Industrial, Pharmaceutical, and Medicinal Chemistry.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

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
            <Card className="col-span-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TestTube className="h-6 w-6 text-college-blue" />
                  PG Department Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-blue-800">Year of Establishment</h4>
                  <p className="text-blue-700">2003</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-green-800">Courses Offered</h4>
                  <ul className="text-green-700 space-y-2">
                    <li>• M.Sc (Organic Chemistry)</li>
                    <li>• M.Sc (Analytical Chemistry)</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-purple-800">BRIEF HISTORY & INTRODUCTION</h4>
                  <p className="text-purple-700 mb-3">
                    The Department of Chemistry (PG) was established in the year 2003. The activities of the department were formally launched and inaugurated by Dr. K. Surendra Babu, under the principalship of Sri. A.V.Raghava Rao. The department is one of the oldest departments in the Acharya Nagarjuna University affiliated colleges.
                  </p>
                  <p className="text-purple-700">The department offers the following courses:</p>
                  <ul className="text-purple-700 space-y-1 mt-2">
                    <li>1. M.Sc Organic Chemistry (Since 2003)</li>
                    <li>2. M.Sc Analytical Chemistry (Since 2010)</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-yellow-800">VISION</h4>
                  <p className="text-yellow-700">
                    Expelling Darkness of ignorance from the minds of young men providing Real education on the basis of Devine principles- "Truth Love God" (Tama Soma Jyothirgamaya)
                  </p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-indigo-800">MISSION</h4>
                  <ul className="text-indigo-700 space-y-2">
                    <li>• To develop application-oriented courses, with necessary inputs and values with a view to shape the learners for all-round development</li>
                    <li>• To cultivate knowledge skills, values and confidence in the students to grow, thrive and prosper</li>
                    <li>• To promote academic exchange and strengthen academic industry interfacing exploring the technology available</li>
                    <li>• To instigate the spirit of enquiry, integrity, leadership and deep sense of social justice among students</li>
                    <li>• To provide life skills for a successful career and combat the competition in the society</li>
                    <li>• To collaborate with the national and international institutes for providing platform for exposure to our students</li>
                    <li>• Implementation of NEP, to setup reforms for skill development and enhancement of student's competency</li>
                  </ul>
                </div>

                <div className="bg-rose-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-rose-800">HIGHLIGHTS & FACILITIES</h4>
                  <ul className="text-rose-700 space-y-2">
                    <li>• The Department has well established laboratories for Previous and Final Year students</li>
                    <li>• The Department Library has 565 books useful to Faculty members & Students</li>
                    <li>• In addition to traditional Class room teaching, staff is using 3D models, Charts for better understanding to students</li>
                    <li>• Eminent Academicians are invited regularly to deliver guest lectures on various topics</li>
                    <li>• Important web electronic documents of new inventions and innovations are downloaded and distributed to the students regularly</li>
                    <li>• Additional curriculum is provided to aspiring learners. Book reviews, study projects, discussions on current trends, group discussions, presentation of papers in class room seminars are encouraged</li>
                    <li>• Power point presentation CD's are prepared for students</li>
                    <li>• The Department provides career guidance for job opportunities in pharmaceuticals and public sector fields</li>
                    <li>• The Department provides coaching for various competitive examinations like SLET & CSIR-UGC-NET….etc</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* PG Programs & Seats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>PG Programs & Seats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                      <span>M.Sc. Organic Chemistry</span>
                      <Badge variant="secondary">35 Seats</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                      <span>M.Sc. Analytical Chemistry</span>
                      <Badge variant="secondary">20 Seats</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Department Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
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
            </div>

            {/* Laboratory Instruments Section - To be filled later */}
            <Card>
              <CardHeader>
                <CardTitle>Laboratory Instruments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <TestTube className="h-16 w-16 mx-auto mb-4 opacity-20" />
                  <p>Laboratory instruments details will be added soon.</p>
                </div>
              </CardContent>
            </Card>

            {/* Departmental Activities Section - To be filled later */}
            <Card>
              <CardHeader>
                <CardTitle>Departmental Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <Calendar className="h-16 w-16 mx-auto mb-4 opacity-20" />
                  <p>Departmental activities details will be added soon.</p>
                </div>
              </CardContent>
            </Card>

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