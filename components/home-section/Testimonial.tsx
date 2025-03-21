"use client"
import React from 'react'
import { Button } from '../ui/button'
import { TestimonialCarousel } from '../testimonial-carousel'
import Link from 'next/link'

const Testimonial = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-center">Review </h2>
                <p className="mt-2 text-lg text-muted-foreground">Feedback từ mentee của SEM</p>
              </div>
              <Link href="/mentee">
              <Button variant="outline">Thành tích của SEM</Button>
              </Link>
            </div>

            <TestimonialCarousel />
          </div>
        </section>
  )
}

export default Testimonial