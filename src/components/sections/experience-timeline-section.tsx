
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, CalendarDays, CheckCircle, Cpu } from "lucide-react";

const experienceData = [
  {
    role: "Senior Full-Stack Developer",
    company: "Innovatech Solutions Ltd.",
    duration: "Jan 2022 - Present",
    achievements: [
      "Led the architecture and development of a scalable microservices-based e-commerce platform, resulting in a 40% increase in performance.",
      "Mentored a team of 5 junior developers, improving team productivity by 25%.",
      "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 60%.",
      "Integrated third-party APIs for payment processing and shipping logistics.",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Kubernetes", "AWS", "Tailwind CSS"],
  },
  {
    role: "Junior Web Developer",
    company: "Web Wizards LLC",
    duration: "May 2020 - Dec 2021",
    achievements: [
      "Developed and maintained 10+ client websites using WordPress and custom PHP solutions.",
      "Contributed to the development of responsive UI components for a SaaS application using React and Redux.",
      "Assisted in database design and migration for several key projects.",
      "Collaborated with designers to translate mockups into functional web pages.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Redux", "PHP", "WordPress", "MySQL", "jQuery", "Bootstrap"],
  },
];

export default function ExperienceTimelineSection() {
  return (
    <section id="experience" className="w-full py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 flex items-center justify-center">
          <Briefcase className="mr-3 h-8 w-8" />
          My Professional Journey
        </h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line removed */}

          {experienceData.map((exp, index) => (
            <div key={index} className="mb-12 md:flex md:items-start md:gap-8">
              {/* Dot on the timeline for larger screens - still useful for visual separation if desired, or remove if not needed */}
              <div className="hidden md:flex md:flex-col md:items-center md:w-12">
                <div className="mt-1 h-6 w-6 rounded-full bg-primary border-4 border-background shadow-md z-10"></div>
              </div>

              <Card className={`w-full shadow-lg ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-0'}`}> {/* Simplified alignment for single column mobile */}
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-foreground">{exp.role}</CardTitle>
                  <CardDescription className="text-md text-muted-foreground flex items-center gap-4">
                    <span>{exp.company}</span>
                    <span className="flex items-center">
                      <CalendarDays className="mr-1.5 h-4 w-4" /> {exp.duration}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-foreground mb-2 flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" /> Key Achievements:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {exp.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-foreground mb-3 flex items-center">
                      <Cpu className="mr-2 h-5 w-5 text-primary" /> Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-sm shadow-sm">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
