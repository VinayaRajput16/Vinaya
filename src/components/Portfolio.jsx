/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import pr1 from "../assets/memory-game.png";
import pr2 from "../assets/project1.png";
import pr3 from "../assets/blog-frontend.png";
import pr4 from "../assets/image.png";
import pr5 from "../assets/whiteboard.png";

const projects = [
  {
    id: 1,
    title: "React Memory Game",
    description: "A fun game to test your memory skills.",
    category: "React Projects",
    link: "https://memory-card-react-h12skf2py-vinayarajput16s-projects.vercel.app/game",
    image: pr1,
    tags: ["React", "CSS", "State Management"],
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application.",
    category: "Full Stack Projects",
    link: "https://github.com/VinayaRajput16/Shoe",
    image: pr2,
    tags: ["MERN", "Redux", "MongoDB", "Stripe API"],
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: "A portfolio website built using React.",
    category: "React Projects",
    link: "https://example.com/personal-portfolio",
    image: pr4,
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 4,
    title: "Blog Website",
    description: "A MERN stack blog application with authentication and rich editor.",
    category: "Full Stack Projects",
    link: "https://github.com/VinayaRajput16/blog-website",
    image: pr3,
    tags: ["MERN", "React Quill", "JWT", "MongoDB"],
  },
  {
    id: 5,
    title: "React Whiteboard",
    description: "Whiteboard application with keycloak integration for authentication.",
    category: "Full Stack Projects",
    link: "https://github.com/VinayaRajput16/Whiteboard",
    image: pr5,
    tags: ["React", "Canvas API", "Keycloak"],
  },
];

const categories = ["All", "React Projects", "Full Stack Projects"];

export default function ProjectSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="p-6 bg-[#0a192f] text-white py-6">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>

      <div className="mb-6 flex gap-4 text-black text-xs md:text-lg">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`${
              selectedCategory === category ? "bg-green-500 text-white" : "bg-gray-200"
            } px-2 py-1 md:px-2 md:py-2 rounded-xl transition duration-300`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="shadow-lg hover:shadow-xl transition duration-300 rounded-lg overflow-hidden bg-white"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover mb-4"
            />
            <div className="p-4 bg-gray-400">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Display Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 text-white-800 text-xs px-3 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:underline"
              >
                See Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
