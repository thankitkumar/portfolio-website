
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"; // Removed DialogClose from here
import { Award, ExternalLink, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Define the structure for each item, including itemType
type CertificationAwardItem = {
  id: string;
  title: string;
  itemType: 'certificate' | 'award'; // Added itemType
  issuer: string;
  date: string;
  icon: JSX.Element;
  link?: string;
  description: string;
  certificateImageUrl?: string;
  certificateImageAlt?: string;
  certificateImageHint?: string;
};

const certificationsAwardsData: CertificationAwardItem[] = [
  {
    id: "1",
    title: "AWS Certified Developer - Associate",
    itemType: "certificate",
    issuer: "Amazon Web Services",
    date: "Issued: March 2023",
    icon: <Award className="h-10 w-10 text-primary mb-3" />,
    link: "#", 
    description: "Validated technical expertise in developing and maintaining applications on AWS.",
    certificateImageUrl: "https://placehold.co/800x1100.png", 
    certificateImageAlt: "AWS Certified Developer - Associate Certificate Preview",
    certificateImageHint: "certificate document"
  },
  {
    id: "2",
    title: "Professional Scrum Master™ I (PSM I)",
    itemType: "certificate",
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
    itemType: "award",
    issuer: "Vercel",
    date: "Awarded: October 2023",
    icon: <Award className="h-10 w-10 text-primary mb-3" />,
    link: "#",
    description: "Recognized for an innovative project built with Next.js during the conference hackathon.",
    certificateImageUrl: "https://placehold.co/800x600.png", // Added placeholder image
    certificateImageAlt: "Next.js Conf Hackathon Runner Up Award Visual", // Added alt text
    certificateImageHint: "award badge" // Added hint
  },
  // Example of an award with an image
  // {
  //   id: "4",
  //   title: "Best Innovation Award",
  //   itemType: "award",
  //   issuer: "Tech Conference 2024",
  //   date: "Awarded: Jan 2024",
  //   icon: <Award className="h-10 w-10 text-primary mb-3" />,
  //   link: "#",
  //   description: "Awarded for the most innovative solution.",
  //   certificateImageUrl: "https://placehold.co/800x600.png",
  //   certificateImageAlt: "Best Innovation Award Visual",
  //   certificateImageHint: "award badge"
  // }
];

// Type for items that will definitely have image data for the modal
type ItemWithModalData = CertificationAwardItem & {
  certificateImageUrl: string;
  certificateImageAlt: string;
  certificateImageHint: string;
};

export default function CertificationsAwardsSection() {
  const [selectedItem, setSelectedItem] = useState<ItemWithModalData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (item: ItemWithModalData) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedItem(null);
    }, 300); // Delay clearing to allow modal to animate out
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
                      onClick={() => handleOpenModal(item as ItemWithModalData)} 
                      className="inline-flex items-center"
                    >
                      {item.itemType === 'award' ? 'View Award' : 'View Certificate'} <Eye className="ml-1.5 h-3.5 w-3.5" />
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

      {selectedItem && (
        <Dialog open={isModalOpen} onOpenChange={(open) => { if (!open) handleCloseModal(); else setIsModalOpen(true); }}>
          <DialogContent className="max-w-3xl w-[90vw] max-h-[90vh] p-2 sm:p-4 flex flex-col">
            <DialogHeader className="flex-shrink-0 relative"> {/* Removed pr-10 */}
              <DialogTitle className="text-lg sm:text-xl mb-2">{selectedItem.title}</DialogTitle>
              {/* The explicit DialogClose button has been removed here, ShadCN's DialogContent provides one */}
            </DialogHeader>
            <div className="flex-grow overflow-auto mt-2 relative">
              <Image
                src={selectedItem.certificateImageUrl}
                alt={selectedItem.certificateImageAlt}
                width={800} 
                height={1100} 
                data-ai-hint={selectedItem.certificateImageHint}
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

