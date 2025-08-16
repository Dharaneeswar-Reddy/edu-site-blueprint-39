import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wifi, Monitor, Smartphone, Cloud, Database, Shield } from "lucide-react";

const DigitalCampus = () => {
  const digitalServices = [
    {
      category: "Campus Connectivity",
      icon: Wifi,
      services: [
        { name: "High-Speed WiFi", coverage: "100% Campus", speed: "1 Gbps", users: "Unlimited" },
        { name: "Fiber Optic Network", coverage: "All Buildings", speed: "10 Gbps", users: "Faculty & Admin" },
        { name: "Mobile Hotspots", coverage: "Outdoor Areas", speed: "100 Mbps", users: "Students" },
        { name: "Guest Network", coverage: "Common Areas", speed: "50 Mbps", users: "Visitors" }
      ]
    },
    {
      category: "Digital Learning",
      icon: Monitor,
      services: [
        { name: "Smart Classrooms", coverage: "25 Rooms", speed: "Interactive", users: "All Classes" },
        { name: "Virtual Labs", coverage: "Online", speed: "24/7 Access", users: "Science Students" },
        { name: "E-Learning Platform", coverage: "Web & Mobile", speed: "Real-time", users: "All Students" },
        { name: "Digital Library", coverage: "24/7 Online", speed: "Instant Access", users: "Faculty & Students" }
      ]
    },
    {
      category: "Student Services",
      icon: Smartphone,
      services: [
        { name: "Student Portal", coverage: "Web & Mobile App", speed: "Real-time", users: "All Students" },
        { name: "Online Examination", coverage: "Secure Platform", speed: "Automated", users: "All Students" },
        { name: "Fee Payment", coverage: "Online Gateway", speed: "Instant", users: "Students & Parents" },
        { name: "Attendance System", coverage: "Biometric & RFID", speed: "Real-time", users: "All Students" }
      ]
    }
  ];

  const features = [
    { icon: Cloud, title: "Cloud Infrastructure", description: "Scalable cloud-based systems for all digital services" },
    { icon: Database, title: "Data Management", description: "Centralized database for student and academic records" },
    { icon: Shield, title: "Cybersecurity", description: "Advanced security measures to protect digital assets" },
    { icon: Smartphone, title: "Mobile First", description: "Mobile-responsive applications for easy access" }
  ];

  return (
    <PageLayout 
      title="Digital Campus" 
      description="Comprehensive digital infrastructure enabling modern education and seamless campus operations at SVRMC."
    >
      <div className="space-y-8">
        
        {/* Digital Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <feature.icon className="h-8 w-8 text-college-blue mx-auto mb-3" />
                <h3 className="font-semibold text-college-blue mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Digital Services */}
        {digitalServices.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <category.icon className="h-6 w-6 text-college-blue" />
                {category.category}
                <Badge variant="secondary">{category.services.length} Services</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Service</th>
                      <th className="text-left p-3 font-semibold">Coverage</th>
                      <th className="text-left p-3 font-semibold">Speed/Type</th>
                      <th className="text-left p-3 font-semibold">Users</th>
                      <th className="text-left p-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.services.map((service, idx) => (
                      <tr key={idx} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{service.name}</td>
                        <td className="p-3">{service.coverage}</td>
                        <td className="p-3">{service.speed}</td>
                        <td className="p-3">{service.users}</td>
                        <td className="p-3">
                          <Badge variant="default" className="bg-green-100 text-green-800">Active</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Digital Initiatives */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Digital Initiatives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-college-blue">2024 Implementations</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-medium">AI-Powered Learning Analytics</h5>
                    <p className="text-sm text-gray-600">Personalized learning insights for students</p>
                    <Badge variant="outline" className="mt-1">New</Badge>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-medium">Blockchain Certificates</h5>
                    <p className="text-sm text-gray-600">Tamper-proof digital certificates</p>
                    <Badge variant="outline" className="mt-1">New</Badge>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-medium">Virtual Reality Labs</h5>
                    <p className="text-sm text-gray-600">Immersive learning experiences</p>
                    <Badge variant="outline" className="mt-1">Pilot</Badge>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-college-blue">Upcoming Projects</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h5 className="font-medium">IoT Campus Monitoring</h5>
                    <p className="text-sm text-gray-600">Smart sensors for campus management</p>
                    <Badge variant="outline" className="mt-1">Q2 2024</Badge>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-medium">5G Network Upgrade</h5>
                    <p className="text-sm text-gray-600">Ultra-high-speed connectivity</p>
                    <Badge variant="outline" className="mt-1">Q3 2024</Badge>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h5 className="font-medium">Digital Twin Campus</h5>
                    <p className="text-sm text-gray-600">Virtual replica for planning</p>
                    <Badge variant="outline" className="mt-1">Q4 2024</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Specifications */}
        <Card>
          <CardHeader>
            <CardTitle>Technical Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-blue-700">Network Infrastructure</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Bandwidth: 10 Gbps dedicated</li>
                  <li>• WiFi Standard: 802.11ax (WiFi 6)</li>
                  <li>• Access Points: 200+ distributed</li>
                  <li>• Uptime: 99.9% SLA guarantee</li>
                  <li>• Redundancy: Dual ISP connections</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-700">Data & Security</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Data Center: Tier 3 certified</li>
                  <li>• Backup: Daily automated backups</li>
                  <li>• Encryption: AES-256 standard</li>
                  <li>• Firewall: Next-gen security</li>
                  <li>• Monitoring: 24/7 SOC services</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-700">Applications</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• LMS: Moodle-based platform</li>
                  <li>• ERP: Integrated campus management</li>
                  <li>• Mobile Apps: iOS & Android</li>
                  <li>• Analytics: Real-time dashboards</li>
                  <li>• APIs: RESTful integration</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default DigitalCampus;