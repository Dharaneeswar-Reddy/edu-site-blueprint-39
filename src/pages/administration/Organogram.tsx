import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Settings, BookOpen } from "lucide-react";

const Organogram = () => {
  return (
    <PageLayout 
      title="Organizational Structure" 
      description="Hierarchical structure showing the administrative and academic organization of SVRMC."
    >
      <div className="space-y-8">
        
        {/* Top Level - Governing Body */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Governing Body</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm inline-block">
                <h3 className="font-bold text-college-blue">Shri. R.K. Sharma</h3>
                <p className="text-gray-600">Chairman, Governing Body</p>
                <Badge variant="secondary">R.T.E.I. Society</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Principal Level */}
        <Card>
          <CardContent className="p-8">
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-lg shadow-sm inline-block">
                <Building className="h-8 w-8 text-college-blue mx-auto mb-2" />
                <h3 className="font-bold text-college-blue text-lg">Dr. K. Srinivas</h3>
                <p className="text-gray-600">Principal</p>
                <Badge variant="outline">Chief Executive</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vice Principal & Registrar Level */}
        <Card>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-green-100 p-6 rounded-lg shadow-sm">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-bold text-green-700">Dr. Meera Patel</h3>
                  <p className="text-gray-600">Vice Principal</p>
                  <Badge variant="secondary">Academic Affairs</Badge>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 p-6 rounded-lg shadow-sm">
                  <Settings className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-bold text-purple-700">Mr. Ramesh Kumar</h3>
                  <p className="text-gray-600">Registrar</p>
                  <Badge variant="secondary">Administration</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Department Heads */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-6 w-6 text-college-blue mr-2" />
              Academic Departments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-3">Science Departments</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-3">
                    <h5 className="font-medium">Physics</h5>
                    <p className="text-sm text-gray-600">Dr. Rajesh Kumar (HOD)</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-3">
                    <h5 className="font-medium">Chemistry</h5>
                    <p className="text-sm text-gray-600">Dr. Meera Patel (HOD)</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-3">
                    <h5 className="font-medium">Mathematics</h5>
                    <p className="text-sm text-gray-600">Dr. Lakshmi Devi (HOD)</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-3">
                    <h5 className="font-medium">Computer Science</h5>
                    <p className="text-sm text-gray-600">Dr. Srinivas Reddy (HOD)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-700 mb-3">Life Sciences</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-500 pl-3">
                    <h5 className="font-medium">Botany</h5>
                    <p className="text-sm text-gray-600">Dr. Priya Sharma (HOD)</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-3">
                    <h5 className="font-medium">Zoology</h5>
                    <p className="text-sm text-gray-600">Dr. Anil Kumar (HOD)</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-3">
                    <h5 className="font-medium">Biotechnology</h5>
                    <p className="text-sm text-gray-600">Dr. Kavitha Rani (HOD)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-700 mb-3">Humanities & Commerce</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-purple-500 pl-3">
                    <h5 className="font-medium">English</h5>
                    <p className="text-sm text-gray-600">Dr. Sunita Rao (HOD)</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-3">
                    <h5 className="font-medium">Commerce</h5>
                    <p className="text-sm text-gray-600">Mr. Vikram Singh (HOD)</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-3">
                    <h5 className="font-medium">Telugu</h5>
                    <p className="text-sm text-gray-600">Dr. Ravi Kumar (HOD)</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-3">
                    <h5 className="font-medium">History</h5>
                    <p className="text-sm text-gray-600">Ms. Anita Sharma (HOD)</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Administrative Structure */}
        <Card>
          <CardHeader>
            <CardTitle>Administrative Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-700 mb-4">Academic Administration</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Controller of Examinations</span>
                    <Badge variant="outline">Dr. Priya Sharma</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Dean of Students</span>
                    <Badge variant="outline">Prof. Suresh Kumar</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>IQAC Director</span>
                    <Badge variant="outline">Dr. Meera Patel</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Research Coordinator</span>
                    <Badge variant="outline">Dr. Rajesh Kumar</Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-4">Support Services</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Chief Librarian</span>
                    <Badge variant="outline">Mrs. Padma Lakshmi</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Finance Officer</span>
                    <Badge variant="outline">Ms. Kamala Devi</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Estate Officer</span>
                    <Badge variant="outline">Mr. Prakash Rao</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Security Officer</span>
                    <Badge variant="outline">Mr. Govind</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Committees and Cells */}
        <Card>
          <CardHeader>
            <CardTitle>Important Committees & Cells</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-college-blue">Academic Committees</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex justify-between">
                    <span>Academic Council</span>
                    <Badge variant="secondary">15 Members</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Board of Studies</span>
                    <Badge variant="secondary">Each Dept</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Research Committee</span>
                    <Badge variant="secondary">8 Members</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Examination Committee</span>
                    <Badge variant="secondary">10 Members</Badge>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-college-blue">Student Welfare</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex justify-between">
                    <span>Anti-Ragging Committee</span>
                    <Badge variant="secondary">7 Members</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Internal Complaints Committee</span>
                    <Badge variant="secondary">5 Members</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Disciplinary Committee</span>
                    <Badge variant="secondary">6 Members</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Grievance Redressal</span>
                    <Badge variant="secondary">5 Members</Badge>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-college-blue">Administrative</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex justify-between">
                    <span>Finance Committee</span>
                    <Badge variant="secondary">5 Members</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Purchase Committee</span>
                    <Badge variant="secondary">4 Members</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Building Committee</span>
                    <Badge variant="secondary">6 Members</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Library Committee</span>
                    <Badge variant="secondary">8 Members</Badge>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reporting Structure Note */}
        <Card>
          <CardContent className="p-6 bg-yellow-50">
            <h4 className="font-semibold mb-3 text-yellow-700">Reporting Structure & Communication</h4>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• All academic departments report to the Vice Principal for academic matters</p>
              <p>• Administrative sections report to the Registrar for operational matters</p>
              <p>• Financial matters are overseen by the Finance Committee under Principal's guidance</p>
              <p>• Student-related issues are coordinated through the Dean of Students office</p>
              <p>• All major decisions require approval from the Principal and Governing Body</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default Organogram;