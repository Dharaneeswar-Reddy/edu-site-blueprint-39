import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const [departmentDropdown, setDepartmentDropdown] = useState(false);
  const [administrationDropdown, setAdministrationDropdown] = useState(false);
  const [qualityDropdown, setQualityDropdown] = useState(false);
  const [studentSupportDropdown, setStudentSupportDropdown] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const closeAllDropdowns = () => {
    setAdministrationDropdown(false);
    setDepartmentDropdown(false);
    setQualityDropdown(false);
    setStudentSupportDropdown(false);
  };

  const handleMouseEnter = (dropdownSetter: (value: boolean) => void) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    dropdownSetter(true);
  };

  const handleMouseLeave = (dropdownSetter: (value: boolean) => void) => {
    const timeout = setTimeout(() => {
      dropdownSetter(false);
    }, 300); // 300ms delay before closing
    setHoverTimeout(timeout);
  };

  const handleDropdownClick = (currentState: boolean, dropdownSetter: (value: boolean) => void) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    closeAllDropdowns();
    dropdownSetter(!currentState);
  };
  return <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-1" : "bg-black/50 backdrop-blur-sm py-2"}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="/lovable-uploads/43b08f5f-94a1-4efc-a4bc-d959843cb7ea.png" alt="SVRMC Logo" className="h-8 w-8" />
            <div className={`flex flex-col ${scrolled ? "text-college-blue" : "text-white"}`}>
              <span className="font-bold text-xs md:text-sm">Shri Velagapudi Ramakrishna Memorial College</span>
              <span className="text-xs hidden sm:block">Govt. Aided College Sponsored by R.T.E.I. Society</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-0">
            <Link to="/" className={`px-2 py-1 text-sm font-medium transition-colors ${isActive("/") ? "active" : ""} ${scrolled ? "text-college-dark hover:text-college-blue" : "text-white hover:text-college-gold"}`}>
              Home
            </Link>
            
            <Link to="/about-us" className={`px-2 py-1 text-sm font-medium transition-colors ${isActive("/about-us") ? "active" : ""} ${scrolled ? "text-college-dark hover:text-college-blue" : "text-white hover:text-college-gold"}`}>
              About Us
            </Link>
            
            <Link to="/administration" className={`px-2 py-1 text-sm font-medium transition-colors ${isActive("/administration") ? "active" : ""} ${scrolled ? "text-college-dark hover:text-college-blue" : "text-white hover:text-college-gold"}`}>
              Administration
            </Link>

            <Link to="/academics" className={`px-2 py-1 text-sm font-medium transition-colors ${isActive("/academics") ? "active" : ""} ${scrolled ? "text-college-dark hover:text-college-blue" : "text-white hover:text-college-gold"}`}>
              Academics
            </Link>

            {/* Departments Dropdown */}
            <div className="relative" 
              onMouseEnter={() => handleMouseEnter(setDepartmentDropdown)} 
              onMouseLeave={() => handleMouseLeave(setDepartmentDropdown)}
            >
              <button 
                onClick={() => handleDropdownClick(departmentDropdown, setDepartmentDropdown)}
                className={`px-2 py-1 text-sm font-medium transition-colors flex items-center ${isActive("/departments") ? "active" : ""} ${scrolled ? "text-college-dark hover:text-college-blue" : "text-white hover:text-college-gold"}`}
              >
                Departments <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              {departmentDropdown && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setDepartmentDropdown(false)}
                  ></div>
                  <div className="absolute left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-1 z-20 animate-fade-in border"
                    onMouseEnter={() => handleMouseEnter(setDepartmentDropdown)}
                    onMouseLeave={() => handleMouseLeave(setDepartmentDropdown)}
                  >
                    <Link to="/departments" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setDepartmentDropdown(false)}>All Departments</Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <Link to="/departments/computerscience" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setDepartmentDropdown(false)}>Computer Science</Link>
                    <Link to="/departments/physics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setDepartmentDropdown(false)}>Physics</Link>
                    <Link to="/departments/chemistry" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setDepartmentDropdown(false)}>Chemistry</Link>
                    <Link to="/departments/mathematics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setDepartmentDropdown(false)}>Mathematics</Link>
                    <Link to="/departments/commerce" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setDepartmentDropdown(false)}>Commerce</Link>
                    <Link to="/departments/english" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setDepartmentDropdown(false)}>English</Link>
                  </div>
                </>
              )}
            </div>

            <Link to="/iqac" className={`px-2 py-1 text-sm font-medium transition-colors ${isActive("/iqac") ? "active" : ""} ${scrolled ? "text-college-dark hover:text-college-blue" : "text-white hover:text-college-gold"}`}>
              IQAC
            </Link>

            {/* Student Support Dropdown */}
            <div className="relative" 
              onMouseEnter={() => handleMouseEnter(setStudentSupportDropdown)} 
              onMouseLeave={() => handleMouseLeave(setStudentSupportDropdown)}
            >
              <button 
                onClick={() => handleDropdownClick(studentSupportDropdown, setStudentSupportDropdown)}
                className={`px-2 py-1 text-sm font-medium transition-colors flex items-center ${isActive("/student-support") ? "active" : ""} ${scrolled ? "text-college-dark hover:text-college-blue" : "text-white hover:text-college-gold"}`}
              >
                Student Support <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              {studentSupportDropdown && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setStudentSupportDropdown(false)}
                  ></div>
                  <div className="absolute left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-1 z-20 animate-fade-in border"
                    onMouseEnter={() => handleMouseEnter(setStudentSupportDropdown)}
                    onMouseLeave={() => handleMouseLeave(setStudentSupportDropdown)}
                  >
                    <Link to="/student-support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setStudentSupportDropdown(false)}>All Programs</Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <Link to="/student-support/jkc" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setStudentSupportDropdown(false)}>JKC</Link>
                    <Link to="/student-support/nss" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setStudentSupportDropdown(false)}>NSS</Link>
                    <Link to="/student-support/ncc-program" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setStudentSupportDropdown(false)}>NCC</Link>
                    <Link to="/student-support/women-empowerment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setStudentSupportDropdown(false)}>Women Empowerment</Link>
                    <Link to="/student-support/icc" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setStudentSupportDropdown(false)}>ICC</Link>
                    <Link to="/student-support/gym-sports" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setStudentSupportDropdown(false)}>Gym & Sports</Link>
                    <Link to="/student-support/anti-ragging" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setStudentSupportDropdown(false)}>Anti-Ragging</Link>
                    <Link to="/student-support/cultural-club" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setStudentSupportDropdown(false)}>Cultural Club</Link>
                    <Link to="/student-support/consumer-club" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setStudentSupportDropdown(false)}>Consumer Club</Link>
                  </div>
                </>
              )}
            </div>

            <Link to="/placements" className={`px-2 py-1 text-sm font-medium transition-colors ${isActive("/placements") ? "active" : ""} ${scrolled ? "text-college-dark hover:text-college-blue" : "text-white hover:text-college-gold"}`}>
              Placements
            </Link>

            <Link to="/examination-cell" className={`px-2 py-1 text-sm font-medium transition-colors ${isActive("/examination-cell") ? "active" : ""} ${scrolled ? "text-college-dark hover:text-college-blue" : "text-white hover:text-college-gold"}`}>
              Exam Cell
            </Link>

            <Link to="/gallery" className={`px-2 py-1 text-sm font-medium transition-colors ${isActive("/gallery") ? "active" : ""} ${scrolled ? "text-college-dark hover:text-college-blue" : "text-white hover:text-college-gold"}`}>
              Gallery
            </Link>

            <Link to="/contact" className={`px-2 py-1 text-sm font-medium transition-colors ${isActive("/contact") ? "active" : ""} ${scrolled ? "text-college-dark hover:text-college-blue" : "text-white hover:text-college-gold"}`}>
              Contact
            </Link>
          </nav>

          {/* Hidden admin login and student documents buttons */}

          <button className={`lg:hidden ${scrolled ? "text-college-blue" : "text-white"}`} onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && <div className="lg:hidden bg-white mt-4 rounded-md shadow-lg py-2 animate-fade-in">
            <div className="flex flex-col space-y-1">
              <Link to="/" className={`px-4 py-2 ${isActive("/") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`} onClick={closeMobileMenu}>
                Home
              </Link>
              <Link to="/about-us" className={`px-4 py-2 ${isActive("/about-us") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`} onClick={closeMobileMenu}>
                About Us
              </Link>
              <Link to="/administration" className={`px-4 py-2 ${isActive("/administration") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`} onClick={closeMobileMenu}>
                Administration
              </Link>
              <Link to="/academics" className={`px-4 py-2 ${isActive("/academics") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`} onClick={closeMobileMenu}>
                Academics
              </Link>
              <div className="px-4 py-2 text-gray-700 font-medium">Departments</div>
              <Link to="/departments" className={`pl-8 py-2 ${isActive("/departments") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`} onClick={closeMobileMenu}>
                All Departments
              </Link>
              
              {/* Languages */}
              <div className="pl-8 py-1 text-xs font-semibold text-gray-500 uppercase">Languages</div>
              <Link to="/departments/telugu" className={`pl-12 py-2 ${isActive("/departments/telugu") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                Telugu
              </Link>
              <Link to="/departments/hindi" className={`pl-12 py-2 ${isActive("/departments/hindi") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                Hindi
              </Link>
              <Link to="/departments/english" className={`pl-12 py-2 ${isActive("/departments/english") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                English
              </Link>
              
              {/* Science */}
              <div className="pl-8 py-1 text-xs font-semibold text-gray-500 uppercase">Science</div>
              <Link to="/departments/physics" className={`pl-12 py-2 ${isActive("/departments/physics") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                Physics
              </Link>
              <Link to="/departments/chemistry" className={`pl-12 py-2 ${isActive("/departments/chemistry") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                Chemistry
              </Link>
              <Link to="/departments/computerscience" className={`pl-12 py-2 ${isActive("/departments/computerscience") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                Computer Science
              </Link>
              <Link to="/departments/mathematics" className={`pl-12 py-2 ${isActive("/departments/mathematics") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                Mathematics
              </Link>
              <Link to="/departments/botany" className={`pl-12 py-2 ${isActive("/departments/botany") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                Botany
              </Link>
              <Link to="/departments/zoology" className={`pl-12 py-2 ${isActive("/departments/zoology") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                Zoology
              </Link>
              <Link to="/departments/aquaculture" className={`pl-12 py-2 ${isActive("/departments/aquaculture") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                Aquaculture Technology
              </Link>
              
              {/* Humanities */}
              <div className="pl-8 py-1 text-xs font-semibold text-gray-500 uppercase">Humanities</div>
              <Link to="/departments/commerce" className={`pl-12 py-2 ${isActive("/departments/commerce") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                Commerce
              </Link>
              <Link to="/departments/economics" className={`pl-12 py-2 ${isActive("/departments/economics") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                Economics
              </Link>
              <Link to="/departments/politicalscience" className={`pl-12 py-2 ${isActive("/departments/politicalscience") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                Political Science
              </Link>
              <Link to="/departments/history" className={`pl-12 py-2 ${isActive("/departments/history") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                History
              </Link>
              
              <Link to="/iqac" className={`px-4 py-2 ${isActive("/iqac") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`} onClick={closeMobileMenu}>
                IQAC
              </Link>
               <div className="px-4 py-2 text-gray-700 font-medium">Student Support</div>
               <Link to="/student-support" className={`pl-8 py-2 ${isActive("/student-support") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`} onClick={closeMobileMenu}>
                 All Programs
               </Link>
               <Link to="/student-support/jkc" className={`pl-8 py-2 ${isActive("/student-support/jkc") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                 JKC
               </Link>
               <Link to="/student-support/nss" className={`pl-8 py-2 ${isActive("/student-support/nss") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                 NSS
               </Link>
               <Link to="/student-support/ncc-program" className={`pl-8 py-2 ${isActive("/student-support/ncc-program") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                 NCC
               </Link>
               <Link to="/student-support/women-empowerment" className={`pl-8 py-2 ${isActive("/student-support/women-empowerment") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                 Women Empowerment
               </Link>
               <Link to="/student-support/icc" className={`pl-8 py-2 ${isActive("/student-support/icc") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                 ICC
               </Link>
               <Link to="/student-support/gym-sports" className={`pl-8 py-2 ${isActive("/student-support/gym-sports") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                 Gym & Sports
               </Link>
               <Link to="/student-support/anti-ragging" className={`pl-8 py-2 ${isActive("/student-support/anti-ragging") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                 Anti-Ragging
               </Link>
               <Link to="/student-support/cultural-club" className={`pl-8 py-2 ${isActive("/student-support/cultural-club") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                 Cultural Club
               </Link>
               <Link to="/student-support/consumer-club" className={`pl-8 py-2 ${isActive("/student-support/consumer-club") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`} onClick={closeMobileMenu}>
                 Consumer Club
               </Link>
              <Link to="/placements" className={`px-4 py-2 ${isActive("/placements") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`} onClick={closeMobileMenu}>
                Placements
              </Link>
              <Link to="/examination-cell" className={`px-4 py-2 ${isActive("/examination-cell") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`} onClick={closeMobileMenu}>
                Examination Cell
              </Link>
              <Link to="/gallery" className={`px-4 py-2 ${isActive("/gallery") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`} onClick={closeMobileMenu}>
                Photo Gallery
              </Link>
              <Link to="/contact" className={`px-4 py-2 ${isActive("/contact") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`} onClick={closeMobileMenu}>
                Contact
              </Link>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;