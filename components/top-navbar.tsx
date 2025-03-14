"use client";

import * as React from "react"
import Image from 'next/image';

import {
  BookOpen,
  LayoutDashboard,
  Library,
  LifeBuoy,
  Menu,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
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
      items: [
        {
          title: "Tất cả dịch vụ",
          url: "/courses",
        },
        {
          title: "Chương trình mentor lẻ",
          url: "/courses/single",
        },
        {
          title: "Chương trình mentor A-Z",
          url: "/courses/multi",
        },
        {
          title: "Câu hỏi thường gặp",
          url: "/courses/questions",
        },
      ],
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
      title: "Hỗ trợ",
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
      title: "Về chúng tôi",
      url: "/contact",
      icon: LifeBuoy,
    },
    {
      title: "Liên hệ",
      url: "/contact",
      icon: LifeBuoy,
    },
  ],
}

export function TopNavbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      {/* Changed from "container flex h-16 items-center justify-between" to improve responsiveness */}
      <div className="w-full px-4 md:px-6 lg:px-8 max-w-full mx-auto flex h-16 items-center justify-between flex-wrap">
        {/* Logo and Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <div className="flex items-center gap-2 px-2 py-4">
                <Image src="./assets/img/icon.png" alt="Logo" width={24} height={24} className="h-6 w-6" />
                <span className="text-xl font-bold">SEM Scholars</span>
              </div>
              <div className="my-4 px-2">
              </div>
              <nav className="flex flex-col gap-4 px-2">
                {data.navMain.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <div className="flex items-center gap-2 font-medium">
                      {item.icon && <item.icon className="h-5 w-5" />}
                      <span>{item.title}</span>
                    </div>
                    {item.items && (
                      <div className="ml-8 flex flex-col gap-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={`${subItem.url}`}
                            className="text-muted-foreground hover:text-foreground"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="./assets/img/icon.png" alt="Logo" width={24} height={24} className="h-6 w-6" />
            <span className="text-xl font-bold">SEM Scholars</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {data.navMain.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.items ? (
                  <>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.items.map((subItem) => (
                          <ListItem key={subItem.title} title={subItem.title} href={`${subItem.url}`} />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={`${item.url}`} className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            href={props.href || "#"}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

