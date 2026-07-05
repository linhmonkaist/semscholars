"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, GraduationCap, Trophy } from "lucide-react"

import { mentees } from "@/app/mentee/mentees"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type FeaturedMentee = {
  id: string
  name: string
  scholarship: string
  university: string
  mentor: string
}

const featuredMentees: FeaturedMentee[] = mentees
  .filter((item) => item.scholarships.length > 0 && item.universities.length > 0)
  .map((item) => ({
    id: item.id,
    name: item.name,
    scholarship: item.scholarships[0] || "Scholarship",
    university: item.universities[0] || "University",
    mentor: item.mentors[0] || "SEM Mentor",
  }))
  .reverse()

export function MenteeScholarshipCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [autoplay, setAutoplay] = React.useState(true)
  const totalPages = featuredMentees.length

  const currentMentee = featuredMentees[currentIndex]

  React.useEffect(() => {
    if (currentIndex >= totalPages) {
      setCurrentIndex(0)
    }
  }, [currentIndex, totalPages])

  React.useEffect(() => {
    if (!autoplay || totalPages <= 1) {
      return
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages)
    }, 4500)

    return () => clearInterval(timer)
  }, [autoplay, totalPages])

  if (!featuredMentees.length) {
    return null
  }

  return (
    <div className="space-y-4" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
      <Link href="/mentee" className="block h-full">
        <Card className="h-full cursor-pointer transition-shadow hover:shadow-md">
          <CardContent className="space-y-3 p-4">
            <h3 className="font-semibold">{currentMentee.name}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Trophy className="mt-0.5 h-4 w-4 text-primary" />
                <span>{currentMentee.scholarship}</span>
              </div>
              <div className="flex items-start gap-2">
                <GraduationCap className="mt-0.5 h-4 w-4 text-primary" />
                <span>{currentMentee.university}</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Mentor: {currentMentee.mentor}</p>
          </CardContent>
        </Card>
      </Link>

      <div className="flex items-center justify-center gap-3">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous mentees</span>
        </Button>
        <span className="text-sm text-muted-foreground">
          {currentIndex + 1} / {totalPages}
        </span>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => setCurrentIndex((prev) => (prev + 1) % totalPages)}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next mentees</span>
        </Button>
      </div>
    </div>
  )
}
