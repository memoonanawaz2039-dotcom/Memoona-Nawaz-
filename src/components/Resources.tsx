/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Download, Bookmark } from 'lucide-react';
import { VERIFIED_DOCUMENTS, DocumentItem } from '../data/portfolioData';
import { staggerContainer, fadeInUp, fadeInScale } from './AnimatedSection';

interface ResourcesProps {
  onOpenDocumentModal: (doc: DocumentItem) => void;
}

export const Resources: React.FC<ResourcesProps> = ({ onOpenDocumentModal }) => {
  const handleDownloadFile = (doc: DocumentItem, e: React.MouseEvent) => {
    e.stopPropagation();
    // Generate text/markdown or trigger file download
    const element = window.document.createElement('a');
    const content = `# ${doc.title}
Author: Memoona Nawaz (Mathematics Educator & AI Specialist)
Category: ${doc.category}
File Format: ${doc.fileType}
Topics: ${doc.topics.join(', ')}

==================================================
DOCUMENT OVERVIEW
==================================================
${doc.contentSummary.overview}

==================================================
KEY FORMULAS & THEOREMS
==================================================
${doc.contentSummary.keyFormulas.join('\n')}

==================================================
SECTIONS & METHODOLOGIES
==================================================
${doc.contentSummary.sections.map(s => `## ${s.heading}\n${s.text}`).join('\n\n')}

${doc.contentSummary.exampleProblem ? `
==================================================
WORKED EXAMPLE PROBLEM
==================================================
Question:
${doc.contentSummary.exampleProblem.question}

Step-by-Step Solution:
${doc.contentSummary.exampleProblem.solution}

Memoona's Speed Hack:
${doc.contentSummary.exampleProblem.hack}
` : ''}

© 2026 Memoona Nawaz. All Rights Reserved.`;

    const file = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = doc.fileName.replace(/\.(pdf|pptx)$/i, '.md');
    window.document.body.appendChild(element);
    element.click();
    window.document.body.removeChild(element);
  };

  return (
    <section id="resources" className="py-24 bg-[#0B0D0C] relative border-t border-neutral-900 overflow-hidden">
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
              <span>MATHEMATICAL CURRICULUM ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              RESOURCES & DOCUMENTS
            </h2>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-sm font-mono text-neutral-400 max-w-md">
            Interactive in-browser study guides, formula sheets, problem sets, and verified lecture decks.
          </motion.div>
        </motion.div>

        {/* Document Cards Grid with Staggered Cascade */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {VERIFIED_DOCUMENTS.map((doc, index) => {
            const isPptx = doc.fileType === 'PPTX';

            return (
              <motion.div
                key={doc.id}
                variants={fadeInScale}
                onClick={() => onOpenDocumentModal(doc)}
                className="bg-neutral-900/40 hover:bg-neutral-900/80 border border-neutral-800 hover:border-emerald-500/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all group cursor-pointer shadow-lg shadow-black/40"
              >
                <div>
                  {/* Top Bar: Number & File Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-display font-bold text-neutral-600 group-hover:text-emerald-400 transition-colors">
                      {doc.number}
                    </span>

                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded font-bold ${
                      isPptx
                        ? 'bg-amber-950/70 text-amber-400 border border-amber-800/40'
                        : 'bg-emerald-950/70 text-emerald-400 border border-emerald-800/40'
                    }`}>
                      {doc.fileType} · {doc.pagesOrSlides}
                    </span>
                  </div>

                  {/* Document Title */}
                  <h3 className="text-lg font-display font-bold text-white mb-2 leading-snug group-hover:text-emerald-300 transition-colors">
                    {doc.title}
                  </h3>

                  {/* Category */}
                  <div className="text-xs font-mono text-emerald-400/90 mb-3">
                    {doc.category}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-neutral-400 leading-relaxed mb-5 line-clamp-3">
                    {doc.description}
                  </p>

                  {/* Visual Preview Container */}
                  <div className="mb-5 p-3.5 rounded-xl bg-neutral-950 border border-neutral-800/80 space-y-2">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                      <Bookmark className="w-3 h-3 text-emerald-400" />
                      <span>Key Curriculum Topics:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {doc.topics.slice(0, 3).map((topic, tIdx) => (
                        <span key={tIdx} className="text-[11px] font-mono text-neutral-300 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                          {topic}
                        </span>
                      ))}
                      {doc.topics.length > 3 && (
                        <span className="text-[11px] font-mono text-neutral-500 px-1 py-0.5">
                          +{doc.topics.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Buttons: VIEW DOCUMENT → and DOWNLOAD → */}
                <div className="pt-4 border-t border-neutral-800/60 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenDocumentModal(doc)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-neutral-200 bg-neutral-800/80 hover:bg-neutral-700/80 rounded-lg transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-emerald-400" />
                    <span>VIEW DOCUMENT →</span>
                  </button>

                  <button
                    onClick={(e) => handleDownloadFile(doc, e)}
                    title={isPptx ? "Download Presentation" : "Download Document"}
                    className="p-2 text-neutral-400 hover:text-white bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
