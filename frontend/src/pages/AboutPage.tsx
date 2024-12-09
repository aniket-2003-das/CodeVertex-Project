"use client"

import React from 'react'
import { Building2, GraduationCap, Users } from 'lucide-react'
import { CardSpotlight } from '../components/ui/card-spotlight'
import { CanvasRevealEffect } from '../components/ui/canvas-reveal-effect'
import About from '../sections/About'
import About2 from '../sections/About2'
import { CallToAction } from "../sections/CallToAction";
import UnlockCode from "../sections/UnlockCode";
import { Testimonials } from "../sections/Testimonials";
import { HoverEffect } from '../components/ui/card-hover-effect'

const advantagesItems = [
  {
    title: "Indrustrial Training",
    description: "Apply for internships in various fields and gain hands-on experience.",
    link: "#internships"
  },
  {
    title: "Internship opportunities",
    description: "Learn & Develop! with our certification courses.",
    link: "#courses"
  },
  {
    title: "Pre Placement offers",
    description: "Get personalized guidance to kickstart your career.",
    link: "#career"
  },
  {
    title: "Certifications",
    description: "Connect with peers and professionals in our community.",
    link: "#community"
  },
  {
    title: "Project Assistance",
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
      <section className="relative overflow-hidden py-28 lg:py-32 bg-gradient-to-b from-[#010103] via-[#1a1a2e] to-[#010103]">
        <div className="container relative mx-auto px-4">
          <h1 className="mb-8 text-center text-5xl font-bold text-white">About CodeVertex</h1>
          <p className="mx-auto max-w-2xl text-center text-lg text-gray-300 leading-relaxed">
          At CodeVertex, we provide students internship opportunities, helping them level up and bridge the often-overlooked gap between academics and industry practice. <br></br> We recognize that technical knowledge alone isn’t enough real-world exposure is what transforms aspiring students into competent professionals. <br></br>In the dynamic tech landscape, where innovation is constant and demands are ever-changing, we aim to redefine how students learn and grow.
          
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


      {/* Advantages Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Offerings</h2>
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

      <CallToAction />
      {<Testimonials/> }

    </div>
  )
}
