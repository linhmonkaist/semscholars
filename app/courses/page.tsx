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
import { data } from "./sidebar-data"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card"
import { Badge, Clock, Calendar, Users, BookOpen, CheckCircle2, DollarSign, CheckIcon } from "lucide-react"
import Footer from "@/components/home-section/Footer"
import Link from "next/link"
import { applicationFormURL } from "@/app/globalVariables"


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
        {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          
        </div> */}
        <div className="flex flex-1 flex-col gap-6 p-6">
              {/* Simple Course Overview Block */}
              <div className="rounded-xl bg-background p-8 shadow-sm border">
                <div className="max-w-3xl mx-auto">
                  {/* <Badge className="mb-4">Web Development</Badge> */}
                  <h1 className="text-3xl font-bold mb-4">Tổng quan chương trình mentor</h1>

                  <p className="text-lg text-muted-foreground mb-6">
                  SEM Scholars cung cấp hai chương trình mentor: Chương trình mentor lẻ với các buổi mentoring riêng lẻ và Chương trình mentor không giới hạn cho phép học 
                  viên tham gia không giới hạn buổi mentor trong tối đa một năm, hỗ trợ toàn diện trong suốt quá trình săn học bổng. Cả hai chương tình đều do các mentor giàu
                   kinh nghiệm, đã thành công trong việc săn học bổng và du học, trực tiếp hướng dẫn.
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
              <div className="rounded-xl bg-background p-8 shadow-sm border">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4">Gói mentor lẻ</h2>
                  <p className="mb-6">
                  Đây là dịch vụ dành cho học viên có nhu cầu nhận sự hỗ trợ một cách cụ thể và linh hoạt. Mỗi buổi mentoring trong gói này sẽ tập trung vào một chủ đề 
                  riêng biệt mà học viên mong muốn được cải thiện hoặc tìm hiểu thêm, ví dụ như viết bài luận xin học bổng, chuẩn bị hồ sơ du học, hoặc luyện phỏng vấn. 
                  Mỗi buổi mentoring sẽ kéo dài trong thời gian cố định (thường là 1-2 giờ) và được lên kế hoạch cụ thể dựa trên yêu cầu của học viên. Dịch vụ này thích 
                  hợp cho những ai cần sự trợ giúp vào những thời điểm cụ thể và không muốn cam kết dài hạn.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <Clock className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Thời lượng</p>
                        <p className="text-sm text-muted-foreground">30p-1 tiếng/buổi</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-center text-center p-4 rounded-lg bg-muted/50">
                      <Calendar className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Hình thức</p>
                        <p className="text-sm text-muted-foreground">Online</p>
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
                        <p className="text-sm text-muted-foreground">Chỉ từ 150.000 VND</p>
                      </div>
                    </div>
                  </div>
                  <a href="/courses/single">
                  <Button variant="outline" className="w-full">
                    
                        Chi tiết chương trình mentor lẻ
                    
                  </Button>
                  </a>
                </div>
              </div>
              {/* Course Syllabus Preview */}
              <div className="rounded-xl bg-background p-8 shadow-sm border">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4">Chương trình mentor A-Z</h2>
                  <p className="mb-6">
                  Chương trình này dành cho học viên muốn nhận sự hỗ trợ toàn diện và liên tục trong suốt quá trình chuẩn bị hồ sơ du học, từ giai đoạn lập kế hoạch cho 
                  đến khi hoàn thiện hồ sơ và chuẩn bị phỏng vấn. Chương trình cho phép học viên tham gia các buổi mentoring không giới hạn số lượng trong thời gian tối 
                  đa là một năm, mang lại sự linh động tối đa để học viên có thể được hỗ trợ khi cần. Các buổi mentoring sẽ bao gồm tất cả các khía cạnh quan trọng trong 
                  quá trình ứng tuyển học bổng và du học, từ việc lập kế hoạch du học, hướng dẫn viết bài luận, chỉnh sửa hồ sơ, đến luyện phỏng vấn và tư vấn chiến lược 
                  học bổng. Chương trình này phù hợp với những học viên có kế hoạch dài hạn và muốn nhận sự hỗ trợ xuyên suốt trong suốt quá trình.
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
                        <p className="text-sm text-muted-foreground">Online</p>
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
                        <p className="text-sm text-muted-foreground">Chỉ từ 5,000,000 VND</p>
                      </div>
                    </div>
                  </div>
                  <a href="/courses/multi">
                  <Button variant="outline" className="w-full">
                    Chi tiết chương trình mentor A-Z
                  </Button>
                  </a>
                </div>
              </div>
            </div>
      </SidebarInset>
    </SidebarProvider>

  )
}

