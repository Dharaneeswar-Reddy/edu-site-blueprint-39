import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Award, GraduationCap, BookOpen, Settings, FileText, Phone, Mail, MapPin, Calendar } from "lucide-react";

const Administration = () => {
  // Faculty data matching the uploaded image style
  const facultyCategories = [
    {
      title: "Regular Faculty",
      faculty: [
        {
          name: "Dr. Aalok Dinkar Khandekar",
          designation: "Head (LA) & Associate Professor",
          department: "Computer Science",
          qualification: "Ph.D: Rensselaer Polytechnic Institute",
          expertise: ["Science, technology, and society studies (STS)", "Environmental sustainability", "Urban studies"],
          image: "/lovable-uploads/52a8e7b1-5b22-4a0c-b1ec-450f99bfa9bb.png"
        },
        {
          name: "Dr. Aardra Surendran",
          designation: "Assistant Professor",
          department: "Liberal Arts",
          qualification: "Ph.D: Jawaharlal Nehru University, New Delhi",
          expertise: ["Labour Studies", "Gender Studies", "Social Inequality"],
          image: "/lovable-uploads/662ebac1-9113-46ee-b212-a9a1526878d4.png"
        },
        {
          name: "Dr. Abhijit Sau",
          designation: "Assistant Professor",
          department: "Chemistry",
          qualification: "Ph.D: Bose Institute, Kolkata",
          expertise: ["Synthetic Organic Chemistry", "Medicinal Chemistry", "Glycoscience"],
          image: "/lovable-uploads/71dea894-961d-4fd6-ac1f-78e8db8d93b4.png"
        },
        {
          name: "Dr. Abhinav Kumar",
          designation: "Professor",
          department: "Computer Science",
          qualification: "Ph.D: IIT Delhi",
          expertise: ["Resource allocation for 5G", "Visible light based communications", "Security and Privacy in wireless networks"],
          image: "/lovable-uploads/805efae8-1428-4b19-9a41-f2f62680aefc.png"
        }
      ]
    },
    {
      title: "Visiting Faculty",
      faculty: [
        {
          name: "Dr. Rajesh Sharma",
          designation: "Visiting Professor",
          department: "Physics",
          qualification: "Ph.D: IISc Bangalore",
          expertise: ["Quantum Physics", "Nanotechnology", "Materials Science"],
          image: "/lovable-uploads/85f3d76b-36b0-4119-9ae0-75167cea9d0b.png"
        },
        {
          name: "Dr. Priya Nair",
          designation: "Visiting Associate Professor",
          department: "Mathematics",
          qualification: "Ph.D: University of Cambridge",
          expertise: ["Applied Mathematics", "Statistical Analysis", "Mathematical Modeling"],
          image: "/lovable-uploads/8ca0ef83-413e-4894-9e73-7361e0c0106c.png"
        }
      ]
    },
    {
      title: "Adjunct Faculty",
      faculty: [
        {
          name: "Mr. Suresh Kumar",
          designation: "Adjunct Professor",
          department: "Commerce",
          qualification: "MBA: Harvard Business School",
          expertise: ["Business Strategy", "Financial Management", "Entrepreneurship"],
          image: "/lovable-uploads/9ecf085a-3abc-45e7-844b-b132bfa85970.png"
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Administration</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leadership and administrative structure of SVRMC - Committed to academic excellence and institutional growth
            </p>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-blue-600">120+</h3>
                <p className="text-gray-600">Total Faculty & Staff</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-green-600">85+</h3>
                <p className="text-gray-600">Ph.D. Holders</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <GraduationCap className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-purple-600">12:1</h3>
                <p className="text-gray-600">Student-Faculty Ratio</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-orange-600">250+</h3>
                <p className="text-gray-600">Research Publications</p>
              </CardContent>
            </Card>
          </div>

          {/* Faculty Categories */}
          {facultyCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                  {category.faculty.length} Faculty Members
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.faculty.map((faculty, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <CardContent className="p-0">
                      {/* Faculty Image */}
                      <div className="relative overflow-hidden">
                        <img 
                          src={faculty.image} 
                          alt={faculty.name}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      {/* Faculty Info */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{faculty.name}</h3>
                        <p className="text-sm font-medium text-blue-600 mb-2">{faculty.designation}</p>
                        <p className="text-sm text-gray-600 mb-3">{faculty.qualification}</p>
                        
                        {/* Expertise Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {faculty.expertise.slice(0, 2).map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {faculty.expertise.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{faculty.expertise.length - 2} more
                            </Badge>
                          )}
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="flex-1 text-xs">
                            <Mail className="h-3 w-3 mr-1" />
                            Contact
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1 text-xs">
                            <FileText className="h-3 w-3 mr-1" />
                            Profile
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          {/* Leadership Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Leadership</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Principal */}
              <Card className="overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src="/lovable-uploads/9f96f106-897d-46e3-a4a1-4c4b8f8f9f0c.png" 
                        alt="Principal"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Rajesh Kumar</h3>
                      <p className="text-blue-600 font-medium mb-3">Principal</p>
                      <p className="text-sm text-gray-700 mb-4">
                        Dr. Rajesh Kumar brings over two decades of experience in higher education. 
                        Under his leadership, SVRMC has achieved significant milestones in academic excellence and research.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Mail className="h-4 w-4 mr-1" />
                          principal@svrmc.edu.in
                        </Button>
                        <Button size="sm" variant="outline">
                          <Phone className="h-4 w-4 mr-1" />
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vice Principal */}
              <Card className="overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src="/lovable-uploads/a29d5e18-fb3d-47a3-b3d2-a210ce08d66c.png" 
                        alt="Vice Principal"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Priya Sharma</h3>
                      <p className="text-blue-600 font-medium mb-3">Vice Principal</p>
                      <p className="text-sm text-gray-700 mb-4">
                        Dr. Priya Sharma oversees academic affairs and student development programs. 
                        She is instrumental in curriculum development and quality assurance initiatives.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Mail className="h-4 w-4 mr-1" />
                          viceprincipal@svrmc.edu.in
                        </Button>
                        <Button size="sm" variant="outline">
                          <Phone className="h-4 w-4 mr-1" />
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Information */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">Administrative Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-blue-900">Address</h4>
                    <p className="text-sm text-gray-700">
                      SVRM College Campus<br />
                      Nagaram, Hyderabad<br />
                      Telangana - 500083
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-blue-900">Phone</h4>
                    <p className="text-sm text-gray-700">
                      +91-40-2717-8888<br />
                      +91-40-2717-9999
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-blue-900">Office Hours</h4>
                    <p className="text-sm text-gray-700">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Administration;