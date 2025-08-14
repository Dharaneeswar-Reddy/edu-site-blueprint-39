
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WelcomeSection from "./WelcomeSection";
import CollegeStats from "./CollegeStats";
import LatestNews from "./LatestNews";
import TestimonialsCarousel from "./TestimonialsCarousel";
import ResearchHighlights from "./ResearchHighlights";

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
      <ResearchHighlights />
      <CollegeStats />
      <LatestNews news={latestNews} />
      <TestimonialsCarousel />
      
      <div className="mt-12 text-center flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button variant="outline" className="hover:bg-college-blue hover:text-white" asChild>
          <Link to="/academics" className="flex items-center">
            Explore Academics <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" className="hover:bg-college-blue hover:text-white" asChild>
          <Link to="/research" className="flex items-center">
            Discover Research <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MainContent;
