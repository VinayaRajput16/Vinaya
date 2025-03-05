/* eslint-disable no-unused-vars */
import React from 'react';

const About = () => {
  return (
    <section className="bg-[#0a192f] py-16 text-white" id='about'>
      <div className="container mx-auto px-4">
        <div className="text-center sm:text-left mb-16">
          <h2 className="text-3xl font-bold mb-4 md:text-center">About Me</h2>
          <p className="text-lg leading-relaxed">
            Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-2xl font-bold mb-4">Get to know me!</h3>
            <p className="text-lg leading-relaxed text-justify">
              I am a MERN Stack Developer, specializing in both front-end and back-end development to build robust web applications using MongoDB, Express.js, React, and Node.js. Check out some of my work in the Projects section.
            </p>
            <p className="text-lg leading-relaxed text-justify">
              Feel free to Connect or Follow me on my <a href="#" className="text-blue-500 hover:underline">LinkedIn</a> and <a href="#" className="text-blue-500 hover:underline">Instagram</a> where I post useful content related to Web Development and Programming.
            </p>
            <p className="text-lg leading-relaxed text-justify">
              I am open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, then please <a href="#" className="text-blue-500 hover:underline">contact me</a>.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-4">My Skills</h3>
            <div className="flex flex-wrap md:-mx-4r  items-center md:items-start">
              <div className="px-1 mb-4">
                <span className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
              </div>
              <div className="px-1 mb-4">
                <span className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
              </div>
              <div className="px-1 mb-4">
                <span className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
              </div>
              <div className="px-1 mb-4">
                <span className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
              </div>
              <div className="px-1 mb-4">
                <span className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Redux</span>
              </div>
              <div className="px-1 mb-4">
                <span className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Node.js</span>
              </div>
              <div className="px-1 mb-4">
                <span className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MongoDB</span>
              </div>
              <div className="px-1 mb-4">
                <span className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Express</span>
              </div>
              <div className="px-1 mb-4">
                <span className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Git</span>
              </div>
              <div className="px-1 mb-4">
                <span className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">GitHub</span>
              </div>
              <div className="px-1 mb-4">
                <span className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Responsive Design</span>
              </div>
              <div className="px-1 mb-4">
                <span className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;