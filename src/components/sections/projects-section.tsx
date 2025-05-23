
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, ExternalLink, Github } from "lucide-react"; // Added ExternalLink and Github
import Image from "next/image";
import Link from "next/link"; // Added Link for Next.js optimized navigation if internal
import { projectsData } from "@/data/projects"; // Import data
import { Button } from "@/components/ui/button"; // Added Button for styling links

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 flex items-center justify-center">
          <Briefcase className="mr-3 h-8 w-8" />
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  data-ai-hint={project.imageHint}
                  className="rounded-t-lg object-cover aspect-[3/2]"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <CardTitle className="text-2xl font-semibold text-foreground mb-3">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-border">
                  {project.liveLink && project.liveLink !== "#" && (
                     <Button variant="outline" size="sm" asChild>
                       <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                         <ExternalLink className="mr-1.5 h-4 w-4" />
                         View Website
                       </a>
                     </Button>
                  )}
                  {project.repoLink && project.repoLink !== "#" && (
                     <Button variant="outline" size="sm" asChild>
                       <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                         <Github className="mr-1.5 h-4 w-4" />
                         GitHub Repo
                       </a>
                     </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {projectsData.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">
            Projects are coming soon. Stay tuned!
          </p>
        )}
      </div>
    </section>
  );
}
