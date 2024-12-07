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

export default function DSACppTutorial() {
  return (
    <div className="min-h-screen bg-[#010103] text-white">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <CanvasRevealEffect
            colors={[[0, 123, 255], [0, 82, 204]]}
            containerClassName="opacity-30"
          />
        </div>
        <div className="container relative mx-auto px-4">
          <h1 className="mb-6 text-center text-5xl font-bold">Learn DSA in C++ Series</h1>
          <p className="text-gradient mx-auto max-w-2xl text-center text-lg">
            Strengthen your data structures and algorithms skills with C++.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Arrays</h2>
            <p className="mb-4">Arrays are a fundamental data structure in C++:</p>
            <CodeBlock
              code={`#include <iostream>
using namespace std;

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}`}
              language="cpp"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Linked Lists</h2>
            <p className="mb-4">Linked lists are used for dynamic memory allocation:</p>
            <CodeBlock
              code={`#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

void printList(Node* head) {
    while (head != nullptr) {
        cout << head->data << " ";
        head = head->next;
    }
}

int main() {
    Node* head = new Node{1, nullptr};
    Node* second = new Node{2, nullptr};
    Node* third = new Node{3, nullptr};

    head->next = second;
    second->next = third;

    printList(head);

    return 0;
}`}
              language="cpp"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Recursion</h2>
            <p className="mb-4">Recursion is an essential concept in DSA:</p>
            <CodeBlock
              code={`#include <iostream>
using namespace std;

int factorial(int n) {
    if (n == 0 || n == 1)
        return 1;
    return n * factorial(n - 1);
}

int main() {
    int num = 5;
    cout << "Factorial of " << num << " is " << factorial(num) << endl;
    return 0;
}`}
              language="cpp"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Stacks</h2>
            <p className="mb-4">Stacks follow the Last In First Out (LIFO) principle:</p>
            <CodeBlock
              code={`#include <iostream>
#include <stack>
using namespace std;

int main() {
    stack<int> st;
    st.push(10);
    st.push(20);
    st.push(30);
    
    cout << "Top of stack: " << st.top() << endl;
    st.pop();
    cout << "Top after pop: " << st.top() << endl;
    
    return 0;
}`}
              language="cpp"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Queues</h2>
            <p className="mb-4">Queues follow the First In First Out (FIFO) principle:</p>
            <CodeBlock
              code={`#include <iostream>
#include <queue>
using namespace std;

int main() {
    queue<int> q;
    q.push(10);
    q.push(20);
    q.push(30);
    
    cout << "Front of queue: " << q.front() << endl;
    q.pop();
    cout << "Front after pop: " << q.front() << endl;
    
    return 0;
}`}
              language="cpp"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Binary Search</h2>
            <p className="mb-4">Binary search allows efficient searching in sorted arrays:</p>
            <CodeBlock
              code={`#include <iostream>
#include <algorithm>
using namespace std;

int binarySearch(int arr[], int left, int right, int target) {
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target)
            return mid;
        if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1;
}

int main() {
    int arr[] = {1, 3, 5, 7, 9};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 7;
    
    int result = binarySearch(arr, 0, n - 1, target);
    
    if (result != -1)
        cout << "Element found at index " << result << endl;
    else
        cout << "Element not found" << endl;
    
    return 0;
}`}
              language="cpp"
            />
          </CardSpotlight>

          <CardSpotlight className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Binary Trees</h2>
            <p className="mb-4">Binary trees are a hierarchical data structure:</p>
            <CodeBlock
              code={`#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;
};

void inOrder(Node* root) {
    if (root == nullptr)
        return;
    inOrder(root->left);
    cout << root->data << " ";
    inOrder(root->right);
}

int main() {
    Node* root = new Node{1, nullptr, nullptr};
    root->left = new Node{2, nullptr, nullptr};
    root->right = new Node{3, nullptr, nullptr};
    
    cout << "In-order traversal: ";
    inOrder(root);
    
    return 0;
}`}
              language="cpp"
            />
          </CardSpotlight>

        </div>
      </section>
    </div>
  )
}
