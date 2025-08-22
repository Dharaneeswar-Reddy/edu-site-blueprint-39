import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Calendar, Award, FileText, GraduationCap, CheckCircle, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Academics = () => {
  const undergraduatePrograms = [
    {
      title: "B.Sc Computer Science",
      duration: "3 Years",
      seats: 60,
      eligibility: "10+2 with Mathematics (Min 50%)",
      highlights: ["Programming Languages", "Data Structures", "Web Development", "Mobile App Development"]
    },
    {
      title: "B.Sc Mathematics",
      duration: "3 Years", 
      seats: 40,
      eligibility: "10+2 with Mathematics (Min 50%)",
      highlights: ["Pure Mathematics", "Applied Mathematics", "Statistics", "Mathematical Modeling"]
    },
    {
      title: "B.Sc Physics",
      duration: "3 Years",
      seats: 40,
      eligibility: "10+2 with Physics & Mathematics (Min 50%)",
      highlights: ["Classical Physics", "Quantum Mechanics", "Electronics", "Research Projects"]
    },
    {
      title: "B.Sc Chemistry", 
      duration: "3 Years",
      seats: 40,
      eligibility: "10+2 with Chemistry & Mathematics (Min 50%)",
      highlights: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Analytical Chemistry"]
    },
    {
      title: "B.Com",
      duration: "3 Years",
      seats: 120,
      eligibility: "10+2 in any stream (Min 45%)", 
      highlights: ["Accounting", "Business Management", "Economics", "Taxation"]
    },
    {
      title: "B.A English",
      duration: "3 Years",
      seats: 60,
      eligibility: "10+2 in any stream (Min 45%)",
      highlights: ["Literature Studies", "Communication Skills", "Creative Writing", "Linguistics"]
    }
  ];

  const postgraduatePrograms = [
    {
      title: "M.Sc Computer Science",
      duration: "2 Years",
      seats: 30,
      eligibility: "B.Sc Computer Science/Mathematics/Physics (Min 50%)",
      highlights: ["Advanced Programming", "AI & Machine Learning", "Cyber Security", "Research Methodology"]
    },
    {
      title: "M.Sc Mathematics",
      duration: "2 Years", 
      seats: 20,
      eligibility: "B.Sc Mathematics (Min 50%)",
      highlights: ["Abstract Algebra", "Real Analysis", "Topology", "Number Theory"]
    },
    {
      title: "M.Com",
      duration: "2 Years",
      seats: 40,
      eligibility: "B.Com/BBA (Min 50%)",
      highlights: ["Advanced Accounting", "Financial Management", "Business Analytics", "Research Methods"]
    }
  ];

  const admissionProcess = [
    {
      step: "1",
      title: "Application Submission",
      description: "Submit online application with required documents",
      timeline: "May - June",
      status: "active"
    },
    {
      step: "2", 
      title: "Entrance Examination",
      description: "Appear for entrance test (if applicable for the course)",
      timeline: "June - July",
      status: "upcoming"
    },
    {
      step: "3",
      title: "Merit List Publication", 
      description: "Check merit list and counseling schedule",
      timeline: "July",
      status: "upcoming"
    },
    {
      step: "4",
      title: "Counseling & Admission",
      description: "Attend counseling session and complete admission formalities",
      timeline: "July - August", 
      status: "upcoming"
    }
  ];

  const programStructure = {
    semester: [
      {
        sem: "Semester I & II",
        focus: "Foundation Courses",
        subjects: ["Core Subject Fundamentals", "Language & Communication", "Environmental Studies", "Value Education"],
        credits: "20-24 credits per semester"
      },
      {
        sem: "Semester III & IV", 
        focus: "Core Specialization",
        subjects: ["Advanced Core Subjects", "Elective Courses", "Practical/Lab Work", "Skill Enhancement"],
        credits: "20-24 credits per semester"
      },
      {
        sem: "Semester V & VI",
        focus: "Advanced Studies", 
        subjects: ["Specialization Papers", "Research Project", "Industrial Training", "Open Electives"],
        credits: "20-24 credits per semester"
      }
    ]
  };

  return (
    <PageLayout
      title="Academics"
      description="Comprehensive academic programs designed to foster intellectual growth and professional excellence"
    >
      <div className="space-y-12">
        {/* Programmes Offered */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Programmes Offered</h2>
          </div>
          
          <Tabs defaultValue="undergraduate" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="undergraduate">Undergraduate Programmes</TabsTrigger>
              <TabsTrigger value="postgraduate">Postgraduate Programmes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="undergraduate" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {undergraduatePrograms.map((program, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex justify-between items-start">
                        <span className="text-lg">{program.title}</span>
                        <Badge variant="secondary">{program.seats} Seats</Badge>
                      </CardTitle>
                      <CardDescription>
                        <div className="flex justify-between">
                          <span>Duration: {program.duration}</span>
                          <span className="text-blue-600 font-medium">UG Programme</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <p className="text-sm text-gray-700 font-medium">Eligibility:</p>
                        <p className="text-sm text-gray-600">{program.eligibility}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">Key Highlights:</p>
                        {program.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-sm text-gray-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="postgraduate" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {postgraduatePrograms.map((program, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex justify-between items-start">
                        <span className="text-lg">{program.title}</span>
                        <Badge variant="secondary">{program.seats} Seats</Badge>
                      </CardTitle>
                      <CardDescription>
                        <div className="flex justify-between">
                          <span>Duration: {program.duration}</span>
                          <span className="text-purple-600 font-medium">PG Programme</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <p className="text-sm text-gray-700 font-medium">Eligibility:</p>
                        <p className="text-sm text-gray-600">{program.eligibility}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">Key Highlights:</p>
                        {program.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-sm text-gray-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Program Structure */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-green-600" />
                Program Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Semester-Based Credit System</h3>
                  <p className="text-gray-700 mb-4">
                    Our programs follow the Choice Based Credit System (CBCS) as per UGC guidelines, providing flexibility and 
                    opportunities for students to customize their learning experience.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">6</div>
                      <div className="text-sm text-gray-600">Semesters (UG)</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">4</div>
                      <div className="text-sm text-gray-600">Semesters (PG)</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600">120-140</div>
                      <div className="text-sm text-gray-600">Total Credits</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {programStructure.semester.map((sem, index) => (
                    <div key={index} className="border-l-4 border-l-blue-200 pl-6 py-4 bg-gray-50 rounded-r-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{sem.sem}</h3>
                        <Badge variant="outline">{sem.credits}</Badge>
                      </div>
                      <p className="text-blue-600 font-medium mb-2">Focus: {sem.focus}</p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                        {sem.subjects.map((subject, idx) => (
                          <div key={idx} className="bg-white p-2 rounded text-sm text-gray-700">
                            {subject}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">Assessment Pattern</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Continuous Assessment (40%)</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Internal assignments and tests</li>
                        <li>• Practical/laboratory work</li>
                        <li>• Seminars and presentations</li>
                        <li>• Project work and viva voce</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Semester End Exam (60%)</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Written examination</li>
                        <li>• Practical examination</li>
                        <li>• Viva voce examination</li>
                        <li>• Project evaluation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Admission Process */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-purple-600" />
                Admission Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Step-by-Step Admission Guide</h3>
                  <p className="text-gray-700 mb-4">
                    Follow our streamlined admission process to secure your seat in SVRMC. We ensure transparency 
                    and fairness at every step of the admission procedure.
                  </p>
                </div>

                <div className="relative">
                  {/* Progress line */}
                  <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gray-200"></div>
                  
                  <div className="space-y-8">
                    {admissionProcess.map((step, index) => (
                      <div key={index} className="relative flex items-start">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-bold z-10 ${
                          step.status === 'active' ? 'bg-blue-600' : 
                          step.status === 'completed' ? 'bg-green-600' : 'bg-gray-400'
                        }`}>
                          {step.step}
                        </div>
                        <div className="ml-6 flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              {step.timeline}
                            </div>
                          </div>
                          <p className="text-gray-700">{step.description}</p>
                          {step.status === 'active' && (
                            <Badge className="mt-2 bg-blue-100 text-blue-800">Currently Active</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                  <h4 className="font-semibold text-yellow-800 mb-3">Important Information</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Required Documents</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 10th & 12th Mark Sheets and Certificates</li>
                        <li>• Transfer Certificate (TC)</li>
                        <li>• Community Certificate (if applicable)</li>
                        <li>• Income Certificate (for fee concession)</li>
                        <li>• Passport size photographs</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Contact Information</h5>
                      <div className="text-sm text-gray-700 space-y-2">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>Admissions Office: Main Building, Ground Floor</span>
                        </div>
                        <div>Phone: +91-8765432100</div>
                        <div>Email: admissions@svrmc.edu.in</div>
                        <div>Timing: 9:00 AM - 5:00 PM (Mon-Sat)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button size="lg" className="mr-4">
                    <Link to="/contact">Apply Now</Link>
                  </Button>
                  <Button size="lg" variant="outline">
                    <Link to="/contact">Contact Admissions</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>
    </PageLayout>
  );
};

export default Academics;