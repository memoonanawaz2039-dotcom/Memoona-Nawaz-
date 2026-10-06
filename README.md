# MEMOONA NAWAZ — PORTFOLIO
**Mathematics × AI × Visual Learning**

A premium personal portfolio website architected and engineered for **Memoona Nawaz**, dedicated to mathematics education, programmatic mathematical visualization (Python & Manim), and frontier Artificial Intelligence mathematical reasoning validation.

---

## 1. Core Positioning & Verified Source of Truth

- **Name**: Memoona Nawaz
- **Positioning**: Mathematics × AI × Visual Learning
- **Focus Areas**:
  - Pure Mathematics & Cambridge Curricula (O/A Level, IGCSE)
  - Programmatic Mathematical Animation (Python, Manim)
  - AI Mathematical Validation & Reasoning Evaluation (Mindrift, Turing Company)
  - Digital SAT Quantitative Heuristics & Speed Hacks
  - Pedagogical Architecture (Phantom Monaxa Ecosystem)

All information in this portfolio is grounded strictly in verified credentials and official documents. No qualifications, statistics, testimonials, awards, or links have been fabricated.

---

## 2. Architecture & Visual System

- **Palette**: Dark academic/technical aesthetic:
  - Base Canvas: Deep near-black `#0B0D0C`
  - Structural Panels: Dark graphite `#161918` and `#1C1F1E`
  - Typography: Off-white `#F3F4F3` with subdued metadata `#8A928E`
  - Accent Color: Restrained Emerald / Mint `#10B981` & `#34D399`
- **Animations & Interaction**:
  - **Framer Motion Staggered Scroll Reveals**: Every section (`Hero`, `About`, `Education`, `Experience`, `Skills`, `Projects`, `Resources`, `CV`, `GitHub`, `Contact`) features staggered entry animations with a custom editorial cubic bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`).
  - **Zero Layout Shift**: Compositor-only animations (`opacity`, `transform`) ensuring fluid 60fps performance and WCAG `prefers-reduced-motion` compliance.
  - **Verified Portrait**: Features the official editorial portrait of Memoona Nawaz in a tailored navy blue blazer suit and cream blouse.
- **UX Flow**:
  1. `HERO`: Fullscreen editorial impact with decorative mathematical glyphs (`∫`, `π`, `Σ`, `f(x)`, `Δ`, `x²`) and verified portrait frame.
  2. `ABOUT`: Academic journey and interactive focus pillars (Pedagogy, AI Rigor, Visualization).
  3. `EDUCATION`: Vertical timeline with verified degrees from University of Central Punjab and University of the Punjab.
  4. `EXPERIENCE`: Filterable timeline with verified tenures across Beaconhouse, LGS, School of Enablers, Mindrift, and Turing Company.
  5. `SKILLS`: 5 Categorized competency cards (Mathematics, Programming, Mathematical Visualization, AI, Education).
  6. `PROJECTS`: Project-first and link-first cards:
     - **01: PHANTOM MONAXA** (Mathematics / Visual Learning Ecosystem)
     - **02: PHANTOM MATH FUNCTIONS** (Python / Manim / Mathematics with GitHub repo link)
     - **03: DIGITAL SAT — DISCRIMINANT** (Interactive Discriminant Simulator embedded directly in-browser!)
  7. `RESOURCES`: In-browser document viewer and downloadable curriculum files:
     - DSAT — Quadratic Discriminant Hacks (PDF)
     - Mastering P3 Differentiation (PDF)
     - O-Level Trigonometry and Bearings (PDF)
     - Quadratics (PPTX Presentation)
     - SAT Math Hack Presentation (PDF)
     - Memoona Nawaz Official CV (PDF)
  8. `CV`: Dedicated section with in-page preview and instant modal reader.
  9. `BUILDING WITH CODE`: Dedicated GitHub showcase linking to `https://github.com/memoonanawaz`.
  10. `CONTACT`: Direct channels (Email, GitHub, LinkedIn) and functional message form.

---

## 3. Local Development & Testing Instructions

### Prerequisites
- Node.js 18+ or Bun
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Setup
```bash
# Install dependencies
npm install

# Run Vite dev server on port 3000
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Verification Checklist
- [x] Top bar fixed navigation with smooth anchor scrolling
- [x] Fullscreen hero with verified photograph and action buttons
- [x] Education timeline with verified degrees (no unsupported claims)
- [x] Experience timeline with verified roles (Beaconhouse, LGS, Mindrift, Turing)
- [x] Real projects with verified GitHub and interactive demo links
- [x] Resources section with in-browser document modal reader & download triggers
- [x] Dedicated CV section with reader modal
- [x] Contact section with direct links and mailto form
- [x] Zero broken images, zero empty media boxes, zero placeholder video players

---

## 4. Maintenance Guide

### How to Replace Assets
1. **Profile Photograph**: Place the updated portrait in `public/assets/images/Memoona-Nawaz.jpeg` and `src/assets/images/Memoona-Nawaz.jpeg`.
2. **Brand Visual**: Place the Phantom Monaxa emblem in `public/assets/images/PhantomMonaxa.jpeg`.
3. **Documents**: Place updated PDF or PPTX files in `public/documents/`.

### How to Add New Projects
Open `src/data/portfolioData.ts` and append a new object to the `REAL_PROJECTS` array:
```typescript
{
  id: "project-slug",
  number: "04",
  title: "PROJECT TITLE",
  category: "Mathematics / Visualization",
  description: "Description of the mathematical problem and visual methodology...",
  technologies: ["Python", "Manim", "Calculus"],
  role: "Lead Author",
  linkText: "VIEW PROJECT →",
  linkUrl: "https://...",
  image: "/assets/images/...",
  caseStudy: { ... }
}
```

### How to Add New Curriculum Documents
Open `src/data/portfolioData.ts` and add a new item to `VERIFIED_DOCUMENTS`:
```typescript
{
  id: "document-id",
  number: "07",
  title: "NEW MATHEMATICS GUIDE",
  fileType: "PDF",
  category: "Curriculum Category",
  description: "Detailed description...",
  pagesOrSlides: "XX Pages",
  topics: ["Topic 1", "Topic 2"],
  fileName: "Document-Name.pdf",
  downloadUrl: "/documents/Document-Name.pdf",
  contentSummary: { ... }
}
```

---

## 5. Future Improvement Recommendations
1. **Live KaTeX Math Rendering**: Integrate `KaTeX` or `MathJax` for real-time LaTeX equation rendering in student quizzes.
2. **Interactive Manim Web Canvas**: Embed interactive WebGL/Three.js previews of 3D mathematical transformations.
3. **Student Practice Portal**: Expand the interactive Digital SAT simulator into a full randomized problem generator with timing analytics.

---

© 2026 Memoona Nawaz. All rights reserved.
