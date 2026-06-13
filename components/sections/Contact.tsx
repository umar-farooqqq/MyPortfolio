"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const contactMethods = [
    {
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "umar-farooq-uf2003",
      href: personalInfo.linkedin,
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "umar-farooqqq",
      href: personalInfo.github,
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="I'm always open to new opportunities, collaborations, or just a friendly chat"
          id="contact-heading"
        />

        {/* Contact cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-3 gap-6 mb-16"
        >
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.label !== "Email" ? "_blank" : undefined}
              rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
              variants={scaleIn}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-card border border-border rounded-2xl p-6 text-center hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
              id={`contact-${method.label.toLowerCase()}`}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {method.icon}
              </div>
              <h3 className="text-sm font-semibold text-primary mb-1">
                {method.label}
              </h3>
              <p className="text-xs text-secondary break-all">{method.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-accent/10 via-indigo-400/10 to-purple-400/10 border border-accent/20 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-accent to-indigo-400 bg-clip-text text-transparent">
                amazing
              </span>{" "}
              together.
            </h3>
            <p className="text-secondary mb-8 max-w-lg mx-auto">
              Whether you have a project in mind, a job opportunity, or just
              want to connect — my inbox is always open.
            </p>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-xl hover:bg-accent-hover transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              id="contact-cta"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
              Say Hello
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
