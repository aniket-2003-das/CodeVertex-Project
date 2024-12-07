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

const JavaScriptTutorial: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#010103] text-white">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <CanvasRevealEffect
            colors={[[0, 123, 255], [38, 198, 218]]}
            containerClassName="opacity-30"
          />
        </div>
        <div className="container relative mx-auto px-4">
          <h1 className="mb-6 text-center text-5xl font-bold">Complete Guide to JavaScript</h1>
          <p className="text-gradient mx-auto max-w-2xl text-center text-lg">
            Master JavaScript with this comprehensive tutorial.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Basic JavaScript Structure</h2>
            <p className="mb-4">A simple JavaScript program starts with the `script` tag:</p>
            <CodeBlock
              code={`<script>
  console.log('Hello, World!');
</script>`}
              language="html"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Variables and Data Types</h2>
            <p className="mb-4">Variables can hold different types of data, including strings, numbers, and booleans:</p>
            <CodeBlock
              code={`let name = "Alice";
const age = 25;
let isStudent = true;

console.log(name); // Alice
console.log(age);  // 25
console.log(isStudent); // true`}
              language="javascript"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Conditional Statements</h2>
            <p className="mb-4">Conditional statements allow you to execute different code depending on conditions:</p>
            <CodeBlock
              code={`let num = 10;
if (num > 0) {
  console.log('Positive number');
} else {
  console.log('Non-positive number');
}`}
              language="javascript"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Loops</h2>
            <p className="mb-4">Loops allow you to repeat code multiple times. Here's an example using a `for` loop:</p>
            <CodeBlock
              code={`for (let i = 1; i <= 5; i++) {
  console.log('Iteration ' + i);
}`}
              language="javascript"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Functions</h2>
            <p className="mb-4">Functions are reusable blocks of code. Here's an example:</p>
            <CodeBlock
              code={`function greet(name) {
  console.log('Hello, ' + name);
}

greet('Alice');
greet('Bob');`}
              language="javascript"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Arrays</h2>
            <p className="mb-4">Arrays store multiple values in a single variable. Here's an example:</p>
            <CodeBlock
              code={`let fruits = ['Apple', 'Banana', 'Cherry'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}`}
              language="javascript"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Objects</h2>
            <p className="mb-4">Objects allow you to store data as key-value pairs:</p>
            <CodeBlock
              code={`let person = {
  name: 'Alice',
  age: 25,
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};

console.log(person.name);  // Alice
person.greet();            // Hello, Alice`}
              language="javascript"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. DOM Manipulation</h2>
            <p className="mb-4">JavaScript can manipulate the DOM (Document Object Model) to change HTML content:</p>
            <CodeBlock
              code={`document.getElementById('myButton').addEventListener('click', function() {
  alert('Button clicked!');
});`}
              language="javascript"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Event Handling</h2>
            <p className="mb-4">You can attach event listeners to HTML elements to respond to user actions:</p>
            <CodeBlock
              code={`document.querySelector('button').addEventListener('click', function() {
  console.log('Button clicked!');
});`}
              language="javascript"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Promises</h2>
            <p className="mb-4">Promises allow you to handle asynchronous operations in JavaScript:</p>
            <CodeBlock
              code={`let myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve('Operation was successful!');
  } else {
    reject('Operation failed.');
  }
});

myPromise.then(result => {
  console.log(result);
}).catch(error => {
  console.log(error);
});`}
              language="javascript"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Async/Await</h2>
            <p className="mb-4">Async/Await is a more readable way of working with Promises:</p>
            <CodeBlock
              code={`async function fetchData() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let data = await response.json();
  console.log(data);
}

fetchData();`}
              language="javascript"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. ES6 Features</h2>
            <p className="mb-4">ES6 introduced many features, including arrow functions, template literals, and destructuring:</p>
            <CodeBlock
              code={`// Arrow function
const add = (a, b) => a + b;

// Template literals
let name = 'Alice';
console.log(\`Hello, \${name}!\`);

// Destructuring
let person = { name: 'Alice', age: 25 };
let { name, age } = person;
console.log(name); // Alice`}
              language="javascript"
            />
          </CardSpotlight>
        </div>
      </section>
    </div>
  )
}

export default JavaScriptTutorial
