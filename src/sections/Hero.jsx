import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import heroImg from '../assets/hero.jpeg';
import { Github, Instagram, Linkedin, Whatsapp } from './Icons';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 90, damping: 15 },
  },
};

const words = [".NET API Developer", "React Developer", "SQL Server Expert"];

const useTypingAnimation = (words, typeSpeed = 100, eraseSpeed = 50, delay = 1500) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleTyping = useCallback(() => {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      const nextText = currentWord.substring(0, text.length - 1);
      setText(nextText);
      if (nextText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (text === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }
    }
  }, [isDeleting, text, wordIndex, words, delay]);

  useEffect(() => {
    const timeout = setTimeout(handleTyping, isDeleting ? eraseSpeed : typeSpeed);
    return () => clearTimeout(timeout);
  }, [handleTyping, isDeleting, eraseSpeed, typeSpeed]);

  return text;
};

export default function Hero() {
  const text = useTypingAnimation(words);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-16 overflow-x-hidden bg-cream">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 items-center">
        
        {/* Left Content - Text & CTAs */}
        <motion.div className="text-left z-10" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div
            variants={itemVariants}
            className="inline-block px-4 py-1.5 rounded-full bg-dusty/10 text-dusty-dark font-mono text-sm mb-6 border border-dusty/20 flex items-center gap-2 w-fit"
          >
            <motion.span 
              className="inline-block"
              style={{ transformOrigin: "70% 70%" }}
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
            >
              👋
            </motion.span>
            Welcome to my portfolio
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-dark leading-tight"
          >
            Creative Developer,<br />
            UI/UX Enthusiast <span className="text-dusty font-light">•</span> <br />
            <motion.span 
              className="inline-block bg-gradient-to-r from-dusty via-dusty-dark to-dusty text-transparent bg-clip-text" 
              style={{ backgroundSize: "200% 100%" }}
              animate={{ backgroundPosition: ["0% 0%", "-200% 0%"] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            >
              {text}
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="inline-block ml-1 text-dusty font-light"
            >|
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-dark/80 text-base md:text-lg mb-8 max-w-xl leading-relaxed"
          >
            Passionate about building modern digital products that blend exceptional user experiences with powerful backend architecture. Experienced in React, .NET, REST APIs, SQL Server, and responsive web design, with a focus on performance, scalability, and clean code.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex justify-center items-center gap-2 bg-dusty hover:bg-dusty-dark text-cream font-semibold py-3 px-8 rounded-full transition-all hover:shadow-[0_0_20px_rgba(123,150,184,0.4)] w-full sm:w-auto"
            >
              View Projects
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex justify-center items-center gap-2 bg-transparent border-2 border-dusty/30 hover:border-dusty text-dusty-dark font-semibold py-3 px-8 rounded-full transition-colors w-full sm:w-auto"
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-6"
          >
            <p className="font-mono text-sm text-dark/60">Connect with me</p>
            <div className="flex items-center gap-4">
                <a href="https://github.com/RaviNakiya" target="_blank" rel="noopener noreferrer" className="text-dark/60 hover:text-dark transition-colors">
                    <Github size={22} />
                </a>
                <a href="https://www.linkedin.com/in/nakiya-raviraj-1b2373343" target="_blank" rel="noopener noreferrer" className="text-dark/60 hover:text-dark transition-colors">
                    <Linkedin size={22} />
                </a>
                <a href="https://www.instagram.com/nakiya_ravi_12" target="_blank" rel="noopener noreferrer" className="text-dark/60 hover:text-dark transition-colors">
                    <Instagram size={22} />
                </a>
                <a href="https://wa.me/918200086009" target="_blank" rel="noopener noreferrer" className="text-dark/60 hover:text-dark transition-colors">
                    <Whatsapp size={22} />
                </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Visuals & Floating Elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative mt-8 md:mt-0 w-full flex justify-center"
        >
          {/* Animated soft background glow */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square md:w-96 md:h-96 bg-dusty/30 rounded-full blur-3xl -z-10"
          ></motion.div>
          
          <div className="relative w-[75%] sm:w-[60%] md:w-[80%] lg:w-[400px] aspect-[4/5] mx-auto group cursor-pointer">
            {/* Main Image Frame */}
            <div className="absolute inset-0 bg-cream-dark border-2 border-dusty/20 rounded-3xl md:rounded-[2rem] rotate-3 transition-all duration-500 overflow-hidden shadow-2xl group-hover:rotate-0 group-hover:-translate-y-2 group-hover:shadow-dusty/40">
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent z-10 opacity-60 group-hover:opacity-0 transition-opacity duration-500"></div>
              <img src={heroImg} alt="Profile" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            </div>
            
            {/* Floating Badge 1 - Status */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ y: { repeat: Infinity, duration: 4, ease: "easeInOut" } }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="absolute -top-4 -right-5 sm:-right-8 md:-top-6 md:-right-8 bg-cream border border-dusty/20 p-2.5 md:p-4 rounded-xl shadow-lg flex items-center gap-2 md:gap-3 z-10 cursor-default"
            >
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
              <span className="text-[11px] sm:text-xs md:text-sm font-mono text-dark font-medium whitespace-nowrap">Available for work</span>
            </motion.div>

            {/* Floating Badge 2 - Experience */}
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ y: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-8 md:-bottom-10 md:-left-10 bg-cream border border-dusty/20 p-2.5 md:p-4 rounded-xl shadow-lg z-10 cursor-default"
            >
              <div className="text-dusty font-bold text-base md:text-xl">1+</div>
              <div className="text-[9px] sm:text-[10px] md:text-xs font-mono text-dark/70 uppercase tracking-wider">Years Experience</div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}