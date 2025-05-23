
import type { SkillsData } from '@/types';

export const skillsData: SkillsData = {
  frontend: [
    { name: "React", proficiency: 90 },
    { name: "Next.js", proficiency: 85 },
    { name: "TypeScript", proficiency: 90 },
    { name: "HTML5 & CSS3", proficiency: 95 },
    { name: "Tailwind CSS", proficiency: 90 },
    { name: "State Management (Redux/Zustand)", proficiency: 80 },
  ],
  backend: [
    { name: "Node.js", proficiency: 85 },
    { name: "Express.js", proficiency: 80 },
    { name: "Python (Flask/Django)", proficiency: 70 }, // Example, adjust as needed
    { name: "RESTful APIs", proficiency: 90 },
    { name: "GraphQL", proficiency: 70 },
  ],
  databases: [
    { name: "PostgreSQL", proficiency: 75 },
    { name: "MongoDB", proficiency: 70 },
    { name: "Firebase", proficiency: 80 },
  ],
  devops: [
    { name: "Docker", proficiency: 70 },
    { name: "CI/CD (GitHub Actions)", proficiency: 75 },
    { name: "AWS (EC2, S3, Lambda)", proficiency: 65 },
  ],
  tools: [
    "Git", "GitHub", "GitLab", "VS Code", "WebStorm", 
    "Figma", "Jira", "Trello", "Postman", "NPM", "Yarn"
  ],
};
