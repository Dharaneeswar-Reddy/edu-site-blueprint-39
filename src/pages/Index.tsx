import { useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import AnnouncementsTicker from "@/components/home/AnnouncementsTicker";
import AnnouncementsSidebar from "@/components/home/AnnouncementsSidebar";
import MainContent from "@/components/home/MainContent";
import CallToAction from "@/components/home/CallToAction";
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

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Institution</h2>
              <p className="mb-4">Established in 1975, SVRM College has grown to become one of the leading educational institutions in Andhra Pradesh. Named after the visionary philanthropist Shri Velagapudi Ramakrishna, the college was founded with the mission to provide quality education accessible to all sections of society.</p>
              <p className="mb-4">Over the decades, the college has maintained a tradition of academic excellence while constantly evolving to meet the changing educational needs of students. Today, SVRM College stands as a symbol of educational excellence, offering a wide range of undergraduate and postgraduate programs across various disciplines.</p>
              <p>The sprawling campus is equipped with modern facilities including well-equipped laboratories, a comprehensive library, sports facilities, and spacious classrooms to provide students with an enriching learning environment.</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/5810381d-fa14-451a-aba2-1235784bf4f2.png" 
                alt="SVRMC Campus" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />
    </Layout>
  );
};

export default Index;
