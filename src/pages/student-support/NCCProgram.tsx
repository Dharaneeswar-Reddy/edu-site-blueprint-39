import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { 
  useStudentSupportServices,
  useStudentSupportReports, 
  useStudentSupportStaff, 
  useStudentSupportGallery 
} from "@/hooks/useStudentSupportServices";

const NCCProgram = () => {
  const serviceName = "NCC";
  const { services } = useStudentSupportServices(serviceName);
  const { reports } = useStudentSupportReports(serviceName);
  const { staff } = useStudentSupportStaff(serviceName);
  const { gallery } = useStudentSupportGallery(serviceName);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const service = services[0];

  // Updated comprehensive description
  const defaultDescription = "The NCC unit at our college instills discipline, leadership, and patriotism among students. Cadets participate in drill, community service, adventure activities, and social awareness programs, shaping them into responsible and confident citizens.";
  
  const aboutContent = `The mentors of S.V.R.M. College, Nagaram — Smt. Rajeswari Ramakrishnan, Founder President of the Management, Dr. N.V. Krishna Rao, Founder Secretary & Correspondent, and Sri K. Umavara Murthy, Founder Principal — recognized the vital need for NCC in the college to shape rural youth in a disciplined and organized manner. Surrounded by socially, economically, and educationally backward villages, they envisioned NCC as the backbone of the college, training students to contribute effectively to nation-building.

This vision was realized in 1969, marking the birth of NCC at S.V.R.M. College. Since its inception, the NCC unit has made a notable mark in the 22 Andhra Battalion and the Guntur Group, establishing a tradition of excellence.

Over the years, our NCC company has expanded its core activities across multiple fields, becoming a model organization in the region. The unit's efforts have been appreciated by the District Police, Revenue Authorities, Medical and Health Departments, and rural communities alike.

Current Leadership: The legacy continues under the guidance of Sri Vallabhaneni Buchaiah Chowdary, the current Secretary & Correspondent, whose dedicated services have further strengthened the NCC's mission of discipline, leadership, and community service, ensuring that S.V.R.M. College remains a beacon of youth empowerment and nation-building.`;

  const visionContent = "To develop disciplined, responsible, and socially conscious citizens from rural backgrounds, empowering them with leadership, civic awareness, and community service skills, and preparing them to contribute effectively to nation-building.";
  
  const missionPoints = [
    "To instill discipline, patriotism, and leadership qualities among students through structured NCC training programs.",
    "To promote community engagement, social responsibility, and awareness through rural outreach and service activities.",
    "To provide practical exposure in drills, adventure activities, and social initiatives, enhancing confidence and teamwork.",
    "To nurture students as future leaders, capable of contributing positively to society and the nation."
  ];

  const objectives = [
    "Discipline and Leadership – Develop self-discipline, punctuality, responsibility, and leadership skills.",
    "Patriotism and National Integration – Foster love for the country, respect for its culture, and participation in national events.",
    "Physical Fitness and Outdoor Skills – Improve endurance, stamina, and health; conduct trekking, camping, and survival training.",
    "Social Service and Community Engagement – Participate in blood donation, literacy drives, environmental awareness, and disaster relief activities.",
    "Disaster Preparedness and First Aid – Learn emergency response, first aid, and fire safety skills.",
    "Teamwork and Organizational Skills – Enhance coordination, communication, and team spirit through group activities.",
    "Career Orientation and Personality Development – Build confidence, resilience, and organizational abilities for academic and career growth.",
    "Cultural and Extracurricular Activities – Engage in cultural programs, competitions, and adventure events for holistic development."
  ];

  const keyActivities = [
    "Drills and Parades: Regular training in discipline, coordination, and ceremonial duties.",
    "Annual Camps: Pre-RD Camps, Special Camps, and Trekking Camps for practical exposure and leadership development.",
    "Social Service: Conduct health camps, awareness drives, and community development programs in surrounding villages.",
    "Adventure Training: Participation in mountaineering, trekking, and obstacle courses to enhance physical and mental resilience.",
    "Competitions: Inter-college and university-level contests in drill, cultural events, and leadership tasks.",
    "First Aid and Disaster Management: Workshops on emergency preparedness, fire safety, and basic medical care."
  ];

  const achievements = [
    "Cadets of SVRM College have represented Acharya Nagarjuna University and the state in various Inter-University and National NCC competitions.",
    "Regular participation in Republic Day, Independence Day, and NCC parade events.",
    "Recognition for community service initiatives and contribution to local social welfare programs."
  ];

  const communityOutreach = [
    "NCC cadets actively engage in blood donation camps, plantation drives, literacy programs, and health awareness initiatives in nearby villages.",
    "During natural calamities or emergencies, cadets contribute to rescue and relief operations under guidance.",
    "Conduct training sessions for school students on discipline, physical fitness, and community service."
  ];

  const communityDevelopmentActivities = [
    "Special Programmes: Participation in River Krishna Pushkarams, bridge and road repairs, election assistance, free medical camps, and aid to AIDS victims.",
    "Ongoing Programmes: Vigilance Awareness Week, Clean & Green drives, blood donation camps, and health awareness initiatives.",
    "Linkages: Collaborates with Police, Medical, Revenue, Red Cross, and local NGOs to enhance community service.",
    "Future Vision: Campaigns against theft, AIDS, corruption, and eve-teasing; and establishing a Bureau of Employment for cadets' career guidance."
  ];

  // New NCC images
  const nccImages = [
    "/lovable-uploads/858270a8-3ca9-455c-9216-63c155cf8b4d.png",
    "/lovable-uploads/d5a1554b-9e86-4738-a305-d3f828213527.png",
    "/lovable-uploads/6299f44c-d3ec-481c-b84b-2781e4cbe3b5.png",
    "/lovable-uploads/360fbad9-451c-4083-ba24-01532cebae22.png",
    "/lovable-uploads/3df73e62-c65c-4060-864d-2c751cf8c451.png",
    "/lovable-uploads/6e89e732-31ea-4aa8-b75e-4d4509cb4259.png",
    "/lovable-uploads/c47e3185-65bf-4d68-a414-0e2bd1f3f386.png",
    "/lovable-uploads/963bd897-1fdd-4c07-a3a9-2fdfe2a76748.png",
    "/lovable-uploads/517ac69c-c158-4d5f-b28a-2ab9d890626c.png",
    "/lovable-uploads/623f5f73-0759-453e-bc18-337d9378c5b4.png"
  ];

  const imageDescriptions = [
    "NCC Group Photo - Cadets in formation",
    "Certificate Distribution Ceremony",
    "Drill Training Session",
    "Drug Free India Campaign",
    "Flag Ceremony with Officials",
    "Independence Day Parade",
    "NCC Group Formation",
    "Ceremonial Event",
    "Training Formation",
    "Group Photo with Staff and Cadets"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % nccImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + nccImages.length) % nccImages.length);
  };

  return (
    <PageLayout 
      title="National Cadet Corps (NCC)" 
      description="Character building and leadership development program through military training at SVRM College"
    >
      <div className="space-y-8">
        {/* Hero Image Carousel */}
        <Card>
          <CardContent className="p-0">
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              <img 
                src={nccImages[currentImageIndex]} 
                alt={imageDescriptions[currentImageIndex]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-3xl font-bold mb-2">National Cadet Corps</h2>
                  <p className="text-lg">Unity and Discipline</p>
                </div>
              </div>
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
              >
                <ChevronRight size={24} />
              </button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {nccImages.map((_, index) => (
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
          </CardContent>
        </Card>

        {/* Introduction */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">About NCC</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {service?.description || defaultDescription}
            </p>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              {aboutContent.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">Vision</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service?.vision || visionContent}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">Mission</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                {(service?.mission ? [service.mission] : missionPoints).map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Objectives */}
        <Card>
          <CardHeader>
            <CardTitle>Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {(service?.objectives && service.objectives.length > 0 ? service.objectives : objectives).map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Key Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Key Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {keyActivities.map((activity, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{activity}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Community Outreach */}
        <Card>
          <CardHeader>
            <CardTitle>Community Outreach</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {communityOutreach.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Community Development Programme */}
        <Card>
          <CardHeader>
            <CardTitle>Community Development Programme</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              The NCC unit of S.V.R.M. College combines discipline with social responsibility, actively serving the community through various initiatives.
            </p>
            <ul className="space-y-3">
              {communityDevelopmentActivities.map((activity, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{activity}</span>
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

        {/* Staff Photos and Designations */}
        {staff.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>NCC Staff</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {staff.map((member, index) => (
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
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Photo Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>Photo Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(gallery.length > 0 ? gallery.map(img => img.image_url) : nccImages).map((image, index) => (
                <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden group">
                  <img 
                    src={image} 
                    alt={gallery.length > 0 ? gallery[index]?.title || `NCC Activity ${index + 1}` : imageDescriptions[index] || `NCC Activity ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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

export default NCCProgram;