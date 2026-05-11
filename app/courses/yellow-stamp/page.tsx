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
    'Tư vấn các giấy tờ cần thiết cho bộ hồ sơ apply du học',
    'Hỗ trợ dịch thuật công chứng và xin dấu hợp pháp hoá (tem vàng) cho hồ sơ',
    'Hỗ trợ điền application form cùng với các mentor dày dặn kinh nghiệm',
    'Hỗ trợ thanh toán quốc tế phí apply',
    'Ưu đãi hỗ trợ điền form CIEC cho các bạn muốn xin hợp pháp hoá lãnh sự tại đại sứ quán Hàn Quốc'
    // Bạn có thể thêm các quyền lợi khác tại đây
  ];
  data.forEach(item => {
    item.isActive = false
  })
  data.forEach(item => {
    if (item.url === "/courses/yellow-stamp") {
      item.isActive = true
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
                  <BreadcrumbLink href="#">Dich vụ giấy tờ và apply</BreadcrumbLink>
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
                  <h1 className="text-3xl font-bold mb-4 mt-8">Tổng quan dịch vụ giấy tờ và apply</h1>

                  <p className="text-lg mb-6">
                  Gói dịch vụ giấy tờ và apply cung cấp dịch vụ hỗ trợ hoàn thiện giấy tờ cứng, điền online application form
                  và thanh toán quốc tế trong quá trình apply. <br/> 
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
                    <strong>Lộ trình thanh toán gói dịch vụ:</strong><br/>
                  💳Bước 1: Nhận tư vấn về thông tin dịch vụ làm hồ sơ với team <Link href="/contact" target="_blank"><span className="text-red-600">tại đây 🚀 </span></Link> <br/>
                  📩Bước 2: Team sẽ liên lạc với mentee qua zalo để chốt số lượng giấy tờ và các hạng mục cần hỗ trợ.<br/>
                  📝Bước 3: Mentee gửi hồ sơ bản cứng và bản mềm cho team<br/>
                  🚀Bước 4: Team tiến hành các bước dịch thuật công chứng, xin tem vàng cho bộ hồ sơ của mentee<br/>
                  📂Bước 5: Team gửi lại hồ sơ gốc và hồ sơ tem vàng cho mentee<br/>
                  🎯Bước 6: (Tự chọn) Team hẹn lịch meeting để mentor và mentee cùng điền online application form và thanh toán (nếu có)<br/>
                  🎯Bước 7: Mentee gửi lại đánh giá sau khi kết thúc cho dịch vụ và cập nhật kết quả sau khi apply <br/>
                  </p>

                  <p className= "text-lg mb-6">
                    <strong>🌟 Chi phí:</strong><br/>
                    🎯 Bạn vui lòng liên lạc với chúng mình <Link href="/contact" target="_blank"><span className="text-red-600">tại đây</span></Link> để nhận thông tin chi tiết về chi phí của dịch vụ nhé. <br/>
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

