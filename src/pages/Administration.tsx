import PageLayout from "@/components/PageLayout";
import { Mail } from "lucide-react";
import { useStaff } from "@/hooks/useStaff";
import { useLeadership } from "@/hooks/useLeadership";

const Administration = () => {
  // Fetch staff and leadership data from database
  const { staff: allStaff, loading, error } = useStaff();
  const { leadership, loading: leadershipLoading, error: leadershipError } = useLeadership();
  
  // Filter staff by type
  const teachingStaff = allStaff.filter(staff => staff.staff_type === 'teaching');
  const nonTeachingStaff = allStaff.filter(staff => staff.staff_type === 'non-teaching');
  
  // Get leadership data
  const chairman = leadership.find(leader => leader.position === 'chairman');
  const principal = leadership.find(leader => leader.position === 'principal');
  
  // Default fallback data if no leadership data is available
  const defaultChairman = {
    name: "Dr. Ramesh Kumar",
    designation: "Correspondent", 
    department: "Administration",
    photo_url: "/lovable-uploads/aa64612b-a2c2-4fc2-b645-b756306336a0.png",
    email: "correspondent@svrmc.edu.in",
    bio: "Dr. Ramesh Kumar is currently serving as the Correspondent of SVRM College since 2010. He brings a rich interdisciplinary background spanning educational administration, policy development, and institutional governance."
  };

  const defaultPrincipal = {
    name: "Dr. Rajesh Kumar",
    designation: "Principal",
    department: "Academic Affairs",
    photo_url: "/lovable-uploads/9f96f106-897d-46e3-a4a1-4c4b8f8f9f0c.png",
    email: "principal@svrmc.edu.in",
    bio: "Dr. Rajesh Kumar is currently serving as Principal at SVRM College since 2018. He brings a rich interdisciplinary background spanning computer science, educational technology, and academic administration."
  };

  return (
    <PageLayout title="Administration" description="Meet our administration team and faculty members">
      <div className="max-w-6xl mx-auto space-y-12 p-6">
        
        {/* Chairman Section */}
        <section className="bg-card rounded-lg shadow-sm border p-8">
          {leadershipLoading ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Loading chairman information...</p>
            </div>
          ) : leadershipError ? (
            <div className="text-center py-8">
              <p className="text-red-500">Error loading chairman information</p>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3">
                <img 
                  src={(chairman?.photo_url) || defaultChairman.photo_url} 
                  alt={(chairman?.name) || defaultChairman.name}
                  className="w-full max-w-xs rounded-lg shadow-md object-cover aspect-[3/4]"
                />
              </div>
              <div className="w-full md:w-2/3 space-y-4">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-3">{chairman?.name || defaultChairman.name}</h2>
                  <p className="text-xl text-blue-600 font-semibold mb-2">{chairman?.designation || defaultChairman.designation}</p>
                  <p className="text-lg text-muted-foreground mb-4">{chairman?.department || defaultChairman.department}</p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    <span className="font-semibold">{chairman?.name || defaultChairman.name}</span> {chairman?.bio || defaultChairman.bio}
                  </p>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>{chairman?.email || defaultChairman.email}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Principal Section */}
        <section className="bg-card rounded-lg shadow-sm border p-8">
          {leadershipLoading ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Loading principal information...</p>
            </div>
          ) : leadershipError ? (
            <div className="text-center py-8">
              <p className="text-red-500">Error loading principal information</p>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3">
                <img 
                  src={(principal?.photo_url) || defaultPrincipal.photo_url} 
                  alt={(principal?.name) || defaultPrincipal.name}
                  className="w-full max-w-xs rounded-lg shadow-md object-cover aspect-[3/4]"
                />
              </div>
              <div className="w-full md:w-2/3 space-y-4">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-3">{principal?.name || defaultPrincipal.name}</h2>
                  <p className="text-xl text-blue-600 font-semibold mb-2">{principal?.designation || defaultPrincipal.designation}</p>
                  <p className="text-lg text-muted-foreground mb-4">{principal?.department || defaultPrincipal.department}</p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    <span className="font-semibold">{principal?.name || defaultPrincipal.name}</span> {principal?.bio || defaultPrincipal.bio}
                  </p>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>{principal?.email || defaultPrincipal.email}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
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