import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; // Import Link from react-router-dom
import LogoIcon from "../assets/IMG_20240828_143915 (1).png";
import { Button } from "../../src/components/Button";
import { NavbarLinks } from "../../src/components/NavbarLinks";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveLink = (path: string) => {
    return location.pathname === path ? "text-[rgb(140,69,255,.5)] font-semibold " : "text-white/70";
  };

  return (
    <header className="py-4 fixed left-0 right-0 top-0 transition-all duration-400 z-10 ">
      <div
        className={`flex justify-between items-center border border-white/15 rounded-xl mx-auto bg-gradient-to-r from-[#11121575] to-[#0c0d0f90] backdrop-blur-md via-[#11121575] from-[#0c0d0f90] bg-[linear-gradient(137deg,rgba(17,18,20,.75)4.87%,rgba(12,13,15,.9)75.88%)] opacity-100  inset-0 ${
          scrolled
            ? "lg:max-w-3xl md:max-w-xl max-w-52 p-1"
            : "lg:max-w-6xl md:max-w-2xl p-2.5 max-w-64"
        } transition-all duration-700`}
      >
        {/* Logo and Navigation */}
        <div
          className={`border border-white/25 rounded-lg transition ${
            scrolled ? "p-0" : "p-1"
          }`}
        >
          <div className="flex items-center">
            <Link to="/" className="flex items-center"> {/* Link to home */}
              <div
                className={`rounded-lg flex justify-center items-center ${
                  scrolled ? "mr-0 h-8 w-8" : "h-10 w-10 mr-2"
                } transition-all ease-linear duration-700`}
              >
                <img
                  src={LogoIcon}
                  alt="logo"
                  className={`${scrolled ? "h-8 w-8" : "h-10 w-10"}`}
                />
              </div>
              {!scrolled && (
                <h1 className="text-white font-semibold text-xl mr-1 transition-all ease-linear duration-600">
                  Codevertex
                </h1>
              )}
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <nav className="flex gap-8 text-sm">
            {NavbarLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <div
                  className={`hover:text-white transition ${
                    scrolled ? "" : "text-lg"
                  } ${isActiveLink(link.path)}`}
                >
                  {link.title}
                </div>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex gap-4 items-center">
          <div className="md:block hidden">
            <Button>Sign Up</Button>
          </div>
        </div>

        {/* Mobile menu icon */}
        <button className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ y: "30%" }}
            animate={{ y: "1%" }}
            transition={{ duration: 0.8 }}
            className="fixed top-16 w-full h-auto mt-4 py-4 opacity-85 rounded-lg z-40 flex flex-col items-center justify-center backdrop-blur-md bg-[radial-gradient(rgb(0,0,0)_65%,rgb(0,0,0)_75%,transparent)]"
          >
            <ul className="flex flex-col gap-6 text-center w-full p-4">
              {NavbarLinks.map((link, index) => (
                <li
                  key={index}
                  className="transition duration-300 rounded-lg py-2 px-4 hover:bg-[rgb(74,32,138,.5)]"
                >
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-xl hover:text-white transition duration-300 ${
                      isActiveLink(link.path)
                    }`}
                    onClick={toggleMenu}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
