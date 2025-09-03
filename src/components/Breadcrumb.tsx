import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { 
  Breadcrumb as BreadcrumbRoot, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getPageTitle = (path: string) => {
    const titles: { [key: string]: string } = {
      'about': 'About Us',
      'history': 'History',
      'vision-mission': 'Vision & Mission',
      'principal-message': 'Principal\'s Message',
      'strategic-documents': 'Strategic Documents',
      'college-pledge-song': 'College Pledge & Song',
      'administration': 'Administration',
      'teaching-staff': 'Teaching Staff',
      'non-teaching-staff': 'Non-Teaching Staff',
      'organogram': 'Organogram',
      'governing-body': 'Governing Body',
      'academic-council': 'Academic Council',
      'cpdc': 'CPDC',
      'academics': 'Academics',
      'program-structure': 'Program Structure',
      'programmes-offered': 'Programmes Offered',
      'course-outcomes': 'Course Outcomes',
      'program-outcomes': 'Program Outcomes',
      'program-specific-outcomes': 'Program Specific Outcomes',
      'academic-calendar': 'Academic Calendar',
      'master-timetable': 'Master Timetable',
      'lms-etools': 'LMS / e-tools by Staff',
      'infrastructure': 'Infrastructure',
      'class-rooms': 'Class Rooms',
      'labs': 'Labs',
      'virtual-class-rooms': 'Virtual Class Rooms',
      'digital-class-rooms': 'Digital Class Rooms',
      'library': 'Library',
      'hostel': 'Hostel',
      'campus-layout': 'Campus Layout',
      'iqac': 'IQAC',
      'about-iqac': 'About IQAC',
      'aqars': 'AQARS',
      'iqac-meetings': 'IQAC Meetings',
      'policy-documents': 'Policy Documents',
      'institutional-development-plan': 'Institutional Development Plan',
      'institutional-distinctiveness': 'Institutional Distinctiveness',
      'institutional-perspective-plan': 'Institutional Perspective Plan',
      'academic-audit-reports': 'Academic Audit Reports',
      'naac': 'NAAC',
      'student-support': 'Student Support',
      'ncc-program': 'NCC Program',
      'women-empowerment': 'Women Empowerment',
      'gym-sports': 'Gym and Sports',
      'scholarships': 'Scholarships',
      'capacity-building': 'Capacity Building',
      'best-practices': 'Best Practices',
      'gender-sensitivity': 'Gender Sensitivity',
      'waste-management': 'Waste Management',
      'best-practices-institution': 'Best Practices of the Institution',
      'national-symbols': 'National Symbols',
      'fundamental-rights-duties': 'Fundamental Rights & Duties',
      'professional-code': 'Professional Code',
      'code-of-conduct-handbook': 'Code of Conduct Handbook',
      'differently-abled-friendliness': 'Differently Abled Friendliness',
      'green-practices': 'Green Practices',
      'rainwater-harvesting': 'Rainwater Harvesting',
      'digital-herbarium': 'Digital Herbarium',
      'research': 'Research',
      'examination-cell': 'Examination Cell',
      'alumni': 'Alumni',
      'magazines': 'Magazines',
      'nirf': 'NIRF',
      'feedback': 'Feedback',
      'departments': 'Departments',
      'gallery': 'Gallery',
      'contact': 'Contact',
      'placements': 'Placements'
    };
    return titles[path] || path.charAt(0).toUpperCase() + path.slice(1);
  };

  const buildPath = (index: number) => {
    return '/' + pathnames.slice(0, index + 1).join('/');
  };

  if (pathnames.length === 0) return null;

  return (
    <div className="bg-gray-50 py-4">
      <div className="container mx-auto px-4">
        <BreadcrumbRoot>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="flex items-center">
                  <Home className="h-4 w-4" />
                  <span className="ml-1">Home</span>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
            {pathnames.map((value, index) => {
              const isLast = index === pathnames.length - 1;
              const path = buildPath(index);
              
              return (
                <BreadcrumbItem key={path}>
                  <BreadcrumbSeparator>
                    <ChevronRight className="h-4 w-4" />
                  </BreadcrumbSeparator>
                  {isLast ? (
                    <BreadcrumbPage>
                      {getPageTitle(value)}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={path}>
                        {getPageTitle(value)}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              );
            })}
          </BreadcrumbList>
        </BreadcrumbRoot>
      </div>
    </div>
  );
};

export default Breadcrumb;