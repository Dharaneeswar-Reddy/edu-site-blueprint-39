
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WelcomeSection = () => {
  return (
    <div className="mb-12">
      <h2 className="section-title">Welcome to SVRMC</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <p className="mb-4 slide-up">The decision to seek NAAC Accreditation marks a milestone in the proud journey of Sri Velagapudi Ramakrishna Memorial College.</p>
          <p className="mb-4 slide-up" style={{ animationDelay: "0.1s" }}>Over five decades ago, higher education was almost absent in the rural belt of Repalle Taluk. To bridge this gap, the Repalle Taluk Educational Improvement Society was formed. Responding to their vision, Late Sri Velagapudi Ramakrishna, an eminent industrialist from Bellamvaripalem, generously offered his sugar factory site and buildings at Nagaram for the establishment of a college. Dr. N.V. Krishna Rao, the Founder Secretary and Correspondent, played a key role in organizing and establishing the college, ensuring the founders' vision became a reality.</p>
          <p className="mb-4 slide-up" style={{ animationDelay: "0.2s" }}>The foundation stone of the college was laid by the President of India, Sri V.V. Giri, symbolizing the institution's national importance.</p>
          <p className="mb-6 slide-up" style={{ animationDelay: "0.3s" }}>After his demise, his family—Smt. Rajeswary Ramakrishnan donated 28.74 acres of land and infrastructure, turning his dream into reality. Thus, on 21st August 1969, SVRM College was founded to bring quality higher education to rural youth. Later, Dr. S.R.K. Prasad, son of Smt. Rajeswary Ramakrishnan, carried forward the noble vision with dedication until his demise. Today, his daughter Smt. Nandita Prasad continues the proud legacy of the Velagapudi family, guiding SVRM College with the same spirit of service, commitment, and excellence in education. Since then, SVRM College has stood as a beacon of knowledge and values, serving generations of students and uplifting the surrounding villages with education, culture, and service.</p>
          <Button className="bg-college-blue hover:bg-blue-700 hover-scale flex items-center slide-up" style={{ animationDelay: "0.3s" }} asChild>
            <Link to="/about">
              Explore Our College <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg hover-scale">
          <img 
            src="/lovable-uploads/f3d6ede9-846e-473c-a7f7-c8e948334e8a.png" 
            alt="College Officials and Dignitaries" 
            className="w-full h-[300px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
