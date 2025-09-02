import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, Users, FileText, Calendar, Target, Download, Activity, ClipboardList, BookOpen, TrendingUp, CheckCircle, MessageSquare, GraduationCap, Building2, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIqacDocuments } from "@/hooks/useIqacDocuments";

const IQAC = () => {
  // Fetch documents from database
  const { documents: iqacMinutes, loading: minutesLoading } = useIqacDocuments('iqac_minutes');
  const { documents: aqarReports, loading: aqarLoading } = useIqacDocuments('aqar');
  const { documents: nirfReports, loading: nirfLoading } = useIqacDocuments('nirf');
  const { documents: naacRecords, loading: naacLoading } = useIqacDocuments('naac_records');
  const { documents: ssrDocuments, loading: ssrLoading } = useIqacDocuments('ssr');
  // Grade sheets and accreditation certificates hidden for future use
  // const { documents: gradeSheets, loading: gradeLoading } = useIqacDocuments('grade_sheet');
  // const { documents: accreditationCerts, loading: accreditationLoading } = useIqacDocuments('accreditation_certificate');
  const { documents: satisfactionSurveys, loading: surveyLoading } = useIqacDocuments('satisfaction_survey');
  const { documents: studentFeedback, loading: studentFeedbackLoading } = useIqacDocuments('feedback_student');
  const { documents: teacherFeedback, loading: teacherFeedbackLoading } = useIqacDocuments('feedback_teacher');
  const { documents: employerFeedback, loading: employerFeedbackLoading } = useIqacDocuments('feedback_employer');
  const { documents: alumniFeedback, loading: alumniFeedbackLoading } = useIqacDocuments('feedback_alumni');

  // IQAC Committee Members
  const committeMembers = [
    {
      name: "Dr. A. Hari Krishna",
      designation: "Principal",
      department: "Administration",
      role: "Chairperson, Head of the Institution"
    },
    {
      name: "Dr. R. Prasanna Babu", 
      designation: "HoD of Chemistry (UG)",
      department: "Chemistry",
      role: "IQAC Coordinator"
    },
    {
      name: "Sri. P. Venkata Narayana",
      designation: "Vice Principal",
      department: "Administration", 
      role: "Senior Faculty Member"
    },
    {
      name: "Dr. P. Srinivasa Rao",
      designation: "HOD, Physics",
      department: "Physics",
      role: "Faculty Member"
    },
    {
      name: "Dr. K. Suresh Babu",
      designation: "HOD, Zoology",
      department: "Zoology",
      role: "Faculty Member"
    },
    {
      name: "Dr. Prakash Babu",
      designation: "HOD, Economics",
      department: "Economics",
      role: "Faculty Member"
    },
    {
      name: "Dr. A. Koteswara Rao",
      designation: "HOD, Chemistry (PG)",
      department: "Chemistry",
      role: "Faculty Member"
    },
    {
      name: "Mr. U. Siva Prasad",
      designation: "HOD, Mathematics",
      department: "Mathematics",
      role: "Faculty Member"
    },
    {
      name: "Mr. P. Amaresh Reddy",
      designation: "Administrative Officer",
      department: "Administration",
      role: "Administrative Staff"
    },
    {
      name: "Sri. V. Vishnu Vardhan Rao",
      designation: "Alumni Representative",
      department: "Alumni",
      role: "Alumni Member"
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
          
          {/* Vision */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Vision</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed">
                To ensure quality culture as the prime concern of Shree Velagapudi Ramakrishna Memorial College, through institutionalizing and internalizing all the initiatives taken with internal and external support. The IQAC envisions promoting a learner-centric environment, fostering innovation, inclusivity, and excellence in higher education to transform students into responsible global citizens.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Mission</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                  To develop a system for conscious, consistent, and catalytic action to improve the academic and administrative performance of the institution.
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  To promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.
                </li>
                <li className="flex items-start">
                  <GraduationCap className="h-5 w-5 text-purple-500 mt-0.5 mr-3 flex-shrink-0" />
                  To ensure learner-centric teaching, innovative pedagogy, and holistic development of students.
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  To enhance research culture, collaborations, and community engagement for societal development.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                  To nurture values of integrity, equity, inclusiveness, and sustainability in higher education.
                </li>
              </ul>
            </div>
          </div>

          {/* Objectives */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Objectives</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                  To develop a quality system for conscious, consistent, and catalytic programmed action to improve the academic and administrative performance of the College.
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  To promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-purple-500 mt-0.5 mr-3 flex-shrink-0" />
                  To enhance curriculum design, teaching-learning evaluation, and support services to meet the needs of stakeholders.
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0" />
                  To encourage faculty development, research, consultancy, and extension activities.
                </li>
                <li className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                  To strengthen feedback mechanisms for continuous improvement of academic and administrative units.
                </li>
                <li className="flex items-start">
                  <Building2 className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                  To prepare the institution for assessment, accreditation, and quality benchmarking at national and international levels.
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">2018</div>
              <div className="text-sm text-gray-600">Established</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-green-600">10</div>
              <div className="text-sm text-gray-600">Members</div>
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

        {/* IQAC Meeting Minutes */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <ClipboardList className="h-6 w-6 text-blue-600" />
                IQAC Meeting Minutes
              </CardTitle>
            </CardHeader>
            <CardContent>
              {minutesLoading ? (
                <div className="text-center py-4">Loading minutes...</div>
              ) : iqacMinutes.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No meeting minutes available yet.
                </div>
              ) : (
                <div className="space-y-4">
                  {iqacMinutes.map((minute) => (
                    <div key={minute.id} className="border-l-4 border-l-blue-200 pl-6 py-4 bg-gray-50 rounded-r-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{minute.title}</h4>
                        <span className="text-sm text-blue-600 font-medium">
                          {new Date(minute.uploaded_at).toLocaleDateString()}
                        </span>
                      </div>
                      {minute.description && (
                        <p className="text-gray-700 mb-2">{minute.description}</p>
                      )}
                      <div className="flex gap-4">
                        {minute.academic_year && (
                          <Badge variant="secondary">{minute.academic_year}</Badge>
                        )}
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="ml-auto"
                          onClick={() => window.open(minute.file_url, '_blank')}
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download Minutes
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
              {aqarLoading ? (
                <div className="text-center py-4">Loading AQAR reports...</div>
              ) : aqarReports.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No AQAR reports available yet.
                </div>
              ) : (
                <div className="space-y-4">
                  {aqarReports.map((report) => (
                    <div key={report.id} className="bg-blue-50 p-6 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-blue-900">{report.title}</h4>
                          {report.academic_year && (
                            <p className="text-sm text-gray-600">Academic Year: {report.academic_year}</p>
                          )}
                        </div>
                        <Badge variant="default">
                          Available
                        </Badge>
                      </div>
                      {report.description && (
                        <p className="text-gray-700 mb-4">{report.description}</p>
                      )}
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(report.file_url, '_blank')}
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download AQAR
                      </Button>
                    </div>
                  ))}
                </div>
              )}
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
              {nirfLoading ? (
                <div className="text-center py-4">Loading NIRF reports...</div>
              ) : nirfReports.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No NIRF reports available yet.
                </div>
              ) : (
                <div className="space-y-4">
                  {nirfReports.map((report) => (
                    <div key={report.id} className="bg-orange-50 p-6 rounded-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-orange-900">{report.title}</h4>
                          {report.academic_year && (
                            <p className="text-sm text-gray-600">Academic Year: {report.academic_year}</p>
                          )}
                        </div>
                        <Badge variant="secondary">
                          Available
                        </Badge>
                      </div>
                      {report.description && (
                        <p className="text-gray-700 mb-4">{report.description}</p>
                      )}
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open(report.file_url, '_blank')}
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download NIRF Data
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* NAAC Records */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Award className="h-6 w-6 text-blue-600" />
                NAAC Records & Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              {naacLoading ? (
                <div className="text-center py-4">Loading NAAC records...</div>
              ) : naacRecords.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No NAAC records available yet.
                </div>
              ) : (
                <div className="grid gap-4">
                  {naacRecords.map((record) => (
                    <div key={record.id} className="bg-green-50 p-4 rounded-lg border-l-4 border-l-green-200">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-900">{record.title}</h4>
                          {record.academic_year && (
                            <p className="text-sm text-green-600">{record.academic_year}</p>
                          )}
                          {record.description && (
                            <p className="text-sm text-gray-600 mt-1">{record.description}</p>
                          )}
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => window.open(record.file_url, '_blank')}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* SSR Documents */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-blue-600" />
                Self Study Report (SSR)
              </CardTitle>
            </CardHeader>
            <CardContent>
              {ssrLoading ? (
                <div className="text-center py-4">Loading SSR documents...</div>
              ) : ssrDocuments.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No SSR documents available yet.
                </div>
              ) : (
                <div className="grid gap-4">
                  {ssrDocuments.map((doc) => (
                    <div key={doc.id} className="bg-purple-50 p-4 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-purple-900">{doc.title}</h4>
                          {doc.academic_year && (
                            <p className="text-sm text-purple-600">{doc.academic_year}</p>
                          )}
                          {doc.description && (
                            <p className="text-sm text-gray-600 mt-1">{doc.description}</p>
                          )}
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => window.open(doc.file_url, '_blank')}
                        >
                          <Download className="h-4 w-4 mr-1" />
                          View SSR
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Satisfaction Surveys */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-blue-600" />
                Student Satisfaction Survey Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              {surveyLoading ? (
                <div className="text-center py-4">Loading survey reports...</div>
              ) : satisfactionSurveys.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No satisfaction survey reports available yet.
                </div>
              ) : (
                <div className="grid gap-4">
                  {satisfactionSurveys.map((survey) => (
                    <div key={survey.id} className="bg-indigo-50 p-4 rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-indigo-900">{survey.title}</h4>
                          {survey.academic_year && (
                            <p className="text-sm text-indigo-600">{survey.academic_year}</p>
                          )}
                          {survey.description && (
                            <p className="text-sm text-gray-600 mt-1">{survey.description}</p>
                          )}
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => window.open(survey.file_url, '_blank')}
                        >
                          <Download className="h-4 w-4 mr-1" />
                          View Report
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Feedback Section */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-blue-600" />
                Curriculum Feedback Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="students">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="students">Students</TabsTrigger>
                  <TabsTrigger value="teachers">Teachers</TabsTrigger>
                  <TabsTrigger value="employers">Employers</TabsTrigger>
                  <TabsTrigger value="alumni">Alumni</TabsTrigger>
                </TabsList>
                
                <TabsContent value="students" className="mt-4">
                  {studentFeedbackLoading ? (
                    <div className="text-center py-4">Loading student feedback...</div>
                  ) : studentFeedback.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No student feedback reports available yet.
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      {studentFeedback.map((feedback) => (
                        <div key={feedback.id} className="bg-blue-50 p-4 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-blue-900">{feedback.title}</h4>
                              {feedback.academic_year && (
                                <p className="text-sm text-blue-600">{feedback.academic_year}</p>
                              )}
                              {feedback.description && (
                                <p className="text-sm text-gray-600 mt-1">{feedback.description}</p>
                              )}
                            </div>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => window.open(feedback.file_url, '_blank')}
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="teachers" className="mt-4">
                  {teacherFeedbackLoading ? (
                    <div className="text-center py-4">Loading teacher feedback...</div>
                  ) : teacherFeedback.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No teacher feedback reports available yet.
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      {teacherFeedback.map((feedback) => (
                        <div key={feedback.id} className="bg-green-50 p-4 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-green-900">{feedback.title}</h4>
                              {feedback.academic_year && (
                                <p className="text-sm text-green-600">{feedback.academic_year}</p>
                              )}
                              {feedback.description && (
                                <p className="text-sm text-gray-600 mt-1">{feedback.description}</p>
                              )}
                            </div>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => window.open(feedback.file_url, '_blank')}
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="employers" className="mt-4">
                  {employerFeedbackLoading ? (
                    <div className="text-center py-4">Loading employer feedback...</div>
                  ) : employerFeedback.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No employer feedback reports available yet.
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      {employerFeedback.map((feedback) => (
                        <div key={feedback.id} className="bg-orange-50 p-4 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-orange-900">{feedback.title}</h4>
                              {feedback.academic_year && (
                                <p className="text-sm text-orange-600">{feedback.academic_year}</p>
                              )}
                              {feedback.description && (
                                <p className="text-sm text-gray-600 mt-1">{feedback.description}</p>
                              )}
                            </div>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => window.open(feedback.file_url, '_blank')}
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="alumni" className="mt-4">
                  {alumniFeedbackLoading ? (
                    <div className="text-center py-4">Loading alumni feedback...</div>
                  ) : alumniFeedback.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No alumni feedback reports available yet.
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      {alumniFeedback.map((feedback) => (
                        <div key={feedback.id} className="bg-purple-50 p-4 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-purple-900">{feedback.title}</h4>
                              {feedback.academic_year && (
                                <p className="text-sm text-purple-600">{feedback.academic_year}</p>
                              )}
                              {feedback.description && (
                                <p className="text-sm text-gray-600 mt-1">{feedback.description}</p>
                              )}
                            </div>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => window.open(feedback.file_url, '_blank')}
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

      </div>
    </PageLayout>
  );
};

export default IQAC;