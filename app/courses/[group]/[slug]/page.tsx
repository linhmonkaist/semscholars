import Link from "next/link"
import { notFound } from "next/navigation"
import { CheckCircle2, Clock3, Wallet } from "lucide-react"

import {
  getGroupByKey,
  getPacketByGroupAndSlug,
  groupBenefits,
  groupRoadmaps,
  mentoringPackets,
} from "@/app/courses/packets-data"
import { RelatedPackets } from "@/components/courses/related-packets"
import { MenteeScholarshipCarousel } from "@/components/courses/mentee-scholarship-carousel"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { applicationFormURL } from "@/app/globalVariables"

type PacketDetailPageProps = {
  params: Promise<{
    group: string
    slug: string
  }>
}

const groupBadgeStyles = {
  single: "bg-sky-100 text-sky-800",
  focus: "bg-amber-100 text-amber-800",
  combo: "bg-violet-100 text-violet-800",
  shortterm: "bg-emerald-100 text-emerald-800",
  "yellow-stamp": "bg-rose-100 text-rose-800",
} as const

const semScholarsFacebookURL = "https://www.facebook.com/SEMScholarsTeam"

export function generateStaticParams() {
  return mentoringPackets.map((packet) => ({
    group: packet.group,
    slug: packet.slug,
  }))
}

export default async function PacketDetailPage({ params }: PacketDetailPageProps) {
  const resolvedParams = await params
  const packet = getPacketByGroupAndSlug(resolvedParams.group, resolvedParams.slug)
  const group = getGroupByKey(resolvedParams.group)

  if (!packet || !group) {
    notFound()
  }

  const recommendations = mentoringPackets.filter((item) => item.id !== packet.id)
  const requiresFacebookConsultation = packet.group === "shortterm" || packet.group === "yellow-stamp"
  const ctaHref = requiresFacebookConsultation ? semScholarsFacebookURL : applicationFormURL
  const ctaLabel = requiresFacebookConsultation ? "Nhận tư vấn qua Facebook trước" : "Đăng ký mentoring packet này"

  return (
    <main className="mx-auto w-full space-y-6 bg-slate-50 px-4 py-8 md:px-6 md:py-10 xl:px-4">
      <section className="grid grid-cols-1 gap-5 xl:grid-cols-[280px_minmax(0,1fr)_280px]">
        <aside className="space-y-4 rounded-2xl border border-slate-200 bg-slate-100/80 p-4 md:p-5 xl:sticky xl:top-24 xl:h-fit">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-slate-700">Feedback từ mentee</h2>
            <p className="text-xs text-slate-500">Câu chuyện thực tế từ mentee SEM Scholars.</p>
          </div>
          <TestimonialCarousel singleItem autoSlideMs={4500} />
        </aside>

        <section className="rounded-2xl border border-red-100 bg-white p-5 shadow-lg ring-1 ring-red-50 md:p-8">
          <p className="text-sm text-slate-600">
            <Link href="/courses" className="hover:text-foreground">
              Tất cả gói
            </Link>{" "}
            / {group.title}
          </p>
          <div className="mt-3 space-y-5">
            <div className="space-y-3">
              <span
                className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${groupBadgeStyles[group.key]}`}
              >
                {group.title}
              </span>
              <h1 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">{packet.title}</h1>
              <p className="text-slate-600 md:text-lg">{packet.longDescription}</p>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              <Card className="border-slate-100 bg-slate-50">
                <CardContent className="flex items-center gap-3 p-4">
                  <Wallet className="h-5 w-5 text-red-700" />
                  <div>
                    <p className="text-xs text-slate-500">Chi phí</p>
                    <p className="font-bold text-red-700">{packet.price}</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-100 bg-slate-50">
                <CardContent className="flex items-center gap-3 p-4">
                  <Clock3 className="h-5 w-5 text-red-700" />
                  <div>
                    <p className="text-xs text-slate-500">Thời lượng</p>
                    <p className="font-bold text-slate-900">{packet.length}</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-100 bg-slate-50">
                <CardContent className="space-y-1 p-4">
                  <p className="text-xs text-slate-500">Hình thức</p>
                  <p className="font-bold text-slate-900">{packet.format}</p>
                  <p className="text-xs text-slate-500">{packet.payment}</p>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 md:p-5">
              <h2 className="mb-3 text-lg font-bold text-slate-900">Nội dung hỗ trợ nổi bật</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                {packet.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-700" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {packet.paymentDetails?.length ? (
              <section className="rounded-xl border border-slate-100 bg-white p-4 md:p-5">
                <h2 className="mb-3 text-lg font-bold text-slate-900">Mô tả thanh toán</h2>
                <ul className="space-y-2 text-sm text-slate-700">
                  {packet.paymentDetails.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-700" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <section className="rounded-xl border border-slate-100 bg-white p-4 md:p-5">
                <h2 className="mb-3 text-lg font-bold text-slate-900">Lộ trình chương trình mentor</h2>
                <ol className="space-y-2 text-sm text-slate-700">
                  {groupRoadmaps[packet.group].map((step) => (
                    <li key={step} className="flex gap-2">
                      <span className="mt-0.5 h-2 w-2 rounded-full bg-red-700" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="rounded-xl border border-slate-100 bg-white p-4 md:p-5">
                <h2 className="mb-3 text-lg font-bold text-slate-900">Quyền lợi</h2>
                <ul className="space-y-2 text-sm text-slate-700">
                  {groupBenefits[packet.group].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-700" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="flex justify-center">
              <Button asChild className="w-full bg-red-700 hover:bg-red-800 md:w-auto">
                <Link href={ctaHref} target="_blank">
                  {ctaLabel}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <aside className="space-y-4 rounded-2xl border border-slate-200 bg-slate-100/80 p-4 md:p-5 xl:sticky xl:top-24 xl:h-fit">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-slate-700">Hall of Fame</h2>
            <p className="text-xs text-slate-500">Khám phá hồ sơ thành công tiêu biểu của SEM.</p>
          </div>
          <MenteeScholarshipCarousel />
        </aside>
      </section>

      <RelatedPackets packets={recommendations} />
    </main>
  )
}
