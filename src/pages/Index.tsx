
import { useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import AnnouncementsTicker from "@/components/home/AnnouncementsTicker";
import AnnouncementsSidebar from "@/components/home/AnnouncementsSidebar";
import MainContent from "@/components/home/MainContent";
import CallToAction from "@/components/home/CallToAction";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const announcements = [
    {
      id: 1,
      title: "Admission Open for 2025-26",
      date: "May 15, 2025",
      link: "/admission-notice.pdf",
      category: "Admissions"
    },
    {
      id: 2,
      title: "Annual Sports Meet Registration",
      date: "May 12, 2025",
      link: "/sports-registration.pdf",
      category: "Events"
    },
    {
      id: 3,
      title: "Scholarship Applications Due",
      date: "May 10, 2025",
      link: "/scholarship-info.pdf",
      category: "Financial Aid"
    },
    {
      id: 4,
      title: "National Level Technical Symposium",
      date: "May 5, 2025",
      link: "/symposium-details.pdf",
      category: "Academic"
    }
  ];

  const moreAnnouncements = [
    {
      id: 5,
      title: "Faculty Development Program on Machine Learning",
      date: "May 20, 2025",
      link: "#",
      category: "Faculty"
    },
    {
      id: 6,
      title: "Industrial Visit to Tech Park Scheduled",
      date: "May 22, 2025",
      link: "#",
      category: "Industrial Visit"
    },
    {
      id: 7,
      title: "Celebration of National Science Day",
      date: "May 25, 2025",
      link: "#",
      category: "Events"
    },
    {
      id: 8,
      title: "IEEE Distinguished Lecture Series",
      date: "May 28, 2025",
      link: "#",
      category: "Lecture"
    },
    {
      id: 9,
      title: "Campus Recruitment Drive - TCS",
      date: "June 2, 2025",
      link: "#",
      category: "Placements"
    },
    {
      id: 10,
      title: "Workshop on IoT Applications",
      date: "June 5, 2025",
      link: "#",
      category: "Workshop"
    }
  ];

  const allAnnouncements = [...announcements, ...moreAnnouncements];

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

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Announcements Ticker */}
      <AnnouncementsTicker announcements={announcements} />

      {/* Main Content with Announcements Column */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Announcements */}
            <AnnouncementsSidebar announcements={allAnnouncements} />
            
            {/* Right Column - Main Content */}
            <MainContent latestNews={latestNews} />
          </div>
        </div>
      </section>

      {/* About Section (moved from About page) */}
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

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="section-title">Vision & Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-college-blue">
              <h3 className="text-2xl font-bold mb-4 text-college-blue">Our Vision</h3>
              <p className="text-gray-700">To be a premier educational institution recognized for academic excellence, innovative research, and producing graduates who are intellectually competent, professionally skilled, and socially responsible citizens contributing to the national development.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-college-gold">
              <h3 className="text-2xl font-bold mb-4 text-college-blue">Our Mission</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex">
                  <ArrowRight className="h-5 w-5 text-college-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>To impart quality education through effective teaching-learning methods</span>
                </li>
                <li className="flex">
                  <ArrowRight className="h-5 w-5 text-college-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>To foster research, innovation, and entrepreneurship</span>
                </li>
                <li className="flex">
                  <ArrowRight className="h-5 w-5 text-college-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>To build industry-academia partnerships for enhanced learning</span>
                </li>
                <li className="flex">
                  <ArrowRight className="h-5 w-5 text-college-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>To promote holistic development through extracurricular activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://source.unsplash.com/random/400x500?professor,portrait" 
                  alt="Chairman" 
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-college-blue text-white p-4 mt-4 rounded-lg">
                <h3 className="text-xl font-bold">Dr. Rajesh Kumar</h3>
                <p className="text-sm">Chairman</p>
                <p className="text-sm mt-1">Ph.D. in Educational Leadership</p>
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="section-title">Chairman's Message</h2>
              <div className="space-y-4 text-gray-700">
                <p>Dear Students, Parents, and Visitors,</p>
                <p>It gives me immense pleasure to welcome you to Shri Velagapudi Ramakrishna Memorial College. For over four decades, SVRMC has been at the forefront of providing quality education and nurturing young minds to become future leaders.</p>
                <p>At SVRMC, we believe in a holistic approach to education that goes beyond textbooks and classrooms. Our aim is to develop well-rounded individuals who excel not only academically but also possess the skills and values necessary to face real-world challenges.</p>
                <p>Our dedicated faculty members are committed to creating a stimulating learning environment where curiosity is encouraged, critical thinking is developed, and innovation is fostered. The state-of-the-art infrastructure and modern facilities further enhance the learning experience of our students.</p>
                <p>We are proud of our alumni who have excelled in various fields and brought laurels to their alma mater. Their success stories serve as an inspiration for our current students and motivate us to continue our pursuit of excellence.</p>
                <p>As we move forward, we remain committed to our vision of being a center of excellence in education, research, and innovation. I invite you to be a part of the SVRMC family and join us in this exciting journey of learning and growth.</p>
                <p className="font-semibold">Warm regards,</p>
                <p className="font-semibold">Dr. Rajesh Kumar</p>
              </div>
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
