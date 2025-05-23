
import type { Project } from '@/types';

export const projectsData: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with product listings, cart functionality, and secure checkout. Built with Next.js, Stripe, and PostgreSQL.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store",
    tags: ["Next.js", "React", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveLink: "https://example.com/ecommerce-live",
    repoLink: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    title: "SaaS Dashboard",
    description: "A data visualization and management tool for businesses, featuring charts, user roles, and real-time updates. Developed using React, Node.js, and MongoDB.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "dashboard analytics",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Chart.js", "Firebase Auth"],
    liveLink: "https://example.com/saas-dashboard-live",
    repoLink: "https://github.com/yourusername/saas-dashboard",
  },
  {
    title: "Portfolio Website V1",
    description: "My previous personal portfolio website, showcasing earlier projects and skills. Built with HTML, CSS, and vanilla JavaScript.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "portfolio website",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveLink: "https://example.com/portfolio-v1-live",
    repoLink: "https://github.com/yourusername/portfolio-v1",
  },
  // Add more projects as needed
];
