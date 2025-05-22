import HeroSection from '@/components/sections/hero-section';
import type { Metadata } from 'next';

// Page-specific metadata can override layout metadata if needed
// export const metadata: Metadata = {
//   title: 'Code Canvas - Home',
//   description: 'Welcome to the portfolio of a full-stack web developer.',
// };

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <HeroSection />
    </main>
  );
}
