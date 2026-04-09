import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const MainNavigation = () => {
  const location = useLocation();
  
  // Explicitly defining the array to ensure NIRF is present
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Research", path: "/research" },
    { name: "Admission", path: "/admission" },
    { name: "Departments", path: "/departments" },
    { name: "Placements", path: "/placements" },
    { name: "NIRF", path: "/nirf" }, // Double-check this line is here
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ];
  
  return (
    <nav className="hidden md:flex items-center space-x-1">
      {navItems.map((item) => (
        <Link
          key={`${item.path}-${item.name}`} // Unique key to force re-render
          to={item.path}
          className={cn(
            "px-3 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap",
            location.pathname === item.path
              ? "bg-blue-100 text-college-blue font-bold"
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
