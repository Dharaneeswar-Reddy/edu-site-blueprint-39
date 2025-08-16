import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Clock, MapPin } from "lucide-react";

const SportsFacilities = () => {
  const facilities = [
    {
      category: "Outdoor Sports",
      facilities: [
        { name: "Cricket Ground", size: "Full Size", capacity: "500 spectators", features: ["Turf Wicket", "Pavilion", "Floodlights"] },
        { name: "Football Field", size: "90x45m", capacity: "300 spectators", features: ["Natural Grass", "Goal Posts", "Changing Rooms"] },
        { name: "Basketball Court", size: "28x15m", capacity: "200 spectators", features: ["Synthetic Surface", "Floodlights", "Scoreboards"] },
        { name: "Volleyball Court", size: "18x9m", capacity: "150 spectators", features: ["Sand Court", "Professional Net", "Lighting"] },
        { name: "Tennis Court", size: "23x11m", capacity: "100 spectators", features: ["Hard Court", "Net", "Fencing"] },
        { name: "Athletics Track", size: "400m", capacity: "1000 spectators", features: ["8 Lanes", "All Weather", "Field Events"] }
      ]
    },
    {
      category: "Indoor Sports",
      facilities: [
        { name: "Gymnasium", size: "30x20m", capacity: "200 spectators", features: ["Multi-purpose", "AC", "Sound System"] },
        { name: "Badminton Court", size: "13x6m", capacity: "100 spectators", features: ["4 Courts", "Wooden Floor", "Professional Lighting"] },
        { name: "Table Tennis Hall", size: "15x10m", capacity: "50 spectators", features: ["8 Tables", "Tournament Standard", "Air Conditioned"] },
        { name: "Chess Room", size: "10x8m", capacity: "30 players", features: ["16 Boards", "Digital Clocks", "Library"] },
        { name: "Carrom Hall", size: "12x8m", capacity: "40 players", features: ["10 Boards", "Tournament Grade", "Seating"] },
        { name: "Fitness Center", size: "20x15m", capacity: "50 users", features: ["Modern Equipment", "Cardio Zone", "Trainer"] }
      ]
    }
  ];

  const achievements = [
    { year: "2023", event: "Inter-College Cricket", position: "Champions", level: "University" },
    { year: "2023", event: "Basketball Tournament", position: "Runners-up", level: "State" },
    { year: "2022", event: "Athletics Meet", position: "Champions", level: "District" },
    { year: "2022", event: "Volleyball Championship", position: "Champions", level: "University" },
    { year: "2021", event: "Football League", position: "Semi-finalists", level: "State" },
    { year: "2021", event: "Badminton Tournament", position: "Champions", level: "Inter-college" }
  ];

  const stats = [
    { icon: Trophy, label: "Championships Won", value: "25+", color: "text-yellow-600" },
    { icon: Users, label: "Active Athletes", value: "300+", color: "text-blue-600" },
    { icon: Clock, label: "Training Hours/Week", value: "40+", color: "text-green-600" },
    { icon: MapPin, label: "Sports Facilities", value: "15+", color: "text-purple-600" }
  ];

  return (
    <PageLayout 
      title="Sports Facilities" 
      description="Comprehensive sports infrastructure promoting physical fitness, competitive spirit, and overall personality development at SVRMC."
    >
      <div className="space-y-8">
        
        {/* Sports Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                <h3 className="text-2xl font-bold text-college-blue">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sports Facilities */}
        {facilities.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Trophy className="h-6 w-6 text-college-blue" />
                {category.category}
                <Badge variant="secondary">{category.facilities.length} Facilities</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.facilities.map((facility, idx) => (
                  <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-college-blue mb-2">{facility.name}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Size:</span>
                        <span className="font-medium">{facility.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Capacity:</span>
                        <span className="font-medium">{facility.capacity}</span>
                      </div>
                      <div className="mt-3">
                        <span className="text-gray-600 text-xs">Features:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {facility.features.map((feature, featureIdx) => (
                            <Badge key={featureIdx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Recent Achievements */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Year</th>
                    <th className="text-left p-3 font-semibold">Event</th>
                    <th className="text-left p-3 font-semibold">Position</th>
                    <th className="text-left p-3 font-semibold">Level</th>
                  </tr>
                </thead>
                <tbody>
                  {achievements.map((achievement, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{achievement.year}</td>
                      <td className="p-3">{achievement.event}</td>
                      <td className="p-3">
                        <Badge variant={achievement.position === "Champions" ? "default" : "secondary"}>
                          {achievement.position}
                        </Badge>
                      </td>
                      <td className="p-3">{achievement.level}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Sports Programs */}
        <Card>
          <CardHeader>
            <CardTitle>Sports Programs & Training</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-blue-700">Regular Training</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Daily morning sports sessions</li>
                  <li>• Professional coaching staff</li>
                  <li>• Specialized training programs</li>
                  <li>• Fitness assessment & monitoring</li>
                  <li>• Nutritional guidance</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-700">Competitions</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Inter-house competitions</li>
                  <li>• Inter-college tournaments</li>
                  <li>• University championships</li>
                  <li>• State-level participation</li>
                  <li>• National tournament entries</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-700">Support Services</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sports medicine & physiotherapy</li>
                  <li>• Equipment maintenance</li>
                  <li>• Transportation for events</li>
                  <li>• Sports scholarships</li>
                  <li>• Academic flexibility for athletes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Sports Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-semibold text-blue-700 mb-2">Annual Sports Day 2024</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Three-day annual sports festival with various competitions and cultural events.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">March 15-17, 2024</Badge>
                  <Badge variant="secondary">All Sports</Badge>
                </div>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="font-semibold text-green-700 mb-2">Inter-College Cricket Tournament</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Hosting the annual university-level cricket championship.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">April 5-12, 2024</Badge>
                  <Badge variant="secondary">Cricket</Badge>
                </div>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="font-semibold text-purple-700 mb-2">State Athletics Championship</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Participation in state-level athletics meet with qualifying events.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">May 20-22, 2024</Badge>
                  <Badge variant="secondary">Athletics</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default SportsFacilities;