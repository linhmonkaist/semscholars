export type MenteeMatchingMode =
  | "scholarshipKeywordsOnly"
  | "matchingUniversitiesOnly"
  | "either"
  | "both"

export type Scholarship = {
  id: string
  slug: string
  title: string
  provider: string
  country?: string
  filtering: {
    deadlineMonths: number[]
    coverageTypes: ScholarshipCoverageType[]
    countries: string[]
    continents: string[]
    fields: string[]
  }
  content: {
    eligibility: string
    coverage: string
    intakes: string[]
  }
  universities?: string[]
  levels: ("Bachelor" | "Master" | "PhD" | "Exchange" | "Short-term")[]
  fields?: string[]
  coverage: string[]
  eligibility: string[]
  intakes: string[]
  application: {
    track?: string[]
    requiredDocuments: string[]
    applicationFee?: string
    officialGuideLinks?: string[]
    applyLinks?: string[]
  }
  menteeOutcomes?: {
    matchingMode?: MenteeMatchingMode
    matchingScholarshipKeywords: string[]
    matchingUniversities?: string[]
    displayMenteeCount?: number
    comment?: string
  }
  relatedInformation?: {
    comment?: string
  }
  mentoringRecommendation?: {
    packetName: string
    bestRegistrationTime: string
    comment?: string
  }
  tags?: string[]
  updatedAt: string
}

export const scholarshipCoverageTypes = [
  "full-ride",
  "full-tuition",
  "partial-tuition",
  "admission",
] as const

export type ScholarshipCoverageType = (typeof scholarshipCoverageTypes)[number]
