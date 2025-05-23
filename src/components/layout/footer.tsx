
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground py-8 border-t border-border mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={24} />
          </Link>
          <Link href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={24} />
          </Link>
          <Link href={`mailto:${personalInfo.email}`} aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={24} />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
