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
        achievements: ["Giải nhì học sinh giỏi quốc gia môn Vật Lý năm 2017", "Học bổng chính phủ Hàn Quốc năm 2020", "Học bổng Daewoong dành cho sinh viên đang học tại Hàn năm 2022", "Tham dự KAIST Global Entrepreneurship Summer School 2024 tại Mỹ"],
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
        profile: [],
        achievements: [],
        statement: "",
        philosophy: "",
        records: [],
        highlight_record: [],
        support: "",
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
        profile: [],
        achievements: [],
        statement: "",
        philosophy: "",
        records: [],
        highlight_record: [],
        support: "",
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
        profile: [],
        achievements: [],
        statement: "",
        philosophy: "",
        records: [],
        highlight_record: [],
        support: "",
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
      mentor_history: "Hỗ trợ thành công mentee apply các ngành khác nhau của GKS và học bổng trường tại Hàn Quốc",
      majors: ["Khoa học kỹ thuật", "Khoa học xã hội"],
      hashtag: "Hỗ trợ apply tất cả các học bổng trên toàn thế giới.",
      countries: ["Toàn thế giới","Châu Mỹ", "Châu Á", "Châu Âu", "Châu Úc"],
      details: {
        profile: [],
        achievements: [],
        statement: "",
        philosophy: "",
        records: [],
        highlight_record: [],
        support: "",
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
      majors: ["Ngôn ngữ Hàn"],
      countries: ["Châu Á"],
      details: {
        profile: [],
        achievements: [],
        statement: "",
        philosophy: "",
        records: [],
        highlight_record: [],
        support: "",
      }
    },
    {
      id: "ngangiang", 
      name: "Vũ Ngân Giang",
      role: role,
      description: "Bachelor, Bussiness Administration, Korea University, Hàn Quốc",
      image: "/assets/img/team/giang.jpg",
      received_scholarship: "Nhận học bổng GKS-U 2022, nhận được thư mời nhập học từ Korea University, Yonsei University",
      mentor_history: "Hỗ trợ thành công mentee apply các ngành social science tại Việt Nam và Hàn Quốc",
      hashtag: "Hỗ trợ apply học bổng các ngành Social Science trên toàn thế giới",
      majors: ["Khoa học xã hội"],
      countries: ["Châu Á"],
      details: {
        profile: [],
        achievements: [],
        statement: "",
        philosophy: "",
        records: [],
        highlight_record: [],
        support: "",
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
        profile: [],
        achievements: [],
        statement: "",
        philosophy: "",
        records: [],
        highlight_record: [],
        support: "",
      }
    },
    {
      id: "hoanglien",
      name: "Nguyễn Hoàng Liên",
      role: role,
      description: "Double major, Media & Communication và International relation, Korea University, Hàn Quốc",
      image: "/assets/img/team/Lien.jpg",
      received_scholarship: "Nhận học bổng GKS-U 2022. Nhận được thư mời nhập học từ Korea University, Yonsei University",
      mentor_history: "Hỗ trợ thành công mentee apply các ngành social science tại Hàn Quốc",
      hashtag: "Hỗ trợ apply học bổng các ngành Social Science trên toàn thế giới",
      majors: ["Khoa học xã hội"],
      countries: ["Châu Á"],
      details: {
        profile: [],
        achievements: [],
        statement: "",
        philosophy: "",
        records: [],
        highlight_record: [],
        support: "",
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
        profile: [],
        achievements: [],
        statement: "",
        philosophy: "",
        records: [],
        highlight_record: [],
        support: "",
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
        profile: [],
        achievements: [],
        statement: "",
        philosophy: "",
        records: [],
        highlight_record: [],
        support: "",
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
        profile: [],
        achievements: [],
        statement: "",
        philosophy: "",
        records: [],
        highlight_record: [],
        support: "",
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
        profile: [],
        achievements: [],
        statement: "",
        philosophy: "",
        records: [],
        highlight_record: [],
        support: "",
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
        profile: [],
        achievements: [],
        statement: "",
        philosophy: "",
        records: [],
        highlight_record: [],
        support: "",
      }
    },
    {
      id: "huongnguyen",
      name: "Nguyễn Thị Thanh Hường",
      role: role,
      description: "Tốt nghiệp cử nhân ngành Dược học Đại học Y Dược Huế, tốt nghiệp thạc sĩ về nghiên cứu và phát triển thuốc tại Vương quốc Anh",
      image: "/assets/img/team/huong_nguyen.png",
      received_scholarship: "Nhận học bổng Sakura Science cho chương trình trao đổi sinh viên tại Nhật Bản và học bổng toàn phần Women in STEM cho chương trình thạc sĩ về nghiên cứu và phát triển thuốc tại Vương quốc Anh",
      mentor_history: "Hỗ trợ thành công mentee apply các ngành Khoa học sức khoẻ, Khoa học kỹ thuật ở Anh, Thuỵ Điển, Bỉ.",
      hashtag: "Hỗ trợ apply học bổng các ngành khoa học sức khỏe, khoa học kỹ thuật trên toàn thế giới",
      majors: ["Khoa học sức khỏe", "Khoa học kỹ thuật"],
      countries: ["Toàn thế giới","Châu Mỹ", "Châu Á", "Châu Âu", "Châu Úc"],
      details: {
        profile: [],
        achievements: [],
        statement: "",
        philosophy: "",
        records: [],
        highlight_record: [],
        support: "",
      }
    },
  ]