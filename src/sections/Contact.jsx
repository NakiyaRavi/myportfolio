import React, { useState } from 'react';
import '../styles/contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, message: '' });

  const whatsappNumber = "918200086009";
  const userEmail = "nakiyaraviraj19@gmail.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, message: 'Sending...' });

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${userEmail}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New Portfolio Message from ${formData.name}!`
        })
      });

      if (response.ok) {
        setStatus({
          loading: false,
          success: true,
          message: '🚀 Message sent successfully! I will contact you soon.'
        });
        setFormData({ name: '', email: '', message: '' }); // Form reset
      } else {
        setStatus({
          loading: false,
          success: false,
          message: '❌ Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        message: '❌ Something went wrong. Please check your connection.'
      });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">GET IN TOUCH</span>
          <h2 className="section-title">
            Let's Build Something <span className="neon-text-purple">Great</span>
          </h2>
        </div>

        {/* Contact Equal Grid Layout */}
        <div className="contact-grid">
          
          {/* Left Column: Equal Box Height Cards */}
          <div className="contact-left">
            <div className="contact-card glass-card">
              <div className="icon-box location-icon">📍</div>
              <div>
                <span className="info-label">Location</span>
                <p className="info-value">Surendranagar, Gujarat, India</p>
              </div>
            </div>

            <div className="contact-card glass-card">
              <div className="icon-box phone-icon">📞</div>
              <div>
                <span className="info-label">Call / WhatsApp</span>
                <p className="info-value">
                  <a href="tel:+918200086009">+91 82000 86009</a>
                </p>
              </div>
            </div>

            <div className="contact-card glass-card">
              <div className="icon-box mail-icon">✉️</div>
              <div>
                <span className="info-label">Email Support</span>
                <p className="info-value">
                  <a href={`mailto:${userEmail}`}>{userEmail}</a>
                </p>
              </div>
            </div>

            <div className="whatsapp-cta-box glass-card">
              <h4>Prefer instant chat?</h4>
              <p>Direct message on WhatsApp for fast response.</p>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I would like to discuss a project.")}`} 
                target="_blank" 
                rel="noreferrer" 
                className="whatsapp-btn"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: AJAX Direct Form */}
          <div className="contact-right glass-card">
            <h3 className="form-title">Send Me A Message</h3>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details / Message</label>
                <textarea 
                  id="message"
                  name="message" 
                  rows="4" 
                  placeholder="Tell me about your project requirement..." 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={status.loading}>
                {status.loading ? "Sending..." : "Send Message 🚀"}
              </button>

              {/* In-Page Success/Error Message Display */}
              {status.message && (
                <p style={{
                  marginTop: '1rem',
                  padding: '10px',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: status.success ? '#4ade80' : '#f87171',
                  background: status.success ? 'rgba(74, 222, 128, 0.1)' : 'rgba(248, 113, 113, 0.1)',
                  border: `1px solid ${status.success ? '#4ade80' : '#f87171'}`
                }}>
                  {status.message}
                </p>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};