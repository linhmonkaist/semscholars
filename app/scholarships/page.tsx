"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { ChevronDown, Search } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { type Scholarship } from "./types"

const monthOptions = [
  { value: "1", label: "Tháng 1" },
  { value: "2", label: "Tháng 2" },
  { value: "3", label: "Tháng 3" },
  { value: "4", label: "Tháng 4" },
  { value: "5", label: "Tháng 5" },
  { value: "6", label: "Tháng 6" },
  { value: "7", label: "Tháng 7" },
  { value: "8", label: "Tháng 8" },
  { value: "9", label: "Tháng 9" },
  { value: "10", label: "Tháng 10" },
  { value: "11", label: "Tháng 11" },
  { value: "12", label: "Tháng 12" },
]

function getNearestDeadlineMonth(deadlineMonths: number[]) {
  if (!deadlineMonths.length) {
    return null
  }
  const currentMonth = new Date().getMonth() + 1
  const sortedByProximity = [...deadlineMonths].sort((a, b) => {
    const distanceA = (a - currentMonth + 12) % 12
    const distanceB = (b - currentMonth + 12) % 12
    return distanceA - distanceB
  })

  return sortedByProximity[0] || null
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

const scholarshipTypeOptions = [
  { value: "full-ride", label: "Học bổng toàn phần (full-ride)" },
  { value: "full-tuition", label: "Học bổng 100% học phí (full tuition)" },
  { value: "partial-tuition", label: "Học bổng bán phần (partial tuition)" },
  { value: "admission", label: "Hỗ trợ đầu vào/tuyển sinh (admission)" },
]

function inferCoverageTypes(scholarship: Scholarship) {
  const configuredTypes = scholarship.filtering?.coverageTypes || []
  return configuredTypes
}

function getCountries(scholarship: Scholarship) {
  if (scholarship.filtering?.countries?.length) {
    return scholarship.filtering.countries
  }

  if (scholarship.country) {
    return [scholarship.country]
  }

  return []
}

function getContinents(scholarship: Scholarship) {
  if (scholarship.filtering?.continents?.length) {
    return scholarship.filtering.continents
  }

  const countries = getCountries(scholarship)
  if (countries.length) {
    return ["Châu Á"]
  }

  return []
}

export default function ScholarshipsPage() {
  const [scholarships, setScholarships] = useState<Scholarship[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedMonths, setSelectedMonths] = useState<string[]>([])
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])
  const [selectedContinents, setSelectedContinents] = useState<string[]>([])
  const [selectedCoverageTypes, setSelectedCoverageTypes] = useState<string[]>([])
  const [selectedFields, setSelectedFields] = useState<string[]>([])

  useEffect(() => {
    let cancelled = false

    async function loadScholarships() {
      try {
        const response = await fetch("/data/scholarships.json")
        if (!response.ok) {
          throw new Error("Failed to load scholarships")
        }

        const data = (await response.json()) as Scholarship[]
        if (!cancelled) {
          setScholarships(data)
        }
      } catch {
        if (!cancelled) {
          setScholarships([])
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    loadScholarships()

    return () => {
      cancelled = true
    }
  }, [])

  const countries = useMemo(
    () =>
      Array.from(new Set(scholarships.flatMap((item) => getCountries(item))))
        .filter((value) => value.trim().length > 0)
        .sort((a, b) => a.localeCompare(b, "vi")),
    [scholarships]
  )

  const continents = useMemo(
    () =>
      Array.from(new Set(scholarships.flatMap((item) => getContinents(item))))
        .filter((value) => value.trim().length > 0)
        .sort((a, b) => a.localeCompare(b, "vi")),
    [scholarships]
  )

  const fields = useMemo(
    () =>
      Array.from(
        new Set(
          scholarships.flatMap((item) => item.filtering?.fields || item.fields || [])
        )
      ).sort((a, b) => a.localeCompare(b, "vi")),
    [scholarships]
  )
  const selectedMonthLabels = useMemo(
    () => monthOptions.filter((month) => selectedMonths.includes(month.value)).map((month) => month.label),
    [selectedMonths]
  )
  const selectedFieldLabels = useMemo(
    () => fields.filter((field) => selectedFields.includes(field)),
    [fields, selectedFields]
  )
  const selectedCountryLabels = useMemo(
    () => countries.filter((country) => selectedCountries.includes(country)),
    [countries, selectedCountries]
  )
  const selectedContinentLabels = useMemo(
    () => continents.filter((continent) => selectedContinents.includes(continent)),
    [continents, selectedContinents]
  )
  const selectedCoverageTypeLabels = useMemo(
    () =>
      scholarshipTypeOptions
        .filter((item) => selectedCoverageTypes.includes(item.value))
        .map((item) => item.label),
    [selectedCoverageTypes]
  )

  const filteredScholarships = useMemo(() => {
    return scholarships.filter((scholarship) => {
      const nameMatch = scholarship.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
      const scholarshipCountries = getCountries(scholarship)
      const scholarshipContinents = getContinents(scholarship)
      const scholarshipCoverageTypes = inferCoverageTypes(scholarship)
      const countryMatch =
        selectedCountries.length === 0 ||
        scholarshipCountries.some((country) => selectedCountries.includes(country))
      const continentMatch =
        selectedContinents.length === 0 ||
        scholarshipContinents.some((continent) => selectedContinents.includes(continent))
      const coverageTypeMatch =
        selectedCoverageTypes.length === 0 ||
        scholarshipCoverageTypes.some((coverageType) => selectedCoverageTypes.includes(coverageType))
      const fieldMatch =
        selectedFields.length === 0 ||
        (scholarship.filtering?.fields || scholarship.fields || []).some((field) => selectedFields.includes(field))
      const monthMatch =
        selectedMonths.length === 0 ||
        scholarship.filtering?.deadlineMonths.some((month) => selectedMonths.includes(String(month)))

      return nameMatch && countryMatch && continentMatch && coverageTypeMatch && fieldMatch && monthMatch
    })
  }, [
    scholarships,
    searchQuery,
    selectedCountries,
    selectedContinents,
    selectedCoverageTypes,
    selectedFields,
    selectedMonths,
  ])

  const toggleMonth = (monthValue: string) => {
    setSelectedMonths((prev) =>
      prev.includes(monthValue) ? prev.filter((item) => item !== monthValue) : [...prev, monthValue]
    )
  }
  const toggleField = (fieldValue: string) => {
    setSelectedFields((prev) =>
      prev.includes(fieldValue) ? prev.filter((item) => item !== fieldValue) : [...prev, fieldValue]
    )
  }
  const toggleCountry = (countryValue: string) => {
    setSelectedCountries((prev) =>
      prev.includes(countryValue) ? prev.filter((item) => item !== countryValue) : [...prev, countryValue]
    )
  }
  const toggleContinent = (continentValue: string) => {
    setSelectedContinents((prev) =>
      prev.includes(continentValue) ? prev.filter((item) => item !== continentValue) : [...prev, continentValue]
    )
  }
  const toggleCoverageType = (coverageTypeValue: string) => {
    setSelectedCoverageTypes((prev) =>
      prev.includes(coverageTypeValue)
        ? prev.filter((item) => item !== coverageTypeValue)
        : [...prev, coverageTypeValue]
    )
  }

  const resetFilters = () => {
    setSearchQuery("")
    setSelectedMonths([])
    setSelectedCountries([])
    setSelectedContinents([])
    setSelectedCoverageTypes([])
    setSelectedFields([])
  }

  return (
    <main className="mx-auto w-full max-w-7xl space-y-6 p-4 md:p-6">
      <section className="space-y-6 rounded-xl border bg-background p-5 md:p-8">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Khám phá học bổng</h1>
          <p className="text-slate-600">
            Tìm kiếm học bổng theo tên và lọc theo deadline, quốc gia, châu lục, loại học bổng và lĩnh vực.
          </p>
        </div>
        <div className="mx-auto w-full max-w-3xl rounded-xl border-2 border-primary/30 bg-primary/5 p-4 shadow-sm md:p-5">
          <p className="mb-3 text-center text-sm font-semibold text-primary">Tìm nhanh học bổng phù hợp</p>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Nhập tên học bổng bạn muốn tìm..."
              className="h-12 border-primary/40 bg-background pl-10 text-base shadow-sm"
            />
          </div>
        </div>
      </section>

      <section className="space-y-4 rounded-xl border bg-background p-4 md:p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-10 w-full justify-between font-normal">
                {selectedMonths.length === 0 ? "Tháng deadline" : `Đã chọn ${selectedMonths.length} tháng`}
                <ChevronDown className="h-4 w-4 opacity-60" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64" align="start">
              <DropdownMenuLabel>Chọn tháng deadline</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {monthOptions.map((month) => (
                <DropdownMenuCheckboxItem
                  key={month.value}
                  checked={selectedMonths.includes(month.value)}
                  onSelect={(event) => event.preventDefault()}
                  onCheckedChange={() => toggleMonth(month.value)}
                >
                  {month.label}
                </DropdownMenuCheckboxItem>
              ))}
              {selectedMonthLabels.length > 0 ? (
                <>
                  <DropdownMenuSeparator />
                  <div className="px-2 py-1.5 text-xs text-muted-foreground">
                    {selectedMonthLabels.join(", ")}
                  </div>
                </>
              ) : null}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-10 w-full justify-between font-normal">
                {selectedCountries.length === 0 ? "Quốc gia" : `Đã chọn ${selectedCountries.length} quốc gia`}
                <ChevronDown className="h-4 w-4 opacity-60" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72" align="start">
              <DropdownMenuLabel>Chọn quốc gia (có thể chọn nhiều)</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {countries.map((country) => (
                <DropdownMenuCheckboxItem
                  key={country}
                  checked={selectedCountries.includes(country)}
                  onSelect={(event) => event.preventDefault()}
                  onCheckedChange={() => toggleCountry(country)}
                >
                  {country}
                </DropdownMenuCheckboxItem>
              ))}
              {selectedCountryLabels.length > 0 ? (
                <>
                  <DropdownMenuSeparator />
                  <div className="px-2 py-1.5 text-xs text-muted-foreground">
                    {selectedCountryLabels.join(", ")}
                  </div>
                </>
              ) : null}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-10 w-full justify-between font-normal">
                {selectedContinents.length === 0
                  ? "Châu lục"
                  : `Đã chọn ${selectedContinents.length} châu lục`}
                <ChevronDown className="h-4 w-4 opacity-60" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72" align="start">
              <DropdownMenuLabel>Chọn châu lục (có thể chọn nhiều)</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {continents.map((continent) => (
                <DropdownMenuCheckboxItem
                  key={continent}
                  checked={selectedContinents.includes(continent)}
                  onSelect={(event) => event.preventDefault()}
                  onCheckedChange={() => toggleContinent(continent)}
                >
                  {continent}
                </DropdownMenuCheckboxItem>
              ))}
              {selectedContinentLabels.length > 0 ? (
                <>
                  <DropdownMenuSeparator />
                  <div className="px-2 py-1.5 text-xs text-muted-foreground">
                    {selectedContinentLabels.join(", ")}
                  </div>
                </>
              ) : null}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-10 w-full justify-between font-normal">
                {selectedCoverageTypes.length === 0
                  ? "Loại học bổng"
                  : `Đã chọn ${selectedCoverageTypes.length} loại`}
                <ChevronDown className="h-4 w-4 opacity-60" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80" align="start">
              <DropdownMenuLabel>Chọn loại học bổng (có thể chọn nhiều)</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {scholarshipTypeOptions.map((item) => (
                <DropdownMenuCheckboxItem
                  key={item.value}
                  checked={selectedCoverageTypes.includes(item.value)}
                  onSelect={(event) => event.preventDefault()}
                  onCheckedChange={() => toggleCoverageType(item.value)}
                >
                  {item.label}
                </DropdownMenuCheckboxItem>
              ))}
              {selectedCoverageTypeLabels.length > 0 ? (
                <>
                  <DropdownMenuSeparator />
                  <div className="px-2 py-1.5 text-xs text-muted-foreground">
                    {selectedCoverageTypeLabels.join(", ")}
                  </div>
                </>
              ) : null}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-10 w-full justify-between font-normal">
                {selectedFields.length === 0 ? "Lĩnh vực" : `Đã chọn ${selectedFields.length} lĩnh vực`}
                <ChevronDown className="h-4 w-4 opacity-60" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72" align="start">
              <DropdownMenuLabel>Chọn lĩnh vực</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {fields.map((field) => (
                <DropdownMenuCheckboxItem
                  key={field}
                  checked={selectedFields.includes(field)}
                  onSelect={(event) => event.preventDefault()}
                  onCheckedChange={() => toggleField(field)}
                >
                  {field}
                </DropdownMenuCheckboxItem>
              ))}
              {selectedFieldLabels.length > 0 ? (
                <>
                  <DropdownMenuSeparator />
                  <div className="px-2 py-1.5 text-xs text-muted-foreground">
                    {selectedFieldLabels.join(", ")}
                  </div>
                </>
              ) : null}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-md border border-dashed bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
          Gợi ý: các bộ lọc dạng dropdown đều có thể chọn nhiều giá trị cùng lúc.
        </div>

        <Button variant="outline" onClick={resetFilters}>
          Đặt lại bộ lọc
        </Button>
      </section>

      <p className="text-sm text-muted-foreground">
        Hiển thị {filteredScholarships.length} / {scholarships.length} học bổng
      </p>

      {loading ? <p className="text-sm text-muted-foreground">Đang tải danh sách học bổng...</p> : null}

      {!loading && filteredScholarships.length === 0 ? (
        <div className="rounded-xl border border-dashed p-8 text-center text-muted-foreground">
          Không có học bổng phù hợp với bộ lọc hiện tại.
        </div>
      ) : null}

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredScholarships.map((scholarship) => {
          const nearestDeadline = getNearestDeadlineMonth(
            scholarship.filtering?.deadlineMonths || []
          )

          return (
            <Card key={scholarship.id} className="h-full">
              <CardHeader className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  {getCountries(scholarship).map((country) => (
                    <Badge key={country} variant="outline">
                      {country}
                    </Badge>
                  ))}
                  {inferCoverageTypes(scholarship).map((coverageType) => (
                    <Badge key={coverageType} variant="secondary">
                      {scholarshipTypeOptions.find((item) => item.value === coverageType)?.label || coverageType}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl">{scholarship.title}</CardTitle>
                <CardDescription>{scholarship.provider}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>
                  <span className="font-semibold">Mức hỗ trợ:</span>{" "}
                  {scholarship.coverage.join(" | ") || scholarship.content?.coverage || "Đang cập nhật"}
                </p>
                <p>
                  <span className="font-semibold">Bậc học:</span>{" "}
                  {scholarship.levels.map((level) => levelToVietnamese(level)).join(", ")}
                </p>
                <p>
                  <span className="font-semibold">Lĩnh vực:</span>{" "}
                  {(scholarship.filtering?.fields || scholarship.fields || []).join(", ")}
                </p>
                {/* <p>
                  <span className="font-semibold">Dữ liệu mentee SEM:</span>{" "}
                  {scholarship.menteeOutcomes ? "Có" : "Chưa cập nhật"}
                </p> */}
                {nearestDeadline ? (
                  <p>
                    <span className="font-semibold">Deadline gần nhất:</span> Tháng {nearestDeadline}
                  </p>
                ) : null}
                <Button asChild className="w-full">
                  <Link href={`/scholarships/${scholarship.slug}`}>Xem chi tiết</Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </section>
    </main>
  )
}
