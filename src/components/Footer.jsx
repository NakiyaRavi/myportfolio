import { Github, Instagram, Linkedin, Whatsapp } from '../sections/Icons';
import { Link } from 'react-scroll';

export default function Footer() {
  
  return (
    <footer className="bg-dark border-t border-dusty/20 pt-16 pb-8 mt-10 text-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 font-mono text-dusty">Ravi Nakiya</h3>
            <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
              A passionate full-stack developer focusing on building exceptional digital experiences. Always learning, always creating.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-cream">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-cream/70 text-sm font-medium">
              <li><Link to="home" smooth={true} offset={-70} duration={500} className="hover:text-dusty hover:translate-x-1 inline-block transition-all cursor-pointer">Home</Link></li>
              <li><Link to="about" smooth={true} offset={-70} duration={500} className="hover:text-dusty hover:translate-x-1 inline-block transition-all cursor-pointer">About</Link></li>
              <li><Link to="projects" smooth={true} offset={-70} duration={500} className="hover:text-dusty hover:translate-x-1 inline-block transition-all cursor-pointer">Projects</Link></li>
              <li><Link to="contact" smooth={true} offset={-70} duration={500} className="hover:text-dusty hover:translate-x-1 inline-block transition-all cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-cream">Connect</h4>
            <div className="flex items-center gap-4">
              <a href="https://github.com/NakiyaRavi" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-full border border-dusty/20 text-cream/70 hover:text-dusty hover:border-dusty transition-all hover:-translate-y-1 shadow-sm">
                  <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nakiya-raviraj/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-full border border-dusty/20 text-cream/70 hover:text-dusty hover:border-dusty transition-all hover:-translate-y-1 shadow-sm">
                  <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/nakiya_ravi_12" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-full border border-dusty/20 text-cream/70 hover:text-dusty hover:border-dusty transition-all hover:-translate-y-1 shadow-sm">
                  <Instagram size={20} />
              </a>
              <a href="https://wa.me/918200086009" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-full border border-dusty/20 text-cream/70 hover:text-dusty hover:border-dusty transition-all hover:-translate-y-1 shadow-sm">
                  <Whatsapp size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dusty/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/60 font-mono text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Ravi Nakiya. All rights reserved.
          </p>
          <p className="text-cream/60 font-mono text-xs flex items-center gap-1">
            Built with <span className="text-red-500">❤️</span> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}