
import type { ExperienceItem } from '@/types';

export const experienceData: ExperienceItem[] = [
  {
    role: "Senior Full-Stack Developer",
    company: "Innovatech Solutions Ltd.",
    duration: "Jan 2022 - Present",
    achievements: [
      "Led the architecture and development of a scalable microservices-based e-commerce platform, resulting in a 40% increase in performance.",
      "Mentored a team of 5 junior developers, improving team productivity by 25%.",
      "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 60%.",
      "Integrated third-party APIs for payment processing and shipping logistics.",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "AWS", "Tailwind CSS"],
  },
  {
    role: "Junior Web Developer",
    company: "Web Wizards LLC",
    duration: "May 2020 - Dec 2021",
    achievements: [
      "Developed and maintained 10+ client websites using WordPress and custom PHP solutions.",
      "Contributed to the development of responsive UI components for a SaaS application using React and Redux.",
      "Assisted in database design and migration for several key projects.",
      "Collaborated with designers to translate mockups into functional web pages.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Redux", "PHP", "WordPress", "MySQL", "jQuery", "Bootstrap"],
  },
  // Add more experience items as needed
];
