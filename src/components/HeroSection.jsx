import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col justify-center items-start bg-[#0a192f] text-white px-6 md:px-20">
      {/* Navbar */}
      <nav className="absolute top-5 right-6 md:right-10 flex justify-between items-center w-full md:w-auto">
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-gray-300">
          <a href="#about" className="hover:text-white">
            01. About
          </a>
          <a href="#experience" className="hover:text-white">
            02. Education
          </a>
          <a href="#work" className="hover:text-white">
            03. Projects
          </a>
          <a href="#contact" className="hover:text-white">
            04. Contact
          </a>
        </div>
        <button className="hidden md:block border-2 border-green-400 px-4 py-2 mx-4 text-green-400 hover:bg-green-400 hover:text-[#0a192f] transition rounded-md">
          Resume
        </button>

      </nav>
      {/* Hamburger Menu */}
      <div
        className="md:hidden sm:block text-gray-300 text-2xl cursor-pointer absolute top-5 right-6"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-[#112240] p-6 rounded-lg shadow-md w-3/4 max-w-sm z-50 flex flex-col space-y-4">
          <a
            href="#about"
            className="text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            01. About
          </a>
          <a
            href="#experience"
            className="text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            02. Education
          </a>
          <a
            href="#work"
            className="text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            03. Projects
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            04. Contact
          </a>
          <button
            className="border-2 border-green-400 px-4 py-2 text-green-400 hover:bg-green-400 hover:text-[#0a192f] transition rounded-md"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </button>
        </div>
      )}

      {/* Introduction */}
      <p className="text-green-400 text-lg mt-16 sm:mt-24 lg:mt-16">
        Hi, my name is
      </p>
      <h1 className="text-3xl sm:text-5xl font-bold mt-2">
        Vinaya Ramesh Rajput.
      </h1>
      <h2 className="text-2xl sm:text-4xl font-bold text-gray-400 mt-2">
        I build things for the web.
      </h2>
      <p className="text-gray-300 mt-4 max-w-lg text-sm sm:text-base">
        I am a web developer specializing in creating functional and visually
        appealing digital experiences. Currently, I focus on building efficient,
        scalable web applications.
      </p>

      {/* Social Icons */}
      <div className="flex items-center gap-4 mt-8 text-gray-500">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} className="text-pink-500 hover:opacity-80 transition" />
        </a>
        <a
          href="https://wa.me/yourwhatsappnumber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={30} className="text-green-500 hover:opacity-80 transition" />
        </a>
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} className="hover:opacity-80 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} className="text-blue-700 hover:opacity-80 transition" />
        </a>
      </div>

      {/* CTA Button */}
      <button className="mt-6 px-6 py-3 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-[#0a192f] transition rounded-md">
        Check out my work!
      </button>
    </div>
  );
}
