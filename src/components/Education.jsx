/* eslint-disable no-unused-vars */
import React from 'react';
import { FaLaptop } from "react-icons/fa";

const Education = () => {
  const experiences = [
    {
      icon: <FaLaptop/>, // Replace with your actual icon component
      title: 'Bachelors of Computer science',
      dates: '2023 Jul - 2026 Apr',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    // Add more experience objects as needed
  ];

  return (
    <section className="bg-[#0a192f] py-16 border shadow-2xl p-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">My Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-blue text-white rounded-lg p-6 shadow-2xl">
              <div className="flex items-center mb-4">
                {/* Replace with your actual icon component */}
                <span className="text-3xl text-green-400 mr-4">{experience.icon}</span>
                <div>
                  <h3 className="md:text-xl text-md font-bold">{experience.title}</h3>
                  <p className="text-[#919190] text-600">{experience.dates}</p>
                </div>
              </div>
              <p className="text-[#919190] text-700">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;