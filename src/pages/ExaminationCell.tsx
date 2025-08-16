import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Calendar, FileText, Clock, Users } from "lucide-react";

const ExaminationCell = () => {
  return (
    <PageLayout 
      title="Examination Cell" 
      description="Central hub for all examination-related activities, schedules, and results at SVRMC."
    >
      <div className="space-y-8">
        
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Exam Schedule</h3>
              <p className="text-sm text-gray-600">View upcoming examinations</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <FileText className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Results</h3>
              <p className="text-sm text-gray-600">Check examination results</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Hall Tickets</h3>
              <p className="text-sm text-gray-600">Download admit cards</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Exam Committee</h3>
              <p className="text-sm text-gray-600">Meet the examination team</p>
            </CardContent>
          </Card>
        </div>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle>Important Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <h4 className="font-semibold text-red-700">Urgent: Semester End Examinations</h4>
                <p className="text-red-600 mt-1">Final semester examinations will commence from March 15, 2024. Students are advised to check their hall tickets.</p>
                <Button variant="outline" size="sm" className="mt-2">
                  <Download className="h-4 w-4 mr-2" />
                  Download Notice
                </Button>
              </div>
              
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                <h4 className="font-semibold text-blue-700">Mid-Term Results Available</h4>
                <p className="text-blue-600 mt-1">Mid-term examination results have been published. Students can check their performance online.</p>
                <Button variant="outline" size="sm" className="mt-2">
                  View Results
                </Button>
              </div>
              
              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <h4 className="font-semibold text-green-700">Exam Application Deadline Extended</h4>
                <p className="text-green-600 mt-1">The deadline for exam form submission has been extended to February 28, 2024.</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Apply Online
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Examination Rules */}
        <Card>
          <CardHeader>
            <CardTitle>Examination Rules & Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">For Students</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Arrive at exam hall 30 minutes before start time</li>
                  <li>• Bring valid ID card and hall ticket</li>
                  <li>• Mobile phones are strictly prohibited</li>
                  <li>• Use only blue/black ink pens</li>
                  <li>• Follow dress code guidelines</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">For Faculty</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Report to duty 45 minutes before exam</li>
                  <li>• Ensure proper seating arrangements</li>
                  <li>• Maintain strict vigilance during exam</li>
                  <li>• Submit answer scripts within time</li>
                  <li>• Follow evaluation guidelines</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Downloads Section */}
        <Card>
          <CardHeader>
            <CardTitle>Downloads & Forms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span>Exam Application Form</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span>Hall Ticket Download</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span>Exam Fee Structure</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span>Re-evaluation Form</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span>Supplementary Exam Form</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span>Grade Card Application</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Examination Cell</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Office Hours</h4>
                <p className="text-gray-600">Monday to Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Contact Details</h4>
                <p className="text-gray-600">Phone: +91-863-2345678</p>
                <p className="text-gray-600">Email: exams@svrmc.edu.in</p>
                <p className="text-gray-600">Location: Administrative Block, Ground Floor</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default ExaminationCell;