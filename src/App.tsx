
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import Index from "./pages/Index";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import StudentDocuments from "./pages/StudentDocuments";
import NotFound from "./pages/NotFound";
import Research from "./pages/Research";
import Academics from "./pages/Academics";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/student-documents" element={<StudentDocuments />} />
          <Route path="/research" element={<Research />} />
          <Route path="/academics" element={<Academics />} />
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
          <Route path="/about/history" element={<History />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/principal-message" element={<PrincipalMessage />} />
          <Route path="/about/strategic-documents" element={<StrategicDocuments />} />
          <Route path="/about/college-pledge-song" element={<CollegePledgeSong />} />
          <Route path="/administration/teaching-staff" element={<TeachingStaff />} />
          <Route path="/administration/non-teaching-staff" element={<NonTeachingStaff />} />
          <Route path="/administration/organogram" element={<Organogram />} />
          <Route path="/administration/governing-body" element={<GoverningBody />} />
          <Route path="/administration/academic-council" element={<AcademicCouncil />} />
          <Route path="/administration/cpdc" element={<CPDC />} />
          <Route path="/academics/program-structure" element={<ProgramStructure />} />
          <Route path="/academics/programmes-offered" element={<ProgrammesOffered />} />
          <Route path="/academics/course-outcomes" element={<CourseOutcomes />} />
          <Route path="/academics/program-outcomes" element={<ProgramOutcomes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
