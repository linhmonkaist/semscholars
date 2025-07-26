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
import ComboPackageTable from "@/components/ComboPackageTable"


export default function Page() {
  const benefits: string[] = [
    'Cá nhân hóa toàn bộ hành trình apply với mentor giàu kinh nghiệm.',
    '1 buổi kick-off meeting (30 phút): đánh giá hồ sơ & định hướng cải thiện hồ sơ, lựa chọn trường và giải đáp thắc mắc',
    '1 buổi warm-up meeting (30 phút): lên kế hoạch cá nhân hóa, lên chiến lược apply và danh sách trường, giúp tối ưu tỷ lệ trúng tuyển.',
    'Sửa hồ sơ không giới hạn số lần: bài luận cá nhân, study plan, thư giới thiệu.',
    'Hướng dẫn xin hợp pháp hóa giấy tờ',
    'Mentor đồng hành trên quá trình hoàn thành hồ sơ ứng tuyển dựa trên guideline của trường/ học bổng.',
    'Được mentor hướng dẫn phỏng vấn, xây dựng bộ câu hỏi tiềm năng và mock interview không giới hạn số buổi.',
    'Truy cập tài liệu độc quyền từ SEM Scholars: hướng dẫn apply, viết bài, phỏng vấn, kinh nghiệm từ mentor & alumni',
    'Được mentor giải đáp các câu hỏi liên quan đến du học,  và học bổng trong suốt chương trình mentor.',
    'Gia nhập mạng lưới alumni từng đạt học bổng & đang học tập tại nước ngoài',
    // Bạn có thể thêm các quyền lợi khác tại đây
  ];
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
                  <BreadcrumbLink href="#">Chương trình mentor Combo</BreadcrumbLink>
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
                  <h1 className="text-3xl font-bold mb-4 mt-8">Tổng quan các gói Combo</h1>

                  <p className="text-lg mb-6">
                  Các gói Combo được thiết kế dành cho mentee có kế hoạch apply nhiều trường hoặc học bổng 
                  cùng lúc, và mong muốn nhận sự hỗ trợ toàn diện trong suốt quá trình chuẩn bị, từ khâu xây 
                  dựng chiến lược apply đa mục tiêu cho đến khi hoàn thiện hồ sơ cho từng lựa chọn cụ thể.<br/>

                  Mentee sẽ được mentor đồng hành liên tục, tham gia các buổi mentoring không giới hạn số 
                  lượng trong thời gian tối đa là một năm, đảm bảo tính linh hoạt và sát sao trong việc tối ưu 
                  hồ sơ cho từng trường. <br/>
                  Các buổi mentoring sẽ bao gồm tất cả các khía cạnh quan trọng trong quá trình apply, từ phân 
                  tích ưu nhược điểm hồ sơ, hướng dẫn lập kế hoạch apply thông minh, chỉnh sửa bài luận cho 
                  từng trường, đến luyện phỏng vấn cá nhân hóa. <br/>
                  Chương trình này phù hợp với những mentee muốn tăng xác suất trúng tuyển bằng cách nộp nhiều 
                  hồ sơ chất lượng, và cần một mentor hiểu rõ cách triển khai chiến lược apply hiệu quả cho 
                  nhiều lựa chọn song song.
                  </p>
                  <ComboPackageTable />
                  <p className= "text-lg mb-6">
                    <strong>Lộ trình chương trình mentor Combo:</strong><br/>
                  💳Bước 1: Thanh toán phí mentor & hoàn thành form <Link href={applicationFormURL} target="_blank" className="text-primary">đăng ký 🚀 </Link> và lựa chọn mentor mong muốn <br/>
                  📩Bước 2: Team Xác nhận đăng ký & tiến hành liên lạc mentor <br/>
                  📝Bước 3: Xác nhận lịch hẹn cho buổi kick-off <br/>
                  🚀Bước 4: Tham gia buổi kick-off với mentor qua Google Meet để chính thức bắt đầu chương trình mentor Combo<br/>
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
              <div className="rounded-xl bg-background p-8 shadow-sm border" id="regional">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4 mt-8">Gói Regional Combo 5-Uni, Regional Combo 10-Uni</h2>
                  <p className="mb-6 text-lg">
                  <strong>Đối tượng:</strong><br/>
                  ✔️ Mentee đang có kế hoạch apply nhiều trường trong khu vực: Châu Á, Châu Âu, Châu Úc <br/>
                  ✔️ Mentee cần xây dựng chiến lược apply thông minh, tối ưu hóa cơ hội trúng tuyển trên nhiều lựa chọn. <br/>
                  ✔️ Mong muốn được mentor hỗ trợ và lên chiến lược apply phù hợp <br/>
                  <br/>
                  <strong>🌟 Chi phí và phương thức thanh toán:</strong><br/>
                  📑 Regional Combo 5-Uni: thanh toán 2 đợt. Đợt 1, tại thời điểm đăng ký, <span className="text-red-600">18,000,000 VND</span>. Đợt 2:<span className="text-red-600"> 12,000,000 VND</span> <br/>
                  💼 Regional Combo 10-Uni: thanh toán 2 đợt. Đợt 1, tại thời điểm đăng ký, <span className="text-red-600">30,000,000 VND</span>. Đợt 2:<span className="text-red-600"> 20,000,000 VND</span> <br/>
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
              <div className="rounded-xl bg-background p-8 shadow-sm border" id="FR">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4 mt-8">Gói Fast Retailing Combo</h2>
                  <p className="mb-6 text-lg">
                  Gói này dành cho các mentee mong muốn apply học bổng Fast Retailing - Quỹ học bổng của Tập 
                  đoàn UNIQLO, quỹ học bổng dành cho sinh viên châu Á có nguyện vọng học tập tại Nhật Bản. Điểm đặc biệt của
                  chương trình này là mentee phải nộp hồ sơ xin học bổng trước, trải qua vòng hồ sơ và phỏng vấn.
                  Sau khi trúng tuyển học bổng, mentee sẽ đến bước chọn các trường phù hợp để apply aadmission. <br/>
                  Điều này đòi hỏi mentee phải có chiến lược apply linh hoạt, bài luận xuất sắc ngay từ đầu, 
                  và chuẩn bị kỹ cho giai đoạn apply trường sau khi đã đậu học bổng. <br/>
                  <br/><br/>

                  <strong>🌟 Chi phí và hình thức thanh toán:</strong><br/>
                  📑 Chi phí: <span className="text-red-600">30,000,000 VND</span> <br/>
                  💼 Thanh toán 2 đợt. Đợt một, tại thời điểm đăng ký, thanh toán <span className="text-red-600">12,000,000 VND</span>. Đợt 2, sau khi có kết quả học bổng FR, thanh toán  <span className="text-red-600">18,000,000 VND</span> còn lại.<br/>
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
              <div className="rounded-xl bg-background p-8 shadow-sm border" id="global">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4 mt-8">Gói Global Combo 5-Uni, Global Combo 10-Uni</h2>
                  <p className="mb-6 text-lg">
                  Gói mentor Global Combo dành cho mentee đang có chiến lược apply nhiều trường hoặc học bổng 
                  ở nhiều khu vực khác nhau trên thế giới, đặc biệt phù hợp với các bạn muốn tăng tối đa cơ 
                  hội trúng tuyển bằng cách mở rộng vùng apply, mở rộng học bổng và trường học, đặc biệt là hướng 
                  đến Mỹ như một trong những lựa chọn. Gói mentor cũng phù hợp với các bạn cần một mentor dẫn 
                  dắt xuyên suốt hành trình dài, với năng lực tư vấn đa quốc gia, bao gồm Mỹ.
                  <br/>
                  Đặc biệt, ngoài các quyền lợi chung, với gói Global Combo, mentor sẽ giúp mentee xây dựng chiến lược làm portfolio và hồ sơ ngoại khóa, tư vấn 
                  lựa chọn hoạt động phù hợp để làm nổi bật hồ sơ; hướng dẫn chi tiết quy trình chứng minh tài chính (CSS Profile, I-20, DS-160).
                  <br/><br/>

                  <strong>🌟 Chi phí và phương thức thanh toán:</strong><br/>
                  📑 Global Combo 5-Uni: thanh toán 2 đợt. Đợt 1, tại thời điểm đăng ký, <span className="text-red-600">30,000,000 VND</span>. Đợt 2:<span className="text-red-600"> 20,000,000 VND</span> <br/>
                  📑 Global Combo 10-Uni: thanh toán 3 đợt. Đợt 1, tại thời điểm đăng ký, <span className="text-red-600">50,000,000 VND</span>. Đợt 2:<span className="text-red-600"> 30,000,000 VND</span>. Đợt 3:<span className="text-red-600"> 20,000,000 VND</span> <br/>
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

