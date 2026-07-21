import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/notfound.css'; // Path adjust kar lein agar needed ho

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="notfound-container">
      {/* Background Glowing Orbs for Visual Effect */}
      <div className="glow-orb orb-purple"></div>
      <div className="glow-orb orb-blue"></div>

      <div className="notfound-card glass-card">
        {/* Large 404 Visual Indicator */}
        <div className="error-code-wrapper">
          <h1 className="error-code">4<span className="zero-glow">0</span>4</h1>
        </div>

        <div className="notfound-content">
          <span className="error-badge font-mono">ERROR: PAGE_NOT_FOUND</span>
          <h2 className="notfound-title">Lost in Cyberspace?</h2>
          <p className="notfound-description">
            The page you're looking for doesn't exist, has been removed, or is temporarily unavailable.
          </p>

          {/* Call to Action Buttons */}
          <div className="notfound-actions">
            <button 
              onClick={() => navigate(-1)} 
              className="btn-secondary"
            >
              ⬅️ Go Back
            </button>
            <Link to="/" className="btn-primary">
              🏠 Back to Home
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="quick-links">
            <span>Or try visiting:</span>
            <div className="links-group">
              <Link to="/#projects">Projects</Link>
              <span className="dot">•</span>
              <Link to="/#contact">Contact Me</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;