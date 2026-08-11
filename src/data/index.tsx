import { Layout, Box, Sparkles, Code, Cpu } from 'lucide-react';
import type { Project, Service, Stat } from '../types';

export const projects: Project[] = [
  {
    title: "University Management System",
    category: "Full Stack Software",
    description: "A comprehensive academic management system featuring student enrollment, grade administration, course scheduling, and database optimization.",
    color: "#0f172a",
    image: "/project1.jpg"
  },
  {
    title: "Modern Portfolio Website",
    category: "Web Engineering & UI/UX",
    description: "A high-performance interactive portfolio featuring Lenis smooth scrolling, Framer Motion micro-interactions, dark mode aesthetics, and dynamic page reveals.",
    color: "#1e1b4b",
    image: "/project2.jpg"
  },
  {
    title: "3D Product Showcase",
    category: "WebGL & 3D Rendering",
    description: "An interactive web browser 3D experience with real-time model rendering, lighting controls, and dynamic product configuration.",
    color: "#171717",
    image: "/project3.jpg"
  }
];

export const services: Service[] = [
  {
    icon: <Code className="w-6 h-6 md:w-7 md:h-7" />,
    title: "Web Development",
    description: "Building responsive, modern, and high-performance web applications using React, TypeScript, Tailwind CSS, and cutting-edge frontend architectures."
  },
  {
    icon: <Layout className="w-6 h-6 md:w-7 md:h-7" />,
    title: "UI/UX Design",
    description: "Crafting clean, accessible, user-centered digital interfaces with focused typography, micro-interactions, and visual hierarchy."
  },
  {
    icon: <Box className="w-6 h-6 md:w-7 md:h-7" />,
    title: "3D Modeling",
    description: "Creating custom 3D assets, stylized characters, and interactive scene components optimized for real-time web rendering."
  },
  {
    icon: <Sparkles className="w-6 h-6 md:w-7 md:h-7" />,
    title: "Product Rendering",
    description: "High-quality realistic and stylized product visualizations, lighting setups, and interactive preview environments."
  },
  {
    icon: <Cpu className="w-6 h-6 md:w-7 md:h-7" />,
    title: "Creative Development",
    description: "Combining software engineering principles with motion graphics, scroll-driven animations, and interactive web experiences."
  }
];

export const skills: string[] = [
  "C++", 
  "Java", 
  "HTML & CSS", 
  "JavaScript", 
  "SQL & MySQL", 
  "Flutter & Dart", 
  "Git & GitHub", 
  "Artificial Intelligence / Machine Learning",
  "Computer Networking (Cisco)", 
  "Python"
];

export const marqueeItems: string[] = [
  "Software Development", "•", "Frontend Engineering", "•", "UI/UX Design", "•", "3D Visualization", "•", "AI & ML", "•",
  "Software Development", "•", "Frontend Engineering", "•", "UI/UX Design", "•", "3D Visualization", "•", "AI & ML", "•"
];

export const stats: Stat[] = [
  { num: "01", label: "Degree", value: "BSCS" },
  { num: "02", label: "University", value: "Bahria University" },
  { num: "03", label: "Focus", value: "Software & Web" },
  { num: "04", label: "Role", value: "Developer" }
];
