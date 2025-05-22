
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Home, User, Briefcase, Shapes, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '#home', label: 'Home', icon: <Home size={18} /> },
  { href: '#about', label: 'About', icon: <User size={18} /> },
  { href: '#projects', label: 'Projects', icon: <Briefcase size={18} /> },
  { href: '#skills', label: 'Skills', icon: <Shapes size={18} /> },
  { href: '#contact', label: 'Contact', icon: <Mail size={18} /> },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Close mobile menu on route change (if navigation happens to other pages)
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      // Check for current section based on scroll position
      // Adjusted offset to 100 to better detect section visibility
      const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean);

      for (const section of sections) {
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = `#${section.id}`;
                break;
            }
        }
      }
      
      // Fallback for when at the very top or bottom of the page
      if (!currentSection) {
        if (window.scrollY < 50) { // Very top of the page
            currentSection = '#home';
        } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) { // Bottom of the page
            const contactSection = navItems.find(item => item.href === '#contact');
            if (contactSection) {
                currentSection = contactSection.href;
            }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="#home" className="text-2xl font-bold text-primary-foreground hover:text-primary-foreground/80 transition-colors">
          Developer Name
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors 
                ${activeSection === item.href 
                  ? 'bg-primary-foreground text-primary' 
                  : 'text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground'}`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-primary shadow-lg p-4 z-40 border-t border-primary-foreground/20">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium transition-colors 
                  ${activeSection === item.href 
                    ? 'bg-primary-foreground text-primary' 
                    : 'text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground'}`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
