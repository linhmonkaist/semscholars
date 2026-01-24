import React from "react"
import { teamMembers } from "@/app/team/Data"
import MentorDetailClient from "./MentorDetailClient"
import { notFound } from "next/navigation"

type PageProps = {
  params: Promise<{
    mentor_id: string
  }>
}

export function generateStaticParams() {
  return teamMembers.map((mentor) => ({
    mentor_id: mentor.id,
  }))
}

export default async function MentorDetailPage({ params }: PageProps) {
  const { mentor_id } = await params

  const mentor = teamMembers.find((m) => m.id === mentor_id)

  if (!mentor) {
    notFound()
  }

  return <MentorDetailClient mentor={mentor} />
}