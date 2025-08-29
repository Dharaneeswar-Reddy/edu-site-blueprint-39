
import { BookOpen, Users, Building, Award } from "lucide-react";

interface CollegeStat {
  icon: React.ReactNode;
  count: string;
  label: string;
}

const CollegeStats = () => {
  const collegeStats: CollegeStat[] = [
    {
      icon: <BookOpen className="h-8 w-8 text-college-blue" />,
      count: "56+",
      label: "Years of Excellence"
    },
    {
      icon: <Users className="h-8 w-8 text-college-blue" />,
      count: "70+",
      label: "Faculty"
    },
    {
      icon: <Building className="h-8 w-8 text-college-blue" />,
      count: "15+",
      label: "Departments"
    },
    {
      icon: <Award className="h-8 w-8 text-college-blue" />,
      count: "80%",
      label: "Placement + Higher Studies Rate"
    }
  ];

  return (
    <div className="mb-12">
      <h2 className="section-title">Our Achievements</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {collegeStats.map((stat, index) => (
          <div 
            key={index} 
            className="glass-card p-4 text-center hover:shadow-lg transition-shadow animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-center mb-3">{stat.icon}</div>
            <h3 className="text-2xl font-bold text-college-blue mb-1">{stat.count}</h3>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeStats;
