import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Award, Users, FileText, Calendar, Target, Download, Activity, ClipboardList, BookOpen, TrendingUp, Star, CheckCircle } from "lucide-react";
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

        {/* NAAC Section Integrated */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Star className="h-6 w-6 text-blue-600" />
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

      </div>
    </PageLayout>
  );
};

export default IQAC;