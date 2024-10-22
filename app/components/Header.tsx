'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import './Header.css';  // Import the new CSS file

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="header-container">
        <div className="header-wrapper">
          <a className="header-brand">
            <Link href='/'>
              <span className="header-title">Mohsin Khan</span>
            </Link>
          </a>
          <div className="mobile-menu-button">
            {/* Hamburger Icon */}
            <button onClick={toggleMenu} className="hamburger-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="icon-size"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <nav className={`menu-links ${isOpen ? 'open' : ''}`}>
            <Link href='/' className="menu-link">Home</Link>
            <Link href='/about' className="menu-link">About</Link>
            <Link href='/contact' className="menu-link">Contact</Link>
          </nav>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu">
            <Link href='/' className="mobile-menu-link">Home</Link>
            <Link href='/about' className="mobile-menu-link">About</Link>
            <Link href='/contact' className="mobile-menu-link">Contact</Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
