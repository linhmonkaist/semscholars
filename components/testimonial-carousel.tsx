"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useResponsive } from "@/hooks/use-responsive"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Jessica Thompson",
    role: "High School Student",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    text: "The tutoring I received helped me improve my math grade from a C to an A-. My tutor was patient and explained concepts in ways that made sense to me.",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Parent",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    text: "My son struggled with reading comprehension for years. After just three months with EduLearn, his confidence has soared and his reading skills have improved dramatically.",
  },
  {
    id: 3,
    name: "David Chen",
    role: "College Student",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 4,
    text: "The SAT prep course was exactly what I needed. The strategies they taught helped me raise my score by 200 points and get into my dream school.",
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "Adult Learner",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    text: "As someone returning to education after 15 years, I was nervous about taking online courses. The support from EduLearn made the transition smooth and enjoyable.",
  },
  {
    id: 5,
    name: "James Wilson",
    role: "High School Student",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    text: "The physics course helped me understand concepts I had struggled with for years. The interactive simulations and clear explanations made all the difference.",
  },
  {
    id: 6,
    name: "Emma Garcia",
    role: "Parent",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    text: "My daughter's confidence in science has grown tremendously since working with her EduLearn tutor. The personalized approach really works!",
  },
  {
    id: 7,
    name: "Robert Johnson",
    role: "Middle School Student",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 4,
    text: "The writing workshop helped me improve my essays and creative writing. I'm now getting consistent A's on my English assignments.",
  },
  {
    id: 8,
    name: "Lisa Patel",
    role: "Parent",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    text: "Finding a program that could challenge my gifted child was difficult until we discovered EduLearn. The advanced courses have kept her engaged and learning.",
  },
]

export function TestimonialCarousel() {
  const [currentPage, setCurrentPage] = React.useState(0)
  const [autoplay, setAutoplay] = React.useState(true)
  const { isMobile, isTablet, isDesktop, isLargeDesktop } = useResponsive()

  // Determine how many items to show based on screen size
  const visibleItems = React.useMemo(() => {
    if (isMobile) return 1
    if (isTablet) return 2
    if (isDesktop && !isLargeDesktop) return 3
    return 4 // isLargeDesktop
  }, [isMobile, isTablet, isDesktop, isLargeDesktop])

  // Calculate total pages
  const totalPages = Math.ceil(testimonials.length / visibleItems)

  // Handle navigation
  const nextPage = React.useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }, [totalPages])

  const prevPage = React.useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }, [totalPages])

  // Autoplay functionality
  React.useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextPage()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, nextPage])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  // Get current testimonials
  const currentTestimonials = React.useMemo(() => {
    const startIndex = currentPage * visibleItems
    return testimonials.slice(startIndex, startIndex + visibleItems)
  }, [currentPage, visibleItems])

  // Reset current page when visible items change to avoid empty pages
  React.useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0)
    }
  }, [visibleItems, totalPages, currentPage])

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Testimonials */}
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center mt-8 gap-4">
        <Button variant="outline" size="icon" className="rounded-full" onClick={prevPage}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className={cn(
                "h-2 w-2 rounded-full p-0",
                currentPage === index ? "bg-primary" : "bg-muted-foreground/20 hover:bg-muted-foreground/40",
              )}
              onClick={() => setCurrentPage(index)}
            >
              <span className="sr-only">Page {index + 1}</span>
            </Button>
          ))}
        </div>

        <Button variant="outline" size="icon" className="rounded-full" onClick={nextPage}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn("h-4 w-4", i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-muted")}
            />
          ))}
        </div>

        <p className="text-sm text-muted-foreground flex-grow mb-4">"{testimonial.text}"</p>

        <div className="flex items-center gap-3 mt-auto pt-4 border-t">
          <Avatar className="h-10 w-10">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>
              {testimonial.name.charAt(0)}
              {testimonial.name.split(" ")[1]?.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

