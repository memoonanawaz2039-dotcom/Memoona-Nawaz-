/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Play, BookOpen } from 'lucide-react';
import { REAL_PROJECTS, ProjectItem } from '../data/portfolioData';
import { InteractiveDiscriminant } from './InteractiveDiscriminant';
import { staggerContainer, fadeInUp, fadeInScale } from './AnimatedSection';

interface ProjectsProps {
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenCaseStudy }) => {
  const [showInteractiveDemo, setShowInteractiveDemo] = useState(false);

  return (
    <section id="projects" className="py-24 bg-[#0B0D0C] relative border-t border-neutral-900 overflow-hidden">
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
              <span>PROJECT-FIRST & LINK-FIRST PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              FEATURED PROJECTS
            </h2>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-sm font-mono text-neutral-400 max-w-md">
            Verified mathematics, programmatic visualization, and interactive educational systems.
          </motion.div>
        </motion.div>

        {/* Project Cards (Large Editorial Cards) with Staggered Scroll Reveal */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="space-y-12"
        >
          {REAL_PROJECTS.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="bg-neutral-900/40 hover:bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700/80 rounded-3xl p-6 sm:p-10 transition-all group overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Number, Title, Metadata, Actions */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    
                    <div>
                      {/* Project Number & Category */}
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-700 group-hover:text-[#10B981] transition-colors">
                          {project.number}
                        </span>
                        <span className="w-8 h-[1px] bg-neutral-800" />
                        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                          {project.category}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-4xl font-display font-bold text-white mb-4 tracking-tight group-hover:text-[#34D399] transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Role & Technologies */}
                      <div className="space-y-2 mb-8 text-xs font-mono">
                        <div className="flex items-center gap-2 text-neutral-400">
                          <span className="text-neutral-500 uppercase tracking-wider">Role:</span>
                          <span className="text-white font-semibold">{project.role}</span>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-2 text-neutral-400 pt-1">
                          <span className="text-neutral-500 uppercase tracking-wider">Technologies:</span>
                          {project.technologies.map((tech, tIdx) => (
                            <span key={tIdx} className="text-neutral-300 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons: Strictly Verified Links Only */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-neutral-800/80">
                      {project.id === 'phantom-math-functions' && project.linkUrl && (
                        <a
                          href={project.linkUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-[#10B981] hover:bg-[#34D399] rounded-lg transition-colors shadow-md shadow-emerald-950/40"
                        >
                          <Github className="w-4 h-4" />
                          <span>GITHUB REPOSITORY →</span>
                        </a>
                      )}

                      {project.id === 'digital-sat-discriminant' && (
                        <button
                          onClick={() => setShowInteractiveDemo(!showInteractiveDemo)}
                          className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-[#10B981] hover:bg-[#34D399] rounded-lg transition-colors shadow-md shadow-emerald-950/40 cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>{showInteractiveDemo ? 'HIDE SIMULATOR' : 'OPEN PROJECT (LIVE DEMO) →'}</span>
                        </button>
                      )}

                      {project.caseStudy && (
                        <button
                          onClick={() => onOpenCaseStudy(project)}
                          className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-colors cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                          <span>VIEW CASE STUDY</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-emerald-400" />
                        </button>
                      )}
                    </div>

                  </div>

                  {/* Right Column: Visual Frame */}
                  <div className="lg:col-span-5">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-xl group-hover:border-emerald-500/30 transition-all">
                      <img
                        src={project.image}
                        alt={`${project.title} Visual Representation`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C]/80 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                        <span className="bg-[#0B0D0C]/90 px-2 py-0.5 rounded border border-white/10 text-white">
                          {project.title}
                        </span>
                        <span className="text-emerald-400">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Embedded Live Interactive Module for Project 03 */}
                <AnimatePresence>
                  {project.id === 'digital-sat-discriminant' && showInteractiveDemo && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-8 pt-8 border-t border-neutral-800 overflow-hidden"
                    >
                      <InteractiveDiscriminant />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
