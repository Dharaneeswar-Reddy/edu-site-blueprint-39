import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, TrendingUp, FileText, Calendar, Target } from "lucide-react";

const IQAC = () => {
  const composition = [
    { role: "Chairperson", name: "Dr. R. Venkata Rao", designation: "Principal" },
    { role: "IQAC Coordinator", name: "Dr. M. Lakshmi Prasanna", designation: "Associate Professor, Physics" },
    { role: "Senior Administrative Officer", name: "Sri K. Ramesh", designation: "Registrar" },
    { role: "Faculty Representatives", name: "Dr. S. Madhavi (Chemistry), Dr. P. Krishna (Mathematics)", designation: "Professors" },
    { role: "External Expert", name: "Dr. A. Suresh Kumar", designation: "Retired Professor, Andhra University" },
    { role: "Alumni Representative", name: "Sri M. Rajesh", designation: "Software Engineer, TCS" },
    { role: "Employer Representative", name: "Ms. K. Priya", designation: "HR Manager, Infosys" },
    { role: "Student Representatives", name: "Ms. L. Divya (Final Year), Sri R. Kiran (Second Year)", designation: "Student Leaders" }
  ];

  const initiatives = [
    {
      category: "Academic Enhancement",
      projects: [
        { name: "Curriculum Revision", status: "Ongoing", impact: "Updated syllabi for 2023-24" },
        { name: "Teaching Methodology", status: "Completed", impact: "Faculty training on innovative methods" },
        { name: "Assessment Reforms", status: "Implemented", impact: "Continuous evaluation system" },
        { name: "Industry Integration", status: "Ongoing", impact: "Guest lectures and workshops" }
      ]
    },
    {
      category: "Research Promotion",
      projects: [
        { name: "Research Policy", status: "Implemented", impact: "Clear guidelines for faculty research" },
        { name: "Seed Money Scheme", status: "Active", impact: "₹50,000 per project for faculty" },
        { name: "Publication Support", status: "Ongoing", impact: "Financial aid for research publications" },
        { name: "Collaboration MoUs", status: "Expanding", impact: "Partnerships with 5+ institutions" }
      ]
    }
  ];

  const metrics = [
    { icon: Award, label: "NAAC Grade", value: "A+", color: "text-green-600" },
    { icon: TrendingUp, label: "Quality Score", value: "3.2/4", color: "text-blue-600" },
    { icon: Users, label: "Faculty PhD", value: "85%", color: "text-purple-600" },
    { icon: FileText, label: "Research Papers", value: "120+", color: "text-orange-600" }
  ];

  return (
    <PageLayout 
      title="Internal Quality Assurance Cell (IQAC)" 
      description="Ensuring continuous improvement in academic and administrative performance through systematic quality enhancement initiatives."
    >
      <div className="space-y-8">
        
        {/* IQAC Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <metric.icon className={`h-8 w-8 mx-auto mb-3 ${metric.color}`} />
                <h3 className="text-2xl font-bold text-college-blue">{metric.value}</h3>
                <p className="text-gray-600">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* IQAC Composition */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Users className="h-6 w-6 text-college-blue" />
              IQAC Composition
              <Badge variant="secondary">{composition.length} Members</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Role</th>
                    <th className="text-left p-3 font-semibold">Name</th>
                    <th className="text-left p-3 font-semibold">Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {composition.map((member, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{member.role}</td>
                      <td className="p-3">{member.name}</td>
                      <td className="p-3">{member.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Quality Initiatives */}
        {initiatives.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="h-6 w-6 text-college-blue" />
                {category.category}
                <Badge variant="secondary">{category.projects.length} Projects</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.projects.map((project, idx) => (
                  <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-college-blue">{project.name}</h4>
                      <Badge variant={
                        project.status === "Completed" ? "default" :
                        project.status === "Ongoing" ? "secondary" : "outline"
                      }>
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm">{project.impact}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* IQAC Functions */}
        <Card>
          <CardHeader>
            <CardTitle>Key Functions & Responsibilities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Quality Enhancement</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-medium">Academic Quality</h5>
                    <p className="text-sm text-gray-600">Curriculum development, teaching methods, assessment</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-medium">Research Quality</h5>
                    <p className="text-sm text-gray-600">Research promotion, publication support, collaboration</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-medium">Infrastructure Quality</h5>
                    <p className="text-sm text-gray-600">Facility enhancement, technology integration</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Monitoring & Evaluation</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h5 className="font-medium">Performance Monitoring</h5>
                    <p className="text-sm text-gray-600">Regular assessment of academic performance</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-medium">Feedback Systems</h5>
                    <p className="text-sm text-gray-600">Student, faculty, and stakeholder feedback</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h5 className="font-medium">Documentation</h5>
                    <p className="text-sm text-gray-600">AQAR preparation, data maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Annual Quality Assurance Report */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-college-blue" />
              Annual Quality Assurance Reports (AQAR)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-semibold text-blue-700 mb-2">AQAR 2022-23</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Comprehensive report on quality initiatives, achievements, and future plans.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">Submitted to NAAC</Badge>
                  <Badge variant="secondary">120 Pages</Badge>
                </div>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="font-semibold text-green-700 mb-2">AQAR 2021-22</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Detailed analysis of COVID-19 impact and quality maintenance strategies.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">Submitted to NAAC</Badge>
                  <Badge variant="secondary">95 Pages</Badge>
                </div>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="font-semibold text-purple-700 mb-2">AQAR 2020-21</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Digital transformation initiatives and online learning implementation.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">Submitted to NAAC</Badge>
                  <Badge variant="secondary">110 Pages</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-college-blue" />
              Upcoming IQAC Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-blue-700">March 2024</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Faculty Development Program</li>
                  <li>• Student Feedback Collection</li>
                  <li>• External Peer Review</li>
                  <li>• Quality Audit Preparation</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-700">April 2024</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• AQAR 2023-24 Preparation</li>
                  <li>• Research Workshop</li>
                  <li>• Industry Interaction Meet</li>
                  <li>• Infrastructure Assessment</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-700">May 2024</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Annual Review Meeting</li>
                  <li>• Best Practices Documentation</li>
                  <li>• Academic Calendar Planning</li>
                  <li>• Quality Policy Revision</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default IQAC;