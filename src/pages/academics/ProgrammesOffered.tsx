import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, Download } from "lucide-react";

const ProgrammesOffered = () => {
  const departments = [
    {
      name: "Science Programs",
      color: "blue",
      programs: [
        {
          name: "B.Sc. Physics",
          duration: "3 Years",
          seats: "60",
          eligibility: "12th with Physics, Chemistry, Mathematics",
          specializations: ["Electronics", "Computer Applications", "Nuclear Physics"]
        },
        {
          name: "B.Sc. Chemistry", 
          duration: "3 Years",
          seats: "60",
          eligibility: "12th with Physics, Chemistry, Mathematics/Biology",
          specializations: ["Organic Chemistry", "Analytical Chemistry", "Environmental Chemistry"]
        },
        {
          name: "B.Sc. Computer Science",
          duration: "3 Years", 
          seats: "60",
          eligibility: "12th with Mathematics",
          specializations: ["Software Development", "Data Science", "Cybersecurity"]
        },
        {
          name: "B.Sc. Mathematics",
          duration: "3 Years",
          seats: "40", 
          eligibility: "12th with Mathematics",
          specializations: ["Statistics", "Operations Research", "Applied Mathematics"]
        }
      ]
    },
    {
      name: "Life Sciences",
      color: "green", 
      programs: [
        {
          name: "B.Sc. Botany",
          duration: "3 Years",
          seats: "40",
          eligibility: "12th with Biology, Chemistry",
          specializations: ["Plant Biotechnology", "Ecology", "Taxonomy"]
        },
        {
          name: "B.Sc. Zoology",
          duration: "3 Years",
          seats: "40",
          eligibility: "12th with Biology, Chemistry", 
          specializations: ["Animal Biotechnology", "Fisheries", "Entomology"]
        },
        {
          name: "B.Sc. Biotechnology",
          duration: "3 Years",
          seats: "30",
          eligibility: "12th with Biology, Chemistry, Physics/Mathematics",
          specializations: ["Medical Biotechnology", "Agricultural Biotechnology", "Industrial Biotechnology"]
        }
      ]
    },
    {
      name: "Commerce & Humanities",
      color: "purple",
      programs: [
        {
          name: "B.Com",
          duration: "3 Years", 
          seats: "120",
          eligibility: "12th with Commerce/Any stream",
          specializations: ["Accounting & Finance", "Banking", "Taxation"]
        },
        {
          name: "B.A. English",
          duration: "3 Years",
          seats: "60",
          eligibility: "12th any stream",
          specializations: ["Literature", "Linguistics", "Communication Skills"]
        },
        {
          name: "B.A. Telugu",
          duration: "3 Years",
          seats: "40", 
          eligibility: "12th any stream",
          specializations: ["Classical Literature", "Modern Literature", "Journalism"]
        }
      ]
    }
  ];

  const postgraduatePrograms = [
    {
      name: "M.Sc. Physics",
      duration: "2 Years",
      seats: "30",
      eligibility: "B.Sc. Physics with 50% marks"
    },
    {
      name: "M.Sc. Chemistry", 
      duration: "2 Years",
      seats: "30",
      eligibility: "B.Sc. Chemistry with 50% marks"
    },
    {
      name: "M.Sc. Computer Science",
      duration: "2 Years",
      seats: "30", 
      eligibility: "B.Sc. Computer Science/Mathematics with 50% marks"
    },
    {
      name: "M.Com",
      duration: "2 Years",
      seats: "60",
      eligibility: "B.Com with 50% marks"
    }
  ];

  return (
    <PageLayout 
      title="Programmes Offered" 
      description="Comprehensive list of undergraduate and postgraduate programs available at SVRMC."
    >
      <div className="space-y-8">
        
        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <BookOpen className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">14</h3>
              <p className="text-gray-600">Total Programs</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">670</h3>
              <p className="text-gray-600">Total Seats</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">10</h3>
              <p className="text-gray-600">UG Programs</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">4</h3>
              <p className="text-gray-600">PG Programs</p>
            </CardContent>
          </Card>
        </div>

        {/* Undergraduate Programs */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-college-blue">Undergraduate Programs</h2>
          
          {departments.map((dept, deptIndex) => (
            <Card key={deptIndex}>
              <CardHeader>
                <CardTitle className={`text-${dept.color}-700`}>{dept.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {dept.programs.map((program, index) => (
                    <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-semibold">{program.name}</h4>
                        <Badge variant="secondary">{program.seats} Seats</Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-medium">{program.duration}</span>
                        </div>
                        
                        <div>
                          <span className="text-gray-600">Eligibility:</span>
                          <p className="text-sm font-medium mt-1">{program.eligibility}</p>
                        </div>
                        
                        <div>
                          <span className="text-gray-600">Specializations:</span>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {program.specializations.map((spec, specIndex) => (
                              <Badge key={specIndex} variant="outline">{spec}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="mt-4 w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Download Syllabus
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Postgraduate Programs */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-college-blue">Postgraduate Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {postgraduatePrograms.map((program, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold">{program.name}</h4>
                    <Badge variant="secondary">{program.seats} Seats</Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    
                    <div>
                      <span className="text-gray-600">Eligibility:</span>
                      <p className="text-sm font-medium mt-1">{program.eligibility}</p>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="mt-4 w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Syllabus
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Admission Information */}
        <Card>
          <CardHeader>
            <CardTitle>Admission Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-blue-700">Application Process</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Online application submission</li>
                  <li>• Merit-based selection</li>
                  <li>• Document verification</li>
                  <li>• Fee payment</li>
                  <li>• Final admission confirmation</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-700">Important Dates</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Application Start: May 1, 2024</li>
                  <li>• Application End: June 30, 2024</li>
                  <li>• Merit List: July 15, 2024</li>
                  <li>• Counseling: July 20-25, 2024</li>
                  <li>• Classes Begin: August 1, 2024</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-700">Fee Structure</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• UG Programs: ₹15,000 - ₹25,000/year</li>
                  <li>• PG Programs: ₹18,000 - ₹30,000/year</li>
                  <li>• Laboratory Fee: ₹2,000 - ₹5,000/year</li>
                  <li>• Library Fee: ₹1,000/year</li>
                  <li>• Examination Fee: ₹1,500/semester</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Downloads */}
        <Card>
          <CardHeader>
            <CardTitle>Download Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span className="text-center">Prospectus 2024-25</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span className="text-center">Admission Guidelines</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span className="text-center">Fee Structure Details</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span className="text-center">Syllabus Documents</span>
              </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default ProgrammesOffered;