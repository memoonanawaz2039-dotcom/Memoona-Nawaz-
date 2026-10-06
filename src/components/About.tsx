/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Cpu, Video, CheckCircle2, ArrowRight } from 'lucide-react';
import { PERSONAL_BRAND } from '../data/portfolioData';
import { staggerContainer, fadeInUp, fadeInScale } from './AnimatedSection';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'teaching' | 'ai' | 'visualization'>('teaching');

  const pillars = [
    {
      id: 'teaching',
      title: 'Pedagogy & Problem Solving',
      icon: Compass,
      subtitle: 'Cambridge O/A Level, IGCSE & SAT',
      description:
        'With over six years of rigorous instruction across Beaconhouse, Lahore Grammar School (LGS), and School of Enablers, my teaching centers on diagnostic problem solving. Rather than training students to memorize procedural steps, I guide them to understand the foundational geometry and algebraic architecture behind every theorem.',
      bulletPoints: [
        'Specialized Cambridge A-Level Pure Mathematics 3 (9709 P3) differentiation & integration mastery',
        'Systematic past-paper mark scheme analysis to demystify examiner expectations',
        'Individualized diagnostic workflows addressing algebraic and trigonometric cognitive bottlenecks'
      ]
    },
    {
      id: 'ai',
      title: 'AI Logic & Math Validation',
      icon: Cpu,
      subtitle: 'Mindrift & Turing Company',
      description:
        'As an AI evaluation specialist for Mindrift and Turing Company, I evaluate the reasoning capabilities of frontier Large Language Models. I audit multi-step mathematical derivations, identify subtle hallucinations and symbolic invalidities, and engineer ground-truth benchmark datasets.',
      bulletPoints: [
        'Rigorous step-by-step verification of mathematical trajectories and formal deductive proofs',
        'Curating Olympiad, AMC, and SAT benchmark problems to assess quantitative reasoning',
        'Creating evaluation rubrics that measure algorithmic reasoning accuracy versus superficial fluency'
      ]
    },
    {
      id: 'visualization',
      title: 'Programmatic Math Animation',
      icon: Video,
      subtitle: 'Python & Manim Library',
      description:
        'Founder of the Phantom Monaxa mathematics ecosystem. I develop programmatic animations using Python and the Manim library (created by 3Blue1Brown) to translate calculus, coordinate transformations, and complex functions into vivid geometric motion.',
      bulletPoints: [
        'Scripting Python-driven Manim visualizations for derivatives, limits, and vector calculus',
        'Designing interactive digital modules for high-yield exam topics such as the quadratic discriminant',
        'Producing educational resources and slide decks that bridge the gap between static equations and intuition'
      ]
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0B0D0C] relative border-t border-neutral-900 overflow-hidden">
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
              <span>THE ACADEMIC & TECHNICAL JOURNEY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              ABOUT MEMOONA
            </h2>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-sm font-mono text-neutral-400 max-w-md">
            Dedicated to pure mathematical foundations, visual conceptualization, and AI reasoning verification.
          </motion.div>
        </motion.div>

        {/* Narrative & Focus Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16"
        >
          
          {/* Main Story Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed">
            {PERSONAL_BRAND.bio.map((paragraph, index) => (
              <motion.p key={index} variants={fadeInUp} className="text-neutral-300">
                {paragraph}
              </motion.p>
            ))}

            <motion.div variants={fadeInUp} className="pt-4 flex flex-wrap gap-y-2 gap-x-4 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Cambridge O/A Level Verified</span>
              </span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>IGCSE Mathematics Faculty</span>
              </span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Python & Manim Animator</span>
              </span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>AI Benchmark Specialist</span>
              </span>
            </motion.div>
          </div>

          {/* Quick Highlight Cards */}
          <motion.div 
            variants={fadeInScale}
            className="lg:col-span-5 bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-6 pb-3 border-b border-neutral-800">
              Key Instructional & Research Focus
            </h3>
            <ul className="space-y-4">
              {PERSONAL_BRAND.focusAreas.map((area, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-neutral-200">
                  <span className="text-[#10B981] font-mono text-xs mt-0.5 font-bold">
                    0{idx + 1}.
                  </span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </motion.div>

        {/* Interactive Deep-Dive Tabs (Pedagogy, AI, Visualization) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="mt-12 bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-neutral-800 pb-4">
            <span className="text-xs font-mono text-neutral-500 mr-2 uppercase tracking-wider">
              Focus Domain:
            </span>
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activeTab === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#10B981] text-neutral-950 shadow-md shadow-emerald-950/40'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{pillar.title}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Pillar Content with Animated Transition */}
          <AnimatePresence mode="wait">
            {pillars.map((pillar) => {
              if (pillar.id !== activeTab) return null;
              return (
                <motion.div 
                  key={pillar.id} 
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
                >
                  <div className="md:col-span-5">
                    <div className="text-xs font-mono text-[#10B981] uppercase tracking-wider mb-1">
                      {pillar.subtitle}
                    </div>
                    <h4 className="text-2xl font-display font-bold text-white mb-4">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="md:col-span-7 bg-[#0B0D0C] p-6 rounded-xl border border-neutral-800">
                    <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4">
                      Key Methodologies & Deliverables
                    </div>
                    <div className="space-y-3">
                      {pillar.bulletPoints.map((point, index) => (
                        <div key={index} className="flex items-start gap-3 text-sm text-neutral-300">
                          <ArrowRight className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
