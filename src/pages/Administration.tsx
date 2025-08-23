import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Users, Award, GraduationCap, BookOpen, Settings, FileText, Phone, Mail, MapPin, Calendar, Shield, Star, ExternalLink, Building2, UserCheck } from "lucide-react";
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
  const teachingStaff = [{
    name: "Dr. Aalok Dinkar Khandekar",
    designation: "Head (LA) & Associate Professor",
    department: "Computer Science",
    qualification: "Ph.D: Rensselaer Polytechnic Institute",
    expertise: ["Science, technology, and society studies (STS)", "Environmental sustainability"],
    image: "/lovable-uploads/52a8e7b1-5b22-4a0c-b1ec-450f99bfa9bb.png"
  }, {
    name: "Dr. Aardra Surendran",
    designation: "Assistant Professor",
    department: "Liberal Arts",
    qualification: "Ph.D: Jawaharlal Nehru University, New Delhi",
    expertise: ["Labour Studies", "Gender Studies"],
    image: "/lovable-uploads/662ebac1-9113-46ee-b212-a9a1526878d4.png"
  }, {
    name: "Dr. Abhijit Sau",
    designation: "Assistant Professor",
    department: "Chemistry",
    qualification: "Ph.D: Bose Institute, Kolkata",
    expertise: ["Synthetic Organic Chemistry", "Medicinal Chemistry"],
    image: "/lovable-uploads/71dea894-961d-4fd6-ac1f-78e8db8d93b4.png"
  }, {
    name: "Dr. Abhinav Kumar",
    designation: "Professor",
    department: "Computer Science",
    qualification: "Ph.D: IIT Delhi",
    expertise: ["Resource allocation for 5G", "Visible light communications"],
    image: "/lovable-uploads/805efae8-1428-4b19-9a41-f2f62680aefc.png"
  }];

  // Non-Teaching Staff data
  const nonTeachingStaff = [{
    name: "Mr. Suresh Kumar",
    designation: "Administrative Officer",
    department: "Administration",
    qualification: "MBA: Business Administration",
    expertise: ["Administrative Management", "Financial Planning"],
    image: "/lovable-uploads/9ecf085a-3abc-45e7-844b-b132bfa85970.png"
  }, {
    name: "Ms. Priya Nair",
    designation: "Accounts Officer",
    department: "Finance",
    qualification: "M.Com: Commerce & Accountancy",
    expertise: ["Financial Management", "Audit & Compliance"],
    image: "/lovable-uploads/8ca0ef83-413e-4894-9e73-7361e0c0106c.png"
  }, {
    name: "Mr. Rajesh Sharma",
    designation: "Library Officer",
    department: "Library",
    qualification: "M.Lib.Sc: Library Science",
    expertise: ["Digital Library Management", "Information Systems"],
    image: "/lovable-uploads/85f3d76b-36b0-4119-9ae0-75167cea9d0b.png"
  }];
  return <PageLayout title="Administration & Faculty" description="Meet our distinguished leadership team and faculty members committed to academic excellence and institutional development">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Institutional Overview */}
        <section className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Institutional Excellence</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              SVRM College stands as a beacon of academic excellence with a distinguished leadership team 
              and highly qualified faculty dedicated to nurturing future leaders and innovators.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-7 w-7 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-1">120+</div>
              <div className="text-sm text-slate-600 font-medium">Faculty & Staff</div>
            </div>
            
            <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-7 w-7 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-1">85+</div>
              
            </div>
            
            <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="h-7 w-7 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-1">12:1</div>
              <div className="text-sm text-slate-600 font-medium">Student-Faculty Ratio</div>
            </div>
            
            <div className="text-center bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="h-7 w-7 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-1">250+</div>
              <div className="text-sm text-slate-600 font-medium">Publications</div>
            </div>
          </div>
        </section>

        {/* Leadership Profiles */}
        <section>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building2 className="h-8 w-8 text-slate-700" />
              <h2 className="text-3xl font-bold text-slate-800">Institutional Leadership</h2>
            </div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Visionary leaders guiding SVRM College towards excellence in education, research, and community service
            </p>
          </div>

          {/* Chairman Profile */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-8 py-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Chairman, Board of Governors</h3>
                  <p className="text-slate-300">Institutional Leadership</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="relative">
                    <img src={leadershipData.chairman.image} alt={leadershipData.chairman.name} className="w-full aspect-[3/4] object-cover rounded-lg shadow-md" />
                    <div className="absolute -bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg p-4 border border-slate-200">
                      <h4 className="font-bold text-slate-800 text-lg">{leadershipData.chairman.name}</h4>
                      <p className="text-slate-600 text-sm">{leadershipData.chairman.designation}</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-2 mt-12 md:mt-0">
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <UserCheck className="h-4 w-4" />
                        About
                      </h5>
                      <p className="text-slate-700 leading-relaxed">{leadershipData.chairman.description}</p>
                    </div>
                    
                    <Separator />
                    
                    
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Leadership */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Correspondent */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Correspondent</h3>
                    <p className="text-blue-100 text-sm">Operations & Development</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img src={leadershipData.correspondent.image} alt={leadershipData.correspondent.name} className="w-20 h-20 rounded-lg object-cover shadow-md" />
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 text-lg">{leadershipData.correspondent.name}</h4>
                    <p className="text-blue-600 font-medium text-sm mb-2">{leadershipData.correspondent.designation}</p>
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{leadershipData.correspondent.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Mail className="h-4 w-4 text-blue-500" />
                    <span>correspondent@svrmc.edu.in</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Phone className="h-4 w-4 text-blue-500" />
                    <span>+91-40-2717-8889</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  
                  
                </div>
              </div>
            </div>

            {/* Principal */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Principal</h3>
                    <p className="text-emerald-100 text-sm">Academic Leadership</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img src={leadershipData.principal.image} alt={leadershipData.principal.name} className="w-20 h-20 rounded-lg object-cover shadow-md" />
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 text-lg">{leadershipData.principal.name}</h4>
                    <p className="text-emerald-600 font-medium text-sm mb-2">{leadershipData.principal.designation}</p>
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{leadershipData.principal.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Mail className="h-4 w-4 text-emerald-500" />
                    <span>principal@svrmc.edu.in</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Phone className="h-4 w-4 text-emerald-500" />
                    <span>+91-40-2717-8890</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  
                  
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Faculty Directory */}
        <section>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="h-8 w-8 text-slate-700" />
              <h2 className="text-3xl font-bold text-slate-800">Faculty Directory</h2>
            </div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Meet our distinguished faculty members who bring expertise, research excellence, and pedagogical innovation to SVRM College
            </p>
            <div className="mt-4">
              <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-300 px-4 py-2">
                {teachingStaff.length} Faculty Members
              </Badge>
            </div>
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachingStaff.map((faculty, index) => <div key={index} className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="relative inline-block">
                      <img src={faculty.image} alt={faculty.name} className="w-32 h-32 rounded-full object-cover shadow-lg mx-auto border-4 border-slate-100" />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <Badge variant="secondary" className="bg-slate-800 text-white text-xs px-3 py-1">
                          {faculty.department}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-1">{faculty.name}</h3>
                    <p className="text-blue-600 font-semibold text-sm mb-2">{faculty.designation}</p>
                    <p className="text-slate-600 text-sm">{faculty.qualification}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 mb-2">Research Areas</h4>
                      <div className="flex flex-wrap gap-2">
                        {faculty.expertise.map((skill, skillIndex) => <span key={skillIndex} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-md border">
                            {skill}
                          </span>)}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                      <div className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        <span>Email</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        <span>Phone</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-slate-800 hover:bg-slate-700 text-white text-xs">
                        <Mail className="h-3 w-3 mr-1" />
                        Contact
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 border-slate-300 text-xs">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </section>

        {/* Administrative Staff */}
        <section>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="h-8 w-8 text-slate-700" />
              <h2 className="text-3xl font-bold text-slate-800">Administrative Staff</h2>
            </div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our dedicated administrative professionals ensure smooth operations and provide essential support services to the academic community
            </p>
            <div className="mt-4">
              <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-300 px-4 py-2">
                {nonTeachingStaff.length} Staff Members
              </Badge>
            </div>
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nonTeachingStaff.map((staff, index) => <div key={index} className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img src={staff.image} alt={staff.name} className="w-16 h-16 rounded-lg object-cover shadow-md" />
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800 mb-1">{staff.name}</h3>
                      <p className="text-blue-600 font-medium text-sm mb-1">{staff.designation}</p>
                      <Badge variant="outline" className="text-xs bg-slate-100 text-slate-700 border-slate-300">
                        {staff.department}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-slate-600 font-medium mb-1">Qualification</p>
                      <p className="text-xs text-slate-700">{staff.qualification}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-slate-600 font-medium mb-2">Specializations</p>
                      <div className="flex flex-wrap gap-1">
                        {staff.expertise.map((skill, skillIndex) => <span key={skillIndex} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded border">
                            {skill}
                          </span>)}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-slate-700 hover:bg-slate-800 text-white text-xs">
                        <Mail className="h-3 w-3 mr-1" />
                        Contact
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 border-slate-300 text-xs">
                        <FileText className="h-3 w-3 mr-1" />
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </section>

        {/* Contact & Office Information */}
        <section className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Administrative Offices</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Get in touch with our administrative offices for academic inquiries, admissions, and general information
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-white">Campus Address</h4>
              </div>
              <div className="space-y-2 text-slate-200">
                <p>SVRM College Campus</p>
                <p>Nagaram, Hyderabad</p>
                <p>Telangana - 500083, India</p>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-white">Contact Numbers</h4>
              </div>
              <div className="space-y-2 text-slate-200">
                <p>Main Office: +91-40-2717-8888</p>
                <p>Admissions: +91-40-2717-8889</p>
                <p>Fax: +91-40-2717-8899</p>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-white">Office Hours</h4>
              </div>
              <div className="space-y-2 text-slate-200">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-white text-slate-800 hover:bg-slate-100">
              <Mail className="h-4 w-4 mr-2" />
              Contact Administration
            </Button>
          </div>
        </section>

      </div>
    </PageLayout>;
};
export default Administration;