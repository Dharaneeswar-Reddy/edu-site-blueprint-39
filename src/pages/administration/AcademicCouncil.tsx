import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen, Calendar, FileText } from "lucide-react";

const AcademicCouncil = () => {
  const members = [
    {
      name: "Dr. K. Srinivas",
      designation: "Chairman (Principal)",
      department: "Administration",
      image: "/placeholder.svg",
      role: "Chairperson"
    },
    {
      name: "Dr. Meera Patel", 
      designation: "Vice Principal",
      department: "Academic Affairs",
      image: "/placeholder.svg",
      role: "Vice Chairperson"
    },
    {
      name: "Dr. Rajesh Kumar",
      designation: "HOD Physics",
      department: "Physics",
      image: "/placeholder.svg",
      role: "Member"
    },
    {
      name: "Dr. Srinivas Reddy",
      designation: "HOD Computer Science", 
      department: "Computer Science",
      image: "/placeholder.svg",
      role: "Member"
    },
    {
      name: "Dr. Lakshmi Devi",
      designation: "HOD Mathematics",
      department: "Mathematics",
      image: "/placeholder.svg",
      role: "Member"
    },
    {
      name: "Dr. Priya Sharma",
      designation: "HOD Botany",
      department: "Botany",
      image: "/placeholder.svg",
      role: "Member"
    },
    {
      name: "Prof. Suresh Kumar",
      designation: "Senior Faculty",
      department: "English",
      image: "/placeholder.svg",
      role: "Member"
    },
    {
      name: "Mr. Vikram Singh",
      designation: "HOD Commerce",
      department: "Commerce", 
      image: "/placeholder.svg",
      role: "Member"
    }
  ];

  const recentDecisions = [
    {
      date: "April 10, 2024",
      topic: "Curriculum Update for 2024-25",
      decisions: [
        "Approved revised syllabus for Computer Science",
        "Introduction of Data Science electives", 
        "Enhanced practical component in Physics"
      ]
    },
    {
      date: "February 15, 2024",
      topic: "Examination Reforms",
      decisions: [
        "Implementation of continuous assessment",
        "Online examination system pilot",
        "Revised grading scheme approval"
      ]
    },
    {
      date: "January 8, 2024",
      topic: "Faculty Development and Research",
      decisions: [
        "Research promotion policy approved",
        "Faculty exchange program initiated",
        "Conference participation fund allocation"
      ]
    }
  ];

  return (
    <PageLayout 
      title="Academic Council" 
      description="The principal academic body responsible for curriculum development, academic standards, and educational policies."
    >
      <div className="space-y-8">
        
        {/* Overview */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <h3 className="text-2xl font-bold text-college-blue">15</h3>
                <p className="text-gray-600">Council Members</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-college-blue">6</h3>
                <p className="text-gray-600">Meetings/Year</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-college-blue">25</h3>
                <p className="text-gray-600">Decisions This Year</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-college-blue">100%</h3>
                <p className="text-gray-600">Implementation Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Council Composition */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-6 w-6 text-college-blue mr-2" />
              Academic Council Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {members.map((member, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-14 w-14">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold">{member.name}</h4>
                      <p className="text-sm text-gray-600">{member.designation}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline">{member.department}</Badge>
                        <Badge variant="secondary">{member.role}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Functions and Responsibilities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <GraduationCap className="h-6 w-6 text-college-blue mr-2" />
              Functions and Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Academic Planning</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Curriculum design and revision</li>
                  <li>• Academic calendar preparation</li>
                  <li>• Course structure and syllabus approval</li>
                  <li>• Academic standards and quality assurance</li>
                  <li>• Program outcome definition</li>
                  <li>• Credit system implementation</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Faculty and Teaching</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Faculty recruitment guidelines</li>
                  <li>• Teaching methodology recommendations</li>
                  <li>• Professional development policies</li>
                  <li>• Research promotion strategies</li>
                  <li>• Faculty performance evaluation</li>
                  <li>• Guest faculty appointment</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Student Affairs</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Admission criteria and procedures</li>
                  <li>• Student assessment methods</li>
                  <li>• Academic support services</li>
                  <li>• Student grievance policies</li>
                  <li>• Scholarship and awards criteria</li>
                  <li>• Student discipline guidelines</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Quality Enhancement</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Accreditation preparation</li>
                  <li>• Quality improvement initiatives</li>
                  <li>• Best practices implementation</li>
                  <li>• Industry collaboration</li>
                  <li>• Innovation in education</li>
                  <li>• Technology integration</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Meetings and Decisions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-6 w-6 text-college-blue mr-2" />
              Recent Decisions and Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentDecisions.map((meeting, index) => (
                <div key={index} className="border-l-4 border-college-blue pl-6 py-4 bg-gray-50 rounded">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-lg">{meeting.topic}</h4>
                    <Badge variant="outline">{meeting.date}</Badge>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-2">Key Decisions:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {meeting.decisions.map((decision, idx) => (
                        <li key={idx}>• {decision}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Academic Policies */}
        <Card>
          <CardHeader>
            <CardTitle>Key Academic Policies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-blue-700">Assessment Policy</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Continuous evaluation system</li>
                  <li>• Multiple assessment methods</li>
                  <li>• Grade point average calculation</li>
                  <li>• Remedial examination provision</li>
                  <li>• Academic progression criteria</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-700">Research Policy</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Faculty research promotion</li>
                  <li>• Student research projects</li>
                  <li>• Publication incentives</li>
                  <li>• Research ethics guidelines</li>
                  <li>• Collaboration encouragement</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-700">Quality Assurance</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Regular curriculum review</li>
                  <li>• Feedback system implementation</li>
                  <li>• Best practices adoption</li>
                  <li>• NAAC guidelines compliance</li>
                  <li>• Continuous improvement</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Board of Studies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-6 w-6 text-college-blue mr-2" />
              Board of Studies (Department-wise)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-4">Science Departments</h4>
                <div className="space-y-3">
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium">Physics Board of Studies</h5>
                    <p className="text-sm text-gray-600">Chairman: Dr. Rajesh Kumar</p>
                    <p className="text-sm text-gray-600">Members: 5 faculty + 2 external experts</p>
                  </div>
                  
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium">Chemistry Board of Studies</h5>
                    <p className="text-sm text-gray-600">Chairman: Dr. Meera Patel</p>
                    <p className="text-sm text-gray-600">Members: 4 faculty + 2 external experts</p>
                  </div>
                  
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium">Computer Science Board</h5>
                    <p className="text-sm text-gray-600">Chairman: Dr. Srinivas Reddy</p>
                    <p className="text-sm text-gray-600">Members: 6 faculty + 3 industry experts</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Other Departments</h4>
                <div className="space-y-3">
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium">Mathematics Board</h5>
                    <p className="text-sm text-gray-600">Chairman: Dr. Lakshmi Devi</p>
                    <p className="text-sm text-gray-600">Members: 4 faculty + 2 external experts</p>
                  </div>
                  
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium">Commerce Board</h5>
                    <p className="text-sm text-gray-600">Chairman: Mr. Vikram Singh</p>
                    <p className="text-sm text-gray-600">Members: 3 faculty + 2 industry experts</p>
                  </div>
                  
                  <div className="border rounded-lg p-3">
                    <h5 className="font-medium">Humanities Board</h5>
                    <p className="text-sm text-gray-600">Chairman: Prof. Suresh Kumar</p>
                    <p className="text-sm text-gray-600">Members: 5 faculty + 2 external experts</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Meeting Schedule and Documents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Meeting Schedule 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                  <span>Academic Planning Meeting</span>
                  <Badge>June 20, 2024</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span>Curriculum Review</span>
                  <Badge>August 15, 2024</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                  <span>Quality Assessment</span>
                  <Badge>October 10, 2024</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                  <span>Annual Review</span>
                  <Badge>December 5, 2024</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-6 w-6 text-college-blue mr-2" />
                Documents & Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Academic Council Constitution
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Meeting Minutes 2024
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Academic Policies Document
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Annual Academic Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Academic Council</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Academic Council Secretariat</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Dr. Meera Patel, Vice Principal</p>
                  <p>Email: academic.council@svrmc.edu.in</p>
                  <p>Phone: +91-863-2345695</p>
                  <p>Office: Academic Block, 2nd Floor</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Office Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Monday to Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Meeting Days: As per schedule</p>
                  <p>Emergency: Principal's Office</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default AcademicCouncil;