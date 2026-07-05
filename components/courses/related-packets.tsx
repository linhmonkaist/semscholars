"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { type MentoringPacket } from "@/app/courses/packets-data"
import { PacketCard } from "@/components/courses/packet-card"
import { Button } from "@/components/ui/button"

type RelatedPacketsProps = {
  packets: MentoringPacket[]
}

export function RelatedPackets({ packets }: RelatedPacketsProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [autoplay, setAutoplay] = React.useState(true)
  const totalPages = packets.length

  React.useEffect(() => {
    if (!autoplay || totalPages <= 1) {
      return
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages)
    }, 4500)

    return () => clearInterval(timer)
  }, [autoplay, totalPages])

  if (!totalPages) {
    return null
  }

  const currentPacket = packets[currentIndex % totalPages]

  return (
    <section
      className="space-y-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm md:p-6"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-slate-900">Gợi ý các gói khác</h2>
        <p className="text-sm text-slate-600">Lướt để khám phá toàn bộ mentoring packet phù hợp với mục tiêu của bạn.</p>
      </div>
      <PacketCard packet={currentPacket} href={`/courses/${currentPacket.group}/${currentPacket.slug}`} />
      <div className="flex items-center justify-center gap-3">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="rounded-full border-slate-300"
          onClick={() => setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous packet</span>
        </Button>
        <span className="text-sm text-muted-foreground">
          {(currentIndex % totalPages) + 1} / {totalPages}
        </span>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="rounded-full border-slate-300"
          onClick={() => setCurrentIndex((prev) => (prev + 1) % totalPages)}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next packet</span>
        </Button>
      </div>
    </section>
  )
}
