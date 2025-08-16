import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Award, Briefcase, GraduationCap, Heart, Calendar } from "lucide-react";

const Alumni = () => {
  const featuredAlumni = [
    {
      name: "Dr. Rajesh Kumar",
      batch: "1995",
      department: "Physics",
      position: "Senior Scientist, ISRO",
      achievement: "Contributed to Chandrayaan-3 Mission",
      image: "/placeholder.svg"
    },
    {
      name: "Priya Venkatesh",
      batch: "2008",
      department: "Computer Science",
      position: "VP Engineering, Tech Startup",
      achievement: "Founded successful EdTech company",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Srinivas Reddy",
      batch: "1992",
      department: "Chemistry",
      position: "Research Director, Pharma Company",
      achievement: "Published 50+ research papers",
      image: "/placeholder.svg"
    }
  ];

  const events = [
    {
      title: "Annual Alumni Meet 2024",
      date: "March 15, 2024",
      description: "Join us for our grand alumni reunion with cultural programs and networking."
    },
    {
      title: "Career Guidance Session",
      date: "February 28, 2024",
      description: "Alumni sharing career insights with current students."
    },
    {
      title: "Scholarship Fund Drive",
      date: "January 20, 2024",
      description: "Supporting deserving students through alumni contributions."
    }
  ];

  return (
    <PageLayout 
      title="Alumni" 
      description="Celebrating the achievements of SVRMC graduates and fostering lifelong connections."
    >
      <div className="space-y-8">
        
        {/* Alumni Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">5,000+</h3>
              <p className="text-gray-600">Alumni Worldwide</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Briefcase className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">85%</h3>
              <p className="text-gray-600">Employed</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <GraduationCap className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">30%</h3>
              <p className="text-gray-600">Higher Studies</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">50+</h3>
              <p className="text-gray-600">Award Winners</p>
            </CardContent>
          </Card>
        </div>

        {/* Featured Alumni */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              Featured Alumni
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredAlumni.map((alumnus, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-16 w-16 mr-4">
                      <AvatarImage src={alumnus.image} alt={alumnus.name} />
                      <AvatarFallback>{alumnus.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-lg">{alumnus.name}</h4>
                      <Badge variant="secondary">{alumnus.department} - {alumnus.batch}</Badge>
                    </div>
                  </div>
                  <p className="font-medium text-college-blue mb-2">{alumnus.position}</p>
                  <p className="text-sm text-gray-600">{alumnus.achievement}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alumni Network */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Join Alumni Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Connect with fellow graduates, share experiences, and contribute to the growth of SVRMC community.
              </p>
              <div className="space-y-3">
                <Button className="w-full">Register as Alumni</Button>
                <Button variant="outline" className="w-full">Update Profile</Button>
                <Button variant="outline" className="w-full">Join WhatsApp Group</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="h-5 w-5 mr-2" />
                Give Back
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Support current students and contribute to the development of your alma mater.
              </p>
              <div className="space-y-3">
                <Button variant="outline" className="w-full">Scholarship Fund</Button>
                <Button variant="outline" className="w-full">Infrastructure Development</Button>
                <Button variant="outline" className="w-full">Guest Lecture</Button>
                <Button variant="outline" className="w-full">Mentorship Program</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div key={index} className="border-l-4 border-college-blue pl-4 py-2">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{event.title}</h4>
                    <Badge variant="outline">{event.date}</Badge>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Success Stories */}
        <Card>
          <CardHeader>
            <CardTitle>Success Stories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Corporate Leaders</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Our alumni hold leadership positions in top multinational companies across various industries.
                </p>
                <Button variant="outline" size="sm">Read Stories</Button>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Entrepreneurs</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Many graduates have started successful businesses and are creating employment opportunities.
                </p>
                <Button variant="outline" size="sm">View Profiles</Button>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Researchers & Academics</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Our alumni are contributing to cutting-edge research in universities and research institutions.
                </p>
                <Button variant="outline" size="sm">Research Papers</Button>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Social Impact</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Alumni working in NGOs and government sectors making a positive impact on society.
                </p>
                <Button variant="outline" size="sm">Impact Stories</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Alumni Cell */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Alumni Cell</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Alumni Coordinator</h4>
                <p className="text-gray-600">Prof. Suresh Kumar</p>
                <p className="text-gray-600">Phone: +91-863-2345680</p>
                <p className="text-gray-600">Email: alumni@svrmc.edu.in</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Office Hours</h4>
                <p className="text-gray-600">Monday to Friday: 10:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-600">Location: Admin Block, Room 201</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default Alumni;