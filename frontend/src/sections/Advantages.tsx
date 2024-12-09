import { HoverEffect } from "../components/ui/card-hover-effect";
import React from "react";

export function Advantages() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="w-12/12 max-w-5xl px-8">
      <h1 className="font-semibold text-6xl text-white/80 text-center mt-10">
        What Makes CodeVertex Unique?
      </h1>
        <div className="mt-8">
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "Hands-On Learning Through Live Projects",
    description:
      "Work on live projects that simulate real-world challenges across industries. Apply classroom concepts to practical scenarios, bridging the gap between theory and application. Explore a diverse range of technologies, such as software development, data science, cybersecurity, and more.",
    link: "https://yourwebsite.com/internships",
  },
  {
    title: "Industry-Relevant Exposure accross domains",
    description:
      "We cover a broad spectrum of industries, exposing students to multiple disciplines. Whether it’s crafting scalable software, analyzing complex datasets, or safeguarding systems from cyber threats, our interns have experience of multifaceted roles in their .",
    link: "https://yourwebsite.com/courses",
  },
  {
    title: "Comprehensive support and Mentorship",
    description:
      "Personalized advice for career development, resume building, interview preparation, & networking and insights into workplace dynamics. Our mentors go beyond just technical instruction—they inspire, motivate, and empower interns to envision and achieve their career aspirations.",
    link: "https://yourwebsite.com/courses",
  }
];
