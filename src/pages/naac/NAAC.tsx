import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, FileText, Calendar, Star, Target } from "lucide-react";

const NAAC = () => {
  const accreditationHistory = [
    { cycle: "4th Cycle", year: "2023", grade: "A+", cgpa: "3.24", validity: "2030" },
    { cycle: "3rd Cycle", year: "2017", grade: "A", cgpa: "3.15", validity: "2022" },
    { cycle: "2nd Cycle", year: "2012", grade: "A", cgpa: "3.05", validity: "2017" },
    { cycle: "1st Cycle", year: "2007", grade: "B++", cgpa: "2.95", validity: "2012" }
  ];

  const criteria = [
    { name: "Curricular Aspects", score: "3.2", maxScore: "4.0", percentage: "80%" },
    { name: "Teaching-Learning and Evaluation", score: "3.3", maxScore: "4.0", percentage: "82.5%" },
    { name: "Research, Innovations and Extension", score: "3.1", maxScore: "4.0", percentage: "77.5%" },
    { name: "Infrastructure and Learning Resources", score: "3.4", maxScore: "4.0", percentage: "85%" },
    { name: "Student Support and Progression", score: "3.2", maxScore: "4.0", percentage: "80%" },
    { name: "Governance, Leadership and Management", score: "3.3", maxScore: "4.0", percentage: "82.5%" },
    { name: "Institutional Values and Best Practices", score: "3.0", maxScore: "4.0", percentage: "75%" }
  ];

  const bestPractices = [
    {
      title: "Digital Learning Ecosystem",
      description: "Comprehensive digital infrastructure supporting online and hybrid learning modes.",
      impact: "100% faculty and students have access to digital learning resources",
      sustainability: "Integrated with long-term IT strategy and budget allocation"
    },
    {
      title: "Green Campus Initiative", 
      description: "Sustainable campus development with focus on environmental conservation.",
      impact: "50% reduction in carbon footprint, 100% waste segregation achieved",
      sustainability: "Student-led committees and regular environmental audits"
    }
  ];

  const preparationAreas = [
    {
      criterion: "Research Enhancement",
      initiatives: [
        "Faculty research publication support program",
        "Seed money allocation for innovative projects", 
        "Industry-academia collaboration framework",
        "Student research mentorship program"
      ]
    },
    {
      criterion: "Infrastructure Development",
      initiatives: [
        "Smart classroom technology upgrades",
        "Digital library resource expansion",
        "Laboratory equipment modernization",
        "Campus Wi-Fi infrastructure enhancement"
      ]
    },
    {
      criterion: "Governance Strengthening",
      initiatives: [
        "Academic council restructuring",
        "Student feedback system automation",
        "Faculty development policy revision",
        "Quality assurance mechanism enhancement"
      ]
    }
  ];

  return (
    <PageLayout 
      title="NAAC Accreditation" 
      description="National Assessment and Accreditation Council recognition and our journey towards academic excellence."
    >
      <div className="space-y-8">
        
        {/* Current NAAC Status */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-center justify-center">
              <Award className="h-8 w-8 text-green-600" />
              Current NAAC Accreditation Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="flex justify-center items-center gap-4">
                <Badge variant="default" className="bg-green-600 text-white text-lg px-6 py-2">
                  Grade A+
                </Badge>
                <Badge variant="secondary" className="text-lg px-6 py-2">
                  CGPA: 3.24/4.0
                </Badge>
              </div>
              <p className="text-gray-600">
                4th Cycle Accreditation (2023-2030) | Valid until December 2030
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Rank Improvement</h4>
                  <p className="text-sm text-gray-600">Improved from A to A+ grade</p>
                </div>
                <div className="text-center">
                  <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Quality Enhancement</h4>
                  <p className="text-sm text-gray-600">CGPA increased by 0.09 points</p>
                </div>
                <div className="text-center">
                  <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Future Ready</h4>
                  <p className="text-sm text-gray-600">7-year validity period</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accreditation History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-college-blue" />
              Accreditation History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Cycle</th>
                    <th className="text-left p-3 font-semibold">Year</th>
                    <th className="text-left p-3 font-semibold">Grade</th>
                    <th className="text-left p-3 font-semibold">CGPA</th>
                    <th className="text-left p-3 font-semibold">Valid Until</th>
                  </tr>
                </thead>
                <tbody>
                  {accreditationHistory.map((record, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{record.cycle}</td>
                      <td className="p-3">{record.year}</td>
                      <td className="p-3">
                        <Badge variant={record.grade === "A+" ? "default" : "secondary"}>
                          {record.grade}
                        </Badge>
                      </td>
                      <td className="p-3">{record.cgpa}</td>
                      <td className="p-3">{record.validity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Criteria-wise Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Criteria-wise Performance (4th Cycle)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {criteria.map((criterion, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-college-blue">{criterion.name}</h4>
                    <div className="flex gap-2">
                      <Badge variant="outline">{criterion.score}/{criterion.maxScore}</Badge>
                      <Badge variant="secondary">{criterion.percentage}</Badge>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-college-blue h-2 rounded-full transition-all duration-300"
                      style={{ width: criterion.percentage }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Star className="h-6 w-6 text-college-blue" />
              Recognized Best Practices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {bestPractices.map((practice, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-college-blue mb-3">{practice.title}</h4>
                  <p className="text-gray-700 mb-4">{practice.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-green-700 mb-2">Impact Achieved</h5>
                      <p className="text-sm text-gray-600">{practice.impact}</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-700 mb-2">Sustainability</h5>
                      <p className="text-sm text-gray-600">{practice.sustainability}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Preparation for Next Cycle */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Target className="h-6 w-6 text-college-blue" />
              Continuous Improvement Initiatives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {preparationAreas.map((area, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-college-blue mb-3">{area.criterion}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {area.initiatives.map((initiative, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                        <div className="w-2 h-2 bg-college-blue rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 text-sm">{initiative}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Documents & Reports */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-college-blue" />
              NAAC Documents & Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-college-blue">Self Study Reports (SSR)</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span className="text-sm">SSR 4th Cycle (2023)</span>
                    <Badge variant="outline">PDF</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span className="text-sm">SSR 3rd Cycle (2017)</span>
                    <Badge variant="outline">PDF</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span className="text-sm">SSR 2nd Cycle (2012)</span>
                    <Badge variant="outline">PDF</Badge>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-college-blue">Supporting Documents</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span className="text-sm">Data Templates</span>
                    <Badge variant="outline">Excel</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span className="text-sm">Criteria Wise Annexures</span>
                    <Badge variant="outline">PDF</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 border rounded">
                    <span className="text-sm">Peer Team Report</span>
                    <Badge variant="outline">PDF</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default NAAC;