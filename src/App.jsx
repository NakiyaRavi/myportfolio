import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ParticleCanvas } from './Background';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Footer } from './components/Footer';
import './index.css';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import NotFound from './sections/NotFound';

const MainPortfolio = () => (
  <main>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </main>
);

function App() {
  return (
    // basename pass karne se routing '/myportfolio/' base path ko handle kar legi
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