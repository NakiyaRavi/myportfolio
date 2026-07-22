import React, { useState } from 'react';
import '../styles/project.css';
import project1 from "../assets/3dui.png";
import project2 from "../assets/ui.png";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'webapp', label: 'Web Applications' },
    { id: 'frontend', label: 'Frontend UI' },
  ];

  const projectList = [
    {
      title: 'E-Commerce SaaS Dashboard',
      description: 'Modern sales dashboard with real-time analytics, dark theme UI, and interactive data visualization charts.',
      category: 'webapp',
      tags: ['React', 'Node.js', 'Tailwind CSS', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      liveUrl: 'https://github.com/NakiyaRavi',
      githubUrl: 'https://github.com/NakiyaRavi'
    },
    {
      title: '3D Interactive Product Studio',
      description: 'Interactive web showcase with smooth canvas animations, glassmorphism layouts, and responsive controls.',
      category: 'frontend',
      tags: ['React', 'Three.js', 'CSS Animations', 'Vite'],
      image: {project1},
      liveUrl: 'https://github.com/NakiyaRavi',
      githubUrl: 'https://github.com/NakiyaRavi'
    },
    {
      title: 'AI Content Generation Platform',
      description: 'Full-stack Web App allowing users to generate, format, and export custom text and digital media assets.',
      category: 'webapp',
      tags: ['React', 'Express API', 'MongoDB', 'REST API'],
      image: {project2},
      liveUrl: 'https://github.com/NakiyaRavi',
      githubUrl: 'https://github.com/NakiyaRavi'
    },
    {
      title: 'Developer Portfolio Theme',
      description: 'High-performance interactive portfolio template with custom particle canvas and neon glass cards.',
      category: 'frontend',
      tags: ['React', 'HTML5 Canvas', 'Custom CSS', 'Responsive'],
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
      liveUrl: 'https://github.com/NakiyaRavi',
      githubUrl: 'https://github.com/NakiyaRavi'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectList
    : projectList.filter(p => p.category === activeFilter);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">PORTFOLIO WORK</span>
          <h2 className="section-title">
            Featured <span className="neon-text-cyan">Projects</span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="projects-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card glass-card">
              
              {/* Image Box with Hover Overlay */}
              <div className="project-image-box">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="image-overlay">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="icon-btn" aria-label="Live Demo">
                    🔗 Live
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub Code">
                    💻 Code
                  </a>
                </div>
              </div>

              {/* Card Details */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                {/* Tech Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="tag-chip">{tag}</span>
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