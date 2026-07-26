import React, { useEffect, useRef, useState } from 'react';

export const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const mouse = {
      x: null,
      y: null,
      radius: 170
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      setCursorPos({ x: event.clientX, y: event.clientY });
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        this.radius = Math.random() * 1.8 + 1.2;
        this.color = Math.random() > 0.4 ? '#8b5cf6' : '#06b6d4';
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.draw();
      }
    }

    const density = Math.min(canvas.width * canvas.height / 11000, 100);
    const particles = Array.from({ length: Math.floor(density) }, () => new Particle());

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            const opacity = (1 - distance / 130) * 0.22;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }

        if (mouse.x && mouse.y) {
          const mDx = particles[a].x - mouse.x;
          const mDy = particles[a].y - mouse.y;
          const mDistance = Math.sqrt(mDx * mDx + mDy * mDy);

          if (mDistance < mouse.radius) {
            const opacity = (1 - mDistance / mouse.radius) * 0.5;
            ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -2,
          pointerEvents: 'none',
          backgroundColor: '#080911'
        }}
      />
      {/* Ambient Aurora Gradient Orbs */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: '-15%',
            left: '-10%',
            width: '60vw',
            height: '60vh',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 80%)',
            filter: 'blur(90px)',
            animation: 'pulseGlow 10s infinite ease-in-out'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            bottom: '-15%',
            right: '-10%',
            width: '65vw',
            height: '65vh',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(236, 72, 153, 0.05) 50%, transparent 80%)',
            filter: 'blur(100px)',
            animation: 'pulseGlow 12s infinite ease-in-out 3s'
          }}
        />
        {/* Interactive Cursor Spotlight */}
        <div 
          style={{
            position: 'absolute',
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
            width: '500px',
            height: '500px',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.05) 40%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            transition: 'left 0.1s ease-out, top 0.1s ease-out',
            pointerEvents: 'none'
          }}
        />
      </div>
    </>
  );
};