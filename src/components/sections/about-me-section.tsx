
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound } from "lucide-react";
import Image from 'next/image';
import { personalInfo } from '@/data/personal';

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
                    src={personalInfo.avatarImageUrl}
                    alt={`A professional headshot of ${personalInfo.name}`}
                    width={200} 
                    height={200}
                    data-ai-hint={personalInfo.avatarImageHint}
                    className="object-cover"
                  />
                  <AvatarFallback>{personalInfo.avatarFallback}</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-center md:text-left flex-grow">
                {personalInfo.longBio.map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground mb-4">
                    {index === 1 && <>On the frontend, I specialize in <strong className="text-primary">{personalInfo.frontendSkills.join(', ')}</strong>, transforming ideas into responsive and interactive interfaces. For the backend, I&apos;m proficient with <strong className="text-primary">{personalInfo.backendSkills.join(', ')}</strong>, building robust RESTful APIs and managing data effectively with databases like <strong className="text-primary">{personalInfo.databaseSkills.join(', ')}</strong>.</>}
                    {index === 2 && <>I&apos;ve had the opportunity to contribute to projects in the <strong className="text-primary">{personalInfo.industryExperience.join(' and ')}</strong> sectors, where I&apos;ve honed my skills in delivering scalable and secure solutions.</>}
                    {index === 3 && <>My development philosophy centers around writing <strong className="text-primary">{personalInfo.developmentPhilosophy}</strong>, and fostering collaborative team environments. My goal is to continue learning and leveraging cutting-edge technologies to build impactful web solutions.</>}
                    {index !== 1 && index !== 2 && index !== 3 && paragraph}
                  </p>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
