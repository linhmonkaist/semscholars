"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TopNavbar } from "@/components/top-navbar"
import { BookOpen, GraduationCap, Users, Video, Trophy, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import Footer from "@/components/home-section/Footer"
import Testimonial from "@/components/home-section/Testimonial"
import Team from "@/components/home-section/Team/Team"
import FeatureCourses from "@/components/home-section/Courses/FeatureCourses"
import ServicesGroup from "@/components/home-section/ServicesGroup"
import Reputation from "@/components/home-section/Reputation"
import Intro from "@/components/home-section/Intro"

export default function HomePage() {
  return (
    // <div className="flex min-h-screen flex-col">
    //   <TopNavbar />
      <main className="flex-1">
        {/* Hero Section */}
        <Intro />

        {/* Stats Section */}
        <Reputation />

        {/* Services Section */}
        <ServicesGroup />

        {/* Featured Courses Section */}
        <FeatureCourses />

        {/* Team Section */}
        <Team />

        {/* Testimonials Section */}
        <Testimonial />

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Ready to Start Your Learning Journey?</h2>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
              Join thousands of students who have transformed their education with our services.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent">
                Contact Our Team
              </Button>
            </div>
          </div>
        </section>
      </main>
  )
}

