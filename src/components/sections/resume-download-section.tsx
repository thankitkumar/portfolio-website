
'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { personalInfo } from '@/data/personal'; // Import data

export default function ResumeDownloadSection() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <section id="resume" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 flex justify-center">
        <Card className="shadow-lg max-w-2xl w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold text-primary flex items-center justify-center">
              <FileText className="mr-3 h-8 w-8" />
              My Resume
            </CardTitle>
            <CardDescription className="mt-2 text-lg text-muted-foreground">
              Interested in learning more about my professional background and skills? View my resume for a comprehensive overview.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center mt-4">
            <p className="text-muted-foreground mb-6 text-center max-w-md">
              My resume provides detailed information about my work experience, projects, education, and technical proficiencies.
            </p>
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-shadow duration-300"
              onClick={() => setIsResumeModalOpen(true)}
            >
              <Eye className="mr-2 h-5 w-5" />
              View Resume
            </Button>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isResumeModalOpen} onOpenChange={setIsResumeModalOpen}>
        <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-0 flex flex-col">
          <DialogHeader className="p-4 border-b flex-shrink-0">
            <DialogTitle>My Resume</DialogTitle>
          </DialogHeader>
          <div className="flex-grow overflow-hidden">
            <iframe
              src={personalInfo.resumePdfUrl}
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
