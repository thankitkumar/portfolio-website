
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Shapes } from "lucide-react";

const skillsData = {
  frontend: [
    { name: "React", proficiency: 90 },
    { name: "Next.js", proficiency: 85 },
    { name: "TypeScript", proficiency: 90 },
    { name: "HTML5 & CSS3", proficiency: 95 },
    { name: "Tailwind CSS", proficiency: 90 },
    { name: "State Management (Redux/Zustand)", proficiency: 80 },
  ],
  backend: [
    { name: "Node.js", proficiency: 85 },
    { name: "Express.js", proficiency: 80 },
    { name: "Python (Flask/Django)", proficiency: 70 },
    { name: "RESTful APIs", proficiency: 90 },
    { name: "GraphQL", proficiency: 70 },
  ],
  databases: [
    { name: "PostgreSQL", proficiency: 75 },
    { name: "MongoDB", proficiency: 70 },
    { name: "Firebase", proficiency: 80 },
  ],
  devops: [
    { name: "Docker", proficiency: 70 },
    { name: "CI/CD (GitHub Actions)", proficiency: 75 },
    { name: "AWS (EC2, S3, Lambda)", proficiency: 65 },
  ],
  tools: [
    "Git", "GitHub", "GitLab", "VS Code", "WebStorm", 
    "Figma", "Jira", "Trello", "Postman", "NPM", "Yarn"
  ],
};

interface SkillItemProps {
  name: string;
  proficiency: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, proficiency }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-foreground">{name}</span>
      <span className="text-sm font-medium text-muted-foreground">{proficiency}%</span>
    </div>
    <Progress value={proficiency} aria-label={`${name} proficiency ${proficiency}%`} className="h-3 rounded-full" />
  </div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl font-bold text-center text-primary flex items-center justify-center">
              <Shapes className="mr-3 h-8 w-8" />
              My Skill Set
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-6">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground border-b-2 border-primary pb-2">Frontend</h3>
                {skillsData.frontend.map((skill) => (
                  <SkillItem key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                ))}
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground border-b-2 border-primary pb-2">Backend</h3>
                {skillsData.backend.map((skill) => (
                  <SkillItem key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                ))}
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground border-b-2 border-primary pb-2">Databases</h3>
                {skillsData.databases.map((skill) => (
                  <SkillItem key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                ))}
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground border-b-2 border-primary pb-2">DevOps</h3>
                {skillsData.devops.map((skill) => (
                  <SkillItem key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                ))}
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-left text-foreground border-b-2 border-primary pb-2">Tools & Technologies</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {skillsData.tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="text-sm px-3 py-1 shadow-sm">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
