import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, FileText, Calendar, Target, Download, Activity, ClipboardList, BookOpen, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const IQAC = () => {
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

        {/* Minutes of IQAC */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <ClipboardList className="h-6 w-6 text-blue-600" />
                Minutes of IQAC Meetings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {minutes.map((minute, index) => (
                  <div key={index} className="border-l-4 border-l-blue-200 pl-6 py-4 bg-gray-50 rounded-r-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{minute.meeting}</h3>
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

        {/* Institutional Annual Plans */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-green-600" />
                Institutional Annual Plans
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-green-700">Academic Year 2024-25 Plans</h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-800">Academic Excellence</h4>
                      <ul className="text-sm text-gray-700 mt-2 space-y-1">
                        <li>• Curriculum revision as per NEP 2020</li>
                        <li>• Faculty development programmes (4 programmes planned)</li>
                        <li>• Student outcome assessment enhancement</li>
                        <li>• Digital learning resource development</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800">Infrastructure Development</h4>
                      <ul className="text-sm text-gray-700 mt-2 space-y-1">
                        <li>• Smart classroom upgradation (15 classrooms)</li>
                        <li>• Laboratory equipment modernization</li>
                        <li>• Campus WiFi network expansion</li>
                        <li>• Green campus initiatives</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-purple-700">Previous Year Achievements (2023-24)</h3>
                  <div className="space-y-3">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-800">Quality Initiatives</h4>
                      <ul className="text-sm text-gray-700 mt-2 space-y-1">
                        <li>• NAAC accreditation maintained with A+ grade</li>
                        <li>• 85% faculty completed certification courses</li>
                        <li>• Student satisfaction index: 4.2/5</li>
                        <li>• Research publications increased by 25%</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-medium text-orange-800">Resource Allocation</h4>
                      <ul className="text-sm text-gray-700 mt-2 space-y-1">
                        <li>• Budget allocation: ₹2.5 Cr for quality initiatives</li>
                        <li>• Faculty research seed fund: ₹15 Lakhs</li>
                        <li>• Infrastructure development: ₹1.8 Cr</li>
                        <li>• Student welfare schemes: ₹50 Lakhs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ATR (Action Taken Report) */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Activity className="h-6 w-6 text-orange-600" />
                Action Taken Reports (ATR)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-800 mb-4">ATR on NAAC Peer Team Recommendations (2023)</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Key Recommendations Addressed:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Enhanced research infrastructure - ₹50 Lakhs invested</li>
                        <li>• Faculty development programmes - 12 programmes conducted</li>
                        <li>• Industry-academia partnerships - 8 new MoUs signed</li>
                        <li>• Student support services - Expanded counseling facility</li>
                        <li>• ICT integration - 100% smart classrooms achieved</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Implementation Status:</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Completed Actions</span>
                          <Badge className="bg-green-100 text-green-800">18/20</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">In Progress</span>
                          <Badge className="bg-yellow-100 text-yellow-800">2/20</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Timeline Adherence</span>
                          <Badge className="bg-blue-100 text-blue-800">95%</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">ATR on Student Feedback Analysis (2023-24)</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">4.3/5</div>
                      <div className="text-sm text-gray-600">Overall Rating</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">92%</div>
                      <div className="text-sm text-gray-600">Response Rate</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600">15</div>
                      <div className="text-sm text-gray-600">Improvements Made</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Activities */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-purple-600" />
                IQAC Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-purple-700">{activity.title}</h3>
                      <span className="text-sm text-gray-500">{activity.date}</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>Participants:</strong> {activity.participants} faculty and students
                        </p>
                        <p className="text-sm text-gray-700">{activity.outcome}</p>
                      </div>
                      <div className="flex justify-end">
                        <Button size="sm" variant="outline">
                          <FileText className="h-4 w-4 mr-1" />
                          View Report
                        </Button>
                      </div>
                    </div>
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
                <FileText className="h-6 w-6 text-red-600" />
                Annual Quality Assurance Reports (AQARs)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aqarReports.map((report, index) => (
                  <div key={index} className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg border-l-4 border-red-400">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-red-800">AQAR {report.year}</h3>
                        <p className="text-sm text-red-600 font-medium">{report.status}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-600">{report.pages}</div>
                        <div className="text-sm text-gray-600">Pages</div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{report.highlights}</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Download AQAR
                      </Button>
                      <Button size="sm" variant="outline">
                        <FileText className="h-4 w-4 mr-1" />
                        View Summary
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

      </div>
    </PageLayout>
  );
};

export default IQAC;