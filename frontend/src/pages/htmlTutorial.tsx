"use client"

import React from 'react'
import { CardSpotlight } from '../components/ui/card-spotlight'
import { CanvasRevealEffect } from '../components/ui/canvas-reveal-effect'
import { Button } from "../components/Button"
import { Clipboard } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="relative">
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        customStyle={{
          padding: '1rem',
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
      <Button
        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600"
        onClick={() => copyToClipboard(code)}
      >
        <Clipboard className="w-4 h-4" />
      </Button>
    </div>
  )
}

const HTMLFundamentals: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#010103] text-white">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <CanvasRevealEffect
            colors={[[255, 165, 0], [255, 69, 0]]}
            containerClassName="opacity-30"
          />
        </div>
        <div className="container relative mx-auto px-4">
          <h1 className="mb-6 text-center text-5xl font-bold">HTML Fundamentals</h1>
          <p className="text-gradient mx-auto max-w-2xl text-center text-lg">
            Master the building blocks of web development with HTML.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Basic HTML Structure</h2>
            <p className="mb-4">Every HTML page starts with a basic structure:</p>
            <CodeBlock
              code={`<!DOCTYPE html>
<html>
<head>
  <title>My First HTML Page</title>
</head>
<body>
  <h1>Welcome to HTML</h1>
  <p>This is a paragraph.</p>
</body>
</html>`}
              language="html"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Lists</h2>
            <p className="mb-4">HTML supports ordered and unordered lists:</p>
            <CodeBlock
              code={`<!-- Unordered List -->
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>`}
              language="html"
            />
          </CardSpotlight>
        </div>
      </section>
    </div>
  )
}

export default HTMLFundamentals
