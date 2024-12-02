
"use client";

import React from "react";
import { CardSpotlight } from "../components/ui/card-spotlight";
import { CanvasRevealEffect } from "../components/ui/canvas-reveal-effect";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#010103] text-white">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <CanvasRevealEffect
            colors={[
              [140, 69, 255],
              [74, 32, 138],
            ]}
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
            <p>Let's start with the classic "Hello, World!" program in Python:</p>
            <p className="mt-2 bg-gray-800 p-4 rounded text-sm">
              <code>print("Hello, World!")</code>
            </p>
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Variables and Data Types</h2>
            <p>Python has several basic data types, such as integers, floats, strings, and booleans:</p>
            <p className="mt-2 bg-gray-800 p-4 rounded text-sm">
              <code>
                {`age = 25
height = 1.75
name = "Alice"
is_student = True

print(f"Name: {name}, Age: {age}, Height: {height}m, Student: {is_student}")`}
              </code>
            </p>
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Control Flow</h2>
            <p>Here's a simple if-else statement:</p>
            <p className="mt-2 bg-gray-800 p-4 rounded text-sm">
              <code>
                {`if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")`}
              </code>
            </p>
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Functions</h2>
            <p>Here's how to define and use a function in Python:</p>
            <p className="mt-2 bg-gray-800 p-4 rounded text-sm">
              <code>
                {`def greet(name):
    return f"Hello, {name}!"

message = greet("Alice")
print(message)`}
              </code>
            </p>
          </CardSpotlight>

          <CardSpotlight>
            <h2 className="text-2xl font-bold mb-4">Installing Python</h2>
            <p>To install Python on your system, follow these steps:</p>
            <ul className="list-disc list-inside">
              <li>Ubuntu/Debian: <code>sudo apt-get install python3</code></li>
              <li>macOS: Use Homebrew with <code>brew install python</code></li>
              <li>Windows: Download the installer from the Python website.</li>
            </ul>
          </CardSpotlight>
        </div>
      </section>
    </div>
  )
}

export default Contact
