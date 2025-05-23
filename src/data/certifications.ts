
import type { CertificationAwardItem } from '@/types';
import { Award } from 'lucide-react'; // Icon is used for default, can be overridden in component

export const certificationsAwardsData: CertificationAwardItem[] = [
  {
    id: "1",
    title: "AWS Certified Developer - Associate",
    itemType: "certificate",
    issuer: "Amazon Web Services",
    date: "Issued: March 2023",
    // icon: Award, // Component will handle rendering Lucide Award icon by default
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
    // icon: Award,
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
    // icon: Award,
    link: "#",
    description: "Recognized for an innovative project built with Next.js during the conference hackathon.",
    certificateImageUrl: "https://placehold.co/800x600.png",
    certificateImageAlt: "Next.js Conf Hackathon Runner Up Award Visual",
    certificateImageHint: "award badge"
  },
  // Add more certifications or awards as needed
];
