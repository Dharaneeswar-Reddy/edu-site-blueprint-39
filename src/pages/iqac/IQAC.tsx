import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, Users, FileText, Calendar, Target, Download, Activity, ClipboardList, BookOpen, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const IQAC = () => {
  // IQAC Committee Members
  const committeMembers = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Principal & Chairperson",
      department: "Administration",
      role: "Chairperson"
    },
    {
      name: "Dr. Priya Sharma", 
      designation: "Vice Principal",
      department: "Administration",
      role: "Coordinator"
    },
    {
      name: "Dr. Aalok Khandekar",
      designation: "Head of Department",
      department: "Computer Science",
      role: "Member"
    },
    {
      name: "Dr. Abhijit Sau",
      designation: "Assistant Professor",
      department: "Chemistry", 
      role: "Member"
    },
    {
      name: "Prof. Suresh Kumar",
      designation: "Senior Faculty",
      department: "Commerce",
      role: "Member"
    },
    {
      name: "Ms. Anita Reddy",
      designation: "Student Representative",
      department: "Final Year",
      role: "Student Member"
    }
  ];

  // IQAC Functions
  const iqacFunctions = [
    {
      title: "Quality Enhancement",
      description: "Development and application of quality benchmarks/parameters for various academic and administrative activities",
      icon: Target
    },
    {
      title: "Policy Development", 
      description: "Facilitating the creation of a learner-centric environment conducive to quality education",
      icon: BookOpen
    },
    {
      title: "Institutional Functioning",
      description: "Arrangement for feedback responses from students, parents and other stakeholders on quality-related institutional processes",
      icon: Users
    },
    {
      title: "Best Practices",
      description: "Dissemination of information on various quality parameters of higher education",
      icon: Award
    },
    {
      title: "Documentation",
      description: "Organization of inter and intra institutional workshops, seminars on quality related themes",
      icon: FileText
    },
    {
      title: "Continuous Monitoring",
      description: "Development and maintenance of institutional database through MIS for the purpose of maintaining /enhancing the institutional quality",
      icon: Activity
    }
  ];

  // Academic Audits Data
  const academicAudits = [
    {
      year: "2023-24",
      type: "Internal Academic Audit",
      status: "Completed",
      findings: "Overall compliance rate of 95% with recommendations for curriculum enhancement"
    },
    {
      year: "2022-23",
      type: "External Quality Audit", 
      status: "Completed",
      findings: "Excellent rating in teaching-learning processes and research activities"
    },
    {
      year: "2021-22",
      type: "Departmental Audit",
      status: "Completed", 
      findings: "Satisfactory performance across all departments with scope for improvement in laboratory facilities"
    }
  ];

  const aqarReports = [
    {
      year: "2023-24",
      status: "Draft Prepared",
      pages: 145,
      highlights: "Digital transformation initiatives, Research excellence, Industry collaborations"
    },
    {
      year: "2022-23", 
      status: "Submitted to NAAC",
      pages: 132,
      highlights: "Quality enhancement measures, Student outcomes, Infrastructure development"
    },
    {
      year: "2021-22",
      status: "Submitted to NAAC",
      pages: 118,
      highlights: "COVID-19 response, Online learning implementation, Faculty development"
    }
  ];

  const minutes = [
    {
      date: "March 15, 2024",
      meeting: "Monthly Review Meeting",
      agenda: "NAAC Preparation, Faculty Development, Infrastructure Assessment",
      decisions: 5
    },
    {
      date: "February 20, 2024", 
      meeting: "Academic Quality Review",
      agenda: "Curriculum Updates, Research Promotion, Student Feedback Analysis",
      decisions: 7
    },
    {
      date: "January 18, 2024",
      meeting: "Strategic Planning Session",
      agenda: "Annual Quality Plans, Best Practices Documentation, Industry Partnerships",
      decisions: 4
    }
  ];

  const activities = [
    {
      title: "Faculty Development Programme on Innovative Teaching Methods",
      date: "March 10-12, 2024",
      participants: 45,
      outcome: "Enhanced pedagogical skills of faculty members"
    },
    {
      title: "Student Feedback Analysis Workshop", 
      date: "February 25, 2024",
      participants: 25,
      outcome: "Improved feedback collection and analysis mechanisms"
    },
    {
      title: "Academic Audit and Quality Assessment",
      date: "February 15, 2024", 
      participants: 30,
      outcome: "Comprehensive quality assessment report prepared"
    },
    {
      title: "Research Methodology Workshop for PG Students",
      date: "January 28, 2024",
      participants: 60,
      outcome: "Enhanced research capabilities among postgraduate students"
    }
  ];

  return (
    <PageLayout 
      title="Internal Quality Assurance Cell (IQAC)" 
      description="Ensuring continuous improvement in academic and administrative performance through systematic quality enhancement initiatives."
    >
      <div className="space-y-12">
        
        {/* About IQAC */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <Award className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">About IQAC</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The Internal Quality Assurance Cell (IQAC) was established at SVRMC as per the guidelines of the National Assessment and Accreditation Council (NAAC) to ensure continuous quality improvement in all academic and administrative activities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                IQAC acts as a nodal agency for coordinating quality-related activities including adoption and dissemination of best practices within the institution. It channels the efforts and measures of an institution towards academic excellence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">2018</div>
                  <div className="text-sm text-gray-600">Established</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-green-600">12</div>
                  <div className="text-sm text-gray-600">Members</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">IQAC Objectives</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                  Develop quality benchmarks and parameters for various academic activities
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  Facilitate creation of learner-centric environment for quality education
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                  Promote measures for institutional functioning towards quality enhancement
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* IQAC Committee */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-6 w-6 text-blue-600" />
                IQAC Committee
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {committeMembers.map((member, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-l-blue-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">{member.name}</h4>
                        <p className="text-sm text-blue-600">{member.designation}</p>
                        <p className="text-sm text-gray-600">{member.department}</p>
                      </div>
                      <Badge variant="outline">{member.role}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Functions of IQAC */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="h-6 w-6 text-blue-600" />
                Functions of IQAC
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {iqacFunctions.map((func, index) => {
                  const IconComponent = func.icon;
                  return (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                      <IconComponent className="h-8 w-8 text-blue-600 mb-4" />
                      <h4 className="font-semibold text-gray-900 mb-2">{func.title}</h4>
                      <p className="text-sm text-gray-700">{func.description}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* IQAC Activities */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Activity className="h-6 w-6 text-blue-600" />
                IQAC Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{activity.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{activity.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{activity.participants} participants</span>
                          </div>
                        </div>
                        <p className="text-gray-700">{activity.outcome}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Minutes and ATR Combined */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <ClipboardList className="h-6 w-6 text-blue-600" />
                Minutes & ATR (Action Taken Report)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Recent IQAC Meeting Minutes</h3>
                {minutes.map((minute, index) => (
                  <div key={index} className="border-l-4 border-l-blue-200 pl-6 py-4 bg-gray-50 rounded-r-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{minute.meeting}</h4>
                      <span className="text-sm text-blue-600 font-medium">{minute.date}</span>
                    </div>
                    <p className="text-gray-700 mb-2">{minute.agenda}</p>
                    <div className="flex gap-4">
                      <Badge variant="secondary">{minute.decisions} Key Decisions</Badge>
                      <Button size="sm" variant="outline" className="ml-auto">
                        <Download className="h-4 w-4 mr-1" />
                        Download Minutes
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Academic Audits */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600" />
                Academic Audits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {academicAudits.map((audit, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-l-green-200">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{audit.type} ({audit.year})</h4>
                      <Badge className="bg-green-500 text-white">{audit.status}</Badge>
                    </div>
                    <p className="text-gray-700 text-sm">{audit.findings}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* AQARs */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-blue-600" />
                AQARs (Annual Quality Assurance Reports)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aqarReports.map((report, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-900">AQAR {report.year}</h4>
                        <p className="text-sm text-gray-600">{report.pages} pages</p>
                      </div>
                      <Badge variant={report.status === "Submitted to NAAC" ? "default" : "secondary"}>
                        {report.status}
                      </Badge>
                    </div>
                    <p className="text-gray-700 mb-4">{report.highlights}</p>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-1" />
                      Download AQAR
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* NIRF Reports */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                NIRF (National Institutional Ranking Framework)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-orange-900">NIRF Report 2023-24</h4>
                      <p className="text-sm text-gray-600">Overall Ranking Data</p>
                    </div>
                    <Badge variant="secondary">
                      Draft Ready
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-4">Teaching Learning & Resources, Research & Professional Practice, Graduation Outcomes</p>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-1" />
                    Download NIRF Data
                  </Button>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-orange-900">NIRF Report 2022-23</h4>
                      <p className="text-sm text-gray-600">Comprehensive Institutional Data</p>
                    </div>
                    <Badge className="bg-orange-500 text-white">
                      Submitted
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-4">Outreach & Inclusivity, Perception Score, Overall Performance Metrics</p>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-1" />
                    Download NIRF Data
                  </Button>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-orange-900">NIRF Report 2021-22</h4>
                      <p className="text-sm text-gray-600">Institution Performance Data</p>
                    </div>
                    <Badge className="bg-orange-500 text-white">
                      Submitted
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-4">Academic Excellence, Research Impact, Infrastructure Assessment</p>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-1" />
                    Download NIRF Data
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* NAAC Section Integrated */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Award className="h-6 w-6 text-blue-600" />
                NAAC (National Assessment and Accreditation Council)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Current Accreditation Status</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>NAAC Grade</span>
                        <Badge className="bg-green-500 text-white text-lg px-3 py-1">A+</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>CGPA</span>
                        <span className="font-bold text-lg text-green-600">3.42</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Valid Until</span>
                        <span className="font-medium">March 2029</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Quality Indicators</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Quality Indicators Met: 142/150</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-blue-500 mr-2" />
                        <span className="text-sm">Improvement: 0.28 points</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Documents Section - SSR, Grade Sheet, Certificate */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-blue-600" />
                Important Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Self Study Report (SSR)</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Comprehensive institutional evaluation report for NAAC accreditation process
                    </p>
                    <Button className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download SSR
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-green-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">NAAC Grade Sheet</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Official grading and assessment details from NAAC evaluation
                    </p>
                    <Button className="w-full" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      View Grade Sheet
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Accreditation Certificate</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Official NAAC accreditation certificate with A+ grade recognition
                    </p>
                    <Button className="w-full" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      View Certificate
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Student Satisfaction Survey */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-6 w-6 text-blue-600" />
                Student Satisfaction Survey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Annual Student Satisfaction Survey</h3>
                  <p className="text-gray-700 mb-4">
                    IQAC conducts comprehensive student satisfaction surveys to evaluate various aspects of institutional 
                    performance including curriculum, teaching-learning process, infrastructure, and student support services.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">87%</div>
                      <div className="text-sm text-gray-600">Overall Satisfaction</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">92%</div>
                      <div className="text-sm text-gray-600">Teaching Quality</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600">85%</div>
                      <div className="text-sm text-gray-600">Infrastructure</div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-900">SSS Report 2023-24</h4>
                        <p className="text-sm text-gray-600">1,247 Student Responses</p>
                      </div>
                      <Badge className="bg-blue-500 text-white">
                        Published
                      </Badge>
                    </div>
                    <p className="text-gray-700 mb-4">Comprehensive analysis of student feedback on curriculum design, faculty performance, and campus facilities.</p>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-1" />
                      Download Report
                    </Button>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-green-900">SSS Report 2022-23</h4>
                        <p className="text-sm text-gray-600">1,186 Student Responses</p>
                      </div>
                      <Badge className="bg-green-500 text-white">
                        Published
                      </Badge>
                    </div>
                    <p className="text-gray-700 mb-4">Student feedback analysis covering academic programs, co-curricular activities, and institutional governance.</p>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-1" />
                      Download Report
                    </Button>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Survey Parameters</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Curriculum Coverage & Relevance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Teaching Learning Process
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Internal Assessment System
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        College Infrastructure
                      </li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Support Services & Mentoring
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Placement & Career Guidance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Research & Innovation Culture
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Overall Campus Experience
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>
    </PageLayout>
  );
};

export default IQAC;