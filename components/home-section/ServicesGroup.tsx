"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { GraduationCap, Users, Video } from "lucide-react";

import React from 'react'

const ServicesGroup = () => {
  return (
    <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Tổng quan dịch vụ của SEM</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Mentor cá nhân</CardTitle>
                  <CardDescription>Hướng dẫn cá nhân một kèm một với các mentor dày dặn kinh nghiệm</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Mentor sẽ dựa theo thành tích, định hướng và mong muốn cá nhân của mentee để đưa ra hướng dẫn và xây dựng lộ trình phù hợp
                  </p>
                </CardContent>
                {/* <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter> */}
              </Card>

              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Mentor Online</CardTitle>
                  <CardDescription>Dễ dàng kết nối với mentor ở bất cứ đâu.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                   Hình thức mentor online tạo điều kiện thuận lợi cho mentee gặp gỡ và hỏi trực tiếp từ các mentor qua các buổi meeting trực tuyến qua Google Meet.
                  </p>
                </CardContent>
                {/* <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter> */}
              </Card>

              <Card>
                <CardHeader className="space-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Gói mentor linh hoạt</CardTitle>
                  <CardDescription>Lựa chọn phù hợp theo nhu cầu và mục tiêu.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                  Cung cấp các gói mentoring linh hoạt từ gói lẻ đến gói A-Z, phù hợp với nhu cầu riêng của từng mentee.
                  </p>
                </CardContent>
                {/* <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter> */}
              </Card>
            </div>
          </div>
        </section>
  )
}

export default ServicesGroup