import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const StudentSupport = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const supportServices = [
    { name: "JKC", fullName: "Jawahar Knowledge Centre", path: "/student-support/jkc" },
    { name: "NSS", fullName: "National Service Scheme", path: "/student-support/nss" },
    { name: "NCC", fullName: "National Cadet Corps", path: "/student-support/ncc" },
    { name: "Women Empowerment", fullName: "Women Empowerment Cell", path: "/student-support/women-empowerment" },
    { name: "ICC", fullName: "Internal Complaints Committee", path: "/student-support/icc" },
    { name: "Gym and Sports", fullName: "Gym and Sports Facility", path: "/student-support/gym-sports" },
    { name: "Anti Ragging", fullName: "Anti Ragging Committee", path: "/student-support/anti-ragging" },
    { name: "Cultural Club", fullName: "Cultural Activities Club", path: "/student-support/cultural-club" },
    { name: "Consumer Club", fullName: "Consumer Awareness Club", path: "/student-support/consumer-club" },
    { name: "Eco-club", fullName: "Environmental Club", path: "/student-support/eco-club" },
    { name: "Scholarships", fullName: "Scholarship Programs", path: "/student-support/scholarships" }
  ];

  return (
    <PageLayout 
      title="Student Support Services" 
      description="Comprehensive support services and programs for student development and well-being at SVRM College"
    >
      <div className="space-y-8">
        {/* Introduction Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Student Support & Development</CardTitle>
            <CardDescription>
              At SVRM College, we believe in holistic development of our students. Our comprehensive support services ensure academic excellence, personal growth, and overall well-being.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              From academic assistance to extracurricular activities, from health and wellness to career guidance, we provide a nurturing environment that helps students excel in all aspects of their college life.
            </p>
          </CardContent>
        </Card>

        {/* Dropdown Navigation */}
        <Card>
          <CardHeader>
            <CardTitle>Support Services</CardTitle>
            <CardDescription>Choose a service to learn more about our programs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                className="flex items-center justify-between w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <span className="font-medium">Select a Support Service</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div 
                  className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-50"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div className="py-2">
                    {supportServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-4 py-3 hover:bg-muted transition-colors border-b border-border/50 last:border-b-0"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <div className="flex flex-col">
                          <span className="font-medium text-foreground">{service.name}</span>
                          <span className="text-sm text-muted-foreground">{service.fullName}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Quick Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportServices.slice(0, 6).map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{service.name}</CardTitle>
                <CardDescription>{service.fullName}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link 
                  to={service.path}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default StudentSupport;