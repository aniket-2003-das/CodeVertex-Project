"use client"

import React from 'react'
import { CardSpotlight } from '../components/ui/card-spotlight'
import { CanvasRevealEffect } from '../components/ui/canvas-reveal-effect'
import { Button } from "../components/Button"
import { Clipboard } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
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

export default function PythonTutorial() {
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
          <h1 className="mb-6 text-center text-5xl font-bold">Python Tutorial</h1>
          <p className="text-gradient mx-auto max-w-2xl text-center text-lg">
            Learn the basics of Python programming with interactive examples.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Hello, World!</h2>
            <p className="mb-4">Let's start with the classic "Hello, World!" program in Python:</p>
            <CodeBlock
              code={`print("Hello, World!")`}
              language="python"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Variables and Data Types</h2>
            <p className="mb-4">Python has several basic data types:</p>
            <CodeBlock
              code={`# Integer
age = 25
bjef
# Float
height = 1.75

# String
name = "Alice"

# Boolean
is_student = True

print(f"Name: {name}, Age: {age}, Height: {height}m, Student: {is_student}")`}
              language="python"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Control Flow</h2>
            <p className="mb-4">Let's look at a simple if-else statement:</p>
            <CodeBlock
              code={`age = 18

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")`}
              language="python"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Functions</h2>
            <p className="mb-4">Here's how to define and use a function in Python:</p>
            <CodeBlock
              code={`def greet(name):
    return f"Hello, {name}!"

message = greet("Alice")
print(message)`}
              language="python"
            />
          </CardSpotlight>

          <CardSpotlight>
            <h2 className="text-2xl font-bold mb-4">Installing Python</h2>
            <p className="mb-4">To install Python on your system, follow these steps:</p>
            <CodeBlock
              code={`# For Ubuntu/Debian
sudo apt-get update
sudo apt-get install python3

# For macOS (using Homebrew)
brew install python

# For Windows
# Download the installer from https://www.python.org/downloads/windows/`}
              language="bash"
            />
          </CardSpotlight>
        </div>
      </section>
    </div>
  )
}

