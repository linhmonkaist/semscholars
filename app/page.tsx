"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TopNavbar } from "@/components/top-navbar"
import { BookOpen, GraduationCap, Users, Video, Trophy, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import Footer from "@/components/home-section/Footer"

export default function HomePage() {
  // Featured courses data
  const featuredCourses = [
    {
      id: 1,
      title: "Introduction to Mathematics",
      description: "Master fundamental math concepts with our comprehensive course.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Mathematics",
      level: "Beginner",
      students: 1245,
      lessons: 24,
    },
    {
      id: 2,
      title: "Advanced English Literature",
      description: "Explore classic and contemporary literature with expert guidance.",
      image: "/placeholder.svg?height=200&width=300",
      category: "English",
      level: "Advanced",
      students: 876,
      lessons: 32,
    },
    {
      id: 3,
      title: "Physics for Beginners",
      description: "Learn the fundamental principles of physics through interactive lessons.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Science",
      level: "Beginner",
      students: 1032,
      lessons: 28,
    },
  ]

  // Team members data
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Academic Director",
      bio: "Ph.D. in Education with over 15 years of experience developing innovative learning methodologies.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Prof. Michael Chen",
      role: "Lead Mathematics Instructor",
      bio: "Former university professor with a passion for making complex mathematical concepts accessible to all students.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Student Success Coordinator",
      bio: "Dedicated to ensuring every student receives personalized support throughout their educational journey.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "James Wilson",
      role: "Technology Director",
      bio: "Combines educational expertise with technical knowledge to create engaging digital learning experiences.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <TopNavbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-16 md:py-24">
          <div className="container mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  Unlock Your Learning Potential
                </h1>
                <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                  Personalized education solutions to help you achieve your academic goals. Expert tutors, comprehensive
                  courses, and flexible learning options.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg">Explore Courses</Button>
                  <Button size="lg" variant="outline">
                    Book a Free Consultation
                  </Button>
                </div>
              </div>
              <div className="relative hidden md:block">
                <img
                  src="../../assets/img/icon.png?height=400&width=500"
                  alt="Students learning"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our Impact in Numbers</h2>
              <p className="mt-4 text-lg text-muted-foreground">Trusted by students and parents across the country</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2">15,000+</h3>
                <p className="text-lg font-medium">Students Served</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Helping students achieve their academic goals since 2010
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2">200+</h3>
                <p className="text-lg font-medium">Courses Offered</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Comprehensive curriculum covering all major subjects and skill levels
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2">50+</h3>
                <p className="text-lg font-medium">Expert Tutors</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Highly qualified educators with advanced degrees and teaching experience
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2">94%</h3>
                <p className="text-lg font-medium">Success Rate</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Students who improved their grades after enrolling in our programs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our Educational Services</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Comprehensive learning solutions tailored to your needs
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Private Tutoring</CardTitle>
                  <CardDescription>One-on-one personalized instruction with expert tutors</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Our tutors work with students to address specific learning needs, build confidence, and improve
                    academic performance.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Group Classes</CardTitle>
                  <CardDescription>Small group instruction for collaborative learning</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Our small group classes provide a collaborative environment where students can learn from peers
                    while receiving guidance.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Online Courses</CardTitle>
                  <CardDescription>Self-paced digital learning with expert instruction</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Access high-quality educational content anytime, anywhere with our comprehensive online courses and
                    learning resources.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold">Featured Courses</h2>
                <p className="mt-2 text-lg text-muted-foreground">Explore our most popular educational offerings</p>
              </div>
              <Button>View All Courses</Button>
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
                      {course.students} students
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <BookOpen className="mr-1 h-4 w-4" />
                      {course.lessons} lessons
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Meet Our Team</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Our dedicated educators and staff are committed to providing the highest quality educational experience
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="group flex flex-col items-center text-center">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-center p-4">
                      <div className="flex gap-4">
                        <a href={member.social.twitter} className="text-white hover:text-primary transition-colors">
                          <TwitterIcon className="h-5 w-5" />
                        </a>
                        <a href={member.social.linkedin} className="text-white hover:text-primary transition-colors">
                          <LinkedinIcon className="h-5 w-5" />
                        </a>
                        <a href={member.social.github} className="text-white hover:text-primary transition-colors">
                          <GithubIcon className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold">What Our Students Say</h2>
                <p className="mt-2 text-lg text-muted-foreground">Hear from our community of learners</p>
              </div>
              <Button variant="outline">View All Testimonials</Button>
            </div>

            <TestimonialCarousel />
          </div>
        </section>

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

      {/* Footer */}
      <Footer />
    </div>
  )
}

