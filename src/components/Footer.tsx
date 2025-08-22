import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-college-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src="/lovable-uploads/5c7ebe72-4ecd-4e54-8ce5-6bf0a6141878.png" alt="SVRMC Logo" className="h-12 w-12" />
              <div className="flex flex-col">
                <span className="font-bold text-sm">Shri Velagapudi Ramakrishna</span>
                <span className="font-bold text-sm">Memorial College</span>
              </div>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              SVRMC is dedicated to providing quality education and shaping the future of students through academic excellence and holistic development.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-college-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-college-gold transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-college-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-college-gold transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-college-gold"></span>
            </h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/departments" className="text-sm text-gray-300 hover:text-white transition-colors">Departments</Link></li>
              <li><Link to="/placements" className="text-sm text-gray-300 hover:text-white transition-colors">Placements</Link></li>
              <li><Link to="/news" className="text-sm text-gray-300 hover:text-white transition-colors">News & Events</Link></li>
              <li><Link to="/gallery" className="text-sm text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 relative pb-2">
              Important Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-college-gold"></span>
            </h3>
            <ul className="space-y-2">
              <li><Link to="/academic-calendar" className="text-sm text-gray-300 hover:text-white transition-colors">Academic Calendar</Link></li>
              <li><Link to="/results" className="text-sm text-gray-300 hover:text-white transition-colors">Results</Link></li>
              <li><Link to="/exam-schedule" className="text-sm text-gray-300 hover:text-white transition-colors">Examination Schedule</Link></li>
              
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 relative pb-2">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-college-gold"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-college-gold mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-300">SVRM College Campus, NH-5, Nagaram, Guntur District, Andhra Pradesh - 522268</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-college-gold flex-shrink-0" />
                <span className="text-sm text-gray-300">+91 9999999999</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-college-gold flex-shrink-0" />
                <span className="text-sm text-gray-300">info@svrmc.edu.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-[#062c6a] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">© {new Date().getFullYear()} Shri Velagapudi Ramakrishna Memorial College. All rights reserved.</p>
            <div className="mt-2 md:mt-0">
              <ul className="flex space-x-4">
                <li><a href="#" className="text-xs text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-xs text-gray-300 hover:text-white transition-colors">Terms of Use</a></li>
                <li><a href="#" className="text-xs text-gray-300 hover:text-white transition-colors">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;