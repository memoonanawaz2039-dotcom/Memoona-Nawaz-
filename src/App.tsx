/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Resources } from './components/Resources';
import { CvSection } from './components/CvSection';
import { GithubCta } from './components/GithubCta';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DocumentModal } from './components/DocumentModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CvModal } from './components/CvModal';
import { DocumentItem, ProjectItem } from './data/portfolioData';

export default function App() {
  const [selectedDocument, setSelectedDocument] = useState<DocumentItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#0B0D0C] text-[#F3F4F3] relative selection:bg-[#10B981]/30 selection:text-white">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />

        {/* 2. About Section */}
        <About />

        {/* 3. Education Timeline */}
        <Education />

        {/* 4. Experience Timeline */}
        <Experience />

        {/* 5. Skills & Toolkit */}
        <Skills />

        {/* 6. Projects (Link-First & Project-First, No Videos) */}
        <Projects onOpenCaseStudy={(proj) => setSelectedProject(proj)} />

        {/* 7. Resources & Visible Documents */}
        <Resources onOpenDocumentModal={(doc) => setSelectedDocument(doc)} />

        {/* 8. Dedicated CV Section */}
        <CvSection onOpenCvModal={() => setCvModalOpen(true)} />

        {/* 9. Building with Code (GitHub Section) */}
        <GithubCta />

        {/* 10. Contact Section */}
        <Contact />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Modals */}
      <DocumentModal 
        document={selectedDocument} 
        onClose={() => setSelectedDocument(null)} 
      />

      <CaseStudyModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <CvModal 
        isOpen={cvModalOpen} 
        onClose={() => setCvModalOpen(false)} 
      />
    </div>
  );
}
