
'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Eye, Briefcase } from "lucide-react"; // Changed ArrowDownToLine to Eye
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function HeroSection() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <section id="home" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
          Full-Stack Developer
          <br className="sm:hidden" />
          <span className="text-primary mx-2 sm:mx-3">|</span> 
          3 Years of Experience
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          A dedicated web developer leveraging 3 years of professional expertise to build innovative and efficient full-stack solutions. Passionate about creating responsive, user-centric applications with a keen eye for detail and performance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-auto">
            <a href="#projects">
              <Briefcase className="mr-2 h-5 w-5" />
              View Projects
            </a>
          </Button>
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-auto"
            onClick={() => setIsResumeModalOpen(true)}
          >
            <Eye className="mr-2 h-5 w-5" />
            View Resume
          </Button>
        </div>
      </div>

      <Dialog open={isResumeModalOpen} onOpenChange={setIsResumeModalOpen}>
        <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-0 flex flex-col">
          <DialogHeader className="p-4 border-b flex-shrink-0">
            <DialogTitle>My Resume</DialogTitle>
          </DialogHeader>
          <div className="flex-grow overflow-hidden">
            <iframe
              src="/resume.pdf"
              title="Resume"
              width="100%"
              height="100%"
              className="border-0"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
