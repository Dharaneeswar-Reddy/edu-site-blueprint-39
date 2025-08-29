import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const CallToAction = () => {
  return <section className="py-16 bg-cover bg-center" style={{
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://source.unsplash.com/random/1920x500?campus,students")'
  }}>
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Ready to Start Your Academic Journey?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto animate-fade-in" style={{
        animationDelay: "0.2s"
      }}>Join SVRMC and unlock a world of opportunities. Our application process for the 2025-26 academic year is now open.</p>
        <div className="flex justify-center gap-4 animate-fade-in" style={{
        animationDelay: "0.3s"
      }}>
          <Button size="lg" className="bg-college-gold text-college-blue hover:bg-yellow-400 hover-scale" asChild>
            <Link to="/admission">Contact us</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/20 hover:text-black hover-scale" asChild>
            <Link to="/contact">Explore Campus</Link>
          </Button>
        </div>
      </div>
    </section>;
};
export default CallToAction;