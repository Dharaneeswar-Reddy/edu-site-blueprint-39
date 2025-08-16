import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Wifi, Book, Beaker, Users, Car, Utensils, Heart } from "lucide-react";

const Infrastructure = () => {
  const facilities = [
    {
      category: "Academic Buildings",
      icon: Building,
      items: [
        { name: "Main Academic Block", description: "Modern classrooms with smart boards", capacity: "50+ rooms" },
        { name: "Science Block", description: "Well-equipped laboratories", capacity: "15 labs" },
        { name: "Computer Center", description: "Latest technology systems", capacity: "100+ systems" },
        { name: "Library Building", description: "Digital and physical resources", capacity: "500 seats" }
      ]
    },
    {
      category: "Digital Infrastructure", 
      icon: Wifi,
      items: [
        { name: "Campus WiFi", description: "High-speed internet connectivity", capacity: "24/7 access" },
        { name: "Smart Classrooms", description: "Interactive learning environments", capacity: "25 rooms" },
        { name: "Digital Library", description: "Online resources and databases", capacity: "24/7 access" },
        { name: "Learning Management System", description: "Online course delivery", capacity: "All students" }
      ]
    },
    {
      category: "Research Facilities",
      icon: Beaker,
      items: [
        { name: "Research Labs", description: "Advanced research equipment", capacity: "10 labs" },
        { name: "Central Instrumentation", description: "Sophisticated analytical tools", capacity: "Shared facility" },
        { name: "Innovation Hub", description: "Student project development", capacity: "50 students" },
        { name: "Incubation Center", description: "Startup support facility", capacity: "20 startups" }
      ]
    },
    {
      category: "Student Facilities",
      icon: Users,
      items: [
        { name: "Hostels", description: "Comfortable accommodation", capacity: "500 students" },
        { name: "Cafeteria", description: "Hygienic food services", capacity: "300 seats" },
        { name: "Sports Complex", description: "Indoor and outdoor sports", capacity: "Multiple facilities" },
        { name: "Medical Center", description: "Healthcare services", capacity: "24/7 emergency" }
      ]
    }
  ];

  const stats = [
    { icon: Building, label: "Total Area", value: "25 Acres", color: "text-blue-600" },
    { icon: Book, label: "Classrooms", value: "75+", color: "text-green-600" },
    { icon: Beaker, label: "Laboratories", value: "25+", color: "text-purple-600" },
    { icon: Car, label: "Parking Space", value: "200+ vehicles", color: "text-orange-600" }
  ];

  return (
    <PageLayout 
      title="Infrastructure" 
      description="State-of-the-art facilities and infrastructure supporting quality education and research at SVRMC."
    >
      <div className="space-y-8">
        
        {/* Infrastructure Stats */}
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

        {/* Facility Categories */}
        {facilities.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <category.icon className="h-6 w-6 text-college-blue" />
                {category.category}
                <Badge variant="secondary">{category.items.length} Facilities</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, idx) => (
                  <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-college-blue mb-2">{item.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    <Badge variant="outline">{item.capacity}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Campus Amenities */}
        <Card>
          <CardHeader>
            <CardTitle>Campus Amenities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Utensils className="h-8 w-8 text-blue-600 mb-4" />
                <h4 className="font-semibold mb-3 text-blue-700">Food & Dining</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Main Cafeteria (300 seats)</li>
                  <li>• Student Canteen</li>
                  <li>• Faculty Dining Hall</li>
                  <li>• 24/7 Vending Machines</li>
                  <li>• Juice Bar</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <Heart className="h-8 w-8 text-green-600 mb-4" />
                <h4 className="font-semibold mb-3 text-green-700">Health & Wellness</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Medical Center with Doctor</li>
                  <li>• First Aid Stations</li>
                  <li>• Gymnasium</li>
                  <li>• Yoga & Meditation Center</li>
                  <li>• Counseling Services</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <Car className="h-8 w-8 text-purple-600 mb-4" />
                <h4 className="font-semibold mb-3 text-purple-700">Transportation</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• College Bus Service</li>
                  <li>• Bicycle Parking</li>
                  <li>• Two-wheeler Parking</li>
                  <li>• Car Parking</li>
                  <li>• 24/7 Security</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Green Campus Initiative */}
        <Card>
          <CardHeader>
            <CardTitle>Green Campus Initiative</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="font-semibold text-green-700 mb-2">Environmental Sustainability</h4>
                <p className="text-gray-600 text-sm mb-2">
                  SVRMC is committed to creating an eco-friendly campus environment.
                </p>
                <ul className="text-sm text-gray-600">
                  <li>• Solar power generation (50% campus energy)</li>
                  <li>• Rainwater harvesting systems</li>
                  <li>• Waste segregation and recycling</li>
                  <li>• Organic gardening and composting</li>
                  <li>• Plastic-free campus initiative</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-semibold text-blue-700 mb-2">Energy Conservation</h4>
                <p className="text-gray-600 text-sm mb-2">
                  Modern energy-efficient systems and conservation practices.
                </p>
                <ul className="text-sm text-gray-600">
                  <li>• LED lighting throughout campus</li>
                  <li>• Motion sensor-based lighting</li>
                  <li>• Energy-efficient HVAC systems</li>
                  <li>• Smart metering for electricity</li>
                  <li>• Regular energy audits</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default Infrastructure;