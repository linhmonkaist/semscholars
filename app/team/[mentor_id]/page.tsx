import React from "react"
import { teamMembers} from "@/app/team/Data"
import MentorDetailClient from "./MentorDetailClient"
import { notFound } from "next/navigation"

type PageProps = {
  params: {
    mentor_id: string
  }
}

export function generateStaticParams() {
  return teamMembers.map((mentor) => ({
    mentor_id: mentor.id,
  }))
}

export default function MentorDetailPage({ params }: PageProps) {
  const mentor = teamMembers.find((m) => m.id === params.mentor_id)

  if (!mentor) {
    notFound()
  }

  return <MentorDetailClient mentor={mentor} />
}