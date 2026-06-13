# Umar Farooq — Portfolio

A modern, responsive personal portfolio website built with **Next.js 15**, **Tailwind CSS v4**, and **Framer Motion**.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)

---

## ✨ Features

- **Dark / Light Theme** — Toggle with smooth transition, persists in localStorage
- **Fully Responsive** — Mobile-first, adapts to all screen sizes
- **Smooth Animations** — Section reveals, hover effects, and micro-interactions via Framer Motion
- **SEO Optimized** — Meta tags, Open Graph, semantic HTML, proper heading hierarchy
- **Clean Architecture** — Component-based, reusable UI primitives, typed data layer

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Single-page assembly
│   └── globals.css         # Design system + theme tokens
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, About, Skills, Projects, Experience, Contact
│   └── ui/                 # Button, SectionHeading, ProjectCard, SkillBadge, etc.
├── hooks/
│   └── useTheme.ts         # Theme management hook
├── lib/
│   ├── data.ts             # All portfolio data (single source of truth)
│   └── animations.ts       # Framer Motion variants
└── public/
    └── resume.pdf          # Downloadable resume
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Run Locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

The easiest way to deploy:

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel auto-detects Next.js — click **Deploy**

Or deploy via CLI:

```bash
npx vercel
```

## 🎨 Customization

- **Content**: Edit `lib/data.ts` to update your info, projects, skills, and experience
- **Colors**: Modify CSS variables in `app/globals.css` (`:root` and `.dark` blocks)
- **Fonts**: Change the font import in `app/layout.tsx`
- **Resume**: Replace `public/resume.pdf` with your latest resume

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
