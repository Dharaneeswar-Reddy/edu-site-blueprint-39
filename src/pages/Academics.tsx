import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Calendar, Award, FileText, GraduationCap, CheckCircle, Clock, MapPin, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useAcademicCalendar } from "@/hooks/useAcademicCalendar";
const Academics = () => {
  const {
    latestCalendar,
    loading: calendarLoading,
    error: calendarError
  } = useAcademicCalendar();
  const undergraduatePrograms = [{
    title: "B.Sc Computer Science",
    designation: "Honors",
    duration: "3 Years",
    seats: 88,
    eligibility: "10+2 with Mathematics (Min 50%)",
    highlights: ["Programming Languages", "Data Structures", "Web Development", "Mobile App Development", "Machine learning"]
  }, {
    title: "BCA Computer Applications",
    designation: "Honors",
    duration: "3 Years",
    seats: 100,
    eligibility: "10+2 with Mathematics (Min 50%)",
    highlights: ["Programming Languages", "Data Structures", "Web Development", "Mobile App Development", "Machine learning", "Internet of Things"]
  }, {
    title: "B.Sc Electronics",
    designation: "Honors",
    duration: "3 Years",
    seats: 30,
    eligibility: "10+2 with Mathematics (Min 50%)",
    highlights: ["Computer Networks", "Industrial Electronics", "Cellular Mobile Communications", "Circuit theory and Electronic Devices", "Digital Electronics"]
  }, {
    title: "B.Sc Chemistry",
    designation: "Honors",
    duration: "3 Years",
    seats: 40,
    eligibility: "10+2 with Chemistry & Mathematics (Min 50%)",
    highlights: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Analytical Chemistry"]
  }, {
    title: "B.Com General",
    designation: "Honors",
    duration: "3 Years",
    seats: 60,
    eligibility: "10+2 in any stream (Min 45%)",
    highlights: ["Accounting", "Business Management", "Economics", "Taxation"]
  }, {
    title: "B.Com Computer Applications",
    designation: "Honors",
    duration: "3 Years",
    seats: 40,
    eligibility: "10+2 in any stream (Min 45%)",
    highlights: ["Accounting", "Business Management", "Economics", "Taxation", "E-Commerce and Web Designing", "Digital Marketing"]
  }, {
    title: "B.A Political Science",
    designation: "Honors",
    duration: "3 Years",
    seats: 60,
    eligibility: "10+2 in any stream (Min 45%)",
    highlights: ["Literature Studies", "Communication Skills", "Creative Writing", "Linguistics"]
  }, {
    title: "B.Sc Zoology",
    designation: "Honors",
    duration: "3 Years",
    seats: 30,
    eligibility: "10+2 with Biology/Botany (Min 50%)",
    highlights: ["Animal Biotechnology", "Sustainable Aquaculture Management", "Poultry Management"]
  }, {
    title: "B.Sc Aqua Culture",
    designation: "Honors",
    duration: "3 Years",
    seats: 30,
    eligibility: "10+2 with Biology/Botany (Min 50%)",
    highlights: ["Harvest Technology", "Fishery Engineering", "Extension, Economics & Marketing"]
  }];
  const postgraduatePrograms = [{
    title: "M.Sc Mathematics",
    duration: "2 Years",
    seats: 40,
    eligibility: "B.Sc Mathematics (Min 50%)",
    highlights: ["Non-Competitive Rings", "Partial differential equations", "Galois theory", "Measure and integration", "Complex Analysis"]
  }, {
    title: "M.Sc Analytical Chemistry",
    duration: "2 Years",
    seats: 36,
    eligibility: "B.Sc Chemistry (Min 50%)",
    highlights: ["Principles and techniques in Classical analysis", "Applied Inorganic Analysis", "Analysis of Applied Industrial Products", "Optical, Thermal and Radiochemical methods of Analysis", "Advanced Methods of Analysis"]
  }, {
    title: "M.Sc Organic Chemistry",
    duration: "2 Years",
    seats: 36,
    eligibility: "B.Sc Chemistry (Min 50%)",
    highlights: ["Organic Synthesis & Reaction Mechanisms", "Chemistry of Alkaloids, Terpenoids, Quinones and Phenothiazines", "Chemistry of Natural Products", "Chemistry of Antibiotics and Drugs", "Essential Lab Techniques for Industry"]
  }];
  const admissionProcess = [{
    step: "1",
    title: "Application Submission",
    description: "Submit online application with required documents",
    timeline: "May - June",
    status: "active"
  }, {
    step: "2",
    title: "Entrance Examination",
    description: "Appear for entrance test (if applicable for the course)",
    timeline: "June - July",
    status: "upcoming"
  }, {
    step: "3",
    title: "Merit List Publication",
    description: "Check merit list and counseling schedule",
    timeline: "July",
    status: "upcoming"
  }, {
    step: "4",
    title: "Counseling & Admission",
    description: "Attend counseling session and complete admission formalities",
    timeline: "July - August",
    status: "upcoming"
  }];
  const programStructure = {
    semester: [{
      sem: "Semester I & II",
      focus: "Foundation Courses",
      subjects: ["Core Subject Fundamentals", "Language & Communication", "Environmental Studies", "Value Education"],
      credits: "20-24 credits per semester"
    }, {
      sem: "Semester III & IV",
      focus: "Core Specialization",
      subjects: ["Advanced Core Subjects", "Elective Courses", "Practical/Lab Work", "Skill Enhancement"],
      credits: "20-24 credits per semester"
    }, {
      sem: "Semester V & VI",
      focus: "Advanced Studies",
      subjects: ["Specialization Papers", "Research Project", "Industrial Training", "Open Electives"],
      credits: "20-24 credits per semester"
    }]
  };
  return <PageLayout title="Academics" description="Comprehensive academic programs designed to foster intellectual growth and professional excellence">
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
                {undergraduatePrograms.map((program, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex justify-between items-start">
                        <span className="text-lg">{program.title} {program.designation}</span>
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
                        {program.highlights.map((highlight, idx) => <div key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-sm text-gray-600">{highlight}</span>
                          </div>)}
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </TabsContent>
            
            <TabsContent value="postgraduate" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {postgraduatePrograms.map((program, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
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
                        {program.highlights.map((highlight, idx) => <div key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-sm text-gray-600">{highlight}</span>
                          </div>)}
                      </div>
                    </CardContent>
                  </Card>)}
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
                      <div className="text-2xl font-bold text-purple-600">126</div>
                      <div className="text-sm text-gray-600">Total Credits</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {programStructure.semester.map((sem, index) => <div key={index} className="border-l-4 border-l-blue-200 pl-6 py-4 bg-gray-50 rounded-r-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{sem.sem}</h3>
                        <Badge variant="outline">{sem.credits}</Badge>
                      </div>
                      <p className="text-blue-600 font-medium mb-2">Focus: {sem.focus}</p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                        {sem.subjects.map((subject, idx) => <div key={idx} className="bg-white p-2 rounded text-sm text-gray-700">
                            {subject}
                          </div>)}
                      </div>
                    </div>)}
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-3">Assessment Pattern</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Continuous Assessment (30%)</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Internal assignments and tests</li>
                        <li>• Practical/laboratory work</li>
                        <li>• Seminars and presentations</li>
                        <li>• Project work and viva voce</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Semester End Exam (70%)</h5>
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

        {/* Program Outcomes */}
        <section>
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Award className="h-6 w-6 text-green-600" />
                Program Outcomes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-700">
                  Our academic programs are designed to achieve specific learning outcomes that prepare students 
                  for successful careers and lifelong learning. Each program has well-defined outcomes that align 
                  with industry requirements and global standards.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Knowledge & Skills</h4>
                        <p className="text-sm text-gray-600">Comprehensive understanding</p>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Domain-specific knowledge</li>
                      <li>• Problem-solving abilities</li>
                      <li>• Analytical thinking</li>
                      <li>• Technical proficiency</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Professional Skills</h4>
                        <p className="text-sm text-gray-600">Industry readiness</p>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Communication skills</li>
                      <li>• Teamwork & collaboration</li>
                      <li>• Leadership qualities</li>
                      <li>• Project management</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Award className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Life Skills</h4>
                        <p className="text-sm text-gray-600">Personal development</p>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Ethical reasoning</li>
                      <li>• Lifelong learning</li>
                      <li>• Social responsibility</li>
                      <li>• Global awareness</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <Link to="/academics/program-outcomes">
                    
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Academic Calendar */}
        <section>
          <Card className="bg-gradient-to-br from-orange-50 to-amber-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-orange-600" />
                Academic Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-gray-700">
                  Our academic calendar is structured to provide optimal learning opportunities while ensuring 
                  adequate time for assessments, examinations, and academic activities throughout the year.
                </p>
                
                {/* Latest Academic Calendar Download */}
                {calendarLoading ? <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="animate-pulse">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div> : calendarError ? <div className="bg-red-50 p-6 rounded-lg shadow-sm border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-800 mb-2">Unable to Load Academic Calendar</h4>
                    <p className="text-sm text-red-600">{calendarError}</p>
                  </div> : latestCalendar ? <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-400">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <FileText className="h-5 w-5 text-orange-600" />
                          {latestCalendar.title}
                        </h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          {latestCalendar.academic_year && <p><strong>Academic Year:</strong> {latestCalendar.academic_year}</p>}
                          {latestCalendar.semester && <p><strong>Semester:</strong> {latestCalendar.semester}</p>}
                          {latestCalendar.department && <p><strong>Department:</strong> {latestCalendar.department}</p>}
                          <p><strong>Uploaded:</strong> {new Date(latestCalendar.uploaded_at).toLocaleDateString()}</p>
                          {latestCalendar.description && <p className="mt-2 text-gray-700">{latestCalendar.description}</p>}
                        </div>
                      </div>
                      <div className="ml-4 flex flex-col gap-2">
                        <Button asChild size="sm" className="bg-orange-600 hover:bg-orange-700">
                          <a href={latestCalendar.file_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            Download
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild className="border-orange-600 text-orange-600 hover:bg-orange-50">
                          <a href={latestCalendar.file_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <ExternalLink className="h-4 w-4" />
                            View
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div> : <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-700 mb-2">Academic Calendar</h4>
                    <p className="text-sm text-gray-600">No academic calendar available. Please check back later or contact the administration.</p>
                  </div>}

                <div className="grid md:grid-cols-2 gap-6">
                  
                  
                  
                </div>
                
                
                
                <div className="text-center">
                  <Link to="/academic-calendar">
                    
                  </Link>
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
                    {admissionProcess.map((step, index) => <div key={index} className="relative flex items-start">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-bold z-10 ${step.status === 'active' ? 'bg-blue-600' : step.status === 'completed' ? 'bg-green-600' : 'bg-gray-400'}`}>
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
                          {step.status === 'active' && <Badge className="mt-2 bg-blue-100 text-blue-800">Currently Active</Badge>}
                        </div>
                      </div>)}
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
    </PageLayout>;
};
export default Academics;