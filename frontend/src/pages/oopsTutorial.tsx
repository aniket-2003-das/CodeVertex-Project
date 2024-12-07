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

export default function OOPJavaTutorial() {
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
          <h1 className="mb-6 text-center text-5xl font-bold">OOP in Java Tutorial</h1>
          <p className="text-gradient mx-auto max-w-2xl text-center text-lg">
            Learn Object-Oriented Programming concepts in Java with practical examples.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Classes and Objects</h2>
            <p className="mb-4">Java is based on classes and objects. Here’s an example:</p>
            <CodeBlock
              code={`class Car {
    String brand;
    int speed;

    void drive() {
        System.out.println(brand + " is driving at " + speed + " km/h");
    }
}

public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.brand = "Tesla";
        car.speed = 120;
        car.drive();
    }
}`}
              language="java"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Encapsulation</h2>
            <p className="mb-4">Encapsulation is about hiding data using private fields and providing access through getters and setters:</p>
            <CodeBlock
              code={`class Account {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        if (balance > 0) {
            this.balance = balance;
        } else {
            System.out.println("Invalid balance amount");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Account acc = new Account();
        acc.setBalance(1000.50);
        System.out.println("Balance: " + acc.getBalance());
    }
}`}
              language="java"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Inheritance</h2>
            <p className="mb-4">Inheritance allows one class to inherit fields and methods from another:</p>
            <CodeBlock
              code={`class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound();
    }
}`}
              language="java"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Polymorphism</h2>
            <p className="mb-4">Polymorphism allows methods to behave differently based on the object:</p>
            <CodeBlock
              code={`class Shape {
    void draw() {
        System.out.println("Drawing a shape");
    }
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing a circle");
    }
}

public class Main {
    public static void main(String[] args) {
        Shape shape = new Circle(); // Upcasting
        shape.draw(); // Outputs: Drawing a circle
    }
}`}
              language="java"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Abstraction</h2>
            <p className="mb-4">Abstraction is implemented using abstract classes or interfaces:</p>
            <CodeBlock
              code={`abstract class Vehicle {
    abstract void start();
}

class Bike extends Vehicle {
    void start() {
        System.out.println("Bike starts with a kick");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle bike = new Bike();
        bike.start();
    }
}`}
              language="java"
            />
          </CardSpotlight>

          <CardSpotlight>
            <h2 className="text-2xl font-bold mb-4">Installing Java</h2>
            <p className="mb-4">To install Java on your system, follow these steps:</p>
            <CodeBlock
              code={`# For Ubuntu/Debian
sudo apt-get update
sudo apt-get install openjdk-11-jdk

# For macOS (using Homebrew)
brew install openjdk

# For Windows
# Download the installer from https://www.oracle.com/java/technologies/javase-downloads.html`}
              language="bash"
            />
          </CardSpotlight>
        </div>
      </section>
    </div>
  )
}
