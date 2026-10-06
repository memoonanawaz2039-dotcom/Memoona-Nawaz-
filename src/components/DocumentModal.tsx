/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, ChevronRight, Bookmark, BookOpen, Share2, Printer } from 'lucide-react';
import { DocumentItem } from '../data/portfolioData';

interface DocumentModalProps {
  document: DocumentItem | null;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({ document: doc, onClose }) => {
  const [activeTab, setActiveTab] = useState<'study' | 'formulas' | 'problems'>('study');
  const [copied, setCopied] = useState(false);

  if (!doc) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl bg-[#0F1110] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#0B0D0C]/90">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-800/40">
              DOC {doc.number}
            </span>
            <span className="text-xs font-mono text-neutral-400">
              {doc.category}
            </span>
            <span className={`text-[11px] font-mono px-2 py-0.5 rounded font-bold ${
              doc.fileType === 'PPTX'
                ? 'bg-amber-950/60 text-amber-400 border border-amber-800/40'
                : 'bg-blue-950/60 text-blue-400 border border-blue-800/40'
            }`}>
              {doc.fileType}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              title="Copy share link"
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors text-xs font-mono flex items-center gap-1"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">{copied ? 'Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Close document viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-4 bg-[#0F1110] border-b border-neutral-800 text-xs font-mono">
          <button
            onClick={() => setActiveTab('study')}
            className={`pb-3 border-b-2 font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === 'study' 
                ? 'border-emerald-400 text-emerald-400' 
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Document Notes & Study Guide</span>
          </button>

          <button
            onClick={() => setActiveTab('formulas')}
            className={`pb-3 border-b-2 font-semibold transition-colors flex items-center gap-1.5 ${
              activeTab === 'formulas' 
                ? 'border-emerald-400 text-emerald-400' 
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>Formula Sheet & Theorems</span>
          </button>

          {doc.contentSummary.exampleProblem && (
            <button
              onClick={() => setActiveTab('problems')}
              className={`pb-3 border-b-2 font-semibold transition-colors flex items-center gap-1.5 ${
                activeTab === 'problems' 
                  ? 'border-emerald-400 text-emerald-400' 
                  : 'border-transparent text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Exam Problem & Speed Hack</span>
            </button>
          )}
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Header & Title */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
              {doc.title}
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {doc.description}
            </p>

            {/* Topic Chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {doc.topics.map((topic, idx) => (
                <span key={idx} className="text-xs font-mono text-neutral-300 bg-neutral-900 px-2.5 py-1 rounded border border-neutral-800">
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* TAB 1: Study Guide & Document Content */}
          {activeTab === 'study' && (
            <div className="space-y-6">
              {/* Overview Card */}
              <div className="bg-[#0B0D0C] p-5 rounded-xl border border-neutral-800">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2">
                  Pedagogical Overview
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {doc.contentSummary.overview}
                </p>
              </div>

              {/* Sections Breakdown */}
              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                  Curriculum Modules & Structure
                </div>
                {doc.contentSummary.sections.map((section, sIdx) => (
                  <div key={sIdx} className="bg-[#0B0D0C] p-5 rounded-xl border border-neutral-800/80">
                    <h5 className="text-sm font-display font-bold text-white mb-2 flex items-center gap-2">
                      <span className="text-emerald-400 font-mono text-xs">§{sIdx + 1}</span>
                      <span>{section.heading}</span>
                    </h5>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* PPTX Notice if applicable */}
              {doc.fileType === 'PPTX' && (
                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs text-amber-300 leading-relaxed">
                  <strong>Slide Deck Notice:</strong> Per web standards, PowerPoint (.pptx) presentation files are downloaded directly rather than embedded in-browser. The full slide notes and theorem guides are rendered above. Click &ldquo;Download Presentation&rdquo; below for the native .pptx file.
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Formula Sheet & Key Equations */}
          {activeTab === 'formulas' && (
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                High-Yield Formula Reference & Cheat Sheet
              </div>
              <div className="bg-[#0B0D0C] p-5 rounded-xl border border-neutral-800 space-y-3 font-mono">
                {doc.contentSummary.keyFormulas.map((formula, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 p-3 bg-neutral-900/60 rounded-lg border border-neutral-800/60 text-xs sm:text-sm text-emerald-300">
                    <span className="text-neutral-500 font-bold select-none">{fIdx + 1}.</span>
                    <span className="font-semibold">{formula}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Example Problem & Speed Hack */}
          {activeTab === 'problems' && doc.contentSummary.exampleProblem && (
            <div className="space-y-6">
              <div className="bg-[#0B0D0C] p-5 rounded-xl border border-neutral-800">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-2">
                  Sample Exam Question
                </div>
                <p className="text-sm font-mono text-white leading-relaxed p-3 bg-neutral-900 rounded-lg border border-neutral-800">
                  {doc.contentSummary.exampleProblem.question}
                </p>
              </div>

              <div className="bg-[#0B0D0C] p-5 rounded-xl border border-neutral-800">
                <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-2">
                  Standard Analytical Solution
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-mono">
                  {doc.contentSummary.exampleProblem.solution}
                </p>
              </div>

              <div className="bg-emerald-950/20 p-5 rounded-xl border border-emerald-800/60">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2">
                  Memoona&apos;s Speed Shortcut (Under 10 Seconds)
                </div>
                <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed font-mono">
                  {doc.contentSummary.exampleProblem.hack}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-neutral-800 bg-[#0B0D0C]/90">
          <div className="text-xs font-mono text-neutral-400">
            Document: <span className="text-white">{doc.fileName}</span> ({doc.fileType})
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-lg shadow-emerald-950/40"
            >
              <Download className="w-4 h-4" />
              <span>
                {doc.fileType === 'PPTX' ? 'DOWNLOAD PRESENTATION (.PPTX)' : 'DOWNLOAD DOCUMENT (.PDF)'}
              </span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-medium text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors"
            >
              Close Viewer
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
