"use client"
// Nav bar of previous version, need to use later on
import * as React from "react"
import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  Library,
  LifeBuoy,
  Menu,
  MessageSquare,
  ScrollText,
  Settings,
  Users,
  User,
  LogOut,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import Link from "next/link"

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
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">EduLearn</span>
              </div>
              <div className="my-4 px-2">
                <Input placeholder="Search courses, resources..." />
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
                            href={subItem.url}
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
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 rounded-lg border p-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={data.user.avatar} alt={data.user.name} />
                    <AvatarFallback>
                      {data.user.name.charAt(0)}
                      {data.user.name.split(" ")[1]?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{data.user.name}</p>
                    <p className="text-xs text-muted-foreground">{data.user.role}</p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">EduLearn</span>
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
                          <ListItem key={subItem.title} title={subItem.title} href={subItem.url} />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink href={item.url} className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search and User Menu */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex">
            <Input placeholder="Search..." className="w-[200px] lg:w-[300px]" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={data.user.avatar} alt={data.user.name} />
                  <AvatarFallback>
                    {data.user.name.charAt(0)}
                    {data.user.name.split(" ")[1]?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{data.user.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">{data.user.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ScrollText className="mr-2 h-4 w-4" />
                  <span>My Courses</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Messages</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
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

