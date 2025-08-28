import PageLayout from "@/components/PageLayout";
import { Mail } from "lucide-react";
import { useStaff } from "@/hooks/useStaff";

const Administration = () => {
  // Fetch staff data from database
  const { staff: allStaff, loading, error } = useStaff();
  
  // Filter staff by type
  const teachingStaff = allStaff.filter(staff => staff.staff_type === 'teaching');
  const nonTeachingStaff = allStaff.filter(staff => staff.staff_type === 'non-teaching');
  
  // Leadership data
  const correspondent = {
    name: "Dr. Ramesh Kumar",
    designation: "Correspondent",
    department: "Administration",
    image: "/lovable-uploads/aa64612b-a2c2-4fc2-b645-b756306336a0.png",
    email: "correspondent@svrmc.edu.in",
    qualifications: "Ph.D. in Educational Administration, M.Ed., B.Ed.",
    experience: "25+ years in Educational Leadership",
    specialization: "Educational Policy & Administration",
    achievements: [
      "Established 15+ educational institutions across the region",
      "Recipient of Excellence in Education Award 2020",
      "Published 30+ research papers in educational journals",
      "Former President of Regional Education Board"
    ],
    message: "As the Correspondent of SVRM College, I am committed to fostering an environment of academic excellence and holistic development. Our institution stands as a beacon of quality education, preparing students to meet the challenges of the modern world with confidence and competence.",
    bio: "Dr. Ramesh Kumar is currently serving as the Correspondent of SVRM College since 2010. He brings a rich interdisciplinary background spanning educational administration, policy development, and institutional governance. Prior to joining SVRM College, he worked as a Senior Education Consultant at the State Education Board, where he was deeply involved in the development of educational frameworks aimed at enhancing quality education, curriculum design, and institutional excellence across multiple educational institutions in the region."
  };

  const principal = {
    name: "Dr. Rajesh Kumar",
    designation: "Principal",
    department: "Academic Affairs",
    image: "/lovable-uploads/9f96f106-897d-46e3-a4a1-4c4b8f8f9f0c.png",
    email: "principal@svrmc.edu.in",
    qualifications: "Ph.D. in Computer Science, M.Tech in Software Engineering, B.Tech in CSE",
    experience: "20+ years in Academia and Research",
    specialization: "Machine Learning, Data Analytics & Educational Technology",
    achievements: [
      "Published 45+ research papers in international journals",
      "Recipient of Best Principal Award 2022",
      "Led digital transformation initiatives in higher education",
      "Guided 25+ Ph.D. scholars to completion"
    ],
    message: "Under my leadership, SVRM College continues to excel in providing quality education while embracing innovation and technology. We are dedicated to nurturing critical thinking, creativity, and ethical values in our students, preparing them to be future leaders and responsible citizens.",
    bio: "Dr. Rajesh Kumar is currently serving as Principal at SVRM College since 2018. He brings a rich interdisciplinary background spanning computer science, educational technology, and academic administration. Prior to joining SVRM College, he worked as a Professor at the Department of Computer Science and Engineering at a premier technical institution, where he was deeply involved in the development of innovative teaching methodologies aimed at enhancing student learning outcomes, research excellence, and industry collaboration for undergraduate and postgraduate programs."
  };

  return (
    <PageLayout title="Administration" description="Meet our administration team and faculty members">
      <div className="max-w-6xl mx-auto space-y-12 p-6">
        
        {/* Correspondent Section */}
        <section className="bg-card rounded-lg shadow-sm border p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
              <img 
                src={correspondent.image} 
                alt={correspondent.name}
                className="w-full max-w-xs rounded-lg shadow-md object-cover aspect-[3/4]"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-3">{correspondent.name}</h2>
                <p className="text-xl text-blue-600 font-semibold mb-2">{correspondent.designation}</p>
                <p className="text-lg text-muted-foreground mb-4">{correspondent.department}</p>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-justify">
                  <span className="font-semibold">{correspondent.name}</span> {correspondent.bio}
                </p>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{correspondent.email}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principal Section */}
        <section className="bg-card rounded-lg shadow-sm border p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
              <img 
                src={principal.image} 
                alt={principal.name}
                className="w-full max-w-xs rounded-lg shadow-md object-cover aspect-[3/4]"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-3">{principal.name}</h2>
                <p className="text-xl text-blue-600 font-semibold mb-2">{principal.designation}</p>
                <p className="text-lg text-muted-foreground mb-4">{principal.department}</p>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-justify">
                  <span className="font-semibold">{principal.name}</span> {principal.bio}
                </p>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{principal.email}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Staff Section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Teaching Staff</h2>
          {loading ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Loading teaching staff...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-500">Error loading teaching staff: {error}</p>
            </div>
          ) : teachingStaff.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No teaching staff found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachingStaff.map((staff) => (
                <div key={staff.id} className="bg-card rounded-lg shadow-sm border p-6 text-center hover:shadow-md transition-shadow">
                  <div className="mb-4">
                    {staff.photo_url ? (
                      <img 
                        src={staff.photo_url} 
                        alt={staff.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover shadow-md"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full mx-auto bg-muted flex items-center justify-center text-lg font-semibold text-muted-foreground">
                        {staff.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{staff.name}</h3>
                  <p className="text-primary font-medium text-sm mb-1">{staff.designation}</p>
                  <p className="text-muted-foreground text-sm mb-3">{staff.department}</p>
                  {staff.email && (
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-3 w-3" />
                      <span>{staff.email}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Non-Teaching Staff Section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Non-Teaching Staff</h2>
          {loading ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Loading non-teaching staff...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="text-red-500">Error loading non-teaching staff: {error}</p>
            </div>
          ) : nonTeachingStaff.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No non-teaching staff found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nonTeachingStaff.map((staff) => (
                <div key={staff.id} className="bg-card rounded-lg shadow-sm border p-6 text-center hover:shadow-md transition-shadow">
                  <div className="mb-4">
                    {staff.photo_url ? (
                      <img 
                        src={staff.photo_url} 
                        alt={staff.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover shadow-md"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full mx-auto bg-muted flex items-center justify-center text-lg font-semibold text-muted-foreground">
                        {staff.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{staff.name}</h3>
                  <p className="text-primary font-medium text-sm mb-1">{staff.designation}</p>
                  <p className="text-muted-foreground text-sm mb-3">{staff.department}</p>
                  {staff.email && (
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-3 w-3" />
                      <span>{staff.email}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </PageLayout>
  );
};

export default Administration;