// ============================================================
// Portfolio Data — All resume content as typed constants
// ============================================================

export const personalInfo = {
  name: "Umar Farooq",
  title: "Computer Engineering Student & Full-Stack Developer",
  tagline:
    "I craft modern web experiences with clean code and thoughtful design. Passionate about building products that make a difference.",
  email: "umarfarooq63425@gmail.com",
  location: "Lahore, Pakistan",
  linkedin: "https://linkedin.com/in/umar-farooq-uf2003",
  github: "https://github.com/umar-farooqqq",
  resumeUrl: "/resume.pdf",
} as const;

// ============================================================
// Skills — grouped by category
// ============================================================

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "C++" },
      { name: "SQL" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Vercel" },
    ],
  },
];

// ============================================================
// Projects
// ============================================================

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "AI Job Preparation & Recruitment Platform",
    description:
      "A full-stack unified ecosystem integrating Student, Company, and University portals. Features AI-powered resume analysis, intelligent job-candidate matching, real-time AI interviews via Vapi LLM, and an in-browser coding environment using Monaco Editor.",
    techStack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Vapi LLM", "Monaco Editor"],
    githubUrl: "https://github.com/umar-farooqqq",
    featured: true,
  },
  {
    title: "Video Streaming Platform",
    description:
      "A responsive YouTube-inspired front-end built with React, featuring real-time data from the YouTube Data API. Dynamically fetches and displays video thumbnails, titles, and channel information.",
    techStack: ["React", "YouTube Data API", "CSS"],
    githubUrl: "https://github.com/umar-farooqqq",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A full-stack social platform dashboard where users can create posts, interact through likes and comments, and manage profiles. Includes JWT-based authentication and real-time interactions.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    githubUrl: "https://github.com/umar-farooqqq",
  },
  {
    title: "CryptoTracker",
    description:
      "A crypto tracking web app integrating the CoinGecko API to display real-time prices, market stats, and coin details. Features dynamic routing and reusable components for a smooth user experience.",
    techStack: ["React", "CoinGecko API", "CSS"],
    githubUrl: "https://github.com/umar-farooqqq",
  },
];

// ============================================================
// Experience
// ============================================================

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: "work";
}

export const experiences: Experience[] = [
  {
    role: "Front End Developer (Intern)",
    company: "Humanity Alliance Organization (HAO)",
    location: "Lahore",
    period: "Jul 2025 – Aug 2025",
    description: [
      "Developed responsive and user-friendly web interfaces using React and Next.js with modern UI design and component-based architecture.",
      "Implemented dynamic pages, theme switching, and optimized layouts to enhance user experience and performance.",
    ],
    type: "work",
  },
  {
    role: "Front End Developer (Intern)",
    company: "Elevvo Pathways",
    location: "Remote",
    period: "Jul 2025",
    description: [
      "Designed and implemented responsive UI interfaces using HTML, CSS, JavaScript, and React.js ensuring cross-browser compatibility.",
      "Built interactive features following clean code practices, modular structure, and modern frontend development standards.",
    ],
    type: "work",
  },
];

// ============================================================
// Education
// ============================================================

export interface Education {
  degree: string;
  institution: string;
  period: string;
  type: "education";
}

export const education: Education[] = [
  {
    degree: "BS(EE) — Computer Engineering",
    institution: "FAST NUCES, Lahore",
    period: "2022 – 2026",
    type: "education",
  },
  {
    degree: "FSc. Pre-Engineering",
    institution: "Punjab College, Lahore",
    period: "2019 – 2021",
    type: "education",
  },
];

// ============================================================
// Navigation links
// ============================================================

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
