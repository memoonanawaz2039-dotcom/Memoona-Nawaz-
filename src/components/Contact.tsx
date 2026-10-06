/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle, Clock } from 'lucide-react';
import { PERSONAL_BRAND } from '../data/portfolioData';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from './AnimatedSection';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Trigger user's email client
    const mailtoUrl = `mailto:${PERSONAL_BRAND.email}?subject=${encodeURIComponent(
      subject || `Portfolio Inquiry from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0D0C] relative border-t border-neutral-900 overflow-hidden">
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
              <span>COMMUNICATION & INQUIRIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              LET&apos;S CONNECT
            </h2>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-sm font-mono text-neutral-400 max-w-md">
            For academic consulting, Cambridge O/A Level & IGCSE tutoring, AI evaluation programs, or mathematical visualization collaborations.
          </motion.div>
        </motion.div>

        {/* Contact Grid with Staggered Left/Right Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Verified Links & Location */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInLeft}
            className="lg:col-span-5 space-y-6"
          >
            
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Direct Channels
              </h3>
              
              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_BRAND.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80 hover:border-emerald-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-neutral-500">
                      Primary Email
                    </div>
                    <div className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors break-all">
                      {PERSONAL_BRAND.email}
                    </div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={PERSONAL_BRAND.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80 hover:border-emerald-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <Github className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-neutral-500">
                      GitHub Profile
                    </div>
                    <div className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                      github.com/memoonanawaz
                    </div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_BRAND.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80 hover:border-emerald-500/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <Linkedin className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-neutral-500">
                      LinkedIn Network
                    </div>
                    <div className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">
                      linkedin.com/in/memoona-nawaz
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80">
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-neutral-500">
                      Academic Location
                    </div>
                    <div className="text-sm font-medium text-white">
                      {PERSONAL_BRAND.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Times */}
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 pt-2 border-t border-neutral-800">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Typical response window: 24–48 hours</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Direct Message Form with Animated Entry */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInRight}
            className="lg:col-span-7"
          >
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 sm:p-8">
              
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Send a Professional Inquiry
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Fill out the form below to initiate an inquiry. It will configure an email draft directly to <span className="text-white font-mono">{PERSONAL_BRAND.email}</span>.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Dr. Salman Khan / Parent / Recruiter"
                      className="w-full px-4 py-2.5 bg-[#0B0D0C] border border-neutral-800 rounded-lg text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@organization.com"
                      className="w-full px-4 py-2.5 bg-[#0B0D0C] border border-neutral-800 rounded-lg text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                    Inquiry Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Cambridge A-Level Tutoring / AI Validation Consulting"
                    className="w-full px-4 py-2.5 bg-[#0B0D0C] border border-neutral-800 rounded-lg text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your student requirements, curriculum tier, AI benchmark project, or collaboration..."
                    className="w-full px-4 py-2.5 bg-[#0B0D0C] border border-neutral-800 rounded-lg text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-lg shadow-emerald-950/40 w-full sm:w-auto cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT INQUIRY →</span>
                  </button>
                </div>

                {submitted && (
                  <div className="p-3 bg-emerald-950/60 border border-emerald-800/60 rounded-lg text-xs font-mono text-emerald-300 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Draft prepared in your email client. Thank you for reaching out!</span>
                  </div>
                )}
              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
