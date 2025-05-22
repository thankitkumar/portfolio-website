
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground py-8 border-t border-border mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={24} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={24} />
          </Link>
          <Link href="mailto:developer@example.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={24} />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Developer Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
