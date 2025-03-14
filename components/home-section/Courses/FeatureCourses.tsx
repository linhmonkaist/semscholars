"use client"
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, BookOpen } from 'lucide-react'
import React from 'react'
import { featuredCourses } from './Data'
import Link from 'next/link'

const FeatureCourses = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold">Gói mentor nổi bật</h2>
                <p className="mt-2 text-lg text-muted-foreground">Khám phá các gói mentor phổ biến nhất của SEM</p>
              </div>
              <Link href="/courses">
                <Button>Xem tất cả</Button>
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <Link href={course.course_url}>
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium px-2.5 py-0.5 rounded bg-primary/10 text-primary">
                        {course.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{course.level}</span>
                    </div>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="mr-1 h-4 w-4" />
                      {course.students}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <BookOpen className="mr-1 h-4 w-4" />
                      {course.lessons}
                    </div>
                  </CardFooter>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
  )
}

export default FeatureCourses