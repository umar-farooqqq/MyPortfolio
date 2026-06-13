"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences, education } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 relative bg-secondary/30"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Experience & Education"
          subtitle="My professional journey and academic background"
          id="experience-heading"
        />

        {/* Experience */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-8 flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
            Work Experience
          </h3>
          <div>
            {experiences.map((exp, i) => (
              <TimelineItem
                key={`work-${i}`}
                title={exp.role}
                subtitle={exp.company}
                period={exp.period}
                location={exp.location}
                descriptions={exp.description}
                icon="work"
                index={i}
              />
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-8 flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
            Education
          </h3>
          <div>
            {education.map((edu, i) => (
              <TimelineItem
                key={`edu-${i}`}
                title={edu.degree}
                subtitle={edu.institution}
                period={edu.period}
                icon="education"
                index={i + experiences.length}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
