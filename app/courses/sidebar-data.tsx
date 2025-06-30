"use client"
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
      title: "Chương trình mentor lẻ",
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
      title: "Chương trình mentor Focus",
      url: "/courses/focus",
      icon: Library,
      isActive: true,
      items: [
        {
          title: "Tổng quan",
          url: "/courses/focus#overview",
        },
        {
            title: "Gói GKS",
            url: "/courses/focus#GKS",
        },
        {
          title: "Gói khối IST",
          url: "/courses/focus#IST",
        },
        {
            title: "Gói Grad Europe",
            url: "/courses/focus#Eurograd",
        },
        {
          title: "Gói USA Scholarship",
          url: "/courses/focus#USA",
        },
        {
          title: "Gói General Scholarship",
          url: "/courses/focus#general",
        },
      ],
    },
    {
      title: "Chương trình mentor Combo",
      url: "/courses/combo",
      icon: Library,
      isActive: true,
      items: [
        {
          title: "Tổng quan",
          url: "/courses/combo#overview",
        },
        {
            title: "Gói Regional Combo",
            url: "/courses/combo#regional",
        },
        {
          title: "Gói Fast Retailing Combo",
          url: "/courses/combo#FR",
        },
        {
            title: "Gói Global Combo",
            url: "/courses/combo#global",
        },
      ],
    },
  ]