"use client"

import React from 'react'
import { CanvasRevealEffect } from '../components/ui/canvas-reveal-effect'
import { CardSpotlight } from '../components/ui/card-spotlight'
import { HoverEffect } from '../components/ui/card-hover-effect'
import { Button } from "../components/Button"
import { useLocation, Link } from "react-router-dom";

const roadmaps = [
  {
    id: 'app-dev',
    title: 'App Development',
    description: 'Master mobile app development for iOS and Android platforms.',
    steps: [
      'Learn a programming language (e.g., Java, Kotlin, Swift, JavaScript)',
      'Understand mobile platform basics (iOS, Android)',
      'Learn UI/UX design principles',
      'Master app development frameworks (e.g., React Native, Flutter)',
      'Backend integration and API consumption',
      'App testing and debugging',
      'App store deployment and maintenance'
    ]
  },
  {
    id: 'full-stack',
    title: 'Full Stack Web Development',
    description: 'Become proficient in both frontend and backend web technologies.',
    steps: [
      'HTML, CSS, and JavaScript fundamentals',
      'Frontend frameworks (e.g., React, Vue, Angular)',
      'Backend languages (e.g., Node.js, Python, Ruby)',
      'Database management (SQL and NoSQL)',
      'RESTful API design and implementation',
      'Version control (Git)',
      'DevOps basics and deployment'
    ]
  },
  {
    id: 'big-data',
    title: 'Big Data',
    description: 'Learn to process and analyze large-scale data sets.',
    steps: [
      'Learn a programming language (e.g., Python, Scala)',
      'Understand distributed computing concepts',
      'Master big data tools (e.g., Hadoop, Spark)',
      'Data warehousing and ETL processes',
      'Data visualization techniques',
      'Machine learning for big data',
      'Big data security and governance'
    ]
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    description: 'Dive into the world of decentralized technologies and cryptocurrencies.',
    steps: [
      'Understand blockchain fundamentals',
      'Learn cryptography basics',
      'Master a blockchain platform (e.g., Ethereum, Hyperledger)',
      'Smart contract development',
      'Decentralized application (DApp) creation',
      'Blockchain security best practices',
      'Integration with existing systems'
    ]
  },
  {
    id: 'data-science-ml',
    title: 'Data Science & Machine Learning',
    description: 'Explore the intersection of statistics, programming, and artificial intelligence.',
    steps: [
      'Statistics and probability',
      'Programming in Python or R',
      'Data cleaning and preprocessing',
      'Exploratory data analysis',
      'Machine learning algorithms',
      'Deep learning and neural networks',
      'Model deployment and MLOps'
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud and DevOps',
    description: 'Learn to build, deploy, and manage applications in the cloud.',
    steps: [
      'Cloud computing fundamentals',
      'Learn a major cloud platform (AWS, Azure, or GCP)',
      'Infrastructure as Code (IaC)',
      'Containerization and orchestration (Docker, Kubernetes)',
      'CI/CD pipeline implementation',
      'Monitoring and logging',
      'Cloud security and compliance'
    ]
  }
]

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-[#010103] text-white">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <CanvasRevealEffect
            colors={[[140, 69, 255], [74, 32, 138]]}
            containerClassName="opacity-30"
          />
        </div>
        <div className="container relative mx-auto px-4">
          <h1 className="mb-6 text-center text-5xl font-bold">Tech Career Roadmaps</h1>
          <p className="text-gradient mx-auto max-w-2xl text-center text-lg">
            Explore comprehensive roadmaps for various tech career paths to guide your learning journey.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <HoverEffect
            items={roadmaps.map(roadmap => ({
              title: roadmap.title,
              description: roadmap.description,
              link: `#${roadmap.id}`
            }))}
            className="mb-12"
          />

          {roadmaps.map((roadmap) => (
            <CardSpotlight key={roadmap.id} className="mb-12">
              <h2 className="text-2xl font-bold mb-4" id={roadmap.id}>{roadmap.title} Roadmap</h2>
              <p className="mb-4 text-gray-400">{roadmap.description}</p>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-700">Step</th>
                      <th className="py-2 px-4 border-b border-gray-700">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roadmap.steps.map((step, index) => (
                      <tr key={index} className="hover:bg-gray-800">
                        <td className="py-2 px-4 border-b border-gray-700">{index + 1}</td>
                        <td className="py-2 px-4 border-b border-gray-700">{step}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6">
                <Link to="/tutorials">
                  <Button>
                    Explore Related Tutorials
                  </Button>
                </Link>
              </div>
            </CardSpotlight>
            
          ))}
        </div>
      </section> 
    </div>
  )
}

