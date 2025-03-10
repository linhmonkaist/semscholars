"use client"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, BookOpen, DollarSign, CheckIcon } from "lucide-react"
import Link from "next/link"
import { applicationFormURL } from "@/app/globalVariables"
import { data } from "@/app/courses/sidebar-data"


export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar data={data}/>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Overview</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage></BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6">
              {/* Simple Course Overview Block */}
              <div className="rounded-xl bg-background p-8 shadow-sm border" id="overview">
                <div className="max-w-3xl mx-auto">
                  {/* <Badge className="mb-4">Web Development</Badge> */}
                  <h1 className="text-3xl font-bold mb-4">Tổng quan chương trình mentor lẻ</h1>

                  <p className="text-lg mb-6">
                  Chương trình mentor lẻ cung cấp các buổi mentoring linh hoạt, tập trung vào từng chủ đề cụ thể theo nhu cầu của mentee. <br/>
                  <br/>
                  Các gói mentor gồm có: 
                  <br/> <Link href="/courses/single#consulting">🚀 Gói Tư vấn apply học bổng</Link>
                  <br/> <Link href="/courses/single#essayFeedback">🚀 Gói Essay feedback - hỗ trợ nhận xét bài viết</Link>
                  <br/> <Link href="/courses/single#mockInterview">🚀 Gói Mock Interview - hỗ trợ luyện phỏng vấn</Link>
                  <br/> <Link href="/courses/single#coverletter">🚀 Gói Coverletter & CV feedback - hỗ trợ nhận xét CV và cover letter.</Link>
                  <br/>Mỗi buổi kéo dài 1-2 giờ, được lên kế hoạch theo yêu cầu. 

                  </p>
                  <p className= "text-lg mb-6">
                    <strong>Lộ trình chương trình mentor lẻ:</strong><br/>
                  💳Bước 1: Thanh toán phí mentor & hoàn thành form <Link href={applicationFormURL} target="_blank">đăng ký 🚀 </Link> và lựa chọn mentor mong muốn <br/>
                  📩Bước 2: Team Xác nhận đăng ký & tiến hành liên lạc mentor <br/>
                  📂Bước 3: Gửi tài liệu liên quan của từng gói mentor cho team <br/>
                  📝Bước 4: Xác nhận lịch hẹn sau khi nhận được lịch của mentor <br/>
                  🚀Bước 5: Tham gia buổi meeting với mentor qua Google Meet <br/>
                  🎯Bước 6: Mentee gửi lại đánh giá buổi mentor và cập nhật kết quả sau khi apply <br/>
                  </p>

                  <h3 className="text-xl font-bold mb-3">Quyền lợi:</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <CheckIcon className="h-3 w-3 text-primary" />
                      </div>
                      <span>Hướng dẫn cá nhân một kèm một với các mentor dày dặn kinh nghiệm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <CheckIcon className="h-3 w-3 text-primary" />
                      </div>
                      <span>Hình thức mentor online qua Google Meet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <CheckIcon className="h-3 w-3 text-primary" />
                      </div>
                      <span>Mentee được lựa chọn mentor mong muốn</span>
                    </li>
                  </ul>

                  <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-6 rounded-lg bg-muted">
                    <div>
                      <h3 className="text-xl font-bold mb-1">Bạn đã sẵn sàng chinh phục học bổng?</h3>
                      <p className="text-muted-foreground">Đăng ký ngay và bắt đầu hành trình ngay hôm nay.</p>
                    </div>
                    <Link href={applicationFormURL} target="_blank">
                      <Button size="lg" className="w-full md:w-auto">
                        Đăng ký ngay
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Course Syllabus Preview */}
              <div className="rounded-xl bg-background p-8 shadow-sm border" id="consulting">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4">Gói Tư vấn apply - Giải Đáp Mọi Thắc Mắc Cùng Mentor</h2>
                  <p className="mb-6 text-lg">
                  Bạn mới bắt đầu tìm hiểu về quy trình apply học bổng? Bạn có nhiều câu hỏi chuyên sâu nhưng khó tìm được câu trả lời? Bạn cần nhận xét và góp ý cho CV 
                  của mình? Hoặc đơn giản, bạn muốn trò chuyện trực tiếp với một mentor có kinh nghiệm để được hướng dẫn rõ ràng hơn? Gói tư vấn apply sẽ giúp bạn giải đáp
                  những thắc mắc đó!
                  <br/><br/>
                  <strong>🌟 Nội dung gói tư vấn:</strong><br/>
                  Buổi tư vấn apply là cuộc trò chuyện 1:1 giữa mentor và mentee nhằm giải đáp mọi thắc mắc liên quan đến việc apply học bổng. Mentor sẽ hỗ trợ bạn:<br/>
                  ✅ Định hướng và tư vấn cách xây dựng hồ sơ mạnh mẽ hơn<br/>
                  ✅ Đánh giá, nhận xét và góp ý cải thiện CV<br/>
                  ✅ Chia sẻ kinh nghiệm apply thực tế từ người đi trước<br/>
                  ✅ Giải đáp về cuộc sống du học, cách ôn thi các chứng chỉ và các vấn đề khác liên quan<br/><br/>

                  💡 Hình thức: Trực tuyến qua Google Meet<br/>
                  ⏳ Thời lượng: 30 phút/buổi<br/>
                  📌 Nội dung linh hoạt: Bạn đặt câu hỏi, Mentor giải đáp!<br/><br/>

                  Đây là cơ hội để bạn có được lời khuyên thực tế, tiết kiệm thời gian và đi đúng hướng trong hành trình apply. Hãy chuẩn bị câu hỏi của bạn và đặt lịch
                  ngay hôm nay! 🚀
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <Clock className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Thời lượng</p>
                        <p className="text-sm text-muted-foreground">30 phút/buổi</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <Calendar className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Hình thức</p>
                        <p className="text-sm text-muted-foreground">Online qua Google Meet</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <BookOpen className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Độ dài</p>
                        <p className="text-sm text-muted-foreground">1 buổi/ 1 gói</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <DollarSign className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Chi phí</p>
                        <p className="text-sm text-muted-foreground">150.000 VND</p>
                      </div>
                    </div>
                  </div>
                  <a href="/courses/single">
                  <Link href={applicationFormURL} target="_blank">
                      <Button size="lg" className="w-full">
                        Đăng ký ngay
                      </Button>
                    </Link>

                  </a>
                </div>
              </div>
              {/* Course Syllabus Preview */}
              <div className="rounded-xl bg-background p-8 shadow-sm border" id="essayFeedback">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4">Gói Essay Feedback - Nâng cấp hồ sơ du học</h2>
                  <p className="mb-6 text-lg">
                  Bạn đã hoàn thành bài essay của mình nhưng chưa chắc chắn liệu nó đã đủ thuyết phục? Bạn muốn có một mentor giàu kinh nghiệm góp ý để nâng cấp bài viết 
                  trước khi nộp? Essay Feedback là lựa chọn hoàn hảo dành cho bạn!
                  <br/><br/>
                  <strong>🔍 Đối tượng phù hợp:</strong><br/>
                  ✔️ Các bạn đã viết xong một trong các bài viết: Study Plan, Research Statement, Personal Statement hoặc Recommendation Letter<br/>
                  ✔️ Cần góp ý, nhận xét để bài viết trở nên rõ ràng, mạch lạc và thuyết phục hơn<br/>
                  <br/>
                  <strong>🌟 Nội dung :</strong><br/>
                  ✅ Mentor sẽ đọc, đánh giá và nhận chi tiết bài viết của bạn trước buôi meeting<br/>
                  ✅ Trong buổi meeting, mentor sẽ cùng bạn đi qua các nhận xét, góp ý về cách trình bày, logic, ngữ pháp, văn phong và tính thuyết phục<br/>
                  ✅ Mentor sẽ đưa ra những đề xuất giúp bài viết nổi bật hơn<br/>
                  ✅ Chia sẻ kinh nghiệm apply thực tế từ người đi trước<br/>
                  <br/>

                  💡 Hình thức: Trực tuyến qua Google Meet<br/>
                  ⏳ Thời lượng: 1 tiếng/buổi<br/>
                  📌 Mỗi gói lẻ sẽ feedback một trong các bài viết: Study Plan, Research Statement, Personal Statement hoặc Recommendation Letter<br/><br/>

                  Đây là cơ hội để bạn nhận được phản hồi chuyên sâu từ người có kinh nghiệm, giúp bài viết đạt chất lượng cao nhất trước khi nộp! 🚀
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <Clock className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Thời lượng</p>
                        <p className="text-sm text-muted-foreground">60 phút/buổi</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <Calendar className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Hình thức</p>
                        <p className="text-sm text-muted-foreground">Online qua Google Meet</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <BookOpen className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Độ dài</p>
                        <p className="text-sm text-muted-foreground">1 buổi/ 1 gói</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <DollarSign className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Chi phí</p>
                        <p className="text-sm text-muted-foreground">800.000 VND</p>
                      </div>
                    </div>
                  </div>
                  <a href="/courses/single">
                  <Link href={applicationFormURL} target="_blank">
                      <Button size="lg" className="w-full">
                        Đăng ký ngay
                      </Button>
                    </Link>

                  </a>
                </div>
              </div>

              {/* Course Syllabus Preview */}
              <div className="rounded-xl bg-background p-8 shadow-sm border" id="mockInterview">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4">Gói Mock Interview - Tự Tin Chinh Phục Vòng Phỏng Vấn</h2>
                  <p className="mb-6 text-lg">
                  Bạn sắp bước vào vòng phỏng vấn học bổng và muốn có sự chuẩn bị tốt nhất? Bạn muốn thử sức với một buổi phỏng vấn thử cùng mentor để cải thiện kỹ năng
                  trả lời? Mock Interview sẽ giúp bạn sẵn sàng với vòng phỏng vấn một cách tự tin nhất!
                  <br/><br/>
                  <strong>🔍 Đối tượng phù hợp:</strong><br/>
                  ✔️ Các bạn muốn chuẩn bị phỏng vấn học bổng<br/>
                  ✔️ Cần luyện tập trả lời câu hỏi phỏng vấn một cách tự nhiên, mạch lạc<br/>
                  ✔️  Muốn nhận góp ý chi tiết để cải thiện nội dung và phong thái trả lời<br/>
                  ✔️  Muốn nhận nhận bộ câu hỏi phỏng vấn được soạn riêng theo hồ sơ cá nhân để tiếp tục luyện tập<br/>
                  <br/>
                  <strong>🌟 Nội dung :</strong><br/>
                  ✅ Trước buổi meeting, mentor sẽ xem hồ sơ và chuẩn bị bộ câu hỏi riêng dựa trên hồ sơ của mentee<br/>
                  ✅ Trong buổi meeting, mentor sẽ đóng vai hội đồng tuyển chọn, đặt câu hỏi sát với hồ sơ, bài luận và học bổng bạn apply.<br/>
                  ✅ Mentor sẽ đánh giá câu trả lời, sửa lỗi, đề xuất cách diễn đạt tốt hơn và hướng dẫn cải thiện phong thái phỏng vấn.<br/>
                  ✅ Chia sẻ kinh nghiệm phỏng vấn thực tế từ người đi trước<br/>
                  <br/>

                  💡 Hình thức: Trực tuyến qua Google Meet<br/>
                  ⏳ Thời lượng: 1 tiếng/buổi<br/>
                  <br/>

                  Đây là cơ hội để bạn rèn luyện kỹ năng phỏng vấn trong môi trường thực tế, giúp bạn tự tin và tăng cơ hội thành công! 🚀
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <Clock className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Thời lượng</p>
                        <p className="text-sm text-muted-foreground">60 phút/buổi</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <Calendar className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Hình thức</p>
                        <p className="text-sm text-muted-foreground">Online qua Google Meet</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <BookOpen className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Độ dài</p>
                        <p className="text-sm text-muted-foreground">1 buổi/ 1 gói</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <DollarSign className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Chi phí</p>
                        <p className="text-sm text-muted-foreground">800.000 VND</p>
                      </div>
                    </div>
                  </div>
                  <a href="/courses/single">
                  <Link href={applicationFormURL} target="_blank">
                      <Button size="lg" className="w-full">
                        Đăng ký ngay
                      </Button>
                    </Link>

                  </a>
                </div>
              </div>

              {/* Course Syllabus Preview */}
              <div className="rounded-xl bg-background p-8 shadow-sm border" id="coverletter">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4">Gói Feedback CV & Cover Letter - Tạo Ấn Tượng Ngay Từ Hồ Sơ 📄 </h2>
                  <p className="mb-6 text-lg">
                  Bạn muốn CV và Cover Letter của mình thật chuyên nghiệp, thu hút giáo sư hoặc hội đồng xét tuyển học bổng? Bạn 
                  cần một mentor giàu kinh nghiệm giúp chỉnh sửa và tối ưu hóa hồ sơ? Feedback CV & Cover Letter là lựa chọn dành cho bạn!
                  <br/><br/>
                  <strong>🔍 Đối tượng phù hợp:</strong><br/>
                  ✔️ Các bạn đang chuẩn bị hồ sơ apply học bổng hoặc liên hệ giáo sư nghiên cứu cho bậc sau đại học<br/>
                  ✔️ Muốn CV chuyên nghiệp, rõ ràng, làm nổi bật thế mạnh cá nhân<br/>
                  ✔️ Cần một Cover Letter ấn tượng, phù hợp với hướng nghiên cứu hoặc học bổng<br/>
                  <br/>
                  <strong>🌟 Nội dung :</strong><br/>
                  ✅ Mentor sẽ nhận xét, chỉnh sửa CV giúp bạn trình bày rõ ràng, logic, nhấn mạnh điểm mạnh và kinh nghiệm liên quan.<br/>
                  ✅ Mentor góp ý về nội dung, bố cục, giọng văn để thư xin học bổng hoặc thư gửi giáo sư trở nên thuyết phục hơn.<br/>
                  ✅ Mentor sẽ đưa ra những đề xuất giúp bài viết nổi bật hơn<br/>
                  ✅ Chia sẻ kinh nghiệm apply thực tế từ người đi trước<br/>
                  <br/>
                  <strong>💡 Điểm đặc biệt:</strong><br/>
                  ✅ Mentee có thể gửi trước thông tin về giáo sư, lab, hướng nghiên cứu hoặc trường để mentor điều chỉnh nội dung phù hợp.<br/>
                  <br/>
                  💡 Hình thức: Trực tuyến qua Google Meet<br/>
                  ⏳ Thời lượng: 90 phút/buổi<br/>
                  <br/>

                  Đừng để CV hay Cover Letter trở thành rào cản trên hành trình apply của bạn – hãy nhận feedback từ mentor để nâng cấp hồ sơ ngay hôm nay! 🚀
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <Clock className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Thời lượng</p>
                        <p className="text-sm text-muted-foreground">90 phút/buổi</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <Calendar className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Hình thức</p>
                        <p className="text-sm text-muted-foreground">Online qua Google Meet</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <BookOpen className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Độ dài</p>
                        <p className="text-sm text-muted-foreground">1 buổi/ 1 gói</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <DollarSign className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Chi phí</p>
                        <p className="text-sm text-muted-foreground">1.100.000 VND</p>
                      </div>
                    </div>
                  </div>
                  <a href="/courses/single">
                  <Link href={applicationFormURL} target="_blank">
                      <Button size="lg" className="w-full">
                        Đăng ký ngay
                      </Button>
                    </Link>

                  </a>
                </div>
              </div>
            </div>
      </SidebarInset>
    </SidebarProvider>

  )
}

