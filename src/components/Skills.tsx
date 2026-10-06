/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Pi, Code2, Film, Brain, BookOpen, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { staggerContainer, fadeInUp, fadeInScale } from './AnimatedSection';

export const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'MATHEMATICS':
        return Pi;
      case 'PROGRAMMING':
        return Code2;
      case 'MATHEMATICAL VISUALIZATION':
        return Film;
      case 'AI & LOGIC VALIDATION':
        return Brain;
      case 'EDUCATION & PEDAGOGY':
      default:
        return BookOpen;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#0B0D0C] relative border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header with Staggered Scroll Animation */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <motion.div variants={fadeInUp}>
            <div className="text-xs font-mono uppercase tracking-widest text-[#10B981] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>CORE COMPETENCIES & TOOLKIT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              SKILLS & EXPERTISE
            </h2>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-sm font-mono text-neutral-400 max-w-md">
            Verified mathematical, algorithmic, and educational competencies grounded in real instruction and AI evaluation.
          </motion.div>
        </motion.div>

        {/* 5 Categorized Cards Grid with Staggered Cascade */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((cat, index) => {
            const Icon = getIcon(cat.category);
            const isFeatured = index === 0 || index === 2; // Mathematics and Visualization

            return (
              <motion.div
                key={index}
                variants={fadeInScale}
                className={`bg-neutral-900/60 hover:bg-neutral-900/90 border rounded-2xl p-6 sm:p-8 transition-all flex flex-col justify-between group ${
                  isFeatured 
                    ? 'border-emerald-900/60 hover:border-emerald-500/50' 
                    : 'border-neutral-800/80 hover:border-neutral-700'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-neutral-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {cat.category}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Skill Items List */}
                <div className="pt-4 border-t border-neutral-800/60">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-3">
                    Verified Competencies
                  </div>
                  <ul className="space-y-2">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
