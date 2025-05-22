import { Button } from "@/components/ui/button";
import { ArrowDownToLine, Briefcase } from "lucide-react";

export default function HeroSection() {
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
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-shadow duration-300 w-full sm:w-auto">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"> {/* Changed target to _blank and removed download attribute */}
              <ArrowDownToLine className="mr-2 h-5 w-5" />
              View Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
