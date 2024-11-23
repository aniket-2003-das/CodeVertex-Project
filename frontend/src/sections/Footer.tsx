import React from "react";
import Image from "../assets/IMG_20240828_143915 (1).png";
import { Link } from "react-router-dom"; // Assuming you use React Router

// Footer Data
const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const NavbarLinks = [
  { title: "Home", path: "/" },
  { title: "Courses", path: "/courses" },
  { title: "Internship", path: "/internship" },
  { title: "About us", path: "/about" },
  { title: "Tutorials", path: "/tutorials" },
  { title: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <div className="bg-black-800">
      <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-black-400 leading-6 mx-auto relative py-14">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-black-700">
          {/* Section 1 */}
          <div className="lg:w-[100%] flex flex-wrap flex-row justify-between pl-3 lg:pr-5 gap-12">
            <div className="flex flex-col gap-3 mb-7 lg:pl-0">
              <Link to="/" className="flex items-center">
                <div className="h-10 w-10 rounded-lg ml-12 flex justify-center items-center">
                  <img src={Image} alt="logo" className="h-10 w-10" />
                </div>
                <h1 className="text-white font-semibold text-xl ml-2">Codevertex</h1>
              </Link>
            </div>

            <div className="mb-7 lg:pl-0">
              <h1 className="text-black-50 font-semibold text-[16px]">Quick Links</h1>
              <div className="flex flex-col gap-2 mt-2">
                {NavbarLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="text-[14px] cursor-pointer hover:text-black-50 transition-all duration-200"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mb-7 lg:pl-0">
              <h1 className="text-black-50 font-semibold text-[16px]">Learning Paths</h1>
              <div className="flex flex-col gap-2 mt-2">
                {["Web Development", "Data Science", "Machine Learning", "DevOps"].map((ele, index) => (
                  <Link
                    key={index}
                    to={`/${ele.toLowerCase().replace(" ", "-")}`}
                    className="text-[14px] cursor-pointer hover:text-black-50 transition-all duration-200"
                  >
                    {ele}
                  </Link>
                ))}
              </div>

              <h1 className="text-black-50 font-semibold text-[16px] mt-7">Support</h1>
              <div className="text-[14px] cursor-pointer hover:text-black-50 transition-all duration-200 mt-2">
                <Link to="/support">Help Center</Link>
              </div>
            </div>

            <div className="mb-7 lg:pl-0">
              <h1 className="text-black-50 font-semibold text-[16px]">Tutorials</h1>
              <div className="flex flex-col gap-2 mt-2">
                {["Python Basics", "JavaScript Essentials", "React in Depth", "Next.js Overview"].map((ele, index) => (
                  <Link
                    key={index}
                    to={`/${ele.toLowerCase().replace(" ", "-")}`}
                    className="text-[14px] cursor-pointer hover:text-black-50 transition-all duration-200"
                  >
                    {ele}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-black-400 mx-auto pb-14 text-sm">
        {/* Footer Bottom Section */}
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            {BottomFooter.map((ele, i) => (
              <div
                key={i}
                className={` ${
                  BottomFooter.length - 1 === i
                    ? ""
                    : "border-r border-black-700 cursor-pointer hover:text-black-50 transition-all duration-200"
                } px-3`}
              >
                {ele}
              </div>
            ))}
          </div>

          <div className="text-center">
            Made with ❤️ by CodeVertex © 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
