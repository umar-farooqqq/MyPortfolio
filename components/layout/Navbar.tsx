"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { navLinks, personalInfo } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll immediately when menu opens, compensate for scrollbar width to prevent layout shift
  useEffect(() => {
    if (mobileOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.documentElement.classList.add("menu-open");
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.documentElement.classList.remove("menu-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.documentElement.classList.remove("menu-open");
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 420);
  };

  return (
    <>
      {/* ── Header bar ── always z-[60] so it sits above the overlay */}
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
        id="navbar"
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => setMobileOpen(false)}
            className="text-lg font-bold text-primary hover:text-accent transition-colors duration-300"
            id="nav-logo"
          >
            {personalInfo.name.split(" ")[0]}
            <span className="text-accent">.</span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-secondary hover:text-primary hover:bg-card rounded-lg transition-all duration-300"
                id={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: theme toggle + hamburger */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <button
              className="md:hidden w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center hover:border-accent/50 transition-colors duration-300 cursor-pointer"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle mobile menu"
              id="mobile-menu-toggle"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.svg
                    key="close"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.18 }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    className="w-4 h-4 text-primary"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="open"
                    initial={{ opacity: 0, rotate: 45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -45 }}
                    transition={{ duration: 0.18 }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    className="w-4 h-4 text-primary"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* ── Full-screen mobile overlay ── z-[55] (below header bar z-60) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-overlay"
            id="mobile-menu"
            /**
             * clipPath reveal: wipes from top → full screen on open,
             * collapses back to top on close. Runs entirely on the GPU —
             * no translateY stutter on mobile browsers.
             */
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.42, ease: [0.32, 0.72, 0, 1] }}
            className="md:hidden fixed inset-0 z-[55] flex flex-col overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg, var(--bg-primary) 60%, color-mix(in srgb, var(--accent) 12%, var(--bg-primary)) 100%)",
            }}
          >
            {/* Spacer = navbar height */}
            <div className="h-16 flex-shrink-0" />

            {/* Nav items */}
            <div className="flex-1 flex flex-col justify-center px-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.18 },
                  },
                }}
                className="space-y-1"
              >
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: -28 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.32, ease: "easeOut" },
                      },
                    }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="group w-full text-left flex items-center gap-4 py-4 border-b border-border/30 last:border-none cursor-pointer"
                    >
                      <span className="text-xs font-mono text-accent/60 w-6 tabular-nums select-none">
                        0{i + 1}
                      </span>
                      <span className="text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-200">
                        {link.label}
                      </span>
                      <span
                        className="ml-auto text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        aria-hidden
                      >
                        →
                      </span>
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Decorative glow orb */}
            <div
              className="absolute bottom-0 right-0 w-72 h-72 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in srgb, var(--accent) 18%, transparent) 0%, transparent 70%)",
                transform: "translate(30%, 30%)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
