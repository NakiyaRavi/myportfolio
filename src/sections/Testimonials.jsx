import React from 'react';
import '../styles/testimonials.css';

export const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      quote: "Raviraj delivered an outstanding SaaS dashboard for our store analytics. The dark UI glassmorphism design is breathtaking and page response times are lightning-fast!",
      author: "Alex Morgan",
      role: "Product Manager, TechFlow",
      initials: "AM",
      rating: 5
    },
    {
      id: 2,
      quote: "Exceptional code quality and attention to design detail! Raviraj seamlessly integrated our ASP.NET backend with modern React components cleanly and ahead of schedule.",
      author: "David Chen",
      role: "CTO, Digital Venture Labs",
      initials: "DC",
      rating: 5
    },
    {
      id: 3,
      quote: "Working with Raviraj was smooth from start to finish. He turned our initial visual concepts into an interactive, 60fps web experience with incredible responsiveness.",
      author: "Sarah Jenkins",
      role: "Lead UI/UX Architect",
      initials: "SJ",
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">ENDORSEMENTS</span>
          <h2 className="section-title">
            Client & Peer <span className="neon-text-purple">Recommendations</span>
          </h2>
          <p className="section-subtitle">
            What clients and collaborators say about my technical expertise, design aesthetics, and delivery speed.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {reviews.map((rev) => (
            <div key={rev.id} className="testimonial-card glass-card">
              <div>
                <div className="testimonial-stars">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="testimonial-quote">"{rev.quote}"</p>
              </div>

              <div className="testimonial-author-wrapper">
                <div className="testimonial-avatar">
                  {rev.initials}
                </div>
                <div>
                  <h4 className="testimonial-author-name">{rev.author}</h4>
                  <p className="testimonial-author-role">{rev.role}</p>
                </div>
                <span className="testimonial-verified-badge">✓ Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
