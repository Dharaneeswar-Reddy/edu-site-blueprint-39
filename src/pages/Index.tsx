import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";
import AnnouncementsTicker from "@/components/home/AnnouncementsTicker";
import AnnouncementsSidebar from "@/components/home/AnnouncementsSidebar";
import MainContent from "@/components/home/MainContent";
import CallToAction from "@/components/home/CallToAction";
import HistoricalGallery from "@/components/home/HistoricalGallery";
import CampusGallery from "@/components/home/CampusGallery";
import { useAnnouncements } from "@/hooks/useAnnouncements";

const Index = () => {
  const { announcements, loading } = useAnnouncements();

  // Show first 4 announcements in ticker, rest in sidebar
  const tickerAnnouncements = announcements.slice(0, 4);
  const sidebarAnnouncements = announcements;

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-college-blue"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO 
        title="Home"
        description="SVRMC - Government Aided College Sponsored by R.T.E.I. Society offering quality higher education in various disciplines. Experience academic excellence in a 30-acre eco-friendly campus with modern facilities."
        keywords={["SVRMC", "Shri Velagapudi Ramakrishna Memorial College", "Government College", "Higher Education", "Degree College", "Narasaraopet", "Guntur", "Andhra Pradesh", "Academic Excellence", "Rural Education"]}
        url="https://svrmc.edu.in"
      />
      {/* Hero Section */}
      <HeroSection />

      {/* Announcements Ticker - only show if we have announcements */}
      {tickerAnnouncements.length > 0 && (
        <AnnouncementsTicker announcements={tickerAnnouncements} />
      )}

      {/* Main Content with Announcements Column */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Announcements */}
            <AnnouncementsSidebar announcements={sidebarAnnouncements} />
            
            {/* Right Column - Main Content */}
            <MainContent />
          </div>
        </div>
      </section>

      {/* Historical Gallery */}
      <HistoricalGallery />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Institution</h2>
              <p className="mb-4">S.V.R.M. College is a premier rural autonomous institution dedicated to providing quality education and holistic development. Nestled in a 30-acre eco-friendly campus adorned with lush gardens, trees, and clean green spaces, the college offers a serene learning environment. The campus features separate boys' and girls' hostels, modern academic facilities, and is conveniently connected to the main road, blending a rural backdrop with the conveniences of urban life.</p>
              <p className="mb-4">Guided by the motto "A Sound Mind in a Sound Body", the college emphasizes academic excellence, discipline, leadership, and physical fitness. It offers a variety of undergraduate and postgraduate programs across arts, science, commerce, and professional streams, with a strong focus on practical learning, research, and skill development.</p>
              <p className="mb-4">S.V.R.M. College actively fosters NCC, social service, community engagement, disaster preparedness, and cultural activities, nurturing leadership, patriotism, teamwork, and personal growth. Through continuous self-assessment and NAAC accreditation, the institution ensures that every student emerges as a confident, responsible, and socially conscious citizen, ready to make meaningful contributions to society.</p>
              <p>Over the decades, S.V.R.M. College has hosted seminars, conferences, and cultural events attended by eminent personalities, including the President of India Sri V.V. Giri, leading academics, and scientists. Despite early challenges, including natural disasters, the college has continued to grow, introducing postgraduate programs and expanding its facilities, while remaining committed to producing confident, responsible, and socially conscious citizens ready to contribute meaningfully to society.</p>
            </div>
            <div className="max-w-md">
              <div className="space-y-3">
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="/lovable-uploads/5810381d-fa14-451a-aba2-1235784bf4f2.png" 
                    alt="SVRMC Campus Main Building" 
                    className="w-full h-[180px] object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="/lovable-uploads/0067500d-84af-4fed-81ce-5a2d974c5d4c.png" 
                    alt="Memorial Campus Structure" 
                    className="w-full h-[180px] object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="/lovable-uploads/c4a8eb50-bdf5-432c-88fd-6057229b8e5c.png" 
                    alt="Campus Memorial Structure" 
                    className="w-full h-[180px] object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="/lovable-uploads/d925b782-a791-45ef-a813-589b4b49d681.png" 
                    alt="Chemistry Department Building" 
                    className="w-full h-[180px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <CampusGallery />

      {/* CTA Section */}
      <CallToAction />
    </Layout>
  );
};

export default Index;
