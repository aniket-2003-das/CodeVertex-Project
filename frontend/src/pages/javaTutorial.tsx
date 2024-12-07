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

const JavaTutorial: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#010103] text-white">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <CanvasRevealEffect
            colors={[[74, 32, 138], [140, 69, 255]]}
            containerClassName="opacity-30"
          />
        </div>
        <div className="container relative mx-auto px-4">
          <h1 className="mb-6 text-center text-5xl font-bold">A Guide to Java Programming</h1>
          <p className="text-gradient mx-auto max-w-2xl text-center text-lg">
            Explore the basics of Java programming with hands-on examples.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Basic Java Structure</h2>
            <p className="mb-4">A basic Java program structure includes a class with the `main` method:</p>
            <CodeBlock
              code={`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
              language="java"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Variables and Data Types</h2>
            <p className="mb-4">In Java, variables are used to store data. Here's an example:</p>
            <CodeBlock
              code={`public class Main {
    public static void main(String[] args) {
        int age = 25;
        double price = 19.99;
        String name = "John Doe";
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Price: $" + price);
    }
}`}
              language="java"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Conditional Statements</h2>
            <p className="mb-4">Conditional statements allow you to execute different code based on certain conditions:</p>
            <CodeBlock
              code={`public class Main {
    public static void main(String[] args) {
        int num = 10;
        if (num > 0) {
            System.out.println("Positive number");
        } else {
            System.out.println("Non-positive number");
        }
    }
}`}
              language="java"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Loops</h2>
            <p className="mb-4">Loops allow you to execute a block of code multiple times. Here's an example using a `for` loop:</p>
            <CodeBlock
              code={`public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Iteration " + i);
        }
    }
}`}
              language="java"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Functions</h2>
            <p className="mb-4">Functions are reusable blocks of code. Here's an example:</p>
            <CodeBlock
              code={`public class Main {
    public static void greet(String name) {
        System.out.println("Hello, " + name);
    }

    public static void main(String[] args) {
        greet("Alice");
        greet("Bob");
    }
}`}
              language="java"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Arrays</h2>
            <p className="mb-4">Arrays store multiple values in a single variable. Here's an example of an array:</p>
            <CodeBlock
              code={`public class Main {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }
    }
}`}
              language="java"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Object-Oriented Programming (OOP)</h2>
            <p className="mb-4">Java is an object-oriented language. Here's an example of defining a class and creating an object:</p>
            <CodeBlock
              code={`public class Car {
    String model;
    int year;

    public Car(String model, int year) {
        this.model = model;
        this.year = year;
    }

    public void displayInfo() {
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
    }

    public static void main(String[] args) {
        Car myCar = new Car("Toyota", 2020);
        myCar.displayInfo();
    }
}`}
              language="java"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Exception Handling</h2>
            <p className="mb-4">In Java, exceptions are events that disrupt the normal flow of the program. You can handle them using `try-catch` blocks:</p>
            <CodeBlock
              code={`public class Main {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`}
              language="java"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Java Collections</h2>
            <p className="mb-4">Java provides several collection classes for storing groups of objects. Here's an example using an `ArrayList`:</p>
            <CodeBlock
              code={`import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");

        for (String fruit : fruits) {
            System.out.println(fruit);
        }
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

export default JavaTutorial
