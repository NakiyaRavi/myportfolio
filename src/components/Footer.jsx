import React from 'react';
import '../styles/footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "919876543210"; 
  const whatsappMessage = encodeURIComponent("Hi! I would like to build a Web Project.");

  return (
    <footer className="studio-footer">
      {/* Top Main CTA Card */}
      <div className="hero-cta-card">
        <div className="cta-left">
          <span className="availability-pill">● Available for Work</span>
          <h2>Let’s create something great together.</h2>
        </div>
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} 
          target="_blank" 
          rel="noreferrer" 
          className="chat-btn"
        >
          Message on WhatsApp 💬
        </a>
      </div>

      {/* Quick Info Strip */}
      <div className="info-strip">
        <div className="strip-item">
          <span className="strip-label">ROLE</span>
          <span className="strip-val">Web & Software Developer </span>
        </div>
        
        <div className="strip-item">
          <span className="strip-label">LOCATION</span>
          <span className="strip-val">Surendranagar , Gujarat</span>
        </div>

        <div className="strip-item">
          <span className="strip-label">CONTACT</span>
          <a href="tel:+918200086009" className="strip-val link">+91 82000 86009</a>
        </div>

        <div className="strip-item">
          <span className="strip-label">EMAIL</span>
          <a href="mailto:developer@example.com" className="strip-val link">nakiyaraviraj19@gmail.com</a>
        </div>
      </div>

      {/* Minimal Social Buttons Bar */}
      <div className="social-bar">
        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp</a>
        <a href="https://linkedin.com/in/nakiya-raviraj-1b2373343" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/NakiyaRavi" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://instagram.com/nakiya_ravi_12" target="_blank" rel="noreferrer">Instagram</a>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        © {currentYear} Ravi.Codes  . All rights reserved.
      </div>
    </footer>
  );
};