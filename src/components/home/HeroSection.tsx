
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/lovable-uploads/9ecf085a-3abc-45e7-844b-b132bfa85970.png")' }}>
      <div className="hero-overlay"></div>
      <div className="hero-content container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">Shri Velagapudi Ramakrishna Memorial College</h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>Empowering Students Through Quality Education</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" className="bg-college-blue hover:bg-blue-700 hover-scale" asChild>
            <Link to="/admission">Apply Now</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/20 hover:text-black hover-scale" asChild>
            <Link to="/about-us">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
