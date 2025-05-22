
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: "1",
    name: "John Doe",
    title: "CEO, Tech Solutions Inc.",
    testimonial: "Working with [Developer Name] was a fantastic experience. Their expertise in Next.js and proactive approach helped us launch our platform ahead of schedule. Highly recommended!",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarHint: "person face",
  },
  {
    id: "2",
    name: "Jane Smith",
    title: "Project Manager, Innovate Ltd.",
    testimonial: "[Developer Name] is a highly skilled and collaborative developer. They consistently delivered high-quality code and were instrumental in solving complex technical challenges on our project.",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarHint: "professional person",
  },
  {
    id: "3",
    name: "Alex Johnson",
    title: "Lead Designer, Creative Co.",
    testimonial: "I was impressed by [Developer Name]'s ability to translate intricate designs into pixel-perfect, responsive UIs. Their attention to detail and communication skills are top-notch.",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarHint: "designer portrait",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 flex items-center justify-center">
          <Quote className="mr-3 h-8 w-8" />
          What Others Say
        </h2>
        {testimonials.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
                <Avatar className="h-20 w-20 mb-4 border-2 border-primary shadow-md">
                  <Image 
                    src={testimonial.avatarUrl} 
                    alt={`${testimonial.name}, ${testimonial.title}`} 
                    width={100} 
                    height={100} 
                    data-ai-hint={testimonial.avatarHint}
                    className="object-cover"
                  />
                  <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <p className="text-muted-foreground italic mb-4 flex-grow">&ldquo;{testimonial.testimonial}&rdquo;</p>
                <div className="mt-auto">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
         ) : (
          <p className="text-center text-muted-foreground text-lg">
            Testimonials coming soon!
          </p>
        )}
      </div>
    </section>
  );
}
