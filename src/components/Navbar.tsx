/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_BRAND } from '../data/portfolioData';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'RESOURCES', href: '#resources' },
    { label: 'CV', href: '#cv' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B0D0C]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/40' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* Zone 1: Wordmark Brand */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2 text-decoration-none"
        >
          <span className="font-display text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-[#10B981] transition-colors">
            {PERSONAL_BRAND.name}
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono tracking-widest text-emerald-400/80 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
            MATH × AI
          </span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-semibold tracking-wider text-neutral-400 hover:text-white transition-colors relative py-1 hover:border-b-2 hover:border-[#10B981]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCvModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>CV</span>
          </button>
          
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center gap-1 px-4 py-1.5 text-xs font-semibold text-neutral-950 bg-[#10B981] hover:bg-[#34D399] rounded-lg transition-all shadow-sm hover:shadow-emerald-900/30 whitespace-nowrap"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-300 hover:text-white hover:bg-neutral-900/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[61px] bg-[#0B0D0C]/98 backdrop-blur-xl border-b border-neutral-800 p-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-4">
            <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-500 mb-1">
              Navigation Menu
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium tracking-wide text-neutral-300 hover:text-emerald-400 py-1.5 border-b border-neutral-900 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-neutral-600 font-mono">→</span>
              </a>
            ))}
            
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-neutral-200 bg-neutral-900 border border-neutral-700 rounded-lg"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>VIEW CURRICULUM VITAE</span>
              </button>
              
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-2.5 text-xs font-semibold text-neutral-950 bg-[#10B981] hover:bg-[#34D399] rounded-lg"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
