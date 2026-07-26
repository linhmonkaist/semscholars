import Link from "next/link"
import { notFound } from "next/navigation"

import menteesData from "@/public/data/mentees.json"
import scholarshipsData from "@/public/data/scholarships.json"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { type Scholarship } from "@/app/scholarships/types"

type ScholarshipDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

const scholarships = scholarshipsData as Scholarship[]
const mentees = menteesData as {
  id: string
  scholarships: string[]
  universities: string[]
}[]
const semServiceRegistrationURL = "https://forms.gle/vb5613wWEQbNrDnU6"

export function generateStaticParams() {
  return scholarships.map((scholarship) => ({
    slug: scholarship.slug,
  }))
}

function formatRoughMenteeCount(count: number) {
  if (count < 5) {
    return `${count}`
  }

  const roundedDown = Math.floor(count / 5) * 5
  return `${roundedDown}+`
}

function levelToVietnamese(level: Scholarship["levels"][number]) {
  const mapping: Record<Scholarship["levels"][number], string> = {
    Bachelor: "Đại học",
    Master: "Thạc sĩ",
    PhD: "Tiến sĩ",
    Exchange: "Trao đổi",
    "Short-term": "Ngắn hạn",
  }

  return mapping[level]
}

function coverageTypeToVietnamese(coverageType: string) {
  const mapping: Record<string, string> = {
    "full-ride": "Học bổng toàn phần (full-ride)",
    "full-tuition": "Học bổng 100% học phí (full tuition)",
    "partial-tuition": "Học bổng bán phần (partial tuition)",
    admission: "Hỗ trợ đầu vào/tuyển sinh (admission)",
  }

  return mapping[coverageType] || coverageType
}

function calculateMatchedMenteeCount(scholarship: Scholarship) {
  if (!scholarship.menteeOutcomes) {
    return 0
  }

  const keywords = scholarship.menteeOutcomes.matchingScholarshipKeywords.map((keyword) => keyword.toLowerCase())
  const universities = scholarship.menteeOutcomes.matchingUniversities?.map((university) => university.toLowerCase()) || []
  const matchingMode =
    scholarship.menteeOutcomes.matchingMode ||
    (keywords.length && universities.length
      ? "both"
      : keywords.length
        ? "scholarshipKeywordsOnly"
        : universities.length
          ? "matchingUniversitiesOnly"
          : "both")

  return mentees.filter((mentee) => {
    const scholarshipMatched =
      keywords.length > 0
        ? mentee.scholarships.some((value) => keywords.some((keyword) => value.toLowerCase().includes(keyword)))
        : false
    const universityMatched =
      universities.length > 0
        ? mentee.universities.some((value) => universities.includes(value.toLowerCase()))
        : false

    if (matchingMode === "scholarshipKeywordsOnly") {
      return scholarshipMatched
    }

    if (matchingMode === "matchingUniversitiesOnly") {
      return universityMatched
    }

    if (matchingMode === "either") {
      return scholarshipMatched || universityMatched
    }

    const keywordCondition = keywords.length ? scholarshipMatched : true
    const universityCondition = universities.length ? universityMatched : true
    return keywordCondition && universityCondition
  }).length
}

export default async function ScholarshipDetailPage({ params }: ScholarshipDetailPageProps) {
  const { slug } = await params
  const scholarship = scholarships.find((item) => item.slug === slug)

  if (!scholarship) {
    notFound()
  }

  const relatedFields = Array.from(
    new Set([...(scholarship.filtering?.fields || []), ...(scholarship.fields || [])])
  )
  const officialWebsiteLink = scholarship.application.officialGuideLinks?.[0]
  const manualMenteeCount = scholarship.menteeOutcomes?.displayMenteeCount
  const menteeResultCount =
    typeof manualMenteeCount === "number" && Number.isFinite(manualMenteeCount) && manualMenteeCount >= 0
      ? `${manualMenteeCount}+`
      : formatRoughMenteeCount(calculateMatchedMenteeCount(scholarship))

  return (
    <main className="mx-auto w-full max-w-6xl space-y-6 p-4 md:p-6">
      <section className="space-y-4 rounded-xl border bg-background p-5 md:p-8">
        <Link href="/scholarships" className="text-sm text-muted-foreground hover:text-foreground">
          ← Quay lại trang khám phá học bổng
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          {(scholarship.filtering?.countries?.length
            ? scholarship.filtering.countries
            : scholarship.country
              ? [scholarship.country]
              : []
          ).map((country) => (
            <Badge key={country} variant="outline">
              {country === "Korea" ? "Hàn Quốc" : country}
            </Badge>
          ))}
          {scholarship.levels.map((level) => (
            <Badge key={level} variant="secondary">
              {levelToVietnamese(level)}
            </Badge>
          ))}
          {scholarship.filtering.coverageTypes.map((coverageType) => (
            <Badge key={coverageType} variant="secondary">
              {coverageTypeToVietnamese(coverageType)}
            </Badge>
          ))}
        </div>
        <h1 className="text-3xl font-bold text-slate-900">{scholarship.title}</h1>
        <p className="text-slate-600">Đơn vị cấp học bổng: {scholarship.provider}</p>
        {scholarship.relatedInformation?.comment ? (
          <p className="text-slate-700">{scholarship.relatedInformation.comment}</p>
        ) : null}
      </section>

      <section className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Nội dung học bổng</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">Lĩnh vực phù hợp:</span> {relatedFields.join(", ")}
            </p>
            {scholarship.universities?.length ? (
              <p>
                <span className="font-semibold">Trường liên quan:</span> {scholarship.universities.join(", ")}
              </p>
            ) : null}
            <div>
              <p className="font-semibold">Điều kiện:</p>
              {scholarship.eligibility.length ? (
                <ul className="ml-5 list-disc space-y-1">
                  {scholarship.eligibility.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : scholarship.content?.eligibility ? (
                <ul className="ml-5 list-disc space-y-1">
                  <li>{scholarship.content.eligibility}</li>
                </ul>
              ) : (
                <p>Đang cập nhật</p>
              )}
            </div>
            <div>
              <p className="font-semibold">Mức hỗ trợ:</p>
              {scholarship.coverage.length ? (
                <ul className="ml-5 list-disc space-y-1">
                  {scholarship.coverage.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : scholarship.content?.coverage ? (
                <ul className="ml-5 list-disc space-y-1">
                  <li>{scholarship.content.coverage}</li>
                </ul>
              ) : (
                <p>Đang cập nhật</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Các kỳ tuyển sinh</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <ul className="ml-5 list-disc space-y-1">
              {(scholarship.intakes.length ? scholarship.intakes : scholarship.content?.intakes || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Hồ sơ ứng tuyển</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            {scholarship.application.track?.length ? (
              <p>
                <span className="font-semibold">Phương thức tuyển sinh:</span>{" "}
                {scholarship.application.track.join(", ")}
              </p>
            ) : null}
            <div>
              <p className="font-semibold">Giấy tờ cần chuẩn bị:</p>
              <ul className="ml-5 list-disc space-y-1">
                {scholarship.application.requiredDocuments.map((document) => (
                  <li key={document}>{document}</li>
                ))}
              </ul>
            </div>
            {scholarship.application.applicationFee ? (
              <p>
                <span className="font-semibold">Phí nộp hồ sơ:</span> {scholarship.application.applicationFee}
              </p>
            ) : null}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Thông tin liên quan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p>
              <span className="font-semibold">Kết quả mentee SEM:</span>{" "}
              {menteeResultCount} mentee đã đạt học bổng này
            </p>
            {scholarship.menteeOutcomes?.comment ? (
              <p>
                <span className="font-semibold">Ghi chú mentee:</span> {scholarship.menteeOutcomes.comment}
              </p>
            ) : null}
            {scholarship.mentoringRecommendation ? (
              <>
                <p>
                  <span className="font-semibold">Gói mentor phù hợp:</span>{" "}
                  {scholarship.mentoringRecommendation.packetName}
                </p>
                <p>
                  <span className="font-semibold">Thời điểm nên đăng ký:</span>{" "}
                  {scholarship.mentoringRecommendation.bestRegistrationTime}
                </p>
                {scholarship.mentoringRecommendation.comment ? (
                  <p>
                    <span className="font-semibold">Lưu ý:</span> {scholarship.mentoringRecommendation.comment}
                  </p>
                ) : null}
              </>
            ) : null}
            <div className="flex flex-wrap gap-2">
              {officialWebsiteLink ? (
                <Button variant="outline" asChild>
                  <Link href={officialWebsiteLink} target="_blank" rel="noreferrer">
                    Website chính thức
                  </Link>
                </Button>
              ) : (
                <Button variant="outline" disabled>
                  Website chính thức (đang cập nhật)
                </Button>
              )}
              <Button asChild>
                <Link href={semServiceRegistrationURL} target="_blank" rel="noreferrer">
                  Form đăng ký dịch vụ
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
