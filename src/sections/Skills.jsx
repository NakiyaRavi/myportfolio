import React, { useState } from 'react';
import '../styles/skills.css';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & Database' },
    { id: 'tools', label: 'Tools & DevOps' },
  ];

  const skillList = [
    // Frontend
    { name: 'React.js', level: '92%', category: 'frontend', icon: '⚛️', desc: 'Hooks, Context API, Redux' },
    { name: 'Angular.js', level: '80%', category: 'frontend', icon: '🅰️', desc: 'Components, Services, RxJS' },
    { name: 'Asp.net Core', level: '75%', category: 'frontend', icon: '🔷', desc: 'MVC, Entity Framework' },
    { name: 'JavaScript (ES6+)', level: '90%', category: 'frontend', icon: '🟨', desc: 'Async/Await, DOM, Modules' },
    { name: 'HTML5 / CSS3', level: '95%', category: 'frontend', icon: '🎨', desc: 'Flexbox, Grid, Animations' },
    { name: 'Tailwind CSS', level: '88%', category: 'frontend', icon: '🌊', desc: 'Utility-first Responsive UI' },
    
    // Backend
    { name: 'REST APIs', level: '80%', category: 'backend', icon: '🔗', desc: 'Design & Consume APIs' },
    { name: 'Asp.net Core', level: '75%', category: 'backend', icon: '🔷', desc: 'MVC, Entity Framework' },
    { name: 'Node.js', level: '82%', category: 'backend', icon: '🟢', desc: 'Server Logic, NPM Ecosystem' },
    { name: 'Express.js', level: '85%', category: 'backend', icon: '🚂', desc: 'RESTful API Architecture' },
    { name: 'SQL', level: '70%', category: 'backend', icon: '🗄️', desc: 'Database Design & Queries' },
    { name: 'MongoDB', level: '78%', category: 'backend', icon: '🍃', desc: 'Database CRUD & Queries' },

    // Tools
    { name: 'CI/CD', level: '70%', category: 'tools', icon: '🔄', desc: 'Automated Build & Deployment' },
    { name: 'Git & GitHub', level: '90%', category: 'tools', icon: '🐙', desc: 'Version Control & Workflows' },
    { name: 'Docker', level: '75%', category: 'tools', icon: '🐳', desc: 'Containerization & Deployment' },
    { name: 'Vite / Webpack', level: '85%', category: 'tools', icon: '⚡', desc: 'Fast Modern Build Tools' },
    { name: 'VS Code', level: '95%', category: 'tools', icon: '💙', desc: 'Extensions & Fast Workflow' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillList 
    : skillList.filter(skill => skill.category === activeCategory);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">MY TECHNICAL STACK</span>
          <h2 className="section-title">
            Skills & <span className="neon-text-purple">Technologies</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Card Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-card glass-card">
              <div className="skill-card-top">
                <div className="skill-info">
                  <span className="skill-icon">{skill.icon}</span>
                  <div>
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-desc">{skill.desc}</span>
                  </div>
                </div>
                <span className="skill-percentage">{skill.level}</span>
              </div>

              {/* Animated Progress Bar */}
              <div className="progress-bar-bg">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};