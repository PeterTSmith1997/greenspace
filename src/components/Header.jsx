import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-col items-center text-center p-6 bg-primary-light shadow-md">
      {/* Profile Image */}
      <img
        src="PeterFinalEdits003.jpg" // Replace with your actual profile image path
        alt="Profile of Peter Smith"
        className="rounded-full overflow-hidden object-cover h-28 w-28 position-center border-4
        border-primary shadow-lg object-top"
      />

      {/* Name and Title */}
      <h1 className="text-3xl font-bold text-primary-dark mt-4">Peter Smith</h1>
      <h2 className="text-lg text-gray-700">Ph.D. Student</h2>
      <p className="text-sm text-gray-500">Northumbria University</p>

      {/* Email */}
      <a
        href="mailto:peter.t.smith@northumbria.ac.uk"
        className="text-primary hover:underline mt-2"
      >
        peter.t.smith@northumbria.ac.uk
      </a>

      {/* Hamburger Menu for Mobile */}
      <button
        className="lg:hidden mt-4 p-2 text-primary-dark"
        onClick={toggleMenu}
        aria-label="Toggle Navigation"
      >
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} fa-lg`} />
      </button>

      {/* Navigation Links */}
      <nav className={`mt-6 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
          <li>
            <Link
              to="/"
              className="text-primary-dark hover:text-primary transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/research"
              className="text-primary-dark hover:text-primary transition duration-200"
            >
              Research
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className="text-primary-dark hover:text-primary transition duration-200"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              to="/publications"
              className="text-primary-dark hover:text-primary transition duration-200"
            >
              Publications
            </Link>
          </li>
          <li>
            <Link
              to="/business"
              className="text-primary-dark hover:text-primary transition duration-200"
            >
              Business
            </Link>
          </li>
        </ul>
      </nav>

      {/* Social Media Icons */}
      <div className="flex space-x-4 mt-4">
        <a
          href="https://scholar.google.com/citations?user=dj7MTYsAAAAJ&hl=en"
          className="text-primary hover:text-primary-dark transition duration-200"
          aria-label="Google Scholar Profile"
        >
          <i className="fab fa-google fa-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/peter-smith"
          className="text-primary hover:text-primary-dark transition duration-200"
          aria-label="LinkedIn Profile"
        >
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
        <a
          href="https://x.com/peterSmithPHD"
          className="text-primary hover:text-primary-dark transition duration-200"
          aria-label="Twitter Profile"
        >
          <i className="fab fa-twitter fa-lg"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
