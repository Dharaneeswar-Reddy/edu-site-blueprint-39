import { useState } from "react";
import Layout from "@/components/Layout";
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

  // Keep static news data as it's not part of the admin system yet
  const latestNews = [
    {
      id: 1,
      title: "College Secures Top Rank in State Rankings",
      date: "May 18, 2025",
      image: "/lovable-uploads/d85fb3d3-b73a-4321-ba55-69d5399a79a5.png"
    },
    {
      id: 2,
      title: "New Research Center Inaugurated",
      date: "May 14, 2025",
      image: "/lovable-uploads/a64e202d-8654-4eb7-9a72-956203b85f88.png"
    },
    {
      id: 3,
      title: "Students Excel in Academic Competitions",
      date: "May 10, 2025",
      image: "/lovable-uploads/fd7697be-4da9-4c9f-99c3-16a23c2dc964.png"
    }
  ];

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
            <MainContent latestNews={latestNews} />
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
            <div className="max-w-full">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/5810381d-fa14-451a-aba2-1235784bf4f2.png" 
                    alt="SVRMC Campus Main Building" 
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/0067500d-84af-4fed-81ce-5a2d974c5d4c.png" 
                    alt="Memorial Campus Structure" 
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/c4a8eb50-bdf5-432c-88fd-6057229b8e5c.png" 
                    alt="Campus Memorial Structure" 
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/d925b782-a791-45ef-a813-589b4b49d681.png" 
                    alt="Chemistry Department Building" 
                    className="w-full h-[250px] object-cover"
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
