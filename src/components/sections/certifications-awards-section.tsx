
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Award as DefaultAwardIcon, ExternalLink, Eye } from "lucide-react"; // Renamed to avoid conflict
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { certificationsAwardsData } from "@/data/certifications"; // Import data
import type { CertificationAwardItem as ItemWithModalData } from '@/types'; // Use the type

export default function CertificationsAwardsSection() {
  const [selectedItem, setSelectedItem] = useState<ItemWithModalData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (item: ItemWithModalData) => {
    // Ensure item has image data before setting
    if (item.certificateImageUrl && item.certificateImageAlt && item.certificateImageHint) {
      setSelectedItem(item);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedItem(null);
    }, 300); 
  };

  return (
    <section id="certifications" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 flex items-center justify-center">
          <DefaultAwardIcon className="mr-3 h-8 w-8" />
          Certifications & Awards
        </h2>
        {certificationsAwardsData.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsAwardsData.map((item) => {
            const IconComponent = item.icon || DefaultAwardIcon; // Use specific icon or default
            return (
              <Card key={item.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col text-center items-center">
                <CardHeader className="items-center">
                  <IconComponent className="h-10 w-10 text-primary mb-3" />
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
                    {item.certificateImageUrl && item.certificateImageAlt && item.certificateImageHint && (
                      <Button 
                        variant="default" 
                        size="sm" 
                        onClick={() => handleOpenModal(item)} 
                        className="inline-flex items-center"
                      >
                        {item.itemType === 'award' ? 'View Award' : 'View Certificate'} <Eye className="ml-1.5 h-3.5 w-3.5" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
         ) : (
          <p className="text-center text-muted-foreground text-lg">
            No certifications or awards to display yet.
          </p>
        )}
      </div>

      {selectedItem && selectedItem.certificateImageUrl && selectedItem.certificateImageAlt && selectedItem.certificateImageHint && (
        <Dialog open={isModalOpen} onOpenChange={(open) => { if (!open) handleCloseModal(); else setIsModalOpen(true); }}>
          <DialogContent className="max-w-3xl w-[90vw] max-h-[90vh] p-2 sm:p-4 flex flex-col">
            <DialogHeader className="flex-shrink-0 relative">
              <DialogTitle className="text-lg sm:text-xl mb-2">{selectedItem.title}</DialogTitle>
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
