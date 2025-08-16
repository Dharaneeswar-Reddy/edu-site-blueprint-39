import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Heart, Lightbulb, Shield, Users } from "lucide-react";

const QualityPolicy = () => {
  const policyPrinciples = [
    {
      icon: Target,
      title: "Excellence in Education",
      description: "Commitment to delivering high-quality education that meets national and international standards.",
      color: "text-blue-600"
    },
    {
      icon: Eye,
      title: "Continuous Improvement",
      description: "Regular review and enhancement of all academic and administrative processes.",
      color: "text-green-600"
    },
    {
      icon: Heart,
      title: "Student-Centric Approach",
      description: "Prioritizing student learning outcomes and holistic development.",
      color: "text-red-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Research",
      description: "Promoting innovative teaching methods and encouraging research activities.",
      color: "text-yellow-600"
    },
    {
      icon: Shield,
      title: "Ethical Standards",
      description: "Maintaining highest ethical standards in all institutional activities.",
      color: "text-purple-600"
    },
    {
      icon: Users,
      title: "Stakeholder Satisfaction",
      description: "Ensuring satisfaction of all stakeholders including students, faculty, and society.",
      color: "text-teal-600"
    }
  ];

  const objectives = [
    {
      category: "Academic Quality",
      items: [
        "Implement outcome-based education with clear learning objectives",
        "Ensure curriculum relevance through regular updates and industry inputs",
        "Promote innovative teaching-learning methodologies",
        "Establish robust assessment and evaluation systems",
        "Enhance faculty competency through continuous professional development"
      ]
    },
    {
      category: "Research & Innovation",
      items: [
        "Foster research culture among faculty and students",
        "Encourage interdisciplinary research collaborations",
        "Support publication in peer-reviewed journals",
        "Facilitate technology transfer and innovation",
        "Establish partnerships with industry and research institutions"
      ]
    },
    {
      category: "Infrastructure & Resources",
      items: [
        "Maintain and upgrade physical and digital infrastructure",
        "Ensure adequate learning resources and facilities",
        "Implement sustainable and green campus practices",
        "Provide modern laboratory and library facilities",
        "Create conducive learning environment"
      ]
    },
    {
      category: "Governance & Administration",
      items: [
        "Ensure transparent and participatory governance",
        "Implement effective management information systems",
        "Maintain comprehensive documentation and records",
        "Promote inclusive and diverse institutional culture",
        "Establish grievance redressal mechanisms"
      ]
    }
  ];

  const qualityIndicators = [
    { indicator: "Student Satisfaction", target: ">85%", current: "87%", status: "Achieved" },
    { indicator: "Faculty with PhD", target: ">80%", current: "85%", status: "Achieved" },
    { indicator: "Research Publications", target: "100+/year", current: "120/year", status: "Exceeded" },
    { indicator: "Placement Rate", target: ">70%", current: "75%", status: "Achieved" },
    { indicator: "Industry Collaboration", target: "10+ MoUs", current: "12 MoUs", status: "Exceeded" },
    { indicator: "Green Campus Score", target: ">80%", current: "78%", status: "In Progress" }
  ];

  return (
    <PageLayout 
      title="Quality Policy" 
      description="Our commitment to excellence through comprehensive quality assurance measures and continuous improvement initiatives."
    >
      <div className="space-y-8">
        
        {/* Quality Policy Statement */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-college-blue">Quality Policy Statement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700 text-lg leading-relaxed text-center italic">
                "Shri Velagapudi Ramakrishna Memorial College is committed to providing quality education that nurtures intellectual growth, promotes research excellence, and develops responsible citizens. We pledge to continuously improve our academic standards, infrastructure, and services through systematic quality assurance mechanisms, stakeholder feedback, and adherence to best practices in higher education."
              </p>
              <div className="text-center mt-6">
                <p className="font-semibold text-college-blue">- SVRMC Management</p>
                <Badge variant="secondary" className="mt-2">Revised: January 2024</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quality Principles */}
        <Card>
          <CardHeader>
            <CardTitle>Core Quality Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {policyPrinciples.map((principle, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <principle.icon className={`h-8 w-8 mb-3 ${principle.color}`} />
                  <h4 className="font-semibold text-college-blue mb-2">{principle.title}</h4>
                  <p className="text-gray-600 text-sm">{principle.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quality Objectives */}
        {objectives.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="h-6 w-6 text-college-blue" />
                {category.category}
                <Badge variant="secondary">{category.items.length} Objectives</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-college-blue rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Quality Indicators & Targets */}
        <Card>
          <CardHeader>
            <CardTitle>Quality Indicators & Performance Targets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Quality Indicator</th>
                    <th className="text-left p-3 font-semibold">Target</th>
                    <th className="text-left p-3 font-semibold">Current Performance</th>
                    <th className="text-left p-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {qualityIndicators.map((indicator, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{indicator.indicator}</td>
                      <td className="p-3">{indicator.target}</td>
                      <td className="p-3">{indicator.current}</td>
                      <td className="p-3">
                        <Badge variant={
                          indicator.status === "Exceeded" ? "default" :
                          indicator.status === "Achieved" ? "secondary" : "outline"
                        }>
                          {indicator.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Implementation Strategy */}
        <Card>
          <CardHeader>
            <CardTitle>Implementation Strategy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Quality Assurance Mechanisms</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-medium">Internal Quality Audits</h5>
                    <p className="text-sm text-gray-600">Regular self-assessment and peer reviews</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-medium">External Evaluations</h5>
                    <p className="text-sm text-gray-600">NAAC assessments and external peer reviews</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-medium">Continuous Monitoring</h5>
                    <p className="text-sm text-gray-600">Real-time tracking of quality indicators</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h5 className="font-medium">Feedback Systems</h5>
                    <p className="text-sm text-gray-600">Multi-stakeholder feedback collection</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Review & Improvement</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-medium">Annual Policy Review</h5>
                    <p className="text-sm text-gray-600">Yearly assessment and updates</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h5 className="font-medium">Action Plans</h5>
                    <p className="text-sm text-gray-600">Specific improvement initiatives</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h5 className="font-medium">Best Practice Adoption</h5>
                    <p className="text-sm text-gray-600">Learning from benchmark institutions</p>
                  </div>
                  <div className="border-l-4 border-pink-500 pl-4">
                    <h5 className="font-medium">Innovation Promotion</h5>
                    <p className="text-sm text-gray-600">Encouraging creative solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quality Commitment */}
        <Card>
          <CardHeader>
            <CardTitle>Our Quality Commitment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">To Students</h4>
                  <p className="text-sm text-gray-600">
                    Providing excellent education, support services, and opportunities for holistic development.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">To Faculty</h4>
                  <p className="text-sm text-gray-600">
                    Creating an environment for professional growth, research excellence, and innovation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">To Society</h4>
                  <p className="text-sm text-gray-600">
                    Contributing to social development through quality education and meaningful research.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default QualityPolicy;