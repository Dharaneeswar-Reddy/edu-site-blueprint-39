
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WelcomeSection = () => {
  return (
    <div className="mb-12">
      <h2 className="section-title">Welcome to SVRMC</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <p className="mb-4 slide-up">Founded in 1975, Shri Velagapudi Ramakrishna Memorial College has established itself as one of the premier educational institutions in Andhra Pradesh. Our commitment to academic excellence, research, and innovation has helped us nurture generations of successful professionals.</p>
          <p className="mb-6 slide-up" style={{ animationDelay: "0.2s" }}>The college offers undergraduate and postgraduate programs across various disciplines including Languages, Sciences, and Humanities. With state-of-the-art infrastructure and experienced faculty, we provide a conducive environment for holistic development.</p>
          <Button className="bg-college-blue hover:bg-blue-700 hover-scale flex items-center slide-up" style={{ animationDelay: "0.3s" }} asChild>
            <Link to="/about">
              Explore Our College <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg hover-scale">
          <img 
            src="/lovable-uploads/9ecf085a-3abc-45e7-844b-b132bfa85970.png" 
            alt="SVRMC Campus" 
            className="w-full h-[300px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
