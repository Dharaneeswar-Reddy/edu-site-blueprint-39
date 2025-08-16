import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Calendar } from "lucide-react";

const ProgramStructure = () => {
  const programs = [
    {
      level: "Undergraduate",
      programs: [
        { name: "B.Sc. Physics", duration: "3 Years", credits: "120", mode: "Regular" },
        { name: "B.Sc. Chemistry", duration: "3 Years", credits: "120", mode: "Regular" },
        { name: "B.Sc. Computer Science", duration: "3 Years", credits: "120", mode: "Regular" },
        { name: "B.Sc. Mathematics", duration: "3 Years", credits: "120", mode: "Regular" },
        { name: "B.Com", duration: "3 Years", credits: "120", mode: "Regular" },
        { name: "B.A. English", duration: "3 Years", credits: "120", mode: "Regular" }
      ]
    },
    {
      level: "Postgraduate", 
      programs: [
        { name: "M.Sc. Physics", duration: "2 Years", credits: "80", mode: "Regular" },
        { name: "M.Sc. Chemistry", duration: "2 Years", credits: "80", mode: "Regular" },
        { name: "M.Sc. Computer Science", duration: "2 Years", credits: "80", mode: "Regular" },
        { name: "M.Com", duration: "2 Years", credits: "80", mode: "Regular" }
      ]
    }
  ];

  return (
    <PageLayout 
      title="Program Structure" 
      description="Comprehensive overview of academic programs offered at SVRMC with their structure and requirements."
    >
      <div className="space-y-8">
        
        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <BookOpen className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">10</h3>
              <p className="text-gray-600">Academic Programs</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">1,500+</h3>
              <p className="text-gray-600">Total Students</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">CBCS</h3>
              <p className="text-gray-600">Credit System</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Calendar className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">Semester</h3>
              <p className="text-gray-600">Pattern</p>
            </CardContent>
          </Card>
        </div>

        {/* Program Structure by Level */}
        {programs.map((level, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{level.level} Programs</span>
                <Badge variant="secondary">{level.programs.length} Programs</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Program Name</th>
                      <th className="text-left p-3 font-semibold">Duration</th>
                      <th className="text-left p-3 font-semibold">Total Credits</th>
                      <th className="text-left p-3 font-semibold">Mode</th>
                      <th className="text-left p-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {level.programs.map((program, idx) => (
                      <tr key={idx} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{program.name}</td>
                        <td className="p-3">{program.duration}</td>
                        <td className="p-3">{program.credits}</td>
                        <td className="p-3">{program.mode}</td>
                        <td className="p-3">
                          <Badge variant="outline">Active</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Credit System */}
        <Card>
          <CardHeader>
            <CardTitle>Choice Based Credit System (CBCS)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Credit Distribution</h4>
                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-blue-50 rounded">
                    <span>Core Courses</span>
                    <Badge>60-70%</Badge>
                  </div>
                  <div className="flex justify-between p-3 bg-green-50 rounded">
                    <span>Elective Courses</span>
                    <Badge>20-25%</Badge>
                  </div>
                  <div className="flex justify-between p-3 bg-purple-50 rounded">
                    <span>Skill Enhancement</span>
                    <Badge>10-15%</Badge>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Grading System</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>O (Outstanding)</span>
                    <span>10 Grade Points</span>
                  </div>
                  <div className="flex justify-between">
                    <span>A+ (Excellent)</span>
                    <span>9 Grade Points</span>
                  </div>
                  <div className="flex justify-between">
                    <span>A (Very Good)</span>
                    <span>8 Grade Points</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B+ (Good)</span>
                    <span>7 Grade Points</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B (Above Average)</span>
                    <span>6 Grade Points</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Semester Pattern */}
        <Card>
          <CardHeader>
            <CardTitle>Semester Pattern</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-blue-700">Undergraduate (3 Years)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Semester I & II - Foundation</li>
                  <li>• Semester III & IV - Core Development</li>
                  <li>• Semester V & VI - Specialization</li>
                  <li>• Total: 6 Semesters</li>
                  <li>• Credits: 120 (20 per semester)</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-700">Postgraduate (2 Years)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Semester I & II - Advanced Core</li>
                  <li>• Semester III & IV - Research & Project</li>
                  <li>• Total: 4 Semesters</li>
                  <li>• Credits: 80 (20 per semester)</li>
                  <li>• Dissertation mandatory</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-700">Assessment Pattern</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Continuous Assessment: 25%</li>
                  <li>• Mid-Semester Exam: 25%</li>
                  <li>• End-Semester Exam: 50%</li>
                  <li>• Practical/Project: Variable</li>
                  <li>• Minimum Pass: 40%</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Course Categories */}
        <Card>
          <CardHeader>
            <CardTitle>Course Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-semibold text-blue-700 mb-2">Core Courses (CC)</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Mandatory courses that must be studied by all students in a discipline.
                </p>
                <ul className="text-sm text-gray-600">
                  <li>• Subject-specific fundamental courses</li>
                  <li>• Essential for degree completion</li>
                  <li>• Credits: 14 courses × 4-6 credits each</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="font-semibold text-green-700 mb-2">Elective Courses</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Discipline Specific Electives (DSE) and Generic Electives (GE).
                </p>
                <ul className="text-sm text-gray-600">
                  <li>• DSE: Advanced courses in main subject</li>
                  <li>• GE: Courses from other disciplines</li>
                  <li>• Credits: 6 courses × 4-6 credits each</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="font-semibold text-purple-700 mb-2">Skill Enhancement Courses (SEC)</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Value-based and skill-based courses for holistic development.
                </p>
                <ul className="text-sm text-gray-600">
                  <li>• Employability enhancement courses</li>
                  <li>• Life skills and value education</li>
                  <li>• Credits: 4 courses × 2 credits each</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default ProgramStructure;