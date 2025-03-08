interface SocialLinks {
    twitter: string;
    linkedin: string;
    github: string;
  }
  
export interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
    social: SocialLinks;
  }

export const teamMembers: TeamMember[]= [
    {
      name: "Dr. Sarah Johnson",
      role: "Academic Director",
      bio: "Ph.D. in Education with over 15 years of experience developing innovative learning methodologies.",
      image: "/assets/img/logo.png",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Prof. Michael Chen",
      role: "Lead Mathematics Instructor",
      bio: "Former university professor with a passion for making complex mathematical concepts accessible to all students.",
      image: "/assets/img/icon.png",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Student Success Coordinator",
      bio: "Dedicated to ensuring every student receives personalized support throughout their educational journey.",
      image: "/assets/img/icon.png",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "James Wilson",
      role: "Technology Director",
      bio: "Combines educational expertise with technical knowledge to create engaging digital learning experiences.",
      image: "/assets/img/icon.png",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
  ]