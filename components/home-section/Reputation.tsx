import { Users, BookOpen, GraduationCap, Trophy } from 'lucide-react'
import React from 'react'

const Reputation = () => {
  return (
    <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Thành tích của SEM</h2>
              <p className="mt-4 text-lg text-muted-foreground">Được học sinh và phụ huynh tin tưởng và đánh giá cao</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2">100+</h3>
                <p className="text-lg font-medium">Mentee đã hỗ trợ</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Giúp các bạn học sinh, sinh viên đạt được mục tiêu du học
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2">150+</h3>
                <p className="text-lg font-medium">Suất học bổng</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Thành công chinh phục các học bổng danh giá trên toàn thế giới
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2">40+</h3>
                <p className="text-lg font-medium">Trường đại học</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Chinh phục thành công các trường đại học top đầu thế giới. 
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold mb-2">16</h3>
                <p className="text-lg font-medium">Quốc gia</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Chinh phục thành công các quốc gia như Mỹ, Thụy Sỹ, Hà Lan, Anh, Hàn Quốc, Nhật Bản ... 
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Reputation