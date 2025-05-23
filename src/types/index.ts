
// This file can be used to define shared TypeScript types.

export interface SocialLink {
  platform: string;
  url: string;
  icon?: React.ElementType; // For Lucide icons
}

export interface PersonalInfo {
  name: string;
  title: string;
  shortBio: string;
  longBio: string[]; // Array of paragraphs for the About Me section
  frontendSkills: string[];
  backendSkills: string[];
  databaseSkills: string[];
  industryExperience: string[];
  developmentPhilosophy: string;
  email: string;
  githubUrl:string;
  linkedinUrl: string;
  resumePdfUrl: string; // Path to the resume PDF, e.g., "/resume.pdf"
  avatarImageUrl: string;
  avatarFallback: string;
  avatarImageHint: string;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  liveLink?: string; // Optional
  repoLink?: string; // Optional
}

export type CertificationAwardItemType = 'certificate' | 'award';

export interface CertificationAwardItem {
  id: string;
  title: string;
  itemType: CertificationAwardItemType;
  issuer: string;
  date: string; // e.g., "Issued: March 2023" or "Awarded: October 2023"
  icon?: React.ElementType; // For Lucide icons, rendered in the component
  link?: string; // Optional link to verify/view details
  description: string;
  certificateImageUrl?: string; // Optional image URL for modal view
  certificateImageAlt?: string; // Alt text for the image
  certificateImageHint?: string; // AI hint for the image
}

export interface SkillItem {
  name: string;
  proficiency: number; // Percentage (0-100)
}

export interface SkillsData {
  frontend: SkillItem[];
  backend: SkillItem[];
  databases: SkillItem[];
  devops: SkillItem[];
  tools: string[]; // For tools displayed as badges
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  achievements: string[];
  technologies: string[];
}

// Ensure this export remains if other files might still expect it,
// otherwise, it can be removed if no longer used.
export {};
