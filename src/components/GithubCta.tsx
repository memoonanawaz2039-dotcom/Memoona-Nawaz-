/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Terminal } from 'lucide-react';
import { PERSONAL_BRAND } from '../data/portfolioData';
import { staggerContainer, fadeInUp, fadeInScale } from './AnimatedSection';

export const GithubCta: React.FC = () => {
  return (
    <section className="py-20 bg-[#0B0D0C] relative border-t border-neutral-900 overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[15rem] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={staggerContainer}
        className="max-w-5xl mx-auto px-6 md:px-10 relative z-10 text-center"
      >
        
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-mono text-emerald-400 mb-6">
          <Terminal className="w-3.5 h-3.5" />
          <span>OPEN-SOURCE & SCRIPTING</span>
        </motion.div>

        <motion.h2 variants={fadeInUp} className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
          BUILDING WITH CODE
        </motion.h2>

        <motion.p variants={fadeInUp} className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed mb-8">
          Explore my mathematics, visualization, and technical projects.
        </motion.p>

        {/* Real GitHub Button */}
        <motion.div variants={fadeInScale} className="flex justify-center">
          <a
            href={PERSONAL_BRAND.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-xl shadow-emerald-950/40 cursor-pointer"
          >
            <Github className="w-4 h-4 fill-current" />
            <span>VIEW GITHUB →</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Small repo meta note */}
        <motion.div variants={fadeInUp} className="mt-6 text-xs font-mono text-neutral-500">
          github.com/memoonanawaz · Python & Manim Animations · Math Resources
        </motion.div>

      </motion.div>
    </section>
  );
};
