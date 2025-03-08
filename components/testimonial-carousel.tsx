"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useResponsive } from "@/hooks/use-responsive"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Trần Hồng Quyên",
    role: "GKS-G 2022, Political Science, JBNU, Korea",
    avatar: "./assets/img/alumni/quyen.jpg?height=50&width=50",
    rating: 5,
    text: "Hành trình chinh phục thành công học bổng chính phủ Hàn Quốc của mình không thể không kể đến sự đồng hành của Linh và team SEM Scholars. Cảm ơn Linh và team đã giúp mình có được một sự chuẩn bị đầy đủ, kỹ lưỡng và luôn support mình trên chặng đường này ❤️❤️❤️ Mình cũng muốn gửi đến các bạn mentee tương lai một câu quote mình rất thích: “Người thực hiện được ước mơ không phải là người giỏi nhất, mà là người đến cuối vẫn không từ bỏ”. Vậy nên mình tin với sự đam mê, chân thành và kiên trì, chúng ta sẽ sớm đạt được học bổng thôi",
  },
  {
    id: 2,
    name: "Phạm Hoàng Ân",
    role: "GKS-G 2022, MBA, SKKU, Korea",
    avatar: "./assets/img/alumni/an.jpg?height=50&width=50",
    rating: 5,
    text: "Trong quá trình thực hiện bất cứ một dự định hay kế hoạch nào, chúng ta luôn cần những người đồng hành, đặc biệt là những người có kinh nghiệm và có khả năng truyền được cảm hứng để chúng ta có thể hoàn thành được mục tiêu đề ra. Cảm ơn chị Linh và Jinchuriki đã mang đến nguồn năng lượng đó cho mình trong suốt quá trình gấp rút, chỉ vỏn vẹn có 2 tuần, chuẩn bị cho GKS-G 2022.",
  },
  {
    id: 3,
    name: "Đặng Thế Nguyễn",
    role: "GKS-G 2023, Korean language & literature, SNU",
    avatar: "./assets/img/alumni/2023/the_nguyen.jpeg?height=50&width=50",
    rating: 5,
    text: "Em cảm thấy mình thật đúng đắn khi lựa chọn SEM để đồng hành cùng em trong suốt quá trình chuẩn \
        bị cho học bổng GKS 2023. Em nhớ lúc đấy là ngày 7/2 em mới bắt đầu liên hệ cho team và khoảng \
        giữa tháng 2 em mới bắt đầu viết bài luận và chuẩn bị hồ sơ. Do khá gấp nên lúc đó em cũng không thể \
        suy nghĩ được những ý tưởng hay cho bài luận nhưng nhờ có mentor \"ném đá\" và gợi ý cho em khá \
        nhiều nên bài của em cũng dần hoàn thiện hơn. \
        Trong suốt quá trình chuẩn bị học bổng cùng mentor, em cảm thấy mentor của team SEM rất tâm huyết \
        và siêu có tâm khi hướng dẫn trong quá trình chuẩn bị hồ sơ, tỉ mỉ từng câu chữ khi sửa bài luận cho \
        em nên em mong team luôn phát huy điểm này ạ ❤️",
  },
  {
    id: 4,
    name: "Trần Linh Chi",
    role: "GKS-G 2023, Finance, Yonsei",
    avatar: "./assets/img/alumni/Yonsei.jpg?height=50&width=50",
    rating: 5,
    text: "Cảm ơn Linh, Phúc với team SEM rất rất nhiều vì support cho chị hết mình trong suốt 6 tháng apply học bổng. Nhờ có mentor guide từ những ngày đầu viết essay \
    nên chị mới hiểu được tính consistent cần có trong bài essay và chị luôn nghĩ đấy là điều giúp chị đỗ GKS. Điểm phát huy của team SEM thì nhiều lắm kể không hết, chị \
    chỉ nói mong muốn thôi nhé: chị mong team làm việc chuyên nghiệp và tỉ mỉ như vẫn luôn vậy, mở rộng mentor networking đa dạng trường học, đa dạng ngành nghề,",
  },
  {
    id: 5,
    name: "Trang Phạm",
    role: "Ewha PhD Scholarship, Korea",
    avatar: "./assets/img/alumni/Ewha.png?height=50&width=50",
    rating: 5,
    text: "Hi team SEM. Đầu tiên mình rất cảm ơn team (đặc biệt là mentor Minh Đức) đã hỗ trợ mình rất nhiều trong quá trình apply Ph.D. Sau khi nói chuyện với mentor \
    Minh Đức, mình thấy rất ấn tượng vì mong muốn giúp đỡ những bạn/ anh/ chị không có điều kiện tài chính dư dả để du học tự túc của team. Mình hi vọng team có thể tiếp \
    tục phát triển lớn hơn trong tương lai và giúp đỡ được nhiều bạn/ anh/ chị hơn nữa. Vậy nên mình có donate một xíu cho team và hi vọng team sẽ ngày càng lớn mạnh trong\
    tương lai nhé ❤️",
  },
  {
    id: 6,
    name: "Emma Garcia",
    role: "Parent",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    text: "My daughter's confidence in science has grown tremendously since working with her EduLearn tutor. The personalized approach really works!",
  },
  {
    id: 7,
    name: "Robert Johnson",
    role: "Middle School Student",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 4,
    text: "The writing workshop helped me improve my essays and creative writing. I'm now getting consistent A's on my English assignments.",
  },
  {
    id: 8,
    name: "Lisa Patel",
    role: "Parent",
    avatar: "/placeholder.svg?height=50&width=50",
    rating: 5,
    text: "Finding a program that could challenge my gifted child was difficult until we discovered EduLearn. The advanced courses have kept her engaged and learning.",
  },
]

export function TestimonialCarousel() {
  const [currentPage, setCurrentPage] = React.useState(0)
  const [autoplay, setAutoplay] = React.useState(true)
  const { isMobile, isTablet, isDesktop, isLargeDesktop } = useResponsive()

  // Determine how many items to show based on screen size
  const visibleItems = React.useMemo(() => {
    if (isMobile) return 1
    if (isTablet) return 2
    if (isDesktop && !isLargeDesktop) return 3
    return 4 // isLargeDesktop
  }, [isMobile, isTablet, isDesktop, isLargeDesktop])

  // Calculate total pages
  const totalPages = Math.ceil(testimonials.length / visibleItems)

  // Handle navigation
  const nextPage = React.useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }, [totalPages])

  const prevPage = React.useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }, [totalPages])

  // Autoplay functionality
  React.useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextPage()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, nextPage])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  // Get current testimonials
  const currentTestimonials = React.useMemo(() => {
    const startIndex = currentPage * visibleItems
    return testimonials.slice(startIndex, startIndex + visibleItems)
  }, [currentPage, visibleItems])

  // Reset current page when visible items change to avoid empty pages
  React.useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0)
    }
  }, [visibleItems, totalPages, currentPage])

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Testimonials */}
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center mt-8 gap-4">
        <Button variant="outline" size="icon" className="rounded-full" onClick={prevPage}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className={cn(
                "h-2 w-2 rounded-full p-0",
                currentPage === index ? "bg-primary" : "bg-muted-foreground/20 hover:bg-muted-foreground/40",
              )}
              onClick={() => setCurrentPage(index)}
            >
              <span className="sr-only">Page {index + 1}</span>
            </Button>
          ))}
        </div>

        <Button variant="outline" size="icon" className="rounded-full" onClick={nextPage}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn("h-4 w-4", i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-muted")}
            />
          ))}
        </div>

        <p className="text-sm text-muted-foreground flex-grow mb-4">"{testimonial.text}"</p>

        <div className="flex items-center gap-3 mt-auto pt-4 border-t">
          <Avatar className="h-10 w-10">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>
              {testimonial.name.charAt(0)}
              {testimonial.name.split(" ")[1]?.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

