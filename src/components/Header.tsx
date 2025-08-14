
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

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-black/50 backdrop-blur-sm py-4"}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/43b08f5f-94a1-4efc-a4bc-d959843cb7ea.png" 
              alt="SVRMC Logo" 
              className="h-12 w-12"
            />
            <div className={`flex flex-col ${scrolled ? "text-college-blue" : "text-white"}`}>
              <span className="font-bold text-sm md:text-base">Shri Velagapudi Ramakrishna Memorial College</span>
              <span className="text-xs">Govt. Aided College Sponsored by R.T.E.I. Society</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""} ${scrolled ? "text-college-dark hover:text-college-blue" : "text-white hover:text-college-gold"}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""} ${scrolled ? "text-college-dark hover:text-college-blue" : "text-white hover:text-college-gold"}`}>
              About
            </Link>
            <div 
              className="relative" 
              onMouseEnter={() => setDepartmentDropdown(true)}
              onMouseLeave={() => setDepartmentDropdown(false)}
            >
              <Link 
                to="/departments" 
                className={`nav-link flex items-center ${isActive("/departments") ? "active" : ""} ${scrolled ? "text-college-dark hover:text-college-blue" : "text-white hover:text-college-gold"}`}
              >
                Departments <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              {departmentDropdown && (
                <div className="absolute left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-1 z-10 animate-fade-in">
                  <Link 
                    to="/departments" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDepartmentDropdown(false)}
                  >
                    All Departments
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  <div className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase">Languages</div>
                  <Link 
                    to="/departments/telugu" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDepartmentDropdown(false)}
                  >
                    Telugu
                  </Link>
                  <Link 
                    to="/departments/hindi" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDepartmentDropdown(false)}
                  >
                    Hindi
                  </Link>
                  <Link 
                    to="/departments/english" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDepartmentDropdown(false)}
                  >
                    English
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  <div className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase">Science</div>
                  <Link 
                    to="/departments/physics" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDepartmentDropdown(false)}
                  >
                    Physics
                  </Link>
                  <Link 
                    to="/departments/chemistry" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDepartmentDropdown(false)}
                  >
                    Chemistry
                  </Link>
                  <Link 
                    to="/departments/computerscience" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDepartmentDropdown(false)}
                  >
                    Computer Science
                  </Link>
                  <Link 
                    to="/departments/mathematics" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDepartmentDropdown(false)}
                  >
                    Mathematics
                  </Link>
                  <Link 
                    to="/departments/botany" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDepartmentDropdown(false)}
                  >
                    Botany
                  </Link>
                  <Link 
                    to="/departments/zoology" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDepartmentDropdown(false)}
                  >
                    Zoology
                  </Link>
                  <Link 
                    to="/departments/aquaculture" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDepartmentDropdown(false)}
                  >
                    Aquaculture Technology
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  <div className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase">Humanities</div>
                  <Link 
                    to="/departments/commerce" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDepartmentDropdown(false)}
                  >
                    Commerce
                  </Link>
                  <Link 
                    to="/departments/economics" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDepartmentDropdown(false)}
                  >
                    Economics
                  </Link>
                  <Link 
                    to="/departments/politicalscience" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDepartmentDropdown(false)}
                  >
                    Political Science
                  </Link>
                  <Link 
                    to="/departments/history" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDepartmentDropdown(false)}
                  >
                    History
                  </Link>
                </div>
              )}
            </div>
            <Link to="/placements" className={`nav-link ${isActive("/placements") ? "active" : ""} ${scrolled ? "text-college-dark hover:text-college-blue" : "text-white hover:text-college-gold"}`}>
              Placements
            </Link>
            <Link to="/news" className={`nav-link ${isActive("/news") ? "active" : ""} ${scrolled ? "text-college-dark hover:text-college-blue" : "text-white hover:text-college-gold"}`}>
              News
            </Link>
            <Link to="/gallery" className={`nav-link ${isActive("/gallery") ? "active" : ""} ${scrolled ? "text-college-dark hover:text-college-blue" : "text-white hover:text-college-gold"}`}>
              Gallery
            </Link>
            <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""} ${scrolled ? "text-college-dark hover:text-college-blue" : "text-white hover:text-college-gold"}`}>
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-2">
            <Button 
              variant="outline" 
              className={`${scrolled ? "border-college-blue text-college-blue hover:bg-college-blue hover:text-white" : "border-white text-white hover:bg-white/10"}`} 
              asChild
            >
              <Link to="/admin-login">Admin Login</Link>
            </Button>
            <Button className="bg-college-green text-white hover:bg-green-700" asChild>
              <Link to="/student-documents">Student Documents</Link>
            </Button>
          </div>

          <button 
            className={`lg:hidden ${scrolled ? "text-college-blue" : "text-white"}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white mt-4 rounded-md shadow-lg py-2 animate-fade-in">
            <div className="flex flex-col space-y-1">
              <Link 
                to="/" 
                className={`px-4 py-2 ${isActive("/") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-4 py-2 ${isActive("/about") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`}
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <div className="px-4 py-2 text-gray-700 font-medium">Departments</div>
              <Link 
                to="/departments" 
                className={`pl-8 py-2 ${isActive("/departments") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`}
                onClick={closeMobileMenu}
              >
                All Departments
              </Link>
              
              {/* Languages */}
              <div className="pl-8 py-1 text-xs font-semibold text-gray-500 uppercase">Languages</div>
              <Link 
                to="/departments/telugu" 
                className={`pl-12 py-2 ${isActive("/departments/telugu") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`}
                onClick={closeMobileMenu}
              >
                Telugu
              </Link>
              <Link 
                to="/departments/hindi" 
                className={`pl-12 py-2 ${isActive("/departments/hindi") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`}
                onClick={closeMobileMenu}
              >
                Hindi
              </Link>
              <Link 
                to="/departments/english" 
                className={`pl-12 py-2 ${isActive("/departments/english") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`}
                onClick={closeMobileMenu}
              >
                English
              </Link>
              
              {/* Science */}
              <div className="pl-8 py-1 text-xs font-semibold text-gray-500 uppercase">Science</div>
              <Link 
                to="/departments/physics" 
                className={`pl-12 py-2 ${isActive("/departments/physics") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`}
                onClick={closeMobileMenu}
              >
                Physics
              </Link>
              <Link 
                to="/departments/chemistry" 
                className={`pl-12 py-2 ${isActive("/departments/chemistry") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`}
                onClick={closeMobileMenu}
              >
                Chemistry
              </Link>
              <Link 
                to="/departments/computerscience" 
                className={`pl-12 py-2 ${isActive("/departments/computerscience") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`}
                onClick={closeMobileMenu}
              >
                Computer Science
              </Link>
              <Link 
                to="/departments/mathematics" 
                className={`pl-12 py-2 ${isActive("/departments/mathematics") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`}
                onClick={closeMobileMenu}
              >
                Mathematics
              </Link>
              <Link 
                to="/departments/botany" 
                className={`pl-12 py-2 ${isActive("/departments/botany") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`}
                onClick={closeMobileMenu}
              >
                Botany
              </Link>
              <Link 
                to="/departments/zoology" 
                className={`pl-12 py-2 ${isActive("/departments/zoology") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`}
                onClick={closeMobileMenu}
              >
                Zoology
              </Link>
              <Link 
                to="/departments/aquaculture" 
                className={`pl-12 py-2 ${isActive("/departments/aquaculture") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`}
                onClick={closeMobileMenu}
              >
                Aquaculture Technology
              </Link>
              
              {/* Humanities */}
              <div className="pl-8 py-1 text-xs font-semibold text-gray-500 uppercase">Humanities</div>
              <Link 
                to="/departments/commerce" 
                className={`pl-12 py-2 ${isActive("/departments/commerce") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`}
                onClick={closeMobileMenu}
              >
                Commerce
              </Link>
              <Link 
                to="/departments/economics" 
                className={`pl-12 py-2 ${isActive("/departments/economics") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`}
                onClick={closeMobileMenu}
              >
                Economics
              </Link>
              <Link 
                to="/departments/politicalscience" 
                className={`pl-12 py-2 ${isActive("/departments/politicalscience") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`}
                onClick={closeMobileMenu}
              >
                Political Science
              </Link>
              <Link 
                to="/departments/history" 
                className={`pl-12 py-2 ${isActive("/departments/history") ? "bg-primary/10 text-primary font-medium" : "text-gray-600"}`}
                onClick={closeMobileMenu}
              >
                History
              </Link>
              
              <Link 
                to="/placements" 
                className={`px-4 py-2 ${isActive("/placements") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`}
                onClick={closeMobileMenu}
              >
                Placements
              </Link>
              <Link 
                to="/news" 
                className={`px-4 py-2 ${isActive("/news") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`}
                onClick={closeMobileMenu}
              >
                News
              </Link>
              <Link 
                to="/gallery" 
                className={`px-4 py-2 ${isActive("/gallery") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`}
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
              <Link 
                to="/contact" 
                className={`px-4 py-2 ${isActive("/contact") ? "bg-primary/10 text-primary font-medium" : "text-gray-700"}`}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <div className="pt-2 pb-1 px-4 border-t border-gray-200 flex space-x-2">
                <Button variant="outline" className="text-primary border-primary w-full" asChild>
                  <Link to="/admin-login" onClick={closeMobileMenu}>Admin Login</Link>
                </Button>
                <Button className="bg-college-green text-white hover:bg-green-700 w-full" asChild>
                  <Link to="/student-documents" onClick={closeMobileMenu}>Student Documents</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
