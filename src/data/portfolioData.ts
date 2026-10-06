/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  score: string;
  field: string;
  status?: string;
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  duration: string;
  location?: string;
  responsibilities: string[];
  skills: string[];
  type: 'Education' | 'AI & Technology' | 'Consulting';
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  role: string;
  linkText: string;
  linkUrl?: string;
  isExternalLink?: boolean;
  isInteractive?: boolean;
  featured?: boolean;
  image: string;
  caseStudy?: {
    context: string;
    problem: string;
    approach: string;
    technology: string[];
    myRole: string;
    result: string;
  };
}

export interface DocumentItem {
  id: string;
  number: string;
  title: string;
  fileType: 'PDF' | 'PPTX';
  category: string;
  description: string;
  pagesOrSlides: string;
  topics: string[];
  fileName: string;
  downloadUrl: string;
  contentSummary: {
    overview: string;
    keyFormulas: string[];
    sections: { heading: string; text: string }[];
    exampleProblem?: {
      question: string;
      solution: string;
      hack: string;
    };
  };
}

export const PERSONAL_BRAND = {
  name: "MEMOONA NAWAZ",
  headline: "MATHEMATICS × AI × VISUAL LEARNING",
  tagline: "Mathematics educator, visual learning creator, and AI-focused mathematical specialist.",
  email: "memoonanawaz2039@gmail.com",
  github: "https://github.com/memoonanawaz",
  linkedin: "https://www.linkedin.com/in/memoona-nawaz",
  location: "Lahore, Pakistan",
  bio: [
    "I am a mathematician, educator, and AI evaluation specialist dedicated to bridging the gap between abstract mathematical theory and intuitive visual understanding.",
    "Over six years of specialized teaching across Cambridge O/A Levels, IGCSE, and Digital SAT mathematics, I have developed visual pedagogy frameworks that transform intimidating equations into elegant geometric and visual intuitions.",
    "Concurrently, I apply mathematical rigor to frontier Artificial Intelligence — evaluating reasoning trajectories, validating symbolic correctness, and developing competitive math benchmarks for leading AI research platforms."
  ],
  focusAreas: [
    "Pure Mathematics & Theoretical Foundations",
    "Cambridge O/A Level & IGCSE Mathematics",
    "Programmatic Math Animation (Python / Manim)",
    "AI Mathematical Reasoning & Validation",
    "Digital SAT Quantitative Problem Solving",
    "Visual Pedagogical Architecture"
  ]
};

export const VERIFIED_EDUCATION: EducationItem[] = [
  {
    degree: "M.Phil Mathematics",
    institution: "University of Central Punjab",
    year: "2026",
    score: "Starting Soon / Admission Pending",
    field: "Pure & Applied Mathematics",
    status: "Upcoming",
    highlights: [
      "Advanced theoretical mathematics specialization",
      "Focus on higher-order analytical problem solving and functional analysis",
      "Research direction bridging mathematical structures and computational evaluation"
    ]
  },
  {
    degree: "BS Mathematics (ADP)",
    institution: "University of the Punjab",
    year: "2022–2024",
    score: "CGPA: 2.9 / 4.00",
    field: "Pure & Computational Mathematics",
    status: "Completed",
    highlights: [
      "Rigorous foundations in Real Analysis, Complex Analysis, and Abstract Algebra",
      "Differential equations, multivariate calculus, and linear algebra",
      "Mathematical methodologies applied to algorithmic structures"
    ]
  },
  {
    degree: "BSc Double Mathematics & Physics",
    institution: "University of the Punjab",
    year: "2020–2022",
    score: "61.8%",
    field: "Mathematics A & B, Classical & Modern Physics",
    status: "Completed",
    highlights: [
      "Double Mathematics major curriculum with intensive calculus and vector analysis",
      "Classical mechanics, electromagnetism, and mathematical physics",
      "Problem-solving methodologies across analytical physics and mathematical modeling"
    ]
  },
  {
    degree: "FSc Pre-Engineering",
    institution: "BISE Gujranwala",
    year: "Higher Secondary",
    score: "72.45%",
    field: "Pre-Engineering Sciences",
    status: "Completed",
    highlights: [
      "Rigorous engineering mathematics, physics, and chemistry core",
      "Foundational analytical geometry, trigonometry, and differentiation"
    ]
  },
  {
    degree: "SSC Bio Science",
    institution: "BISE Gujranwala",
    year: "Secondary School",
    score: "82.17%",
    field: "Secondary Science",
    status: "Completed",
    highlights: [
      "First-division distinction in secondary science education",
      "Foundational quantitative problem-solving and scientific inquiry"
    ]
  }
];

export const VERIFIED_EXPERIENCE: ExperienceItem[] = [
  {
    role: "Mathematics Consultant & Tutor",
    organization: "Independent Practice",
    duration: "2020–Present",
    location: "Lahore & Global Online",
    type: "Consulting",
    responsibilities: [
      "Conducting intensive 1-on-1 and small group tutorials for Cambridge O-Level (4024), A-Level (9709 P1/P3), IGCSE (0580), and Digital SAT mathematics candidates.",
      "Developing bespoke visual reasoning frameworks and step-by-step diagnostic workflows that remediate persistent student misconceptions in algebra and calculus.",
      "Analyzing past examination trends and question-scheme variants to deliver targeted exam preparation and problem-solving heuristics."
    ],
    skills: ["Pure Mathematics", "A-Level P3", "IGCSE Math", "SAT Math", "Visual Pedagogy"]
  },
  {
    role: "AI Logic Optimization & Mathematical Validation",
    organization: "Mindrift",
    duration: "Professional Role",
    location: "Remote",
    type: "AI & Technology",
    responsibilities: [
      "Evaluating and validating multi-step mathematical solutions and symbolic reasoning generated by frontier Large Language Models.",
      "Identifying edge-case mathematical hallucinations, algebraic inaccuracies, and structural logical fallacies in AI-generated reasoning trajectories.",
      "Formulating rigorous mathematical ground-truth solutions and formal proof verifications across calculus, combinatorics, and discrete math."
    ],
    skills: ["AI Evaluation", "Mathematical Validation", "Logic Optimization", "Formal Proofs", "LLM Reasoning"]
  },
  {
    role: "AI Benchmark Developer",
    organization: "Turing Company",
    duration: "Specialist Role",
    location: "Remote",
    type: "AI & Technology",
    responsibilities: [
      "Developing and curating high-difficulty mathematical benchmark datasets and test suites for state-of-the-art AI model evaluation.",
      "Benchmarking quantitative models on multi-step reasoning, theorem formulation, and Olympiad/SAT-level problem sets.",
      "Designing structured evaluation rubrics and automated grading criteria to measure algorithmic reasoning accuracy."
    ],
    skills: ["AI Benchmarking", "Dataset Engineering", "Quantitative Aptitude", "Mathematical Rigor"]
  },
  {
    role: "O/A Level Mathematics Teacher",
    organization: "Beaconhouse",
    duration: "Academic Faculty",
    location: "Lahore, Pakistan",
    type: "Education",
    responsibilities: [
      "Delivered Cambridge O-Level and A-Level Pure Mathematics instruction with emphasis on conceptual clarity, rigorous derivation, and examiner mark-scheme alignment.",
      "Authored specialized practice booklets, differentiation/integration drills, and coordinate geometry visual guides.",
      "Conducted structured diagnostic assessments and exam revision bootcamps leading to demonstrable improvements in student board results."
    ],
    skills: ["Cambridge A-Level", "Pure Math 3", "Exam Preparation", "Curriculum Design"]
  },
  {
    role: "IGCSE Mathematics Teacher",
    organization: "School of Enablers",
    duration: "Teaching Faculty",
    location: "Lahore, Pakistan",
    type: "Education",
    responsibilities: [
      "Taught Cambridge IGCSE Mathematics syllabus (Core and Extended) through structured, inquiry-led instructional techniques.",
      "Created visual explanation tools to demystify algebraic manipulations, geometry transformations, and statistical distributions.",
      "Fostered mathematical confidence among diverse cohorts through active problem-solving sessions and individual mentorship."
    ],
    skills: ["IGCSE Mathematics", "Algebraic Geometry", "Inquiry-Led Learning", "Mentorship"]
  },
  {
    role: "O-Level Mathematics Teacher",
    organization: "LGS (Lahore Grammar School)",
    duration: "Faculty Member",
    location: "Lahore, Pakistan",
    type: "Education",
    responsibilities: [
      "Led Cambridge O-Level Mathematics classes following rigorous syllabus benchmarks and active student participation.",
      "Organized targeted problem-solving clinics focusing on trigonometry, quadratics, and bearing calculations.",
      "Moderated mock exam sessions and guided students through Cambridge mark schemes and exam room pacing."
    ],
    skills: ["Cambridge O-Level", "Trigonometry & Bearings", "Assessment Moderation", "Problem Clinics"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "MATHEMATICS",
    description: "Core analytical disciplines with focus on pure mathematical theory, exam boards, and rigorous problem-solving.",
    skills: [
      "Pure Mathematics",
      "O-Level Mathematics (4024)",
      "A-Level Mathematics (9709 P1/P3)",
      "IGCSE Mathematics (0580)",
      "SAT Mathematics (Digital SAT)",
      "Mathematical Problem Solving",
      "Calculus & Differentiation",
      "Coordinate Geometry & Vectors"
    ]
  },
  {
    category: "PROGRAMMING",
    description: "Technical programming languages used for mathematical modeling, scripted animation, and interactive web tools.",
    skills: [
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Mathematical Scripting"
    ]
  },
  {
    category: "MATHEMATICAL VISUALIZATION",
    description: "Programmatic animation and visual pedagogy tools turning abstract formulas into tangible geometric intuition.",
    skills: [
      "Manim (3Blue1Brown Animation Engine)",
      "Mathematical Animation",
      "Visual Explanation Architecture",
      "Interactive Mathematical Content",
      "Parametric Curves & Coordinate Spaces",
      "Geometric Transformations"
    ]
  },
  {
    category: "AI & LOGIC VALIDATION",
    description: "Frontier AI model benchmarking, quantitative reasoning evaluation, and algorithmic validation.",
    skills: [
      "AI Evaluation",
      "Mathematical Validation",
      "AI Benchmark Development",
      "Logic Optimization",
      "Edge-Case Error Discovery",
      "Multi-Step Reasoning Verification"
    ]
  },
  {
    category: "EDUCATION & PEDAGOGY",
    description: "Proven instructional methodologies tailored for high-stakes international examinations and online learning.",
    skills: [
      "Curriculum-Based Teaching",
      "Exam Preparation & Timing Strategy",
      "Educational Resource Creation",
      "Diagnostic Assessment",
      "Online Interactive Tutoring",
      "Past Paper Analytics"
    ]
  }
];

export const REAL_PROJECTS: ProjectItem[] = [
  {
    id: "phantom-monaxa",
    number: "01",
    title: "PHANTOM MONAXA",
    category: "Mathematics / Visual Learning",
    description: "A specialized mathematics-focused visual learning and content ecosystem designed to transform abstract equations and complex mathematical proofs into clear, visually resonant pedagogical content.",
    technologies: ["Mathematics", "Visual Learning", "Content Architecture", "Pedagogy"],
    role: "Founder & Lead Mathematical Creator",
    linkText: "VIEW PROJECT →",
    image: "/assets/images/PhantomMonaxa.jpeg",
    featured: true,
    caseStudy: {
      context: "Mathematics education frequently suffers from algebraic opacity, where students memorize procedural operations without developing an intuitive geometric or conceptual model of what functions actually do.",
      problem: "Traditional lecture notes and standard textbooks present formulas statically, making dynamic concepts like limits, derivatives, vector rotations, and parameter variations hard to grasp.",
      approach: "Built the Phantom Monaxa content ecosystem to produce high-density, beautifully styled visual explanations. Each module pairs rigorous mathematical definitions with programmatic visualizations, coordinate overlays, and step-by-step reasoning.",
      technology: ["Mathematical Analysis", "Visual Learning", "Diagrammatic Reasoning", "Content Ecosystem"],
      myRole: "Curriculum designer, content author, and mathematical visual architect.",
      result: "Created a foundational library of visual mathematics resources, explanatory articles, and instructional frameworks utilized in O/A Level and higher secondary tutoring."
    }
  },
  {
    id: "phantom-math-functions",
    number: "02",
    title: "PHANTOM MATH FUNCTIONS",
    category: "Python / Manim / Mathematics",
    description: "A mathematical visualization project focused on representing mathematical functions through programmatic animation, using Python and 3Blue1Brown's Manim engine to render geometric transformations and calculus concepts.",
    technologies: ["Python", "Manim", "Calculus", "Linear Algebra", "Animation"],
    role: "Animation Developer & Mathematician",
    linkText: "GITHUB →",
    linkUrl: "https://github.com/memoonanawaz",
    isExternalLink: true,
    image: "/assets/images/manim-functions.jpeg",
    caseStudy: {
      context: "Mathematical functions are dynamic mappings between sets, yet conventional whiteboard instruction renders them as frozen sketches on a 2D plane.",
      problem: "Students struggle to internalize the relationship between rate of change (f'(x)), tangent slopes, and function curvature (f''(x)), especially when multiple parameters vary simultaneously.",
      approach: "Engineered code-driven Manim animation scripts in Python that programmatically sweep variables, draw instantaneous tangent vectors, morph geometric spaces, and illustrate formal theorems with high visual precision.",
      technology: ["Python 3.10+", "Manim Community Library", "LaTeX Mathematical Typesetting", "FFmpeg"],
      myRole: "Sole developer, script writer, and mathematical animator.",
      result: "Open-source mathematical animation scripts and programmatic assets hosted on GitHub for educators and students."
    }
  },
  {
    id: "digital-sat-discriminant",
    number: "03",
    title: "DIGITAL SAT — DISCRIMINANT",
    category: "SAT Mathematics / Interactive Learning",
    description: "An interactive digital mathematics project and problem-solving guide dissecting quadratic discriminant properties (b² - 4ac > 0, = 0, < 0), parabolic roots, and rapid exam heuristics for the Digital SAT.",
    technologies: ["Interactive Math", "SAT Mathematics", "Quadratics", "HTML/JS"],
    role: "Curriculum Designer & Front-End Developer",
    linkText: "OPEN PROJECT →",
    isInteractive: true,
    image: "/assets/images/sat-discriminant.jpeg",
    caseStudy: {
      context: "The Digital SAT Math section frequently tests the discriminant under tight time limits, requiring students to immediately determine the number of intersection points between parabolas and linear equations.",
      problem: "Students often spend 2-3 minutes setting up quadratic equations instead of immediately inspecting the sign of Δ = b² - 4ac, leading to time penalties in Module 2.",
      approach: "Designed an interactive module with live sliders for coefficients a, b, and c, calculating Δ in real-time while rendering the corresponding parabola and roots, accompanied by curated test hacks.",
      technology: ["Interactive Canvas / SVG", "JavaScript", "Digital SAT Question Bank", "Quadratic Theory"],
      myRole: "Curriculum author and interactive front-end designer.",
      result: "Enables students to develop immediate visual intuition for the discriminant in under 30 seconds."
    }
  }
];

export const VERIFIED_DOCUMENTS: DocumentItem[] = [
  {
    id: "dsat-quadratic-discriminant-hacks",
    number: "01",
    title: "DSAT — QUADRATIC DISCRIMINANT HACKS",
    fileType: "PDF",
    category: "SAT Mathematics Resource",
    description: "High-yield strategic guide dissecting quadratic discriminant properties, root classification, linear-quadratic intersections, and rapid problem-solving shortcuts tailored for the Digital SAT Math section.",
    pagesOrSlides: "Comprehensive Guide",
    topics: ["Discriminant Δ = b² - 4ac", "Roots Classification", "Tangent Parabolas", "Linear-Quadratic Systems", "DSAT Module 2 Shortcuts"],
    fileName: "DSAT-Quadratic-Discriminant-Hacks.pdf",
    downloadUrl: "/documents/DSAT-Quadratic-Discriminant-Hacks.pdf",
    contentSummary: {
      overview: "The quadratic discriminant Δ = b² - 4ac is one of the most frequently tested concepts in the Digital SAT Math section. This guide breaks down every question archetype from 0, 1, or 2 real solution problems to system intersection hacks.",
      keyFormulas: [
        "Δ = b² - 4ac",
        "Δ > 0 ⟹ Two distinct real solutions (two x-intercepts)",
        "Δ = 0 ⟹ Exactly one real solution (tangent vertex on x-axis)",
        "Δ < 0 ⟹ No real solutions (parabola does not intersect x-axis)",
        "Intersection: For ax² + bx + c = mx + k, solve ax² + (b - m)x + (c - k) = 0 and set Δ = 0 for tangency"
      ],
      sections: [
        {
          heading: "1. The Geometry of the Discriminant",
          text: "Rather than mechanically plugging numbers into the quadratic formula, the discriminant directly controls the vertical position of the parabola's vertex relative to the x-axis when factored through the vertex form."
        },
        {
          heading: "2. The 'Exactly One Solution' SAT Hack",
          text: "When an SAT question states that a quadratic equation has 'exactly one real solution', do NOT solve for x! Immediately equate b² - 4ac = 0 and solve for the unknown constant (k, p, or c) directly."
        },
        {
          heading: "3. Systems of Equations Intersection Traps",
          text: "When a line y = mx + k intersects a parabola y = ax² + bx + c at exactly one point, substitute to form ax² + (b - m)x + (c - k) = 0. Set the discriminant of this combined equation to zero to solve in seconds."
        }
      ],
      exampleProblem: {
        question: "In the equation x² - kx + 36 = 0, where k is a positive constant, the equation has exactly one real solution. What is the value of k?",
        solution: "For exactly one real solution, set the discriminant Δ = b² - 4ac = 0. Here a = 1, b = -k, c = 36. Thus: (-k)² - 4(1)(36) = 0 ⟹ k² - 144 = 0 ⟹ k² = 144 ⟹ k = 12 (since k > 0).",
        hack: "Whenever the coefficient of x² is 1 and the equation has 1 solution, k = 2√c. Here k = 2√(36) = 2(6) = 12 instantly!"
      }
    }
  },
  {
    id: "mastering-p3-differentiation",
    number: "02",
    title: "MASTERING P3 DIFFERENTIATION",
    fileType: "PDF",
    category: "CIE A-Level Pure Mathematics 3",
    description: "Rigorous pedagogical treatise covering advanced differentiation techniques required for Cambridge A-Level Pure Mathematics 3 (9709), with step-by-step methods and examiner traps.",
    pagesOrSlides: "Pure Math 3 Guide",
    topics: ["Product & Quotient Rules", "Implicit Differentiation", "Parametric Equations", "Derivatives of e^x & ln x", "Trigonometric & Inverse Trig", "Stationary Points & Rates"],
    fileName: "Mastering-P3-Differentiation.pdf",
    downloadUrl: "/documents/Mastering-P3-Differentiation.pdf",
    contentSummary: {
      overview: "Cambridge A-Level Mathematics P3 (Paper 3) is renowned for demanding flawless algebraic manipulation in differentiation. This document synthesizes all key rules, standard integrals/derivatives, and common student errors.",
      keyFormulas: [
        "Product Rule: d/dx [u · v] = u(dv/dx) + v(du/dx)",
        "Quotient Rule: d/dx [u / v] = [v(du/dx) - u(dv/dx)] / v²",
        "Chain Rule: dy/dx = (dy/du) · (du/dx)",
        "Parametric Rule: dy/dx = (dy/dt) / (dx/dt) and d²y/dx² = [d/dt (dy/dx)] / (dx/dt)",
        "Implicit: d/dx [f(y)] = f'(y) · (dy/dx)"
      ],
      sections: [
        {
          heading: "1. Systematic Approach to Implicit Differentiation",
          text: "When y cannot be isolated explicitly (e.g. x³ + 3xy² - y³ = 5), differentiate term-by-term with respect to x. Every time you differentiate an expression containing y, multiply by dy/dx using the chain rule, then group all dy/dx terms on the left."
        },
        {
          heading: "2. The Parametric Second Derivative Trap",
          text: "The single most common error in P3 is calculating d²y/dx² as (d²y/dt²) / (d²x/dt²). This is mathematically INVALID. The correct method is: d²y/dx² = [d/dt (dy/dx)] · (dt/dx)."
        },
        {
          heading: "3. Exponential and Logarithmic Function Differentiation",
          text: "Remember that d/dx [a^x] = a^x · ln a. For expressions where both base and exponent are functions of x (e.g. y = x^x), take natural logarithms of both sides first: ln y = x ln x, then differentiate implicitly."
        }
      ],
      exampleProblem: {
        question: "Find the gradient of the curve xy + y² = 6 at the point (1, 2).",
        solution: "Differentiate with respect to x: d/dx(xy) + d/dx(y²) = d/dx(6) ⟹ [1·y + x(dy/dx)] + 2y(dy/dx) = 0. Factor dy/dx: (x + 2y)(dy/dx) = -y ⟹ dy/dx = -y / (x + 2y). At (1, 2): dy/dx = -2 / (1 + 2(2)) = -2/5.",
        hack: "For quick verification, use the multivariable partial derivative shortcut: dy/dx = - (∂F/∂x) / (∂F/∂y). Here F = xy + y² - 6. ∂F/∂x = y; ∂F/∂y = x + 2y. dy/dx = -y/(x+2y) = -2/5."
      }
    }
  },
  {
    id: "o-level-trigonometry-and-bearings",
    number: "03",
    title: "O-LEVEL TRIGONOMETRY AND BEARINGS",
    fileType: "PDF",
    category: "Cambridge O-Level (Syllabus D 4024)",
    description: "Clear geometric and spatial guide breaking down right-angled trigonometry, non-right-angled Sine & Cosine rules, three-figure bearings, and three-dimensional spatial problems.",
    pagesOrSlides: "O-Level Syllabus D",
    topics: ["SOH CAH TOA", "Sine Rule & Ambiguous Case", "Cosine Rule", "Triangle Area (½ ab sin C)", "3-Figure Bearings", "3D Trigonometry Angles"],
    fileName: "O-Level-Trigonometry-and-Bearings.pdf",
    downloadUrl: "/documents/O-Level-Trigonometry-and-Bearings.pdf",
    contentSummary: {
      overview: "Designed for Cambridge O-Level and IGCSE candidates, this guide equips students to navigate non-right angled triangles and spatial navigation with 3-figure bearings from True North.",
      keyFormulas: [
        "Sine Rule: a / sin A = b / sin B = c / sin C",
        "Cosine Rule (Side): a² = b² + c² - 2bc cos A",
        "Cosine Rule (Angle): cos A = (b² + c² - a²) / (2bc)",
        "Area of Any Triangle: Area = ½ a b sin C",
        "Bearing Convention: Always measured from North, clockwise, expressed in 3 digits (e.g., 045°, 230°)"
      ],
      sections: [
        {
          heading: "1. When to Use Sine Rule vs. Cosine Rule",
          text: "Use the Sine Rule when you have an 'angle-opposite side pair'. Use the Cosine Rule when you have SAS (two sides and the included angle) to find the third side, or SSS (all three sides) to find any angle."
        },
        {
          heading: "2. The Golden Rules of 3-Figure Bearings",
          text: "Rule 1: Always draw a North line at the 'FROM' location. Rule 2: Measure strictly clockwise. Rule 3: Use co-interior angles between parallel North lines (they sum to 180°) to find reverse bearings quickly."
        },
        {
          heading: "3. 3D Trigonometry & Angle of Greatest Slope",
          text: "Identify right-angled vertical cross-sections. The angle of elevation is measured upward from the horizontal plane; depression is measured downward from the horizontal plane."
        }
      ],
      exampleProblem: {
        question: "Point B is on a bearing of 070° from Point A. What is the bearing of Point A from Point B?",
        solution: "Draw North lines at both A and B. Since both North lines are parallel, the interior angles sum to 180°. At B, the angle between the South line and line BA is 70° (alternate angles). The full clockwise bearing from North at B to A is 70° + 180° = 250°.",
        hack: "Back-bearing rule: If forward bearing < 180°, add 180°. If forward bearing ≥ 180°, subtract 180°. Here 070° < 180°, so 070° + 180° = 250° immediately!"
      }
    }
  },
  {
    id: "quadratics-presentation",
    number: "04",
    title: "QUADRATICS",
    fileType: "PPTX",
    category: "Comprehensive Algebra Lecture Slide Deck",
    description: "Detailed instructional lecture presentation covering quadratic expressions, factoring methods, completing the square, quadratic formula derivation, and parabola graphing techniques.",
    pagesOrSlides: "Interactive Slide Deck",
    topics: ["Factoring Quadratics", "Completing the Square", "Quadratic Formula", "Vertex Form y = a(x-h)² + k", "Maximum/Minimum Optimization", "Parabolic Symmetry"],
    fileName: "Quadratics.pptx",
    downloadUrl: "/documents/Quadratics.pptx",
    contentSummary: {
      overview: "A masterclass slide deck covering every facet of quadratic algebra from standard form y = ax² + bx + c through factored form and vertex form. (Note: As PPTX cannot be natively rendered by browsers, full slide notes and downloadable presentation are provided).",
      keyFormulas: [
        "Standard Form: y = ax² + bx + c",
        "Vertex Form: y = a(x - h)² + k (Vertex at (h, k))",
        "Axis of Symmetry: x = -b / (2a)",
        "Quadratic Formula: x = [-b ± √(b² - 4ac)] / (2a)",
        "Completing the Square: x² + bx = (x + b/2)² - (b/2)²"
      ],
      sections: [
        {
          heading: "Slide 1–4: Core Representations of Quadratics",
          text: "Connecting standard form (shows y-intercept c), factored form a(x - r₁)(x - r₂) (shows x-intercepts r₁, r₂), and vertex form a(x - h)² + k (shows vertex extrema)."
        },
        {
          heading: "Slide 5–8: The Mechanical Power of Completing the Square",
          text: "How completing the square converts polynomials into perfect squares, deriving the quadratic formula and instantly revealing the maximum or minimum value without calculus."
        },
        {
          heading: "Slide 9–14: Real-World Modeling & Projectile Trajectories",
          text: "Physics applications: h(t) = -½ gt² + v₀t + h₀. Finding time of maximum height at t = -v₀ / (2a) and total flight time when h(t) = 0."
        }
      ],
      exampleProblem: {
        question: "Convert y = 2x² - 12x + 11 into vertex form and state its minimum value.",
        solution: "Factor out 2 from the x terms: y = 2(x² - 6x) + 11. Complete square inside brackets: x² - 6x = (x - 3)² - 9. Substitute back: y = 2[(x - 3)² - 9] + 11 = 2(x - 3)² - 18 + 11 = 2(x - 3)² - 7. The vertex is at (3, -7), so the minimum value is y = -7 when x = 3.",
        hack: "Find h = -b/(2a) = -(-12)/(2·2) = 3. Find k = y(3) = 2(9) - 12(3) + 11 = 18 - 36 + 11 = -7. Write y = 2(x - 3)² - 7 directly!"
      }
    }
  },
  {
    id: "sat-math-hack-presentation",
    number: "05",
    title: "SAT MATH HACK PRESENTATION",
    fileType: "PDF",
    category: "Digital SAT Speed Strategies",
    description: "Curated collection of high-speed Digital SAT math shortcuts, Desmos calculator techniques, plug-in heuristics, and algebraic elimination hacks for scoring 750+.",
    pagesOrSlides: "Strategic Presentation",
    topics: ["Built-In Desmos Shortcuts", "Backsolving Techniques", "Geometry Circle Equations", "Percentage Multipliers", "Boxplots & Median Heuristics"],
    fileName: "SAT-Math-Hack-Presentation.pdf",
    downloadUrl: "/documents/SAT-Math-Hack-Presentation.pdf",
    contentSummary: {
      overview: "The transition to the Digital SAT transformed how high scorers approach mathematics. This presentation distills tactical hacks that bypass time-consuming algebraic derivations using analytical inspection and Desmos capabilities.",
      keyFormulas: [
        "Circle Standard Equation: (x - h)² + (y - k)² = r²",
        "Percent Change Multiplier: New = Original · (1 ± r/100)",
        "Slope between points: m = (y₂ - y₁) / (x₂ - x₁)",
        "Sum of roots of ax² + bx + c = 0 is -b/a; Product of roots is c/a",
        "Exponential Growth/Decay: y = a(1 ± r)^t"
      ],
      sections: [
        {
          heading: "1. The 'Sum of Roots' Shortcut",
          text: "Whenever the SAT asks for 'the sum of all solutions to ax² + bx + c = 0', do not solve the quadratic! The sum of the roots is always -b/a. This solves a 2-minute question in 3 seconds."
        },
        {
          heading: "2. Circle Equations from General Form",
          text: "For x² + y² + Dx + Ey + F = 0, the center is (-D/2, -E/2) and radius is √((D/2)² + (E/2)² - F). Memorizing this formula avoids completing two separate squares on test day."
        },
        {
          heading: "3. Percentage Multiplier Stacking",
          text: "A 20% increase followed by a 15% discount is NOT a 5% increase. It is 1.20 × 0.85 = 1.02, representing a net 2% increase. Always multiply decimal factors rather than calculating intermediate dollar amounts."
        }
      ],
      exampleProblem: {
        question: "What is the sum of the solutions to 3x² - 18x - 7 = 0?",
        solution: "Using the sum of roots theorem for ax² + bx + c = 0: Sum = -b/a = -(-18)/3 = 18/3 = 6.",
        hack: "Never use the quadratic formula when asked for the sum or product of roots. Sum = -b/a, Product = c/a."
      }
    }
  },
  {
    id: "memoona-nawaz-cv",
    number: "06",
    title: "MEMOONA NAWAZ — OFFICIAL CURRICULUM VITAE",
    fileType: "PDF",
    category: "Verified Academic & Professional CV",
    description: "Official curriculum vitae detailing academic qualifications from University of the Punjab and University of Central Punjab, teaching tenures at Beaconhouse and LGS, and AI validation work at Mindrift and Turing.",
    pagesOrSlides: "Official Document",
    topics: ["Academic Qualifications", "Teaching Experience", "AI Evaluation Expertise", "Technical Skills (Python, Manim)", "Certifications & Contact"],
    fileName: "Memoona-Nawaz-CV.pdf",
    downloadUrl: "/documents/Memoona_Nawaz_CV_Updated.pdf",
    contentSummary: {
      overview: "Authoritative verified curriculum vitae of Memoona Nawaz: Mathematics educator, visual learning creator, and AI-focused mathematical specialist based in Lahore, Pakistan.",
      keyFormulas: [
        "M.Phil Mathematics — University of Central Punjab (2026 / Starting Soon)",
        "BS Mathematics (ADP) — University of the Punjab (2.9 / 4.00, 2022–2024)",
        "BSc Double Mathematics & Physics — University of the Punjab (61.8%, 2020–2022)",
        "FSc Pre-Engineering — BISE Gujranwala (72.45%)",
        "SSC Bio Science — BISE Gujranwala (82.17%)"
      ],
      sections: [
        {
          heading: "Professional Identity",
          text: "Mathematics educator with 6+ years of specialized instructional experience across Cambridge O/A Levels, IGCSE, and Digital SAT. Creator of Phantom Monaxa, dedicated to visual mathematics pedagogy and programmatic animation."
        },
        {
          heading: "AI & Benchmarking Specialization",
          text: "Contributor to frontier AI evaluation programs at Mindrift and Turing Company, focusing on mathematical proof validation, logical trajectory verification, and quantitative benchmarking."
        },
        {
          heading: "Core Technical Toolkit",
          text: "Python, Manim (Mathematical Animation Engine), LaTeX, HTML/CSS, JavaScript, Cambridge Mathematics (O/A Level, IGCSE), SAT Quantitative Reasoning."
        }
      ]
    }
  }
];
