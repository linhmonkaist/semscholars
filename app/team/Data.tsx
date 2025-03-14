"use client"
interface SocialLinks {
    twitter: string;
    linkedin: string;
    github: string;
  }


const role: string = "Scholarship Mentor"
interface TeamMember {
  id: string
  name: string
  image: string
  description: string
  role: string
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
      majors: ["Khoa học kỹ thuật", "Khoa học xã hội"],
      countries: ["Hàn Quốc", "Việt Nam", "Mỹ"]
    },
    {
      id: "minhduc",
      name: "Phạm Minh Đức",
      role: role,
      description: "PhD, descriptionchemistry, Molecular, Cellular and Developmental descriptionlogy, University of California, Davis, Mỹ",
      image: "./assets/img/team/minh_duc.jpg",
      majors: ["Khoa học kỹ thuật", "Khoa học xã hội"],
      countries: ["Hàn Quốc", "Việt Nam", "Mỹ"]
    },
    {
      id: "mainguyen",
      name: "Nguyễn Ngọc Mai",
      role: role,
      description: "Double major, Computer Science và Business Technology Management, KAIST, Hàn Quốc.",
      image: "./assets/img/team/mainguyen.png",
      majors: ["Khoa học kỹ thuật", "Khoa học xã hội"],
      countries: ["Hàn Quốc", "Việt Nam", "Mỹ"]
    },
    {
      id: "duckien",
      name: "Hoàng Đức Kiên",
      role: role,
      description: "Master, Statistics, Swiss Federal Institute of Technology Lausanne (EPFL), Thụy Sĩ",
      image: "./assets/img/team/kien.jpg",
      majors: ["Khoa học kỹ thuật", "Khoa học xã hội"],
      countries: ["Hàn Quốc", "Việt Nam", "Mỹ"]
    },
    {
      id: "thephuc", 
      name: "Đỗ Hoàng Thế Phúc",
      role: role,
      description: "Double major, Microdescriptionlogy và International relation, Jeonbuk National University, Hàn Quốc",
      image: "./assets/img/team/phuc.jpg",
      majors: ["Khoa học kỹ thuật", "Khoa học xã hội"],
      countries: ["Hàn Quốc", "Việt Nam", "Mỹ"]
    },
    {
      id: "cucngo",
      name: "Ngọ Thị Cúc",
      role: role,
      description: "Master, Korean Language & Literature, Kyunghee University, Hàn Quốc.",
      image: "./assets/img/team/Cucngo.jpg",
      majors: ["Khoa học kỹ thuật", "Khoa học xã hội"],
      countries: ["Hàn Quốc", "Việt Nam", "Mỹ"]
    },
    {
      id: "ngangiang", 
      name: "Vũ Ngân Giang",
      role: role,
      description: "Bachelor, Bussiness Administration, Korea University, Hàn Quốc",
      image: "./assets/img/team/giang.jpg",
      majors: ["Khoa học kỹ thuật", "Khoa học xã hội"],
      countries: ["Hàn Quốc", "Việt Nam", "Mỹ"]
    },
    {
      id: "phuonganh",
      name: "Phương Anh",
      role: role,
      description: "Bachelor, Bussiness Administration, Korea University, Hàn Quốc",
      image: "./assets/img/team/phuongAnh.jpg",
      majors: ["Khoa học kỹ thuật", "Khoa học xã hội"],
      countries: ["Hàn Quốc", "Việt Nam", "Mỹ"]
    },
    {
      id: "hoanglien",
      name: "Nguyễn Hoàng Liên",
      role: role,
      description: "Double major, Media & Communication và International relation, Korea University, Hàn Quốc",
      image: "./assets/img/team/Lien.jpg",
      majors: ["Khoa học kỹ thuật", "Khoa học xã hội"],
      countries: ["Hàn Quốc", "Việt Nam", "Mỹ"]
    },
    {
      id: "dieuhien",
      name: "Đặng Thị Diệu Hiền",
      role: role,
      description: "Bachelor, Media & Communication, Hanyang University, Hàn Quốc",
      image: "./assets/img/team/hien.jpg",
      majors: ["Khoa học kỹ thuật", "Khoa học xã hội"],
      countries: ["Hàn Quốc", "Việt Nam", "Mỹ"]
    },
    {
      id: "thanhtrung",
      name: "Ninh Phạm Thành Trung",
      role: role,
      description: "Master, Environmental Engineering, KAIST, Hàn Quốc",
      image: "./assets/img/team/thanh_trung.jpg",
      majors: ["Khoa học kỹ thuật", "Khoa học xã hội"],
      countries: ["Hàn Quốc", "Việt Nam", "Mỹ"]
    },
    {
      id: "quynhnhi",
      name: "Phạm Quỳnh Nhi",
      role: role,
      description: "Bachelor, Bussiness Administration, SNU, Hàn Quốc",
      image: "./assets/img/team/quynhnhi.jpg",
      majors: ["Khoa học kỹ thuật", "Khoa học xã hội"],
      countries: ["Hàn Quốc", "Việt Nam", "Mỹ"]
    },
    {
      id: "phuongngoc",
      name: "Nguyễn Phương Ngọc",
      role: role,
      description: "Master, Media & Communications, Ewha Womans University, Hàn Quốc",
      image: "./assets/img/team/phuong_ngoc.jpg",
      majors: ["Khoa học kỹ thuật", "Khoa học xã hội"],
      countries: ["Hàn Quốc", "Việt Nam", "Mỹ"]
    },
    {
      id: "hoangngoc",
      name: "Hoàng Thị Hồng Ngọc",
      role: role,
      description: "Master, Korean Education, Ewha Womans University, Hàn Quốc",
      image: "./assets/img/team/hoang_ngoc.png",
      majors: ["Khoa học kỹ thuật", "Khoa học xã hội"],
      countries: ["Hàn Quốc", "Việt Nam", "Mỹ"]
    },
  ]