"use client";

import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animations";

interface SkillBadgeProps {
  name: string;
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <motion.span
      variants={scaleIn}
      whileHover={{ scale: 1.08, y: -2 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-card border border-border text-primary hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 cursor-default"
    >
      {name}
    </motion.span>
  );
}
