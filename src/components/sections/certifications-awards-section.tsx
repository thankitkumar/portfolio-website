
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";

const certificationsAwards = [
  {
    id: "1",
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "Issued: March 2023",
    icon: <Award className="h-10 w-10 text-primary mb-3" />,
    link: "#", // Replace with actual link to certificate if available
    description: "Validated technical expertise in developing and maintaining applications on AWS."
  },
  {
    id: "2",
    title: "Professional Scrum Master™ I (PSM I)",
    issuer: "Scrum.org",
    date: "Issued: July 2022",
    icon: <Award className="h-10 w-10 text-primary mb-3" />,
    link: "#",
    description: "Demonstrated understanding of Scrum and the role of the Scrum Master."
  },
  {
    id: "3",
    title: "Next.js Conf 2023 Hackathon - Runner Up",
    issuer: "Vercel",
    date: "Awarded: October 2023",
    icon: <Award className="h-10 w-10 text-primary mb-3" />,
    link: "#",
    description: "Recognized for an innovative project built with Next.js during the conference hackathon."
  },
];

export default function CertificationsAwardsSection() {
  return (
    <section id="certifications" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 flex items-center justify-center">
          <Award className="mr-3 h-8 w-8" />
          Certifications & Awards
        </h2>
        {certificationsAwards.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsAwards.map((item) => (
            <Card key={item.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col text-center items-center">
              <CardHeader className="items-center">
                {item.icon}
                <CardTitle className="text-xl lg:text-2xl font-semibold text-foreground">{item.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {item.issuer} - {item.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                {item.link && item.link !== "#" && (
                  <Link href={item.link} target="_blank" rel="noopener noreferrer" 
                        className="inline-flex items-center text-sm text-primary hover:underline">
                    View Credential <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
         ) : (
          <p className="text-center text-muted-foreground text-lg">
            No certifications or awards to display yet.
          </p>
        )}
      </div>
    </section>
  );
}
