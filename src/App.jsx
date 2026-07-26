import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ParticleCanvas } from './Background';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import NotFound from './sections/NotFound';
import './index.css';

const MainPortfolio = () => (
  <main>
    <Hero />
    <About />
    <Services />
    <Experience />
    <Skills />
    <Projects />
    <Testimonials />
    <Contact />
  </main>
);

function App() {
  return (
    <BrowserRouter basename="/myportfolio">
      <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
        <ParticleCanvas />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;