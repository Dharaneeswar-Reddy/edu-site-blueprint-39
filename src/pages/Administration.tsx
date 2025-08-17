import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, Award, GraduationCap, BookOpen, Settings, FileText, Phone } from "lucide-react";

const Administration = () => {
  // Teaching Staff Data
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

  // Non-Teaching Staff Data
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
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-college-blue mb-4">Administration</h1>
              <p className="text-lg text-gray-600">Leadership and administrative structure of SVRMC</p>
            </div>

            {/* Correspondent Section */}
            <section className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-college-blue">Correspondent</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-1">
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src="https://source.unsplash.com/random/400x500?businessman,portrait" 
                          alt="Correspondent" 
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="bg-college-blue text-white p-4 mt-4 rounded-lg">
                        <h3 className="text-xl font-bold">Shri. Velagapudi Srinivas</h3>
                        <p className="text-sm">Correspondent</p>
                        <p className="text-sm mt-1">M.A., M.Ed.</p>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <div className="space-y-4 text-gray-700">
                        <p>Shri. Velagapudi Srinivas serves as the Correspondent of SVRM College, carrying forward the vision of his father, the late Shri Velagapudi Ramakrishna. Under his dynamic leadership, the college has expanded its academic offerings and enhanced its infrastructure to meet modern educational standards.</p>
                        <p>His commitment to quality education and student welfare has been instrumental in establishing SVRMC as one of the premier educational institutions in Andhra Pradesh. He believes in providing affordable, quality education that nurtures both academic excellence and character development.</p>
                        <p>With a strong focus on holistic development, he has introduced various initiatives for skill development, personality enhancement, and career guidance to ensure that students are well-prepared for the challenges of the modern world.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Principal Section */}
            <section className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-college-blue">Principal</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-1">
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src="https://source.unsplash.com/random/400x500?professor,academic" 
                          alt="Principal" 
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="bg-college-blue text-white p-4 mt-4 rounded-lg">
                        <h3 className="text-xl font-bold">Dr. Rajesh Kumar</h3>
                        <p className="text-sm">Principal</p>
                        <p className="text-sm mt-1">Ph.D. in Educational Leadership</p>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <div className="space-y-4 text-gray-700">
                        <p>Dr. Rajesh Kumar brings over two decades of experience in higher education to his role as Principal of SVRMC. With a Ph.D. in Educational Leadership and extensive research in curriculum development, he has been instrumental in implementing innovative teaching methodologies and academic reforms.</p>
                        <p>His vision for the college encompasses not just academic excellence but also the holistic development of students. Under his leadership, the college has achieved significant milestones in research, industry partnerships, and student placements.</p>
                        <p>Dr. Kumar is known for his open-door policy and his commitment to faculty development and student welfare. He actively promotes research culture among faculty and encourages students to participate in national and international competitions.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Teaching Staff Section */}
            <section className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-college-blue">Teaching Staff</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Overview Statistics */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
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
                    <Card key={deptIndex} className="mb-6">
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
                </CardContent>
              </Card>
            </section>

            {/* Non-Teaching Staff Section */}
            <section>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-college-blue">Non-Teaching Staff</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Overview Statistics */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
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
                    <Card key={categoryIndex} className="mb-6">
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
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Administration;