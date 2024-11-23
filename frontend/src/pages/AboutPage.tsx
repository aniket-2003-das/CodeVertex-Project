"use client"

import React from 'react'
import { Building2, GraduationCap, Users } from 'lucide-react'
import { CardSpotlight } from '../components/ui/card-spotlight'
import { CanvasRevealEffect } from '../components/ui/canvas-reveal-effect'
import About from '../sections/About'
import About2 from '../sections/About2'
import { HoverEffect } from '../components/ui/card-hover-effect'

const advantagesItems = [
  {
    title: "Internship Opportunities",
    description: "Apply for internships in various fields and gain hands-on experience.",
    link: "#internships"
  },
  {
    title: "IT Courses",
    description: "Learn & Develop! with our certification courses.",
    link: "#courses"
  },
  {
    title: "Career Guidance",
    description: "Get personalized guidance to kickstart your career.",
    link: "#career"
  },
  {
    title: "Community Support",
    description: "Connect with peers and professionals in our community.",
    link: "#community"
  },
  {
    title: "Project-Based Learning",
    description: "Work on real-world projects to develop problem-solving skills.",
    link: "#projects"
  },
  {
    title: "Mentorship Programs",
    description: "Get expert mentorship for guidance and support.",
    link: "#mentorship"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#010103] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <CanvasRevealEffect
            colors={[[140, 69, 255], [74, 32, 138]]}
            containerClassName="opacity-30"
          />
        </div>
        <div className="container relative mx-auto px-4">
          <h1 className="mb-6 text-center text-5xl font-bold">About CodeVertex</h1>
          <p className="text-gradient mx-auto max-w-2xl text-center text-lg">
            Empowering innovation through cutting-edge tech solutions. Transforming ideas into reality. 🚀
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-wrap items-center justify-center gap-8">
            <CardSpotlight className="w-full max-w-sm">
              <div className="flex items-center gap-4 p-6">
                <Building2 className="h-8 w-8 text-purple-500" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-semibold">Pune, Maharashtra</p>
                </div>
              </div>
            </CardSpotlight>

            <CardSpotlight className="w-full max-w-sm">
              <div className="flex items-center gap-4 p-6">
                <Users className="h-8 w-8 text-purple-500" />
                <div>
                  <p className="text-sm text-gray-400">Company Size</p>
                  <p className="font-semibold">11-50 employees</p>
                </div>
              </div>
            </CardSpotlight>

            <CardSpotlight className="w-full max-w-sm">
              <div className="flex items-center gap-4 p-6">
                <GraduationCap className="h-8 w-8 text-purple-500" />
                <div>
                  <p className="text-sm text-gray-400">Alumni</p>
                  <p className="font-semibold">1 school alum works here</p>
                </div>
              </div>
            </CardSpotlight>
          </div>
        </div>
      </section>

      {/* Mission Sections */}
      <About />
      <About2 />

      {/* Advantages Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Advantages</h2>
          <HoverEffect items={advantagesItems} />
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Hands-On Learning Through Live Projects</h2>
          <div className="mx-auto max-w-4xl space-y-8">
            <CardSpotlight className="p-8">
              <p className="mb-6 leading-relaxed">
                CodeVertex distinguishes itself by offering a unique internship program that goes beyond traditional
                classroom education. Our internship program is designed to provide students with the opportunity to work on
                real projects under the guidance of experienced mentors.
              </p>
              <p className="leading-relaxed">
                Our live projects cover a wide range of technologies and industries, ensuring that interns gain diverse
                experiences and skills. Whether it&apos;s software development, data science, or cybersecurity, we expose
                our interns to the breadth of the tech landscape, preparing them for the multifaceted demands of the
                industry.
              </p>
            </CardSpotlight>
          </div>
        </div>
      </section>

      {/* Mentorship */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            <span className="text-purple-500">Our Mentors</span>
          </h2>
          <div className="mx-auto max-w-4xl">
            <CardSpotlight className="p-8">
              <p className="leading-relaxed">
                Our mentors bring a wealth of experience and knowledge, guiding interns through the intricacies of
                real-world projects. Their mentorship goes beyond technical skills, encompassing professional development
                and career guidance.
              </p>
            </CardSpotlight>
          </div>
        </div>
      </section>
    </div>
  )
}
