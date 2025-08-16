import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, Users, BookOpen, Star, Download } from "lucide-react";

const NIRF = () => {
  const rankings = [
    { year: "2024", category: "Overall", rank: "150-200", score: "45.67" },
    { year: "2024", category: "College", rank: "120-150", score: "48.23" },
    { year: "2023", category: "Overall", rank: "180-250", score: "42.15" },
    { year: "2023", category: "College", rank: "140-180", score: "44.89" },
    { year: "2022", category: "Overall", rank: "200-250", score: "39.78" },
  ];

  const parameters = [
    {
      name: "Teaching, Learning & Resources",
      weight: "30%",
      score: "65.4",
      trend: "up"
    },
    {
      name: "Research and Professional Practice",
      weight: "30%",
      score: "42.8",
      trend: "up"
    },
    {
      name: "Graduation Outcomes",
      weight: "20%",
      score: "71.2",
      trend: "up"
    },
    {
      name: "Outreach and Inclusivity",
      weight: "10%",
      score: "58.9",
      trend: "stable"
    },
    {
      name: "Perception",
      weight: "10%",
      score: "35.6",
      trend: "up"
    }
  ];

  return (
    <PageLayout 
      title="NIRF Rankings" 
      description="National Institutional Ranking Framework - SVRMC's performance and achievements in higher education rankings."
    >
      <div className="space-y-8">
        
        {/* NIRF Overview */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-8">
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 text-college-blue mr-3" />
              <h2 className="text-2xl font-bold text-college-blue">NIRF Ranking 2024</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-college-blue">150-200</h3>
                <p className="text-gray-600">Overall Ranking</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-college-blue">120-150</h3>
                <p className="text-gray-600">College Category</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-college-blue">45.67</h3>
                <p className="text-gray-600">Overall Score</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-green-500">↑30</h3>
              <p className="text-gray-600">Rank Improvement</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">92%</h3>
              <p className="text-gray-600">Graduation Rate</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <BookOpen className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">15:1</h3>
              <p className="text-gray-600">Student-Faculty Ratio</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Star className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">4.2/5</h3>
              <p className="text-gray-600">Peer Perception</p>
            </CardContent>
          </Card>
        </div>

        {/* Historical Rankings */}
        <Card>
          <CardHeader>
            <CardTitle>Historical NIRF Rankings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Year</th>
                    <th className="text-left p-3 font-semibold">Category</th>
                    <th className="text-left p-3 font-semibold">Rank</th>
                    <th className="text-left p-3 font-semibold">Score</th>
                    <th className="text-left p-3 font-semibold">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {rankings.map((ranking, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3">{ranking.year}</td>
                      <td className="p-3">
                        <Badge variant="outline">{ranking.category}</Badge>
                      </td>
                      <td className="p-3 font-semibold">{ranking.rank}</td>
                      <td className="p-3">{ranking.score}</td>
                      <td className="p-3">
                        {index === 0 && <TrendingUp className="h-4 w-4 text-green-500" />}
                        {index === 2 && <TrendingUp className="h-4 w-4 text-green-500" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Parameter-wise Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Parameter-wise Performance (NIRF 2024)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {parameters.map((param, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="font-semibold">{param.name}</h4>
                      <p className="text-sm text-gray-600">Weightage: {param.weight}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-college-blue">{param.score}</div>
                      <div className="flex items-center">
                        {param.trend === "up" && <TrendingUp className="h-4 w-4 text-green-500 mr-1" />}
                        <span className="text-sm text-gray-600">Score</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-college-blue h-2 rounded-full transition-all duration-500"
                      style={{ width: `${param.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Highlights */}
        <Card>
          <CardHeader>
            <CardTitle>Key Highlights & Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-700">Strengths</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• High graduation outcome (71.2 score)</li>
                  <li>• Strong teaching-learning resources</li>
                  <li>• Excellent student-faculty ratio</li>
                  <li>• Diverse academic programs</li>
                  <li>• Good outreach and inclusivity measures</li>
                  <li>• Growing research publications</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-blue-700">Areas of Improvement</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Enhance research output and quality</li>
                  <li>• Improve industry perception</li>
                  <li>• Increase patent filings</li>
                  <li>• Strengthen international collaborations</li>
                  <li>• Expand PhD programs</li>
                  <li>• Boost funded research projects</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Plan */}
        <Card>
          <CardHeader>
            <CardTitle>Strategic Action Plan for NIRF Improvement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-blue-700">Short Term (1 Year)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Increase research publications</li>
                  <li>• Enhance faculty qualifications</li>
                  <li>• Improve infrastructure facilities</li>
                  <li>• Strengthen industry partnerships</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-700">Medium Term (3 Years)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Establish research centers</li>
                  <li>• Launch PhD programs</li>
                  <li>• International collaborations</li>
                  <li>• Patent filing initiatives</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-700">Long Term (5 Years)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Top 100 NIRF ranking</li>
                  <li>• International accreditation</li>
                  <li>• World-class research output</li>
                  <li>• Global recognition</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Downloads */}
        <Card>
          <CardHeader>
            <CardTitle>NIRF Documents & Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span className="text-center">NIRF Data 2024</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span className="text-center">NIRF Report 2023</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span className="text-center">Action Plan Document</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span className="text-center">Benchmarking Report</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span className="text-center">Quality Initiatives</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span className="text-center">Annual Report</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* NIRF Committee */}
        <Card>
          <CardHeader>
            <CardTitle>NIRF Ranking Committee</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Committee Members</h4>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Chairperson:</strong> Dr. K. Srinivas, Principal</p>
                  <p><strong>Coordinator:</strong> Dr. Meera Patel, IQAC Director</p>
                  <p><strong>Data Analyst:</strong> Prof. Rajesh Kumar</p>
                  <p><strong>IT Support:</strong> Mr. Suresh Reddy</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Contact Information</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Email: nirf@svrmc.edu.in</p>
                  <p>Phone: +91-863-2345683</p>
                  <p>Office: IQAC Office, Admin Block</p>
                  <p>Office Hours: Monday to Friday, 9 AM - 5 PM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default NIRF;