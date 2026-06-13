"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  descriptions?: string[];
  icon: "work" | "education";
  index: number;
}

export default function TimelineItem({
  title,
  subtitle,
  period,
  location,
  descriptions,
  icon,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0 group"
      id={`timeline-item-${index}`}
    >
      {/* Vertical line */}
      <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border group-last:bg-gradient-to-b group-last:from-border group-last:to-transparent" />

      {/* Dot */}
      <div className="absolute left-[-5px] md:left-[11px] top-1 w-[11px] h-[11px] rounded-full border-2 border-accent bg-background z-10 group-hover:scale-125 transition-transform duration-300" />

      {/* Content card */}
      <div className="bg-card border border-border rounded-2xl p-5 md:p-6 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <div>
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="text-accent font-medium text-sm">{subtitle}</p>
          </div>
          <div className="flex items-center gap-3 mt-2 md:mt-0">
            {location && (
              <span className="text-xs text-secondary">{location}</span>
            )}
            <span className="text-xs text-secondary bg-secondary/10 px-3 py-1 rounded-full whitespace-nowrap">
              {period}
            </span>
          </div>
        </div>

        {descriptions && descriptions.length > 0 && (
          <ul className="mt-3 space-y-2">
            {descriptions.map((desc, i) => (
              <li
                key={i}
                className="text-sm text-secondary leading-relaxed flex items-start gap-2"
              >
                <span className="text-accent mt-1.5 flex-shrink-0">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <circle cx="6" cy="6" r="2" />
                  </svg>
                </span>
                {desc}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
