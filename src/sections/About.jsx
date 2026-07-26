import React, { useState } from 'react';
import '../styles/about.css';

export const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const stats = [
    { label: 'Years Experience', value: '1+' },
    { label: 'Projects Completed', value: '8+' },
    { label: 'Client Satisfaction', value: '100%' },
    { label: 'Lighthouse Speed Score', value: '98%' },
  ];

  const highlights = [
    {
      icon: '⚡',
      title: 'High Performance & Speed',
      desc: 'Optimized DOM rendering, lazy loading, and smooth 60fps animations.'
    },
    {
      icon: '📱',
      title: 'Responsive & Mobile First',
      desc: 'Flawless UI experiences tailored for all screen sizes from mobile to 4K desktop.'
    },
    {
      icon: '🛡️',
      title: 'Clean Architecture',
      desc: 'Modular, maintainable, self-documenting code built for enterprise scale.'
    },
    {
      icon: '🔌',
      title: 'Robust API Integrations',
      desc: 'Seamless data layer connecting React frontends with ASP.NET Core & Node REST APIs.'
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">ABOUT MY JOURNEY</span>
          <h2 className="section-title">
            Architecting <span className="neon-text-purple">Digital</span> <span className="neon-text-cyan">Solutions</span>
          </h2>
          <p className="section-subtitle">
            Passionate Full-Stack Developer bridging aesthetic design with robust backend engineering.
          </p>
        </div>

        {/* Story Bento Card */}
        <div className="about-main-card glass-card">
          <div className="story-header">
            <h3 className="story-title">
              Full-Stack Software Engineer Specializing in React 19 & ASP.NET Core
            </h3>
            <span className="location-tag">📍 Surendranagar, Gujarat, India</span>
          </div>

          <div className="story-body">
            <p>
              I am <strong>Raviraj Nakiya</strong>, a dedicated Web Developer specialized in building scalable, modern web applications and custom software solutions. My core stack includes <strong>React.js, ASP.NET Core, JavaScript (ES6+), Node.js, Express, and Tailwind CSS</strong>.
            </p>
            <p>
              Whether it’s designing sleek glassmorphic user interfaces, engineering high-speed RESTful APIs, or optimizing existing applications for peak performance and SEO, I deliver solutions that merge visual excellence with rock-solid security.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="stats-row">
            {stats.map((item, index) => (
              <div key={index} className="stat-card-item">
                <span className="stat-val">{item.value}</span>
                <span className="stat-lbl">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Tabs Section */}
        <div className="about-tabs-container glass-card">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              Tech Ecosystem
            </button>
            <button 
              className={`tab-btn ${activeTab === 'services' ? 'active' : ''}`}
              onClick={() => setActiveTab('services')}
            >
              Core Competencies
            </button>
            <button 
              className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              Engineering Standards
            </button>
          </div>

          <div className="tab-content">
            {/* Tab 1: Tech Ecosystem */}
            {activeTab === 'skills' && (
              <div className="tab-pane active-pane">
                <div className="skills-grid">
                  <div className="skill-category">
                    <h5>Frontend Ecosystem</h5>
                    <div className="chips-wrapper">
                      <span>React.js</span>
                      <span>Angular.js</span>
                      <span>JavaScript (ES6+)</span>
                      <span>HTML5 & CSS3</span>
                      <span>Tailwind CSS</span>
                      <span>Framer Motion</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h5>Backend & Database</h5>
                    <div className="chips-wrapper">
                      <span>ASP.NET Core</span>
                      <span>Node.js</span>
                      <span>Express.js</span>
                      <span>REST APIs</span>
                      <span>SQL / C#</span>
                      <span>MongoDB</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Core Competencies */}
            {activeTab === 'services' && (
              <div className="tab-pane active-pane">
                <div className="services-list-grid">
                  <div className="service-item">
                    <h4>💻 Full-Stack App Development</h4>
                    <p>Building high-performing, end-to-end web applications with React frontends and ASP.NET backends.</p>
                  </div>
                  <div className="service-item">
                    <h4>🎨 Trending Glassmorphic UI</h4>
                    <p>Designing micro-interactive components, sleek animations, and dark mode interfaces.</p>
                  </div>
                  <div className="service-item">
                    <h4>🚀 Performance Tuning & SEO</h4>
                    <p>Ensuring sub-second load times, WCAG accessibility, and high search engine visibility.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Engineering Standards */}
            {activeTab === 'experience' && (
              <div className="tab-pane active-pane">
                <div className="workflow-steps">
                  <div className="step-card">
                    <span className="step-num">01</span>
                    <div>
                      <h5>Requirements & Architecture</h5>
                      <p>Analyzing project needs, data flows, and defining clean component boundaries.</p>
                    </div>
                  </div>
                  <div className="step-card">
                    <span className="step-num">02</span>
                    <div>
                      <h5>Agile Development</h5>
                      <p>Writing clean, typed, modular code with git version control and unit testing.</p>
                    </div>
                  </div>
                  <div className="step-card">
                    <span className="step-num">03</span>
                    <div>
                      <h5>Deployment & Optimization</h5>
                      <p>Automated build processes, Lighthouse testing, and deployment to production hosting.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card glass-card">
              <span className="highlight-icon">{item.icon}</span>
              <h4 className="highlight-title">{item.title}</h4>
              <p className="highlight-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};