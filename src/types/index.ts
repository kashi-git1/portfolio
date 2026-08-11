import type { ReactNode } from 'react';

/**
 * Represents a single project in the portfolio.
 */
export interface Project {
  title: string;
  category: string;
  description: string;
  image?: string;
  link?: string;
  color: string;
}

/**
 * Represents a service offering.
 */
export interface Service {
  title: string;
  description: string;
  icon: ReactNode;
}

/**
 * Represents a statistical highlight (e.g., in About section).
 */
export interface Stat {
  num: string;
  label: string;
  value: string;
}

/**
 * Represents a social media link.
 */
export interface SocialLink {
  icon: ReactNode;
  label: string;
  href: string;
}

/**
 * Standard props for Framer Motion wrapped sections.
 */
export interface SectionProps {
  className?: string;
}
