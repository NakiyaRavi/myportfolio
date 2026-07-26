import React from 'react';
import '../styles/services.css';

export const Services = () => {
  const whatsappNumber = "918200086009";

  const servicesData = [
    {
      id: 1,
      icon: '⚡',
      title: 'Full-Stack Web Apps',
      tag: 'End-To-End Development',
      description: 'Custom React & ASP.NET Core web application development built with scalable architecture, microservices, and high data security.',
      features: [
        'React 19 & ASP.NET Core Integration',
        'RESTful & GraphQL API Engineering',
        'Database Modeling & SQL Optimization',
        'Production Deployment & CI/CD Pipelines'
      ]
    },
    {
      id: 2,
      icon: '🎨',
      title: 'UI/UX & Glassmorphism Design',
      tag: 'Trending Aesthetics',
      description: 'Designing visually stunning 2026 digital interfaces with vibrant colors, micro-animations, glassmorphic layouts, and responsive components.',
      features: [
        'Pixel-Perfect Responsive Layouts',
        'Framer Motion & Smooth Animations',
        'Dark Theme & Custom Theme Engines',
        'Accessible (WCAG) & Mobile-First UI'
      ]
    },
    {
      id: 3,
      icon: '🚀',
      title: 'Performance & Speed Optimization',
      tag: 'Peak Audit Scores',
      description: 'Audit and speed up existing codebases for 100/100 Lighthouse performance, fast page loads, dynamic code-splitting, and SEO best practices.',
      features: [
        'Lighthouse Performance Audits',
        'Bundle Optimization & Tree Shaking',
        'Asset Compression & Dynamic Lazy Loading',
        'SEO Meta Tags & Schema Structured Data'
      ]
    },
    {
      id: 4,
      icon: '🛠️',
      title: 'API & Backend Services',
      tag: 'Secure & Reliable',
      description: 'Architecting robust server solutions with Node.js, Express, C# ASP.NET Core, authentication protocols, and database integrations.',
      features: [
        'JWT & OAuth Secure Authentication',
        'Third-Party API Integrations (Payments, Mail)',
        'Database Management (SQL & MongoDB)',
        'Server Monitoring & Error Logging'
      ]
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">WHAT I DO</span>
          <h2 className="section-title">
            Specialized <span className="neon-text-purple">Services</span> & <span className="neon-text-cyan">Solutions</span>
          </h2>
          <p className="section-subtitle">
            Delivering high-caliber software engineering, modern frontend interfaces, and scalable web solutions tailored to elevate your business.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card glass-card">
              <div>
                <div className="service-card-header">
                  <div className="service-icon-wrapper">
                    <span>{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="service-title">{service.title}</h3>
                    <span className="service-badge-tag">{service.tag}</span>
                  </div>
                </div>

                <p className="service-description">{service.description}</p>

                <ul className="service-features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature-item">
                      <span className="service-feature-icon">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-footer">
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi Raviraj, I am interested in your "${service.title}" service.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="service-action-btn"
                >
                  Inquire Now <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
