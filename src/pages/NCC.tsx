import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Trophy, Users, Star, Award, Shield, Target } from "lucide-react";

const NCC = () => {
  const nccActivities = [
    {
      date: "2025-01-15",
      event: "Republic Day Parade Training",
      description: "Intensive training for Republic Day parade participation",
      participants: 45,
      type: "Training"
    },
    {
      date: "2025-02-20",
      event: "Annual Training Camp",
      description: "10-day annual training camp at district headquarters",
      participants: 60,
      type: "Camp"
    },
    {
      date: "2025-03-10",
      event: "Blood Donation Camp",
      description: "Social service activity for community welfare",
      participants: 35,
      type: "Social Service"
    },
    {
      date: "2025-04-05",
      event: "Trekking Expedition",
      description: "Adventure activity to promote physical fitness",
      participants: 25,
      type: "Adventure"
    },
    {
      date: "2025-05-15",
      event: "Environmental Awareness Drive",
      description: "Tree plantation and cleanliness drive",
      participants: 50,
      type: "Environment"
    },
    {
      date: "2025-06-20",
      event: "Combined Annual Training Camp",
      description: "Inter-college combined training program",
      participants: 40,
      type: "Training"
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "Best NCC Unit Award",
      description: "Recognized as the best NCC unit in the district for outstanding performance",
      image: "/lovable-uploads/33bce374-c279-4e5c-afa1-9a764d7977c4.png"
    },
    {
      year: "2024",
      title: "Republic Day Parade Participation",
      description: "15 cadets selected for state-level Republic Day parade",
      image: "/lovable-uploads/17bb2e0f-adc8-46fd-b6dc-aa370c366ef2.png"
    },
    {
      year: "2023",
      title: "National Integration Camp",
      description: "5 cadets participated in National Integration Camp at Delhi",
      image: "/lovable-uploads/365bcf12-2218-4dd4-a6e7-6d4bc591739a.png"
    },
    {
      year: "2023",
      title: "Social Service Excellence",
      description: "Outstanding contribution in flood relief operations",
      image: "/lovable-uploads/4459cba5-4f2b-407d-9115-b78608126cab.png"
    }
  ];

  return (
    <PageLayout
      title="National Cadet Corps (NCC)"
      description="Developing leadership, discipline, and patriotism among students through the NCC program"
    >
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="about">About NCC</TabsTrigger>
          <TabsTrigger value="message">NCC Head Message</TabsTrigger>
          <TabsTrigger value="activities">NCC Activities</TabsTrigger>
          <TabsTrigger value="achievements">NCC Achievements</TabsTrigger>
          <TabsTrigger value="gallery">Photo Gallery</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="mt-6">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  About NCC Unit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4">
                      The National Cadet Corps (NCC) unit at SVRM College was established in 1995 with the aim of developing character, comradeship, discipline, leadership, secular outlook, and the spirit of adventure among the youth of our nation.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Our NCC unit is affiliated with the 15 Andhra Battalion and operates under the motto "Unity and Discipline". We offer training in both Army and Navy wings, providing comprehensive military training to our cadets.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <h3 className="font-semibold text-blue-900">120+</h3>
                        <p className="text-sm text-gray-600">Total Cadets</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <h3 className="font-semibold text-green-900">15+</h3>
                        <p className="text-sm text-gray-600">Awards Won</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/3135e1f8-603d-4960-af26-bdc4f401f693.png" 
                      alt="NCC Training" 
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Objectives</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Target className="h-4 w-4 text-blue-600 mt-0.5" />
                      <span>Develop leadership qualities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="h-4 w-4 text-blue-600 mt-0.5" />
                      <span>Instill discipline and character</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="h-4 w-4 text-blue-600 mt-0.5" />
                      <span>Promote national integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="h-4 w-4 text-blue-600 mt-0.5" />
                      <span>Build adventure spirit</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Training Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Drill and Ceremonials</li>
                    <li>• Physical Fitness Training</li>
                    <li>• Map Reading & Field Craft</li>
                    <li>• First Aid & Home Nursing</li>
                    <li>• Social Service Activities</li>
                    <li>• Adventure Sports</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Wings Available</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900">Army Wing</h4>
                      <p className="text-sm text-gray-600">Land-based military training</p>
                    </div>
                    <div className="p-3 bg-navy-50 rounded-lg">
                      <h4 className="font-semibold text-navy-900">Naval Wing</h4>
                      <p className="text-sm text-gray-600">Maritime and naval training</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="message" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Message from NCC Officer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/26e5dd9a-23af-4d35-bf39-50ea0a90dcc1.png" 
                    alt="NCC Officer" 
                    className="w-48 h-56 object-cover rounded-lg mx-auto mb-4 shadow-md"
                  />
                  <h3 className="font-bold text-lg">Lt. Col. Priya Sharma</h3>
                  <p className="text-sm text-gray-600">Officer Commanding</p>
                  <p className="text-sm text-gray-600">15 Andhra Battalion NCC</p>
                </div>
                <div className="md:col-span-2">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 mb-4">
                      "Dear Cadets and Students,
                    </p>
                    <p className="text-gray-700 mb-4">
                      It gives me immense pleasure to welcome you to the NCC family of SVRM College. The National Cadet Corps is not just about military training; it's a platform that shapes young minds into responsible citizens and future leaders of our nation.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Through our comprehensive training programs, we aim to instill the values of discipline, leadership, and service before self. Our cadets learn to work as a team, develop confidence, and gain practical skills that serve them throughout their lives.
                    </p>
                    <p className="text-gray-700 mb-4">
                      I encourage all students to join our NCC unit and be part of this transformative journey. Together, we will build a stronger, more disciplined, and patriotic generation that will contribute significantly to our nation's progress.
                    </p>
                    <p className="text-gray-700 font-semibold">
                      Unity and Discipline!"
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activities" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-6 w-6" />
                NCC Activities Calendar 2025
              </CardTitle>
              <CardDescription>
                Annual schedule of NCC training programs and activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {nccActivities.map((activity, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-medium text-blue-600">
                            {new Date(activity.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                          <Badge variant="outline" className="ml-2">
                            {activity.type}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-lg mb-1">{activity.event}</h3>
                        <p className="text-gray-600 text-sm mb-2">{activity.description}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Users className="h-4 w-4" />
                          <span>{activity.participants} participants expected</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-yellow-600" />
                NCC Achievements & Awards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div className="text-center">
                        <img 
                          src={achievement.image} 
                          alt={achievement.title} 
                          className="w-24 h-24 object-cover rounded-lg mx-auto mb-2"
                        />
                        <Badge variant="secondary">{achievement.year}</Badge>
                      </div>
                      <div className="md:col-span-3">
                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                          <Star className="h-5 w-5 text-yellow-500" />
                          {achievement.title}
                        </h3>
                        <p className="text-gray-700">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gallery" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>NCC Photo Gallery</CardTitle>
              <CardDescription>
                Capturing moments of training, achievements, and memorable events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "/lovable-uploads/33bce374-c279-4e5c-afa1-9a764d7977c4.png",
                  "/lovable-uploads/17bb2e0f-adc8-46fd-b6dc-aa370c366ef2.png",
                  "/lovable-uploads/365bcf12-2218-4dd4-a6e7-6d4bc591739a.png",
                  "/lovable-uploads/4459cba5-4f2b-407d-9115-b78608126cab.png",
                  "/lovable-uploads/3135e1f8-603d-4960-af26-bdc4f401f693.png",
                  "/lovable-uploads/26e5dd9a-23af-4d35-bf39-50ea0a90dcc1.png"
                ].map((image, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <img 
                      src={image} 
                      alt={`NCC Activity ${index + 1}`} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default NCC;