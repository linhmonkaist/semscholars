import { type PacketGroup, type MentoringPacket } from "@/app/courses/packets-data"
import { PacketCard } from "@/components/courses/packet-card"

type PacketGroupSectionProps = {
  group: PacketGroup
  packets: MentoringPacket[]
}

const groupTitleStyles = {
  single: "bg-sky-100 text-sky-800",
  focus: "bg-amber-100 text-amber-800",
  combo: "bg-violet-100 text-violet-800",
  shortterm: "bg-emerald-100 text-emerald-800",
  "yellow-stamp": "bg-rose-100 text-rose-800",
} as const

export function PacketGroupSection({ group, packets }: PacketGroupSectionProps) {
  return (
    <section id={group.key} className="space-y-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 md:p-6">
      <div className="space-y-2">
        <h2
          className={`inline-flex rounded-full px-4 py-1 text-2xl font-bold ${groupTitleStyles[group.key]}`}
        >
          {group.title}
        </h2>
        <p className="text-slate-600">{group.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {packets.map((packet) => (
          <PacketCard key={packet.id} packet={packet} href={`/courses/${packet.group}/${packet.slug}`} />
        ))}
      </div>
    </section>
  )
}
