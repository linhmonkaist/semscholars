"use client";

import * as React from "react"
import Image from 'next/image';

import {
  BookOpen,
  LayoutDashboard,
  Library,
  LifeBuoy,
  Menu,
  Phone,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link";

// This is sample data for an educational platform
const data = {
  navMain: [
    {
      title: "Trang chủ",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Dịch vụ",
      url: "/courses",
      icon: BookOpen,
    },
    {
      title: "Đội ngũ",
      url: "/team",
      icon: Library,
    },
    {
      title: "Thành tích",
      url: "/mentee",
      icon: Users,
    },
    {
      title: "Về chúng tôi",
      url: "/about",
      icon: LifeBuoy,
    },
    {
      title: "Liên hệ",
      url: "/contact",
      icon: Phone,
    },
  ],
}

export function TopNavbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      {/* Changed from "container flex h-16 items-center justify-between" to improve responsiveness */}
      <div className="w-full px-4 md:px-6 lg:px-8 max-w-full mx-auto flex h-16 items-center justify-between flex-wrap">
        {/* Logo and Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <SheetTitle className="text-left"></SheetTitle>
              <div className="flex items-center gap-2 px-2 py-4">
                <Image src="/assets/img/icon.png" alt="Logo" width={24} height={24} className="h-6 w-6" />
                <span className="text-xl font-bold">SEM Scholars</span>
              </div>
              <div className="my-4 px-2">
              </div>
              <nav className="flex flex-col gap-4 px-2">
                {data.navMain.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <Link href={item.url} onClick={() => setIsOpen(false)}>
                    <div className="flex items-center gap-2 font-medium">
                      {item.icon && <item.icon className="h-5 w-5" />}
                      <span>{item.title}</span>
                    </div>
                    </Link>
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/assets/img/icon.png" alt="Logo" width={24} height={24} className="h-6 w-6" />
            <span className="text-xl font-bold">SEM Scholars</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {data.navMain.map((item) => (
              <NavigationMenuItem key={item.title}>
                <Link href={`${item.url}`} className={navigationMenuTriggerStyle()}>
                  {item.title}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}

