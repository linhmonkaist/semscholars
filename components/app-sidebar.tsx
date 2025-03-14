"use client"

import type * as React from "react"
import Image from "next/image"
import {LucideIcon } from "lucide-react"

import { NavMain } from "./nav-main"
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"
import Link from "next/link"

export type SidebarItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive: boolean;
  items?: { title: string; url: string }[];
};

export function AppSidebar({ data, ...props }: { data: SidebarItem[] } &React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link href="/">
          <div className="flex items-center gap-2 px-4 py-2">
            <Image src="/assets/img/icon.png" alt="Logo" width={24} height={24} className="h-6 w-6" />
            <span className="text-xl font-bold">SEM Scholars</span>
          </div>
        </Link>
        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

