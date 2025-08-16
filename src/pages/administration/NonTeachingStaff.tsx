import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, Settings, FileText, Phone } from "lucide-react";

const NonTeachingStaff = () => {
  const staffCategories = [
    {
      category: "Administrative Staff",
      staff: [
        { name: "Mr. Ramesh Kumar", designation: "Registrar", department: "Administration", experience: "15 years" },
        { name: "Ms. Sunita Devi", designation: "Assistant Registrar", department: "Academic Affairs", experience: "12 years" },
        { name: "Mr. Prakash Rao", designation: "Administrative Officer", department: "General Administration", experience: "10 years" },
        { name: "Ms. Kamala Devi", designation: "Accounts Officer", department: "Finance", experience: "18 years" },
      ]
    },
    {
      category: "Technical Staff",
      staff: [
        { name: "Mr. Suresh Babu", designation: "Lab Technician", department: "Physics Lab", experience: "14 years" },
        { name: "Ms. Radha Krishna", designation: "Lab Technician", department: "Chemistry Lab", experience: "11 years" },
        { name: "Mr. Venkat Reddy", designation: "Computer Operator", department: "Computer Center", experience: "8 years" },
        { name: "Ms. Latha Kumari", designation: "Lab Assistant", department: "Biology Lab", experience: "9 years" },
      ]
    },
    {
      category: "Library Staff", 
      staff: [
        { name: "Mrs. Padma Lakshmi", designation: "Librarian", department: "Central Library", experience: "16 years" },
        { name: "Mr. Krishna Murthy", designation: "Assistant Librarian", department: "Central Library", experience: "12 years" },
        { name: "Ms. Sita Devi", designation: "Library Assistant", department: "Digital Library", experience: "7 years" },
      ]
    },
    {
      category: "Support Staff",
      staff: [
        { name: "Mr. Raju", designation: "Office Assistant", department: "Principal Office", experience: "20 years" },
        { name: "Ms. Rani", designation: "Office Assistant", department: "Academic Section", experience: "13 years" },
        { name: "Mr. Govind", designation: "Security Supervisor", department: "Security", experience: "15 years" },
        { name: "Mr. Naresh", designation: "Maintenance Supervisor", department: "Infrastructure", experience: "12 years" },
      ]
    }
  ];

  return (
    <PageLayout 
      title="Non-Teaching Staff" 
      description="Our dedicated non-teaching staff who ensure smooth operations and excellent support services."
    >
      <div className="space-y-8">
        
        {/* Overview Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">65</h3>
              <p className="text-gray-600">Total Non-Teaching Staff</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Settings className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">15</h3>
              <p className="text-gray-600">Administrative Staff</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <FileText className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">25</h3>
              <p className="text-gray-600">Technical Staff</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Phone className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">25</h3>
              <p className="text-gray-600">Support Staff</p>
            </CardContent>
          </Card>
        </div>

        {/* Staff by Category */}
        {staffCategories.map((category, categoryIndex) => (
          <Card key={categoryIndex}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{category.category}</span>
                <Badge variant="secondary">{category.staff.length} Members</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.staff.map((staff, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src="/placeholder.svg" alt={staff.name} />
                        <AvatarFallback>{staff.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{staff.name}</h4>
                        <p className="text-sm text-gray-600">{staff.designation}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Department:</span>
                        <span className="text-sm font-medium">{staff.department}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Experience:</span>
                        <span className="text-sm font-medium">{staff.experience}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Services Provided */}
        <Card>
          <CardHeader>
            <CardTitle>Services Provided by Non-Teaching Staff</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Administrative Services</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Student admission and registration</li>
                  <li>• Academic record maintenance</li>
                  <li>• Examination coordination</li>
                  <li>• Fee collection and accounts</li>
                  <li>• Official correspondence</li>
                  <li>• Document verification</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Technical Support</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Laboratory maintenance and setup</li>
                  <li>• Computer and network support</li>
                  <li>• Audio-visual equipment management</li>
                  <li>• Scientific instrument maintenance</li>
                  <li>• Digital library services</li>
                  <li>• Campus WiFi support</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Infrastructure & Maintenance</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Building and facility maintenance</li>
                  <li>• Electrical and plumbing services</li>
                  <li>• Grounds and garden maintenance</li>
                  <li>• Security and surveillance</li>
                  <li>• Housekeeping services</li>
                  <li>• Transportation coordination</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Student Support Services</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Library and information services</li>
                  <li>• Medical and health support</li>
                  <li>• Counseling and guidance</li>
                  <li>• Sports and recreation facilities</li>
                  <li>• Hostel administration</li>
                  <li>• Student activity coordination</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recognition and Welfare */}
        <Card>
          <CardHeader>
            <CardTitle>Staff Welfare and Recognition</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-700">Welfare Measures</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Medical insurance coverage</li>
                  <li>• Provident fund benefits</li>
                  <li>• Annual health checkups</li>
                  <li>• Professional development programs</li>
                  <li>• Housing assistance</li>
                  <li>• Children education support</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-blue-700">Recognition Programs</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Best Employee of the Year</li>
                  <li>• Long service awards</li>
                  <li>• Excellence in service recognition</li>
                  <li>• Innovation and improvement awards</li>
                  <li>• Team achievement recognition</li>
                  <li>• Loyalty and dedication awards</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-700">Training & Development</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Computer literacy programs</li>
                  <li>• Technical skill workshops</li>
                  <li>• Customer service training</li>
                  <li>• Safety and security training</li>
                  <li>• Leadership development</li>
                  <li>• Soft skills enhancement</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Staff Administration Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Human Resources Office</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Mr. Prakash Rao, Administrative Officer</p>
                  <p>Email: hr@svrmc.edu.in</p>
                  <p>Phone: +91-863-2345693</p>
                  <p>Office: Admin Block, Ground Floor</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Office Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Monday to Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Lunch Break: 1:00 PM - 2:00 PM</p>
                  <p>Emergency Contact: Security Office</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default NonTeachingStaff;