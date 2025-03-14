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
                  <BreadcrumbLink href="#">Chương trình mentor A-Z</BreadcrumbLink>
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
                  <h1 className="text-3xl font-bold mb-4 mt-8">Tổng quan chương trình mentor A-Z</h1>

                  <p className="text-lg mb-6">
                  Chương trình hỗ trợ toàn diện và liên tục trong suốt quá trình chuẩn bị hồ sơ du học không giới hạn số lượng meeting trong thời gian tối 
                  đa một năm. Chương trình mentor A-Z tập trung vào lập kế hoạch du học, hướng dẫn viết bài, chỉnh sửa hồ sơ, đến luyện phỏng vấn và tư vấn chiến lược 
                  học bổng. <br/>
                  <br/>
                  Các gói mentor gồm có: 
                  <br/> <Link href="/courses/multi#preApply">🚀 Gói Gói Định hướng - Xây dựng định hướng nghiên cứu, chinh phục giáo sư</Link>
                  <br/> <Link href="/courses/multi#essay">🚀 Gói Essay Chuyên Sâu - Tối Ưu Hóa Bài Luận</Link>
                  <br/> <Link href="/courses/multi#basic">🚀 Gói Basic - Hướng dẫn toàn diện </Link>
                  <br/> <Link href="/courses/multi#premium">🚀 Gói Premium - Đồng hành tiến đến sự thành công</Link>
                  <br/>

                  </p>
                  <p className= "text-lg mb-6">
                    <strong>Lộ trình chương trình mentor A-Z:</strong><br/>
                  💳Bước 1: Thanh toán phí mentor & hoàn thành form <Link href={applicationFormURL} target="_blank" className="text-primary">đăng ký 🚀 </Link> và lựa chọn mentor mong muốn <br/>
                  📩Bước 2: Team Xác nhận đăng ký & tiến hành liên lạc mentor <br/>
                  📝Bước 3: Xác nhận lịch hẹn cho buổi meeting đầu tiên <br/>
                  🚀Bước 4: Tham gia buổi meeting với mentor qua Google Meet để chính thức bắt đầu chương trình mentor A-Z<br/>
                  📂Bước 5: Mentor và mentee cùng nhau lên kế hoạch cho suốt quá trình mentor. Team SEM sẽ cập nhật và đảm bảo tiến độ đã đề ra<br/>
                  🎯Bước 6: Mentee gửi lại đánh giá sau khi kết thúc chương trình mentor và cập nhật kết quả sau khi apply <br/>
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
              <div className="rounded-xl bg-background p-8 shadow-sm border" id="preApply">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4 mt-8">Gói Định Hướng Apply - Xây dựng định hướng nghiên cứu, chinh phục giáo sư</h2>
                  <p className="mb-6 text-lg">
                  <strong>Đối tượng:</strong><br/>
                  ✔️ Các bạn có định hướng nghiên cứu ở bậc sau đại học và muốn liên hệ với giáo sư trước khi apply. <br/>
                  ✔️ Mong muốn tăng cơ hội được nhận admission/học bổng nếu giáo sư đồng ý hợp tác. <br/>
                  <br/>
                  <strong>🌟 Nội dung gói Định hướng apply:</strong><br/>
                  📑 Mentor đánh giá profile, trường và giáo sư mong muốn liên hệ để đảm bảo sự phù hợp <br/>
                  🔍 Hướng dẫn tìm giáo sư và lab phù hợp với định hướng nghiên cứu ở bậc sau đại học<br/>
                  💼 Sửa CV và Cover Letter không giới hạn số lần để tối ưu hóa hồ sơ ứng tuyển<br/>
                  🎯 Áp dụng cho tối đa 5 giáo sư trong chương trình <br/>
                  📧 Hướng dẫn trả lời email và setup buổi trao đổi với giáo sư <br/>
                  ✅ Chia sẻ kinh nghiệm apply thực tế từ người đi trước<br/>
                  <br/>

                  💡 Hình thức: Trực tuyến qua Google Meet<br/>
                  ⏳ Thời lượng: không giới hạn số buổi<br/>
                  🎯 Thời gian kết thúc: sau khi mentee hoàn thành cover letter và CV cho đợt apply đã đăng ký, kéo dài không quá 1 năm<br/>
                  <br/>

                  Đây là cơ hội để bạn có được định hướng nghiên cứu rõ ràng, tối ưu hóa hồ sơ và tăng khả năng được giáo sư đồng ý hợp tác, từ đó nâng cao cơ hội nhận
                  admission và học bổng!🚀
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <Clock className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Thời lượng</p>
                        <p className="text-sm text-muted-foreground">không giới hạn</p>
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
                        <p className="text-sm text-muted-foreground">tối đa 1 năm</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <DollarSign className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Chi phí</p>
                        <p className="text-sm text-muted-foreground">4.800.000 VND</p>
                      </div>
                    </div>
                  </div>
              <Link href={applicationFormURL} target="_blank">
                <Button size="lg" className="w-full">
                  Đăng ký ngay
                </Button>
              </Link>
                </div>
              </div>
              {/* Course Syllabus Preview */}
              <div className="rounded-xl bg-background p-8 shadow-sm border" id="essay">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4 mt-8">Gói Essay Chuyên Sâu - Tối Ưu Hóa Bài Luận</h2>
                  <p className="mb-6 text-lg">
                  Bạn muốn tập trung sửa một bài viết duy nhất và chỉ cần sự trợ giúp chuyên sâu cho bài luận đó? Essay chuyên sâu là lựa chọn hoàn hảo dành cho bạn!
                  <br/><br/>
                  <strong>🔍 Đối tượng phù hợp:</strong><br/>
                  ✔️ Các bạn cần hỗ trợ tập trung vào 1 trong các bài viết: Study Plan, Research Statement, Personal Statement hoặc Recommendation Letter<br/>
                  ✔️ Cần góp ý, nhận xét để bài viết trở nên rõ ràng, mạch lạc và thuyết phục hơn<br/>
                  <br/>
                  <strong>🌟 Nội dung :</strong><br/>
                  📑 Mentor đánh giá trường và profile từ mentor, cùng gợi ý apply giúp tối ưu hóa cơ hội trúng tuyển.<br/>
                  ✍️  Mentro cùng mentee từng bước hoàn thiện bài viết đã lựa chọn không giới hạn số lần.<br/>
                  ✅ Mentor sẽ đưa ra những đề xuất giúp bài viết nổi bật hơn<br/>
                  📚 Chia sẻ kinh nghiệm apply thực tế từ người đi trước<br/>
                  <br/>

                  💡 Hình thức: Trực tuyến qua Google Meet<br/>
                  ⏳ Thời lượng: không giới hạn <br/>
                  🎯 Thời gian kết thúc: sau khi mentee hoàn thành bài viết cho đợt apply đã đăng ký, kéo dài không quá 1 năm<br/>
                  <br/>

                  Đây là cơ hội để bạn nhận được phản hồi chuyên sâu từ người có kinh nghiệm, giúp bài viết đạt chất lượng cao nhất trước khi apply! 🚀
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <Clock className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Thời lượng</p>
                        <p className="text-sm text-muted-foreground">không giới hạn</p>
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
                        <p className="text-sm text-muted-foreground">tối đa 1 năm</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <DollarSign className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Chi phí</p>
                        <p className="text-sm text-muted-foreground">5.000.000 VND</p>
                      </div>
                    </div>
                  </div>

                  <Link href={applicationFormURL} target="_blank">
                      <Button size="lg" className="w-full">
                        Đăng ký ngay
                      </Button>
                    </Link>

                </div>
              </div>

              {/* Course Syllabus Preview */}
              <div className="rounded-xl bg-background p-8 shadow-sm border" id="basic">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4 mt-8">Gói Basic - Hướng dẫn toàn diện</h2>
                  <p className="mb-6 text-lg">
                  Bạn đang muốn apply cho học bổng mong muốn nhưng chưa biết bắt đầu từ đâu ? Bạn đang băn khoăn phải chuẩn bị những gì cho dream school của mình ? 
                  Bạn đang gặp vấn đề trong việc chuẩn bị các bài viết cho hồ sơ apply ? Vậy thì gói Basic sẽ là lựa chọn phù hợp phù hợp cho bạn!
                  <br/><br/>
                  <strong>🔍 Đối tượng phù hợp:</strong><br/>
                  ✔️ Các bạn muốn được hướng dẫn từ đầu đến cuối trong quá trình apply học bổng hoặc một trường đại học.<br/>
                  
                  <br/>
                  <strong>🌟 Nội dung :</strong><br/>
                  ✍️  Mentor sẽ cùng mentee chuẩn bị Study Plan, Letter of Recommendation, Personal Statement, Mock Interview không giới hạn số lần để  hoàn thiện hồ sơ.<br/>
                  📚 Nhận tài liệu viết bài và hướng dẫn chuẩn bị hồ sơ miễn phí để đảm bảo hồ sơ của bạn hoàn hảo nhất.<br/>
                  ✅ Mentor chia sẻ kinh nghiệm thực tế từ người đi trước<br/>
                  <br/>

                  💡 Hình thức: Trực tuyến qua Google Meet<br/>
                  ⏳ Thời lượng: không giới hạn số buổi<br/>
                  🎯 Thời gian kết thúc: sau khi mentee hoàn thành hồ sơ cho đợt apply đã đăng ký, kéo dài không quá 1 năm<br/>
                  <br/>

                  Đây là lựa chọn lý tưởng cho các bạn muốn có sự hướng dẫn toàn diện và chi tiết từ A-Z trong việc apply học bổng hoặc trường đại học, giúp bạn đạt được
                  mục tiêu một cách dễ dàng hơn!  🚀
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <Clock className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Thời lượng</p>
                        <p className="text-sm text-muted-foreground">Không giới hạn</p>
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
                        <p className="text-sm text-muted-foreground">tối đa 1 năm</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <DollarSign className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Chi phí</p>
                        <p className="text-sm text-muted-foreground">8.200.000 VND</p>
                      </div>
                    </div>
                  </div>

                  <Link href={applicationFormURL} target="_blank">
                      <Button size="lg" className="w-full">
                        Đăng ký ngay
                      </Button>
                    </Link>
                </div>
              </div>

              {/* Course Syllabus Preview */}
              <div className="rounded-xl bg-background p-8 shadow-sm border" id="premium">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4 mt-8">Gói Premium - Đồng hành tiến đến sự thành công</h2>
                  <p className="mb-6 text-lg">
                  Bạn đang muốn apply học bổng/admission nhưng chưa biết bắt đầu từ đâu ? Bạn đang băn khoăn phải chuẩn bị những gì cho dream school của mình ? 
                  Bạn mong muốn apply nhiều học bổng để tăng khả năng đậu? Vậy thì gói Premium sẽ là lựa chọn phù hợp phù hợp cho bạn!

                  <br/><br/>
                  <strong>🔍 Đối tượng phù hợp:</strong><br/>
                  ✔️ Dành cho các bạn muốn apply nhiều trường hoặc học bổng cùng lúc và cần mentor đồng hành từ đầu đến cuối.<br/>
                  ✔️ Muốn chuẩn bị nhiều bộ hồ sơ cho từng học bổng<br/>
                  ✔️ Cần sự chỉn chu cho các bộ hồ sơ apply học bổng<br/>
                  <br/>
                  <strong>🌟 Nội dung :</strong><br/>
                  🌍 Mentor hỗ trợ apply nhiều trường/học bổng trong danh sách của mentee, không giới hạn số lượng.<br/>
                  ✍️ Sửa Study Plan, LOR, Personal Statement, Cover Letter, CV, Mock Interview không giới hạn số lần, giúp hồ sơ của bạn hoàn hảo nhất.<br/>
                  📚 Nhận tài liệu viết bài và hướng dẫn chuẩn bị hồ sơ miễn phí để giúp bạn chuẩn bị thật tốt cho từng bước apply.<br/>
                  📅 Mentor sẽ cùng lên kế hoạch apply, gợi ý danh sách các trường/học bổng phù hợp để tối ưu hóa cơ hội trúng tuyển. <br/>
                  ✅ Chia sẻ kinh nghiệm apply thực tế từ người đi trước<br/>
                  <br/>
                  <strong>💡 Điểm đặc biệt:</strong><br/>
                  💳 Lựa chọn thanh toán linh hoạt: Mentee có thể thanh toán một lần hoặc chia thành hai đợt, mỗi đợt 15 triệu.<br/>
                  <br/>
                  💡 Hình thức: Trực tuyến qua Google Meet<br/>
                  ⏳ Thời lượng: không giới hạn<br/>
                  🎯 Thời gian kết thúc: sau khi mentee hoàn thành hồ sơ cho đợt apply đã đăng ký, kéo dài không quá 1 năm<br/>
                  <br/>

                  Gói Premium là sự lựa chọn hoàn hảo cho những ai muốn apply nhiều trường và học bổng, với sự đồng hành toàn diện từ các mentor giàu kinh nghiệm, 
                  giúp bạn nâng cao cơ hội thành công! 🚀
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <Clock className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Thời lượng</p>
                        <p className="text-sm text-muted-foreground">Không giới hạn</p>
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
                        <p className="text-sm text-muted-foreground">Tối đa 1 năm</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <DollarSign className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Chi phí</p>
                        <p className="text-sm text-muted-foreground">30.000.000 VND</p>
                      </div>
                    </div>
                  </div>

                  <Link href={applicationFormURL} target="_blank">
                      <Button size="lg" className="w-full">
                        Đăng ký ngay
                      </Button>
                    </Link>
                </div>
              </div>
            </div>
      </SidebarInset>
    </SidebarProvider>

  )
}

