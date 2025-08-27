
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";

// Import pages
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Academics from "./pages/Academics";
import Departments from "./pages/Departments";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import StudentDocuments from "./pages/StudentDocuments";
import NotFound from "./pages/NotFound";
import Administration from "./pages/Administration";
import News from "./pages/News";
import Admission from "./pages/Admission";
import NewsDetail from "./pages/NewsDetail";
import Placements from "./pages/Placements";
import Gallery from "./pages/Gallery";
import FacultyLogin from "./pages/FacultyLogin";
import StudentLogin from "./pages/StudentLogin";
import AcademicCalendar from "./pages/AcademicCalendar";
import Results from "./pages/Results";
import ExamSchedule from "./pages/ExamSchedule";
import Scholarships from "./pages/Scholarships";
import ComputerScience from "./pages/ComputerScience";
import Staff from "./pages/Staff";
import ExaminationCell from "./pages/ExaminationCell";
import Library from "./pages/departments/Library";
import Alumni from "./pages/Alumni";
import Magazines from "./pages/Magazines";
import ICC from "./pages/ICC";
import NIRF from "./pages/NIRF";
import Feedback from "./pages/Feedback";
import History from "./pages/about/History";
import VisionMission from "./pages/about/VisionMission";
import PrincipalMessage from "./pages/about/PrincipalMessage";
import StrategicDocuments from "./pages/about/StrategicDocuments";
import CollegePledgeSong from "./pages/about/CollegePledgeSong";
import TeachingStaff from "./pages/administration/TeachingStaff";
import NonTeachingStaff from "./pages/administration/NonTeachingStaff";
import Organogram from "./pages/administration/Organogram";
import GoverningBody from "./pages/administration/GoverningBody";
import AcademicCouncil from "./pages/administration/AcademicCouncil";
import CPDC from "./pages/administration/CPDC";
import ProgramStructure from "./pages/academics/ProgramStructure";
import ProgrammesOffered from "./pages/academics/ProgrammesOffered";
import CourseOutcomes from "./pages/academics/CourseOutcomes";
import ProgramOutcomes from "./pages/academics/ProgramOutcomes";
import Infrastructure from "./pages/infrastructure/Infrastructure";
import DigitalCampus from "./pages/infrastructure/DigitalCampus";
import SportsFacilities from "./pages/infrastructure/SportsFacilities";
import IQAC from "./pages/iqac/IQAC";
import QualityPolicy from "./pages/iqac/QualityPolicy";
import StudentSupport from "./pages/StudentSupport";
import Physics from "./pages/departments/Physics";
import Chemistry from "./pages/departments/Chemistry";
import Mathematics from "./pages/departments/Mathematics";
import Commerce from "./pages/departments/Commerce";
import English from "./pages/departments/English";
import Telugu from "./pages/departments/Telugu";
import Hindi from "./pages/departments/Hindi";
import Botany from "./pages/departments/Botany";
import Zoology from "./pages/departments/Zoology";
import Economics from "./pages/departments/Economics";
import DeptHistory from "./pages/departments/History";
import PoliticalScience from "./pages/departments/PoliticalScience";
import PhysicalEducation from "./pages/departments/PhysicalEducation";
import Admin from "./pages/Admin";

// Student Support Pages
import JKC from "./pages/student-support/JKC";
import NSS from "./pages/student-support/NSS";
import NCCProgram from "./pages/student-support/NCCProgram";
import WomenEmpowerment from "./pages/student-support/WomenEmpowerment";
import ICCPage from "./pages/student-support/ICCPage";
import GymSports from "./pages/student-support/GymSports";
import AntiRagging from "./pages/student-support/AntiRagging";
import CulturalClub from "./pages/student-support/CulturalClub";
import ConsumerClub from "./pages/student-support/ConsumerClub";
import EcoClub from "./pages/student-support/EcoClub";

// Admin Components
import AnnouncementsAdmin from "@/components/admin/AnnouncementsAdmin";
import ExaminationDocumentsAdmin from "@/components/admin/ExaminationDocumentsAdmin";
import AdminLayout from "@/components/admin/AdminLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/administration" element={<Administration />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/departments/library" element={<Library />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/student-documents" element={<StudentDocuments />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faculty-login" element={<FacultyLogin />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/results" element={<Results />} />
            <Route path="/exam-schedule" element={<ExamSchedule />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/departments/computerscience" element={<ComputerScience />} />
            <Route path="/departments/physics" element={<Physics />} />
            <Route path="/departments/chemistry" element={<Chemistry />} />
            <Route path="/departments/mathematics" element={<Mathematics />} />
            <Route path="/departments/commerce" element={<Commerce />} />
            <Route path="/departments/english" element={<English />} />
            <Route path="/departments/telugu" element={<Telugu />} />
            <Route path="/departments/hindi" element={<Hindi />} />
            <Route path="/departments/botany" element={<Botany />} />
            <Route path="/departments/zoology" element={<Zoology />} />
            <Route path="/departments/economics" element={<Economics />} />
            <Route path="/departments/history" element={<DeptHistory />} />
            <Route path="/departments/politicalscience" element={<PoliticalScience />} />
            <Route path="/departments/physicaleducation" element={<PhysicalEducation />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/examination-cell" element={<ExaminationCell />} />
            <Route path="/library" element={<Library />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/magazines" element={<Magazines />} />
            <Route path="/icc" element={<ICC />} />
            <Route path="/nirf" element={<NIRF />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/about/strategic-documents" element={<StrategicDocuments />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/infrastructure/digital-campus" element={<DigitalCampus />} />
            <Route path="/infrastructure/sports-facilities" element={<SportsFacilities />} />
            <Route path="/iqac" element={<IQAC />} />
            <Route path="/iqac/quality-policy" element={<QualityPolicy />} />
            <Route path="/student-support" element={<StudentSupport />} />
            <Route path="/student-support/jkc" element={<JKC />} />
            <Route path="/student-support/nss" element={<NSS />} />
            <Route path="/student-support/ncc-program" element={<NCCProgram />} />
            <Route path="/student-support/women-empowerment" element={<WomenEmpowerment />} />
            <Route path="/student-support/icc" element={<ICCPage />} />
            <Route path="/student-support/gym-sports" element={<GymSports />} />
            <Route path="/student-support/anti-ragging" element={<AntiRagging />} />
            <Route path="/student-support/cultural-club" element={<CulturalClub />} />
            <Route path="/student-support/consumer-club" element={<ConsumerClub />} />
            <Route path="/student-support/eco-club" element={<EcoClub />} />
            <Route path="/placements" element={<Placements />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/announcements" element={
              <AdminLayout>
                <AnnouncementsAdmin />
              </AdminLayout>
            } />
            <Route path="/admin/examination" element={
              <AdminLayout>
                <ExaminationDocumentsAdmin />
              </AdminLayout>
            } />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
