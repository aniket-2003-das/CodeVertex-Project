import { HoverEffect } from "../components/ui/card-hover-effect";
import React from "react";

export function Advantages() {
  return (
    <>
    <div className="w-9/12 mx-auto px-8">
    <h1 className="font-semibold text-5xl text-white/80  md:ml-10 md:mt-24 mt-10">
    Advantages
</h1>
      <HoverEffect items={projects} />
    </div>
    </>
  );
}
export const projects = [
    {
        title: "Internship Opportunities",
        description:
          "Apply for internships in various fields and gain hands-on experience.",
        link: "https://yourwebsite.com/internships",
        advantages: [
          "Practical experience in your chosen field",
          "Build professional network",
          "Enhance resume",
        ],
      },
      {
        title: "IT Courses",
        description:
          "Learn in-demand IT skills with our certification courses.",
        link: "https://yourwebsite.com/courses",
        advantages: [
          "Industry-recognized certifications",
          "Flexible online learning",
          "Expert instructors",
        ],
      },
      {
        title: "Career Guidance",
        description:
          "Get personalized guidance to kickstart your career.",
        link: "https://yourwebsite.com/career-guidance",
        advantages: [
          "One-on-one mentorship",
          "Resume building support",
          "Interview preparation",
        ],
      },
      {
        title: "Community Support",
        description:
          "Connect with peers and professionals in our community.",
        link: "https://yourwebsite.com/community",
        advantages: [
          "Networking opportunities",
          "Collaborative learning",
          "Industry insights",
        ],
      },
      {
        title: "Project-Based Learning",
        description:
          "Work on real-world projects to develop problem-solving skills and build your portfolio.",
        link: "https://yourwebsite.com/projects",
        advantages: [
          "Hands-on experience with industry projects",
          "Develop problem-solving and critical thinking skills",
          "Build a professional portfolio",
        ],
      },
      {
        title: "Mentorship Programs",
        description:
          "Get paired with experienced professionals for guidance and support.",
        link: "https://yourwebsite.com/mentorship",
        advantages: [
          "Personalized guidance and feedback",
          "Industry insights and expertise",
          "Career advancement opportunities",
        ],
      },
    ];