"use client"
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
}

export const teamMembers: TeamMember[]= [
    {
      id: "linhmon",
      name: "Linh Mon",
      role: "Founder, Mentor",
      description: "Double major, Computer Science và Business Technology Management, KAIST, Hàn Quốc",
      image: "./assets/img/team/linhmon.jpg",
      received_scholarship: "Nhận học bổng chính phủ Hàn Quốc năm 2020, học bổng Daewoong, học bổng Microsoft Youthspark.\
      Nhận thư mời từ 3 trường: KAIST, Đại học Quốc gia Seoul(SNU) và Đại học Yonsei",
      mentor_history: "Hỗ trợ thành công mentee đậu các bậc học Tiến sĩ, Thạc sĩ, Đại học và các chương trình ngắn hạn ở Mỹ, Hàn Quốc, Nhật Bản, Việt Nam, Thụy Sĩ \
      ngành khoa học kỹ thuật và khoa học xã hội",
      majors: ["Khoa học kỹ thuật", "Khoa học xã hội"],
      countries: ["Châu Mỹ", "Châu Á", "Châu Âu"],
      hashtag: "Hỗ trợ apply tất cả các học bổng trên toàn thế giới.",
    },
    {
      id: "minhduc",
      name: "Phạm Minh Đức",
      role: role,
      description: "PhD, descriptionchemistry, Molecular, Cellular and Developmental descriptionlogy, University of California, Davis, Mỹ. \
      Cựu sinh viên ngành Bio and Brain Engineering tại KAIST, Hàn Quốc.",
      image: "./assets/img/team/minh_duc.jpg",
      received_scholarship: "Nhận học bổng Dean's Distinguished Graduate Fellowship, học bổng 100% của KAIST, Huyndai Motor Chung Mong-Koo Global Scholarship, \
      50% Scholarship for Bachelor Program at NUS",
      mentor_history: "Từng hướng dẫn thành công mentee đậu hệ đại học, thạc sĩ và PhD ở Mỹ và master ở Hà Lan, Mỹ, Hàn Quốc.",
      majors: ["Khoa học kỹ thuật"],
      countries: ["Toàn thế giới","Châu Mỹ", "Châu Á", "Châu Âu", "Châu Úc"],
      hashtag: "Hỗ trợ apply các ngành Technology & Science trên toàn thế giới.",
    },
    {
      id: "mainguyen",
      name: "Nguyễn Ngọc Mai",
      role: role,
      description: "Double major, Computer Science và Business Technology Management, KAIST, Hàn Quốc.",
      image: "./assets/img/team/mainguyen.png",
      received_scholarship: "Từng đạt học bổng toàn phần của KAIST; học bổng 100% và hỗ trợ tài chính của các trường: Minerva University (Mỹ), Texas Christian University\
      (Mỹ), Allegheny College (Mỹ), Depauw University (Mỹ), Hobart & William Smith College (Mỹ), Lewis & Clarke College (Mỹ), Miami University (Mỹ), Ohio Wesleyan\
       University (Mỹ), Rhodes College (Mỹ), Tokyo International University (Nhật); Đạt học bổng 95% Duke Kunshan University (Trung Quốc), 75% Swinburne University of \
       Technology (Úc), 50% Deakin University (Úc), 90% SP Jain School of Global and Management (Úc), 80% Ritsumeikan Asia Pacific University (Nhật); Nhận được thư mời \
       nhập học với học bổng/hỗ trợ tài chính cao từ Fulbright University Vietnam, VinUniversity, The Hong Kong University of Science and Technology (Hồng Kông).",
      mentor_history: "Hỗ trợ thành công mentee dành học bổng toàn phần của KAIST và các học bổng khác trên thế giới.",
      majors: ["Khoa học kỹ thuật", "Khoa học xã hội"],
      countries: ["Toàn thế giới","Châu Mỹ", "Châu Á", "Châu Âu", "Châu Úc"],
      hashtag: "Hỗ trợ apply tất cả các học bổng trên toàn thế giới.",
    },
    {
      id: "duckien",
      name: "Hoàng Đức Kiên",
      role: role,
      description: "Master, Statistics, Swiss Federal Institute of Technology Lausanne (EPFL), Thụy Sĩ. Cựu sinh viên KAIST, ngành Mathematical Sciences",
      image: "./assets/img/team/kien.jpg",
      received_scholarship: "Nhận học bổng toàn phần của KAIST",
      mentor_history: "Hướng dẫn thành công các mentee apply Hàn Quốc, Thụy Sĩ các ngành khoa học kỹ thuật",
      majors: ["Khoa học kỹ thuật"],
      countries: ["Toàn thế giới","Châu Mỹ", "Châu Á", "Châu Âu", "Châu Úc"],
      hashtag: "Hỗ trợ apply học bổng các ngành Technology & Science trên toàn thế giới",
    },
    {
      id: "thephuc", 
      name: "Đỗ Hoàng Thế Phúc",
      role: role,
      description: "Double major, Plant Medicine và International Development Cooperation, Jeonbuk National University, Hàn Quốc",
      image: "./assets/img/team/phuc.jpg",
      received_scholarship: "Nhận Học bổng Erasmus Mundus Joint Masters 2025, Học bổng Latvian \
      State Scholarships for Studies and Summer Schools 2024 at Rezekne Academy of Technologies,\
      Riga, Latvia, Học bổng Erasmus+ International Credit Mobility between JBNU, Korea and \
      Universitat Hohenheim, Stuttgart, Germany, 2024, Học bổng Global Korea Scholarship\
      Undergraduate 2020",
      mentor_history: "Hỗ trợ thành công mentee apply các ngành khác nhau của GKS và học bổng trường tại Hàn Quốc",
      majors: ["Khoa học kỹ thuật", "Khoa học xã hội"],
      hashtag: "Hỗ trợ apply tất cả các học bổng trên toàn thế giới.",
      countries: ["Toàn thế giới","Châu Mỹ", "Châu Á", "Châu Âu", "Châu Úc"],
    },
    {
      id: "cucngo",
      name: "Ngọ Thị Cúc",
      role: role,
      description: "Master, Korean Language & Literature, Kyunghee University, Hàn Quốc.",
      image: "./assets/img/team/Cucngo.jpg",
      received_scholarship: "Nhận học bổng GKS-G 2022 nhận được thư mời nhập học từ 3 trường: Kyunghee Uni, Keimyung Uni, Sookmyung Women's Uni.",
      mentor_history: "Hỗ trợ thành công mentee apply các ngành ngôn ngữ Hàn, giáo dục tiếng Hàn",
      hashtag: "Hỗ trợ apply khối ngành ngôn ngữ tại Hàn Quốc",
      majors: ["Ngôn ngữ Hàn"],
      countries: ["Châu Á"]
    },
    {
      id: "ngangiang", 
      name: "Vũ Ngân Giang",
      role: role,
      description: "Bachelor, Bussiness Administration, Korea University, Hàn Quốc",
      image: "./assets/img/team/giang.jpg",
      received_scholarship: "Nhận học bổng GKS-U 2022, nhận được thư mời nhập học từ Korea University, Yonsei University",
      mentor_history: "Hỗ trợ thành công mentee apply các ngành social science tại Việt Nam và Hàn Quốc",
      hashtag: "Hỗ trợ apply học bổng các ngành Social Science trên toàn thế giới",
      majors: ["Khoa học xã hội"],
      countries: ["Châu Á"]
    },
    {
      id: "phuonganh",
      name: "Phương Anh",
      role: role,
      description: "Bachelor, Bussiness Administration, Korea University, Hàn Quốc",
      image: "./assets/img/team/phuongAnh.jpg",
      received_scholarship: "Nhận học bổng GKS-U,EGPP của Ewha Womans University. Nhận được thư mời nhập học từ Korea University, Yonsei University",
      mentor_history: "Hỗ trợ thành công mentee apply các ngành social science tại Hàn Quốc",
      hashtag: "Hỗ trợ apply học bổng các ngành Social Science tại Hàn Quốc",
      majors: ["Khoa học xã hội"],
      countries: ["Châu Á"]
    },
    {
      id: "hoanglien",
      name: "Nguyễn Hoàng Liên",
      role: role,
      description: "Double major, Media & Communication và International relation, Korea University, Hàn Quốc",
      image: "./assets/img/team/Lien.jpg",
      received_scholarship: "Nhận học bổng GKS-U 2022. Nhận được thư mời nhập học từ Korea University, Yonsei University",
      mentor_history: "Hỗ trợ thành công mentee apply các ngành social science tại Hàn Quốc",
      hashtag: "Hỗ trợ apply học bổng các ngành Social Science trên toàn thế giới",
      majors: ["Khoa học xã hội"],
      countries: ["Châu Á"]
    },
    {
      id: "dieuhien",
      name: "Đặng Thị Diệu Hiền",
      role: role,
      description: "Bachelor, Media & Communication, Hanyang University, Hàn Quốc",
      image: "./assets/img/team/hien.png",
      received_scholarship: "Nhận học bổng GKS-U 2021",
      mentor_history: "Hỗ trợ thành công mentee apply các ngành social science tại Hàn Quốc",
      hashtag: "Hỗ trợ apply học bổng ngành Media & Communication tại Hàn Quốc",
      majors: ["Khoa học xã hội"],
      countries: ["Châu Á"]
    },
    {
      id: "thanhtrung",
      name: "Ninh Phạm Thành Trung",
      role: role,
      description: "Master, Environmental Engineering, KAIST, Hàn Quốc",
      image: "./assets/img/team/thanh_trung.jpg",
      received_scholarship: "Nhận học bổng GKS-G 2022, học bổng toàn phần cho hệ thạc sĩ tại National Taiwan University (Đài Loan), học bổng VLIR-UOS (Full-ride) cho bậc thạc sĩ tại Bỉ.",
      mentor_history: "Hỗ trợ thành công mentee apply GKS-G và học bổng chính phủ Đài Loan (MOE Taiwan Scholarship 2023).",
      hashtag: "Hỗ trợ apply học bổng các ngành Technology & Science trên toàn thế giới",
      majors: ["Khoa học kỹ thuật"],
      countries: ["Toàn thế giới","Châu Mỹ", "Châu Á", "Châu Âu", "Châu Úc"]
    },
    {
      id: "quynhnhi",
      name: "Phạm Quỳnh Nhi",
      role: role,
      description: "Bachelor, Bussiness Administration, SNU, Hàn Quốc",
      image: "./assets/img/team/quynhnhi.jpg",
      received_scholarship: "Đạt học bổng 100% của trường SNU, học bổng toàn phần có sinh hoạt phí của trường CUHK, học bổng tập đoàn Amore Pacific Hàn Quốc, học bổng \
      doanh nghiệp Việt-Hàn Green Academy, học bổng viện nghiên cứu môi trường châu Á.",
      mentor_history: "Hỗ trợ thành công mentee apply ngành khoa học xã hội tại các trường đại học ở Việt Nam và Hàn Quốc",
      hashtag: "Hỗ trợ apply học bổng các ngành Social Science trên toàn thế giới",
      majors: ["Khoa học xã hội"],
      countries: ["Châu Á"]
    },
    {
      id: "phuongngoc",
      name: "Nguyễn Phương Ngọc",
      role: role,
      description: "Master, Media & Communications, Ewha Womans University, Hàn Quốc",
      image: "./assets/img/team/phuong_ngoc.jpg",
      received_scholarship: "Nhận học bổng GKS-G 2024",
      mentor_history: "Hỗ trợ thành công mentee apply ngành khoa học xã hội tại Hàn Quốc",
      hashtag: "Hỗ trợ apply học bổng các ngành Social Science trên toàn thế giới",
      majors: ["Khoa học xã hội"],
      countries: ["Châu Á"]
    },
    {
      id: "hoangngoc",
      name: "Hoàng Thị Hồng Ngọc",
      role: role,
      description: "Master, Korean Education, Ewha Womans University, Hàn Quốc",
      image: "./assets/img/team/hoang_ngoc.png",
      received_scholarship: "Nhận học bổng GKS-G 2023",
      mentor_history: "Hỗ trợ thành công mentee apply ngành ngôn ngữ Hàn, giáo dục tiếng Hàn tại Hàn Quốc",
      hashtag: "Hỗ trợ apply học bổng các ngành ngôn ngữ tại Hàn Quốc",
      majors: ["Khoa học xã hội", "Ngôn ngữ Hàn"],
      countries: ["Châu Á"]
    },
    {
      id: "hoangan",
      name: "Phạm Hoàng Ân",
      role: role,
      description: "Master, Business Administration in Management and Marketing, SKKU, Hàn Quốc",
      image: "./assets/img/team/hoang_an.png",
      received_scholarship: "Nhận học bổng GKS-G 2022",
      mentor_history: "Hỗ trợ thành công mentee apply ngành Social Science tại Hàn Quốc",
      hashtag: "Hỗ trợ apply học bổng các ngành khoa học xã hội tại Hàn Quốc",
      majors: ["Khoa học xã hội"],
      countries: ["Châu Á"]
    },
  ]