/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, CheckCircle2, GraduationCap, Briefcase, Award } from 'lucide-react';
import { PERSONAL_BRAND, VERIFIED_EDUCATION, VERIFIED_EXPERIENCE } from '../data/portfolioData';
import { staggerContainer, fadeInUp, fadeInScale } from './AnimatedSection';

interface CvSectionProps {
  onOpenCvModal: () => void;
}

export const CvSection: React.FC<CvSectionProps> = ({ onOpenCvModal }) => {
  const handleDownloadCv = () => {
    const element = window.document.createElement('a');
    const content = `# CURRICULUM VITAE
# MEMOONA NAWAZ
Mathematics Educator | AI Evaluation Specialist | Visual Learning Creator
Email: ${PERSONAL_BRAND.email}
GitHub: ${PERSONAL_BRAND.github}
Location: ${PERSONAL_BRAND.location}

==================================================
PROFESSIONAL SUMMARY
==================================================
Mathematician and educator with 6+ years of specialized instructional tenure across Cambridge O/A Level (4024, 9709 P1/P3), IGCSE (0580), and Digital SAT mathematics. AI Evaluation Specialist with Mindrift and Turing Company, validating symbolic multi-step reasoning trajectories and engineering quantitative benchmarks for frontier LLMs. Founder of Phantom Monaxa, dedicated to programmatic mathematical animations using Python and Manim.

==================================================
VERIFIED EDUCATION
==================================================
1. M.Phil Mathematics (2026)
   University of Central Punjab | Starting Soon / Admission Pending
   Field: Pure & Applied Mathematics

2. BS Mathematics (ADP) (2022–2024)
   University of the Punjab | CGPA: 2.9 / 4.00
   Field: Pure & Computational Mathematics

3. BSc Double Mathematics & Physics (2020–2022)
   University of the Punjab | Marks: 61.8%
   Field: Double Mathematics & Physics

4. FSc Pre-Engineering
   BISE Gujranwala | Marks: 72.45%

5. SSC Bio Science
   BISE Gujranwala | Marks: 82.17%

==================================================
VERIFIED PROFESSIONAL EXPERIENCE
==================================================
- Mathematics Consultant & Tutor (2020–Present)
  Cambridge O/A Level, IGCSE & Digital SAT Specialist

- AI Logic Optimization & Mathematical Validation — Mindrift
  Multi-step LLM mathematical reasoning verification & logic optimization

- AI Benchmark Developer — Turing Company
  Frontier quantitative AI benchmark engineering and formal proof rubrics

- O/A Level Mathematics Teacher — Beaconhouse
  Cambridge O/A Level Pure Mathematics 3 (9709) faculty

- IGCSE Mathematics Teacher — School of Enablers
  Cambridge IGCSE Mathematics (0580) Core & Extended

- O-Level Mathematics Teacher — LGS (Lahore Grammar School)
  Cambridge O-Level (4024) faculty

==================================================
CORE TECHNICAL TOOLKIT
==================================================
Mathematics: Pure Mathematics, Calculus, Complex Analysis, Linear Algebra, SAT Math
Programming: Python, HTML, CSS, JavaScript, LaTeX
Visualization: Manim (3Blue1Brown Animation Library), Parametric Geometry
AI: Logic Optimization, Mathematical Validation, Benchmark Engineering
Education: Cambridge Examiner Alignment, Diagnostic Assessments, Pacing Strategies

© 2026 Memoona Nawaz. Authoritative & Verified.`;

    const file = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Memoona-Nawaz-CV.md';
    window.document.body.appendChild(element);
    element.click();
    window.document.body.removeChild(element);
  };

  return (
    <section id="cv" className="py-24 bg-[#0B0D0C] relative border-t border-neutral-900 overflow-hidden">
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
              <span>OFFICIAL DOCUMENT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              CURRICULUM VITAE
            </h2>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-sm font-mono text-neutral-400 max-w-md">
            Complete verified record of academic degrees, teaching tenures, technical skills, and research competencies.
          </motion.div>
        </motion.div>

        {/* CV Card & Preview Block with Staggered Animation */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInScale}
          className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Summary & Credentials */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800/50">
                  AUTHORITATIVE DOCUMENT
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  UPDATED 2026
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                MEMOONA NAWAZ — CV OVERVIEW
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                A comprehensive curriculum vitae documenting pure mathematics degrees from University of the Punjab and University of Central Punjab, instructional leadership across Beaconhouse, LGS, and School of Enablers, along with AI evaluation engineering at Mindrift and Turing Company.
              </p>

              {/* Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>M.Phil & BS Mathematics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cambridge O/A Level Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>AI Reasoning Benchmark Developer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Python & Manim Math Creator</span>
                </div>
              </div>

              {/* Actions: OPEN CV and DOWNLOAD CV */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-neutral-800">
                <button
                  onClick={onOpenCvModal}
                  className="flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-lg shadow-emerald-950/40 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>OPEN FULL CV IN-BROWSER</span>
                </button>

                <button
                  onClick={handleDownloadCv}
                  className="flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium text-neutral-200 hover:text-white bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-neutral-400" />
                  <span>DOWNLOAD CV (PDF)</span>
                </button>
              </div>

            </div>

            {/* Right Column: Visual Paper Mockup */}
            <div className="lg:col-span-4 flex justify-center">
              <div 
                onClick={onOpenCvModal}
                className="w-full max-w-xs aspect-[3/4] bg-[#0F1110] border border-neutral-800 hover:border-emerald-500/40 rounded-xl p-5 shadow-2xl flex flex-col justify-between transition-all group cursor-pointer hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-[10px] font-mono text-neutral-500">
                    <span>CURRICULUM VITAE</span>
                    <span className="text-emerald-400">2026</span>
                  </div>

                  <div className="mt-4">
                    <div className="text-sm font-bold text-white font-display">
                      MEMOONA NAWAZ
                    </div>
                    <div className="text-[10px] font-mono text-emerald-400 mt-0.5">
                      Mathematics Educator & AI Specialist
                    </div>
                  </div>

                  {/* Micro timeline preview */}
                  <div className="mt-4 space-y-2 text-[10px] font-mono text-neutral-400">
                    <div className="flex items-center gap-1.5 text-neutral-300">
                      <GraduationCap className="w-3 h-3 text-emerald-400" />
                      <span>UCP / Univ. of the Punjab</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-neutral-300">
                      <Briefcase className="w-3 h-3 text-emerald-400" />
                      <span>Beaconhouse & LGS Faculty</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-neutral-300">
                      <Award className="w-3 h-3 text-emerald-400" />
                      <span>Mindrift & Turing Validation</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-800 text-center text-xs font-mono text-emerald-400 group-hover:text-emerald-300 flex items-center justify-center gap-1">
                  <span>Click to expand CV</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
