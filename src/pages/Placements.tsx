import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Building, Users, Award, TrendingUp, Target, MapPin, GraduationCap, UserCheck, Calendar, Building2, ChevronLeft, ChevronRight, MessageSquare, Lightbulb, Network, Eye, HeartHandshake } from "lucide-react";
import { useState, useEffect } from "react";
import { useStaff } from "@/hooks/useStaff";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Import company logos
import tcsLogo from "@/assets/logos/tcs-logo.png";
import infosysLogo from "@/assets/logos/infosys-logo.png";
import wiproLogo from "@/assets/logos/wipro-logo.png";
import cognizantLogo from "@/assets/logos/cognizant-logo.png";
import microsoftLogo from "@/assets/logos/microsoft-logo.png";
import amazonLogo from "@/assets/logos/amazon-logo.png";
import ibmLogo from "@/assets/logos/ibm-logo.png";
import accentureLogo from "@/assets/logos/accenture-logo.png";
import hclLogo from "@/assets/logos/hcl-logo.png";
import techMahindraLogo from "@/assets/logos/techmahindra-logo.svg";
import capgeminiLogo from "@/assets/logos/capgemini-logo.png";
import mindtreeLogo from "@/assets/logos/mindtree-logo.png";
import ltiLogo from "@/assets/logos/lti-logo.png";
import mphasisLogo from "@/assets/logos/mphasis-logo.png";
import genpactLogo from "@/assets/logos/genpact-logo.png";
import foxconnLogo from "@/assets/logos/foxconn-logo.png";
import muthootFinanceLogo from "@/assets/logos/muthoot-finance-logo.png";
import hdfcBankLogo from "@/assets/logos/hdfc-bank-logo.png";
import blueStarLogo from "@/assets/logos/blue-star-logo.png";
import medplusLogo from "@/assets/logos/medplus-logo.png";
import quessLogo from "@/assets/logos/quess-logo.png";
import heteroLogo from "@/assets/logos/hetero-logo.png";
import sbiLifeLogo from "@/assets/logos/sbi-life-logo.png";
import teamleaseLogo from "@/assets/logos/teamlease-logo.png";
import amarrajaLogo from "@/assets/logos/amarraja-logo.png";
import apolloPharmacyLogo from "@/assets/logos/apollo-pharmacy-logo.png";
import adityaBirlaLogo from "@/assets/logos/aditya-birla-logo.png";
import heroMotocorpLogo from "@/assets/logos/hero-motocorp-logo.png";
import ratnadeepLogo from "@/assets/logos/ratnadeep-logo.png";
import apexSolutionsLogo from "@/assets/logos/apex-solutions-logo.png";
import akroSoftLogo from "@/assets/logos/akro-soft-logo.png";
import mothersonSumiLogo from "@/assets/logos/motherson-sumi-logo.png";
import servCrustLogo from "@/assets/logos/serv-crust-logo.png";
import navataLogo from "@/assets/logos/navata-logo.png";
import masterMindsLogo from "@/assets/logos/master-minds-logo.png";
import royalsLogo from "@/assets/logos/royals-logo.png";
import nslTextilesLogo from "@/assets/logos/nsl-textiles-logo.png";
import paceLogo from "@/assets/logos/pace-logo.png";
import fluxtekLogo from "@/assets/logos/fluxtek-logo.png";

const Placements = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Fetch placement staff from database
  const { staff: allStaff, loading: staffLoading, error: staffError } = useStaff();
  
  // Company logo mapping
  const companyLogos: { [key: string]: string } = {
    "TCS": tcsLogo,
    "INFOSYS": infosysLogo,
    "WIPRO": wiproLogo,
    "COGNIZANT": cognizantLogo,
    "HCL": hclLogo,
    "TECH MAHINDRA": techMahindraLogo,
    "ACCENTURE": accentureLogo,
    "IBM": ibmLogo,
    "CAPGEMINI": capgeminiLogo,
    "MINDTREE": mindtreeLogo,
    "MPHASIS": mphasisLogo,
    "L&T INFOTECH": ltiLogo,
    "MICROSOFT": microsoftLogo,
    "AMAZON": amazonLogo,
    "RATNADEEP": ratnadeepLogo,
    "TALBRIDGE GENPACT": genpactLogo,
    "GENPACT": genpactLogo,
    "FOXCONN": foxconnLogo,
    "MEDPLUS": medplusLogo,
    "HDB BANK": hdfcBankLogo,
    "HDFC BANK": hdfcBankLogo,
    "QUESS": quessLogo,
    "BLUE STAR": blueStarLogo,
    "HETERO": heteroLogo,
    "SBI LIFE": sbiLifeLogo,
    "TEAMLEASE": teamleaseLogo,
    "AMARRAJA": amarrajaLogo,
    "APOLLO PHARMACY": apolloPharmacyLogo,
    "AADITYA BIRLA": adityaBirlaLogo,
    "ADITYA BIRLA": adityaBirlaLogo,
    "HERO": heroMotocorpLogo,
    "MUTHOOT FINANCE": muthootFinanceLogo,
    "APEX SOLUTIONS": apexSolutionsLogo,
    "AKRO SOFT SOLUTIONS": akroSoftLogo,
    "MOTHERSON SUMI SYSTEMS LIMITED": mothersonSumiLogo,
    "SERV CRUST": servCrustLogo,
    "NAVATA ROAD TRANSPORT": navataLogo,
    "MASTER MINDS": masterMindsLogo,
    "ROYALS": royalsLogo,
    "NSL TEXTILES": nslTextilesLogo,
    "PACE": paceLogo,
    "FLUXTEK": fluxtekLogo,
  };
  
  // Filter placement related staff - those with placement related designations
  const placementStaff = allStaff.filter(staff => 
    staff.designation.toLowerCase().includes('placement') ||
    staff.designation.toLowerCase().includes('training') ||
    staff.designation.toLowerCase().includes('career') ||
    staff.designation.toLowerCase().includes('industry') ||
    staff.designation.toLowerCase().includes('counselor')
  );
  
  // Filter HODs for placement committee
  const placementCommittee = allStaff.filter(staff => {
    const designation = staff.designation.toLowerCase();
    return designation.includes('hod') || 
           designation.includes('head of department') || 
           designation.includes('head of the department') ||
           designation.includes('department head') ||
           designation.includes('head - department') ||
           designation.includes('head-department') ||
           designation.includes('dept. head') ||
           designation.includes('dept head');
  }).slice(0, 6); // Limit to 6 committee members for layout
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };
  
  const heroImages = ["/lovable-uploads/1e95f6dd-1e3b-413a-926b-1cd65013d460.png", "/lovable-uploads/aa814823-8dcf-4f41-ba8e-2ba08febadb0.png", "/lovable-uploads/0a4f9773-a266-423a-b27f-047c99b4a888.png"];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  
  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + heroImages.length) % heroImages.length);
  };
  
  const topRecruiters = ["RATNADEEP", "TALBRIDGE GENPACT", "APEX SOLUTIONS", "AKRO SOFT SOLUTIONS", "MOTHERSON SUMI SYSTEMS LIMITED", "MUTHOOT FINANCE", "SERV CRUST", "FOXCONN", "MEDPLUS", "HDB BANK", "QUESS", "NAVATA ROAD TRANSPORT", "BLUE STAR", "MASTER MINDS", "HETERO", "ROYALS", "SBI LIFE", "NSL TEXTILES", "PACE", "TEAMLEASE", "AMARRAJA", "APOLLO PHARMACY", "FLUXTEK", "AADITYA BIRLA", "HERO"];
  
  const placementStats = [{
    year: "2024-25",
    placed: 382,
    totalStudents: 425,
    percentagePlaced: 90
  }, {
    year: "2023-24",
    placed: 364,
    totalStudents: 412,
    percentagePlaced: 88
  }, {
    year: "2022-23",
    placed: 345,
    totalStudents: 401,
    percentagePlaced: 86
  }, {
    year: "2021-22",
    placed: 302,
    totalStudents: 376,
    percentagePlaced: 80
  }];
  
  const departmentPlacements = [{
    department: "Computer Science",
    placed: 145,
    total: 152,
    percentage: 95,
    avgPackage: "7.2 LPA"
  }, {
    department: "Commerce",
    placed: 89,
    total: 98,
    percentage: 91,
    avgPackage: "4.5 LPA"
  }, {
    department: "Mathematics",
    placed: 67,
    total: 75,
    percentage: 89,
    avgPackage: "5.8 LPA"
  }, {
    department: "Physics",
    placed: 45,
    total: 52,
    percentage: 87,
    avgPackage: "6.1 LPA"
  }, {
    department: "Chemistry",
    placed: 36,
    total: 48,
    percentage: 75,
    avgPackage: "5.2 LPA"
  }];
  
  const activities = [{
    title: "Industry Interaction Sessions",
    description: "Regular sessions with industry experts",
    frequency: "Monthly"
  }, {
    title: "Mock Interviews",
    description: "Practice interviews with feedback",
    frequency: "Weekly"
  }, {
    title: "Resume Building Workshops",
    description: "Professional resume writing guidance",
    frequency: "Bi-weekly"
  }, {
    title: "Soft Skills Training",
    description: "Communication and personality development",
    frequency: "Weekly"
  }, {
    title: "Technical Training",
    description: "Latest technology and skill enhancement",
    frequency: "Daily"
  }, {
    title: "Campus Drives",
    description: "On-campus recruitment drives",
    frequency: "Regular"
  }];
  
  return <Layout>
      {/* Hero Section with Scrolling Images */}
      <section className="pt-20 pb-8">
        <div className="relative h-96 lg:h-[600px] overflow-hidden">
          {heroImages.map((image, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}>
              <img src={image} alt={`Career Guidance ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>)}
          
          {/* Navigation Buttons */}
          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300">
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Career Guidance & Placement Cell</h1>
              
            </div>
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {heroImages.map((_, index) => <button key={index} onClick={() => setCurrentImageIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`} />)}
          </div>
        </div>
      </section>

      {/* About Placement Cell */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">About Placement Cell</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          
          <Card className="border-primary/20 max-w-5xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                The Career Guidance and Placement Cell of the college is dedicated to shaping the professional futures of students while supporting rural youth and community learners. It serves as a bridge between education and employment, offering comprehensive guidance on career opportunities, higher education, and skill development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-center mt-4">
                The cell organizes career counseling sessions, workshops, seminars, and mock interviews to equip students with industry-relevant skills, confidence, and knowledge. It maintains active industry collaborations, alumni networks, and corporate tie-ups to facilitate internships, placement drives, and real-world exposure.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-center mt-4">
                By nurturing talent, ambition, and employability, the Career Guidance and Placement Cell ensures that students and rural youth are empowered to compete and succeed in global and local job markets.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto p-4 rounded-full bg-primary/10">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary mt-4">30%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">Placement Rate</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto p-4 rounded-full bg-secondary/20">
                  <GraduationCap className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-3xl font-bold text-secondary mt-4">70%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">Preferring Higher Education</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto p-4 rounded-full bg-accent/20">
                  <Building className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-3xl font-bold text-accent-foreground mt-4">30+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">Recruiting Companies</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto p-4 rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary mt-4">3 LPA / 2 LPA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">Highest / Average Package</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission and Approach */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower students and rural youth by providing guidance, skill development, and placement opportunities, fostering career readiness, confidence, and lifelong learning, and preparing them to succeed in local and global job markets.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-primary mb-4">Our Approach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Career Guidance and Placement Cell takes a student-focused and inclusive approach, especially supporting rural youth, by offering career counseling, skill development workshops, industry engagement, and mentorship. Through these initiatives, the cell prepares learners to confidently explore opportunities, build employable skills, and succeed in local and global career arenas.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-primary/20 mt-8">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="text-center">
                    <div className="mx-auto p-4 rounded-full bg-primary/10 mb-4 w-16 h-16 flex items-center justify-center">
                      <MessageSquare className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Personalized Career Counseling</h4>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto p-4 rounded-full bg-secondary/20 mb-4 w-16 h-16 flex items-center justify-center">
                      <Lightbulb className="h-8 w-8 text-secondary" />
                    </div>
                    <h4 className="font-semibold text-secondary mb-2">Skill Development Programs</h4>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto p-4 rounded-full bg-accent/20 mb-4 w-16 h-16 flex items-center justify-center">
                      <Network className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h4 className="font-semibold text-accent-foreground mb-2">Industry Engagement</h4>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto p-4 rounded-full bg-primary/10 mb-4 w-16 h-16 flex items-center justify-center">
                      <Eye className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Awareness & Exposure</h4>
                  </div>
                  <div className="text-center">
                    <div className="mx-auto p-4 rounded-full bg-secondary/20 mb-4 w-16 h-16 flex items-center justify-center">
                      <HeartHandshake className="h-8 w-8 text-secondary" />
                    </div>
                    <h4 className="font-semibold text-secondary mb-2">Continuous Support</h4>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Campus Selection Process */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Campus Selection Process</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-primary/10 mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <CardTitle className="text-lg">Pre-Placement Talk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Company presentation about opportunities and requirements</p>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-secondary/20 mb-4">
                  <span className="text-xl font-bold text-secondary">2</span>
                </div>
                <CardTitle className="text-lg">Written Test</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Aptitude, technical, and domain-specific assessments</p>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-accent/20 mb-4">
                  <span className="text-xl font-bold text-accent-foreground">3</span>
                </div>
                <CardTitle className="text-lg">Group Discussion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Communication skills and teamwork evaluation</p>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mx-auto p-3 rounded-full bg-primary/10 mb-4">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <CardTitle className="text-lg">Personal Interview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Final assessment and offer discussion</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Employment and Placement Cell */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">EMPLOYMENT AND PLACEMENT CELL</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <Card className="border-primary/20">
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  The Employment and Placement cell activities are listed below with their outcomes during 2024-2025.
                  The cell arranged a training program to train the 716(nearly 100%) and other interested students. As usually a total of maximum 120(60 Even semester+60 Odd semester) Leisure hours scheduled program addressed the following curriculum.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-primary">1. Guidance for competitive Exams</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>a) How to prepare with proper strategy</li>
                      <li>b) Guidance in study plan for competitive exams</li>
                      <li>c) Mock tests</li>
                      <li>d) How to face an interview successfully</li>
                      <li>e) Writing curriculum vitae</li>
                      <li>f) Analytical skills</li>
                      <li>g) Technical skills</li>
                      <li>h) General awareness, etc.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-primary">2. Career counseling</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>a) Provide information, advice and guidance to help students make realistic choices about their education, training and work</li>
                      <li>b) To help students evaluate their interests, skills and abilities</li>
                      <li>c) Developing realistic goals</li>
                      <li>d) Teach job search skills, such as interviewing and networking, etc.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-primary">3. Soft skill development</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>a) Communication skills</li>
                      <li>b) Problem solving</li>
                      <li>c) Presentation skills</li>
                      <li>d) Time management</li>
                      <li>e) Inter personal skills</li>
                      <li>f) Leadership management</li>
                      <li>g) Business etiquette, etc.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-primary">4. Outcome Results</h3>
                    <p className="text-sm text-muted-foreground">
                      The outcome of the course was 50% candidates got 60% result in the course end examination conducted by the college.
                    </p>
                  </div>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">5. Physical Training & Government Selections</h3>
                  <p className="text-muted-foreground mb-4">
                    The college provides Physical facilities like Gym, 400m running track, etc. which helped several of our students got selected in military, Police, Navy, Air force, etc. Govt. selections every year. - 8 members selected in this year.
                  </p>

                  <h3 className="text-xl font-semibold text-primary mb-4">6. Campus Recruitment Drives</h3>
                  <p className="text-muted-foreground mb-4">
                    Placement cell has conducted Campus recruitment drives on 7/05/2024 with DIVI Laboratories, Hyderabad, on 23-4-2024 with Magic Bus Foundation, Mumbai, on 18-9-2024 with APSSDC and On 28-03-2025 second mega job mela with Magic Bus Foundation, Mumbai. our college and APSSDC jointly organized the drives. We are able to place Students with campus recruitment drives of various companies. Finally 272 students got placed and offer letters were given.
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary">13</div>
                      <div className="text-sm text-muted-foreground">Divi Laboratories Hyderabad (7/5/2024)</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-secondary">57</div>
                      <div className="text-sm text-muted-foreground">Magic bus Foundation, Mumbai (23-4-2024)</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-accent-foreground">77</div>
                      <div className="text-sm text-muted-foreground">APSSDC/SEEDAP (18-10-2024)</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary">125</div>
                      <div className="text-sm text-muted-foreground">Magic bus Foundation, Mumbai (28-3-2025)</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mt-4">
                    In addition to this, Mock tests and interview sessions as well as aptitude tests were organized for final year students.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Capability Enhancement and Development Schemes */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Capability Enhancement and Development Schemes</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <Card className="border-primary/20">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-8">
                As usually a total of maximum 120(60 Even semester+60 Odd semester) Leisure hours(as per the timetable) scheduled program addressed the following curriculum:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <Card className="border-primary/10">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">I. Guidance for Competitive Exams</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2"><strong>Staff Member:</strong> APCPSEA GNT District, SPACE, Cherukapalli</p>
                      <p className="text-sm text-primary"><strong>Contact:</strong> 9493442748, 9849055376</p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/10">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">II. Career Counseling</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2"><strong>Staff Member:</strong> APCPSEA GNT District, SPACE, Cherukapalli</p>
                      <p className="text-sm text-primary"><strong>Contact:</strong> 9493442748, 9849055376</p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/10">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">III. Soft Skill Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2"><strong>Staff Member:</strong> APCPSEA GNT District, SPACE, Cherukapalli</p>
                      <p className="text-sm text-primary"><strong>Contact:</strong> 9493442748, 9849055376</p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/10">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">IV. Remedial Coaching</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">Regularly teachers identifies slow learners of their class students and provide the necessary help and guidance to overcome their problems</p>
                      <p className="text-sm text-muted-foreground mb-2"><strong>Staff Member:</strong> Regular class teachers</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="border-primary/10">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">V. Language Lab</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2"><strong>Staff Member:</strong> English Department</p>
                      <p className="text-sm text-primary"><strong>Contact:</strong> 9490742553</p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/10">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">VI. Bridge Courses</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">Short-term educational program designed to bridge the gap in knowledge, skills, or academic background between two stages of education or career.</p>
                      <p className="text-sm text-muted-foreground mb-2"><strong>Staff Member:</strong> Regular class teachers</p>
                      <p className="text-sm text-primary"><strong>Contact:</strong> 08648-256724</p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/10">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">VII. Yoga & Meditation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2"><strong>Staff Members:</strong></p>
                      <p className="text-sm text-muted-foreground">Sri G.Srinivasarao, Lecturer in Physics - 9393295894</p>
                      <p className="text-sm text-muted-foreground">Sri Mannem Sivaiah, Lecturer in Politics - 9951135238</p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/10">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">VIII. Personal Counseling</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">Principal appoint class teachers for each class. They gave the personal counseling to the students.</p>
                      <p className="text-sm text-muted-foreground mb-2"><strong>Staff Member:</strong> Class teacher per every 25 students</p>
                      <p className="text-sm text-primary"><strong>Contact:</strong> 08648-256724</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Placement Staff */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Placement Staff</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          {staffLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading placement staff...</p>
            </div>
          ) : staffError ? (
            <div className="text-center py-8">
              <p className="text-red-500">Error loading staff: {staffError}</p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Main Placement Officer */}
              <Card className="border-primary/20 hover:shadow-lg transition-all duration-300 max-w-4xl mx-auto">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <img 
                      src="/lovable-uploads/43e4b089-9a01-4b92-ab9f-cf2aaf4e2ae1.png" 
                      alt="Sri Sajja Srinivasa Rao" 
                      className="w-32 h-32 rounded-lg object-cover mx-auto border-4 border-primary/20" 
                    />
                  </div>
                  <CardTitle className="text-xl">Sri Sajja Srinivasa Rao</CardTitle>
                  <CardDescription className="font-medium text-secondary text-lg">Placement Officer</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Qualifications:</strong></p>
                    <p>M.C.M – Master in Computer Management</p>
                    <p>MLIS – Master in Library and Information Science</p>
                    <p><strong>Experience:</strong> 35+ years</p>
                    <p><strong>Expertise:</strong> Computer Science, PC troubleshooting and networking</p>
                    <p className="text-primary font-medium">Srinivas.svrm@gmail.com</p>
                    <p className="text-primary font-medium">+91-9963465428</p>
                    <p className="text-sm">Central Library Building, Ground Floor</p>
                  </div>
                </CardContent>
              </Card>

              {/* Placement Committee Members */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-8 text-center">Placement Committee Members</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {placementCommittee.length > 0 ? (
                    placementCommittee.map((staff) => (
                      <Card key={staff.id} className="border-primary/20 hover:shadow-lg transition-all duration-300">
                        <CardHeader className="text-center">
                          <div className="mx-auto mb-4">
                            {staff.photo_url ? (
                              <img 
                                src={staff.photo_url} 
                                alt={staff.name}
                                className="w-24 h-24 rounded-lg object-cover mx-auto border-2 border-primary/20" 
                              />
                            ) : (
                              <Avatar className="w-24 h-24 mx-auto">
                                <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                                  {getInitials(staff.name)}
                                </AvatarFallback>
                              </Avatar>
                            )}
                          </div>
                          <CardTitle className="text-lg">{staff.name}</CardTitle>
                          <CardDescription className="font-medium text-secondary">{staff.designation}</CardDescription>
                          {staff.department && (
                            <CardDescription className="text-sm text-muted-foreground">{staff.department} Department</CardDescription>
                          )}
                        </CardHeader>
                        {(staff.email || staff.phone) && (
                          <CardContent className="text-center">
                            <div className="space-y-1 text-sm">
                              {staff.email && (
                                <p className="text-primary font-medium">{staff.email}</p>
                              )}
                              {staff.phone && (
                                <p className="text-primary font-medium">{staff.phone}</p>
                              )}
                            </div>
                          </CardContent>
                        )}
                      </Card>
                    ))
                  ) : (
                    // Fallback to hardcoded committee members if no staff found
                    <>
                      <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
                        <CardHeader className="text-center">
                          <div className="mx-auto mb-4">
                            <div className="w-24 h-24 rounded-lg bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto">
                              <UserCheck className="h-12 w-12 text-primary" />
                            </div>
                          </div>
                          <CardTitle className="text-lg">Dr. P.Srinivasa Rao</CardTitle>
                          <CardDescription className="font-medium text-secondary">HOD, Physics</CardDescription>
                        </CardHeader>
                      </Card>

                      <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
                        <CardHeader className="text-center">
                          <div className="mx-auto mb-4">
                            <div className="w-24 h-24 rounded-lg bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto">
                              <UserCheck className="h-12 w-12 text-primary" />
                            </div>
                          </div>
                          <CardTitle className="text-lg">Sri R.Prasanna Babu</CardTitle>
                          <CardDescription className="font-medium text-secondary">HOD, Chemistry</CardDescription>
                        </CardHeader>
                      </Card>

                      <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
                        <CardHeader className="text-center">
                          <div className="mx-auto mb-4">
                            <div className="w-24 h-24 rounded-lg bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto">
                              <UserCheck className="h-12 w-12 text-primary" />
                            </div>
                          </div>
                          <CardTitle className="text-lg">Dr. K.Suresh babu</CardTitle>
                          <CardDescription className="font-medium text-secondary">HOD, Zoology</CardDescription>
                        </CardHeader>
                      </Card>

                      <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
                        <CardHeader className="text-center">
                          <div className="mx-auto mb-4">
                            <div className="w-24 h-24 rounded-lg bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto">
                              <UserCheck className="h-12 w-12 text-primary" />
                            </div>
                          </div>
                          <CardTitle className="text-lg">Sri P. Venkata Narayana</CardTitle>
                          <CardDescription className="font-medium text-secondary">HOD, Botany</CardDescription>
                        </CardHeader>
                      </Card>

                      <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
                        <CardHeader className="text-center">
                          <div className="mx-auto mb-4">
                            <div className="w-24 h-24 rounded-lg bg-primary/10 border-2 border-primary/20 flex items-center justify-center mx-auto">
                              <UserCheck className="h-12 w-12 text-primary" />
                            </div>
                          </div>
                          <CardTitle className="text-lg">Sri U.Siva Prasad</CardTitle>
                          <CardDescription className="font-medium text-secondary">HOD, Mathematics</CardDescription>
                        </CardHeader>
                      </Card>
                    </>
                  )}
                </div>
              </div>

              {/* Additional Placement Staff if any */}
              {placementStaff.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-8 text-center">Additional Placement Team</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {placementStaff.map((staff) => (
                      <Card key={staff.id} className="border-primary/20 hover:shadow-lg transition-all duration-300">
                        <CardHeader className="text-center">
                          <div className="mx-auto mb-4">
                            {staff.photo_url ? (
                              <img 
                                src={staff.photo_url} 
                                alt={staff.name}
                                className="w-24 h-24 rounded-lg object-cover mx-auto border-2 border-primary/20" 
                              />
                            ) : (
                              <Avatar className="w-24 h-24 mx-auto">
                                <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                                  {getInitials(staff.name)}
                                </AvatarFallback>
                              </Avatar>
                            )}
                          </div>
                          <CardTitle className="text-lg">{staff.name}</CardTitle>
                          <CardDescription className="font-medium text-secondary">{staff.designation}</CardDescription>
                          {staff.department && (
                            <CardDescription className="text-sm text-muted-foreground">{staff.department} Department</CardDescription>
                          )}
                        </CardHeader>
                        <CardContent className="text-center">
                          <div className="space-y-1 text-sm">
                            {staff.experience && (
                              <p className="text-muted-foreground">Experience: {staff.experience}</p>
                            )}
                            {staff.email && (
                              <p className="text-primary font-medium">{staff.email}</p>
                            )}
                            {staff.phone && (
                              <p className="text-primary font-medium">{staff.phone}</p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Placement Activities</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => <Card key={index} className="border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <Calendar className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium text-secondary">{activity.frequency}</span>
                  </div>
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Official Recruiters */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Official Recruiters</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our strong industry partnerships have led to consistent recruitment from leading organizations
            </p>
          </div>

          <Card className="border-primary/20">
            <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {[
                "TCS", "INFOSYS", "WIPRO", "COGNIZANT", "HCL", "TECH MAHINDRA",
                "ACCENTURE", "IBM", "CAPGEMINI", "MINDTREE", "MPHASIS", "L&T INFOTECH",
                "HEXAWARE", "ZENSAR", "CYIENT", "SONATA SOFTWARE", "RAMCO SYSTEMS",
                "TALBRIDGE GENPACT", "VIRTUSA", "SYNTEL", "POLARIS", "NEWGEN SOFTWARE",
                "QUEST GLOBAL", "EFFTRONICS", "MICROSOFT", "AMAZON"
              ].map((company, index) => {
                const logoUrl = companyLogos[company];
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/50 group">
                    <CardContent className="p-6 text-center space-y-3">
                      {logoUrl ? (
                        <div className="flex items-center justify-center h-16 mb-2">
                          <img 
                            src={logoUrl} 
                            alt={`${company} logo`}
                            className="max-h-12 max-w-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-16 mb-2 bg-muted rounded-lg">
                          <Building2 className="h-8 w-8 text-muted-foreground" />
                        </div>
                      )}
                      <span className="text-sm font-semibold text-foreground leading-tight block">
                        {company}
                      </span>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Ready to Launch Your Career?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At SVRM College, we empower students and rural youth to take charge of their professional journey. Through our Career Guidance and Placement Cell, we provide career counseling, skill development, internships, and placement opportunities that prepare you to excel in local, national, and global job markets.
            </p>
            <p className="text-xl font-semibold text-primary mb-8">
              Step in, gear up, and launch your career with confidence!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/contact" className="flex items-center">
                  Contact Placement Cell <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/academics" className="flex items-center">
                  Explore Programs <GraduationCap className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};

export default Placements;
