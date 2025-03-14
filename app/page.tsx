"use client"
import { Button } from "@/components/ui/button"
import Testimonial from "@/components/home-section/Testimonial"
import Team from "@/components/home-section/Team/Team"
import FeatureCourses from "@/components/home-section/Courses/FeatureCourses"
import ServicesGroup from "@/components/home-section/ServicesGroup"
import Reputation from "@/components/home-section/Reputation"
import Intro from "@/components/home-section/Intro"
import Footer from "@/components/home-section/Footer"
import Link from "next/link"

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
            <h2 className="text-3xl font-bold md:text-4xl">Sẵn sàng bắt đầu chinh phục học bổng danh giá?</h2>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
              Tham gia cùng SEM Scholars để hiện thực hóa giấc mơ chinh phục học bổng
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link href='/courses'>
              <Button size="lg" variant="secondary">
                Bắt đầu ngay bây giờ
              </Button>
              </Link>
              <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent">
                Liên hệ SEM Scholars
              </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
  )
}

