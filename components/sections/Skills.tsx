"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-secondary/30">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life"
          id="skills-heading"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: catIdx * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
              id={`skill-category-${catIdx}`}
            >
              {/* Category title */}
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-5">
                {category.title}
              </h3>

              {/* Skill badges */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
