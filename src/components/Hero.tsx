/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowDownRight, Download, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_BRAND } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const heroImageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [imageError, setImageError] = useState(false);

  // Decorative mathematical symbols with subtle floating animation
  const mathSymbols = [
    { symbol: '∫', top: '15%', left: '8%', delay: 0 },
    { symbol: 'π', top: '65%', left: '5%', delay: 1 },
    { symbol: 'Σ', top: '22%', right: '45%', delay: 2 },
    { symbol: 'f(x)', top: '78%', right: '48%', delay: 1.5 },
    { symbol: 'Δ', top: '12%', right: '12%', delay: 0.5 },
    { symbol: 'x²', top: '82%', right: '10%', delay: 2.5 },
    { symbol: 'b²-4ac', top: '48%', right: '4%', delay: 1.2 },
    { symbol: 'dy/dx', top: '42%', left: '46%', delay: 1.8 }
  ];

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#0B0D0C] math-grid-pattern">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[32rem] h-[32rem] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle decorative mathematical glyphs in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {mathSymbols.map((item, idx) => (
          <motion.div
            key={idx}
            style={{ top: item.top, left: item.left, right: item.right }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.03, 0.08, 0.03],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut"
            }}
            className="absolute font-mono text-xl md:text-3xl text-white font-light select-none"
          >
            {item.symbol}
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Left Column: Bold Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Minimal Domain Indicator */}
            <motion.div variants={heroItemVariants} className="inline-flex items-center gap-2.5 mb-6 text-xs font-mono tracking-wider text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>MATHEMATICS EDUCATOR & AI SPECIALIST</span>
            </motion.div>

            {/* Oversized Editorial Headline with Staggered Impact */}
            <motion.h1 
              variants={heroItemVariants} 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-bold font-display tracking-tight leading-[0.95] text-white mb-6"
            >
              <span>MATHEMATICS</span>
              <br />
              <span className="text-neutral-400 font-light">×</span>{' '}
              <span className="text-[#10B981]">AI</span>
              <br />
              <span className="text-neutral-400 font-light">×</span>{' '}
              <span className="text-white">VISUAL LEARNING</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p 
              variants={heroItemVariants} 
              className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed mb-8 font-normal"
            >
              Mathematics educator, visual learning creator, and AI-focused mathematical specialist dedicated to turning abstract pure mathematics into rigorous, intuitive visual pedagogy.
            </motion.p>

            {/* 3 Call to Action Buttons */}
            <motion.div variants={heroItemVariants} className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => handleScrollTo('#projects')}
                className="group flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-neutral-950 bg-[#10B981] hover:bg-[#34D399] rounded-lg transition-all shadow-lg shadow-emerald-950/50 cursor-pointer"
              >
                <span>VIEW MY WORK</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo('#contact')}
                className="flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium text-neutral-200 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>GET IN TOUCH</span>
              </button>

              <button
                onClick={onOpenCvModal}
                className="flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white bg-transparent hover:bg-white/[0.04] border border-neutral-800 hover:border-emerald-700/60 rounded-lg transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-neutral-400" />
                <span>DOWNLOAD CV</span>
              </button>
            </motion.div>

            {/* Verified Quick Proof Badges */}
            <motion.div variants={heroItemVariants} className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4 max-w-xl">
              <div>
                <div className="text-lg sm:text-2xl font-bold font-display text-white">6+ Years</div>
                <div className="text-xs text-neutral-500 font-mono mt-0.5">Teaching & Tutoring</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-bold font-display text-emerald-400">O/A Level</div>
                <div className="text-xs text-neutral-500 font-mono mt-0.5">Cambridge & IGCSE</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-bold font-display text-white">Mindrift & Turing</div>
                <div className="text-xs text-neutral-500 font-mono mt-0.5">AI Math Validation</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Real Memoona Nawaz Portrait Frame */}
          <motion.div 
            variants={heroImageVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative card border */}
              <div className="relative rounded-2xl p-2.5 bg-gradient-to-b from-neutral-800 to-neutral-950 border border-neutral-800 shadow-2xl shadow-black/80">
                
                {/* Photo frame container */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-neutral-900">
                  {!imageError ? (
                    <img
                      src="/assets/images/Memoona-Nawaz.jpeg"
                      alt="Memoona Nawaz — Mathematics Educator & AI Specialist"
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-neutral-900 to-[#0B0D0C]">
                      <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                        <Sparkles className="w-8 h-8" />
                      </div>
                      <h3 className="font-display font-semibold text-lg text-white mb-1">
                        MEMOONA NAWAZ
                      </h3>
                      <p className="text-xs text-neutral-400 font-mono">
                        Mathematics × AI × Visual Learning
                      </p>
                    </div>
                  )}

                  {/* Dark gradient vignette at the bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B0D0C] via-[#0B0D0C]/60 to-transparent pointer-events-none" />

                  {/* Identification Caption */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#0B0D0C]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white tracking-wide">
                        MEMOONA NAWAZ
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono">
                        Pure Mathematics · Visual Pedagogy
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>

                {/* Subtle corner tech details */}
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-emerald-400/60" />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-emerald-400/60" />
              </div>

              {/* Ecosystem Label beneath frame */}
              <div className="mt-3 flex items-center justify-between px-2 text-xs text-neutral-500 font-mono">
                <span>PHANTOM MONAXA</span>
                <span>LAHORE, PAKISTAN</span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
