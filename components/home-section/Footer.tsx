"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background py-12 px-4 border-t">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/assets/img/icon.png" alt="Logo" width={24} height={24} className="h-6 w-6" />
                <span className="text-xl font-bold">SEM Scholars</span>
              </div>
              <p className="text-muted-foreground">
                Cung cấp dịch vụ từ vấn giáo dục quốc tế từ năm 2020. Hỗ trợ các bạn trẻ trên con đường chinh phục các trường đại học danh giá trên toàn thế giới. 
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Dịch vụ</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/courses" className="text-muted-foreground hover:text-foreground">
                    Tổng quan
                  </Link>
                </li>
                <li>
                  <Link href="/courses/single" className="text-muted-foreground hover:text-foreground">
                    Chương trình mentor lẻ
                  </Link>
                </li>
                <li>
                  <Link href="courses/multi" className="text-muted-foreground hover:text-foreground">
                    Chương trình mentor A-Z
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Liên kết khác</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/team" className="text-muted-foreground hover:text-foreground">
                    Mentor team SEM
                  </Link>
                </li>
                <li>
                  <Link href="/mentee" className="text-muted-foreground hover:text-foreground">
                    Thành tích
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-muted-foreground hover:text-foreground">
                    Hỗ trợ
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    Về SEM Scholars
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Liên hệ</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">SEM Scholars</li>
                <li className="text-muted-foreground">semscholars.team@gmail.com</li>
                {/* <li className="text-muted-foreground">Facebook: SEM Scholars</li> */}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t text-center text-muted-foreground">
            <p>© 2020 SEM Scholars. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer