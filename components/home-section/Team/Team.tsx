"use client"

import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import React from 'react'
import Image from 'next/image';
import { teamMembers } from './Data'

const Team = () => {
  return (
    <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Meet Our Team</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Our dedicated educators and staff are committed to providing the highest quality educational experience
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="group flex flex-col items-center text-center">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={member.image || "/assets/img/icon.png"}
                      alt={member.name || "Member image"}
                      className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      width={300}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-center p-4">
                      <div className="flex gap-4">
                        <a href={member.social.twitter} className="text-white hover:text-primary transition-colors">
                          <TwitterIcon className="h-5 w-5" />
                        </a>
                        <a href={member.social.linkedin} className="text-white hover:text-primary transition-colors">
                          <LinkedinIcon className="h-5 w-5" />
                        </a>
                        <a href={member.social.github} className="text-white hover:text-primary transition-colors">
                          <GithubIcon className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default Team