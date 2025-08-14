
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const MainNavigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Research", path: "/research" },
    { name: "Admission", path: "/admission" },
    { name: "Departments", path: "/departments" },
    { name: "Placements", path: "/placements" },
    { name: "News", path: "/news" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ];
  
  return (
    <nav className="hidden md:flex items-center space-x-1">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={cn(
            "px-3 py-2 text-sm font-medium rounded-md transition-colors",
            location.pathname === item.path
              ? "bg-blue-100 text-college-blue"
              : "text-gray-700 hover:bg-gray-100"
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default MainNavigation;
