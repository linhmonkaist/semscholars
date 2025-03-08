import { GraduationCap } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-background py-12 px-4 border-t">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">EduLearn</span>
              </div>
              <p className="text-muted-foreground">
                Providing quality education services since 2010. Helping students achieve their academic goals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Private Tutoring
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Group Classes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Online Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Test Preparation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Study Materials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Free Assessments
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Learning Tips
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">123 Education St, Learning City</li>
                <li className="text-muted-foreground">contact@edulearn.com</li>
                <li className="text-muted-foreground">(555) 123-4567</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t text-center text-muted-foreground">
            <p>© 2025 EduLearn. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer