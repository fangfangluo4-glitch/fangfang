import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Navbar({ activeSection, scrollToSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '作品', id: 'portfolio' },
    { label: '关于', id: 'profile' },
    { label: '联系', id: 'profile' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  const triggerResume = () => {
    window.location.href = 'mailto:dongfang.luo@design.me?subject=关于简历咨询';
  };

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-neutral-200/40 py-4 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="flex items-baseline gap-1.5 cursor-pointer group"
          id="nav-logo"
        >
          <span className="font-sans font-bold text-[17px] tracking-tight text-neutral-900 group-hover:text-neutral-500 transition-colors">
            骆东方
          </span>
          <span className="font-sans font-light text-[10px] tracking-[0.15em] text-neutral-400 uppercase">
            PORTFOLIO
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-1.5 text-xs font-medium text-neutral-500">
            {navItems.map((item, index) => (
              <React.Fragment key={item.id + '-' + index}>
                {index > 0 && (
                  <span className="text-[7px] text-neutral-300 mx-1 select-none">◆</span>
                )}
                <li>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`px-2 py-1 text-[13px] font-sans transition-all cursor-pointer ${
                      activeSection === item.id
                        ? 'text-neutral-950 font-semibold'
                        : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full border border-neutral-200 bg-white/95 text-neutral-800 hover:bg-neutral-50 cursor-pointer"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-200/80 shadow-xl px-6 py-8 flex flex-col gap-6 z-40"
          id="mobile-nav-drawer"
        >
          <ul className="flex flex-col gap-3">
            {navItems.map((item, index) => (
              <li key={item.id + '-mob-' + index}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-3 px-4 rounded-md text-xs font-sans font-bold uppercase tracking-widest transition-colors cursor-pointer flex items-center justify-between ${
                    activeSection === item.id
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs">→</span>
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
