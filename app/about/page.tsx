"use client"

import { useResponsive } from "@/hooks/use-responsive"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Target, History, Award, Users, GraduationCap, Globe } from "lucide-react"
import Footer from "@/components/home-section/Footer"

export default function AboutPage() {
  const { isMobile, isTablet, isDesktop } = useResponsive()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">SEM Scholars - Scholarship Exploring with Mentors</h1>
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
                <p className="text-muted-foreground mb-4 text-lg">
                SEM Scholars được thành lập với sứ mệnh xây dựng một môi trường học tập và phát triển chuyên nghiệp, nơi các bạn trẻ không chỉ được hỗ trợ về học bổng mà
                còn được trang bị những kỹ năng thiết yếu để vươn xa trong hành trình học tập và sự nghiệp. Đội ngũ SEM cam kết mang lại giá trị thông qua sự hướng dẫn tận
                tâm, các dịch vụ chất lượng cao và sự đồng hành bền vững, giúp mentees không chỉ đạt được học bổng danh giá mà còn phát triển toàn diện về tư duy, kỹ năng
                và định hướng tương lai. <br/>
                Với tinh thần “Scholarship Exploring with Mentors”, SEM Scholars không chỉ là một tổ chức hỗ trợ du học mà còn là người bạn đồng hành, người dẫn dắt giúp
                các bạn
                khám phá cơ hội, truyền động lực và tiếp sức mạnh để biến ước mơ du học thành hiện thực.
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
                <p className="text-muted-foreground mb-4 text-lg">
                SEM Scholars hướng đến trở thành một tổ chức tiên phong trong lĩnh vực hỗ trợ du học và phát triển cá nhân, tạo ra một cộng đồng vững mạnh nơi mỗi cá nhân
                đều có cơ hội tiếp cận với nền giáo dục chất lượng cao trên thế giới. Với sự kết hợp giữa kiến thức, kinh nghiệm và công nghệ, SEM không ngừng cải tiến các
                dịch vụ, mở rộng phạm vi hỗ trợ để đáp ứng nhu cầu ngày càng đa dạng của mentees.<br/>
                Trong tương lai, SEM Scholars sẽ tiếp tục xây dựng một hệ sinh thái tư vấn và đào tạo chuyên sâu, giúp các bạn trẻ Việt Nam không chỉ đạt được học bổng mà 
                còn trang bị hành trang vững chắc để thành công trong môi trường học thuật và chuyên nghiệp toàn cầu.
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
              title: "Chuyên Nghiệp và Tận Tâm",
              description:
                "SEM Scholars cam kết cung cấp dịch vụ chất lượng, hỗ trợ tận tâm để giúp mentees đạt được mục tiêu du học và phát triển bản thân.",
            },
            {
              icon: Award,
              title: "Đổi Mới và Sáng Tạo",
              description:
                "SEM luôn sáng tạo và cải tiến để mang đến những giải pháp tối ưu, giúp các bạn trẻ vượt qua thử thách và nắm bắt cơ hội du học.",
            },
            {
              icon: Globe,
              title: "Đoàn Kết và Hợp Tác",
              description:
                "Chúng tôi tạo môi trường hợp tác, nơi mọi người cùng chia sẻ, học hỏi và phát triển để cùng nhau chinh phục ước mơ du học.",
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
        <h2 className="text-2xl font-bold mb-6 text-center">Quá trình phát triển</h2>
        <Card className="mb-16 overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-primary/10 p-4 flex items-center gap-3">
              <History className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold">Hành trình của SEM</h2>
            </div>
            <div className="p-6 space-y-6">
              <div className="border-l-2 border-primary/30 pl-4 ml-2 relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] -top-1"></div>
                <h3 className="text-lg font-semibold mb-1">Tháng 3, 2020: Hành trình được bắt đầu</h3>
                <p className="text-muted-foreground">
                  Thành lập bởi founder Linh Mon với các video hướng dẫn apply học bổng chính phủ Hàn Quốc tại kênh youtube Linh Mon. 
                  Năm đầu tiên mentor, team đã có cho mình 3 mentee đậu học bổng GKS-U 2021, 1 bạn đậu học bổng toàn phần của KAIST- trường đại học khoa học kĩ thuật hàng đầu Hàn Quốc
 và 1 bạn đậu vào trường Seoul National University(SNU)- trường đại học rank 1 Hàn Quốc
                </p>
              </div>

              <div className="border-l-2 border-primary/30 pl-4 ml-2 relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] -top-1"></div>
                <h3 className="text-lg font-semibold mb-1">2021: Tìm kiếm đồng đội</h3>
                <p className="text-muted-foreground">
                 Founder tìm được những người cộng sự mới và bắt đầu cùng nhau phát triển team và hỗ trợ mentee nộp các học bổng tại Hàn Quốc
                </p>
              </div>

              <div className="border-l-2 border-primary/30 pl-4 ml-2 relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] -top-1"></div>
                <h3 className="text-lg font-semibold mb-1">2022: SEM Scholars được ra mắt</h3>
                <p className="text-muted-foreground">
                 Team được đổi tên thành SEM Scholars- Scholarship Exploring with Mentors. Nhiều mentor đầy tâm huyết đã gia nhập team SEM và cùng team hỗ trợ các bạn mentee apply học bổng trên toàn thế giới.
                </p>
              </div>

              <div className="border-l-2 border-primary/30 pl-4 ml-2 relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] -top-1"></div>
                <h3 className="text-lg font-semibold mb-1">2024: Thành tựu quan trọng</h3>
                <p className="text-muted-foreground">
                  Team đã nâng cao thành tích với hơn 100 mentee thành công chinh phục hơn 150 suất học bổng trên toàn thế giới. Các mentee xuất sắc cũng lần lượt chinh phục
                  nhiều học bổng mới và nhiều miền đất mới trên thế giới. <br/>
                  Team SEM Scholars cũng mở rộng bộ máy nhân sự với các thành viên trong team Marketing, Media, Mentor, HR, Tech.
                </p>
              </div>

              <div className="pl-4 ml-2 relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] -top-1"></div>
                <h3 className="text-lg font-semibold mb-1">2025: Hành trình tương lai</h3>
                <p className="text-muted-foreground">
                  Với cộng đồng hơn 30.000 thành viên, hơn 14 mentor và tỷ lệ thành công là 70%, chúng tôi tiếp tục nỗ lực không ngừng nghỉ trong việc
                  phát triển và cải tiến các chương trình mentor của mình để hỗ trợ tốt hơn cho các học giả trên toàn thế giới.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact Section */}
        <h2 className="text-2xl font-bold mb-6 text-center">Sức ảnh hưởng</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            {
              icon: Users,
              stat: "30,000+",
              label: "Community Members",
            },
            {
              icon: GraduationCap,
              stat: "100+",
              label: "Successful Mentees",
            },
            {
              icon: Award,
              stat: "150+",
              label: "Scholarships Secured",
            },
            {
              icon: Globe,
              stat: "16+",
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
          <h2 className="text-2xl font-bold mb-4">Tham gia sứ mệnh của chúng tôi</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
           Dù bạn là sinh viên đang tìm kiếm sự hướng dẫn, cựu sinh viên muốn đóng góp lại cho cộng đồng, hay người ủng hộ việc tiếp cận giáo dục, SEM Scholars luôn 
           chào đón bạn gia nhập cộng đồng của chúng tôi.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

