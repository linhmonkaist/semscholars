import Link from "next/link"
import { ArrowRight, Clock3, Wallet } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type MentoringPacket } from "@/app/courses/packets-data"

type PacketCardProps = {
  packet: MentoringPacket
  href: string
}

export function PacketCard({ packet, href }: PacketCardProps) {
  return (
    <Card className="h-full border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <CardHeader className="space-y-3">
        <CardTitle className="text-xl font-extrabold leading-tight text-slate-900 md:text-2xl">{packet.title}</CardTitle>
        <CardDescription className="min-h-[3.75rem] text-sm leading-relaxed text-slate-600">{packet.shortDescription}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3 text-sm text-slate-700">
        <div className="flex items-center gap-2 font-semibold">
          <Wallet className="h-4 w-4 text-red-700" />
          <span className="text-red-700">{packet.price}</span>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <Clock3 className="h-4 w-4 text-red-700" />
          <span>{packet.length}</span>
        </div>
      </CardContent>

      <CardFooter>
        <Link
          href={href}
          className="group inline-flex items-center gap-2 rounded-lg border border-red-600 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
        >
          Xem chi tiết gói
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  )
}
