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
  const benefits: string[] = [
    'Cá nhân hóa toàn bộ hành trình apply với mentor giàu kinh nghiệm.',
    '1 buổi kick-off meeting (30 - 45 phút): đánh giá hồ sơ ; định hướng nội dung hồ sơ ; giải đáp thắc mắc và lên timeline',
    '1 buổi warm-up meeting (30 phút): lên kế hoạch cá nhân hóa & timeline apply.',
    'Hỗ trợ tối đa 4 buổi meeting chuyên sâu feedback bài luận cá nhân và CV.',
    'Hỗ trợ một buổi mock interview khi vượt qua vòng hồ sơ',
    'Được mentor giải đáp các câu hỏi liên quan trong suốt chương trình mentor.',
    'Gia nhập mạng lưới alumni từng đạt học bổng & đang học tập tại nước ngoài',
    // Bạn có thể thêm các quyền lợi khác tại đây
  ];

  data.forEach(item => {
    if (item.url === "/courses/shortterm") {
      item.isActive = true
    } else {
      item.isActive = false
    }
  })
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
                  <BreadcrumbLink href="#">Chương trình học bổng ngắn hạn và ngoại khoá</BreadcrumbLink>
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
                  <h1 className="text-3xl font-bold mb-4 mt-8">Tổng quan gói mentor học bổng ngắn hạn và ngoại khoá</h1>

                  <p className="text-lg mb-6">
                  Gói mentor học bổng ngắn hạn và ngoại khoá cung cấp các buổi mentoring linh hoạt, tập trung vào hỗ trợ cho 
                  các bạn đang muốn apply các chương trình ngoại khoá hoặc các học bổng ngắn hạn theo từng kỳ. <br/>
                  </p>
                  <br/>
                  <h3 className="text-xl font-bold mb-3">Quyền lợi:</h3>
                  <ul className="space-y-2 mb-6">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                          <CheckIcon className="h-3 w-3 text-primary" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  
                  <p className= "text-lg mb-6">
                    <strong>Lộ trình thanh toán gói mentor:</strong><br/>
                  💳Bước 1: Thanh toán phí mentor & hoàn thành form <Link href={applicationFormURL} target="_blank">đăng ký 🚀 </Link> và lựa chọn mentor mong muốn <br/>
                  📩Bước 2: Team Xác nhận đăng ký & tiến hành liên lạc mentor <br/>
                  📝Bước 3: Xác nhận lịch hẹn cho buổi Kick-off<br/>
                  🚀Bước 4: Tham gia buổi meeting với mentor qua Google Meet để chính thức bắt đầu chương trình mentor<br/>
                  📂Bước 5: Mentor và mentee cùng nhau lên kế hoạch cho suốt quá trình mentor. Team SEM sẽ cập nhật và đảm bảo tiến độ đã đề ra<br/>
                  🎯Bước 6: Mentee gửi lại đánh giá sau khi kết thúc chương trình mentor và cập nhật kết quả sau khi apply <br/>
                  </p>

                  <p className= "text-lg mb-6">
                    <strong>🌟 Chi phí:</strong><br/>
                    💼 Từ <span className="text-red-600">5,500,000 - 7,000,000 VND</span> - Phụ thuộc vào quy mô của chương trình mentee muốn apply và 
                    mức độ yêu cầu của bộ hồ sơ.<br/>
                    🎯 Hãy liên lạc với chúng mình <Link href="/contact" target="_blank"><span className="text-red-600">tại đây</span></Link> để nhận thông tin chi tiết về chi phí của chương trình bạn muốn apply nhé. <br/>
                    <br/>
                  </p>

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
            </div>
      </SidebarInset>
    </SidebarProvider>

  )
}

