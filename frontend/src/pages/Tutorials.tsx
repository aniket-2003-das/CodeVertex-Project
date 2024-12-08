"use client"

import React from 'react'
import { CanvasRevealEffect } from '../components/ui/canvas-reveal-effect'
import { Button } from "../components/Button"
import { Calendar, Clock, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useLocation, Link } from "react-router-dom";

const tutorials = [
  {
    id: 'oops-java',
    route : 'oopsJava',
    title: 'OOPS Concepts in JAVA',
    description: 'Master Object-Oriented Programming concepts with practical examples.',
    image: '/placeholder.svg?height=200&width=400',
    author: 'CodeVertex Team',
    date: 'Jan 1, 2024',
    duration: '2 hours',
  },
  {
    id: 'python',
    route: 'pythontutorial',
    title: 'Unlocking the Power of Python',
    description: 'A Comprehensive Guide to python fundamentals and advanced concepts.',
    image: '/placeholder.svg?height=200&width=400',
    author: 'CodeVertex Team',
    date: 'Jan 5, 2024',
    duration: '3 hours',
  },
  {
    id: 'html',
    route:'html',
    title: 'HTML Fundamentals',
    description: 'Learn HTML from basics to advanced concepts with real-world examples.',
    image: '/placeholder.svg?height=200&width=400',
    author: 'CodeVertex Team',
    date: 'Jan 10, 2024',
    duration: '1.5 hours',
  },
  {
    id: 'dsa',
    route :'dsa',
    title: 'Learn DSA in C++ Series',
    description: 'Master Data Structures and Algorithms with C++ implementation.',
    image: '/placeholder.svg?height=200&width=400',
    author: 'CodeVertex Team',
    date: 'Jan 15, 2024',
    duration: '4 hours',
  },
  {
    id: 'java',
    route:'java',
    title: 'A Guide to Java Programming',
    description: 'Comprehensive Java programming from basics to advanced topics.',
    image: '/placeholder.svg?height=200&width=400',
    author: 'CodeVertex Team',
    date: 'Jan 20, 2024',
    duration: '3.5 hours',
  },
  {
    id: 'javascript',
    route: 'javascript',
    title: 'JavaScript Mastery',
    description: 'Master modern JavaScript with practical projects and exercises.',
    image: '/placeholder.svg?height=200&width=400',
    author: 'CodeVertex Team',
    date: 'Jan 25, 2024',
    duration: '2.5 hours',
  }
]

export default function TutorialsPage() {

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
          <h1 className="mb-6 text-center text-5xl font-bold">Tutorials</h1>
          <p className="text-gradient mx-auto max-w-2xl text-center text-lg">
            Learn from our comprehensive collection of tutorials covering various programming languages and technologies.
          </p>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="p-6">
                  <h3 className="text-xl font-bold">{tutorial.title}</h3>
                  <p className="text-gray-400 mt-2">{tutorial.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{tutorial.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{tutorial.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        {/* <Link to="/Roadmap"> */}
                        <Link to={`/${tutorial.route}`}>
                          <Button>Start Tutorial</Button>
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


