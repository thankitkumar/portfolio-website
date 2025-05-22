
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowDownToLine, FileText } from "lucide-react";

export default function ResumeDownloadSection() {
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
              Interested in learning more about my professional background and skills? Download my resume for a comprehensive overview.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center mt-4">
            <p className="text-muted-foreground mb-6 text-center max-w-md">
              My resume provides detailed information about my work experience, projects, education, and technical proficiencies.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-shadow duration-300">
              <a href="/resume.pdf" download="JohnDoe_Resume.pdf"> {/* Ensure resume.pdf is in /public folder */}
                <ArrowDownToLine className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
