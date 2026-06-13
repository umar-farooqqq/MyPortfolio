"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  const stats = [
    { value: "4+", label: "Projects Built" },
    { value: "2", label: "Internships" },
    { value: "FAST", label: "NUCES Lahore" },
    { value: "2026", label: "Graduating" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="About Me"
          subtitle="A passionate developer who loves turning ideas into reality"
          id="about-heading"
        />

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Text column */}
          <motion.div
            className="md:col-span-3 space-y-6"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-secondary leading-relaxed text-base md:text-lg">
              I&apos;m a{" "}
              <span className="text-primary font-medium">
                Computer Engineering student
              </span>{" "}
              at FAST NUCES Lahore, graduating in 2026. My journey in tech
              started with curiosity about how things work on the web, and it
              quickly evolved into a passion for building full-stack applications
              that solve real-world problems.
            </p>
            <p className="text-secondary leading-relaxed text-base md:text-lg">
              With hands-on experience as a{" "}
              <span className="text-primary font-medium">
                Frontend Developer Intern
              </span>
              , I specialize in the{" "}
              <span className="text-accent font-medium">MERN stack</span> and{" "}
              <span className="text-accent font-medium">Next.js</span>,
              building responsive, modern web interfaces with clean,
              maintainable code. I believe in creating digital experiences that
              are both beautiful and functional.
            </p>
            <p className="text-secondary leading-relaxed text-base md:text-lg">
              When I&apos;m not coding, I&apos;m exploring new technologies,
              contributing to open-source projects, and continuously pushing
              myself to learn and grow as a developer.
            </p>
          </motion.div>

          {/* Stats column */}
          <motion.div
            className="md:col-span-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInRight}
                  className="bg-card border border-border rounded-2xl p-5 text-center hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
                  id={`stat-${i}`}
                >
                  <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-secondary">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
