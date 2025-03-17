"use client"
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image';
import Link from 'next/link';


const Intro = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-primary/50 px-4 py-16 md:py-24">
          <div className="container mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div>
                <h1 className=" decoration-red-200 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  SEM Scholars
                </h1>
                <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                  Đội ngũ tiên phong trong hỗ trợ các bạn trẻ Việt Nam chinh phục các trường đại học danh giá trên thế giới. 
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/courses">
                    <Button size="lg">Dịch vụ</Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      Liên hệ
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative hidden md:block">
              <Image
                  src="./assets/img/cover.png"
                  alt="Students learning"
                  className="rounded-lg shadow-lg"
                  width={500} // Set the width
                  height={400} // Set the height
                />
              </div>
            </div>
          </div>
        </section>
  )
}

export default Intro