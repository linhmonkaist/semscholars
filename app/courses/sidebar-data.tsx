import { SidebarItem } from "@/components/app-sidebar";
import { LayoutDashboard, BookOpen, Library, Users, LifeBuoy, Settings } from "lucide-react";

export const data: SidebarItem[] = [
    {
      title: "Overview",
      url: "/courses",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Các gói mentor lẻ",
      url: "/courses/single",
      icon: BookOpen,
      isActive: true,
      items: [
        {
          title: "Tổng quan",
          url: "/courses/single#overview",
        },
        {
          title: "Tư vấn apply",
          url: "/courses/single#consulting",
        },
        {
          title: "Essay Feedback",
          url: "/courses/single#essayFeedback",
        },
        {
          title: "Mock Interview",
          url: "/courses/single#mockInterview",
        },
        {
        title: "Cover letter & CV feedback",
        url: "/courses/single#coverletter",
        },
      ],
    },
    {
      title: "Các gói mentor A-Z",
      url: "/courses/multi",
      icon: Library,
      isActive: true,
      items: [
        {
          title: "Tổng quan",
          url: "/courses/multi#overview",
        },
        {
            title: "Gói Định hướng",
            url: "/courses/multi#preApply",
        },
        {
          title: "Gói Essay chuyên sâu",
          url: "/courses/multi#essay",
        },
        {
            title: "Gói Basic",
            url: "/courses/multi#basic",
        },
        {
          title: "Gói Premium",
          url: "/courses/multi#premium",
        },
      ],
    },
  ]