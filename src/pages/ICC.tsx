import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Phone, Mail, Users, FileText, AlertCircle } from "lucide-react";

const ICC = () => {
  const committeeMembers = [
    {
      name: "Dr. Priya Sharma",
      designation: "Chairperson",
      department: "Psychology",
      role: "Presiding Officer"
    },
    {
      name: "Prof. Suresh Kumar",
      designation: "Faculty Member",
      department: "Law",
      role: "Legal Advisor"
    },
    {
      name: "Ms. Anita Reddy",
      designation: "NGO Representative",
      department: "External",
      role: "External Member"
    },
    {
      name: "Ms. Kavitha Rani",
      designation: "Student Representative",
      department: "Final Year",
      role: "Student Member"
    }
  ];

  return (
    <PageLayout 
      title="Internal Complaints Committee (ICC)" 
      description="Committed to creating a safe and respectful environment for all members of the SVRMC community."
    >
      <div className="space-y-8">
        
        {/* Alert Banner */}
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
            <div>
              <h4 className="font-semibold text-red-700">Zero Tolerance Policy</h4>
              <p className="text-red-600 mt-1">
                SVRMC maintains a zero-tolerance policy against sexual harassment and is committed to providing a safe, secure environment for all.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <FileText className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="font-semibold mb-2">File a Complaint</h3>
              <p className="text-sm text-gray-600 mb-4">Submit your complaint confidentially</p>
              <Button size="sm" className="w-full">File Complaint</Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Emergency Contact</h3>
              <p className="text-sm text-gray-600 mb-4">24/7 helpline available</p>
              <Button size="sm" variant="outline" className="w-full">Call Now</Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Shield className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Know Your Rights</h3>
              <p className="text-sm text-gray-600 mb-4">Understanding policies and procedures</p>
              <Button size="sm" variant="outline" className="w-full">Learn More</Button>
            </CardContent>
          </Card>
        </div>

        {/* About ICC */}
        <Card>
          <CardHeader>
            <CardTitle>About Internal Complaints Committee</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                The Internal Complaints Committee (ICC) is constituted as per the Sexual Harassment of Women at Workplace 
                (Prevention, Prohibition and Redressal) Act, 2013. The committee is responsible for addressing complaints 
                of sexual harassment and ensuring a safe working environment for all members of the institution.
              </p>
              
              <h4 className="font-semibold mb-3">Objectives:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Prevent and prohibit sexual harassment at the workplace</li>
                <li>Provide redressal mechanism for complaints</li>
                <li>Create awareness about rights and responsibilities</li>
                <li>Ensure confidential and fair investigation process</li>
                <li>Recommend appropriate action against offenders</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Committee Members */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Committee Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {committeeMembers.map((member, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{member.name}</h4>
                    <Badge variant="secondary">{member.role}</Badge>
                  </div>
                  <p className="text-gray-600">{member.designation}</p>
                  <p className="text-sm text-gray-500">{member.department}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Complaint Process */}
        <Card>
          <CardHeader>
            <CardTitle>Complaint Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">How to File a Complaint</h4>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>Complaint can be filed within 3 months of the incident</li>
                  <li>Submit written complaint to ICC Chairperson</li>
                  <li>Complaint can be filed in person, by email, or through drop box</li>
                  <li>Mention details of the incident with date, time, and place</li>
                  <li>Provide names of witnesses, if any</li>
                  <li>Maintain confidentiality throughout the process</li>
                </ol>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Investigation Process</h4>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>ICC acknowledges complaint within 7 days</li>
                  <li>Both parties are heard during inquiry</li>
                  <li>Investigation completed within 90 days</li>
                  <li>Report submitted to Principal with recommendations</li>
                  <li>Appropriate action taken as per committee recommendations</li>
                  <li>Parties informed about the final decision</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact ICC</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Chairperson Contact</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-gray-600">icc@svrmc.edu.in</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-gray-600">+91-863-2345682 (Direct)</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-gray-600">1091 (24/7 Helpline)</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Office Details</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Location: Admin Block, Room 105</p>
                  <p>Office Hours: Monday to Friday, 10:00 AM - 5:00 PM</p>
                  <p>Complaint Box: Available near Principal's Office</p>
                  <p>Email: Available 24/7 for urgent matters</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legal Framework */}
        <Card>
          <CardHeader>
            <CardTitle>Legal Framework & Policies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <FileText className="h-6 w-6 mb-2" />
                <span className="text-center">Sexual Harassment Act 2013</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <FileText className="h-6 w-6 mb-2" />
                <span className="text-center">ICC Policy Document</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <FileText className="h-6 w-6 mb-2" />
                <span className="text-center">Complaint Form</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <FileText className="h-6 w-6 mb-2" />
                <span className="text-center">Code of Conduct</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <FileText className="h-6 w-6 mb-2" />
                <span className="text-center">Annual Report</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <FileText className="h-6 w-6 mb-2" />
                <span className="text-center">Awareness Material</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Confidentiality Notice */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-blue-500 mr-3" />
            <div>
              <h4 className="font-semibold text-blue-700">Confidentiality Assured</h4>
              <p className="text-blue-600 mt-1">
                All complaints are handled with utmost confidentiality. The identity of the complainant and respondent 
                will be kept confidential throughout the process. False or malicious complaints are also discouraged 
                and may result in disciplinary action.
              </p>
            </div>
          </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default ICC;