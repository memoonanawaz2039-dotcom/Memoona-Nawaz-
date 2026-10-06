/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_BRAND } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#080908] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-neutral-800/80">
          
          <div>
            <div className="font-display text-2xl font-bold tracking-tight text-white mb-1">
              {PERSONAL_BRAND.name}
            </div>
            <div className="text-xs font-mono text-emerald-400">
              {PERSONAL_BRAND.headline}
            </div>
            <div className="text-xs text-neutral-400 mt-2 max-w-md">
              Mathematics educator, visual learning creator, and AI-focused mathematical specialist.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-4">
              <a
                href={`mailto:${PERSONAL_BRAND.email}`}
                className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-emerald-500/40 transition-all"
                aria-label="Email Memoona Nawaz"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_BRAND.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-emerald-500/40 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 fill-current" />
              </a>

              <a
                href={PERSONAL_BRAND.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-emerald-500/40 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 fill-current" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 text-xs font-mono text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            © 2026 {PERSONAL_BRAND.name}. All verified credentials authoritative.
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Phantom Monaxa Ecosystem</span>
            <span>·</span>
            <span>Lahore, Pakistan</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
