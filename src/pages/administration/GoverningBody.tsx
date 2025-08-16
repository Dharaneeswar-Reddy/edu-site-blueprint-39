import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Calendar, FileText, Phone, Mail } from "lucide-react";

const GoverningBody = () => {
  const members = [
    {
      name: "Shri. R.K. Sharma",
      designation: "Chairman",
      category: "Management Representative",
      background: "Industrialist, Social Worker",
      experience: "25+ years in Education",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. K. Srinivas", 
      designation: "Principal (Ex-officio)",
      category: "Academic Representative",
      background: "Ph.D. Physics, Educational Administrator",
      experience: "20+ years in Higher Education",
      image: "/placeholder.svg"
    },
    {
      name: "Prof. S.V. Reddy",
      designation: "University Nominee",
      category: "University Representative", 
      background: "Former Vice-Chancellor",
      experience: "30+ years in Academia",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Lakshmi Devi",
      designation: "Faculty Representative",
      category: "Academic Representative",
      background: "Professor of Mathematics",
      experience: "22+ years Teaching",
      image: "/placeholder.svg"
    },
    {
      name: "Shri. Venkat Rao",
      designation: "Management Nominee",
      category: "Management Representative",
      background: "Advocate, Social Activist",
      experience: "18+ years Legal Practice",
      image: "/placeholder.svg"
    },
    {
      name: "Mrs. Padma Lakshmi",
      designation: "Women Representative",
      category: "Special Representative",
      background: "Educationist, Women's Rights Activist",
      experience: "16+ years in Education",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Anil Kumar",
      designation: "Subject Expert",
      category: "Expert Member",
      background: "Industry Expert, Former R&D Head",
      experience: "20+ years in Industry",
      image: "/placeholder.svg"
    },
    {
      name: "Shri. Prakash Rao",
      designation: "Secretary",
      category: "Administrative",
      background: "Administrative Officer",
      experience: "15+ years Administration",
      image: "/placeholder.svg"
    }
  ];

  const meetings = [
    {
      date: "March 15, 2024",
      agenda: "Budget Approval for 2024-25",
      status: "Completed",
      decisions: ["Approved annual budget", "Infrastructure development plan", "Faculty recruitment"]
    },
    {
      date: "January 20, 2024", 
      agenda: "NAAC Preparation and Quality Enhancement",
      status: "Completed",
      decisions: ["NAAC action plan approved", "Quality improvement measures", "Research promotion"]
    },
    {
      date: "November 10, 2023",
      agenda: "New Academic Programs and Admissions",
      status: "Completed", 
      decisions: ["New courses approval", "Admission criteria", "Fee structure"]
    }
  ];

  return (
    <PageLayout 
      title="Governing Body" 
      description="The apex decision-making body responsible for policy formulation and institutional governance."
    >
      <div className="space-y-8">
        
        {/* Overview */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <h3 className="text-2xl font-bold text-college-blue">8</h3>
                <p className="text-gray-600">Total Members</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-college-blue">4</h3>
                <p className="text-gray-600">Meetings/Year</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-college-blue">3</h3>
                <p className="text-gray-600">Year Term</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-college-blue">2022</h3>
                <p className="text-gray-600">Current Term</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chairman's Message */}
        <Card>
          <CardHeader>
            <CardTitle>Chairman's Message</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg" alt="Chairman" />
                  <AvatarFallback>RKS</AvatarFallback>
                </Avatar>
                <div>
                  <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                    "As Chairman of the Governing Body, I am proud to oversee an institution that has consistently 
                    maintained the highest standards of academic excellence and moral values. SVRMC's commitment 
                    to nurturing not just scholars but responsible citizens continues to guide our decisions and 
                    policies. We remain dedicated to providing quality education that transforms lives and 
                    contributes to society's betterment."
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-semibold text-college-blue">Shri. R.K. Sharma</p>
                    <p className="text-gray-600">Chairman, Governing Body</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Governing Body Members */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-6 w-6 text-college-blue mr-2" />
              Governing Body Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {members.map((member, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').slice(-2).map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{member.name}</h4>
                      <p className="text-college-blue font-medium">{member.designation}</p>
                      <Badge variant="outline" className="mt-1">{member.category}</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-gray-500">Background:</span>
                      <p className="text-sm font-medium">{member.background}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Experience:</span>
                      <p className="text-sm font-medium">{member.experience}</p>
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
            <CardTitle>Functions and Responsibilities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Policy and Planning</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Formulate institutional policies and guidelines</li>
                  <li>• Approve strategic plans and development initiatives</li>
                  <li>• Oversee academic and administrative policies</li>
                  <li>• Ensure compliance with regulatory requirements</li>
                  <li>• Review and approve organizational structure</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Financial Oversight</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Approve annual budget and financial plans</li>
                  <li>• Monitor financial performance and expenditure</li>
                  <li>• Authorize major capital expenditures</li>
                  <li>• Ensure financial transparency and accountability</li>
                  <li>• Review audit reports and corrective measures</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Academic Governance</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Approve new academic programs and courses</li>
                  <li>• Review academic performance and quality</li>
                  <li>• Oversee faculty recruitment and development</li>
                  <li>• Ensure academic standards and accreditation</li>
                  <li>• Approve examination and evaluation policies</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Infrastructure and Development</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Approve infrastructure development projects</li>
                  <li>• Oversee campus expansion and modernization</li>
                  <li>• Ensure adequate facilities for education</li>
                  <li>• Monitor maintenance and safety standards</li>
                  <li>• Approve technology upgrades and digitization</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Meetings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-6 w-6 text-college-blue mr-2" />
              Recent Meetings and Decisions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {meetings.map((meeting, index) => (
                <div key={index} className="border-l-4 border-college-blue pl-6 py-4 bg-gray-50 rounded">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-lg">{meeting.agenda}</h4>
                      <p className="text-gray-600">{meeting.date}</p>
                    </div>
                    <Badge variant="secondary">{meeting.status}</Badge>
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

        {/* Meeting Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Meeting Schedule 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Scheduled Meetings</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span>Quarterly Review</span>
                    <Badge>June 15, 2024</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>Annual Planning</span>
                    <Badge>September 20, 2024</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span>Budget Review</span>
                    <Badge>December 10, 2024</Badge>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Meeting Procedures</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Quarterly meetings held regularly</li>
                  <li>• Special meetings as required</li>
                  <li>• Quorum: Minimum 5 members</li>
                  <li>• Agenda circulated 7 days prior</li>
                  <li>• Minutes recorded and approved</li>
                  <li>• Decisions by majority vote</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Downloads and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-6 w-6 text-college-blue mr-2" />
                Documents & Minutes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Governing Body Constitution
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Meeting Minutes 2024
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Annual Report 2023-24
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Policy Documents
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Governing Body</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-gray-500" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-600">governing.body@svrmc.edu.in</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-gray-500" />
                  <div>
                    <p className="font-medium">Secretary Office</p>
                    <p className="text-sm text-gray-600">+91-863-2345694</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-3 text-gray-500" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-sm text-gray-600">Mon-Fri: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </PageLayout>
  );
};

export default GoverningBody;