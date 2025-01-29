/* eslint-disable no-unused-vars */
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-gray-400 py-6">
      <div className="container mx-auto px-6">
        {/* Footer Flex Container */}
        <div className="flex  md:flex-row justify-between gap-6">

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media / Follow Me */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/yourgithub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/yourlinkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/yourtwitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} Vinaya Rajput. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
