import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, BookOpen, Award, Download, DollarSign, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import DepartmentStaff from "@/components/DepartmentStaff";
import { useDepartmentTimetables } from "@/hooks/useDepartmentTimetables";

const Commerce = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { timetables, loading: timetablesLoading } = useDepartmentTimetables("Commerce");

  const heroImages = [
    "/lovable-uploads/f1fbe1fc-e5a7-4e49-a84e-da74bd880e81.png",
    "/lovable-uploads/1712e8ba-103d-4e8d-8fcf-f3a58c895690.png",
    "/lovable-uploads/69e9c1ff-a167-42d9-bc00-f4d58476b4a7.png",
    "/lovable-uploads/64f74774-7508-4589-8d6f-ee0b9dbf6ec3.png",
    "/lovable-uploads/2058512e-9124-4ec3-b6a8-d89044b40731.png"
  ];

  const departmentPhotos = [
    "/lovable-uploads/f1fbe1fc-e5a7-4e49-a84e-da74bd880e81.png",
    "/lovable-uploads/1712e8ba-103d-4e8d-8fcf-f3a58c895690.png",
    "/lovable-uploads/69e9c1ff-a167-42d9-bc00-f4d58476b4a7.png",
    "/lovable-uploads/64f74774-7508-4589-8d6f-ee0b9dbf6ec3.png",
    "/lovable-uploads/2058512e-9124-4ec3-b6a8-d89044b40731.png"
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
      title="Department of Commerce" 
      description="Commerce is the study of buying, selling, and trading of goods and services, and everything that makes that possible — from economics to finance, business, accounting, and laws."
    >
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Commerce Department ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Commerce Department</h1>
              <p className="text-xl md:text-2xl">Building Business Acumen</p>
            </div>
          </div>
        </div>

        {/* Department Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Department Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div className="p-6 bg-blue-50 rounded-lg">
                <Users className="h-12 w-12 text-college-blue mx-auto mb-3" />
                <div className="text-4xl font-bold text-college-blue">54</div>
                <div className="text-lg text-gray-600">Students</div>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <div className="text-4xl font-bold text-green-600">2</div>
                <div className="text-lg text-gray-600">Faculty Members</div>
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
              <h4 className="font-semibold mb-3">Undergraduate Programs</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium">B.Com General (Honours)</span>
                  <Badge variant="secondary">60 Seats</Badge>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-medium">B.Com Computers (Honours)</span>
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
            <div className="space-y-8">
              {/* B.Com General Program Structure */}
              <div>
                <h4 className="font-semibold mb-4 text-lg text-college-blue">B.Com General (3 Years) - Semester wise Syllabus</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">Semester</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Course Number</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Course Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-gray-300 px-4 py-2 font-medium" rowSpan={2}>Semester-I</td><td className="border border-gray-300 px-4 py-2">1</td><td className="border border-gray-300 px-4 py-2">Fundamental of Commerce</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">2</td><td className="border border-gray-300 px-4 py-2">Business Organisation</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2 font-medium" rowSpan={3}>Semester-II</td><td className="border border-gray-300 px-4 py-2">3</td><td className="border border-gray-300 px-4 py-2">Financial Accounting</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">4</td><td className="border border-gray-300 px-4 py-2">Business Management</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">5</td><td className="border border-gray-300 px-4 py-2">Advanced Accounting</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2 font-medium" rowSpan={3}>Semester-III</td><td className="border border-gray-300 px-4 py-2">6</td><td className="border border-gray-300 px-4 py-2">Income Tax</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">7</td><td className="border border-gray-300 px-4 py-2">Business Laws</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">8</td><td className="border border-gray-300 px-4 py-2">Banking Theory & Practice</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2 font-medium" rowSpan={3}>Semester-IV</td><td className="border border-gray-300 px-4 py-2">9</td><td className="border border-gray-300 px-4 py-2">Corporate Accounting</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">10</td><td className="border border-gray-300 px-4 py-2">Cost & Management Accounting</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">11</td><td className="border border-gray-300 px-4 py-2">Auditing</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2 font-medium" rowSpan={3}>Semester-V</td><td className="border border-gray-300 px-4 py-2">12</td><td className="border border-gray-300 px-4 py-2">Advertising and Media Planning (OR) Stock Markets Customer Relationship Management (OR) Stock Markets Analysis</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">13</td><td className="border border-gray-300 px-4 py-2">Digital Marketing (OR) Advanced Corporate Accounting</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">14</td><td className="border border-gray-300 px-4 py-2">Service Marketing (OR) Software Solutions to Accounting</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2 font-medium">Semester-VI</td><td className="border border-gray-300 px-4 py-2">15</td><td className="border border-gray-300 px-4 py-2">Internship</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* B.Com Computers Program Structure */}
              <div>
                <h4 className="font-semibold mb-4 text-lg text-college-blue">B.Com Computers (3 Years) - Program Structure</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Semester</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Course</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Title of the Course</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-gray-300 px-4 py-2 font-medium" rowSpan={6}>I</td><td className="border border-gray-300 px-4 py-2" rowSpan={3}>I</td><td className="border border-gray-300 px-4 py-2">1</td><td className="border border-gray-300 px-4 py-2">Fundamental of Commerce</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">2</td><td className="border border-gray-300 px-4 py-2">Business Organisation</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">3</td><td className="border border-gray-300 px-4 py-2">Financial Accounting & Financial Accounting Practical Course</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2" rowSpan={3}>II</td><td className="border border-gray-300 px-4 py-2">4</td><td className="border border-gray-300 px-4 py-2">Office Automation Tools & Office Automation Tools Practical Course</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">5</td><td className="border border-gray-300 px-4 py-2">Advanced Accounting & Advanced Accounting Practical Course</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">6</td><td className="border border-gray-300 px-4 py-2">Income Tax & Income Tax Practical Course</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2 font-medium" rowSpan={5}>II</td><td className="border border-gray-300 px-4 py-2" rowSpan={2}>III</td><td className="border border-gray-300 px-4 py-2">7</td><td className="border border-gray-300 px-4 py-2">E Commerce & Web designing & E Commerce & Web designing Practical Course</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">8</td><td className="border border-gray-300 px-4 py-2">Digital Marketing & Digital Marketing Practical Course</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2" rowSpan={3}>IV</td><td className="border border-gray-300 px-4 py-2">9</td><td className="border border-gray-300 px-4 py-2">Corporate Accounting & Corporate Accounting Practical Course</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">10</td><td className="border border-gray-300 px-4 py-2">Cost & Management Accounting & Cost & Management Accounting Practical Course</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">11</td><td className="border border-gray-300 px-4 py-2">DBMS with Oracle & DBMS with Oracle Practical Course</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2 font-medium" rowSpan={4}>III</td><td className="border border-gray-300 px-4 py-2">V</td><td className="border border-gray-300 px-4 py-2">12</td><td className="border border-gray-300 px-4 py-2">Advertisement Corporate Accounting (OR) Advertisement and Media Planning & Advertisement Corporate Accounting (OR) Advertisement and Media Planning Practical Course</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2" rowSpan={3}>VI</td><td className="border border-gray-300 px-4 py-2">13</td><td className="border border-gray-300 px-4 py-2">Stock Markets (OR) GST Procedures and Practices & Stock Markets (OR) GST Procedures and Practices Practical Course</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">14</td><td className="border border-gray-300 px-4 py-2">Business Analytics (OR) Cyber Security & Business Analytics (OR) Cyber Security Practical Course</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2">15</td><td className="border border-gray-300 px-4 py-2">Mobile Applications Development (OR) Block Chain Technology & Mobile Applications Development (OR) Block Chain Technology Practical Course</td></tr>
                      <tr><td className="border border-gray-300 px-4 py-2 font-medium" colSpan={3}>Semester Internship/Apprenticeship with 12 Credits</td><td className="border border-gray-300 px-4 py-2"></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Department Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-college-blue" />
              Department Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The Department of Commerce was one among the six departments started in 1969 under the umbrella of Sri Velagapudi Rama Krishna Memorial College, Nagaram with the objective of importing commerce education to the under-graduates of backward region. The department had its genesis under the able leadership of Sri N. Koteswara Rao who laid the foundation and developed it with academic reputation.
            </p>
            <p>
              The Department gained the reputation due to concerted efforts of the staff in designing the curriculum, and enriching the students to pursue the other professional courses like CA, ICWA, CFA, and improve their job potentials. The alumni of the department are being placed in higher positions in administration, teaching and research fields of reputed entities. At present the department is offering B.Com and B.Com (Computer Applications) programmes of the campus.
            </p>
          </CardContent>
        </Card>

        {/* Course Outcomes & Program Outcomes */}
        <div className="space-y-6">
          {/* B.Com General Course & Program Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>B.Com General - Course Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Understand core concepts in accounting, business, and economics</li>
                  <li>• Analyze financial statements and apply decision-making tools</li>
                  <li>• Gain knowledge of business laws and economic policies</li>
                  <li>• Develop communication, IT, and professional skills for the workplace</li>
                  <li>• Foster entrepreneurial thinking, ethical values, and career readiness</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>B.Com General - Program Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Apply fundamental knowledge of commerce in real-world business scenarios</li>
                  <li>• Demonstrate analytical and problem-solving skills in finance and management</li>
                  <li>• Understand economic, legal, and ethical aspects of business operations</li>
                  <li>• Use digital tools and communication skills effectively in a business environment</li>
                  <li>• Prepare for entrepreneurship, higher education, and professional careers</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* B.Com Computers Course & Program Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>B.Com Computers - Course Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Understand core concepts of commerce, accounting, and business management</li>
                  <li>• Apply computer applications like MS Office, Tally, and databases in business tasks</li>
                  <li>• Analyze financial data using software tools and generate reports</li>
                  <li>• Gain skills in e-commerce, digital marketing, and IT-enabled services</li>
                  <li>• Prepare for careers in accounting, IT-enabled roles, and entrepreneurship</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>B.Com Computers - Program Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Apply commerce and computer knowledge to solve real business problems</li>
                  <li>• Use accounting and business software tools effectively</li>
                  <li>• Understand the digital aspects of business like e-commerce and data management</li>
                  <li>• Communicate professionally and work effectively in teams</li>
                  <li>• Prepare for careers in finance, IT, and higher professional studies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Department Staff */}
        <DepartmentStaff departmentName="Commerce" />

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
                    alt={`Commerce Classroom ${index + 1}`}
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

export default Commerce;