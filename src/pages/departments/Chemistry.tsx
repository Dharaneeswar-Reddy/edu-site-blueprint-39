import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    "/lovable-uploads/dec9abef-758a-4d15-a93a-a9e7e7575c05.png",
    "/lovable-uploads/1d8f59be-c09f-438d-9557-f1ad61eea667.png",
    "/lovable-uploads/10b4f684-4d4c-45be-871d-f64daf43e585.png",
    "/lovable-uploads/1041cbf2-981b-437e-a2eb-72dfb54ca3b1.png",
    "/lovable-uploads/a32c8f33-64ff-4729-8b86-ba29f7eb5491.png"
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
    "/lovable-uploads/dec9abef-758a-4d15-a93a-a9e7e7575c05.png",
    "/lovable-uploads/1d8f59be-c09f-438d-9557-f1ad61eea667.png",
    "/lovable-uploads/86727585-f64e-465e-802e-95da0dcf41b1.png",
    "/lovable-uploads/10b4f684-4d4c-45be-871d-f64daf43e585.png",
    "/lovable-uploads/1041cbf2-981b-437e-a2eb-72dfb54ca3b1.png",
    "/lovable-uploads/a32c8f33-64ff-4729-8b86-ba29f7eb5491.png"
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
                <CardDescription>Department of Chemistry, SVRM College, Nagaram (w.e.f. Academic Year 2023–24)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/20">
                        <th className="text-left py-2 px-3 font-semibold">Semester</th>
                        <th className="text-left py-2 px-3 font-semibold">Course Code</th>
                        <th className="text-left py-2 px-3 font-semibold">Title of the Course</th>
                        <th className="text-center py-2 px-3 font-semibold">Hours/Week</th>
                        <th className="text-center py-2 px-3 font-semibold">Credits</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 px-3 text-center bg-blue-50 font-medium" rowSpan={2}>I</td>
                        <td className="py-2 px-3">1</td>
                        <td className="py-2 px-3">Essentials and Applications of Mathematical, Physical and Chemical Sciences</td>
                        <td className="py-2 px-3 text-center">5</td>
                        <td className="py-2 px-3 text-center">4</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">2</td>
                        <td className="py-2 px-3">Advances in Mathematical, Physical and Chemical Sciences</td>
                        <td className="py-2 px-3 text-center">5</td>
                        <td className="py-2 px-3 text-center">4</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3 text-center bg-green-50 font-medium" rowSpan={4}>II</td>
                        <td className="py-2 px-3">3 (T)</td>
                        <td className="py-2 px-3">General & Inorganic Chemistry (Theory)</td>
                        <td className="py-2 px-3 text-center">3</td>
                        <td className="py-2 px-3 text-center">3</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">3 (P)</td>
                        <td className="py-2 px-3">General & Inorganic Chemistry (Practical)</td>
                        <td className="py-2 px-3 text-center">2</td>
                        <td className="py-2 px-3 text-center">1</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">4 (T)</td>
                        <td className="py-2 px-3">Inorganic Chemistry–I (Theory)</td>
                        <td className="py-2 px-3 text-center">3</td>
                        <td className="py-2 px-3 text-center">3</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">4 (P)</td>
                        <td className="py-2 px-3">Inorganic Chemistry–I (Practical)</td>
                        <td className="py-2 px-3 text-center">2</td>
                        <td className="py-2 px-3 text-center">1</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3 text-center bg-purple-50 font-medium" rowSpan={8}>III</td>
                        <td className="py-2 px-3">5 (T)</td>
                        <td className="py-2 px-3">Fundamentals of Organic Chemistry (Theory)</td>
                        <td className="py-2 px-3 text-center">3</td>
                        <td className="py-2 px-3 text-center">3</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">5 (P)</td>
                        <td className="py-2 px-3">Fundamentals of Organic Chemistry (Practical)</td>
                        <td className="py-2 px-3 text-center">2</td>
                        <td className="py-2 px-3 text-center">1</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">6 (T)</td>
                        <td className="py-2 px-3">Organic Chemistry (Halogen & Oxygen Compounds) – Theory</td>
                        <td className="py-2 px-3 text-center">3</td>
                        <td className="py-2 px-3 text-center">3</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">6 (P)</td>
                        <td className="py-2 px-3">Organic Chemistry (Halogen & Oxygen Compounds) – Practical</td>
                        <td className="py-2 px-3 text-center">2</td>
                        <td className="py-2 px-3 text-center">1</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">7 (T)</td>
                        <td className="py-2 px-3">Physical Chemistry–I (Solutions & Electrochemistry) – Theory</td>
                        <td className="py-2 px-3 text-center">3</td>
                        <td className="py-2 px-3 text-center">3</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">7 (P)</td>
                        <td className="py-2 px-3">Physical Chemistry–I (Solutions & Electrochemistry) – Practical</td>
                        <td className="py-2 px-3 text-center">2</td>
                        <td className="py-2 px-3 text-center">1</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">8 (T)</td>
                        <td className="py-2 px-3">Inorganic & Physical Chemistry (Theory)</td>
                        <td className="py-2 px-3 text-center">3</td>
                        <td className="py-2 px-3 text-center">3</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">8 (P)</td>
                        <td className="py-2 px-3">Inorganic & Physical Chemistry (Practical)</td>
                        <td className="py-2 px-3 text-center">2</td>
                        <td className="py-2 px-3 text-center">1</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3 text-center bg-orange-50 font-medium" rowSpan={6}>IV</td>
                        <td className="py-2 px-3">9 (T)</td>
                        <td className="py-2 px-3">Physical Chemistry–II (States of Matter, Phase Rule & Surface Chemistry) – Theory</td>
                        <td className="py-2 px-3 text-center">3</td>
                        <td className="py-2 px-3 text-center">3</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">9 (P)</td>
                        <td className="py-2 px-3">Physical Chemistry–II (Practical)</td>
                        <td className="py-2 px-3 text-center">2</td>
                        <td className="py-2 px-3 text-center">1</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">10 (T)</td>
                        <td className="py-2 px-3">General & Physical Chemistry (Theory)</td>
                        <td className="py-2 px-3 text-center">3</td>
                        <td className="py-2 px-3 text-center">3</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">10 (P)</td>
                        <td className="py-2 px-3">General & Physical Chemistry (Practical)</td>
                        <td className="py-2 px-3 text-center">2</td>
                        <td className="py-2 px-3 text-center">1</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">11 (T)</td>
                        <td className="py-2 px-3">Nitrogen–Containing Organic Compounds & Spectroscopy – Theory</td>
                        <td className="py-2 px-3 text-center">3</td>
                        <td className="py-2 px-3 text-center">3</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">11 (P)</td>
                        <td className="py-2 px-3">Nitrogen–Containing Organic Compounds & Spectroscopy – Practical</td>
                        <td className="py-2 px-3 text-center">2</td>
                        <td className="py-2 px-3 text-center">1</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3 text-center bg-yellow-50 font-medium" rowSpan={10}>V</td>
                        <td className="py-2 px-3">12A (T)</td>
                        <td className="py-2 px-3">Analytical Methods in Chemistry – Quantitative Analysis (Theory)</td>
                        <td className="py-2 px-3 text-center">3</td>
                        <td className="py-2 px-3 text-center">3</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">12A (P)</td>
                        <td className="py-2 px-3">Analytical Methods in Chemistry – Quantitative Analysis (Practical)</td>
                        <td className="py-2 px-3 text-center">2</td>
                        <td className="py-2 px-3 text-center">1</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">12B (T)</td>
                        <td className="py-2 px-3">Environmental Chemistry (Theory)</td>
                        <td className="py-2 px-3 text-center">3</td>
                        <td className="py-2 px-3 text-center">3</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">12B (P)</td>
                        <td className="py-2 px-3">Environmental Chemistry (Practical)</td>
                        <td className="py-2 px-3 text-center">2</td>
                        <td className="py-2 px-3 text-center">1</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">13A (T)</td>
                        <td className="py-2 px-3">Chromatography & Instrumental Methods of Analysis (Theory)</td>
                        <td className="py-2 px-3 text-center">3</td>
                        <td className="py-2 px-3 text-center">3</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">13A (P)</td>
                        <td className="py-2 px-3">Chromatography & Instrumental Methods of Analysis (Practical)</td>
                        <td className="py-2 px-3 text-center">2</td>
                        <td className="py-2 px-3 text-center">1</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">13B (T)</td>
                        <td className="py-2 px-3">Green Chemistry & Nanotechnology (Theory)</td>
                        <td className="py-2 px-3 text-center">3</td>
                        <td className="py-2 px-3 text-center">3</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">13B (P)</td>
                        <td className="py-2 px-3">Green Chemistry & Nanotechnology (Practical)</td>
                        <td className="py-2 px-3 text-center">2</td>
                        <td className="py-2 px-3 text-center">1</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">14A</td>
                        <td className="py-2 px-3">Synthetic Organic Chemistry</td>
                        <td className="py-2 px-3 text-center">-</td>
                        <td className="py-2 px-3 text-center">-</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">14B</td>
                        <td className="py-2 px-3">Industrial Chemistry – Fertilizers & Surface Coatings</td>
                        <td className="py-2 px-3 text-center">-</td>
                        <td className="py-2 px-3 text-center">-</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">15A</td>
                        <td className="py-2 px-3">Analysis of Organic Compounds</td>
                        <td className="py-2 px-3 text-center">-</td>
                        <td className="py-2 px-3 text-center">-</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3">15B</td>
                        <td className="py-2 px-3">Industrial Chemistry – Polymers & Water Analysis</td>
                        <td className="py-2 px-3 text-center">-</td>
                        <td className="py-2 px-3 text-center">-</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-3 text-center bg-red-50 font-medium">VI</td>
                        <td className="py-2 px-3">-</td>
                        <td className="py-2 px-3">Internship</td>
                        <td className="py-2 px-3 text-center">-</td>
                        <td className="py-2 px-3 text-center">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Course Outcomes */}
            <Card>
              <CardHeader>
                <CardTitle>Course Outcomes (COs) – B.Sc. (Honours) Chemistry – Major</CardTitle>
                <CardDescription>Department of Chemistry, SVRM College, Nagaram (w.e.f. Academic Year 2023–24)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  
                  {/* I Semester */}
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-4 text-blue-800">I – Semester</h4>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                        <h5 className="font-semibold text-blue-700 mb-2">Course Code 1: Essentials and Applications of Mathematical, Physical and Chemical Sciences</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 4</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>CO1:</strong> Apply mathematical tools such as complex numbers, trigonometry, vectors, and statistics to solve scientific problems.</p>
                          <p className="text-sm"><strong>CO2:</strong> Explain fundamental principles of physics and relate them to everyday applications.</p>
                          <p className="text-sm"><strong>CO3:</strong> Describe fundamental concepts of chemistry and connect them to daily life situations.</p>
                          <p className="text-sm"><strong>CO4:</strong> Demonstrate an integrated understanding of mathematics, physics, and chemistry in real-world contexts using scientific models.</p>
                          <p className="text-sm"><strong>CO5:</strong> Gain basic knowledge of internet history, network security, threats, vulnerabilities, and countermeasures.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                        <h5 className="font-semibold text-blue-700 mb-2">Course Code 2: Advances in Mathematical, Physical and Chemical Sciences</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 4</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>CO1:</strong> Apply advanced mathematical concepts in physics and chemistry to model and solve real-world problems.</p>
                          <p className="text-sm"><strong>CO2:</strong> Explain advanced concepts of physics and apply them to everyday situations.</p>
                          <p className="text-sm"><strong>CO3:</strong> Understand renewable energy sources, nanomaterials, quantum dots, quantum communication, and principles of biophysics and shape memory materials.</p>
                          <p className="text-sm"><strong>CO4:</strong> Explain the principles of computer-aided drug design, drug delivery systems, nanosensors, and environmental chemistry including the effects of pollutants.</p>
                          <p className="text-sm"><strong>CO5:</strong> Demonstrate knowledge of number systems, analog and digital signals, and different types of transmission media (wired and wireless).</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* II Semester */}
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-4 text-green-800">II – Semester</h4>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded border-l-4 border-green-500">
                        <h5 className="font-semibold text-green-700 mb-2">Course Code 3: General & Inorganic Chemistry (Theory)</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 3</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>CO1:</strong> Understand atomic structure and classification of elements in the periodic table.</p>
                          <p className="text-sm"><strong>CO2:</strong> Explain the nature and properties of ionic compounds.</p>
                          <p className="text-sm"><strong>CO3:</strong> Identify structures of inorganic compounds.</p>
                          <p className="text-sm"><strong>CO4:</strong> Describe special types of compounds formed by weak chemical forces.</p>
                          <p className="text-sm"><strong>CO5:</strong> Define acids, bases, and predict the nature of salts.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded border-l-4 border-green-500">
                        <h5 className="font-semibold text-green-700 mb-2">Course Code 3: General & Inorganic Chemistry (Practical)</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 1</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>CO1:</strong> Perform qualitative analysis of inorganic salts (minimum six simple salts).</p>
                          <p className="text-sm"><strong>CO2:</strong> Use laboratory glassware, equipment, and follow safety procedures.</p>
                          <p className="text-sm"><strong>CO3:</strong> Apply concepts of solubility product, common ion effect, and qualitative analysis.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded border-l-4 border-green-500">
                        <h5 className="font-semibold text-green-700 mb-2">Course Code 4: Inorganic Chemistry–I (Theory)</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 3</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>CO1:</strong> Explain the chemistry of p-block elements.</p>
                          <p className="text-sm"><strong>CO2:</strong> Understand the chemistry of d-block elements.</p>
                          <p className="text-sm"><strong>CO3:</strong> Distinguish properties of lanthanides and actinides.</p>
                          <p className="text-sm"><strong>CO4:</strong> Describe radioactivity and its importance.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded border-l-4 border-green-500">
                        <h5 className="font-semibold text-green-700 mb-2">Course Code 4: Inorganic Chemistry–I (Practical)</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 1</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>CO1:</strong> Perform inorganic preparations using laboratory techniques.</p>
                          <p className="text-sm"><strong>CO2:</strong> Handle chemicals, glassware, and equipment with safety and accuracy.</p>
                          <p className="text-sm"><strong>CO3:</strong> Apply element properties in preparation of inorganic compounds.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* III Semester */}
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-4 text-purple-800">III – Semester</h4>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                        <h5 className="font-semibold text-purple-700 mb-2">Course Code 5: Fundamentals in Organic Chemistry (Theory)</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 3</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>CO1:</strong> Explain differential behaviour of organic compounds using fundamental concepts.</p>
                          <p className="text-sm"><strong>CO2:</strong> Formulate and interpret mechanisms of organic reactions.</p>
                          <p className="text-sm"><strong>CO3:</strong> Identify and compare different organic reaction mechanisms.</p>
                          <p className="text-sm"><strong>CO4:</strong> Describe stereochemical aspects of organic compounds and reactions.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                        <h5 className="font-semibold text-purple-700 mb-2">Course Code 5: Organic Qualitative Analysis (Practical)</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 1</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>CO1:</strong> Use laboratory equipment, glassware, and chemicals safely in experiments.</p>
                          <p className="text-sm"><strong>CO2:</strong> Determine melting and boiling points of organic compounds.</p>
                          <p className="text-sm"><strong>CO3:</strong> Apply theoretical concepts of organic reactions in qualitative analysis.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                        <h5 className="font-semibold text-purple-700 mb-2">Course Code 6: Organic Chemistry (Halogen & Oxygen Compounds – Theory)</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 3</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>CO1:</strong> Understand SN1, SN2, and SNi mechanisms.</p>
                          <p className="text-sm"><strong>CO2:</strong> Describe reactivity of alcohols and phenols.</p>
                          <p className="text-sm"><strong>CO3:</strong> Develop skills to propose and justify reaction mechanisms.</p>
                          <p className="text-sm"><strong>CO4:</strong> Apply synthetic strategies to prepare oxygen-containing organic compounds.</p>
                          <p className="text-sm"><strong>CO5:</strong> Interconvert monosaccharides.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                        <h5 className="font-semibold text-purple-700 mb-2">Course Code 7: Physical Chemistry–I (Solutions & Electrochemistry – Theory)</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 3</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>CO1:</strong> Explain the behaviour of ideal and non-ideal solutions.</p>
                          <p className="text-sm"><strong>CO2:</strong> Determine molecular mass of non-volatile solutes.</p>
                          <p className="text-sm"><strong>CO3:</strong> Discuss the basic principles of photochemistry.</p>
                          <p className="text-sm"><strong>CO4:</strong> Apply principles of electrical conductivity in solutions.</p>
                          <p className="text-sm"><strong>CO5:</strong> Explain the significance of emf and its applications.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                        <h5 className="font-semibold text-purple-700 mb-2">Course Code 7: Physical Chemistry–I (Practical)</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 1</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>CO1:</strong> Perform solution and electrochemistry experiments using proper laboratory techniques.</p>
                          <p className="text-sm"><strong>CO2:</strong> Apply theoretical concepts of solutions in practical experiments.</p>
                          <p className="text-sm"><strong>CO3:</strong> Conduct electrochemical experiments and interpret results.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                        <h5 className="font-semibold text-purple-700 mb-2">Course Code 8: Inorganic & Physical Chemistry (Theory)</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 3</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>CO1:</strong> Apply IUPAC nomenclature to coordination compounds.</p>
                          <p className="text-sm"><strong>CO2:</strong> Explain theories, structures, and stereochemistry of coordination complexes.</p>
                          <p className="text-sm"><strong>CO3:</strong> Understand reaction mechanisms in metal complexes.</p>
                          <p className="text-sm"><strong>CO4:</strong> Apply the 18-electron rule to organometallic compounds.</p>
                          <p className="text-sm"><strong>CO5:</strong> Discuss the basic concepts of thermodynamics.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* IV Semester */}
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-4 text-orange-800">IV – Semester</h4>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                        <h5 className="font-semibold text-orange-700 mb-2">Course Code 9: Physical Chemistry – II (States of Matter, Phase Rule & Surface Chemistry)</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 3</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>CO1:</strong> Explain the difference between solids, liquids, and gases in terms of intermolecular interactions.</p>
                          <p className="text-sm"><strong>CO2:</strong> Differentiate between ideal and real gases.</p>
                          <p className="text-sm"><strong>CO3:</strong> Discuss the basic concepts of two-component systems.</p>
                          <p className="text-sm"><strong>CO4:</strong> Apply the concepts of adsorption.</p>
                          <p className="text-sm"><strong>CO5:</strong> Understand the basic concepts of crystallography.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                        <h5 className="font-semibold text-orange-700 mb-2">Course Code 9: Organic Preparations</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 1</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>CO1:</strong> Use glassware, equipment, and chemicals and follow experimental procedures in the laboratory.</p>
                          <p className="text-sm"><strong>CO2:</strong> Apply concepts of surface chemistry in experiments.</p>
                          <p className="text-sm"><strong>CO3:</strong> Demonstrate practical applications of surface tension and viscosity of liquids.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                        <h5 className="font-semibold text-orange-700 mb-2">Course Code 10: General and Physical Chemistry</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 3</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>CO1:</strong> Correlate and describe the stereochemical properties of organic compounds.</p>
                          <p className="text-sm"><strong>CO2:</strong> Explain the biological significance of various elements in the human body.</p>
                          <p className="text-sm"><strong>CO3:</strong> Apply the concepts of ionic equilibrium in qualitative and quantitative analysis.</p>
                          <p className="text-sm"><strong>CO4:</strong> Determine the order of a chemical reaction.</p>
                          <p className="text-sm"><strong>CO5:</strong> Describe the basic concepts of enzyme catalysis.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                        <h5 className="font-semibold text-orange-700 mb-2">Course Code 10: Physical Chemistry – Volumetric Analysis</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 1</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>CO1:</strong> Use laboratory glassware, equipment, and chemicals properly.</p>
                          <p className="text-sm"><strong>CO2:</strong> Understand and explain volumetric analysis based on concepts of ionic equilibria.</p>
                          <p className="text-sm"><strong>CO3:</strong> Identify the principles of standard solutions, primary and secondary standards.</p>
                          <p className="text-sm"><strong>CO4:</strong> Prepare solutions of various molar concentrations.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                        <h5 className="font-semibold text-orange-700 mb-2">Course Code 11: Nitrogen Containing Organic Compounds & Spectroscopy</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 3</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>CO1:</strong> Distinguish between primary, secondary, and tertiary amines and their properties.</p>
                          <p className="text-sm"><strong>CO2:</strong> Describe the preparation and properties of amino acids.</p>
                          <p className="text-sm"><strong>CO3:</strong> Explain the reactivity of nitro hydrocarbons.</p>
                          <p className="text-sm"><strong>CO4:</strong> Discuss heterocyclic compounds containing N, O, and S.</p>
                          <p className="text-sm"><strong>CO5:</strong> Apply UV and IR spectroscopy to ascertain functional groups in organic compounds.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                        <h5 className="font-semibold text-orange-700 mb-2">Course Code 11: Organic Preparations and IR Spectral Analysis</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 1</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>CO1:</strong> Use laboratory glassware, equipment, and chemicals and follow safe experimental procedures.</p>
                          <p className="text-sm"><strong>CO2:</strong> Calculate limiting reagent, theoretical yield, and percent yield.</p>
                          <p className="text-sm"><strong>CO3:</strong> Engage in safe laboratory practices by handling reagents appropriately.</p>
                          <p className="text-sm"><strong>CO4:</strong> Dispose of chemicals in a responsible manner.</p>
                          <p className="text-sm"><strong>CO5:</strong> Perform common laboratory techniques such as reflux, distillation, recrystallization, and vacuum filtration.</p>
                          <p className="text-sm"><strong>CO6:</strong> Carry out work-up and separation procedures.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* V Semester */}
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-4 text-yellow-800">V – Semester</h4>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                        <h5 className="font-semibold text-yellow-700 mb-2">Course Code 12A: Analytical Methods in Chemistry – Quantitative Analysis (SEC Elective)</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 3</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>LO1:</strong> Explain the importance of solvent extraction and ion-exchange methods.</p>
                          <p className="text-sm"><strong>LO2:</strong> Understand the basic principles of volumetric and gravimetric analysis.</p>
                          <p className="text-sm"><strong>LO3:</strong> Demonstrate the usage of common laboratory apparatus in quantitative analysis.</p>
                          <p className="text-sm"><strong>LO4:</strong> Understand the theories of different titration methods.</p>
                          <p className="text-sm"><strong>LO5:</strong> Gain knowledge of different types of errors and methods of minimization.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                        <h5 className="font-semibold text-yellow-700 mb-2">Course Code 12A: Analytical Methods in Chemistry – Quantitative Analysis (Practical)</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 1</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>LO1:</strong> Estimate Fe(II) using standard potassium dichromate solution.</p>
                          <p className="text-sm"><strong>LO2:</strong> Estimate total hardness of water.</p>
                          <p className="text-sm"><strong>LO3:</strong> Determine chloride using Mohr's method.</p>
                          <p className="text-sm"><strong>LO4:</strong> Operate and calibrate a pH meter.</p>
                          <p className="text-sm"><strong>LO5:</strong> Perform strong acid vs. strong base titrations using a pH meter.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                        <h5 className="font-semibold text-yellow-700 mb-2">Course Code 14A: Synthetic Organic Chemistry</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 3</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>LO1:</strong> Identify the importance of reagents in organic synthesis.</p>
                          <p className="text-sm"><strong>LO2:</strong> Understand the principles of different types of pericyclic reactions.</p>
                          <p className="text-sm"><strong>LO3:</strong> Apply retrosynthetic analysis in organic chemistry.</p>
                          <p className="text-sm"><strong>LO4:</strong> Comprehend the applications of different reactions in synthetic organic chemistry.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                        <h5 className="font-semibold text-yellow-700 mb-2">Course Code 14A: Synthetic Organic Chemistry (Practical)</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 1</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>LO1:</strong> Perform qualitative analysis for N, S, and halogens using eco-friendly methods.</p>
                          <p className="text-sm"><strong>LO2:</strong> Separate amino acids using paper chromatography.</p>
                          <p className="text-sm"><strong>LO3:</strong> Prepare TLC plates for thin-layer chromatography.</p>
                          <p className="text-sm"><strong>LO4:</strong> Conduct column chromatography for separation of dyes in mixtures.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                        <h5 className="font-semibold text-yellow-700 mb-2">Course Code 15B: Industrial Chemistry – Polymers and Water Analysis</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 3</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>LO1:</strong> Understand the basic concepts of polymers.</p>
                          <p className="text-sm"><strong>LO2:</strong> Explain the preparation and applications of organic polymers.</p>
                          <p className="text-sm"><strong>LO3:</strong> Understand sources of air pollution.</p>
                          <p className="text-sm"><strong>LO4:</strong> Demonstrate analysis of water quality parameters.</p>
                          <p className="text-sm"><strong>LO5:</strong> Identify the importance of industrial waste management.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                        <h5 className="font-semibold text-yellow-700 mb-2">Course Code 15B: Industrial Chemistry – Polymers and Water Analysis (Practical)</h5>
                        <p className="text-sm text-gray-600 mb-2">Credits: 1</p>
                        <div className="space-y-1">
                          <p className="text-sm"><strong>LO1:</strong> Determine BOD and COD of water samples.</p>
                          <p className="text-sm"><strong>LO2:</strong> Estimate chloride in water samples.</p>
                          <p className="text-sm"><strong>LO3:</strong> Determine hardness of water.</p>
                          <p className="text-sm"><strong>LO4:</strong> Analyze soil samples.</p>
                          <p className="text-sm"><strong>LO5:</strong> Operate a pH meter effectively.</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                    {chemistryStaff
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
                      .map((staffMember) => (
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
                      <Badge variant="secondary">36 Seats</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                      <span>M.Sc. Analytical Chemistry</span>
                      <Badge variant="secondary">36 Seats</Badge>
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

            {/* Laboratory Instruments Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TestTube className="h-6 w-6 text-college-blue" />
                  Laboratory Instruments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <img 
                      src="/lovable-uploads/7bd9e4a8-c3db-4aee-ade8-9ff8a403f294.png" 
                      alt="Digital Conductometer" 
                      className="w-full h-32 object-contain mb-3"
                    />
                    <h4 className="font-semibold text-blue-800">Digital Conductometer</h4>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <img 
                      src="/lovable-uploads/0aaca3dd-4095-4efe-90d7-da3f891f4d43.png" 
                      alt="Digital pH Meter" 
                      className="w-full h-32 object-contain mb-3"
                    />
                    <h4 className="font-semibold text-green-800">Digital pH Meter</h4>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <img 
                      src="/lovable-uploads/46bd4e24-be08-469d-a3df-d91da897348c.png" 
                      alt="Digital Photo Colorimeter" 
                      className="w-full h-32 object-contain mb-3"
                    />
                    <h4 className="font-semibold text-purple-800">Digital Photo Colorimeter</h4>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <img 
                      src="/lovable-uploads/e6869eea-1f1d-4110-a8e9-c873d813243b.png" 
                      alt="Melting Point Apparatus" 
                      className="w-full h-32 object-contain mb-3"
                    />
                    <h4 className="font-semibold text-orange-800">Melting Point Apparatus</h4>
                  </div>
                  <div className="text-center p-4 bg-teal-50 rounded-lg">
                    <img 
                      src="/lovable-uploads/f3aea75b-6a6b-451b-85cb-e8b6bc6e3f8b.png" 
                      alt="Electronic Balance" 
                      className="w-full h-32 object-contain mb-3"
                    />
                    <h4 className="font-semibold text-teal-800">Electronic Balance</h4>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Departmental Activities Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-college-blue" />
                  Departmental Activities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Student Achievements */}
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-4 text-green-800 flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    STUDENT ACHIEVEMENTS
                  </h4>
                  <div className="space-y-4">
                    <p className="text-green-700">
                      • All the students who completed M.Sc here have settled in pharmaceutical industries and colleges.
                    </p>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                      <img 
                        src="/lovable-uploads/1d8f59be-c09f-438d-9557-f1ad61eea667.png" 
                        alt="Gold Medal Achievement" 
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div>
                        <p className="text-green-700 font-medium">
                          Ms. T. Deepika, M.Sc (Analytical Chemistry) has secured GOLD MEDAL for getting highest marks from Acharya Nagarjuna University in the year 2012–13.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Career Opportunities */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-4 text-blue-800 flex items-center gap-2">
                    <ExternalLink className="h-5 w-5" />
                    CAREER OPPORTUNITIES
                  </h4>
                  <div className="flex items-center gap-4">
                    <img 
                      src="/lovable-uploads/86727585-f64e-465e-802e-95da0dcf41b1.png" 
                      alt="Career Opportunities Chart" 
                      className="w-full max-w-md object-contain"
                    />
                  </div>
                </div>

                {/* Industrial Visits */}
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-4 text-purple-800">INDUSTRIAL VISITS</h4>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                      <img 
                        src="/lovable-uploads/10b4f684-4d4c-45be-871d-f64daf43e585.png" 
                        alt="Jeypore Sugar Company Visit" 
                        className="w-24 h-16 object-cover rounded"
                      />
                      <div>
                        <h5 className="font-medium text-purple-800">Industrial Visit to Jeypore Sugar Company Ltd</h5>
                        <p className="text-purple-700 text-sm">Chagallu, West Godavari (Dt), AP (2009)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                      <img 
                        src="/lovable-uploads/1041cbf2-981b-437e-a2eb-72dfb54ca3b1.png" 
                        alt="Rajahmundry Paper Mills Visit" 
                        className="w-24 h-16 object-cover rounded"
                      />
                      <div>
                        <h5 className="font-medium text-purple-800">Industrial visit to Rajahmundry Paper Mills (P) Ltd</h5>
                        <p className="text-purple-700 text-sm">East Godavari (Dt), A.P (2010)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                      <img 
                        src="/lovable-uploads/a32c8f33-64ff-4729-8b86-ba29f7eb5491.png" 
                        alt="R.V Labs Visit" 
                        className="w-24 h-16 object-cover rounded"
                      />
                      <div>
                        <h5 className="font-medium text-purple-800">R.V LABS VISIT AND COMPLETED STUDY PROJECT WORK</h5>
                        <p className="text-purple-700 text-sm">20th March - 27th March - 2023</p>
                      </div>
                    </div>
                  </div>
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
                    {pgChemistryStaff
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
                      .map((staffMember) => (
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