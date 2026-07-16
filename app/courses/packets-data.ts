export type PacketGroupKey = "single" | "focus" | "combo" | "shortterm" | "yellow-stamp"

export type MentoringPacket = {
  id: string
  group: PacketGroupKey
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  price: string
  length: string
  format: string
  payment: string
  paymentDetails?: string[]
  highlights: string[]
}

export type PacketGroup = {
  key: PacketGroupKey
  title: string
  description: string
}

export const groupBenefits: Record<PacketGroupKey, string[]> = {
  single: [
    "Hướng dẫn cá nhân 1:1 với mentor giàu kinh nghiệm",
    "Hình thức mentor online linh hoạt qua Google Meet",
    "Mentee được chọn mentor phù hợp theo mục tiêu",
  ],
  focus: [
    "Cá nhân hóa toàn bộ hành trình apply với mentor giàu kinh nghiệm.",
    "1 buổi kick-off meeting (30 phút): đánh giá hồ sơ & định hướng cải thiện hồ sơ và giải đáp thắc mắc",
    "1 buổi warm-up meeting (30 phút): lên kế hoạch cá nhân hóa & timeline apply.",
    "Sửa hồ sơ không giới hạn số lần: bài luận cá nhân, study plan, thư giới thiệu.",
    "Hướng dẫn xin hợp pháp hóa giấy tờ",
    "Hướng dẫn làm hồ sơ chứng minh tài chính (chỉ áp dụng cho gói USA Scholarship)",
    "Mentor đồng hành trên quá trình hoàn thành hồ sơ ứng tuyển dựa trên guideline của trường/ học bổng.",
    "Được mentor hướng dẫn phỏng vấn, xây dựng bộ câu hỏi tiềm năng và mock interview không giới hạn số buổi.",
    "Truy cập tài liệu độc quyền từ SEM Scholars: hướng dẫn apply, viết bài, phỏng vấn, kinh nghiệm từ mentor & alumni",
    "Được mentor giải đáp các câu hỏi liên quan đến du học và học bổng trong suốt chương trình mentor.",
    "Gia nhập mạng lưới alumni từng đạt học bổng & đang học tập tại nước ngoài",
  ],
  combo: [
    "Cá nhân hóa chiến lược apply nhiều trường/học bổng cùng lúc",
    "1 buổi kick-off meeting (30 phút): đánh giá hồ sơ & định hướng cải thiện hồ sơ và giải đáp thắc mắc",
    "1 buổi warm-up meeting (30 phút): lên kế hoạch cá nhân hóa & timeline apply.",
    "Sửa hồ sơ không giới hạn số lần: bài luận cá nhân, study plan, thư giới thiệu.",
    "Hướng dẫn xin hợp pháp hóa giấy tờ",
    "Hướng dẫn làm hồ sơ chứng minh tài chính (chỉ áp dụng cho gói USA Scholarship)",
    "Mentor đồng hành trên quá trình hoàn thành hồ sơ ứng tuyển dựa trên guideline của trường/ học bổng.",
    "Được mentor hướng dẫn phỏng vấn, xây dựng bộ câu hỏi tiềm năng và mock interview không giới hạn số buổi.",
    "Truy cập tài liệu độc quyền từ SEM Scholars: hướng dẫn apply, viết bài, phỏng vấn, kinh nghiệm từ mentor & alumni",
    "Được mentor giải đáp các câu hỏi liên quan đến du học và học bổng trong suốt chương trình mentor.",
    "Gia nhập mạng lưới alumni từng đạt học bổng & đang học tập tại nước ngoài",
  ],
  shortterm: [
    "Cá nhân hóa toàn bộ hành trình apply với mentor giàu kinh nghiệm.",
    "1 buổi kick-off meeting (30 - 45 phút): đánh giá hồ sơ ; định hướng nội dung hồ sơ ; giải đáp thắc mắc và lên timeline",
    "Hỗ trợ tối đa 4 buổi meeting chuyên sâu feedback bài luận cá nhân và CV.",
    "Hỗ trợ một buổi mock interview khi vượt qua vòng hồ sơ",
    "Được mentor giải đáp các câu hỏi liên quan trong suốt chương trình mentor.",
    "Gia nhập mạng lưới alumni từng đạt học bổng & đang học tập tại nước ngoài",
  ],
  "yellow-stamp": [
    "Tư vấn các giấy tờ cần thiết cho bộ hồ sơ apply du học",
    "Hỗ trợ dịch thuật công chứng và xin dấu hợp pháp hoá (tem vàng) cho hồ sơ",
    "Hỗ trợ điền application form cùng với các mentor dày dặn kinh nghiệm (nếu mentee đăng ký thêm)",
    "Hỗ trợ thanh toán quốc tế phí apply (nếu mentee đăng ký thêm)",
    "Ưu đãi hỗ trợ điền form CIEC cho các bạn muốn xin hợp pháp hoá lãnh sự tại đại sứ quán Hàn Quốc",
  ],
}

export const groupRoadmaps: Record<PacketGroupKey, string[]> = {
  single: [
    "Bước 1: Thanh toán phí và hoàn thành form đăng ký",
    "Bước 2: Team xác nhận đăng ký và kết nối mentor",
    "Bước 3: Gửi tài liệu liên quan cho gói mentor đã chọn",
    "Bước 4: Xác nhận lịch hẹn với mentor",
    "Bước 5: Tham gia buổi mentor qua Google Meet",
    "Bước 6: Gửi đánh giá và cập nhật kết quả apply",
  ],
  focus: [
    "Bước 1: Thanh toán phí và hoàn thành form đăng ký",
    "Bước 2: Team xác nhận đăng ký và kết nối mentor",
    "Bước 3: Xác nhận lịch hẹn cho buổi kick-off",
    "Bước 4: Tham gia kick-off và chính thức bắt đầu chương trình",
    "Bước 5: Mentor và mentee triển khai kế hoạch theo timeline",
    "Bước 6: Gửi đánh giá sau chương trình và cập nhật kết quả apply",
  ],
  combo: [
    "Bước 1: Thanh toán phí và hoàn thành form đăng ký",
    "Bước 2: Team xác nhận đăng ký và kết nối mentor",
    "Bước 3: Xác nhận lịch hẹn cho buổi kick-off",
    "Bước 4: Tham gia kick-off để chốt chiến lược đa mục tiêu",
    "Bước 5: Mentor và mentee triển khai hồ sơ theo từng nhóm trường",
    "Bước 6: Gửi đánh giá sau chương trình và cập nhật kết quả apply",
  ],
  shortterm: [
    "Bước 1: Hoàn thành form đăng ký và xác nhận mục tiêu chương trình",
    "Bước 2: Team liên hệ mentor và chốt lịch khởi động",
    "Bước 3: Mentor cùng mentee xây dựng timeline apply rút gọn",
    "Bước 4: Triển khai viết/sửa hồ sơ theo deadline từng kỳ",
    "Bước 5: Mock interview khi có yêu cầu từ chương trình",
    "Bước 6: Tổng kết kết quả và cập nhật phản hồi sau apply",
  ],
  "yellow-stamp": [
    "Bước 1: Nhận tư vấn hạng mục giấy tờ cần hỗ trợ",
    "Bước 2: Team xác nhận số lượng giấy tờ và phạm vi dịch vụ",
    "Bước 3: Mentee gửi hồ sơ bản cứng và bản mềm theo hướng dẫn",
    "Bước 4: Team xử lý dịch thuật, công chứng, hợp pháp hóa lãnh sự",
    "Bước 5: Team gửi lại bộ hồ sơ hoàn thiện cho mentee",
    "Bước 6: Hỗ trợ điền application form và thanh toán quốc tế (nếu mentee đăng ký)",
  ],
}

export const packetGroups: PacketGroup[] = [
  {
    key: "single",
    title: "Gói mentor lẻ",
    description: "Các buổi hỗ trợ theo nhu cầu cụ thể: tư vấn apply, mock interview, review hồ sơ.",
  },
  {
    key: "focus",
    title: "Gói Focus",
    description: "Đồng hành chuyên sâu cho một học bổng hoặc một nhóm trường mục tiêu cụ thể. Tập trung vào lên chiến lược apply, chuẩn bị bài viết cá nhân và luyện phỏng vấn.",
  },
  {
    key: "combo",
    title: "Gói Combo",
    description: "Chiến lược apply nhiều trường/học bổng cùng lúc với lộ trình đồng bộ.",
  },
  {
    key: "shortterm",
    title: "Gói học bổng ngắn hạn và ngoại khóa",
    description: "Hỗ trợ các chương trình trao đổi, trại hè, học bổng ngắn hạn theo từng kỳ.",
  },
  {
    key: "yellow-stamp",
    title: "Dịch vụ giấy tờ và apply",
    description: "Hỗ trợ thủ tục hồ sơ, dịch thuật và hợp pháp hóa lãnh sự.",
  },
]

export const mentoringPackets: MentoringPacket[] = [
  {
    id: "single-consulting",
    group: "single",
    slug: "tu-van-apply",
    title: "Tư vấn apply",
    shortDescription: "Giải đáp thắc mắc, định hướng chiến lược apply và góp ý hồ sơ.",
    longDescription:
      "Gói tư vấn 1:1 phù hợp cho mentee muốn có định hướng rõ ràng trước khi bắt đầu hoặc trong khi đang chuẩn bị hồ sơ. Mentor sẽ giúp rà soát điểm mạnh, điểm cần cải thiện và đề xuất kế hoạch hành động theo mục tiêu học bổng.",
    price: "150.000 VNĐ / 30 phút",
    length: "30 phút / buổi",
    format: "Online",
    payment: "Thanh toán 1 lần",
    highlights: [
      "Định hướng mục tiêu và lộ trình apply cá nhân hóa",
      "Rà soát CV/profile nhanh theo tiêu chí học bổng",
      "Q&A tập trung vào vấn đề mentee đang gặp",
    ],
  },
  {
    id: "single-mock-interview",
    group: "single",
    slug: "mock-interview",
    title: "Mock Interview",
    shortDescription: "Luyện phỏng vấn dựa theo hồ sơ và học bổng cụ thể với phản hồi chi tiết từ mentor.",
    longDescription:
      "Gói mock interview tập trung mô phỏng sát phỏng vấn thực tế. Mentee được phản hồi về nội dung trả lời, cách kể câu chuyện và kỹ năng trình bày để tăng độ thuyết phục với hội đồng tuyển sinh.",
    price: "800.000 VNĐ / 1 tiếng",
    length: "60 phút / buổi",
    format: "Online",
    payment: "Thanh toán 1 lần",
    highlights: [
      "Mô phỏng câu hỏi theo học bổng hoặc trường mục tiêu",
      "Feedback chi tiết về nội dung và ngôn ngữ trình bày",
      "Đề xuất cách cải thiện sự tự tin khi phỏng vấn",
      "Nhận chia sẽ kinh nghiệm từ các mentor đi trước",
    ],
  },
  {
    id: "single-cv-cover-letter",
    group: "single",
    slug: "cv-cover-letter-review",
    title: "CV & Cover Letter Review",
    shortDescription: "Chỉnh sửa CV và cover letter theo chuẩn quốc tế và mục tiêu học bổng.",
    longDescription:
      "Gói review hồ sơ giúp mentee cải thiện độ rõ ràng, logic và khả năng thể hiện dấu ấn cá nhân trong CV và cover letter. Mentor sẽ chỉ ra điểm mạnh nên nhấn và điểm yếu cần tối ưu trước khi nộp.",
    price: "1.100.000 VNĐ / 90 phút",
    length: "90 phút / buổi",
    format: "Online",
    payment: "Thanh toán 1 lần",
    highlights: [
      "Rà soát cấu trúc và cách kể thành tích",
      "Tối ưu độ phù hợp với học bổng hoặc chương trình",
      "Gợi ý chỉnh sửa ngôn ngữ học thuật chuyên nghiệp",
    ],
  },
  {
    id: "focus-gks",
    group: "focus",
    slug: "gks",
    title: "Focus GKS",
    shortDescription: "Tập trung cho học bổng chính phủ Hàn Quốc bậc đại học và sau đại học.",
    longDescription:
      "Gói Focus GKS hỗ trợ mentee xuyên suốt từ chiến lược apply, xây dựng hồ sơ đến luyện phỏng vấn, phù hợp cho cả bậc đại học và sau đại học. Mentor theo sát từng mốc quan trọng để hồ sơ có tính nhất quán và nổi bật.",
    price: "Từ 8.500.000 - 12.000.000 VNĐ",
    length: "Tối đa 1 năm",
    format: "Online",
    payment: "Thanh toán 1 lần trước khi bắt đầu",
    paymentDetails: [
      "Mentee thanh toán toàn bộ chi phí ngay tại thời điểm đăng ký để bắt đầu chương trình.",
      "Team SEM xác nhận lịch kick-off sau khi hoàn tất thanh toán.",
      "Early bird: 8,500,000 VND - Áp dụng cho đơn đăng ký từ tháng 12 đến tháng 2 đối với GKS-U; từ tháng 4 đến hết tháng 7 đối với GKS-G",
      "Thông thường: 9,500,000 VND - Áp dụng cho đơn đăng ký trong tháng bình thường",
      "Urgent: 12,000,000 VND - Áp dụng cho đơn đăng ký trước deadline 1,5 tháng. Cụ thể: đơn đăng ký sau ngày 15/8 đối với GKS-U; đơn đăng ký sau ngày 15/1 đối với GKS-G",
    ],
    highlights: [
      "Lộ trình chi tiết theo timeline GKS",
      "Sửa hồ sơ và bài luận theo từng track mà mentee lựa chọn",
      "Luyện phỏng vấn và chia sẻ kinh nghiệm từ các mentor đi trước",
    ],
  },
  {
    id: "focus-ist",
    group: "focus",
    slug: "khoi-ist",
    title: "Focus khối IST",
    shortDescription: "Cho các trường kỹ thuật top như KAIST, UNIST, DGIST, GIST, POSTECH, NTU, HKUST, NUS, v.v.",
    longDescription:
      "Gói tập trung cho mentee apply vào nhóm trường khoa học kỹ thuật có yêu cầu hồ sơ cao. Mentor hỗ trợ định vị thế mạnh học thuật, kinh nghiệm nghiên cứu và xây dựng hồ sơ có chiều sâu chuyên môn.",
    price: "Từ 20.000.000 - 25.000.000 VNĐ",
    length: "Tối đa 1 năm",
    format: "Online",
    payment: "Thanh toán 2 đợt",
    paymentDetails: [
      "Thông thường: 20,000,000 VND - Áp dụng cho đơn đăng ký trong tháng bình thường",
      "Urgent: 25,000,000 VND - Áp dụng cho đơn đăng ký trước deadline 45 ngày.",
      "Hình thức thanh toán: tại thời điểm đăng ký thanh toán 15,000,000 VND đối với đợt thông thường và 20,000,000 VND đối với đợt urgent. Thanh toán 5,000,000 VND còn lại tại thời điểm có thư mời nhập học.",
    ],
    highlights: [
      "Tư vấn chiến lược trường/ngành theo năng lực",
      "Hỗ trợ bài luận định hướng nghiên cứu",
      "Chuẩn bị phỏng vấn học thuật chuyên sâu",
      "Định hướng theo học ngành STEM (Khoa học, Công nghệ, Kỹ thuật, Khoa học cơ bản)",
      "Hướng tới các trường kỹ thuật hàng đầu tại châu Á: KAIST, POSTECH, UNIST, DGIST, GIST, HKUST, NTU (Taiwan), NTU (Singapore), NUS (Singapore), v.v.",
      "Các chương trình tuyển chọn gắt gao, yêu cầu ứng viên có hồ sơ học thuật tốt, bài luận logic, tư duy nghiên cứu khoa học rõ ràng và phỏng vấn xuất sắc.",
    ],
  },
  {
    id: "focus-grad-europe",
    group: "focus",
    slug: "grad-europe",
    title: "Focus Grad Europe",
    shortDescription: "Tập trung học bổng bậc sau đại học tại châu Âu.",
    longDescription:
      "Gói dành cho mentee đặt mục tiêu các chương trình sau đại học ở châu Âu, với trọng tâm vào chiến lược chọn chương trình phù hợp và xây dựng hồ sơ có tính cạnh tranh theo từng quốc gia.",
    price: "Từ 12.000.000 - 18.000.000 VNĐ",
    length: "Tối đa 1 năm",
    format: "Online",
    payment: "Thanh toán 1 lần trước khi bắt đầu",
    paymentDetails: [
      "Erasmus Mundus / VLIR-UOS: 18,000,000 VND",
      "Các học bổng EU còn lại: 12,000,000 VND",
    ],
    highlights: [
      "Chiến lược chọn trường/chương trình theo profile",
      "Hỗ trợ statement of purpose và motivation letter",
      "Tối ưu hồ sơ theo yêu cầu từng hệ tuyển sinh",
      "Học bổng toàn phần có độ cạnh tranh cao như: Erasmus Mundus Joint Master Degrees, VLIR-UOS (Bỉ) - học bổng toàn phần dành cho công dân các nước đang phát triển",
      "Các học bổng chính phủ & trường đại học khác tại Pháp, Đức, Ý, Hà Lan, Ireland...",
    ],
  },
  {
    id: "focus-usa",
    group: "focus",
    slug: "usa-scholarship",
    title: "Focus USA Scholarship",
    shortDescription: "Đồng hành apply học bổng Mỹ cho nhiều bậc học.",
    longDescription:
      "Gói hỗ trợ mentee xây dựng bộ hồ sơ cạnh tranh cho môi trường tuyển sinh Mỹ, từ chọn mục tiêu, chuẩn hóa tài liệu đến chiến lược kể chuyện cá nhân nhất quán.",
    price: "20.000.000 - 30.000.000 VNĐ",
    length: "Tối đa 1 năm",
    format: "Online",
    payment: "Thanh toán 1 lần trước khi bắt đầu",
    paymentDetails: [
      "Thanh toán toàn bộ chi phí tại thời điểm đăng ký chương trình.",
      "Undergraduate: 30,000,000 VND",
      "Graduate: 20,000,000 VND",
    ],
    highlights: [
      "Chiến lược xây dựng danh sách trường mục tiêu",
      "Tối ưu personal statement và hoạt động nổi bật",
      "Hỗ trợ chuẩn bị interview",
      "Học bổng/ admission hệ Undergraduate từ các trường liberal arts, Ivy League, hoặc các đại học top",
      "Học bổng Assistantship / Fellowship bậc Graduate (Thạc sĩ hoặc Tiến sĩ)",
      "Phù hợp với những bạn cần sự đồng hành trọn vẹn để chuẩn bị từng phần của bộ hồ sơ du học Mỹ - quốc gia có hệ thống tuyển sinh linh hoạt nhưng cạnh tranh khốc liệt.",
    ],
  },
  {
    id: "focus-general",
    group: "focus",
    slug: "general-scholarship",
    title: "Focus General Scholarship",
    shortDescription: "Cho các học bổng không nằm trong nhóm gói focus chuyên biệt.",
    longDescription:
      "Gói linh hoạt dành cho mentee có mục tiêu học bổng riêng ngoài các chương trình phổ biến. Mentor sẽ thiết kế lộ trình hỗ trợ phù hợp với tính chất học bổng và bối cảnh hồ sơ thực tế.",
    price: "Từ 9.500.000 - 12.000.000 VNĐ",
    length: "Tối đa 1 năm",
    format: "Online",
    payment: "Thanh toán 1 lần trước khi bắt đầu",
    paymentDetails: [
      "Thanh toán một lần ngay khi đăng ký để bắt đầu lộ trình cá nhân hóa.",
      "Thông thường: 9,500,000 VND - Áp dụng cho đơn đăng ký trong tháng bình thường",
      "Urgent: 12,000,000 VND - Áp dụng cho đơn đăng ký trước deadline 45 ngày.",
    ],
    highlights: [
      "Lộ trình cá nhân hóa theo mục tiêu đặc thù",
      "Hỗ trợ chiến lược hồ sơ xuyên suốt",
      "Đồng hành điều chỉnh theo cập nhật tuyển sinh",
      "Các bạn muốn apply học bổng từ các trường đại học quốc tế (ở Nhật, Trung, Đài, Singapore, Úc, Canada, Châu Âu...)",
      "Apply học bổng từ các tổ chức phi chính phủ, quỹ phát triển, viện nghiên cứu ...",
    ],
  },
  {
    id: "combo-regional-5",
    group: "combo",
    slug: "regional-combo-5-uni",
    title: "Regional Combo 5-Uni",
    shortDescription: "Apply tối đa 5 trường/học bổng tại châu Á, châu Âu hoặc châu Úc.",
    longDescription:
      "Gói combo hỗ trợ mentee chinh phục nhiều mục tiêu khu vực trong một chiến lược thống nhất. Phù hợp cho người muốn tăng xác suất trúng tuyển nhưng vẫn kiểm soát chất lượng hồ sơ từng trường.",
    price: "30.000.000 VNĐ",
    length: "Tối đa 1 năm",
    format: "Online",
    payment: "Thanh toán 2 đợt",
    paymentDetails: [
      "Regional Combo 5-Uni: Thanh toán đợt 1 là 18.000.000 VNĐ khi đăng ký, đợt 2 là 12.000.000 VNĐ.",
      "Lịch thanh toán được team xác nhận cùng timeline hồ sơ ở buổi kick-off.",
    ],
    highlights: [
      "Xây dựng danh sách 5 mục tiêu theo độ phù hợp",
      "Đồng bộ thông điệp hồ sơ giữa nhiều trường",
      "Theo sát tiến độ nộp hồ sơ đa điểm đến",
    ],
  },
  {
    id: "combo-regional-10",
    group: "combo",
    slug: "regional-combo-10-uni",
    title: "Regional Combo 10-Uni",
    shortDescription: "Apply tối đa 10 trường/học bổng trong các khu vực ngoài Mỹ.",
    longDescription:
      "Gói mở rộng cho mentee muốn tăng mạnh số lượng lựa chọn ở nhiều trường. Mentor giúp phân lớp ưu tiên, chuẩn bị tài liệu dùng chung và tùy biến thông minh cho từng hồ sơ.",
    price: "50.000.000 VNĐ",
    length: "Tối đa 1 năm",
    format: "Online",
    payment: "Thanh toán 2 đợt",
    paymentDetails: [
      "Regional Combo 10-Uni: Đợt 1 là 30.000.000 VNĐ khi đăng ký, đợt 2 là 20.000.000 VNĐ.",
      "Team SEM theo dõi tiến độ theo từng đợt thanh toán và mốc nộp hồ sơ.",
    ],
    highlights: [
      "Chiến lược đa mục tiêu với mức ưu tiên rõ ràng",
      "Xây dựng danh sách 10 mục tiêu theo độ phù hợp",
      "Theo sát tiến độ nộp hồ sơ đa điểm đến",
      "Tùy biến hồ sơ theo yêu cầu từng trường",
    ],
  },
  {
    id: "combo-fast-retailing",
    group: "combo",
    slug: "fast-retailing-combo",
    title: "Fast Retailing Combo",
    shortDescription: "Apply học bổng Fast Retailing và trường sau khi đậu học bổng.",
    longDescription:
      "Gói chuyên biệt cho hành trình Fast Retailing - Quỹ học bổng của Tập đoàn UNIQLO tại Nhật Bản. Học bổng gồm giai đoạn là nộp hồ sơ xin học bổng và giai đoạn chuẩn bị hồ sơ apply các trường.\
      Điều này đòi hỏi mentee phải có chiến lược apply linh hoạt, bài luận xuất sắc ngay từ đầu, và chuẩn bị kỹ cho giai đoạn apply trường sau khi đã đậu học bổng.",
    price: "30.000.000 VNĐ",
    length: "Tối đa 1 năm",
    format: "Online",
    payment: "Thanh toán 2 đợt",
    paymentDetails: [
      "Đợt 1: thanh toán 12.000.000 VNĐ tại thời điểm đăng ký.",
      "Đợt 2: thanh toán 18.000.000 VNĐ sau khi có kết quả học bổng Fast Retailing.",
    ],
    highlights: [
      "Học bổng cần nộp hồ sơ xin học bổng trước, trải qua vòng hồ sơ và phỏng vấn. Sau khi trúng tuyển học bổng, mentee sẽ đến bước chọn các trường phù hợp để apply aadmission",
      "Hỗ trợ theo từng giai đoạn của Fast Retailing",
      "Chuẩn bị bài luận và phỏng vấn theo yêu cầu chương trình",
      "Đồng bộ hồ sơ khi chuyển qua vòng apply trường",
    ],
  },
  {
    id: "combo-global-5",
    group: "combo",
    slug: "global-combo-5-uni",
    title: "Global Combo 5-Uni",
    shortDescription: "Apply tối đa 5 trường/học bổng gồm Mỹ và các khu vực khác.",
    longDescription:
      "Gói dành cho mentee có mục tiêu trải rộng nhiều khu vực, trong đó có Mỹ. Mentor hỗ trợ cân bằng yêu cầu đa dạng giữa các hệ tuyển sinh để giữ chất lượng toàn bộ hồ sơ.",
    price: "50.000.000 VNĐ",
    length: "Tối đa 1 năm",
    format: "Online",
    payment: "Thanh toán 2 đợt",
    paymentDetails: [
      "Global Combo 5-Uni: Đợt 1 là 30.000.000 VNĐ khi đăng ký, đợt 2 là 20.000.000 VNĐ.",
      "Phương thức thanh toán được gắn với mốc triển khai hồ sơ đa khu vực.",
    ],
    highlights: [
      "Chiến lược hồ sơ đa khu vực có Mỹ",
      "Tối ưu khác biệt yêu cầu từng hệ thống tuyển sinh",
      "Theo dõi tiến độ và điều chỉnh theo deadline",
    ],
  },
  {
    id: "combo-global-10",
    group: "combo",
    slug: "global-combo-10-uni",
    title: "Global Combo 10-Uni",
    shortDescription: "Apply tối đa 10-15 trường ở nhiều khu vực, gồm Mỹ.",
    longDescription:
      "Gói toàn diện cho mentee cần chiến lược apply quy mô lớn với nhiều phương án dự phòng. Mentor đồng hành để quản lý timeline chặt chẽ và tối ưu từng bộ hồ sơ theo mức độ ưu tiên.",
    price: "100.000.000 VNĐ",
    length: "Tối đa 1 năm",
    format: "Online",
    payment: "Thanh toán 3 đợt",
    paymentDetails: [
      "Global Combo 10-Uni: Đợt 1 là 50.000.000 VNĐ, đợt 2 là 30.000.000 VNĐ, đợt 3 là 20.000.000 VNĐ.",
      "Team SEM xác nhận timeline và mốc thanh toán ngay trong giai đoạn khởi động.",
    ],
    highlights: [
      "Chiến lược apply quy mô lớn 10-15 trường",
      "Quản trị timeline và tài liệu nhiều vòng nộp",
      "Tối ưu xác suất đậu ở nhiều lựa chọn song song",
    ],
  },
  {
    id: "shortterm-exchange",
    group: "shortterm",
    slug: "ngoai-khoa-ngan-han",
    title: "Mentor học bổng ngắn hạn và ngoại khóa",
    shortDescription: "Đồng hành apply trại hè, trao đổi, học bổng ngắn hạn theo kỳ.",
    longDescription:
      "Gói hỗ trợ mentee xây dựng hồ sơ nổi bật cho các chương trình ngoại khóa và học bổng ngắn hạn có deadline ngắn. \
      Chương trình mentor tập trung vào hỗ trợ cho các bạn đang muốn apply các chương trình ngoại khoá hoặc các học bổng ngắn hạn theo từng kỳ. \
Các chương trình trao đổi có thể là các chương trình như YSEALI, Global UGRAD, các trại hè tại Mỹ, Châu Âu, Nhật Bản vân vân. Hoặc các học bổng ngắn hạn như Daewoong, SamSung, học bổng từng kỳ, học bổng nghiên cứu mùa hè. \
Hồ sơ ngoại khóa xuất sắc và thuyết phục sẽ là bàn đạp cho các học bổng chính quy dài hạn sau này.",
    price: "Tùy theo yêu cầu chương trình",
    length: "Linh hoạt theo kỳ apply",
    format: "Online",
    payment: "Theo từng giai đoạn hỗ trợ",
    highlights: [
      "Xây dựng essay/personal statement ngắn gọn, thuyết phục",
      "Tối ưu hồ sơ cho chu kỳ apply ngắn",
      "Phù hợp với mục tiêu trao đổi, trại hè, scholarship theo kỳ",
      "Chi phí: 5,500,000 - 7,000,000 VND - Phụ thuộc vào quy mô của chương trình mentee muốn apply và mức độ yêu cầu của bộ hồ sơ.",
      "Hãy liên lạc với chúng mình tại đây để nhận thông tin chi tiết về chi phí của chương trình bạn muốn apply nhé.",
    ],
  },
  {
    id: "yellow-stamp-service",
    group: "yellow-stamp",
    slug: "dich-vu-hop-phap-hoa-lanh-su",
    title: "Dịch vụ hợp pháp hóa lãnh sự",
    shortDescription: "Hỗ trợ chuẩn bị hồ sơ, dịch thuật và xử lý giấy tờ đúng quy trình.",
    longDescription:
      "Dịch vụ giấy tờ dành cho mentee cần hoàn thiện thủ tục trước khi nhập học hoặc nộp hồ sơ quốc tế. SEM hỗ trợ rà soát chứng từ, hướng dẫn các bước hợp pháp hóa và tư vấn phương án xử lý theo từng trường hợp.",
    price: "Theo hồ sơ thực tế",
    length: "Tối đa 12 ngày kể từ thời gian nhận giấy tờ",
    format: "Online + hỗ trợ thủ tục",
    payment: "Theo từng hạng mục dịch vụ",
    highlights: [
      "Rà soát checklist chứng từ cần thiết",
      "Hỗ trợ dịch thuật, công chứng, hợp pháp hóa lãnh sự giấy tờ",
      "Nhiều dịch vụ đi kèm linh hoạt với nhu cầu của mentee"
    ],
  },
]

export function getGroupByKey(group: string): PacketGroup | undefined {
  return packetGroups.find((item) => item.key === group)
}

export function getPacketsByGroup(group: PacketGroupKey): MentoringPacket[] {
  return mentoringPackets.filter((packet) => packet.group === group)
}

export function getPacketByGroupAndSlug(group: string, slug: string): MentoringPacket | undefined {
  return mentoringPackets.find((packet) => packet.group === group && packet.slug === slug)
}

export function getRecommendedPackets(packet: MentoringPacket, limit = 3): MentoringPacket[] {
  const sameGroup = mentoringPackets.filter((item) => item.group === packet.group && item.id !== packet.id)
  if (sameGroup.length >= limit) {
    return sameGroup.slice(0, limit)
  }

  const crossGroup = mentoringPackets.filter((item) => item.group !== packet.group)
  return [...sameGroup, ...crossGroup].slice(0, limit)
}
