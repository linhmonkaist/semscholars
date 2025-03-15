"use client"

import { useState, useMemo } from "react"
import { useResponsive } from "@/hooks/use-responsive"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, MapPin, Award, Building, Users, ChevronDown, ChevronUp, BookOpen } from "lucide-react"
import { mentees } from "./mentees"
import Footer from "@/components/home-section/Footer"
import Testimonial from "@/components/home-section/Testimonial"
import { TestimonialCarousel } from "@/components/testimonial-carousel"

// Define the mentee type
interface Mentee {
  id: string
  name: string
  image: string
  scholarships: string[]
  universities: string[]
  countries: string[]
  majors: string[]
  mentors: string[]
  degree: string
}



export default function MenteesPage() {
  const { isMobile, isTablet, isDesktop } = useResponsive()
  const [selectedUniversity, setSelectedUniversity] = useState<string>("Tất cả")
  const [selectedCountry, setSelectedCountry] = useState<string>("Tất cả")
  const [selectedMajor, setSelectedMajor] = useState<string>("Tất cả")
  const [selectedScholarship, setSelectedScholarship] = useState<string>("Tất cả")
  const [selectedMentor, setSelectedMentor] = useState<string>("Tất cả")
  const [activeTab, setActiveTab] = useState<string>("Tất cả")

  // Extract unique values for filters
  const allUniversities = useMemo(() => {
    const universities = new Set<string>()
    mentees.forEach((mentee) => {
      mentee.universities.forEach((university) => universities.add(university))
    })
    return Array.from(universities).sort()
  }, [])

  const allCountries = useMemo(() => {
    const countries = new Set<string>()
    mentees.forEach((mentee) => {
      mentee.countries.forEach((country) => countries.add(country))
    })
    return Array.from(countries).sort()
  }, [])

  const allMajors = useMemo(() => {
    const majors = new Set<string>()
    mentees.forEach((mentee) => {
      mentee.majors.forEach((major) => majors.add(major))
    })
    return Array.from(majors).sort()
  }, [])

  const allScholarships = useMemo(() => {
    const scholarships = new Set<string>()
    mentees.forEach((mentee) => {
      mentee.scholarships.forEach((scholarship) => scholarships.add(scholarship))
    })
    return Array.from(scholarships).sort()
  }, [])

  const allMentors = useMemo(() => {
    const mentors = new Set<string>()
    mentees.forEach((mentee) => {
      mentee.mentors.forEach((mentor) => mentors.add(mentor))
    })
    return Array.from(mentors).sort()
  }, [])
  const reverse_mentee = mentees.slice().reverse()
  // Filter mentees based on selected filters
  const filteredMentees = useMemo(() => {
    return reverse_mentee.filter((mentee) => {
      const matchesUniversity = selectedUniversity === "Tất cả" || mentee.universities.includes(selectedUniversity)
      const matchesCountry = selectedCountry === "Tất cả" || mentee.countries.includes(selectedCountry)
      const matchesMajor = selectedMajor === "Tất cả" || mentee.majors.includes(selectedMajor)
      const matchesScholarship = selectedScholarship === "Tất cả" || mentee.scholarships.includes(selectedScholarship)
      const matchesMentor = selectedMentor === "Tất cả" || mentee.mentors.includes(selectedMentor)

      return matchesUniversity && matchesCountry && matchesMajor && matchesScholarship && matchesMentor
    })
  }, [selectedUniversity, selectedCountry, selectedMajor, selectedScholarship, selectedMentor])

  // Reset all filters
  const resetFilters = () => {
    setSelectedUniversity("Tất cả")
    setSelectedCountry("Tất cả")
    setSelectedMajor("Tất cả")
    setSelectedScholarship("Tất cả")
    setSelectedMentor("Tất cả")
  }

  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Mentee của SEM</h1>
      <TestimonialCarousel />
      <div className="mb-8 mt-8"></div>
      {/* Tabs for mobile view */}
      {isMobile && (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="Tất cả">Tất cả lựa chọn</TabsTrigger>
            <TabsTrigger value="academic">Học thuật</TabsTrigger>
            <TabsTrigger value="location">Vị trí</TabsTrigger>
          </TabsList>

          <TabsContent value="Tất cả" className="space-y-4">
            <Select value={selectedScholarship} onValueChange={setSelectedScholarship}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by scholarship" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Tất cả">Tất cả học bổng</SelectItem>
                {allScholarships.map((scholarship) => (
                  <SelectItem key={scholarship} value={scholarship}>
                    {scholarship}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedMentor} onValueChange={setSelectedMentor}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by mentor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Tất cả">Tất cả mentor</SelectItem>
                {allMentors.map((mentor) => (
                  <SelectItem key={mentor} value={mentor}>
                    {mentor}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline" onClick={resetFilters} className="w-full">
              Xóa lựa chọn
            </Button>
          </TabsContent>

          <TabsContent value="academic" className="space-y-4">
            <Select value={selectedUniversity} onValueChange={setSelectedUniversity}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by university" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Tất cả">Tất cả các trường</SelectItem>
                {allUniversities.map((university) => (
                  <SelectItem key={university} value={university}>
                    {university}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedMajor} onValueChange={setSelectedMajor}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by major" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Tất cả">Tất cả ngành học</SelectItem>
                {allMajors.map((major) => (
                  <SelectItem key={major} value={major}>
                    {major}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </TabsContent>

          <TabsContent value="location" className="space-y-4">
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Tất cả">Tất cả quốc gia</SelectItem>
                {allCountries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </TabsContent>
        </Tabs>
      )}

      {/* Desktop and Tablet Filters */}
      {!isMobile && (
        <div className="grid gap-4 mb-8 md:grid-cols-2 lg:grid-cols-5">
          <Select value={selectedUniversity} onValueChange={setSelectedUniversity}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by university" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Tất cả">Tất cả các trường</SelectItem>
              {allUniversities.map((university) => (
                <SelectItem key={university} value={university}>
                  {university}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Tất cả">Tất cả quốc gia</SelectItem>
              {allCountries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedMajor} onValueChange={setSelectedMajor}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by major" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Tất cả">Tất cả ngành học</SelectItem>
              {allMajors.map((major) => (
                <SelectItem key={major} value={major}>
                  {major}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedScholarship} onValueChange={setSelectedScholarship}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by scholarship" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Tất cả">Tất cả học bổng</SelectItem>
              {allScholarships.map((scholarship) => (
                <SelectItem key={scholarship} value={scholarship}>
                  {scholarship}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedMentor} onValueChange={setSelectedMentor}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by mentor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Tất cả">Tất cả mentor</SelectItem>
              {allMentors.map((mentor) => (
                <SelectItem key={mentor} value={mentor}>
                  {mentor}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button variant="outline" onClick={resetFilters} className="md:col-span-2 lg:col-span-5">
            Xóa chọn lọc
          </Button>
        </div>
      )}

      {/* Results count */}
      <p className="mb-4 text-muted-foreground">
        Showing {filteredMentees.length} of {mentees.length} mentees
      </p>

      {/* Mentees Grid */}
      <div
        className={`grid gap-3 ${
          isMobile
            ? "grid-cols-1 sm:grid-cols-2"
            : isTablet
              ? "grid-cols-3 lg:grid-cols-4"
              : "grid-cols-5 xl:grid-cols-6"
        }`}
      >
        {filteredMentees.map((mentee) => (
          <MenteeCard key={mentee.id} mentee={mentee} />
        ))}
      </div>

      {/* No results message */}
      {filteredMentees.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">
            Không có kết quả phù hợp với lựa chọn: <br/>
            Quốc gia: {selectedCountry}, <br/>
            Trường: {selectedUniversity}, <br/>
            Ngành học: {selectedMajor},<br/>
            Học bổng: {selectedScholarship}, <br/>
            Mentor: {selectedMentor}  
          </p>
          <Button onClick={resetFilters} variant="secondary" className="mt-4">
            Xóa chọn lọc
          </Button>
        </div>
      )}
    </div>
    <Footer/>
    </>
  )
}

function MenteeCard({ mentee }: { mentee: Mentee }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
    <Card className="h-full overflow-hidden">
      <CardHeader className="flex flex-row items-center gap-1.5 p-2 pb-1.5">
        <Avatar className="h-7 w-7">
          <AvatarImage src={mentee.image} alt={mentee.name} />
          <AvatarFallback>{mentee.name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <h2 className="text-xs font-bold truncate">{mentee.name}</h2>
        </div>
        <Button variant="ghost" size="sm" className="h-5 w-5 p-0 ml-auto" onClick={() => setExpanded(!expanded)}>
          {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
        </Button>
      </CardHeader>

      <CardContent className="p-2 pt-0 text-xs">
        <div className="space-y-1.5">
          {/* Universities */}
          <div className="flex items-start gap-1.5">
            <Building className="h-3 w-3 text-primary mt-0.5 shrink-0" />
            <div className="flex-1">
              {mentee.universities.slice(0, expanded ? undefined : 2).map((university, i) => (
                <Badge key={university} className="mr-0.5 mb-0.5 text-[10px] px-1 py-0 font-normal">
                  {university}
                </Badge>
              ))}
              {!expanded && mentee.universities.length > 2 && (
                <Badge variant="outline" className="text-[10px] px-1 py-0 font-normal">
                  +{mentee.universities.length - 2}
                </Badge>
              )}
            </div>
          </div>

          {/* Scholarships */}
          <div className="flex items-start gap-1.5">
            <Award className="h-3 w-3 text-primary mt-0.5 shrink-0" />
            <div className="flex-1">
              {mentee.scholarships.slice(0, expanded ? undefined : 2).map((scholarship) => (
                <Badge
                  key={scholarship}
                  variant="secondary"
                  className="mr-0.5 mb-0.5 text-[10px] px-1 py-0 font-normal"
                >
                  {scholarship}
                </Badge>
              ))}
              {!expanded && mentee.scholarships.length > 2 && (
                <Badge variant="outline" className="text-[10px] px-1 py-0 font-normal">
                  +{mentee.scholarships.length - 2}
                </Badge>
              )}
            </div>
          </div>

          {/* Countries */}
          <div className="flex items-start gap-1.5">
            <MapPin className="h-3 w-3 text-primary mt-0.5 shrink-0" />
            <div className="flex-1">
              {mentee.countries.slice(0, expanded ? undefined : 2).map((country) => (
                <Badge key={country} variant="outline" className="mr-0.5 mb-0.5 text-[10px] px-1 py-0 font-normal">
                  {country}
                </Badge>
              ))}
              {!expanded && mentee.countries.length > 2 && (
                <Badge variant="outline" className="text-[10px] px-1 py-0 font-normal">
                  +{mentee.countries.length - 2}
                </Badge>
              )}
            </div>
          </div>

          {/* Majors */}
          <div className="flex items-start gap-1.5">
            <GraduationCap className="h-3 w-3 text-primary mt-0.5 shrink-0" />
            <div className="flex-1">
              {mentee.majors.slice(0, expanded ? undefined : 2).map((major) => (
                <Badge key={major} variant="secondary" className="mr-0.5 mb-0.5 text-[10px] px-1 py-0 font-normal">
                  {major}
                </Badge>
              ))}
              {!expanded && mentee.majors.length > 2 && (
                <Badge variant="outline" className="text-[10px] px-1 py-0 font-normal">
                  +{mentee.majors.length - 2}
                </Badge>
              )}
            </div>
          </div>

          {/* Mentors - Only show in expanded view */}
          {expanded && (
            <div>
            <div className="flex items-start gap-1.5">
              <BookOpen className="h-3 w-3 text-primary mt-0.5 shrink-0" />
              <div className="flex-1">
                  <Badge key={mentee.id} variant="default" className="mr-0.5 mb-0.5 text-[10px] px-1 py-0 font-normal">
                    {mentee.degree}
                  </Badge>
              </div>
            </div>
            <div className="flex items-start gap-1.5">
              <Users className="h-3 w-3 text-primary mt-0.5 shrink-0" />
              <div className="flex-1">
                {mentee.mentors.map((mentor) => (
                  <Badge key={mentor} variant="default" className="mr-0.5 mb-0.5 text-[10px] px-1 py-0 font-normal">
                    {mentor}
                  </Badge>
                ))}
              </div>
            </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
    </>
  )
}

