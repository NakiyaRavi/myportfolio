import React from 'react';
import '../styles/experience.css';

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Full-Stack Web Developer & Consultant',
      company: 'Freelance & Client Solutions',
      period: '2025 - Present',
      location: 'India',
      description: 'Designing and deploying modern web applications, SaaS dashboards, and responsive frontends for clients.',
      highlights: [
        'Built full-stack web applications using React 19, ASP.NET Core, and RESTful API integrations.',
        'Engineered responsive e-commerce dashboards with real-time chart analytics and glassmorphism UI.',
        'Optimized frontend speed & bundle sizes, achieving sub-second load times and 98%+ Lighthouse audit scores.'
      ],
      tech: ['React.js', 'ASP.NET Core', 'Node.js', 'Tailwind CSS', 'REST APIs', 'Vite']
    },
    {
      id: 2,
      role: 'Frontend & UI Software Engineer',
      company: 'Web Innovation Projects',
      period: '2024 - 2025',
      location: 'Gujarat, India',
      description: 'Focused on building interactive web interfaces, state management, and reusable component libraries.',
      highlights: [
        'Developed interactive 3D studio showcases and canvas particle animations using Three.js and HTML5 Canvas.',
        'Structured modular React component architectures with reusable hooks and Context API state management.',
        'Implemented cross-browser responsive layouts and automated mobile-first viewport styling.'
      ],
      tech: ['React.js', 'Angular.js', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Framer Motion', 'Git']
    },
    {
      id: 3,
      role: 'Bachelor of Computer Applications (BCA)',
      company: 'Higher Education Journey',
      period: 'Academic Foundation',
      location: 'Gujarat, India',
      description: 'Gained comprehensive foundational knowledge in computer science, software engineering, databases, and algorithms.',
      highlights: [
        'Specialized in Object-Oriented Programming (C#, Java), Relational Database Management Systems (SQL), and Web Technologies.',
        'Completed hands-on capstone projects building web-based database management systems and API servers.'
      ],
      tech: ['C#', 'SQL & Relational DB', 'Data Structures', 'OOP Principles', 'Web Development']
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">CAREER & MILESTONES</span>
          <h2 className="section-title">
            Work <span className="neon-text-purple">Experience</span> & <span className="neon-text-cyan">Journey</span>
          </h2>
          <p className="section-subtitle">
            A timeline of my professional growth, technical roles, key deliverables, and educational background.
          </p>
        </div>

        {/* Timeline List */}
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>
              
              <div className="timeline-content-card glass-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role-title">{exp.role}</h3>
                    <span className="timeline-company">🏢 {exp.company} • 📍 {exp.location}</span>
                  </div>
                  <span className="timeline-period-badge">{exp.period}</span>
                </div>

                <p className="timeline-desc">{exp.description}</p>

                <ul className="timeline-highlights-list">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="timeline-highlight-item">
                      <span className="timeline-highlight-bullet">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="timeline-tech-stack">
                  {exp.tech.map((techItem, techIdx) => (
                    <span key={techIdx} className="timeline-tech-chip">{techItem}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
