import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="navbar-header">
        <nav className="navbar-container">
          {/* Brand Logo */}
          <a href="#home" className="navbar-logo">
            <span>&lt;</span> Ravi.Codes <span>/&gt;</span>
          </a>

          {/* Desktop Links */}
          <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
            {/* Mobile Only Hire Me Button */}
            <li className="mobile-btn-item">
              <a href="#contact" className="btn-primary" onClick={() => setIsOpen(false)}>
                Hire Me
              </a>
            </li>
          </ul>

          {/* Action Button & Hamburger */}
          <div className="navbar-actions">
            <a href="#contact" className="btn-primary desktop-btn">
              Hire Me
            </a>
            
            <button 
              className={`hamburger ${isOpen ? 'open' : ''}`} 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Backdrop overlay for closing mobile menu */}
      {isOpen && <div className="nav-backdrop" onClick={() => setIsOpen(false)} />}
    </>
  );
};