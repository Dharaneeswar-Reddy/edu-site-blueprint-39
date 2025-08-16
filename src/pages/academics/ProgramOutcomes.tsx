import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Award, BookOpen } from "lucide-react";

const ProgramOutcomes = () => {
  const ugOutcomes = [
    {
      id: "PO1",
      title: "Disciplinary Knowledge",
      description: "Demonstrate comprehensive understanding of the major concepts, theoretical principles and experimental findings in the core areas of the chosen discipline."
    },
    {
      id: "PO2", 
      title: "Critical Thinking",
      description: "Apply critical thinking and analytical reasoning to identify, formulate and solve problems using appropriate methodologies."
    },
    {
      id: "PO3",
      title: "Social Competence", 
      description: "Demonstrate professional behavior, effective citizenship skills, ethics and social responsibility in personal and professional environments."
    },
    {
      id: "PO4",
      title: "Research & Innovation",
      description: "Engage in independent and lifelong learning through research, innovation and entrepreneurial thinking in diverse contexts."
    },
    {
      id: "PO5",
      title: "Communication Skills",
      description: "Communicate effectively in oral and written forms using appropriate technology for presenting ideas to diverse audiences."
    },
    {
      id: "PO6",
      title: "Digital Literacy",
      description: "Use appropriate digital technologies and tools for data collection, analysis, and interpretation to support academic and professional activities."
    },
    {
      id: "PO7",
      title: "Multi-disciplinary Approach",
      description: "Recognize the multi-disciplinary nature of knowledge and apply interdisciplinary approaches to address complex problems."
    },
    {
      id: "PO8",
      title: "Environmental Awareness",
      description: "Understand the environmental and sustainability issues and apply eco-friendly practices in personal and professional life."
    },
    {
      id: "PO9",
      title: "Leadership & Teamwork",
      description: "Work effectively in teams, demonstrate leadership qualities and adapt to collaborative environments."
    },
    {
      id: "PO10",
      title: "Global Perspective",
      description: "Understand global issues, cultural diversity and demonstrate sensitivity towards different perspectives and worldviews."
    }
  ];

  const pgOutcomes = [
    {
      id: "PO1",
      title: "Advanced Knowledge",
      description: "Demonstrate advanced knowledge and understanding of specialized areas within the discipline and related fields."
    },
    {
      id: "PO2",
      title: "Research Proficiency", 
      description: "Design and conduct independent research using appropriate methodologies and present findings effectively."
    },
    {
      id: "PO3",
      title: "Innovation & Creativity",
      description: "Apply innovative thinking and creative problem-solving approaches to address complex challenges in the field."
    },
    {
      id: "PO4",
      title: "Professional Ethics",
      description: "Adhere to professional and ethical standards while demonstrating integrity in research and professional practice."
    },
    {
      id: "PO5",
      title: "Leadership & Management",
      description: "Demonstrate leadership skills and ability to manage teams, projects and resources effectively."
    },
    {
      id: "PO6",
      title: "Global Competence",
      description: "Work effectively in global contexts with awareness of cultural, social and economic diversity."
    }
  ];

  return (
    <PageLayout 
      title="Program Outcomes" 
      description="Comprehensive learning outcomes that students achieve upon graduation from their respective programs."
    >
      <div className="space-y-8">
        
        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <Target className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">16</h3>
              <p className="text-gray-600">Total POs</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <BookOpen className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">10</h3>
              <p className="text-gray-600">UG Program Outcomes</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">6</h3>
              <p className="text-gray-600">PG Program Outcomes</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">100%</h3>
              <p className="text-gray-600">Coverage</p>
            </CardContent>
          </Card>
        </div>

        {/* Program Outcomes Framework */}
        <Card>
          <CardHeader>
            <CardTitle>Program Outcomes Framework</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-blue-700">Knowledge & Skills</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Graduates will possess deep understanding of their discipline and demonstrate mastery of relevant skills.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Disciplinary expertise</li>
                  <li>• Technical proficiency</li>
                  <li>• Analytical capabilities</li>
                  <li>• Research competence</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-700">Professional Attributes</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Graduates will exhibit professional behavior and ethical conduct in their chosen careers.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Professional ethics</li>
                  <li>• Communication skills</li>
                  <li>• Teamwork abilities</li>
                  <li>• Leadership qualities</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-700">Global Citizenship</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Graduates will be responsible global citizens committed to sustainable development.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Social responsibility</li>
                  <li>• Environmental awareness</li>
                  <li>• Cultural sensitivity</li>
                  <li>• Lifelong learning</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Undergraduate Program Outcomes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Undergraduate Program Outcomes</span>
              <Badge variant="secondary">UG Programs</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ugOutcomes.map((outcome, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-college-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                      {outcome.id}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{outcome.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{outcome.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Postgraduate Program Outcomes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Postgraduate Program Outcomes</span>
              <Badge variant="secondary">PG Programs</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pgOutcomes.map((outcome, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                      {outcome.id}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{outcome.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{outcome.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Outcome Assessment Methods */}
        <Card>
          <CardHeader>
            <CardTitle>Program Outcome Assessment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Direct Assessment</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <h5 className="font-medium">Academic Performance</h5>
                    <p className="text-sm text-gray-600">Comprehensive examinations, capstone projects, thesis defense</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <h5 className="font-medium">Portfolio Assessment</h5>
                    <p className="text-sm text-gray-600">Collection of student work demonstrating achievement of outcomes</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4 py-2">
                    <h5 className="font-medium">Performance Evaluation</h5>
                    <p className="text-sm text-gray-600">Internship assessments, laboratory demonstrations, presentations</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Indirect Assessment</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-orange-500 pl-4 py-2">
                    <h5 className="font-medium">Stakeholder Feedback</h5>
                    <p className="text-sm text-gray-600">Alumni surveys, employer feedback, industry advisory input</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4 py-2">
                    <h5 className="font-medium">Exit Interviews</h5>
                    <p className="text-sm text-gray-600">Graduate interviews assessing program effectiveness and outcomes</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4 py-2">
                    <h5 className="font-medium">Professional Success</h5>
                    <p className="text-sm text-gray-600">Placement rates, higher education admissions, career progression</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievement Levels */}
        <Card>
          <CardHeader>
            <CardTitle>Program Outcome Achievement Levels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-700 mb-2">High Achievement (3)</h4>
                <p className="text-sm text-green-600 mb-3">
                  Students demonstrate comprehensive mastery and can apply knowledge independently in novel situations.
                </p>
                <Badge variant="outline" className="text-green-700 border-green-700">Target: 70%</Badge>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-semibold text-yellow-700 mb-2">Moderate Achievement (2)</h4>
                <p className="text-sm text-yellow-600 mb-3">
                  Students show good understanding and can apply knowledge with minimal guidance.
                </p>
                <Badge variant="outline" className="text-yellow-700 border-yellow-700">Target: 25%</Badge>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-red-700 mb-2">Low Achievement (1)</h4>
                <p className="text-sm text-red-600 mb-3">
                  Students have basic understanding but require significant support for application.
                </p>
                <Badge variant="outline" className="text-red-700 border-red-700">Target: Less than 5%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mapping to Course Outcomes */}
        <Card>
          <CardHeader>
            <CardTitle>Program Outcome to Course Outcome Mapping</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4 text-blue-700">Mapping Process</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-blue-600 font-bold text-lg">1</span>
                  </div>
                  <h5 className="font-medium mb-1">Course Design</h5>
                  <p className="text-xs text-gray-600">Each course is designed to contribute to specific program outcomes</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-green-600 font-bold text-lg">2</span>
                  </div>
                  <h5 className="font-medium mb-1">Outcome Mapping</h5>
                  <p className="text-xs text-gray-600">Course outcomes are mapped to relevant program outcomes</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-purple-600 font-bold text-lg">3</span>
                  </div>
                  <h5 className="font-medium mb-1">Assessment</h5>
                  <p className="text-xs text-gray-600">Regular assessment ensures outcome achievement</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-orange-600 font-bold text-lg">4</span>
                  </div>
                  <h5 className="font-medium mb-1">Continuous Improvement</h5>
                  <p className="text-xs text-gray-600">Feedback drives curriculum enhancement</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default ProgramOutcomes;