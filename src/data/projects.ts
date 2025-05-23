
import type { Project } from '@/types';

export const projectsData: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with product listings, cart functionality, and secure checkout. Built with Next.js, Stripe, and PostgreSQL.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store",
    tags: ["Next.js", "React", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveLink: "#", // Replace with actual link or remove if not applicable
    repoLink: "#",  // Replace with actual link or remove if not applicable
  },
  {
    title: "SaaS Dashboard",
    description: "A data visualization and management tool for businesses, featuring charts, user roles, and real-time updates. Developed using React, Node.js, and MongoDB.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "dashboard analytics",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Chart.js", "Firebase Auth"],
    liveLink: "#", // Replace with actual link
    repoLink: "#",  // Replace with actual link
  },
  {
    title: "Portfolio Website V1",
    description: "My previous personal portfolio website, showcasing earlier projects and skills. Built with HTML, CSS, and vanilla JavaScript.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "portfolio website",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveLink: "#", // Replace with actual link
    repoLink: "#",  // Replace with actual link
  },
  // Add more projects as needed
];
