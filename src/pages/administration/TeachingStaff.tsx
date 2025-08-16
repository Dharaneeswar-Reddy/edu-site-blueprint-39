import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, Award, GraduationCap, BookOpen } from "lucide-react";

const TeachingStaff = () => {
  const departments = [
    {
      name: "Physics",
      hod: "Dr. Rajesh Kumar",
      faculty: [
        { name: "Dr. Rajesh Kumar", designation: "Professor & HOD", qualification: "Ph.D. Physics", experience: "20 years" },
        { name: "Dr. Priya Sharma", designation: "Associate Professor", qualification: "Ph.D. Physics", experience: "15 years" },
        { name: "Mr. Suresh Reddy", designation: "Assistant Professor", qualification: "M.Sc. Physics", experience: "8 years" },
      ]
    },
    {
      name: "Chemistry", 
      hod: "Dr. Meera Patel",
      faculty: [
        { name: "Dr. Meera Patel", designation: "Professor & HOD", qualification: "Ph.D. Chemistry", experience: "18 years" },
        { name: "Dr. Anil Kumar", designation: "Associate Professor", qualification: "Ph.D. Chemistry", experience: "12 years" },
        { name: "Ms. Kavitha Rani", designation: "Assistant Professor", qualification: "M.Sc. Chemistry", experience: "6 years" },
      ]
    },
    {
      name: "Computer Science",
      hod: "Dr. Srinivas Reddy", 
      faculty: [
        { name: "Dr. Srinivas Reddy", designation: "Professor & HOD", qualification: "Ph.D. Computer Science", experience: "16 years" },
        { name: "Mr. Vikram Singh", designation: "Associate Professor", qualification: "M.Tech CSE", experience: "10 years" },
        { name: "Ms. Anita Sharma", designation: "Assistant Professor", qualification: "M.Tech IT", experience: "7 years" },
      ]
    },
    {
      name: "Mathematics",
      hod: "Dr. Lakshmi Devi",
      faculty: [
        { name: "Dr. Lakshmi Devi", designation: "Professor & HOD", qualification: "Ph.D. Mathematics", experience: "22 years" },
        { name: "Mr. Ravi Kumar", designation: "Associate Professor", qualification: "M.Sc. Mathematics", experience: "14 years" },
        { name: "Ms. Sunita Rao", designation: "Assistant Professor", qualification: "M.Sc. Statistics", experience: "9 years" },
      ]
    }
  ];

  return (
    <PageLayout 
      title="Teaching Staff" 
      description="Meet our dedicated faculty members who are committed to academic excellence and student development."
    >
      <div className="space-y-8">
        
        {/* Overview Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">45</h3>
              <p className="text-gray-600">Total Faculty</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">28</h3>
              <p className="text-gray-600">Ph.D. Holders</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <GraduationCap className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">15:1</h3>
              <p className="text-gray-600">Student-Faculty Ratio</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <BookOpen className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">150+</h3>
              <p className="text-gray-600">Research Publications</p>
            </CardContent>
          </Card>
        </div>

        {/* Department-wise Faculty */}
        {departments.map((dept, deptIndex) => (
          <Card key={deptIndex}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Department of {dept.name}</span>
                <Badge variant="secondary">HOD: {dept.hod}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {dept.faculty.map((faculty, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-16 w-16 mr-4">
                        <AvatarImage src="/placeholder.svg" alt={faculty.name} />
                        <AvatarFallback>{faculty.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-lg">{faculty.name}</h4>
                        <p className="text-sm text-gray-600">{faculty.designation}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Qualification:</span>
                        <span className="text-sm font-medium">{faculty.qualification}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Experience:</span>
                        <span className="text-sm font-medium">{faculty.experience}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Faculty Achievements */}
        <Card>
          <CardHeader>
            <CardTitle>Faculty Achievements & Recognition</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-blue-700">Research Excellence</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 15 faculty with Ph.D. supervision rights</li>
                  <li>• 50+ publications in peer-reviewed journals</li>
                  <li>• 8 ongoing research projects</li>
                  <li>• 3 patents filed this year</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-700">Awards & Recognition</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Best Teacher Awards: 5 faculty</li>
                  <li>• State-level recognition: 3 faculty</li>
                  <li>• International conference presentations: 12</li>
                  <li>• Editorial board memberships: 6</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-700">Professional Development</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Faculty Development Programs attended: 25</li>
                  <li>• International collaborations: 8</li>
                  <li>• Workshop conducted: 12</li>
                  <li>• Industry consultancy projects: 6</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default TeachingStaff;