
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Home, User, Briefcase, Shapes, Award, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { personalInfo } from '@/data/personal';

const navItems = [
  { href: '#home', label: 'Home', icon: <Home size={18} /> },
  { href: '#about', label: 'About', icon: <User size={18} /> },
  { href: '#projects', label: 'Projects', icon: <Briefcase size={18} /> },
  { href: '#skills', label: 'Skills', icon: <Shapes size={18} /> },
  { href: '#certifications', label: 'Certifications', icon: <Award size={18} /> },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
  const pathname = usePathname();

  // Theme toggle logic
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (storedTheme) {
      setCurrentTheme(storedTheme);
    } else if (systemPrefersDark) {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }, []);

  useEffect(() => {
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      let currentSectionId = '';
      const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean);

      for (const section of sections) {
        if (section) {
            const rect = section.getBoundingClientRect();
            const headerOffset = 80; 
            if (rect.top <= headerOffset && rect.bottom >= headerOffset) {
                currentSectionId = `#${section.id}`;
                break;
            }
        }
      }
      
      if (!currentSectionId && window.scrollY < 50 && sections.length > 0 && sections[0]?.id) {
        currentSectionId = `#${sections[0].id}`;
      }
      
      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="#home" className="text-2xl font-bold text-primary-foreground hover:text-primary-foreground/80 transition-colors">
          {personalInfo.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-sm font-medium transition-colors 
                ${activeSection === item.href 
                  ? 'bg-primary-foreground text-primary' 
                  : 'text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground'}`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground ml-2"
          >
            {currentTheme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground mr-2"
          >
            {currentTheme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          </Button>
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
