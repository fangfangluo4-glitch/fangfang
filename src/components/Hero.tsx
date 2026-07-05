import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dynamic dot array
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    // Scale particle count based on screen size
    const particleCount = Math.min(60, Math.floor((width * height) / 25000));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35, // slow movement
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 1,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint lines between close particles
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move particle
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce off walls
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw particle dot
        ctx.fillStyle = 'rgba(180, 180, 180, 0.45)';
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connection threshold
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.12; // faint links
            ctx.strokeStyle = `rgba(120, 120, 120, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-[#FAFAFA] px-6 sm:px-12 py-24 select-none"
    >
      {/* 1. Subtle Interactive Particle Constellation Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60"
      />

      {/* 2. Hero Content (Centered Editorial Design) */}
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center relative z-10 text-center">
        
        {/* Monospace Tech Pre-header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="text-[10px] sm:text-xs font-mono font-medium tracking-[0.35em] text-neutral-400 uppercase">
            DESIGNER & CREATIVE TECHNOLOGIST
          </span>
        </motion.div>

        {/* Serif Majestic Titles stacked vertically */}
        <div className="space-y-0.5 sm:space-y-1 mb-8 sm:mb-10">
          <div className="overflow-hidden py-1">
            <motion.h1
              initial={{ y: "100%", rotate: 2 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif italic text-6xl sm:text-[95px] lg:text-[115px] font-medium tracking-tight text-neutral-950 leading-[0.95]"
            >
              Design
            </motion.h1>
          </div>

          <div className="overflow-hidden py-1">
            <motion.h1
              initial={{ y: "100%", rotate: -2 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif italic text-6xl sm:text-[95px] lg:text-[115px] font-medium tracking-tight text-neutral-950 leading-[0.95]"
            >
              Portfolio
            </motion.h1>
          </div>
        </div>

        {/* Narrative Description Block (Centered & Premium) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-neutral-500 text-xs sm:text-[13.5px] leading-relaxed max-w-2xl sm:max-w-3xl text-center text-balance font-sans font-light tracking-wide px-4"
        >
          这里是骆东方的作品集设计网站。主要专注3C数码产品的电商视觉设计，精通C4D、OC/KeyShot渲染及PS后期，擅长结合AIGC技术，将产品融入各种场景。从视觉策划到材质精准还原，高效打磨极具质感与极简美学的卖点图，为产品注入视觉生命力。
        </motion.p>

        {/* Centered Trigger Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.55 }}
          className="mt-10 sm:mt-12"
        >
          <button
            onClick={() => scrollToSection('portfolio')}
            className="group px-7 py-3 bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-[13px] font-sans font-medium rounded-full tracking-wider transition-all duration-300 shadow-xs hover:shadow-md flex items-center gap-1.5 cursor-pointer transform active:scale-98"
          >
            探索作品
            <span className="text-xs transition-transform group-hover:translate-y-0.5">↓</span>
          </button>
        </motion.div>
      </div>

      {/* 3. Bottom Scrolling mouse indicator (Centered) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 cursor-pointer select-none"
        onClick={() => scrollToSection('profile')}
      >
        {/* Mouse Icon Outline */}
        <div className="w-[18px] h-[30px] rounded-full border-1.5 border-neutral-300 flex justify-center p-1.5">
          {/* Internal scroll wheel dot */}
          <motion.div 
            animate={{ 
              y: [0, 8, 0],
              opacity: [1, 0.4, 1]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-1.5 bg-neutral-400 rounded-full"
          />
        </div>
        <span className="text-[9px] font-sans text-neutral-400 tracking-widest uppercase">
          滚动探索
        </span>
      </motion.div>
    </section>
  );
}
