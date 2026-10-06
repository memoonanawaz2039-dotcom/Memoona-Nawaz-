/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { VERIFIED_EXPERIENCE } from '../data/portfolioData';
import { staggerContainer, fadeInUp } from './AnimatedSection';

export const Experience: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Education' | 'AI & Technology' | 'Consulting'>('All');

  const filteredExperience = filter === 'All' 
    ? VERIFIED_EXPERIENCE 
    : VERIFIED_EXPERIENCE.filter(item => item.type === filter);

  return (
    <section id="experience" className="py-24 bg-[#0B0D0C] relative border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <motion.div variants={fadeInUp}>
            <div className="text-xs font-mono uppercase tracking-widest text-[#10B981] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>TEACHING & TECHNICAL TENURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              EXPERIENCE
            </h2>
          </motion.div>

          {/* Interactive Filter Tabs (Zero-Pill compliant segmented controls) */}
          <motion.div variants={fadeInUp} className="flex items-center p-1 bg-neutral-900 border border-neutral-800 rounded-xl">
            {(['All', 'Education', 'AI & Technology', 'Consulting'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  filter === category
                    ? 'bg-[#10B981] text-neutral-950 shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Experience Timeline with Staggered Cascading Reveal */}
        <motion.div 
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredExperience.map((item, index) => (
              <motion.div
                key={`${item.role}-${item.organization}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="bg-neutral-900/50 hover:bg-neutral-900/80 border border-neutral-800/80 hover:border-neutral-700/80 rounded-2xl p-6 sm:p-8 transition-all group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-5 border-b border-neutral-800/70">
                  
                  {/* Role & Org */}
                  <div>
                    <div className="flex items-center gap-2.5 text-xs font-mono text-neutral-400 mb-1">
                      <span className="text-emerald-400 font-semibold">{item.type}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-neutral-500" />
                        {item.organization}
                      </span>
                      {item.location && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="flex items-center gap-1 text-neutral-500">
                            <MapPin className="w-3.5 h-3.5" />
                            {item.location}
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-[#10B981] transition-colors">
                      {item.role}
                    </h3>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 bg-neutral-950 px-3 py-1.5 rounded-lg border border-neutral-800 self-start lg:self-auto shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="mb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3">
                    Key Scope of Responsibility
                  </div>
                  <ul className="space-y-2.5">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skill Tags - Clean unboxed text with subtle dividers */}
                <div className="pt-4 border-t border-neutral-800/50 flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400">
                  <span className="text-neutral-500 uppercase tracking-wider text-[11px]">Competencies:</span>
                  {item.skills.map((skill, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <span className="text-neutral-300">{skill}</span>
                      {sIdx < item.skills.length - 1 && <span className="text-neutral-600">·</span>}
                    </React.Fragment>
                  ))}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
