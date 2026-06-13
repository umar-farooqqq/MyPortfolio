"use client";

import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  download?: boolean;
  target?: string;
  rel?: string;
  id?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  download,
  target,
  rel,
  id,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 cursor-pointer border";

  const variants = {
    primary:
      "bg-accent text-white border-accent hover:bg-accent-hover hover:border-accent-hover shadow-lg shadow-accent/25 hover:shadow-accent/40",
    secondary:
      "bg-transparent text-primary border-border hover:bg-card hover:border-accent/50",
    ghost:
      "bg-transparent text-secondary border-transparent hover:text-primary hover:bg-card",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel}
        download={download}
        id={id}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedClasses}
      onClick={onClick}
      id={id}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
