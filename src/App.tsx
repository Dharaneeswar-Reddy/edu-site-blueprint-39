
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import Index from "./pages/Index";
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
import Library from "./pages/Library";
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
import NAAC from "./pages/naac/NAAC";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/student-documents" element={<StudentDocuments />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faculty-login" element={<FacultyLogin />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/academic-calendar" element={<AcademicCalendar />} />
          <Route path="/results" element={<Results />} />
          <Route path="/exam-schedule" element={<ExamSchedule />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/departments/computerscience" element={<ComputerScience />} />
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
          <Route path="/naac" element={<NAAC />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
