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
    name: "Hoàng Giai Ngọc",
    role: "GKS-U 2024, Data Science, KU, Korea",
    avatar: "./assets/img/alumni/KU.jpg?height=50&width=50",
    rating: 5,
    text: "Đầu tiên, em muốn cảm ơn chị Linh vì đã cùng em “chiến đấu” với bài luận vào mỗi buổi tối trong suốt vài tháng qua. Dù cho có muộn như nào, chị vẫn luôn giúp\
    em có được lịch meeting sớm nhất. Khi đó, chị không chỉ giúp em hoàn thiện từng câu chữ mà còn giúp em tìm ra hướng đi về cuộc sống đại học, kể cho em nghe những kinh\
    nghiệm, value mà em tin chắc rằng em không thể nghe ở đâu khác. Em nhớ những lúc chị giúp em tìm ý tưởng, chỉnh sửa bài viết không biết bao nhiêu lần để mọi thứ hoàn \
    hảo nhất. Nhờ có chị mà bài luận của em đã trở thành một trong những thành tích tốt nhất trong toàn bộ hồ sơ. Và em cũng cảm ơn anh Phúc vì đã giúp em rất nhiều trong\
     việc check bài tiếng Hàn, từ chỉnh sửa từ ngữ sao cho chuyên nghiệp hơn đến chuẩn bị cho buổi phỏng vấn. Em vẫn nhớ những buổi luyện tập mà anh kiên nhẫn chỉ cho em\
      từng câu hỏi, động viên giúp em tự tin hơn rất nhiều khi đối diện với ban tuyển sinh. Nếu không có anh trước đó, chắc em đã không thể có được sự tự tin và vững vàng \
      như thế vào hôm phỏng vấn chính thức. Cuối cùng, em cảm thấy rất may mắn khi có cơ hội được đồng hành cùng anh chị trong quá trình này. Sau này, dù đi đến đâu, em \
      cũng sẽ luôn giới thiệu team mentor đến những ai đang cần sự hỗ trợ – vì em biết rằng họ sẽ nhận được sự giúp đỡ tốt nhất, giống như những gì em đã may mắn có được.\
    Một lần nữa, em cảm ơn anh chị rất rất nhiều vì tất cả. Dù hành trình này đã hoàn thành một chặng, nhưng em hy vọng vẫn sẽ luôn giữ liên lạc và có dịp gặp lại anh chị \
    trong tương lai ạ\! Em chúc anh chị và team SEM luôn thành công ạ!",
  },
  {
    id: 7,
    name: "Nguyễn Tiến Quang Vinh",
    role: "KAIST Scholarship 2024, Computer Science, KAIST, Korea",
    avatar: "./assets/img/alumni/quangvinh.jpg?height=50&width=50",
    rating: 5,
    text: " Khi mới bắt đầu có ý định mong muốn đi du học Hàn Quốc hệ tiếng Anh, mình đã rất mông lung trong việc tìm trung tâm tư vấn bởi khá hiếm tổ chức hỗ trợ tư vấn về con đường này, nhưng mình đã may mắn được giới thiệu và biết đến SEM. Qua SEM mà mình đã được tư vấn và định hướng rất rõ về các trường và chương trình học không chỉ ở Hàn mà còn ở các quốc gia khác nữa. Quá trình apply của mình diễn ra trùng với thời gian mình ôn thi HSGQG nên sự hỗ trợ và tư vấn cần thiết về hồ sơ, bài luận và phỏng vấn đã giúp mình giảm bớt rất nhiều áp lực cùng một lúc. Dù xuất phát muộn hơn các bạn rất nhiều nhưng nhờ SEM mà mình đã đỗ các trường Hàn Quốc cũng như các suất học bổng 100% chỉ trong 1.5 tháng. Mình đã trở nên vô cùng tự tin trên hành trình chinh phục các cảnh cửa đại học quốc tế và các học bổng giá trị cao khi có sự sát cánh đến từ SEM và đặc biệt là mentor chính Ngọc Mai.",
  },
  {
    id: 8,
    name: "Trần Thị Minh Phương",
    role: "UIC 100% Scholarship 2025, Economics, Yonsei",
    avatar: "./assets/img/alumni/Yonsei.jpg?height=50&width=50",
    rating: 5,
    text: "Mình nghĩ điểm mạnh nhất trong quá trình apply của mình là phần interview đã kéo cả bộ hồ sơ của mình lên. Trong quá trình mock interview, mentor Ngọc Mai đã mở rộng mindset của mình rất nhiều về định hướng ngành học và nghề nghiệp trong tương lai để mình có thể chuẩn bị tốt trong buổi phỏng vấn. Mình và mentor cũng đã chuẩn bị rất kỹ mọi câu hỏi có thể xuất hiện trong lúc phỏng vấn nên giáo sư hỏi gì mình cũng có ideas để trả lời.",
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
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Limit the text length for preview
  const previewLength = 500; // Adjust this value based on your design

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
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

        <p className="text-sm text-muted-foreground flex-grow mb-4">
          {isExpanded ? testimonial.text : `${testimonial.text.slice(0, previewLength)}...`}
        </p>
        {testimonial.text.length > previewLength && (
        <button 
          onClick={handleToggle} 
          className="text-blue-500 hover:underline">
          {isExpanded ? "Read Less" : "Read More"}
        </button>
        )}

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

