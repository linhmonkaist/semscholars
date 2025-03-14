"use client"

import { useResponsive } from "@/hooks/use-responsive"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Target, History, Award, Users, GraduationCap, Globe } from "lucide-react"
import Footer from "@/components/home-section/Footer"

export default function AboutPage() {
  const { isMobile, isTablet, isDesktop } = useResponsive()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">About Us</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Empowering students to achieve their academic dreams through mentorship and guidance.
        </p>

        {/* Mission & Vision Section */}
        <div className={`grid gap-6 mb-16 ${isMobile ? "grid-cols-1" : "grid-cols-2"}`}>
          {/* Mission Card */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-primary/10 p-4 flex items-center gap-3">
                <Lightbulb className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-bold">Our Mission</h2>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Our mission is to democratize access to quality education by connecting aspiring students with
                  experienced mentors who have successfully navigated the complex landscape of scholarships and
                  university admissions.
                </p>
                <p className="text-muted-foreground">
                  We believe that every talented student deserves the opportunity to reach their full potential,
                  regardless of their background or financial circumstances.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-primary/10 p-4 flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-bold">Our Vision</h2>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  We envision a world where geographic and economic barriers no longer limit educational opportunities,
                  where mentorship bridges the gap between talent and opportunity.
                </p>
                <p className="text-muted-foreground">
                  By 2030, we aim to have helped 10,000 students secure scholarships and admissions to top universities
                  worldwide, creating a global network of successful alumni who pay it forward.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Values Section */}
        <h2 className="text-2xl font-bold mb-6 text-center">Our Core Values</h2>
        <div className={`grid gap-4 mb-16 ${isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-3"}`}>
          {[
            {
              icon: Users,
              title: "Community",
              description:
                "We foster a supportive community where knowledge is shared freely and connections last a lifetime.",
            },
            {
              icon: Award,
              title: "Excellence",
              description:
                "We strive for excellence in everything we do, from the quality of our mentorship to the success of our students.",
            },
            {
              icon: Globe,
              title: "Inclusivity",
              description:
                "We embrace diversity and ensure our programs are accessible to talented students from all backgrounds.",
            },
          ].map((value, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our History Section */}
        <h2 className="text-2xl font-bold mb-6 text-center">Our History</h2>
        <Card className="mb-16 overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-primary/10 p-4 flex items-center gap-3">
              <History className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold">The Journey So Far</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="border-l-2 border-primary/30 pl-4 ml-2 relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] -top-1"></div>
                <h3 className="text-lg font-semibold mb-1">2018: The Beginning</h3>
                <p className="text-muted-foreground">
                  Founded by a group of scholarship recipients who wanted to give back, our organization started as a
                  small Facebook group where successful applicants shared tips and advice.
                </p>
              </div>

              <div className="border-l-2 border-primary/30 pl-4 ml-2 relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] -top-1"></div>
                <h3 className="text-lg font-semibold mb-1">2019: Formal Mentorship Program</h3>
                <p className="text-muted-foreground">
                  We launched our structured mentorship program, pairing 50 mentees with 15 mentors who had secured
                  scholarships to prestigious universities.
                </p>
              </div>

              <div className="border-l-2 border-primary/30 pl-4 ml-2 relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] -top-1"></div>
                <h3 className="text-lg font-semibold mb-1">2020: Going Digital</h3>
                <p className="text-muted-foreground">
                  The global pandemic accelerated our digital transformation. We moved all our services online, allowing
                  us to reach students in remote areas and expand our mentor network globally.
                </p>
              </div>

              <div className="border-l-2 border-primary/30 pl-4 ml-2 relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] -top-1"></div>
                <h3 className="text-lg font-semibold mb-1">2022: Milestone Achievement</h3>
                <p className="text-muted-foreground">
                  We celebrated our 500th successful scholarship recipient and expanded our services to include
                  specialized tracks for different fields of study.
                </p>
              </div>

              <div className="pl-4 ml-2 relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] -top-1"></div>
                <h3 className="text-lg font-semibold mb-1">2023: Today and Beyond</h3>
                <p className="text-muted-foreground">
                  With a community of over 5,000 members, 200+ active mentors, and a success rate of 70%, we continue to
                  grow and refine our programs to better serve aspiring scholars worldwide.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact Section */}
        <h2 className="text-2xl font-bold mb-6 text-center">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            {
              icon: Users,
              stat: "5,000+",
              label: "Community Members",
            },
            {
              icon: GraduationCap,
              stat: "800+",
              label: "Successful Admissions",
            },
            {
              icon: Award,
              stat: "650+",
              label: "Scholarships Secured",
            },
            {
              icon: Globe,
              stat: "45+",
              label: "Countries Represented",
            },
          ].map((item, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <item.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">{item.stat}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're a student seeking guidance, an alumnus wanting to give back, or a supporter of educational
            access, there's a place for you in our community.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

