"use client"

import { useState, useMemo } from "react"
import { useResponsive } from "@/hooks/use-responsive"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, GraduationCap } from "lucide-react"
import {TeamMember, teamMembers} from "@/app/team/Data"

// Sample data
// const teamMembers: TeamMember[] = [
//   {
//     id: "1",
//     name: "Jane Smith",
//     image: "/placeholder.svg?height=200&width=200",
//     description: "Experienced mentor with 10+ years in software development and machine learning.",
//     reputation: 4.9,
//     majors: ["Computer Science", "Machine Learning", "Data Science"],
//     countries: ["USA", "Canada", "UK"],
//   },
//   {
//     id: "2",
//     name: "John Doe",
//     image: "/placeholder.svg?height=200&width=200",
//     description: "Specialized in web development and UI/UX design with a focus on accessibility.",
//     reputation: 4.7,
//     majors: ["Web Development", "UI/UX Design", "Accessibility"],
//     countries: ["Germany", "France", "Spain"],
//   },
//   {
//     id: "3",
//     name: "Alex Chen",
//     image: "/placeholder.svg?height=200&width=200",
//     description: "Expert in mobile app development and cloud architecture.",
//     reputation: 4.8,
//     majors: ["Mobile Development", "Cloud Computing", "DevOps"],
//     countries: ["Japan", "Singapore", "Australia"],
//   },
//   {
//     id: "4",
//     name: "Maria Rodriguez",
//     image: "/placeholder.svg?height=200&width=200",
//     description: "Specializes in cybersecurity and blockchain technology.",
//     reputation: 4.6,
//     majors: ["Cybersecurity", "Blockchain", "Network Security"],
//     countries: ["Mexico", "Brazil", "Argentina"],
//   },
//   {
//     id: "5",
//     name: "David Kim",
//     image: "/placeholder.svg?height=200&width=200",
//     description: "Focused on AI research and natural language processing.",
//     reputation: 4.9,
//     majors: ["Artificial Intelligence", "NLP", "Machine Learning"],
//     countries: ["South Korea", "China", "India"],
//   },
//   {
//     id: "6",
//     name: "Sarah Johnson",
//     image: "/placeholder.svg?height=200&width=200",
//     description: "Expert in game development and computer graphics.",
//     reputation: 4.8,
//     majors: ["Game Development", "Computer Graphics", "3D Modeling"],
//     countries: ["UK", "USA", "Canada"],
//   },
// ]

export default function TeamMembersPage() {
  const { isMobile, isTablet, isDesktop } = useResponsive()
  const [selectedCountry, setSelectedCountry] = useState<string>("all")
  const [selectedMajor, setSelectedMajor] = useState<string>("all")

  // Extract unique countries and majors for filters
  const allCountries = useMemo(() => {
    const countries = new Set<string>()
    teamMembers.forEach((member) => {
      member.countries.forEach((country) => countries.add(country))
    })
    return Array.from(countries).sort()
  }, [])

  const allMajors = useMemo(() => {
    const majors = new Set<string>()
    teamMembers.forEach((member) => {
      member.majors.forEach((major) => majors.add(major))
    })
    return Array.from(majors).sort()
  }, [])

  // Filter members based on selected filters
  const filteredMembers = useMemo(() => {
    return teamMembers.filter((member) => {
      const matchesCountry = selectedCountry === "all" || member.countries.includes(selectedCountry)
      const matchesMajor = selectedMajor === "all" || member.majors.includes(selectedMajor)
      return matchesCountry && matchesMajor
    })
  }, [selectedCountry, selectedMajor])

  // Reset all filters
  const resetFilters = () => {
    setSelectedCountry("all")
    setSelectedMajor("all")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Mentoring Team</h1>

      {/* Filters Section */}
      <div className={`mb-8 ${isMobile ? "space-y-4" : "flex items-center gap-4"}`}>
        <div className={`${!isMobile && "flex-1"}`}>
          <Select value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Xem tất cả</SelectItem>
              {allCountries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className={`${!isMobile && "flex-1"}`}>
          <Select value={selectedMajor} onValueChange={setSelectedMajor}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by major" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Xem tất cả</SelectItem>
              {allMajors.map((major) => (
                <SelectItem key={major} value={major}>
                  {major}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button variant="outline" onClick={resetFilters} className={`${!isMobile && "w-auto"} ${isMobile && "w-full"}`}>
          Reset Filters
        </Button>
      </div>

      {/* Results count */}
      <p className="mb-4 text-muted-foreground">
        Showing {filteredMembers.length} of {teamMembers.length} team members
      </p>

      {/* Team Members Grid */}
      <div className={`grid gap-6 ${isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-3"}`}>
        {filteredMembers.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>

      {/* No results message */}
      {filteredMembers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No team members match your filters</p>
          <Button onClick={resetFilters} variant="secondary" className="mt-4">
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  )
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <Card className="h-full flex flex-col" id={member.id}>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <Avatar className="h-16 w-16">
          <AvatarImage src={member.image} alt={member.name} />
          <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-bold">{member.name}</h2>
          <div className="flex items-center text-amber-500">
            {/* <Star className="h-4 w-4 fill-current" /> */}
            <span className="ml-1">{member.role}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{member.description}</p>
        <p className="text-muted-foreground mb-4">{member.received_scholarship}</p>
        <p className="text-muted-foreground mb-4">{member.mentor_history}</p>

        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <GraduationCap className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div className="flex flex-wrap gap-1">
              {member.majors.map((major) => (
                <Badge key={major} variant="secondary">
                  {major}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div className="flex flex-wrap gap-1">
              {member.countries.map((country) => (
                <Badge key={country} variant="outline">
                  {country}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full">Contact Mentor</Button>
      </CardFooter>
    </Card>
  )
}

