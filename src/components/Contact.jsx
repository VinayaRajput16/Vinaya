/* eslint-disable no-unused-vars */
import React from "react";

export default function ContactSection() {
  return (
    <div className="p-6 bg-[#0a192f] border border-black-700 ">
      <h2 className="text-2xl font-bold mb-4 text-white">Contact Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* Contact Info */}
        <div className="bg-gray-700 p-8 rounded-lg shadow-2xl text-white ">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-white-700 mb-4">
            Feel free to reach out to me through any of the methods below:
          </p>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:youremail@example.com"
                className="text-white-900 hover:underline"
              >
                raputvinaya16903@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold">Phone:</span> +91 88569 79693
            </li>
            <li>
              <span className="font-semibold">Location:</span> Aurangabad, India
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-blue text-white bg-100 p-6  border border-2xl rounded-lg shadow-2xl shadow-color-gray-500">
          <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-900 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
