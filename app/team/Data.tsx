interface SocialLinks {
    twitter: string;
    linkedin: string;
    github: string;
  }


const role: string = "Scholarship Mentor"
export interface TeamMember {
  id: string
  name: string
  image: string
  description: string
  received_scholarship: string
  mentor_history: string
  role: string
  hashtag: string
  majors: string[]
  countries: string[]
  details: {
    profile: string[]
    achievements: string[]
    statement: string
    philosophy: string
    records: string[]
    highlight_record: string[]
    support: string
    tags?: string[]
  }
}

export const DETAIL_HEADERS: Partial<Record<keyof TeamMember["details"], string>> = {
  profile: "Hồ sơ cá nhân",
  achievements: "Thành tích nổi bật",
  statement: "Tuyên ngôn cá nhân",
  philosophy: "Triết lý mentoring",
  records: "Kết quả đã đạt được",
  highlight_record: "Dấu ấn nổi bật",
  support: "SEM có thể hỗ trợ gì?",
}

export const teamMembers: TeamMember[]= [
    {
      id: "linhmon",
      name: "Linh Mon",
      role: "Founder, Mentor",
      description: "Đã tốt nghiệp ngành Computer Science và Business Technology Management, KAIST, Hàn Quốc",
      image: "/assets/img/team/linhmon.jpg",
      received_scholarship: "Nhận học bổng chính phủ Hàn Quốc năm 2020, học bổng Daewoong, học bổng Microsoft Youthspark.\
      Nhận thư mời từ 3 trường: KAIST, Đại học Quốc gia Seoul(SNU) và Đại học Yonsei",
      mentor_history: "Hỗ trợ thành công mentee đậu các bậc học Tiến sĩ, Thạc sĩ, Đại học và các chương trình ngắn hạn ở Mỹ, Hàn Quốc, Nhật Bản, Việt Nam, Thụy Sĩ \
      ngành khoa học kỹ thuật và khoa học xã hội",
      majors: ["Khoa học kỹ thuật", "Khoa học xã hội"],
      countries: ["Châu Mỹ", "Châu Á", "Châu Âu"],
      hashtag: "Hỗ trợ apply tất cả các học bổng trên toàn thế giới.",
      details: {
        profile: ["Cử nhân ngành Computer Science và Business Technology Management, KAIST, Hàn Quốc", "Founder của SEM Scholars - Scholarship Exploring with Mentors","Software Engineer tại Microsoft Việt Nam"],
        achievements: ["Giải nhì học sinh giỏi quốc gia môn Vật Lý năm 2017", "Học bổng chính phủ Hàn Quốc năm 2020", "Học bổng Daewoong dành cho sinh viên đang học tại Hàn năm 2022", "Học bổng Trại hè KAIST Global Entrepreneurship Summer School 2024 (USA)"],
        statement: "Mình hỗ trợ mentee ở tất cả các bậc học và ngành học, với trọng tâm định hướng cá nhân \
        hóa. Thông qua kinh nghiệm đồng hành cùng mentee ở nhiều nền tảng học thuật khác nhau, mình mong muốn \
        giúp các bạn mentee hiểu rõ điểm mạnh của bản thân, xác định hướng đi phù hợp và xây dựng câu chuyện cá \
        nhân một cách thuyết phục. Bên cạnh việc hỗ trợ các ngành học và học bổng mà team đã từng chinh phục, mình\
         đặc biệt tận hưởng quá trình cùng mentee khám phá những ngành học mới, học bổng mới, và tìm ra con đường \
         phù hợp nhất với từng cá nhân.",
        philosophy: "Học bổng không chọn người giỏi nhất, mà chọn người phù hợp nhất. Đừng cố trở thành một phiên\
         bản hoàn hảo của người khác. Hãy tập trung hiểu rõ điểm mạnh của mình, xây dựng câu chuyện của chính\
         mình, và kiên trì đi đến cùng. Kết quả sẽ đến theo cách xứng đáng nhất.",
        records: ["Đã hỗ trợ thành công nhiều mentee đậu học bổng từ toàn phần đến bán phần ở các bậc học khác nhau tại Mỹ, Hàn Quốc, Thụy Sĩ, Việt Nam, Anh Quốc."],
        highlight_record: [],
        support: "",
        tags: ["Châu Mỹ", "Châu Á", "Châu Âu", "Khoa học kỹ thuật", "Khoa học xã hội"]
      }
    },
    {
      id: "minhduc",
      name: "Phạm Minh Đức",
      role: role,
      description: "PhD, Biochemistry, Molecular, Cellular and Developmental Biology, University of California, Davis, Mỹ. \
      Cựu sinh viên ngành Bio and Brain Engineering tại KAIST, Hàn Quốc.",
      image: "/assets/img/team/minh_duc.jpg",
      received_scholarship: "Nhận học bổng Dean's Distinguished Graduate Fellowship, học bổng 100% của KAIST, Huyndai Motor Chung Mong-Koo Global Scholarship, \
      50% Scholarship for Bachelor Program at NUS",
      mentor_history: "Từng hướng dẫn thành công mentee đậu hệ đại học, thạc sĩ và PhD ở Mỹ và master ở Hà Lan, Mỹ, Hàn Quốc.",
      majors: ["Khoa học kỹ thuật"],
      countries: ["Toàn thế giới","Châu Mỹ", "Châu Á", "Châu Âu", "Châu Úc"],
      hashtag: "Hỗ trợ apply các ngành Technology & Science trên toàn thế giới.",
      details: {
        profile: ["PhD, Biochemistry, Molecular, Cellular and Developmental Biology, University of California, Davis, Mỹ", "Cựu sinh viên ngành Bio and Brain Engineering tại KAIST, Hàn Quốc."],
        achievements: ["Nhận học bổng Dean's Distinguished Graduate Fellowship", "Học bổng 100% của KAIST cho bậc đại học và thạc sĩ", "Huyndai Motor Chung Mong-Koo Global Scholarship", "50% Scholarship for Bachelor Program at NUS"],
        statement: "",
        philosophy: "",
        records: ["Từng hướng dẫn thành công mentee đậu hệ đại học, thạc sĩ và PhD ở Mỹ và master ở Hà Lan, Mỹ, Hàn Quốc."],
        highlight_record: [],
        support: "",
        tags: ["Toàn thế giới","Châu Mỹ", "Châu Á", "Châu Âu", "Châu Úc", "Khoa học kỹ thuật"]
      }
    },
    {
      id: "mainguyen",
      name: "Nguyễn Ngọc Mai",
      role: role,
      description: "Theo học ngành Computer Science và chuyên ngành kép Business Technology Management, KAIST, Hàn Quốc.",
      image: "/assets/img/team/mainguyen.png",
      received_scholarship: "Từng đạt học bổng toàn phần của KAIST, học bổng 100% và hỗ trợ tài chính của các trường ở Mỹ như Minerva University, học bổng 95% từ Duke Kunshan University (Trung Quốc), học bổng 75% Swinburne University of Technology, 50% Deakin University, 90% SP Jain (Úc), học bổng từ toàn phần đến bán phần từ TIU và APU (Nhật), học bổng và hỗ trợ tài chính cao từ HKUST (Hồng Kông), Fulbright University Vietnam, và VinUniversity.",
      mentor_history: "Hỗ trợ thành công nhiều mentee dành học bổng từ toàn phần đến bán phần từ các trường đại học top đầu Hàn Quốc như KAIST, SNU, Yonsei UIC, học bổng toàn phần ASEAN tại NTU Singapore, học bổng Fast Retailing và các trường đại học top Nhật Bản như Kyoto, Waseda, và Nagoya, học bổng toàn phần tại Châu Âu theo dạng hiệp định, và các trường đại học ở Hông Kông.",
      majors: ["Khoa học kỹ thuật", "Khoa học xã hội"],
      countries: ["Toàn thế giới","Châu Mỹ", "Châu Á", "Châu Âu", "Châu Úc"],
      hashtag: "Hỗ trợ apply tất cả các học bổng trên toàn thế giới.",
      details: {
        profile: ["Cử nhân ngành Computer Science và Business Technology Management, KAIST, Hàn Quốc"],
        achievements: ["Học bổng Toàn phần KAIST Scholarship", 
          "Học bổng Trại hè Leeds-KAIST International Leadership Programme 2024 (UK)", 
          "Học bổng Trại hè KAIST Global Entrepreneurship Summer School 2023 (USA)",
          "Học bổng Toàn phần Trường TH School của Quỹ “Vì Tầm Vóc Việt” trị giá 1,5 tỉ VNĐ (2018 - 2021)",
          "Thành tích Apply 2021: Học bổng 100% và hỗ trợ tài chính của các trường ở Mỹ như Minerva University, học bổng 95% từ Duke Kunshan University (Trung Quốc), học bổng 75% Swinburne University of Technology, 50% Deakin University, 90% SP Jain (Úc), học bổng từ toàn phần đến bán phần từ TIU và APU (Nhật), học bổng và hỗ trợ tài chính cao từ HKUST (Hồng Kông), Fulbright University Vietnam, và VinUniversity."],
        statement: "Mình cho rằng bước quan trọng nhất trong bộ hồ sơ du học là giúp học sinh xác định rõ bản thân mong muốn gì và định hướng như thế nào, trước hết là ngành học và xa hơn là định hướng tương lai. Vì vậy, mình thường dành nhiều thời gian cho phần này. Bên cạnh đó, mình có kinh nghiệm định hướng các hoạt động ngoại khóa phù hợp với từng nhóm ngành khác nhau và đã hỗ trợ mentee apply chương trình cử nhân và cao học trong các lĩnh vực khoa học kỹ thuật, kinh doanh kinh tế, khoa học xã hội, chương trình MBA cũng như các ngành mang định hướng nghệ thuật như thiết kế, bao gồm cả việc hướng dẫn học sinh xây dựng portfolio.",
        philosophy: "",
        records: ["Hỗ trợ thành công nhiều mentee dành học bổng từ toàn phần đến bán phần từ các trường đại học top đầu Hàn Quốc như KAIST (14 suất), SNU, YONSEI", "Hỗ trợ thành công học bổng toàn phần MBZUAI (UAE)", "Hỗ trợ thành công học bổng toàn phần ASEAN tại NTU (Singapore)", "Hỗ trợ thành công học bổng toàn phần CUHK và thư mời nhập học của HKBU & PolyU (Hồng Kông)", "Hỗ trợ thành công học bổng Fast Retailing và các trường đại học top Nhật Bản như Kyoto, Waseda, và Nagoya", "Hỗ trợ thành công học bổng toàn phần tại Châu Âu theo dạng hiệp định (Hungary) và thư mời nhập học của KU Leuven (Bỉ)."],
        highlight_record: [],
        support: "",
        tags: ["Châu Mỹ", "Châu Á", "Châu Âu", "Khoa học kỹ thuật", "Khoa học xã hội"]
      }
    },
    {
      id: "duckien",
      name: "Hoàng Đức Kiên",
      role: role,
      description: "Đã tốt nghiệp master, Statistics, Swiss Federal Institute of Technology Lausanne (EPFL), Thụy Sĩ. Cựu sinh viên KAIST, ngành Mathematical Sciences",
      image: "/assets/img/team/kien.jpg",
      received_scholarship: "Nhận học bổng toàn phần của KAIST",
      mentor_history: "Hướng dẫn thành công các mentee apply Hàn Quốc, Thụy Sĩ các ngành khoa học kỹ thuật",
      majors: ["Khoa học kỹ thuật"],
      countries: ["Toàn thế giới","Châu Mỹ", "Châu Á", "Châu Âu", "Châu Úc"],
      hashtag: "Hỗ trợ apply học bổng các ngành Technology & Science trên toàn thế giới",
      details: {
        profile: [
          "CEO & Cofounder Wequant, Cofounder Chilgu Trading",
          "Đã tốt nghiệp master, Statistics, Swiss Federal Institute of Technology Lausanne (EPFL), Thụy Sĩ", 
          "Cựu sinh viên KAIST, ngành Mathematical Sciences"
        ],
        achievements: [
          "3 năm kinh nghiệm Nghiên cứu định lượng",
          "Cử nhân khoa Toán KAIST",
          "Top 18 Đồng đội cuộc thi Toán dành cho Đại học SImon Marais 2019",
          "Dean's List khoa Toán KAIST kỳ thu 2018",
          "Nhận học bổng toàn phần của KAIST"],
        statement: "Ai cũng xứng đáng có được cơ hội được học tập, phát triển, và tỏa sáng. Không quan trọng bạn ở nơi đâu, đến từ đâu, mình cùng SEM sẽ cố hết sức để bạn nắm bắt được cơ hội và đạt được điều bạn muốn",
        philosophy: "Điều quan trọng nhất là một trái tim không bỏ cuộc",
        records: ["Hướng dẫn thành công các mentee apply Hàn Quốc, Thụy Sĩ các ngành khoa học kỹ thuật"],
        highlight_record: [],
        support: "",
        tags: ["Toàn thế giới","Châu Mỹ", "Châu Á", "Châu Âu", "Châu Úc", "Khoa học kỹ thuật"]
      }
    },
    {
      id: "thephuc", 
      name: "Đỗ Hoàng Thế Phúc",
      role: role,
      description: "Máster Erasmus Mundus en Sanidad Vegetal en Agricultura Sostenible, University of Padova",
      image: "/assets/img/team/phuc.jpg",
      received_scholarship: "Nhận Học bổng Máster Erasmus Mundus en Sanidad Vegetal en Agricultura\
      Sostenible (UNIPD, Ý và UPV, Tây Ban Nha), Học bổng Latvian State Scholarships for Studies\
      and Summer Schools 2024 at Rezekne Academy of Technologies, Riga, Latvia, \
      Học bổng Erasmus+ International Credit Mobility between JBNU, Korea and \
      Universitat Hohenheim, Stuttgart, Germany, 2024, Học bổng GKS-U ngành Plant Medicine \
      and International Development and Cooperation tại Jeonbuk National University, Hàn Quốc",
      mentor_history: "Hỗ trợ thành công mentee apply các ngành khác nhau của nhiều học bổng trên thế giới",
      majors: ["Khoa học kỹ thuật", "Khoa học xã hội"],
      hashtag: "Hỗ trợ apply tất cả các học bổng trên toàn thế giới.",
      countries: ["Toàn thế giới","Châu Mỹ", "Châu Á", "Châu Âu", "Châu Úc"],
      details: {
        profile: [
          "Hiện là học viên Thạc sĩ chương trình Erasmus Mundus Joint Master in Plant Health in Sustainable Cropping Systems, theo học tại University of Padova (Ý) và Universitat Politècnicade València (Tây Ban Nha).",
          "Tốt nghiệp loại Xuất sắc bậc cử nhân ngành Plant Medicine và International Studies (International Development Cooperation) tại Jeonbuk National University (Hàn Quốc)",
        ],
        achievements: [
          "Học bổng toàn phần Erasmus Mundus Joint Master Degree (2025 - 2027) do Ủy ban Châu Âu tài trợ", 
          "Học bổng toàn phần Global Korea Scholarship, GKS-U (2020 - 2025) do NIIED, Bộ Giáo dục Hàn Quốc tài trợ", 
          "Học bổng trao đổi Erasmus+ Mobility tại University of Hohenheim, Đức", 
          "Latvian State Scholarship - Latvian Summer School 2024",
          "Tốt nghiệp loại Xuất sắc, là 1 trong 30 đại diện trên tổng số 3000 cử nhân nhận bằng tốt nghiệp và giấy khen từ President of Jeonbuk National University",
          "Tham gia field trip tại Tashkent, Uzbekistan, phối hợp cùng KOICA, UNDP Uzbekistan và Bộ Nông nghiệp Uzbekistan trong dự án nông nghiệp bền vững giảm phát thải, thuộc sáng kiến Glocal University 30 do Bộ Giáo dục Hàn Quốc tài trợ",
          "Grand Award - Global Issues Creative Solution Competition 2025 do Jeonbuk National University và Jeonbuk International Cooperation Agency tổ chức",
          "Best Poster Presentation - The 10th Annual Conference of Vietnamese Young Scientists (ACVYS 2024)",
          "Dean's List các năm 2021, 2022, 2023, 2024 tại Jeonbuk National University",
          "Grand Award và Influential Award tại các cuộc thi học thuật quốc tế ASEAN-ROK Youth Presentation",
          "Giải Ba - Cuộc thi Nghiên cứu Khoa học Kỹ thuật cấp Quốc gia dành cho học sinh THCS và THPT (VSEF 2019)"
        ],
        statement: "Mình tin rằng điều quan trọng nhất trong hành trình apply học bổng không phải là có một \
                    hồ sơ “hoàn hảo”, mà là hiểu rõ bản thân muốn gì và biết cách thể hiện câu chuyện riêng \
                    của mình một cách thuyết phục.Từ chính trải nghiệm săn học bổng của bản thân, mình \
                    hiểu rằng mỗi mentee đều có những điểm mạnh riêng, và khi được định hướng đúng, các \
                    bạn hoàn toàn có thể chạm tới những cơ hội lớn. Vì vậy, khi đồng hành cùng mentee, \
                    mình tập trung hỗ trợ các bạn xác định định hướng phù hợp, xây dựng hồ sơ dựa trên \
                    năng lực thật sự, và thể hiện bản thân một cách rõ ràng, nổi bật. Mình mong muốn không \
                    chỉ giúp mentee giành được học bổng, mà còn giúp các bạn tự tin hơn trên hành trình \
                    phát triển bản thân và mở ra nhiều cơ hội cho tương lai.",
        philosophy: "",
        records: ["Hỗ trợ thành công nhiều mentee đạt học bổng Global Korea Scholarship, GKS-U: 5+ suất, GKS-G: 10+ suất",
          "Hỗ trợ thành công học bổng bán phần và thư mời nhập học từ các trường đại học hàng đầu tại Hàn Quốc như: Yonsei University \
          Chung-Ang University, Sogang University, Sejong University"
        ],
        highlight_record: [],
        support: "",
        tags: ["Toàn thế giới","Châu Mỹ", "Châu Á", "Châu Âu", "Châu Úc", "Khoa học kỹ thuật", "Khoa học xã hội"]
      }
    },
    {
      id: "cucngo",
      name: "Ngọ Thị Cúc",
      role: role,
      description: "Đã tốt nghiệp master, Korean Language & Literature, Kyunghee University, Hàn Quốc.",
      image: "/assets/img/team/Cucngo.jpg",
      received_scholarship: "Nhận học bổng GKS-G 2022 nhận được thư mời nhập học từ 3 trường: Kyunghee Uni, Keimyung Uni, Sookmyung Women's Uni.",
      mentor_history: "Hỗ trợ thành công mentee apply các ngành ngôn ngữ Hàn, giáo dục tiếng Hàn",
      hashtag: "Hỗ trợ apply khối ngành ngôn ngữ tại Hàn Quốc",
      majors: ["Ngôn ngữ"],
      countries: ["Châu Á"],
      details: {
        profile: ["Đã tốt nghiệp master, Korean Language & Literature, Kyunghee University, Hàn Quốc."],
        achievements: ["Nhận học bổng GKS-G 2022 nhận được thư mời nhập học từ 3 trường: Kyunghee Uni, Keimyung Uni, Sookmyung Women's Uni."],
        statement: "",
        philosophy: "",
        records: ["Hỗ trợ thành công mentee apply các ngành ngôn ngữ Hàn, giáo dục tiếng Hàn"],
        highlight_record: [],
        support: "",
        tags: ["Châu Á", "Ngôn ngữ"]
      }
    },
    {
      id: "ngangiang", 
      name: "Vũ Ngân Giang",
      role: role,
      description: "Bachelor, Bussiness Administration, Korea University, Hàn Quốc",
      image: "/assets/img/team/ngangiang.jpeg",
      received_scholarship: "Nhận học bổng GKS-U 2022, nhận được thư mời nhập học từ Korea University, Yonsei University",
      mentor_history: "Hỗ trợ thành công mentee apply các ngành social science tại Việt Nam và Hàn Quốc",
      hashtag: "Hỗ trợ apply học bổng các ngành Social Science trên toàn thế giới",
      majors: ["Khoa học xã hội"],
      countries: ["Châu Á"],
      details: {
        profile: ["Bachelor, Bussiness Administration, Korea University, Hàn Quốc", "Chuyên sâu về Business Analytics và Financial Analysis & Investment."],
        achievements: [
          "Đại diện Korea University tham gia RSM Case Competition 2024 tổ chức tại Erasmus University- Netherlands",
          "Bronze Prize - KUBS Challenge 2023, cuộc thi giải business case của KU nhằm chọn đại diện dự thi quốc tế",
          "Top 4 National Round - HSBC/HKU Asia Pacific Business Case Competition 2023",
          "Nhận học bổng GKS-U 2022, nhận được thư mời nhập học từ Korea University, Yonsei University",
          "Giải Nhất - Kỳ thi Olympic cấp Đại học Ngoại Ngữ - Đại học Quốc gia Việt Nam dành cho học sinh THPT năm 2020,  môn Tiếng Hàn "
        ],
        statement: "Mình tin rằng một bộ hồ sơ du học mạnh không bắt đầu từ việc “làm đẹp thành tích”, mà bắt đầu từ việc hiểu rõ bản thân thực sự muốn gì và phù hợp với điều gì. Vì vậy, trong quá trình mentoring, mình luôn ưu tiên giúp mentee xác định rõ định hướng để xây dựng lộ trình và câu chuyện cá nhân, đảm bảo tính nhất quán và thuyết phục. Mình đã có kinh nghiệm đồng hành cùng mentee ở nhiều lĩnh vực, trong đó nổi bật nhất là nhóm ngành Khoa học Xã hội, Quản trị Kinh doanh, Kinh tế.",
        philosophy: "",
        records: ["Hỗ trợ thành công nhiều mentee đậu HB toàn phần đến bán phần bậc Đại học và Thạc sĩ từ các trường đại học top đầu tại Hàn Quốc và các trường đại học quốc tế ở Việt Nam."],
        highlight_record: [],
        support: "",
        tags: ["Châu Á", "Khoa học xã hội"]
      }
    },
    {
      id: "phuonganh",
      name: "Phương Anh",
      role: role,
      description: "Bachelor, Bussiness Administration, Korea University, Hàn Quốc",
      image: "/assets/img/team/phuongAnh.jpg",
      received_scholarship: "Nhận học bổng GKS-U,EGPP của Ewha Womans University. Nhận được thư mời nhập học từ Korea University, Yonsei University",
      mentor_history: "Hỗ trợ thành công mentee apply các ngành social science tại Hàn Quốc",
      hashtag: "Hỗ trợ apply học bổng các ngành Social Science tại Hàn Quốc",
      majors: ["Khoa học xã hội"],
      countries: ["Châu Á"],
      details: {
        profile: ["Bachelor, Bussiness Administration, Korea University, Hàn Quốc"],
        achievements: ["Nhận học bổng GKS-U,EGPP của Ewha Womans University. Nhận được thư mời nhập học từ Korea University, Yonsei University"],
        statement: "",
        philosophy: "",
        records: ["Hỗ trợ thành công mentee apply các ngành social science tại Hàn Quốc"],
        highlight_record: [],
        support: "",
        tags: ["Châu Á", "Khoa học xã hội"]
      }
    },
    {
      id: "hoanglien",
      name: "Nguyễn Hoàng Liên",
      role: role,
      description: "Double major, Media & Communication và International relation, Korea University, Hàn Quốc",
      image: "/assets/img/team/Lien.jpg",
      received_scholarship: "Nhận học bổng GKS-U 2022. Nhận được thư mời nhập học từ Korea University, Yonsei University",
      mentor_history: "Hỗ trợ thành công mentee apply các ngành social science tại Hàn Quốc và Việt Nam",
      hashtag: "Hỗ trợ apply học bổng các ngành Social Science trên toàn thế giới",
      majors: ["Khoa học xã hội"],
      countries: ["Châu Á"],
      details: {
        profile: ["Double major, Media & Communication và International relation, Korea University, Hàn Quốc","Marketing & Communication Manager tại ASEAN Youth Organization - Vietnam Branch"],
        achievements: ["Nhận học bổng GKS-U 2022. Nhận được thư mời nhập học từ Korea University, Yonsei University","Đại diện sinh viên khoa Media & Communication tham gia KF School Workshop tại Shanghai International Studies University và Nanjing University","Tốt nghiệp bằng Xuất sắc ngành Truyền thông tại Korea University"],
        statement: "Mình mong muốn không chỉ hỗ trợ được mentee trong việc xây dựng hồ sơ học thuật, mà có thể giúp các bạn hiểu và tin tưởng bản thân hơn. Thế mạnh của mình là hỗ trợ các ngành Khoa học xã hội, đặc biệt là ngành Truyền thông và các ngành liên quan đến Quan hệ quốc tế, Hợp tác phát triển.",
        philosophy: "Hành trình apply học bổng chính là cơ hội để hiểu sâu sắc về bản thân và lĩnh vực mà mình quan tâm. Vậy nên, dù kết quả không như mong đợi, mình chắc chắn bạn sẽ học và phát triển rất nhiều qua hành trình này.",
        records: ["Hỗ trợ thành công nhiều mentee đậu HB toàn phần đến bán phần bậc Đại học và Thạc sĩ tại Hàn Quốc và các trường đại học quốc tế ở Việt Nam."],
        highlight_record: [],
        support: "",
        tags: ["Châu Á", "Khoa học xã hội"]
      }
    },
    {
      id: "dieuhien",
      name: "Đặng Thị Diệu Hiền",
      role: role,
      description: "Đã tốt nghiệp ngành Media & Communication, Hanyang University, Hàn Quốc",
      image: "/assets/img/team/hien.png",
      received_scholarship: "Nhận học bổng GKS-U 2021",
      mentor_history: "Hỗ trợ thành công mentee apply các ngành social science tại Hàn Quốc",
      hashtag: "Hỗ trợ apply học bổng ngành Media & Communication tại Hàn Quốc",
      majors: ["Khoa học xã hội"],
      countries: ["Châu Á"],
      details: {
        profile: ["Đã tốt nghiệp ngành Media & Communication, Hanyang University, Hàn Quốc"],
        achievements: ["Nhận học bổng GKS-U 2021"],
        statement: "",
        philosophy: "",
        records: ["Hỗ trợ thành công mentee apply các ngành social science tại Hàn Quốc"],
        highlight_record: [],
        support: "",
        tags: ["Châu Á", "Khoa học xã hội"]
      }
    },
    {
      id: "thanhtrung",
      name: "Ninh Phạm Thành Trung",
      role: role,
      description: "PhD, Environmental Engineering, KAIST, Hàn Quốc",
      image: "/assets/img/team/thanh_trung.jpg",
      received_scholarship: "Nhận học bổng GKS-G 2022, học bổng toàn phần cho hệ thạc sĩ tại National Taiwan University (Đài Loan), học bổng VLIR-UOS (Full-ride) cho bậc thạc sĩ tại Bỉ.",
      mentor_history: "Hỗ trợ thành công mentee apply GKS-G và học bổng chính phủ Đài Loan (MOE Taiwan Scholarship 2023).",
      hashtag: "Hỗ trợ apply học bổng các ngành Technology & Science trên toàn thế giới",
      majors: ["Khoa học kỹ thuật"],
      countries: ["Toàn thế giới","Châu Mỹ", "Châu Á", "Châu Âu", "Châu Úc"],
      details: {
        profile: ["PhD, Environmental Engineering, KAIST, Hàn Quốc"],
        achievements: ["Nhận học bổng GKS-G 2022", "Học bổng toàn phần cho hệ thạc sĩ tại National Taiwan University (Đài Loan)", "Học bổng VLIR-UOS (Full-ride) cho bậc thạc sĩ tại Bỉ."],
        statement: "",
        philosophy: "",
        records: ["Hỗ trợ thành công mentee apply GKS-G và học bổng chính phủ Đài Loan (MOE Taiwan Scholarship 2023)."],
        highlight_record: [],
        support: "",
        tags: ["Toàn thế giới","Châu Mỹ", "Châu Á", "Châu Âu", "Châu Úc", "Khoa học kỹ thuật"]
      }
    },
    // {
    //   id: "quynhnhi",
    //   name: "Phạm Quỳnh Nhi",
    //   role: role,
    //   description: "Bachelor, Bussiness Administration, SNU, Hàn Quốc",
    //   image: "/assets/img/team/quynhnhi.jpg",
    //   received_scholarship: "Đạt học bổng 100% của trường SNU, học bổng toàn phần có sinh hoạt phí của trường CUHK, học bổng tập đoàn Amore Pacific Hàn Quốc, học bổng \
    //   doanh nghiệp Việt-Hàn Green Academy, học bổng viện nghiên cứu môi trường châu Á.",
    //   mentor_history: "Hỗ trợ thành công mentee apply ngành khoa học xã hội tại các trường đại học ở Việt Nam và Hàn Quốc",
    //   hashtag: "Hỗ trợ apply học bổng các ngành Social Science trên toàn thế giới",
    //   majors: ["Khoa học xã hội"],
    //   countries: ["Châu Á"]
    // },
    {
      id: "phuongngoc",
      name: "Nguyễn Phương Ngọc",
      role: role,
      description: "Master, Media & Communications, Ewha Womans University, Hàn Quốc",
      image: "/assets/img/team/phuong_ngoc.jpg",
      received_scholarship: "Nhận học bổng GKS-G 2024",
      mentor_history: "Hỗ trợ thành công mentee apply ngành khoa học xã hội tại Hàn Quốc",
      hashtag: "Hỗ trợ apply học bổng các ngành Social Science trên toàn thế giới",
      majors: ["Khoa học xã hội"],
      countries: ["Châu Á"],
      details: {
        profile: ["Master, Media & Communications, Ewha Womans University, Hàn Quốc"],
        achievements: ["Nhận học bổng GKS-G 2024"],
        statement: "",
        philosophy: "",
        records: ["Hỗ trợ thành công mentee apply ngành khoa học xã hội tại Hàn Quốc"],
        highlight_record: [],
        support: "",
        tags: ["Châu Á", "Khoa học xã hội"]
      }
    },
    {
      id: "hoangngoc",
      name: "Hoàng Thị Hồng Ngọc",
      role: role,
      description: "Master, Korean Education, Ewha Womans University, Hàn Quốc",
      image: "/assets/img/team/hoang_ngoc.png",
      received_scholarship: "Nhận học bổng GKS-G 2023",
      mentor_history: "Hỗ trợ thành công mentee apply ngành ngôn ngữ Hàn, giáo dục tiếng Hàn tại Hàn Quốc",
      hashtag: "Hỗ trợ apply học bổng các ngành ngôn ngữ tại Hàn Quốc",
      majors: ["Khoa học xã hội", "Ngôn ngữ Hàn"],
      countries: ["Châu Á"],
      details: {
        profile: ["Master, Korean Education, Ewha Womans University, Hàn Quốc"],
        achievements: ["Nhận học bổng GKS-G 2023"],
        statement: "",
        philosophy: "",
        records: ["Hỗ trợ thành công mentee apply ngành ngôn ngữ Hàn, giáo dục tiếng Hàn tại Hàn Quốc"],
        highlight_record: [],
        support: "",
        tags: ["Châu Á", "Khoa học xã hội", "Ngôn ngữ Hàn"]
      }
    },
    {
      id: "hoangan",
      name: "Phạm Hoàng Ân",
      role: role,
      description: "Master, Business Administration in Management and Marketing, SKKU, Hàn Quốc",
      image: "/assets/img/team/hoang_an.png",
      received_scholarship: "Nhận học bổng GKS-G 2022",
      mentor_history: "Hỗ trợ thành công mentee apply ngành Social Science tại Hàn Quốc",
      hashtag: "Hỗ trợ apply học bổng các ngành khoa học xã hội tại Hàn Quốc",
      majors: ["Khoa học xã hội"],
      countries: ["Châu Á"],
      details: {
        profile: ["Master, Business Administration in Management and Marketing, SKKU, Hàn Quốc"],
        achievements: ["Nhận học bổng GKS-G 2022"],
        statement: "",
        philosophy: "",
        records: ["Hỗ trợ thành công mentee apply ngành Social Science tại Hàn Quốc"],
        highlight_record: [],
        support: "",
        tags: ["Châu Á", "Khoa học xã hội"]
      }
    },
    // {
    //   id: "huongnguyen",
    //   name: "Nguyễn Thị Thanh Hường",
    //   role: role,
    //   description: "Tốt nghiệp cử nhân ngành Dược học Đại học Y Dược Huế, tốt nghiệp thạc sĩ về nghiên cứu và phát triển thuốc tại Vương quốc Anh",
    //   image: "/assets/img/team/huong_nguyen.png",
    //   received_scholarship: "Nhận học bổng Sakura Science cho chương trình trao đổi sinh viên tại Nhật Bản và học bổng toàn phần Women in STEM cho chương trình thạc sĩ về nghiên cứu và phát triển thuốc tại Vương quốc Anh",
    //   mentor_history: "Hỗ trợ thành công mentee apply các ngành Khoa học sức khoẻ, Khoa học kỹ thuật ở Anh, Thuỵ Điển, Bỉ.",
    //   hashtag: "Hỗ trợ apply học bổng các ngành khoa học sức khỏe, khoa học kỹ thuật trên toàn thế giới",
    //   majors: ["Khoa học sức khỏe", "Khoa học kỹ thuật"],
    //   countries: ["Toàn thế giới","Châu Mỹ", "Châu Á", "Châu Âu", "Châu Úc"],
    //   details: {
    //     profile: ["Tốt nghiệp cử nhân ngành Dược học Đại học Y Dược Huế", "Tốt nghiệp thạc sĩ về nghiên cứu và phát triển thuốc, Liverpool John Moores University, tại Vương quốc Anh", "Nghiên cứu viên tại Nottingham, UK"],
    //     achievements: ["Nhận học bổng Sakura Science cho chương trình trao đổi sinh viên tại Nhật Bản", "Nhận học bổng toàn phần Thạc sĩ Women in STEM British Council năm 2021", "Đồng tác giả trên bằng sáng chế 'Methods for treating benzodiazepines misuse/use disorder' với University of Mississippi Medical Center, US"],
    //     statement: "Mình hỗ trợ mentee xây dựng câu chuyện cá nhân để apply học bổng, câu chuyện nơi mà mentee thể hiện điểm mạnh của bản thân và định hướng tương lai rõ ràng để chứng minh mentee là ứng cử viên phù hợp với học bổng.",
    //     philosophy: "Hiểu rõ chương trình bạn apply, dám nghĩ lớn cho mục tiêu nghề nghiệp tương lai là cách làm câu chuyện của bạn nổi bật.",
    //     records: ["Hỗ trợ thành công mentee apply các ngành Khoa học sức khoẻ, Khoa học kỹ thuật ở Anh, Thuỵ Điển, Bỉ, Ý và Pháp."],
    //     highlight_record: [],
    //     support: "",
    //     tags: ["Toàn thế giới","Châu Mỹ", "Châu Á", "Châu Âu", "Châu Úc", "Khoa học sức khỏe", "Khoa học kỹ thuật"]
    //   }
    // },
    {
      id: "minhnguyet",
      name: "Đồng Minh Nguyệt",
      role: role,
      description: "Master, Korean Language & Culture, Korea University, Hàn Quốc",
      image: "/assets/img/team/minh_nguyet.png",
      received_scholarship: "Nhận học bổng GKS-G 2025",
      mentor_history: "Hỗ trợ thành công mentee apply các ngành ngôn ngữ.",
      hashtag: "Hỗ trợ apply học bổng các ngành ngôn ngữ tại Hàn Quốc",
      majors: ["Khoa học xã hội", "Ngôn ngữ Hàn"],
      countries: ["Châu Á"],
      details: {
        profile: ["Tốt nghiệp ngành sư phạm tiếng Hàn trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội.", "Đang theo học thạc sĩ ngành Ngôn ngữ và Văn hóa Hàn Quốc tại Korea University."],
        achievements: ["Giải Nhất kỳ thi học sinh giỏi tiếng Hàn cấp Đại học Quốc gia Hà Nội năm 2018",
          "Giải Nhất cuộc thi nói tiếng Hàn Think Korea-Thang Long.OKTA năm 2021",
          "Giải Nhất cuộc thi nói tiếng Hàn toàn quốc - Cúp Đại sứ Hàn Quốc năm 2022",
          "Giải Ba cuộc thi hùng biện tiếng Hàn K-SPEECH năm 2024",
          "Học bổng Chính phủ Hàn Quốc năm 2025"
        ],
        statement: "Mình tin rằng việc apply học bổng không chỉ là quá trình chuẩn bị giấy tờ hay hoàn thành một bài luận, mà là cả một hành trình khám phá bản thân - hiểu rõ mình là ai, mình thực sự mong muốn điều gì và đâu là điểm mạnh của bản thân.Từ những trải nghiệm cá nhân, mình mong muốn được đồng hành cùng các bạn mentee còn đang bối rối trong giai đoạn bắt đầu bằng việc gợi mở và định hướng để các bạn tự nhận ra điểm mạnh và mục tiêu phù hợp với bản thân.",
        philosophy: "Mình không đặt ra một khuôn mẫu cố định để các bạn phải theo bởi mỗi người đều có con đường riêng, và điều quan trọng nhất là bạn hiểu rõ chính bản thân mình. Mình ở đây với vai trò một mentor - người đồng hành và hỗ trợ các bạn, còn mọi quyết định vẫn thuộc về chính các bạn. Điều mình mong đợi ở mentee là sự quyết tâm, tập trung và nỗ lực hết sức cho mục tiêu đã chọn.",
        records: [],
        highlight_record: [],
        support: "",
        tags: ["Châu Á", "Khoa học xã hội", "Ngôn ngữ Hàn"]
      }
    },
    {
      id: "linhchi",
      name: "Linh Chi",
      role: role,
      description: "Master, Finance, Yonsei University, Hàn Quốc",
      image: "/assets/img/team/linhchi.jpeg",
      received_scholarship: "Nhận học bổng GKS-G 2023",
      mentor_history: "Hỗ trợ thành công mentee apply các ngành kinh tế.",
      hashtag: "Hỗ trợ apply học bổng các ngành khoa học xã hội trên toàn thế giới",
      majors: ["Khoa học xã hội"],
      countries: ["Châu Á", "Châu Âu", "Châu Mỹ", "Châu Úc", "Toàn thế giới"],
      details: {
        profile: ["Tốt nghiệp ngành tài chính trường đại học kinh tế quốc dân.", "Ex-Associate tại EY Việt Nam", "Tốt nghiệp thạc sĩ ngành Finance tại Yonsei University."],
        achievements: ["Nhận học bổng BIDV dành cho sinh viên NEU có thành tích xuất sắc kỳ II năm học 2018-2019",
          "Nhận học bổng chính phủ Hàn Quốc bậc Cao học năm 2023, nhận được thư mời từ 3 trường đại học: Yonsei Uni, Ewha Uni và JBNU"
        ],
        statement: "If you aim at nothing, you hit nothing",
        philosophy: "A mentor is someone who sees more talent and ability within a person than they see in themselves and helps brings it out",
        records: ["Hỗ trợ thành công cho mentee đậu học bổng toàn phần và học bổng 100% ngành Business/Finance/Accounting/Managment ở bậc học Thạc sĩ và Tiến sĩ tại Singapore, Ý, Hàn Quốc"],
        highlight_record: [],
        support: "",
        tags: ["Châu Á", "Khoa học xã hội", "Finance", "Business", "Accounting", "Management"]
      }
    },
    {
      id: "dieumai",
      name: "Diệu Mai",
      role: role,
      description: "Bachelor, Economics, UIC- Yonsei University, Hàn Quốc",
      image: "/assets/img/team/dieumai.png",
      received_scholarship: "Nhận học bổng Admissions Scholarship (covering 100% tuition fees) của UIC Yonsei.",
      mentor_history: "",
      hashtag: "Hỗ trợ apply học bổng các trường tại Hàn Quốc",
      majors: ["Khoa học xã hội"],
      countries: ["Châu Á"],
      details: {
        profile: ["Cử nhân ngành Economics, Underwood International College, Yonsei University."],
        achievements: ["Học bổng Admissions Scholarship (covering 100% tuition fees) của UIC Yonsei.",
          "Huy chương Bạc Toán HKIMO vòng quốc gia năm 2021.",
          "Giải Nhất học sinh giỏi Toán cấp cụm Ba Đình - Tây Hồ năm 2023, Nhì năm 2024."
        ],
        statement: "Hành trình chạm đến ước mơ chưa bao giờ là dễ dàng. Nhưng trên từng bước đi, khi bạn vẫn kiên định hướng về phía trước, bạn cũng đang âm thầm trở thành phiên bản mà chính mình từng ngưỡng mộ. Growth is slow, but it does exist.",
        philosophy: "Dấu ấn của mỗi cá nhân không chỉ đến từ thành tích, tài năng hay triển vọng tương lai mà được định hình những giá trị tốt đẹp cá nhân đó có thể đóng góp cho cộng đồng của mình. Một người tỏa sáng không chỉ chiếu rọi chính mình, mà còn lan tỏa ánh sáng ấy đến cả một vùng xung quanh.",
        records: [],
        highlight_record: [],
        support: "",
        tags: ["Châu Á", "Yonsei", "Economics"]
      }
    },
  ]
