"use client"

import React from "react"
import {DETAIL_HEADERS, TeamMember, teamMembers} from "@/app/team/Data"
import { notFound } from "next/navigation"
import { Tags } from "lucide-react"

type PageProps = {
  params: Promise<{
    mentor_id: string
  }>
}

function renderMentorDetails(details: TeamMember["details"]) {
  return Object.entries(details).map(([key, value]) => {
    const isEmpty =
      value == null ||
      (typeof value === "string" && value.trim().length === 0) ||
      (Array.isArray(value) && value.length === 0)

    if (isEmpty) return null

    const title = DETAIL_HEADERS[key as keyof TeamMember["details"]]

    if (!title) return null

    return (
      <div key={key} className="mt-10">
        <h2 className="text-lg font-medium text-gray-900">
          {title}
        </h2>

        <div className="mt-4 space-y-2">
          {Array.isArray(value) ? (
            <ul className="list-disc space-y-2 pl-4 text-sm text-gray-600">
              {value.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-600">
              {value}
            </p>
          )}
        </div>
      </div>
    )
  })
}


export default function MentorDetailPage({ params }: PageProps) {
const breadcrumbs = [
  { id: 1, name: 'Đội ngũ', href: '../team' },
]

const product = {
  name: 'Minh Đức',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Đội ngũ', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
    { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
    { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

// export default function Example() {
  const { mentor_id } = React.use(params)

  const mentor = teamMembers.find((m) => m.id === mentor_id)

  if (!mentor) {
    notFound()
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {mentor.name}
              </a>
            </li>
          </ol>
        </nav>


        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{mentor.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <div className="w-full h-[420px] overflow-hidden rounded-lg">
              <img
              alt="img"
              src={mentor.image}
              className="row-span-4 aspect-4/4 size-full rounded-lg object-cover"
              />
            </div>

            <form className="mt-10">
              {/* Sizes */}
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Hashtags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {mentor.details.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-sm text-gray-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            {/* Description and details */}
            <div className="mt-10 space-y-8">
              {renderMentorDetails(mentor.details)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
