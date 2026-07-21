import React, { useState } from 'react';
import '../styles/about.css'

export const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const stats = [
    { label: 'Years Experience', value: '1' },
    { label: 'Projects Completed', value: '5+' },
    { label: 'Client Satisfaction', value: '100%' },
    { label: 'Code Quality Score', value: '98%' },
  ];

  const highlights = [
    {
      icon: '⚡',
      title: 'High Performance',
      desc: 'Optimized rendering, fast loading speeds, and smooth 60fps animations.'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      desc: 'Mobile-first approach ensuring flawless UI across all device screen sizes.'
    },
    {
      icon: '🛡️',
      title: 'Clean & Scalable Code',
      desc: 'Maintainable architecture structured for effortless long-term scalability.'
    },
    {
      icon: '🔌',
      title: 'API & Backend Integration',
      desc: 'Seamless data flow connecting modern React frontends with robust REST/Node APIs.'
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
        </div>

        {/* Top Story Card */}
        <div className="about-main-card glass-card">
          <div className="story-header">
            <h3 className="story-title">
              Full-Stack Web Developer with a Passion for Interactive Design
            </h3>
            <span className="location-tag">📍 Surendranagar, Gujarat, India</span>
          </div>

          <div className="story-body">
            <p>
              I am a dedicated Web Developer specialized in crafting high-speed, modern web applications and custom software solutions. My expertise spans across frontend technologies like <strong>React js,Angular js, JavaScript (ES6+), and Advanced CSS3</strong>, as well as backend integrations using <strong>Asp.net core and RESTful APIs</strong>.
            </p>
            <p>
              Whether it’s building complex web platforms from scratch, designing interactive glassmorphic UIs, or optimizing existing codebases for peak SEO and performance, I deliver software that combines elegant visual aesthetics with rock-solid engineering.
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
              Services Offered
            </button>
            <button 
              className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              Workflow & Standards
            </button>
          </div>

          <div className="tab-content">
            {/* Tab 1: Tech Ecosystem */}
            {activeTab === 'skills' && (
              <div className="tab-pane active-pane">
                <div className="skills-grid">
                  <div className="skill-category">
                    <h5>Frontend Development</h5>
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
                    <h5>Backend & Tools</h5>
                    <div className="chips-wrapper">
                      <span>Asp.net Core</span>
                      <span>Node.js</span>
                      <span>Express.js</span>
                      <span>REST APIs</span>
                      <span>Git & GitHub</span>
                      <span>VS Code / Vite</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Services Offered */}
            {activeTab === 'services' && (
              <div className="tab-pane active-pane">
                <div className="services-list-grid">
                  <div className="service-item">
                    <h4>💻 Full-Stack Web Development</h4>
                    <p>End-to-end development of custom websites and scalable web applications tailored to business needs.</p>
                  </div>
                  <div className="service-item">
                    <h4>🎨 Interactive UI/UX Design</h4>
                    <p>Creating responsive layouts, glassmorphism designs, and smooth animated user experiences.</p>
                  </div>
                  <div className="service-item">
                    <h4>🚀 Performance & SEO Optimization</h4>
                    <p>Speeding up slow load times, fixing responsive bugs, and structuring pages for search engines.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Workflow & Standards */}
            {activeTab === 'experience' && (
              <div className="tab-pane active-pane">
                <div className="workflow-steps">
                  <div className="step-card">
                    <span className="step-num">01</span>
                    <div>
                      <h5>Discovery & Planning</h5>
                      <p>Understanding project requirements, user journeys, and technical scope before writing code.</p>
                    </div>
                  </div>
                  <div className="step-card">
                    <span className="step-num">02</span>
                    <div>
                      <h5>Clean Development</h5>
                      <p>Writing modular, self-documenting code with modern frameworks and real-time testing.</p>
                    </div>
                  </div>
                  <div className="step-card">
                    <span className="step-num">03</span>
                    <div>
                      <h5>Optimization & Deployment</h5>
                      <p>Rigorously testing performance, cross-browser compatibility, and deploying to production.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Core Value Highlights Grid */}
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