
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import SEOProvider from "@/components/SEOProvider";

// Import pages
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Academics from "./pages/Academics";
import Departments from "./pages/Departments";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Administration from "./pages/Administration";
import Admission from "./pages/Admission";
import Placements from "./pages/Placements";
import Gallery from "./pages/Gallery";
import ComputerScience from "./pages/ComputerScience";
import Electronics from "./pages/Electronics";
import ExaminationCell from "./pages/ExaminationCell";
import Library from "./pages/departments/Library";
import History from "./pages/about/History";
import VisionMission from "./pages/about/VisionMission";
import PrincipalMessage from "./pages/about/PrincipalMessage";

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
import NCCProgram from "./pages/student-support/NCCProgram";
import WomenEmpowerment from "./pages/student-support/WomenEmpowerment";
import GymSports from "./pages/student-support/GymSports";

// Admin Components
import AnnouncementsAdmin from "@/components/admin/AnnouncementsAdmin";
import ExaminationDocumentsAdmin from "@/components/admin/ExaminationDocumentsAdmin";
import IqacAdmin from "@/components/admin/IqacAdmin";
import StaffAdmin from "@/components/admin/StaffAdmin";
import GalleryAdmin from "@/components/admin/GalleryAdmin";
import DepartmentsAdmin from "@/components/admin/DepartmentsAdmin";
import StudentSupportAdmin from "@/components/admin/StudentSupportAdmin";
import AdminLayout from "@/components/admin/AdminLayout";
import AdminRoleGuard from "@/components/admin/AdminRoleGuard";
import AdminUsers from "@/pages/AdminUsers";
import AdminRecruiters from "@/pages/AdminRecruiters";
import ResetPassword from "@/pages/admin/ResetPassword";
import AcceptInvitation from "@/pages/admin/AcceptInvitation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SEOProvider>
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
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/departments/computerscience" element={<ComputerScience />} />
            <Route path="/departments/electronics" element={<Electronics />} />
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
            <Route path="/examination-cell" element={<ExaminationCell />} />
            <Route path="/library" element={<Library />} />
            <Route path="/iqac" element={<IQAC />} />
            <Route path="/iqac/quality-policy" element={<QualityPolicy />} />
            <Route path="/student-support" element={<StudentSupport />} />
            <Route path="/student-support/ncc-program" element={<NCCProgram />} />
            <Route path="/student-support/women-empowerment" element={<WomenEmpowerment />} />
            <Route path="/student-support/gym-sports" element={<GymSports />} />
            <Route path="/placements" element={<Placements />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/reset-password" element={<ResetPassword />} />
            <Route path="/admin/accept-invitation" element={<AcceptInvitation />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/recruiters" element={<AdminRecruiters />} />
            <Route path="/admin/announcements" element={
              <AdminRoleGuard>
                <AdminLayout>
                  <AnnouncementsAdmin />
                </AdminLayout>
              </AdminRoleGuard>
            } />
            <Route path="/admin/examination" element={
              <AdminRoleGuard>
                <AdminLayout>
                  <ExaminationDocumentsAdmin />
                </AdminLayout>
              </AdminRoleGuard>
            } />
            <Route path="/admin/iqac" element={
              <AdminRoleGuard>
                <AdminLayout>
                  <IqacAdmin />
                </AdminLayout>
              </AdminRoleGuard>
            } />
            <Route path="/admin/staff" element={
              <AdminRoleGuard>
                <AdminLayout>
                  <StaffAdmin />
                </AdminLayout>
              </AdminRoleGuard>
            } />
            <Route path="/admin/gallery" element={
              <AdminRoleGuard>
                <AdminLayout>
                  <GalleryAdmin />
                </AdminLayout>
              </AdminRoleGuard>
            } />
            <Route path="/admin/departments" element={
              <AdminRoleGuard>
                <AdminLayout>
                  <DepartmentsAdmin />
                </AdminLayout>
              </AdminRoleGuard>
            } />
            <Route path="/admin/student-support" element={
              <AdminRoleGuard>
                <AdminLayout>
                  <StudentSupportAdmin />
                </AdminLayout>
              </AdminRoleGuard>
            } />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </SEOProvider>
  </QueryClientProvider>
);

export default App;
