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
import { Clock, Calendar, Users, BookOpen, CheckCircle2, DollarSign, CheckIcon } from "lucide-react"
import Link from "next/link"
import { applicationFormURL } from "@/app/globalVariables"
import FocusPackageTable from "@/components/FocusPackageTable"
import ComboPackageTable from "@/components/ComboPackageTable"
import SinglePackageTable from "@/components/SinglePackageTable"


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
              <div className="rounded-xl bg-background p-8 shadow-sm border">
                <div className="max-w-3xl mx-auto">
                  {/* <Badge className="mb-4">Web Development</Badge> */}
                  <h1 className="text-3xl font-bold mb-4">Tổng quan các chương trình hỗ trợ của SEM Scholars</h1>

                  <p className="text-lg text-muted-foreground mb-6">
                  SEM Scholars cung cấp hệ sinh thái mentoring toàn diện dành cho học sinh, sinh viên 
                  Việt Nam mong muốn chinh phục học bổng quốc tế. Hiện tại SEM cung cấp 3 nhóm chương trình mentor chính: Gói
                  lẻ - hỗ trợ chuyên biệt theo nhu cầu, Gói focus - hỗ trợ đồng hành một học bổng/trường cụ thể,
                  Gói combo - chinh phục nhiều học bổng/ trường cùng lúc. Các gói hỗ trợ đều do các 
                  mentor giàu kinh nghiệm, đã thành công trong việc săn học bổng và du học, trực tiếp hướng dẫn.
                  </p>

                  <h3 className="text-xl font-bold mb-3">Các chương trình được thiết kế dựa trên:</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <CheckIcon className="h-3 w-3 text-primary" />
                      </div>
                      <span>Đặc thù từng loại học bổng (GKS, KAIST, Fast Retailing, Mỹ, Châu Âu, v.v.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <CheckIcon className="h-3 w-3 text-primary" />
                      </div>
                      <span>Khu vực apply (Châu Á, Châu Âu, Mỹ, Úc,…)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <CheckIcon className="h-3 w-3 text-primary" />
                      </div>
                      <span>Nhu cầu cụ thể của mentee: hỗ trợ lẻ, gói toàn diện theo trường/học bổng, hoặc combo nhiều trường.</span>
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
                  Đây là chương trình mentor dành cho mentee có nhu cầu nhận sự hỗ trợ một cách cụ thể và linh hoạt. Mỗi buổi mentoring trong gói này sẽ tập trung vào một chủ đề 
                  riêng biệt mà mentee mong muốn được cải thiện hoặc tìm hiểu thêm, ví dụ như viết bài luận xin học bổng, chuẩn bị hồ sơ du học, hoặc luyện phỏng vấn. 
                  Mỗi buổi mentoring sẽ kéo dài trong thời gian cố định và được lên kế hoạch cụ thể dựa trên yêu cầu của mentee. Các gói mentor này thích 
                  hợp cho những ai cần sự trợ giúp vào những thời điểm cụ thể và không muốn cam kết dài hạn.
                  </p>

                  <SinglePackageTable />

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
                        <p className="text-sm text-muted-foreground">Từ 150.000 VND</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/courses/single">
                  <Button size="lg" className="w-full">
                        Chi tiết chương trình mentor lẻ
                  </Button>
                  </Link>
                </div>
              </div>
              {/* Course Syllabus Preview */}
              <div className="rounded-xl bg-background p-8 shadow-sm border">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4">Gói Focus</h2>
                  <p className="mb-6">
                  Chương trình này dành cho mentee muốn nhận sự hỗ trợ toàn diện và liên tục trong suốt quá trình chuẩn bị hồ sơ du học, từ giai đoạn lập kế hoạch cho 
                  đến khi hoàn thiện hồ sơ và chuẩn bị phỏng vấn. Mentee sẽ được tham gia các buổi mentoring không giới hạn số lượng trong thời gian tối 
                  đa là một năm, mang lại sự linh động tối đa để mentee có thể được hỗ trợ khi cần. Các buổi mentoring sẽ bao gồm tất cả các khía cạnh quan trọng trong 
                  quá trình ứng tuyển học bổng, từ việc lập kế hoạch apply, hướng dẫn viết bài luận, chỉnh sửa hồ sơ đến luyện phỏng vấn. Chương trình này phù hợp với
                   những mentee đã xác định được học bổng/trường cụ thể và muốn nhận sự hỗ trợ xuyên suốt trong suốt quá trình.
                  </p>
                  <FocusPackageTable />

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
                        <p className="text-sm text-muted-foreground">Tùy theo học bổng và khu vực</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/courses/focus">
                  <Button size="lg" className="w-full">
                    Chi tiết chương trình Focus
                  </Button>
                  </Link>
                </div>
              </div>

              <div className="rounded-xl bg-background p-8 shadow-sm border">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4">Gói Combo</h2>
                  <p className="mb-6">
                  Gói Combo dành cho những mentee có mục tiêu ứng tuyển cùng lúc nhiều trường hoặc nhiều chương
                  trình học bổng và cần xây dựng chiến lược apply tổng thể, thống nhất và hiệu quả. Trong suốt 
                  quá trình, mentee sẽ được mentor đồng hành liên tục và hỗ trợ không giới hạn số buổi, tối đa 
                  trong một năm.
                  Chương trình tập trung vào tư duy chiến lược đa mục tiêu: từ xây dựng danh sách trường phù 
                  hợp, so sánh lợi thế giữa các lựa chọn, đến cá nhân hóa bài luận và phỏng vấn theo từng 
                  trường. Mentee cũng sẽ được hỗ trợ sâu về xây dựng portfolio, hoạt động ngoại khóa, chuẩn bị 
                  tài chính (đặc biệt với học bổng Mỹ).
                  Gói Combo phù hợp với mentee đang nhắm đến tối đa hóa cơ hội đậu học bổng qua nhiều lựa chọn,
                  đồng thời muốn có một mentor dẫn dắt xuyên suốt và linh hoạt trong từng lựa chọn.
                  </p>
                  <ComboPackageTable />

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
                        <p className="text-sm text-muted-foreground">Tùy theo học bổng và khu vực</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/courses/combo">
                  <Button size="lg" className="w-full">
                    Chi tiết chương trình Combo
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
      </SidebarInset>
    </SidebarProvider>

  )
}

