import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, BookOpen, Award, Users } from "lucide-react";

const CourseOutcomes = () => {
  const departments = [
    {
      name: "Computer Science",
      courses: [
        {
          code: "CS101",
          name: "Programming Fundamentals",
          outcomes: [
            "Understand basic programming concepts and problem-solving techniques",
            "Design and implement programs using procedural programming approach",
            "Apply debugging and testing strategies for program validation",
            "Demonstrate proficiency in C programming language syntax and semantics"
          ]
        },
        {
          code: "CS201", 
          name: "Data Structures",
          outcomes: [
            "Analyze and design efficient data structures for various applications",
            "Implement linear and non-linear data structures using appropriate algorithms",
            "Evaluate time and space complexity of different data structure operations",
            "Apply suitable data structures to solve real-world computing problems"
          ]
        }
      ]
    },
    {
      name: "Physics",
      courses: [
        {
          code: "PHY101",
          name: "Classical Mechanics", 
          outcomes: [
            "Apply Newton's laws of motion to analyze particle dynamics",
            "Solve problems involving conservation of energy and momentum",
            "Understand rotational dynamics and oscillatory motion",
            "Demonstrate mathematical modeling skills for physical systems"
          ]
        },
        {
          code: "PHY201",
          name: "Electromagnetic Theory",
          outcomes: [
            "Analyze electric and magnetic fields using vector calculus",
            "Apply Maxwell's equations to electromagnetic wave propagation",
            "Understand the relationship between electricity and magnetism",
            "Solve boundary value problems in electrostatics and magnetostatics"
          ]
        }
      ]
    },
    {
      name: "Chemistry",
      courses: [
        {
          code: "CHE101",
          name: "Organic Chemistry",
          outcomes: [
            "Identify and classify organic compounds based on functional groups",
            "Predict reaction mechanisms and products in organic transformations",
            "Apply stereochemical concepts to understand molecular behavior",
            "Design synthetic pathways for target organic molecules"
          ]
        },
        {
          code: "CHE201",
          name: "Physical Chemistry",
          outcomes: [
            "Apply thermodynamic principles to chemical systems",
            "Analyze chemical kinetics and reaction mechanisms",
            "Understand quantum mechanical principles in chemistry",
            "Interpret spectroscopic data for molecular characterization"
          ]
        }
      ]
    }
  ];

  return (
    <PageLayout 
      title="Course Outcomes" 
      description="Specific learning outcomes that students achieve upon successful completion of individual courses."
    >
      <div className="space-y-8">
        
        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <Target className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">450+</h3>
              <p className="text-gray-600">Course Outcomes</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <BookOpen className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">120+</h3>
              <p className="text-gray-600">Courses Mapped</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">100%</h3>
              <p className="text-gray-600">Outcome Mapping</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">85%</h3>
              <p className="text-gray-600">Achievement Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Course Outcomes Framework */}
        <Card>
          <CardHeader>
            <CardTitle>Course Outcomes Framework</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-blue-700">Knowledge & Understanding</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Factual knowledge of subject matter</li>
                  <li>• Conceptual understanding of principles</li>
                  <li>• Procedural knowledge of methods</li>
                  <li>• Metacognitive awareness of learning</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-700">Skills & Application</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Analytical and critical thinking</li>
                  <li>• Problem-solving capabilities</li>
                  <li>• Practical implementation skills</li>
                  <li>• Research and investigation methods</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-700">Values & Attitudes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Professional ethics and integrity</li>
                  <li>• Social responsibility awareness</li>
                  <li>• Continuous learning mindset</li>
                  <li>• Collaborative teamwork skills</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Department-wise Course Outcomes */}
        {departments.map((dept, deptIndex) => (
          <Card key={deptIndex}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Department of {dept.name}</span>
                <Badge variant="secondary">{dept.courses.length} Courses</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {dept.courses.map((course, courseIndex) => (
                  <div key={courseIndex} className="border rounded-lg p-6 bg-gray-50">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="outline">{course.code}</Badge>
                      <h4 className="text-lg font-semibold">{course.name}</h4>
                    </div>
                    
                    <div>
                      <h5 className="font-medium mb-3 text-gray-700">Course Outcomes:</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {course.outcomes.map((outcome, outcomeIndex) => (
                          <div key={outcomeIndex} className="flex items-start gap-3 p-3 bg-white rounded border-l-4 border-college-blue">
                            <div className="bg-college-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                              {outcomeIndex + 1}
                            </div>
                            <p className="text-sm text-gray-700">{outcome}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Assessment Methods */}
        <Card>
          <CardHeader>
            <CardTitle>Course Outcome Assessment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Direct Assessment</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Written examinations and quizzes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Laboratory experiments and reports</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Project work and presentations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Assignment submissions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Practical skill demonstrations</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Indirect Assessment</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Student feedback surveys</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Exit interviews with graduates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Alumni feedback on preparedness</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Employer feedback surveys</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Course evaluation reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Outcome Achievement Levels */}
        <Card>
          <CardHeader>
            <CardTitle>Course Outcome Achievement Levels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded">
                <div>
                  <h5 className="font-semibold text-green-700">Level 3 - Satisfactory (70-100%)</h5>
                  <p className="text-sm text-green-600">Students demonstrate comprehensive understanding and application</p>
                </div>
                <Badge variant="outline" className="text-green-700 border-green-700">Target: 80%</Badge>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded">
                <div>
                  <h5 className="font-semibold text-yellow-700">Level 2 - Developing (50-69%)</h5>
                  <p className="text-sm text-yellow-600">Students show partial understanding with guided application</p>
                </div>
                <Badge variant="outline" className="text-yellow-700 border-yellow-700">Target: 15%</Badge>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-red-50 rounded">
                <div>
                  <h5 className="font-semibold text-red-700">Level 1 - Inadequate (Below 50%)</h5>
                  <p className="text-sm text-red-600">Students require additional support and remedial learning</p>
                </div>
                <Badge variant="outline" className="text-red-700 border-red-700">Target: Less than 5%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Continuous Improvement */}
        <Card>
          <CardHeader>
            <CardTitle>Continuous Improvement Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h5 className="font-semibold mb-2">Assess</h5>
                <p className="text-sm text-gray-600">Measure course outcome achievement through various assessment methods</p>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <h5 className="font-semibold mb-2">Analyze</h5>
                <p className="text-sm text-gray-600">Review assessment data to identify gaps and improvement areas</p>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h5 className="font-semibold mb-2">Act</h5>
                <p className="text-sm text-gray-600">Implement curriculum changes and teaching method improvements</p>
              </div>
              
              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold">4</span>
                </div>
                <h5 className="font-semibold mb-2">Monitor</h5>
                <p className="text-sm text-gray-600">Track the effectiveness of implemented changes and adjustments</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default CourseOutcomes;