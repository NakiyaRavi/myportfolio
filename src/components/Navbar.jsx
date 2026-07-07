import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 w-full z-50 bg-dark/95 backdrop-blur-md border-b border-dusty/20 shadow-lg shadow-dusty/5"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link smooth to="/#home" className="text-xl font-bold text-cream font-mono">Ravi Nakiya</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-mono text-sm">
          <Link smooth to="/#home" className="text-cream/70 hover:text-dusty transition-colors">Home</Link>
          <Link smooth to="/#about" className="text-cream/70 hover:text-dusty transition-colors">About</Link>
          <Link smooth to="/#projects" className="text-cream/70 hover:text-dusty transition-colors">Projects</Link>
          <Link smooth to="/#contact" className="text-cream/70 hover:text-dusty transition-colors">Contact</Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-cream/70 hover:text-dusty transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-dark/95 border-t border-dusty/10"
          >
            <div className="flex flex-col px-6 py-4 gap-6 font-mono text-base pb-6">
              <Link smooth to="/#home" onClick={() => setIsOpen(false)} className="text-cream/70 hover:text-dusty transition-colors">Home</Link>
              <Link smooth to="/#about" onClick={() => setIsOpen(false)} className="text-cream/70 hover:text-dusty transition-colors">About</Link>
              <Link smooth to="/#projects" onClick={() => setIsOpen(false)} className="text-cream/70 hover:text-dusty transition-colors">Projects</Link>
              <Link smooth to="/#contact" onClick={() => setIsOpen(false)} className="text-cream/70 hover:text-dusty transition-colors">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}