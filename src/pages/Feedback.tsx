import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { MessageSquare, Star, Users, TrendingUp, BarChart, FileText } from "lucide-react";

const Feedback = () => {
  return (
    <PageLayout 
      title="Feedback System" 
      description="Your feedback helps us improve the quality of education and services at SVRMC."
    >
      <div className="space-y-8">
        
        {/* Feedback Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <MessageSquare className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">2,547</h3>
              <p className="text-gray-600">Total Responses</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Star className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">4.2/5</h3>
              <p className="text-gray-600">Average Rating</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">85%</h3>
              <p className="text-gray-600">Response Rate</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <TrendingUp className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">92%</h3>
              <p className="text-gray-600">Satisfaction Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Feedback Forms */}
        <Card>
          <CardHeader>
            <CardTitle>Submit Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="faculty">Faculty</TabsTrigger>
                <TabsTrigger value="alumni">Alumni</TabsTrigger>
                <TabsTrigger value="employer">Employer</TabsTrigger>
              </TabsList>
              
              <TabsContent value="student" className="space-y-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="student-name">Name</Label>
                    <Input id="student-name" placeholder="Your full name" />
                  </div>
                  <div>
                    <Label htmlFor="student-id">Student ID</Label>
                    <Input id="student-id" placeholder="Your student ID" />
                  </div>
                  <div>
                    <Label htmlFor="student-course">Course</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bsc-physics">B.Sc. Physics</SelectItem>
                        <SelectItem value="bsc-chemistry">B.Sc. Chemistry</SelectItem>
                        <SelectItem value="bsc-cs">B.Sc. Computer Science</SelectItem>
                        <SelectItem value="bcom">B.Com</SelectItem>
                        <SelectItem value="ba-english">B.A. English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="student-year">Year of Study</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">First Year</SelectItem>
                        <SelectItem value="2">Second Year</SelectItem>
                        <SelectItem value="3">Third Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="feedback-category">Feedback Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="teaching">Teaching Quality</SelectItem>
                      <SelectItem value="infrastructure">Infrastructure</SelectItem>
                      <SelectItem value="library">Library Services</SelectItem>
                      <SelectItem value="administration">Administration</SelectItem>
                      <SelectItem value="extracurricular">Extracurricular Activities</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="student-feedback">Your Feedback</Label>
                  <Textarea 
                    id="student-feedback" 
                    placeholder="Please share your feedback, suggestions, or concerns..."
                    rows={5}
                  />
                </div>
                
                <Button className="w-full">Submit Student Feedback</Button>
              </TabsContent>
              
              <TabsContent value="faculty" className="space-y-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="faculty-name">Name</Label>
                    <Input id="faculty-name" placeholder="Your full name" />
                  </div>
                  <div>
                    <Label htmlFor="faculty-dept">Department</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="physics">Physics</SelectItem>
                        <SelectItem value="chemistry">Chemistry</SelectItem>
                        <SelectItem value="cs">Computer Science</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="commerce">Commerce</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="faculty-feedback">Faculty Feedback</Label>
                  <Textarea 
                    id="faculty-feedback" 
                    placeholder="Share your feedback about institutional policies, student performance, infrastructure needs, etc."
                    rows={5}
                  />
                </div>
                
                <Button className="w-full">Submit Faculty Feedback</Button>
              </TabsContent>
              
              <TabsContent value="alumni" className="space-y-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="alumni-name">Name</Label>
                    <Input id="alumni-name" placeholder="Your full name" />
                  </div>
                  <div>
                    <Label htmlFor="graduation-year">Graduation Year</Label>
                    <Input id="graduation-year" placeholder="Year of graduation" />
                  </div>
                  <div>
                    <Label htmlFor="alumni-course">Course Studied</Label>
                    <Input id="alumni-course" placeholder="Course/Program completed" />
                  </div>
                  <div>
                    <Label htmlFor="current-position">Current Position</Label>
                    <Input id="current-position" placeholder="Current job/position" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="alumni-feedback">Alumni Feedback</Label>
                  <Textarea 
                    id="alumni-feedback" 
                    placeholder="Share your experience, suggestions for curriculum improvement, career guidance, etc."
                    rows={5}
                  />
                </div>
                
                <Button className="w-full">Submit Alumni Feedback</Button>
              </TabsContent>
              
              <TabsContent value="employer" className="space-y-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="employer-name">Name</Label>
                    <Input id="employer-name" placeholder="Your full name" />
                  </div>
                  <div>
                    <Label htmlFor="company-name">Company/Organization</Label>
                    <Input id="company-name" placeholder="Company name" />
                  </div>
                  <div>
                    <Label htmlFor="designation">Designation</Label>
                    <Input id="designation" placeholder="Your designation" />
                  </div>
                  <div>
                    <Label htmlFor="industry">Industry</Label>
                    <Input id="industry" placeholder="Industry type" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="employer-feedback">Employer Feedback</Label>
                  <Textarea 
                    id="employer-feedback" 
                    placeholder="Please provide feedback about our graduates' performance, skills, and suggestions for curriculum enhancement..."
                    rows={5}
                  />
                </div>
                
                <Button className="w-full">Submit Employer Feedback</Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Feedback Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart className="h-5 w-5 mr-2" />
              Feedback Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-4">Student Satisfaction Ratings</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Teaching Quality</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                      <span className="text-sm font-medium">4.3/5</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Infrastructure</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '78%'}}></div>
                      </div>
                      <span className="text-sm font-medium">3.9/5</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Library Services</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '88%'}}></div>
                      </div>
                      <span className="text-sm font-medium">4.4/5</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Administration</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{width: '72%'}}></div>
                      </div>
                      <span className="text-sm font-medium">3.6/5</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Common Feedback Themes</h4>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded">
                    <h5 className="font-medium text-green-700">Positive Feedback</h5>
                    <ul className="text-sm text-green-600 mt-1">
                      <li>• Excellent faculty support</li>
                      <li>• Good practical exposure</li>
                      <li>• Helpful library resources</li>
                      <li>• Active extracurricular programs</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded">
                    <h5 className="font-medium text-orange-700">Areas for Improvement</h5>
                    <ul className="text-sm text-orange-600 mt-1">
                      <li>• Enhance WiFi connectivity</li>
                      <li>• More industry interactions</li>
                      <li>• Upgrade laboratory equipment</li>
                      <li>• Faster administrative processes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Taken */}
        <Card>
          <CardHeader>
            <CardTitle>Action Taken on Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-semibold text-green-700">Infrastructure Improvements</h4>
                <p className="text-sm text-green-600 mt-1">
                  Based on student feedback, we have upgraded WiFi infrastructure across the campus and 
                  renovated three laboratories with modern equipment.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-semibold text-blue-700">Academic Enhancements</h4>
                <p className="text-sm text-blue-600 mt-1">
                  Introduced industry-oriented electives and increased guest lectures by industry experts 
                  as suggested by alumni and employer feedback.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h4 className="font-semibold text-purple-700">Student Services</h4>
                <p className="text-sm text-purple-600 mt-1">
                  Extended library hours and introduced online catalog system to improve accessibility 
                  to learning resources.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Feedback Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <FileText className="h-6 w-6 mb-2" />
                <span className="text-center">Annual Feedback Report 2024</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <FileText className="h-6 w-6 mb-2" />
                <span className="text-center">Student Satisfaction Survey</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <FileText className="h-6 w-6 mb-2" />
                <span className="text-center">Alumni Feedback Analysis</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Feedback Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Feedback Coordinator</h4>
                <p className="text-gray-600">Dr. Priya Sharma</p>
                <p className="text-gray-600">Email: feedback@svrmc.edu.in</p>
                <p className="text-gray-600">Phone: +91-863-2345684</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Office Hours</h4>
                <p className="text-gray-600">Monday to Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Location: IQAC Office, Admin Block</p>
                <p className="text-gray-600">Online feedback available 24/7</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default Feedback;