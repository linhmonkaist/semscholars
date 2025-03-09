"use client"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { data } from "../sidebar-data"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card"
import { Badge, Clock, Calendar, Users, BookOpen, CheckCircle2, DollarSign, CheckIcon } from "lucide-react"
import Footer from "@/components/home-section/Footer"


export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar data={data}/>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage></BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          
        </div> */}
        <div className="flex flex-1 flex-col gap-6 p-6">
              {/* Simple Course Overview Block */}
              <div className="rounded-xl bg-background p-8 shadow-sm border">
                <div className="max-w-3xl mx-auto">
                  {/* <Badge className="mb-4">Web Development</Badge> */}
                  <h1 className="text-3xl font-bold mb-4">Web Development Fundamentals</h1>

                  <p className="text-lg text-muted-foreground mb-6">
                    A comprehensive introduction to modern web development, covering HTML, CSS, JavaScript, and
                    responsive design principles. Perfect for beginners looking to start their journey in web
                    development.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <Clock className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Duration</p>
                        <p className="text-sm text-muted-foreground">8 Weeks</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <Calendar className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Format</p>
                        <p className="text-sm text-muted-foreground">Self-paced</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <BookOpen className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Lessons</p>
                        <p className="text-sm text-muted-foreground">24 Modules</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <DollarSign className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Price</p>
                        <p className="text-sm text-muted-foreground">$99.99</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-6 rounded-lg bg-muted">
                    <div>
                      <h3 className="text-xl font-bold mb-1">Ready to start learning?</h3>
                      <p className="text-muted-foreground">Enroll now and begin your web development journey today.</p>
                    </div>
                    <Button size="lg" className="w-full md:w-auto">
                      Register for Course
                    </Button>
                  </div>
                </div>
              </div>

              {/* Course Syllabus Preview */}
              <div className="rounded-xl bg-background p-8 shadow-sm border">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                  <p className="mb-6">
                    This course is designed to take you from a complete beginner to being able to create fully
                    functional and responsive websites. You'll learn through a combination of video lectures, practical
                    exercises, and real-world projects.
                  </p>

                  <h3 className="text-xl font-bold mb-3">What you'll learn:</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <CheckIcon className="h-3 w-3 text-primary" />
                      </div>
                      <span>HTML5 structure and semantic elements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <CheckIcon className="h-3 w-3 text-primary" />
                      </div>
                      <span>CSS styling, layouts, and responsive design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <CheckIcon className="h-3 w-3 text-primary" />
                      </div>
                      <span>JavaScript fundamentals and DOM manipulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <CheckIcon className="h-3 w-3 text-primary" />
                      </div>
                      <span>Building responsive websites from scratch</span>
                    </li>
                  </ul>

                  <Button variant="outline" className="w-full">
                    View Full Syllabus
                  </Button>
                </div>
              </div>
            </div>
      </SidebarInset>
    </SidebarProvider>

  )
}

