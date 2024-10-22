'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import mkImage from '../app/assets/mk.webp';

const Home = () => {
  return (
    <div>
      <section className="home-container">
        <div className="home-content">
          {/* Left Side: Content */}
          <div className="content-section">
            <h1 className="greeting">
              Hi I'm <br />
              <span className="highlighted">MOHSIN KHAN</span>
            </h1>
            <p className="description">
              I'm Mohsin Khan, a frontend developer passionate about crafting intuitive web applications.
              Skilled in HTML, CSS, JavaScript, and frameworks like React and Next.js, I love turning ideas into reality.
            </p>
            <div className="button-container">
              <Link href="/contact">
                <button className="contact-button">
                  Contact
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="image-section">
            <Image
              src={mkImage} 
              alt="hero"
              width={400}
              height={400}
              className="profile-image"
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-container {
          background-color: #1C1C1E;
          padding-top: 5rem; /* Adjusted top padding for better spacing */
          min-height: 100vh;
          display: flex;
          justify-content: center; /* Centering content vertically */
          align-items: center; /* Centering content horizontally */
        }

        .home-content {
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          width: 100%; /* Allow full width on smaller screens */
          padding: 1.5rem;
          color: #1C1C1E;
        }

        .content-section {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          margin-bottom: 4rem;
          flex-grow: 1;
          max-width: 600px;
          margin-left: 1.5rem;
        }

        .greeting {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 500;
          color: #39FF14;
        }

        .highlighted {
          color: #9B51E0;
        }

        .description {
          margin-bottom: 2rem;
          line-height: 1.6;
          color: #fff;
          font-size: 1.125rem;
        }

        .button-container {
          display: flex;
          justify-content: flex-start;
        }

        .contact-button {
          background-color: #39FF14;
          color: #fff;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-size: 1.125rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .contact-button:hover {
          background-color: #9B51E0;
        }

        .image-section {
          max-width: 400px;
          width: 100%;
          display: flex;
          justify-content: center; /* Center the image section */
        }

        .profile-image {
          border-radius: 50%; /* Keeps the image rounded */
          object-fit: cover;
          max-width: 100%;
          height: auto;
        }

        @media (max-width: 768px) {
          .home-content {
            flex-direction: column; /* Stack content on top of each other */
            align-items: center; /* Center all content */
            text-align: center; /* Center text */
          }

          .content-section {
            margin-left: 0; /* Remove left margin for mobile */
            margin-bottom: 2rem; /* Space between text and image */
          }

          .button-container {
            justify-content: center; /* Center the button */
          }

          .image-section {
            margin-bottom: 2rem; /* Space below the image */
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
