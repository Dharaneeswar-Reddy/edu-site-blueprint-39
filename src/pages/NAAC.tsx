import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Award, FileText, TrendingUp, Users, Target, CheckCircle, Calendar, Star } from "lucide-react";

const NAAC = () => {
  const criteriaScores = [
    { criteria: "Curricular Aspects", score: 3.2, maxScore: 4.0 },
    { criteria: "Teaching-Learning and Evaluation", score: 3.4, maxScore: 4.0 },
    { criteria: "Research, Innovations and Extension", score: 3.0, maxScore: 4.0 },
    { criteria: "Infrastructure and Learning Resources", score: 3.3, maxScore: 4.0 },
    { criteria: "Student Support and Progression", score: 3.1, maxScore: 4.0 },
    { criteria: "Governance, Leadership and Management", score: 3.2, maxScore: 4.0 },
    { criteria: "Institutional Values and Best Practices", score: 3.4, maxScore: 4.0 }
  ];

  const accreditationHistory = [
    {
      cycle: "3rd Cycle",
      year: "2023",
      grade: "A",
      cgpa: 3.2,
      validity: "2023-2028",
      status: "Current"
    },
    {
      cycle: "2nd Cycle", 
      year: "2017",
      grade: "B+",
      cgpa: 2.8,
      validity: "2017-2022",
      status: "Completed"
    },
    {
      cycle: "1st Cycle",
      year: "2012", 
      grade: "B",
      cgpa: 2.4,
      validity: "2012-2017",
      status: "Completed"
    }
  ];

  const bestPractices = [
    {
      title: "Green Campus Initiative",
      description: "Comprehensive environmental conservation program including waste management, energy conservation, and biodiversity preservation.",
      impact: "50% reduction in carbon footprint, 100% waste segregation"
    },
    {
      title: "Student Mentorship Program",
      description: "Structured mentoring system connecting senior students and alumni with junior students for academic and career guidance.",
      impact: "90% student satisfaction, improved academic performance"
    },
    {
      title: "Industry-Academia Partnership",
      description: "Collaborative programs with leading industries for curriculum development, internships, and placement opportunities.",
      impact: "85% placement rate, industry-relevant curriculum"
    }
  ];

  const peerTeamReport = {
    visitDate: "March 15-17, 2023",
    chairperson: "Prof. Dr. Rajesh Kumar",
    members: [
      "Prof. Dr. Sunita Sharma (Academic Expert)",
      "Dr. Arun Patel (Administrative Expert)", 
      "Prof. Dr. Meera Nair (Student Support Expert)"
    ],
    keyStrengths: [
      "Strong academic programs with outcome-based education",
      "Excellent infrastructure and learning resources",
      "Active student support services and progression tracking",
      "Effective governance and leadership structure"
    ],
    recommendationsImplemented: [
      "Enhanced research facilities and funding support",
      "Strengthened industry collaboration programs",
      "Improved digital infrastructure for online learning",
      "Expanded student counseling and support services"
    ]
  };

  const qualityIndicators = [
    { indicator: "Student Enrollment", value: "5,247", trend: "up" },
    { indicator: "Faculty-Student Ratio", value: "1:18", trend: "stable" },
    { indicator: "PhD Faculty", value: "65%", trend: "up" },
    { indicator: "Research Publications", value: "187", trend: "up" },
    { indicator: "Placement Rate", value: "78%", trend: "up" },
    { indicator: "Alumni Satisfaction", value: "92%", trend: "up" }
  ];

  return (
    <PageLayout
      title="National Assessment and Accreditation Council (NAAC)"
      description="NAAC accreditation details, assessment reports, and quality enhancement initiatives at SVRMC"
    >
      <div className="space-y-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="assessment">Assessment</TabsTrigger>
            <TabsTrigger value="criteria">Criteria Wise</TabsTrigger>
            <TabsTrigger value="practices">Best Practices</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Current Accreditation Status */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Award className="h-8 w-8 text-green-600" />
                  Current NAAC Accreditation Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div className="text-4xl font-bold text-green-600 mb-2">A</div>
                    <div className="text-lg font-semibold text-gray-900">Grade</div>
                    <div className="text-sm text-gray-600">3rd Cycle</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">3.2</div>
                    <div className="text-lg font-semibold text-gray-900">CGPA</div>
                    <div className="text-sm text-gray-600">Out of 4.0</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-purple-600 mb-2">2023</div>
                    <div className="text-lg font-semibold text-gray-900">Accredited</div>
                    <div className="text-sm text-gray-600">Latest Year</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-orange-600 mb-2">2028</div>
                    <div className="text-lg font-semibold text-gray-900">Valid Till</div>
                    <div className="text-sm text-gray-600">5 Years</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About NAAC */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-blue-600" />
                  About NAAC Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The National Assessment and Accreditation Council (NAAC) is an autonomous body established by the 
                  University Grants Commission (UGC) to assess and accredit higher education institutions in India. 
                  SVRMC underwent its third cycle of assessment and achieved 'A' grade accreditation.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Quality Assurance</h3>
                    <p className="text-sm text-gray-600 mt-1">Ensures maintenance of quality standards in education</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Continuous Improvement</h3>
                    <p className="text-sm text-gray-600 mt-1">Promotes culture of excellence and innovation</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Stakeholder Confidence</h3>
                    <p className="text-sm text-gray-600 mt-1">Builds trust among students, parents, and employers</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quality Indicators */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  Key Quality Indicators
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {qualityIndicators.map((indicator, index) => (
                    <div key={index} className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex justify-center mb-2">
                        <TrendingUp className={`h-6 w-6 ${indicator.trend === 'up' ? 'text-green-600' : 'text-blue-600'}`} />
                      </div>
                      <div className="text-xl font-bold text-gray-900">{indicator.value}</div>
                      <div className="text-sm text-gray-600">{indicator.indicator}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assessment" className="space-y-6">
            {/* Accreditation History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  Accreditation History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {accreditationHistory.map((record, index) => (
                    <Card key={index} className={`border-l-4 ${record.status === 'Current' ? 'border-l-green-500 bg-green-50' : 'border-l-gray-400'}`}>
                      <CardContent className="p-6">
                        <div className="grid md:grid-cols-6 gap-4 items-center">
                          <div>
                            <div className="font-semibold text-gray-900">{record.cycle}</div>
                            <div className="text-sm text-gray-600">{record.year}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{record.grade}</div>
                            <div className="text-xs text-gray-600">Grade</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-green-600">{record.cgpa}</div>
                            <div className="text-xs text-gray-600">CGPA</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm font-medium text-gray-900">{record.validity}</div>
                            <div className="text-xs text-gray-600">Validity</div>
                          </div>
                          <div className="text-center">
                            <Badge variant={record.status === 'Current' ? 'default' : 'secondary'}>
                              {record.status}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Peer Team Visit */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-blue-600" />
                  Peer Team Visit (3rd Cycle)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Visit Details</h3>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">Date:</span> {peerTeamReport.visitDate}</div>
                      <div><span className="font-medium">Chairperson:</span> {peerTeamReport.chairperson}</div>
                    </div>
                    
                    <h4 className="font-semibold mt-4 mb-2">Peer Team Members</h4>
                    <ul className="text-sm space-y-1">
                      {peerTeamReport.members.map((member, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Star className="h-3 w-3 text-yellow-500" />
                          {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">Key Strengths Identified</h3>
                    <ul className="space-y-2 text-sm">
                      {peerTeamReport.keyStrengths.map((strength, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="criteria" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-blue-600" />
                  Seven Criteria Assessment Scores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {criteriaScores.map((criteria, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-gray-900">
                          Criteria {index + 1}: {criteria.criteria}
                        </h3>
                        <div className="text-right">
                          <div className="text-xl font-bold text-blue-600">{criteria.score}</div>
                          <div className="text-sm text-gray-600">/ {criteria.maxScore}</div>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(criteria.score / criteria.maxScore) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {((criteria.score / criteria.maxScore) * 100).toFixed(1)}% Score
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3.2</div>
                  <div className="text-lg font-semibold text-gray-900">Overall CGPA</div>
                  <div className="text-sm text-gray-600">Grade: A</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="practices" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-blue-600" />
                  Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {bestPractices.map((practice, index) => (
                    <Card key={index} className="border-l-4 border-l-green-500">
                      <CardHeader>
                        <CardTitle className="text-lg">{practice.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">{practice.description}</p>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <div className="font-semibold text-green-800 text-sm mb-1">Impact:</div>
                          <div className="text-green-700 text-sm">{practice.impact}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  NAAC Documents & Reports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Self Study Report (SSR)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm mb-4">
                        Comprehensive institutional self-assessment report prepared for NAAC evaluation.
                      </p>
                      <Badge variant="outline">2023 - 3rd Cycle</Badge>
                    </CardContent>
                  </Card>

                  <Card className="border border-green-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Peer Team Report</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm mb-4">
                        External evaluation report by NAAC peer team with recommendations and grade.
                      </p>
                      <Badge variant="outline">March 2023</Badge>
                    </CardContent>
                  </Card>

                  <Card className="border border-purple-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Quality Assurance Framework</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm mb-4">
                        Institutional quality framework and policies for continuous improvement.
                      </p>
                      <Badge variant="outline">Updated 2024</Badge>
                    </CardContent>
                  </Card>

                  <Card className="border border-orange-200">
                    <CardHeader>
                      <CardTitle className="text-lg">Action Taken Report</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-sm mb-4">
                        Report on implementation of peer team recommendations and quality improvements.
                      </p>
                      <Badge variant="outline">Annual</Badge>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default NAAC;