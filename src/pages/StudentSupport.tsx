import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Users, Target, Award, Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const StudentSupport = () => {
  const [activeProgram, setActiveProgram] = useState("JKC");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const programs = [
    { name: "JKC", fullName: "Jeevan Kaushal Club", path: "/student-support/jkc" },
    { name: "NSS", fullName: "National Service Scheme", path: "/student-support/nss" },
    { name: "NCC", fullName: "National Cadet Corps", path: "/student-support/ncc" },
    { name: "Women Empowerment", fullName: "Women Empowerment Cell", path: "/student-support/women-empowerment" },
    { name: "ICC", fullName: "Internal Complaints Committee", path: "/student-support/icc" },
    { name: "Gym and Sports", fullName: "Physical Education & Sports", path: "/student-support/sports" },
    { name: "Anti-ragging", fullName: "Anti-Ragging Committee", path: "/student-support/anti-ragging" },
    { name: "Cultural Club", fullName: "Cultural Activities Club", path: "/student-support/cultural" },
    { name: "Consumer Club", fullName: "Consumer Awareness Club", path: "/student-support/consumer" },
    { name: "Eco-Club", fullName: "Environmental Club", path: "/student-support/eco" },
    { name: "Scholarships", fullName: "Scholarship & Financial Aid", path: "/student-support/scholarships" }
  ];

  // Sample data structure for each program
  const programData = {
    JKC: {
      about: "Jeevan Kaushal Club focuses on developing life skills and personality development among students through various workshops and training programs.",
      vision: "To empower students with essential life skills for holistic personality development.",
      mission: "Conducting skill development workshops, personality enhancement programs, and career guidance sessions.",
      objectives: [
        "Develop communication and interpersonal skills",
        "Enhance leadership qualities among students",
        "Provide career counseling and guidance",
        "Organize personality development workshops"
      ],
      yearlyReports: [
        { year: "2023-24", activities: 15, participants: 450, status: "Published" },
        { year: "2022-23", activities: 12, participants: 380, status: "Published" }
      ],
      staff: [
        { name: "Dr. Priya Sharma", designation: "Program Coordinator", department: "Psychology" },
        { name: "Prof. Rajesh Kumar", designation: "Assistant Coordinator", department: "English" }
      ],
      gallery: [
        "Workshop on Communication Skills",
        "Leadership Training Program",
        "Career Guidance Session",
        "Personality Development Workshop"
      ]
    },
    NSS: {
      about: "National Service Scheme promotes community service and social awareness among students through various outreach programs.",
      vision: "To develop social consciousness and civic responsibility among students.",
      mission: "Engaging students in community service and nation-building activities.",
      objectives: [
        "Foster community service spirit",
        "Develop social awareness and responsibility",
        "Promote national integration",
        "Encourage rural development activities"
      ],
      yearlyReports: [
        { year: "2023-24", activities: 25, participants: 350, status: "Published" },
        { year: "2022-23", activities: 22, participants: 320, status: "Published" }
      ],
      staff: [
        { name: "Dr. Suresh Kumar", designation: "NSS Program Officer", department: "Social Work" },
        { name: "Ms. Anita Reddy", designation: "Assistant Program Officer", department: "Sociology" }
      ],
      gallery: [
        "Village Adoption Program",
        "Swachh Bharat Campaign",
        "Blood Donation Drive",
        "Tree Plantation Drive"
      ]
    },
    NCC: {
      about: "National Cadet Corps trains students in military discipline, leadership, and character building through structured programs.",
      vision: "To develop qualities of character, courage, comradeship, discipline, leadership, and the spirit of adventure among youth.",
      mission: "Providing military training and developing leadership qualities among cadets.",
      objectives: [
        "Develop character and leadership",
        "Foster national unity and social cohesion",
        "Promote adventure and sportsmanship",
        "Build disciplined and patriotic citizens"
      ],
      yearlyReports: [
        { year: "2023-24", activities: 18, participants: 120, status: "Published" },
        { year: "2022-23", activities: 16, participants: 105, status: "Published" }
      ],
      staff: [
        { name: "Lt. Col. Rajesh Singh", designation: "NCC Officer", department: "Defense Studies" },
        { name: "Sgt. Priya Malhotra", designation: "Assistant NCC Officer", department: "Physical Education" }
      ],
      gallery: [
        "Annual Training Camp",
        "Republic Day Parade",
        "Adventure Training",
        "Shooting Competition"
      ]
    }
    // Add similar data for other programs...
  };

  const currentProgram = programData[activeProgram] || programData.JKC;

  return (
    <PageLayout 
      title="Student Support Services" 
      description="Comprehensive support programs for holistic student development and community engagement."
    >
      <div className="space-y-8">
        
        {/* Program Navigation Dropdown */}
        <div className="relative">
          <div 
            className="bg-white rounded-lg shadow-md p-4 cursor-pointer border-2 border-blue-100 hover:border-blue-300 transition-colors"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-blue-900">{activeProgram}</h2>
                <p className="text-gray-600">{programs.find(p => p.name === activeProgram)?.fullName}</p>
              </div>
              <ChevronDown className={`h-6 w-6 text-blue-600 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="grid grid-cols-2 gap-2 p-4">
                  {programs.map((program) => (
                    <button
                      key={program.name}
                      onClick={() => {
                        setActiveProgram(program.name);
                        setIsDropdownOpen(false);
                      }}
                      className={`text-left p-3 rounded-lg transition-colors hover:bg-blue-50 ${
                        activeProgram === program.name ? 'bg-blue-100 text-blue-900' : 'text-gray-700'
                      }`}
                    >
                      <div className="font-semibold">{program.name}</div>
                      <div className="text-sm text-gray-500">{program.fullName}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* About Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Users className="h-6 w-6 text-blue-600" />
              About {activeProgram}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-lg leading-relaxed">{currentProgram.about}</p>
          </CardContent>
        </Card>

        {/* Vision and Mission */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="h-6 w-6 text-green-600" />
                Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{currentProgram.vision}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Award className="h-6 w-6 text-purple-600" />
                Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{currentProgram.mission}</p>
            </CardContent>
          </Card>
        </div>

        {/* Objectives */}
        <Card>
          <CardHeader>
            <CardTitle>Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid md:grid-cols-2 gap-3">
              {currentProgram.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Target className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Yearly Reports */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-orange-600" />
              Yearly Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentProgram.yearlyReports.map((report, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-l-blue-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">{activeProgram} Annual Report {report.year}</h4>
                      <p className="text-sm text-gray-600">
                        {report.activities} Activities • {report.participants} Participants
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-500 text-white">{report.status}</Badge>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Staff Photos and Designation */}
        <Card>
          <CardHeader>
            <CardTitle>Program Staff</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {currentProgram.staff.map((member, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900">{member.name}</h4>
                    <p className="text-blue-600 text-sm">{member.designation}</p>
                    <p className="text-gray-600 text-sm">{member.department}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Photo Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>Photo Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentProgram.gallery.map((activity, index) => (
                <div key={index} className="bg-gray-100 aspect-square rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-full h-32 bg-gray-200 rounded-lg mb-2"></div>
                    <p className="text-sm text-gray-600">{activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default StudentSupport;