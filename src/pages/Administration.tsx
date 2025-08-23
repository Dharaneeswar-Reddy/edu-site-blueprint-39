import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Award, GraduationCap, BookOpen, Settings, FileText, Phone, Mail, MapPin, Calendar, Shield, Star } from "lucide-react";

const Administration = () => {
  // Leadership data
  const leadershipData = {
    chairman: {
      name: "Sri Velagapudi Ramakrishna Prasad",
      designation: "Chairman, Board of Governors", 
      image: "/lovable-uploads/b010e240-0ffe-43a4-884e-04e9e6094c36.png",
      description: "Leading the institution with visionary guidance and commitment to educational excellence for over three decades."
    },
    correspondent: {
      name: "Dr. Ramesh Kumar",
      designation: "Correspondent",
      image: "/lovable-uploads/aa64612b-a2c2-4fc2-b645-b756306336a0.png", 
      description: "Overseeing institutional operations and strategic development initiatives."
    },
    principal: {
      name: "Dr. Rajesh Kumar",
      designation: "Principal",
      image: "/lovable-uploads/9f96f106-897d-46e3-a4a1-4c4b8f8f9f0c.png",
      description: "Bringing over two decades of experience in higher education and leading academic excellence initiatives."
    }
  };

  // Teaching Staff data
  const teachingStaff = [
    {
      name: "Dr. Aalok Dinkar Khandekar",
      designation: "Head (LA) & Associate Professor",
      department: "Computer Science",
      qualification: "Ph.D: Rensselaer Polytechnic Institute",
      expertise: ["Science, technology, and society studies (STS)", "Environmental sustainability"],
      image: "/lovable-uploads/52a8e7b1-5b22-4a0c-b1ec-450f99bfa9bb.png"
    },
    {
      name: "Dr. Aardra Surendran",
      designation: "Assistant Professor",
      department: "Liberal Arts", 
      qualification: "Ph.D: Jawaharlal Nehru University, New Delhi",
      expertise: ["Labour Studies", "Gender Studies"],
      image: "/lovable-uploads/662ebac1-9113-46ee-b212-a9a1526878d4.png"
    },
    {
      name: "Dr. Abhijit Sau",
      designation: "Assistant Professor",
      department: "Chemistry",
      qualification: "Ph.D: Bose Institute, Kolkata", 
      expertise: ["Synthetic Organic Chemistry", "Medicinal Chemistry"],
      image: "/lovable-uploads/71dea894-961d-4fd6-ac1f-78e8db8d93b4.png"
    },
    {
      name: "Dr. Abhinav Kumar",
      designation: "Professor", 
      department: "Computer Science",
      qualification: "Ph.D: IIT Delhi",
      expertise: ["Resource allocation for 5G", "Visible light communications"],
      image: "/lovable-uploads/805efae8-1428-4b19-9a41-f2f62680aefc.png"
    }
  ];

  // Non-Teaching Staff data
  const nonTeachingStaff = [
    {
      name: "Mr. Suresh Kumar",
      designation: "Administrative Officer",
      department: "Administration",
      qualification: "MBA: Business Administration",
      expertise: ["Administrative Management", "Financial Planning"],
      image: "/lovable-uploads/9ecf085a-3abc-45e7-844b-b132bfa85970.png"
    },
    {
      name: "Ms. Priya Nair", 
      designation: "Accounts Officer",
      department: "Finance",
      qualification: "M.Com: Commerce & Accountancy",
      expertise: ["Financial Management", "Audit & Compliance"],
      image: "/lovable-uploads/8ca0ef83-413e-4894-9e73-7361e0c0106c.png"
    },
    {
      name: "Mr. Rajesh Sharma",
      designation: "Library Officer",
      department: "Library",
      qualification: "M.Lib.Sc: Library Science",
      expertise: ["Digital Library Management", "Information Systems"],
      image: "/lovable-uploads/85f3d76b-36b0-4119-9ae0-75167cea9d0b.png"
    }
  ];

  return (
    <PageLayout
      title="Administration"
      description="Leadership and administrative structure of SVRMC - Committed to academic excellence and institutional growth"
    >
      <div className="space-y-8">{/* Overview Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Users className="h-10 w-10 text-college-blue mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-college-blue mb-2">120+</h3>
              <p className="text-gray-600 font-medium">Total Faculty & Staff</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Award className="h-10 w-10 text-college-blue mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-college-blue mb-2">85+</h3>
              <p className="text-gray-600 font-medium">Ph.D. Holders</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <GraduationCap className="h-10 w-10 text-college-blue mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-college-blue mb-2">12:1</h3>
              <p className="text-gray-600 font-medium">Student-Faculty Ratio</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <BookOpen className="h-10 w-10 text-college-blue mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-college-blue mb-2">250+</h3>
              <p className="text-gray-600 font-medium">Research Publications</p>
            </CardContent>
          </Card>
        </div>

        {/* Leadership Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <Shield className="h-8 w-8 text-college-blue" />
            <h2 className="text-3xl font-bold text-gray-900">Leadership</h2>
          </div>
          
          {/* Chairman */}
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-8">
            <CardContent className="p-0">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={leadershipData.chairman.image}
                    alt={leadershipData.chairman.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className="bg-college-blue text-white">Chairman</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{leadershipData.chairman.name}</h3>
                  <p className="text-college-blue font-medium mb-4">{leadershipData.chairman.designation}</p>
                  <p className="text-gray-700 mb-6">{leadershipData.chairman.description}</p>
                  <div className="flex gap-3">
                    <Button variant="default" className="bg-college-blue hover:bg-college-blue/90">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact Chairman
                    </Button>
                    <Button variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leadership Team */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Correspondent */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={leadershipData.correspondent.image}
                    alt={leadershipData.correspondent.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-college-blue text-white">Correspondent</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leadershipData.correspondent.name}</h3>
                  <p className="text-college-blue font-medium mb-3">{leadershipData.correspondent.designation}</p>
                  <p className="text-gray-700 text-sm mb-4">{leadershipData.correspondent.description}</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="default" className="flex-1 bg-college-blue hover:bg-college-blue/90">
                      <Mail className="h-3 w-3 mr-1" />
                      Contact
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Phone className="h-3 w-3 mr-1" />
                      Call
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Principal */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={leadershipData.principal.image}
                    alt={leadershipData.principal.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-college-blue text-white">Principal</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leadershipData.principal.name}</h3>
                  <p className="text-college-blue font-medium mb-3">{leadershipData.principal.designation}</p>
                  <p className="text-gray-700 text-sm mb-4">{leadershipData.principal.description}</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="default" className="flex-1 bg-college-blue hover:bg-college-blue/90">
                      <Mail className="h-3 w-3 mr-1" />
                      Email
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Phone className="h-3 w-3 mr-1" />
                      Contact
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>


        {/* Teaching Staff */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <GraduationCap className="h-8 w-8 text-college-blue" />
              <h2 className="text-3xl font-bold text-gray-900">Teaching Staff</h2>
            </div>
            <Badge variant="secondary" className="bg-college-blue text-white px-4 py-2">
              {teachingStaff.length} Faculty Members
            </Badge>
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachingStaff.map((faculty, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={faculty.image} 
                      alt={faculty.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-college-blue">
                        {faculty.department}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={faculty.image} alt={faculty.name} />
                        <AvatarFallback className="bg-college-blue text-white">
                          {faculty.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-sm">{faculty.name}</h3>
                        <p className="text-xs font-medium text-college-blue">{faculty.designation}</p>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-600 mb-3">{faculty.qualification}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {faculty.expertise.slice(0, 2).map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {faculty.expertise.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{faculty.expertise.length - 2} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="default" className="flex-1 text-xs bg-college-blue hover:bg-college-blue/90">
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

        {/* Non-Teaching Staff */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 text-college-blue" />
              <h2 className="text-3xl font-bold text-gray-900">Non-Teaching Staff</h2>
            </div>
            <Badge variant="secondary" className="bg-college-blue text-white px-4 py-2">
              {nonTeachingStaff.length} Staff Members
            </Badge>
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonTeachingStaff.map((staff, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={staff.image} 
                      alt={staff.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-college-blue">
                        {staff.department}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={staff.image} alt={staff.name} />
                        <AvatarFallback className="bg-college-blue text-white">
                          {staff.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-sm">{staff.name}</h3>
                        <p className="text-xs font-medium text-college-blue">{staff.designation}</p>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-600 mb-3">{staff.qualification}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {staff.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="default" className="flex-1 text-xs bg-college-blue hover:bg-college-blue/90">
                        <Mail className="h-3 w-3 mr-1" />
                        Contact
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 text-xs">
                        <FileText className="h-3 w-3 mr-1" />
                        Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <Card className="bg-gradient-to-br from-college-blue/5 to-college-blue/10 border-college-blue/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-college-blue">
              <MapPin className="h-6 w-6" />
              Administrative Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-college-blue mt-1" />
                <div>
                  <h4 className="font-medium text-college-blue">Address</h4>
                  <p className="text-sm text-gray-700">
                    SVRM College Campus<br />
                    Nagaram, Hyderabad<br />
                    Telangana - 500083
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-college-blue mt-1" />
                <div>
                  <h4 className="font-medium text-college-blue">Phone</h4>
                  <p className="text-sm text-gray-700">
                    +91-40-2717-8888<br />
                    +91-40-2717-9999
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-college-blue mt-1" />
                <div>
                  <h4 className="font-medium text-college-blue">Office Hours</h4>
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
    </PageLayout>
  );
};

export default Administration;