"use client"

import { useResponsive } from "@/hooks/use-responsive"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Youtube, Instagram, AtSign, Facebook, Mail, MessageSquare, ExternalLink, Users } from "lucide-react"
import { Music2 as TiktokIcon } from "lucide-react"
import Footer from "@/components/home-section/Footer"
import Link from "next/link"

// Contact information
const socialLinks = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/linhmon",
    icon: Youtube,
    description: "Xem các tips apply từ founder của SEM Scholars",
    color: "bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/sem_scholars/",
    icon: Instagram,
    description: "Follow SEM Scholars ở instagram nhé",
    color:
      "bg-purple-100 text-purple-600 hover:bg-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:hover:bg-purple-900/30",
  },
  {
    name: "Threads",
    url: "https://www.threads.net/@sem_scholars",
    icon: AtSign,
    description: "Hãy tham gia vào các mẩu chuyện apply của SEM Scholars nhé!",
    color: "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@sem_scholars",
    icon: TiktokIcon,
    description: "Vừa apply vừa giải trí cùng SEM Scholars!!!",
    color: "bg-black/5 text-black hover:bg-black/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/SEMScholarsTeam",
    icon: Facebook,
    description: "Nhắn tin cho SEM",
    color:
      "bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30",
  },
  {
    name: "Email: semscholars.team@gmail.com",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=semscholars.team@gmail.com&su=Subject&body=Body text",
    icon: Mail,
    description: "Nhắn tin cho SEM",
    color:
      "bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30",
  },
]

const communityGroups = [
  {
    name: "Nhóm Scholarship Exploring with Mentors",
    url: "https://www.facebook.com/groups/652584676416646",
    icon: Users,
    description: "Tham gia vào cộng đồng apply học bổng của SEM",
    members: "",
    color:
      "bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30",
  },
  {
    name: "Nhóm Học bổng chính phủ Hàn Quốc (GKS)",
    url: "https://www.facebook.com/groups/gksvn",
    icon: Users,
    description: "Tham gia vào cộng đồng apply học bổng GKS của SEM nhé",
    members: "",
    color:
      "bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30",
  },
]

const founderLinks = [
  {
    name: "Founder Linh Mon",
    url: "https://www.facebook.com/LinhMonKGSP",
    icon: Facebook,
    description: "Connect with our founder",
    color:
      "bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30",
  },
  {
    name: "Founder's Instagram",
    url: "https://www.instagram.com/_linh_mon/",
    icon: Instagram,
    description: "Follow our founder's journey",
    color:
      "bg-purple-100 text-purple-600 hover:bg-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:hover:bg-purple-900/30",
  },
]

export default function ContactPage() {
  const { isMobile, isTablet, isDesktop } = useResponsive()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-center">Liên hệ</h1>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
      Kết nối với SEM thông qua nhiều nền tảng và cộng đồng khác nhau. SEM Scholars luôn sẵn sàng lắng nghe và hỗ trợ bạn!
      </p>

      {/* Email Contact Card */}
      <Card className="mb-8 overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row items-center">
            <div className="bg-primary/10 p-8 flex items-center justify-center md:w-1/3">
              <Facebook className="h-16 w-16 text-primary" />
            </div>
            <div className="p-6 md:p-8 md:w-2/3">
              <h2 className="text-2xl font-bold mb-2">Trò chuyện cùng SEM</h2>
              <p className="text-muted-foreground mb-4">
              Bạn có thắc mắc về chương trình mentor của SEM không ? Hãy gửi tin nhắn cho SEM và chúng mình sẽ trả lời bạn sớm nhất có thể.
              </p>
              <Button className="flex items-center gap-2" size="lg">
                <Facebook className="h-4 w-4" />
                <Link href="https://www.facebook.com/SEMScholarsTeam">SEM Scholars - Scholarship Exploring with Mentors</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Media Section */}
      <h2 className="text-2xl font-bold mb-4">Theo dõi SEM Scholars</h2>
      <div className={`grid gap-4 mb-8 ${isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-4"}`}>
        {socialLinks.map((link) => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="block">
            <Card className="h-full transition-transform hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-full ${link.color} flex items-center justify-center mb-4`}>
                  <link.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  {link.name}
                  <ExternalLink className="h-3.5 w-3.5 ml-1.5 text-muted-foreground" />
                </h3>
                <p className="text-muted-foreground text-sm">{link.description}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      {/* Community Groups Section */}
      <h2 className="text-2xl font-bold mb-4">Tham gia cộng đồng của SEM Scholars</h2>
      <div className={`grid gap-4 mb-8 ${isMobile ? "grid-cols-1" : "grid-cols-2"}`}>
        {communityGroups.map((group) => (
          <a key={group.name} href={group.url} target="_blank" rel="noopener noreferrer" className="block">
            <Card className="h-full transition-transform hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-full ${group.color} flex items-center justify-center mb-4`}>
                  <group.icon className="h-6 w-6" />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold flex items-center">
                    {group.name}
                    <ExternalLink className="h-3.5 w-3.5 ml-1.5 text-muted-foreground" />
                  </h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{group.members}</span>
                </div>
                <p className="text-muted-foreground text-sm">{group.description}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      {/* Founder Links Section */}
      <h2 className="text-2xl font-bold mb-4">Kết nối với Founder Linh Mon</h2>
      <div className={`grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-2"}`}>
        {founderLinks.map((link) => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="block">
            <Card className="h-full transition-transform hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-full ${link.color} flex items-center justify-center mb-4`}>
                  <link.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  {link.name}
                  <ExternalLink className="h-3.5 w-3.5 ml-1.5 text-muted-foreground" />
                </h3>
                <p className="text-muted-foreground text-sm">{link.description}</p>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      {/* Message Us Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Have a Question?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          We're here to help with any questions about our mentoring program, scholarships, or university applications.
        </p>

      </div>
      <Footer/>
    </div>
  )
}

