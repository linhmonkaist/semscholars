import Link from "next/link"

import { PacketGroupSection } from "@/components/courses/packet-group-section"
import { Button } from "@/components/ui/button"
import { applicationFormURL } from "@/app/globalVariables"
import { getPacketsByGroup, packetGroups } from "@/app/courses/packets-data"

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6">
      <section className="rounded-xl border bg-background p-5 md:p-8">
        <div className="mx-auto max-w-4xl space-y-5">
          <h1 className="text-3xl font-bold text-slate-900">Tổng quan các mentoring packet của SEM Scholars</h1>
          <p className="text-base text-slate-600 md:text-lg">
            SEM Scholars cung cấp hệ sinh thái mentoring toàn diện dành cho học sinh, sinh viên Việt Nam mong muốn
            chinh phục học bổng quốc tế. Hiện tại SEM cung cấp 5 nhóm chương trình mentor chính: <strong>Gói lẻ</strong>,{" "}
            <strong>Gói focus</strong>, <strong>Gói combo</strong>,{" "}
            <strong>Gói Học bổng ngắn hạn và ngoại khoá</strong>, <strong>Gói dịch vụ giấy tờ và apply</strong>. Các
            gói hỗ trợ đều do các mentor giàu kinh nghiệm, đã thành công trong việc săn học bổng và du học, trực tiếp
            hướng dẫn.
          </p>

          <div className="rounded-lg bg-slate-50 p-4">
            <p className="text-sm text-slate-600">
              Cần tư vấn gói mentoring phù hợp với profile của bạn? Đội ngũ SEM sẽ hỗ trợ đề xuất lộ trình cá nhân hóa
              theo mục tiêu học bổng.
            </p>
            <Button asChild className="mt-4 w-full md:w-auto">
              <Link href={applicationFormURL} target="_blank">
                Đăng ký tư vấn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {packetGroups.map((group) => (
        <PacketGroupSection key={group.key} group={group} packets={getPacketsByGroup(group.key)} />
      ))}
    </main>
  )
}

