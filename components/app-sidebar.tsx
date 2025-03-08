"use client"

import type * as React from "react"
import { BookOpen, GraduationCap, LayoutDashboard, Library, LifeBuoy, Settings, Users } from "lucide-react"

import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import { SearchForm } from "./search-form"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"

// This is sample data for an educational platform
const data = {
  user: {
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    role: "Student",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Courses",
      url: "/courses",
      icon: BookOpen,
      items: [
        {
          title: "All Courses",
          url: "/courses",
        },
        {
          title: "My Enrolled Courses",
          url: "/courses/enrolled",
        },
        {
          title: "Recommended",
          url: "/courses/recommended",
        },
        {
          title: "Certificates",
          url: "/courses/certificates",
        },
      ],
    },
    {
      title: "Resources",
      url: "/resources",
      icon: Library,
      items: [
        {
          title: "Study Materials",
          url: "/resources/materials",
        },
        {
          title: "Practice Tests",
          url: "/resources/tests",
        },
        {
          title: "Downloads",
          url: "/resources/downloads",
        },
      ],
    },
    {
      title: "Community",
      url: "/community",
      icon: Users,
      items: [
        {
          title: "Discussion Forums",
          url: "/community/forums",
        },
        {
          title: "Study Groups",
          url: "/community/groups",
        },
        {
          title: "Events",
          url: "/community/events",
        },
      ],
    },
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
      items: [
        {
          title: "Help Center",
          url: "/support/help",
        },
        {
          title: "Contact Tutors",
          url: "/support/tutors",
        },
        {
          title: "FAQs",
          url: "/support/faqs",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      items: [
        {
          title: "Account",
          url: "/settings/account",
        },
        {
          title: "Preferences",
          url: "/settings/preferences",
        },
        {
          title: "Notifications",
          url: "/settings/notifications",
        },
        {
          title: "Billing",
          url: "/settings/billing",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">EduLearn</span>
        </div>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

