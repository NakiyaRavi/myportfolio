import React from 'react';
import '../styles/hero.css';


export const Hero = () => {
  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent("Hi! I would like to build a Web Project.");

  return (
    <section className="cyber-hero" id="home">
      <div className="cyber-container">
        
        {/* Left Side: Headline & Status Terminal */}
        <div className="cyber-left">
          <div className="status-terminal">
            <span className="blink-dot"></span>
            <code>SYSTEM.READY // AVAILABLE_FOR_HIRE</code>
          </div>

          <h1 className="cyber-title">
            I Build <span className="neon-text-purple">Next-Gen</span> <br />
            <span className="neon-text-cyan">Web Applications.</span>
          </h1>

          <p className="cyber-subtitle">
           Full Stack Web Developer focused on creating lightning-fast Asp.net and  React applications, robust backend architectures, and seamless digital experiences.
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
              Explore Code 🛠️
            </a>
          </div>

          {/* Tech Stack Pills */}
          <div className="tech-pills-row">
            <span className="tech-pill">React 19</span>
            <span className="tech-pill">Node.js</span>
            <span className="tech-pill">Angular js</span>
            <span className="tech-pill">ASP.NET Core</span>
          </div>
        </div>

        {/* Right Side: Futuristic Cyber Core Circle With Image */}
        <div className="cyber-right">
          <div className="core-container">
            {/* Animated Rotating Orbit Rings */}
            <div className="outer-orbit"></div>
            <div className="inner-orbit"></div>
            
            {/* Center Circle with Developer Image */}
            <div className="core-nucleus">
              <img 
                src="/hero.jpeg" 
                alt="Developer Profile" 
                className="core-avatar-img"
              />
            </div>

            {/* Floating Glass Stat Badges */}
            <div className="stat-card stat-top">
              <span className="stat-num">100%</span>
              <span className="stat-lbl">Performance</span>
            </div>

            <div className="stat-card stat-bottom">
              <span className="stat-num">Fast</span>
              <span className="stat-lbl">Responsive UI</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};