import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Award, Target } from "lucide-react";

const CPDC = () => {
  return (
    <PageLayout 
      title="Career Planning & Development Cell (CPDC)" 
      description="Empowering students with career guidance, skill development, and placement opportunities."
    >
      <div className="space-y-8">
        
        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">85%</h3>
              <p className="text-gray-600">Placement Rate</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <BookOpen className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">150+</h3>
              <p className="text-gray-600">Companies Visited</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">450+</h3>
              <p className="text-gray-600">Students Placed</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Target className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">₹8.5L</h3>
              <p className="text-gray-600">Highest Package</p>
            </CardContent>
          </Card>
        </div>

        {/* Services */}
        <Card>
          <CardHeader>
            <CardTitle>Services Offered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-blue-700">Career Counseling</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Individual career assessment</li>
                  <li>• Aptitude and personality tests</li>
                  <li>• Career path guidance</li>
                  <li>• Higher education counseling</li>
                  <li>• Industry exposure sessions</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-700">Skill Development</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Communication skills training</li>
                  <li>• Technical skill enhancement</li>
                  <li>• Leadership development</li>
                  <li>• Soft skills workshops</li>
                  <li>• Industry-specific training</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-700">Placement Support</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Resume building assistance</li>
                  <li>• Interview preparation</li>
                  <li>• Mock interviews and GD</li>
                  <li>• Company interaction facilitation</li>
                  <li>• Job matching and referrals</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Placements */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Placement Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded">
                <h4 className="font-semibold text-green-700">Tech Mahindra - Campus Drive</h4>
                <p className="text-sm text-green-600">35 students selected | Package: ₹3.5L - ₹6.2L | Roles: Software Engineer, Analyst</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded">
                <h4 className="font-semibold text-blue-700">Infosys - Pool Campus</h4>
                <p className="text-sm text-blue-600">28 students selected | Package: ₹3.8L - ₹7.1L | Roles: Systems Engineer, Specialist Programmer</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50 rounded">
                <h4 className="font-semibold text-purple-700">HDFC Bank - Recruitment</h4>
                <p className="text-sm text-purple-600">22 students selected | Package: ₹4.2L - ₹5.8L | Roles: Relationship Officer, Credit Analyst</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle>Contact CPDC</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">CPDC Office</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Dr. Priya Sharma, CPDC Coordinator</p>
                  <p>Email: cpdc@svrmc.edu.in</p>
                  <p>Phone: +91-863-2345696</p>
                  <p>Office: Academic Block, Ground Floor</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Office Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Monday to Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Counseling: By Appointment</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default CPDC;