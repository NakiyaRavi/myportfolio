import React from 'react';
import '../styles/hero.css';
import heroImage from "../assets/hero.jpeg";

export const Hero = () => {
  const whatsappNumber = "918200086009";
  const whatsappMessage = encodeURIComponent("Hi Raviraj! I would like to discuss a web project.");

  return (
    <section className="cyber-hero" id="home">
      <div className="cyber-container">
        
        {/* Left Side: Headline & Status Terminal */}
        <div className="cyber-left">
          <div className="status-terminal">
            <span className="blink-dot"></span>
            <code>SYSTEM.ONLINE // AVAILABLE FOR HIRE 🚀</code>
          </div>

          <h1 className="cyber-title">
            Hi, I'm <span className="neon-text-purple">Raviraj Nakiya</span> <br />
            <span className="neon-text-cyan">Full-Stack Engineer</span>
          </h1>

          <p className="cyber-subtitle">
            Crafting high-speed, modern React & ASP.NET applications, glassmorphic UI designs, robust APIs, and scalable digital experiences.
          </p>

          {/* Action Row */}
          <div className="cyber-actions">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} 
              target="_blank" 
              rel="noreferrer" 
              className="glow-btn-primary"
            >
              Start Project ⚡
            </a>
            <a href="#projects" className="glow-btn-outline">
              Explore Projects 🛠️
            </a>
          </div>

          {/* Tech Stack Pills */}
          <div className="tech-pills-row">
            <span className="tech-pill">React 19</span>
            <span className="tech-pill">ASP.NET Core</span>
            <span className="tech-pill">Node.js</span>
            <span className="tech-pill">Angular.js</span>
            <span className="tech-pill">Tailwind CSS</span>
          </div>
        </div>

        {/* Right Side: Futuristic Cyber Core Circle With Image */}
        <div className="cyber-right">
          <div className="core-container">
            {/* Animated Orbit Rings */}
            <div className="outer-orbit"></div>
            <div className="inner-orbit"></div>
            
            {/* Core Nucleus Avatar */}
            <div className="core-nucleus">
              <img 
                src={heroImage} 
                alt="Raviraj Nakiya" 
                className="core-avatar-img"
              />
            </div>

            {/* Floating Badges */}
            <div className="stat-card stat-top">
              <span className="stat-num">98%</span>
              <span className="stat-lbl">Speed Score</span>
            </div>

            <div className="stat-card stat-bottom">
              <span className="stat-num">Full-Stack</span>
              <span className="stat-lbl">React & ASP.NET</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};