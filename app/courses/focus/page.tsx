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
import FocusPackageTable from "@/components/FocusPackageTable"


export default function Page() {
  const benefits: string[] = [
    'Cá nhân hóa toàn bộ hành trình apply với mentor giàu kinh nghiệm.',
    '1 buổi kick-off meeting (30 phút): đánh giá hồ sơ & định hướng cải thiện hồ sơ và giải đáp thắc mắc',
    '1 buổi warm-up meeting (30 phút): lên kế hoạch cá nhân hóa & timeline apply.',
    'Sửa hồ sơ không giới hạn số lần: bài luận cá nhân, study plan, thư giới thiệu.',
    'Hướng dẫn xin hợp pháp hóa giấy tờ',
    'Hướng dẫn làm hồ sơ chứng minh tài chính (chỉ áp dụng cho gói USA Scholarship)',
    'Mentor đồng hành trên quá trình hoàn thành hồ sơ ứng tuyển dựa trên guideline của trường/ học bổng.',
    'Được mentor hướng dẫn phỏng vấn, xây dựng bộ câu hỏi tiềm năng và mock interview không giới hạn số buổi.',
    'Truy cập tài liệu độc quyền từ SEM Scholars: hướng dẫn apply, viết bài, phỏng vấn, kinh nghiệm từ mentor & alumni',
    'Được mentor giải đáp các câu hỏi liên quan đến du học và học bổng trong suốt chương trình mentor.',
    'Gia nhập mạng lưới alumni từng đạt học bổng & đang học tập tại nước ngoài',
    // Bạn có thể thêm các quyền lợi khác tại đây
  ];

  data.forEach(item => {
    if (item.url === "/courses/focus") {
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
                  <BreadcrumbLink href="#">Chương trình mentor Focus</BreadcrumbLink>
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
                  <h1 className="text-3xl font-bold mb-4 mt-8">Tổng quan các gói Focus</h1>

                  <p className="text-lg mb-6">
                  Các gói mentor dành cho mentee muốn nhận sự hỗ trợ toàn diện và liên tục trong suốt quá 
                  trình chuẩn bị hồ sơ du học, từ giai đoạn lập kế hoạch cho đến khi hoàn thiện hồ sơ và chuẩn 
                  bị phỏng vấn cho một học bổng hoặc trường nhất định. Mentee sẽ được tham gia các buổi 
                  mentoring không giới hạn số lượng trong thời 
                  gian tối đa là một năm, mang lại sự linh động tối đa để mentee có thể được hỗ trợ khi cần. 
                  Các buổi mentoring sẽ bao gồm tất cả các khía cạnh quan trọng trong quá trình ứng tuyển học 
                  bổng, từ việc lập kế hoạch apply, hướng dẫn viết bài, chỉnh sửa hồ sơ đến luyện phỏng 
                  vấn. Chương trình này phù hợp với những mentee đã xác định được học bổng/trường cụ thể và 
                  muốn nhận sự hỗ trợ xuyên suốt trong suốt quá trình.
                  </p>
                  <FocusPackageTable />
                  <p className= "text-lg mb-6">
                    <strong>Lộ trình chương trình mentor Focus:</strong><br/>
                  💳Bước 1: Thanh toán phí mentor & hoàn thành form <Link href={applicationFormURL} target="_blank" className="text-primary">đăng ký 🚀 </Link> và lựa chọn mentor mong muốn <br/>
                  📩Bước 2: Team Xác nhận đăng ký & tiến hành liên lạc mentor <br/>
                  📝Bước 3: Xác nhận lịch hẹn cho buổi Kick-off <br/>
                  🚀Bước 4: Tham gia buổi meeting với mentor qua Google Meet để chính thức bắt đầu chương trình mentor Focus<br/>
                  📂Bước 5: Mentor và mentee cùng nhau lên kế hoạch cho suốt quá trình mentor. Team SEM sẽ cập nhật và đảm bảo tiến độ đã đề ra<br/>
                  🎯Bước 6: Mentee gửi lại đánh giá sau khi kết thúc chương trình mentor và cập nhật kết quả sau khi apply <br/>
                  </p>

                  <h3 className="text-xl font-bold mb-3">Quyền lợi chung:</h3>
  
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
                        <p className="text-sm text-muted-foreground">Tùy chọn</p>
                      </div>
                    </div>
                  </div>

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
              <div className="rounded-xl bg-background p-8 shadow-sm border" id="GKS">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4 mt-8">Gói GKS - Học bổng chính phủ Hàn Quốc</h2>
                  <p className="mb-6 text-lg">
                  <strong>Đối tượng:</strong><br/>
                  ✔️ Các bạn học sinh, sinh viên đang chuẩn bị ứng tuyển học bổng GKS bậc Cử nhân (GKS-U) 
                  hoặc bậc Sau đại học (GKS-G) của chính phủ Hàn Quốc - một trong những học bổng cạnh tranh 
                  nhất khu vực châu Á. <br/>
                  ✔️ Mong muốn được mentor hỗ trợ và lên chiến lược apply phù hợp <br/>
                  <br/>
                  <strong>🌟 Chi phí:</strong><br/>
                  📑 Early bird: <span className="text-red-600">8,500,000 VND</span> - Áp dụng cho đơn đăng 
                  ký từ tháng 12 đến tháng 2 đối với GKS-U; từ tháng 4 đến hết tháng 7 đối với GKS-G <br/>
                  💼 Thông thường: <span className="text-red-600">9,500,000 VND</span> - Áp dụng cho đơn đăng ký trong tháng bình thường<br/>
                  🎯 Urgent: <span className="text-red-600">12,000,000 VND</span> - Áp dụng cho đơn đăng ký trước deadline 1,5 tháng. Cụ thể: đơn đăng
                  ký sau ngày 15/8 đối với GKS-U; đơn đăng ký sau ngày 15/1 đối với GKS-G <br/>
                  <br/>
                  </p>
                  <Link href={applicationFormURL} target="_blank">
                      <Button size="lg" className="w-full">
                        Đăng ký ngay
                      </Button>
                    </Link>


                </div>
              </div>
              {/* Course Syllabus Preview */}
              <div className="rounded-xl bg-background p-8 shadow-sm border" id="IST">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4 mt-8">Gói khối IST - STEM Focus</h2>
                  <p className="mb-6 text-lg">
                  Gói này phù hợp với học sinh, sinh viên có định hướng theo học ngành STEM (Khoa học, Công nghệ, 
                  Kỹ thuật, Khoa học cơ bản) và đang nhắm tới các học bổng toàn phần của một trong những trường kỹ thuật 
                  hàng đầu tại châu Á: <br/>
                  🇰🇷 KAIST (Korea Advanced Institute of Science and Technology), POSTECH, UNIST, DGIST, GIST <br/>
                  🇭🇰 HKUST (The Hong Kong University of Science and Technology) <br/>
                  Các chương trình này đều tuyển chọn gắt gao, yêu cầu ứng viên có hồ sơ học thuật tốt, bài 
                  luận logic, tư duy nghiên cứu khoa học rõ ràng và phỏng vấn xuất sắc.
                  <br/><br/>
                  <strong>🔍 Đối tượng phù hợp:</strong><br/>
                  ✔️ Các bạn đang mong muốn giành học bổng từ một trong các trường đại học nêu trên<br/>
                  ✔️ Cần mentor giàu kinh nghiệm, là sinh viên các trường STEM hàng đầu<br/>
                  <br/>
                  <strong>🌟 Chi phí:</strong><br/>
                  💼 Thông thường: <span className="text-red-600">20,000,000 VND</span> - Áp dụng cho đơn đăng ký trong tháng bình thường<br/>
                  🎯 Urgent: <span className="text-red-600">25,000,000 VND</span> - Áp dụng cho đơn đăng ký trước deadline 45 ngày.<br/>
                  💼 Hình thức thanh toán: tại thời điểm đăng ký thanh toán <span className="text-red-600">15,000,000 VND đối với đợt thông thường và 20,000,000 VND đối với đợt urgent</span>. Thanh toán  <span className="text-red-600">5,000,000 VND</span> còn lại tại thời điểm có thư mời nhập học.<br/>
                  <br/>
                  </p>

                  <Link href={applicationFormURL} target="_blank">
                      <Button size="lg" className="w-full">
                        Đăng ký ngay
                      </Button>
                    </Link>

                </div>
              </div>

              {/* Course Syllabus Preview */}
              <div className="rounded-xl bg-background p-8 shadow-sm border" id="Eurograd">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4 mt-8">Gói Grad Europe - Học bổng bậc sau đại học ở Châu Âu</h2>
                  <p className="mb-6 text-lg">
                  Gói mentor Grad Europe hướng đến các bạn đã tốt nghiệp đại học và đang chuẩn bị apply các 
                  học bổng bậc sau đại học tại các quốc gia Châu Âu, đặc biệt là học bổng toàn phần có độ 
                  cạnh tranh cao như: 
                  <span className="text-red-600">Erasmus Mundus Joint Master Degrees</span>, 
                  <span className="text-red-600"> VLIR-UOS (Bỉ)</span> - học bổng toàn phần dành cho công dân các nước đang phát triển, 
                  Các học bổng chính phủ & trường đại học khác tại Pháp, Đức, Ý, Hà Lan, Ireland...
                  <br/><br/>

                  <strong>🌟 Chi phí:</strong><br/>
                  📑 Erasmus Mundus / VLIR-UOS: <span className="text-red-600">18,000,000 VND</span> <br/>
                  💼 Các học bổng EU còn lại: <span className="text-red-600">12,000,000 VND</span>
                  <br/>
                  </p>

                  <Link href={applicationFormURL} target="_blank">
                      <Button size="lg" className="w-full">
                        Đăng ký ngay
                      </Button>
                    </Link>
                </div>
              </div>
              <div className="rounded-xl bg-background p-8 shadow-sm border" id="USA">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4 mt-8">Gói USA Scholarship</h2>
                  <p className="mb-6 text-lg">
                  Gói này được thiết kế dành cho học sinh, sinh viên đang apply học bổng vào các trường đại 
                  học tại Hoa Kỳ, bao gồm: <br/>
                  ✔️ Học bổng/ admission hệ Undergraduate từ các trường liberal arts, Ivy League, hoặc các đại học top <br/>
                  ✔️ Học bổng Assistantship / Fellowship bậc Graduate (Thạc sĩ hoặc Tiến sĩ) <br/>

                  Phù hợp với những bạn cần sự đồng hành trọn vẹn để chuẩn bị từng phần của bộ hồ sơ du học Mỹ - quốc gia có hệ thống tuyển sinh linh hoạt nhưng cạnh tranh khốc liệt. <br/>

                  <br/>
                  <strong>🌟 Chi phí:</strong><br/>
                  💼 Undergraduate: <span className="text-red-600">30,000,000 VND</span><br/>
                  🎯 Graduate: <span className="text-red-600">20,000,000 VND</span><br/>
                  <br/>
                  </p>
                  <Link href={applicationFormURL} target="_blank">
                      <Button size="lg" className="w-full">
                        Đăng ký ngay
                      </Button>
                    </Link>


                </div>
              </div>

              {/* Course Syllabus Preview */}
              <div className="rounded-xl bg-background p-8 shadow-sm border" id="general">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4 mt-8">Gói General Scholarship</h2>
                  <p className="mb-6 text-lg">
                  Gói này phù hợp với học sinh, sinh viên đang apply các học bổng du học toàn phần hoặc bán 
                  phần không nằm trong nhóm flagship, nhưng vẫn có quy trình tuyển chọn nghiêm túc và đòi 
                  hỏi hồ sơ chỉn chu. <br/>
                  <strong>Đối tượng:</strong><br/>
                  ✔️ Các bạn muốn apply học bổng từ các trường đại học quốc tế (ở Nhật, Trung, Đài, Singapore, Úc, Canada, Châu Âu...)<br/>
                  ✔️ Apply học bổng từ các tổ chức phi chính phủ, quỹ phát triển, viện nghiên cứu, học bổng ngắn hạn… <br/>
                  <br/>
                  <strong>🌟 Chi phí:</strong><br/>
                  💼 Thông thường: <span className="text-red-600">9,500,000 VND</span> - Áp dụng cho đơn đăng ký trong tháng bình thường<br/>
                  🎯 Urgent: <span className="text-red-600">12,000,000 VND</span> - Áp dụng cho đơn đăng ký trước deadline 1 tháng.<br/>
                  <br/>
                  </p>
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

