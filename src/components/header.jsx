import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href='/'><span className="text-2xl font-bold text-blue-500">Testimonial.to</span></a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 relative">
            {/* Customers dropdown (click-based) */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="px-3 py-2 text-gray-300 hover:text-white flex items-center gap-1"
              >
                Customers ▾
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-10">
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Enterprise</a>
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Startups</a>
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Agencies</a>
                </div>
              )}
            </div>

            {/* Other links */}
            <a href="/integration" className="px-3 py-2 text-gray-300 hover:text-white">Integration</a>
            <a href="/features" className="px-3 py-2 text-gray-300 hover:text-white">Features</a>
            <a href="/pricing" className="px-3 py-2 text-gray-300 hover:text-white">Pricing</a>
            <a href="#" className="px-3 py-2 text-gray-300 hover:text-white">Wall of Love</a>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
              Get Started
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-700">
              {/* Customers dropdown in mobile */}
              <button
                onClick={toggleDropdown}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white"
              >
                Customers ▾
              </button>
              {isDropdownOpen && (
                <div className="pl-4 space-y-1">
                  <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Enterprise</a>
                  <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Startups</a>
                  <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Agencies</a>
                </div>
              )}
              <a href="integration" className="block px-3 py-2 text-gray-300 hover:text-white">Integration</a>
              <a href="/features" className="block px-3 py-2 text-gray-300 hover:text-white">Features</a>
              <a href="/pricing" className="block px-3 py-2 text-gray-300 hover:text-white">Pricing</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Wall of Love</a>
              <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
