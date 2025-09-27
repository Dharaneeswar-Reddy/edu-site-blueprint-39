import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Award, Scale, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import DepartmentStaff from "@/components/DepartmentStaff";
import useDepartmentTimetables from "@/hooks/useDepartmentTimetables";
const PoliticalScience = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const {
    timetables,
    loading: timetablesLoading
  } = useDepartmentTimetables("Political Science");
  const heroImages = ["/lovable-uploads/2b10ef1d-4773-4ca9-b45c-4db28077fd0e.png", "/lovable-uploads/38c6f30f-e6ed-4a07-98b7-07b2df3b2f25.png", "/lovable-uploads/53ed32c7-c5aa-4a5d-91ba-d36b7fde27a1.png", "/lovable-uploads/8efaad64-c801-48e1-b4d7-c7e36d250038.png"];
  const departmentPhotos = ["/lovable-uploads/2b10ef1d-4773-4ca9-b45c-4db28077fd0e.png", "/lovable-uploads/38c6f30f-e6ed-4a07-98b7-07b2df3b2f25.png", "/lovable-uploads/53ed32c7-c5aa-4a5d-91ba-d36b7fde27a1.png", "/lovable-uploads/8efaad64-c801-48e1-b4d7-c7e36d250038.png"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  return <PageLayout title="Department of Political Science" description="Exploring human civilization, cultural heritage, and historical processes through comprehensive historical education">
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
          {heroImages.map((image, index) => <img key={index} src={image} alt={`Political Science Department ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} />)}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              
              <p className="text-xl md:text-2xl">Governance, Democracy & Public Policy</p>
            </div>
          </div>
        </div>

        {/* Department Introduction */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-6 w-6 text-college-blue" />
              Department of Political Science
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The Department of Political Science at SVRMC, Nagaram, plays a vital role in shaping students into socially responsible, politically aware, and analytically sharp individuals. Political Science is not just the study of governments and institutions — it is a discipline that explores the functioning of power, the nature of justice, the importance of civic participation, and the impact of political decisions on societies.
            </p>
            <p>
              At SVRMC, the Political Science curriculum is designed to provide a strong foundation in political theory, comparative politics, international relations, public administration, and Indian government and politics. Our goal is to encourage critical thinking, informed debate, and a deeper understanding of contemporary political issues — both national and global.
            </p>
          </CardContent>
        </Card>

        {/* Department Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-6 w-6 text-college-blue" />
              Department Overview - Political Science
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The Department of Political Science is dedicated to the study of power, governance, and public affairs both in theory and practice. Our curriculum explores political ideas, institutions, behavior, and policies at the local, national, and international levels. Through rigorous coursework and experiential learning, students gain the analytical, research, and communication skills necessary to understand and engage with today's most pressing political and social challenges.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="h-8 w-8 text-college-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-college-blue">60</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">2</div>
                <div className="text-sm text-gray-600">Faculty Members</div>
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
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Undergraduate Programs</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span>B.A. Political Science (Regular)</span>
                    <Badge variant="secondary">60 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>B.A. Political Science (Honours)</span>
                    <Badge variant="secondary">60 Seats</Badge>
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
                <h4 className="font-semibold mb-4">B.A. Political Science (Honours)</h4>
                
                {/* Semester-wise Structure Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Semester</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Papers</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">I</td>
                        <td className="border border-gray-300 px-4 py-3">
                          <div className="space-y-1">
                            <div>1. Fundamentals of Social Sciences</div>
                            <div>2. Perspectives on Indian Society</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">II</td>
                        <td className="border border-gray-300 px-4 py-3">
                          <div className="space-y-1">
                            <div>3. Fundamentals of Political Science</div>
                            <div>4. Concepts & Ideologies of Political Science</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">III</td>
                        <td className="border border-gray-300 px-4 py-3">
                          <div className="space-y-1">
                            <div>5. Political Institutions</div>
                            <div>6. Indian Constitution</div>
                            <div>7. Western Political Thought: Ancient & Medieval</div>
                            <div>8. Indian Federal System</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">IV</td>
                        <td className="border border-gray-300 px-4 py-3">
                          <div className="space-y-1">
                            <div>9. Indian Government</div>
                            <div>10. Dynamics of Indian Political System</div>
                            <div>11. Indian Political Thought</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">V</td>
                        <td className="border border-gray-300 px-4 py-3">
                          <div className="space-y-1">
                            <div>12. E-Governance</div>
                            <div>13. Local Administration</div>
                            <div>14. Legal Literacy – Rights Awareness</div>
                            <div>15. Electoral Politics & Voting Behaviour</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">VI</td>
                        <td className="border border-gray-300 px-4 py-3">
                          <div>Internship</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                <li>• Understand political institutions and processes</li>
                <li>• Analyze government policies and decisions</li>
                <li>• Evaluate democratic theories and practices</li>
                <li>• Apply research methods in political studies</li>
                <li>• Develop civic awareness and engagement</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Program Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Critical analysis of political phenomena</li>
                <li>• Policy analysis and evaluation skills</li>
                <li>• Democratic participation and leadership</li>
                <li>• Public service career readiness</li>
                <li>• Global perspective on politics</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Department Staff */}
        <DepartmentStaff departmentName="Political Science" />

        {/* Department Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>Department Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {departmentPhotos.map((photo, index) => <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img src={photo} alt={`Political Science Activity ${index + 1}`} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
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
            {timetablesLoading ? <div className="flex items-center justify-center py-8">
                <div className="text-gray-500">Loading timetables...</div>
              </div> : timetables.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {timetables.map(timetable => <div key={timetable.id} className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">{timetable.title}</h4>
                    {timetable.description && <p className="text-sm text-gray-600 mb-3">{timetable.description}</p>}
                    <div className="flex gap-2 text-xs text-gray-500 mb-3">
                      {timetable.academic_year && <span>AY: {timetable.academic_year}</span>}
                      {timetable.semester && <span>Sem: {timetable.semester}</span>}
                    </div>
                    <Button variant="outline" size="sm" onClick={() => window.open(timetable.file_url, '_blank')} className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Schedule
                    </Button>
                  </div>)}
              </div> : <div className="text-center py-8 text-gray-500">
                No timetables available at the moment.
              </div>}
          </CardContent>
        </Card>

      </div>
    </PageLayout>;
};
export default PoliticalScience;