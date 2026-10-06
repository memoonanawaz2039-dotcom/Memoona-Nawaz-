/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, ExternalLink, ArrowRight, CheckCircle2, Code2, Layers, Award } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const caseStudy = project.caseStudy;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-3xl bg-[#0F1110] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#0B0D0C]/80">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-neutral-400">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Title & Overview */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-base text-neutral-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Structured Case Study Layout */}
          {caseStudy ? (
            <div className="space-y-6">
              
              {/* Context */}
              <div className="bg-[#0B0D0C] p-5 rounded-xl border border-neutral-800/80">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>PROJECT CONTEXT</span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {caseStudy.context}
                </p>
              </div>

              {/* Problem */}
              <div className="bg-[#0B0D0C] p-5 rounded-xl border border-neutral-800/80">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>CORE PROBLEM & CHALLENGE</span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {caseStudy.problem}
                </p>
              </div>

              {/* Approach */}
              <div className="bg-[#0B0D0C] p-5 rounded-xl border border-neutral-800/80">
                <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>APPROACH & METHODOLOGY</span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {caseStudy.approach}
                </p>
              </div>

              {/* Tech Stack & Role Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#0B0D0C] p-5 rounded-xl border border-neutral-800/80">
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-2 flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>TECHNOLOGIES</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {caseStudy.technology.map((tech, tIdx) => (
                      <span key={tIdx} className="text-xs font-mono text-neutral-300 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-[#0B0D0C] p-5 rounded-xl border border-neutral-800/80">
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-2 flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    <span>MY ROLE</span>
                  </div>
                  <p className="text-xs font-mono text-neutral-200">
                    {caseStudy.myRole}
                  </p>
                </div>
              </div>

              {/* Result */}
              <div className="bg-[#0B0D0C] p-5 rounded-xl border border-emerald-900/40 bg-emerald-950/10">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>RESULTS & PEDAGOGICAL IMPACT</span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {caseStudy.result}
                </p>
              </div>

            </div>
          ) : (
            <div className="p-4 bg-neutral-900 rounded-xl text-xs font-mono text-neutral-400">
              Detailed case study documentation available upon request.
            </div>
          )}

          {/* Action Links */}
          <div className="flex items-center justify-between pt-6 border-t border-neutral-800">
            {project.linkUrl ? (
              <a
                href={project.linkUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
              >
                <span>OPEN EXTERNAL REPOSITORY</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <div className="text-xs font-mono text-neutral-500">
                Phantom Monaxa Ecosystem
              </div>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
