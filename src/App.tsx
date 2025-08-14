
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
