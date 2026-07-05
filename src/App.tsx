import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PersonalIntro from './components/PersonalIntro';
import Projects from './components/Projects';
import { ArrowUp, Mail, ExternalLink } from 'lucide-react';
import { profileData } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll handler to target elements with correct navbar offset
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  // Track scroll position to update active navbar link automatically
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220; // Soft threshold
      const sections = ['hero', 'profile', 'portfolio'];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 transition-colors duration-500 selection:bg-neutral-900 selection:text-white relative overflow-hidden">
      
      {/* 1. Header Top Micro Border */}
      <div className="h-[2px] w-full fixed top-0 left-0 right-0 z-55 bg-neutral-900" />

      {/* 2. Floating Navigation Header */}
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* 3. Main Sections */}
      <main>
        {/* Section 1: Fullscreen Hero with video background */}
        <Hero scrollToSection={scrollToSection} />

        {/* Section 2: Personal Introduction (Profile, Bio, Contact, Email) */}
        <PersonalIntro />

        {/* Section 3: Portfolio (3 columns: 建模渲染, AIGC赋能, 详情页) */}
        <Projects />
      </main>

      {/* 4. Minimalist Elegant Footer */}
      <footer className="bg-white text-neutral-500 py-16 px-6 sm:px-12 border-t border-neutral-200/60 font-mono text-xs relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left Block: Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <span className="font-sans font-bold text-base tracking-wider text-neutral-950 uppercase">
              骆东方.<span className="text-neutral-400">DONGFANG</span>
            </span>
            <p className="text-[10px] text-neutral-400 max-w-sm font-sans">
              电商视觉设计 · 3D建模渲染与AIGC创意实践作品集
            </p>
          </div>

          {/* Right Block: Back to Top & Contact Mail */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href={`mailto:${profileData.email}`}
              className="flex items-center gap-2 px-4 py-3 border border-neutral-200 hover:border-neutral-950 hover:text-neutral-950 transition-all text-[10px] font-bold tracking-widest uppercase bg-neutral-50/50 hover:bg-white"
            >
              <Mail size={12} />
              SAY HELLO
            </a>

            <button
              onClick={handleScrollToTop}
              className="px-4 py-3 bg-neutral-950 hover:bg-neutral-800 text-white text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 cursor-pointer transition-colors"
            >
              BACK TO TOP
              <ArrowUp size={12} />
            </button>
          </div>

        </div>

        {/* Copyright notice row */}
        <div className="max-w-7xl mx-auto h-[1px] bg-neutral-100 my-8" />
        
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] uppercase tracking-wider text-neutral-400">
          <p>© 2026 {profileData.name} {profileData.engName}. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-1">
            POWERED BY REACT + VITE + TAILWIND CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
