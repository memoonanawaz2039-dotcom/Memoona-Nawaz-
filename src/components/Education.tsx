/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { VERIFIED_EDUCATION } from '../data/portfolioData';
import { staggerContainer, fadeInUp, fadeInScale } from './AnimatedSection';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#0B0D0C] relative border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
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
              <span>VERIFIED ACADEMIC CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              EDUCATION
            </h2>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-sm font-mono text-neutral-400 max-w-md">
            Authoritative academic qualifications verified directly from official credentials and transcripts.
          </motion.div>
        </motion.div>

        {/* Vertical Timeline with Staggered Scroll Animation */}
        <div className="relative">
          {/* Vertical central timeline line */}
          <div className="hidden md:block absolute left-[31px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#10B981] via-neutral-800 to-neutral-900" />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {VERIFIED_EDUCATION.map((item, index) => {
              const isUpcoming = item.status === 'Upcoming';
              
              return (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start"
                >
                  
                  {/* Timeline Node Badge */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 shrink-0 z-10 shadow-lg shadow-black group-hover:border-emerald-500/40 transition-colors">
                    <GraduationCap className={`w-7 h-7 ${isUpcoming ? 'text-[#10B981]' : 'text-neutral-400'}`} />
                  </div>

                  {/* Card Content */}
                  <div className="w-full bg-neutral-900/50 hover:bg-neutral-900/80 border border-neutral-800/80 hover:border-neutral-700/80 rounded-2xl p-6 sm:p-8 transition-all group">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-[#10B981] transition-colors">
                            {item.degree}
                          </h3>
                          {isUpcoming && (
                            <span className="text-[11px] font-mono tracking-wider uppercase text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                              Upcoming
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-medium text-neutral-300 mt-1">
                          {item.institution}
                        </div>
                      </div>

                      {/* Year & Score Metric */}
                      <div className="flex flex-col sm:items-end">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
                          <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                          <span>{item.year}</span>
                        </div>
                        <div className="text-xs sm:text-sm font-mono font-semibold text-emerald-400 mt-1">
                          {item.score}
                        </div>
                      </div>
                    </div>

                    {/* Field of Study */}
                    <div className="mb-4 text-xs font-mono text-neutral-400 flex items-center gap-2">
                      <span className="text-neutral-500">Major Field:</span>
                      <span className="text-neutral-300">{item.field}</span>
                    </div>

                    {/* Highlights */}
                    <div className="pt-4 border-t border-neutral-800/60">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-400">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-1.5 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
