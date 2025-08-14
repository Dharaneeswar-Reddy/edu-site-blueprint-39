
import { Link } from "react-router-dom";
import { ArrowRight, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResearchHighlights = () => {
  return (
    <div className="mb-12">
      <h2 className="section-title">Research Excellence</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="rounded-lg overflow-hidden shadow-lg hover-scale order-2 md:order-1">
          <img 
            src="/lovable-uploads/52a8e7b1-5b22-4a0c-b1ec-450f99bfa9bb.png" 
            alt="SVRMC Research Facility" 
            className="w-full h-[300px] object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <div className="flex items-center mb-4">
            <Microscope className="h-6 w-6 text-college-blue mr-2" />
            <h3 className="text-xl font-semibold text-college-blue">Cutting-Edge Research</h3>
          </div>
          <p className="mb-4 slide-up">Our college has established several research centers focused on emerging technologies and innovation. Our faculty and students actively engage in research projects that address real-world challenges.</p>
          <p className="mb-6 slide-up" style={{ animationDelay: "0.2s" }}>The newly inaugurated Research Center provides state-of-the-art facilities for advanced studies in robotics, artificial intelligence, and biotechnology.</p>
          <Button className="bg-college-blue hover:bg-blue-700 hover-scale flex items-center slide-up" style={{ animationDelay: "0.3s" }} asChild>
            <Link to="/research">
              Explore Our Research <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResearchHighlights;
