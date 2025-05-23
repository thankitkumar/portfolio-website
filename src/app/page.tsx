
import HeroSection from '@/components/sections/hero-section';
import AboutMeSection from '@/components/sections/about-me-section';
import SkillsSection from '@/components/sections/skills-section';
import ExperienceTimelineSection from '@/components/sections/experience-timeline-section';
import ResumeDownloadSection from '@/components/sections/resume-download-section';
import ProjectsSection from '@/components/sections/projects-section';
import CertificationsAwardsSection from '@/components/sections/certifications-awards-section';
import type { Metadata } from 'next';

// Page-specific metadata can override layout metadata if needed
// export const metadata: Metadata = {
//   title: 'Code Canvas - Home',
//   description: 'Welcome to the portfolio of a full-stack web developer.',
// };

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceTimelineSection />
      <CertificationsAwardsSection />
      <ResumeDownloadSection />
    </>
  );
}
