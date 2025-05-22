import HeroSection from '@/components/sections/hero-section';
import AboutMeSection from '@/components/sections/about-me-section';
import SkillsSection from '@/components/sections/skills-section';
import type { Metadata } from 'next';

// Page-specific metadata can override layout metadata if needed
// export const metadata: Metadata = {
//   title: 'Code Canvas - Home',
//   description: 'Welcome to the portfolio of a full-stack web developer.',
// };

export default function HomePage() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-background">
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
    </main>
  );
}
