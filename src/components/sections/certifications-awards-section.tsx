
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Award, ExternalLink, Eye, X as CloseIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const certificationsAwardsData = [
  {
    id: "1",
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "Issued: March 2023",
    icon: <Award className="h-10 w-10 text-primary mb-3" />,
    link: "#", // Replace with actual link to certificate if available
    description: "Validated technical expertise in developing and maintaining applications on AWS.",
    certificateImageUrl: "https://placehold.co/800x1100.png", 
    certificateImageAlt: "AWS Certified Developer - Associate Certificate Preview",
    certificateImageHint: "certificate document"
  },
  {
    id: "2",
    title: "Professional Scrum Master™ I (PSM I)",
    issuer: "Scrum.org",
    date: "Issued: July 2022",
    icon: <Award className="h-10 w-10 text-primary mb-3" />,
    link: "#",
    description: "Demonstrated understanding of Scrum and the role of the Scrum Master.",
    certificateImageUrl: "https://placehold.co/800x1100.png",
    certificateImageAlt: "PSM I Certificate Preview",
    certificateImageHint: "certificate document"
  },
  {
    id: "3",
    title: "Next.js Conf 2023 Hackathon - Runner Up",
    issuer: "Vercel",
    date: "Awarded: October 2023",
    icon: <Award className="h-10 w-10 text-primary mb-3" />,
    link: "#",
    description: "Recognized for an innovative project built with Next.js during the conference hackathon."
    // No certificateImageUrl for this one, so no modal trigger.
  },
];

type CertificateWithImage = typeof certificationsAwardsData[number] & {
  certificateImageUrl: string;
  certificateImageAlt: string;
  certificateImageHint: string;
};

export default function CertificationsAwardsSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateWithImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (cert: CertificateWithImage) => {
    setSelectedCertificate(cert);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing selectedCertificate to allow modal to animate out
    setTimeout(() => {
      setSelectedCertificate(null);
    }, 300);
  };

  return (
    <section id="certifications" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 flex items-center justify-center">
          <Award className="mr-3 h-8 w-8" />
          Certifications & Awards
        </h2>
        {certificationsAwardsData.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsAwardsData.map((item) => (
            <Card key={item.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col text-center items-center">
              <CardHeader className="items-center">
                {item.icon}
                <CardTitle className="text-xl lg:text-2xl font-semibold text-foreground">{item.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {item.issuer} - {item.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col items-center w-full p-6">
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{item.description}</p>
                <div className="mt-auto flex flex-col sm:flex-row gap-2 w-full justify-center items-center">
                  {item.link && item.link !== "#" && (
                     <Button variant="outline" size="sm" asChild>
                        <Link href={item.link} target="_blank" rel="noopener noreferrer" 
                              className="inline-flex items-center">
                          Verify <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                        </Link>
                      </Button>
                  )}
                  {item.certificateImageUrl && (
                    <Button 
                      variant="default" 
                      size="sm" 
                      onClick={() => handleOpenModal(item as CertificateWithImage)} 
                      className="inline-flex items-center"
                    >
                      View Certificate <Eye className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  )}
                </div>
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

      {selectedCertificate && (
        <Dialog open={isModalOpen} onOpenChange={(open) => { if (!open) handleCloseModal(); else setIsModalOpen(true); }}>
          <DialogContent className="max-w-3xl w-[90vw] max-h-[90vh] p-2 sm:p-4 flex flex-col">
            <DialogHeader className="flex-shrink-0 relative pr-10">
              <DialogTitle className="text-lg sm:text-xl mb-2">{selectedCertificate.title}</DialogTitle>
              <DialogClose asChild>
                <Button variant="ghost" size="icon" className="absolute top-0 right-0 sm:top-[-0.5rem] sm:right-[-0.5rem] text-muted-foreground hover:text-foreground">
                  <CloseIcon className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </DialogClose>
            </DialogHeader>
            <div className="flex-grow overflow-auto mt-2 relative">
              <Image
                src={selectedCertificate.certificateImageUrl}
                alt={selectedCertificate.certificateImageAlt}
                width={800} 
                height={1100} 
                data-ai-hint={selectedCertificate.certificateImageHint}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}

