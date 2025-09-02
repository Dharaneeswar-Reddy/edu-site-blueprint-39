import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Clock, MapPin, Users, Award } from "lucide-react";
import { useState } from "react";
import { 
  useStudentSupportServices,
  useStudentSupportReports, 
  useStudentSupportStaff, 
  useStudentSupportGallery 
} from "@/hooks/useStudentSupportServices";
import { useStaff } from "@/hooks/useStaff";

const GymSports = () => {
  const serviceName = "Gym Sports";
  const { services } = useStudentSupportServices(serviceName);
  const { reports } = useStudentSupportReports(serviceName);
  const { staff: supportStaff } = useStudentSupportStaff(serviceName);
  const { gallery } = useStudentSupportGallery(serviceName);
  
  // Fetch Physical Education department staff
  const { staff: physicalEducationStaff } = useStaff("Physical Education");
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const service = services[0];

  // Hero Images for Carousel
  const heroImages = [
    "/lovable-uploads/0a24c18b-02f9-4923-8b35-69a39638563c.png",
    "/lovable-uploads/159135ff-efea-4c77-a668-803d3c9b66aa.png",
    "/lovable-uploads/f904993f-8b09-4343-bb50-d6155ec79f58.png",
    "/lovable-uploads/2983da9b-4ea9-4555-9587-2eeacf219b67.png"
  ];

  // Updated About content
  const aboutContent = "Our Gym and Sports Facilities are designed to promote a healthy, active lifestyle for individuals of all ages and fitness levels. Whether you're looking to improve your physical well-being, engage in recreational sports, or train professionally, our facilities provide the perfect environment to achieve your goals.";

  // Vision and Mission
  const vision = "To inspire and empower individuals to lead healthier, more active lives by providing world-class gym and sports facilities that promote fitness, well-being, and community engagement. We aim to create an inclusive environment where people of all ages and fitness levels feel supported in achieving their personal health goals—through innovative training spaces, expert guidance, and a culture of motivation and wellness.";

  const mission = [
    "Delivering high-quality fitness and sports experiences for all age groups",
    "Encouraging an active lifestyle through structured programs and open-access facilities", 
    "Supporting individual goals through professional guidance and a welcoming environment",
    "Fostering teamwork, discipline, and personal growth through sports and physical activity"
  ];

  // Objectives
  const objectives = [
    "Promote Health & Wellness - Encourage individuals to adopt an active lifestyle for improved physical and mental well-being.",
    "Provide Modern Fitness Infrastructure - Maintain state-of-the-art gym equipment and well-designed sports facilities to cater to diverse fitness needs.",
    "Support All Fitness Levels - Offer programs and services suitable for beginners, intermediate users, and professional athletes alike.",
    "Encourage Sports Participation - Foster a love for sports through regular events, practice sessions, and recreational games.",
    "Ensure Safe & Inclusive Environment - Create a welcoming space where people of all ages, genders, and abilities feel comfortable and supported.",
    "Promote Lifelong Fitness Habits - Instill the importance of regular physical activity as a key part of a balanced lifestyle.",
    "Develop Teamwork & Discipline - Use sports and fitness training as tools to build character, teamwork, and personal discipline.",
    "Deliver Professional Guidance - Provide access to certified trainers and coaches for safe and effective workouts."
  ];

  // Modern Gym Features
  const gymFeatures = [
    "Latest cardio machines and strength-training equipment",
    "Free weights, resistance bands, and functional training gear",
    "Spacious workout area with air conditioning",
    "Certified fitness trainers to guide your workouts",
    "Personal training and fitness assessments"
  ];

  // Sports Facilities
  const sportsFeatures = [
    "Basketball, volleyball, and badminton courts",
    "Football and cricket grounds",
    "Indoor table tennis and squash courts",
    "Dedicated spaces for yoga and aerobics",
    "Regular tournaments and practice sessions"
  ];

  // Safety & Cleanliness Features
  const safetyFeatures = [
    "Hygienic facilities with regular sanitation",
    "Locker rooms with secure storage",
    "First-aid support and trained staff on-site"
  ];

  // Gallery Images
  const galleryImages = [
    "/lovable-uploads/0a24c18b-02f9-4923-8b35-69a39638563c.png",
    "/lovable-uploads/159135ff-efea-4c77-a668-803d3c9b66aa.png",
    "/lovable-uploads/f904993f-8b09-4343-bb50-d6155ec79f58.png",
    "/lovable-uploads/2983da9b-4ea9-4555-9587-2eeacf219b67.png",
    "/lovable-uploads/b668c276-535b-4004-80ce-3ab7742ddb38.png",
    "/lovable-uploads/8406d4c8-0d8c-46c1-8232-83529137997f.png",
    "/lovable-uploads/dbef153d-61c2-4837-aae4-ccdaf1963618.png",
    "/lovable-uploads/c22a7a50-9dcb-46f9-8ac6-e8d8a4610e1b.png",
    "/lovable-uploads/10892d74-b7cb-4944-8cce-627d22c30f62.png"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <PageLayout 
      title="Gym and Sports Facility" 
      description="Modern fitness and sports facilities for student wellness and athletic development at SVRM College"
    >
      <div className="space-y-8">
        {/* Hero Image Carousel */}
        <Card>
          <div className="relative h-96 overflow-hidden rounded-lg">
            <img 
              src={heroImages[currentImageIndex]} 
              alt="Gym and Sports Facilities"
              className="w-full h-full object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </Card>

        {/* About Our Gym & Sports Facilities */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">About Our Gym & Sports Facilities</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {service?.description || aboutContent}
            </p>
          </CardContent>
        </Card>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">Our Vision</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service?.vision || vision}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">Mission</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                Our mission is to promote physical fitness, mental well-being, and a spirit of healthy competition by providing safe, modern, and accessible gym and sports facilities.
              </p>
              <p className="text-muted-foreground mb-3">We are committed to:</p>
              <ul className="space-y-2">
                {mission.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-3">
                Through our gym and sports amenities, we aim to build a healthier, more connected community.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Facilities Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Modern Gym */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Modern Gym
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">Our fully equipped gym features:</p>
              <ul className="space-y-2">
                {gymFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Sports Facilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Sports Facilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">We offer a wide range of indoor and outdoor sports options:</p>
              <ul className="space-y-2">
                {sportsFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Safety & Cleanliness */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Safety & Cleanliness
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {safetyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Timings & Membership */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Timings & Membership
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">Operating Hours</h4>
                <p className="text-muted-foreground">Open daily from 6:00 AM to 10:00 PM</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Membership Plans</h4>
                <p className="text-muted-foreground">Flexible membership plans for individuals, families, and students</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Trial Options</h4>
                <p className="text-muted-foreground">Trial sessions and day passes available</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Objectives */}
        <Card>
          <CardHeader>
            <CardTitle>Objectives of Our Gym & Sports Facilities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Yearly Reports */}
        {reports.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Yearly Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h4 className="font-medium">{report.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        Year: {report.academic_year}
                        {report.description && ` | ${report.description}`}
                      </p>
                    </div>
                    <a 
                      href={report.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                    >
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Sports Staff */}
        <Card>
          <CardHeader>
            <CardTitle>Physical Education Department Staff</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {physicalEducationStaff.length > 0 ? 
                physicalEducationStaff.map((member, index) => (
                  <div key={member.id || index} className="text-center">
                    <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      {member.photo_url ? (
                        <img 
                          src={member.photo_url} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-muted-foreground">Photo</span>
                      )}
                    </div>
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-sm text-primary">{member.designation}</p>
                    <p className="text-xs text-muted-foreground">{member.department}</p>
                    {member.qualification && (
                      <p className="text-xs text-muted-foreground mt-1">
                        <strong>Qualification:</strong> {member.qualification}
                      </p>
                    )}
                    {member.experience && (
                      <p className="text-xs text-muted-foreground">
                        <strong>Experience:</strong> {member.experience}
                      </p>
                    )}
                    {member.bio && (
                      <p className="text-xs text-muted-foreground">
                        <strong>Bio:</strong> {member.bio}
                      </p>
                    )}
                  </div>
                )) :
                supportStaff.map((member, index) => (
                  <div key={member.id || index} className="text-center">
                    <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      {member.photo_url ? (
                        <img 
                          src={member.photo_url} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-muted-foreground">Photo</span>
                      )}
                    </div>
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-sm text-primary">{member.designation}</p>
                    <p className="text-xs text-muted-foreground">{member.department}</p>
                  </div>
                ))
              }
            </div>
          </CardContent>
        </Card>

        {/* Photo Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>Photo Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(gallery.length > 0 ? gallery.map(img => img.image_url) : galleryImages).map((image, index) => (
                <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Gym and Sports Activity ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default GymSports;