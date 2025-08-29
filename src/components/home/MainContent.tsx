
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WelcomeSection from "./WelcomeSection";
import VicePresidentMessage from "./ChairmanMessage";
import CorrespondentMessage from "./CorrespondentMessage";
import CollegeStats from "./CollegeStats";
import LatestNews from "./LatestNews";



interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
}

interface MainContentProps {
  latestNews: NewsItem[];
}

const MainContent = ({ latestNews }: MainContentProps) => {
  return (
    <div className="lg:col-span-2">
      <WelcomeSection />
      <VicePresidentMessage />
      <CorrespondentMessage />
      <CollegeStats />
      
      
      <div className="mt-12 text-center flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button variant="outline" className="hover:bg-college-blue hover:text-white" asChild>
          <Link to="/departments" className="flex items-center">
            Explore Departments <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" className="hover:bg-college-blue hover:text-white" asChild>
          <Link to="/placements" className="flex items-center">
            Career Opportunities <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MainContent;
