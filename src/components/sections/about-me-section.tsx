
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserRound, ArrowDownToLine } from "lucide-react";
import Image from 'next/image';

export default function AboutMeSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-bold text-center text-primary flex items-center justify-center">
              <UserRound className="mr-3 h-8 w-8" />
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
              <div className="flex-shrink-0">
                <Avatar className="h-40 w-40 md:h-48 md:w-48 border-4 border-primary shadow-md">
                  <Image 
                    src="https://placehold.co/200x200.png" 
                    alt="A professional headshot of the developer" 
                    width={200} 
                    height={200}
                    data-ai-hint="profile portrait" 
                    className="object-cover"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-center md:text-left flex-grow">
                <p className="text-lg text-muted-foreground mb-4">
                  Hello! I&apos;m a passionate Full-Stack Web Developer with three years of dedicated experience in crafting dynamic and user-centric web applications. My journey in tech has been driven by a desire for solving complex problems and building seamless digital experiences.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  On the frontend, I specialize in <strong className="text-foreground">React, Next.js, and TypeScript</strong>, transforming ideas into responsive and interactive interfaces using <strong className="text-foreground">Tailwind CSS</strong>. For the backend, I&apos;m proficient with <strong className="text-foreground">Node.js and Express.js</strong>, building robust RESTful APIs and managing data effectively with databases like <strong className="text-foreground">PostgreSQL and MongoDB</strong>.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  I&apos;ve had the opportunity to contribute to projects in the <strong className="text-foreground">e-commerce and SaaS</strong> sectors, where I&apos;ve honed my skills in delivering scalable and secure solutions.
                </p>
                <p className="text-lg text-muted-foreground">
                  My development philosophy centers around writing <strong className="text-foreground">clean, maintainable, and testable code</strong>, and fostering collaborative team environments. My goal is to continue learning and leveraging cutting-edge technologies to build impactful web solutions.
                </p>
                <div className="mt-6 flex justify-center md:justify-start">
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                      <ArrowDownToLine className="mr-2 h-5 w-5" />
                      Download Resume
                    </a>
                  </Button>
                </div>

              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
