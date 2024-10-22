'use client';
import Image from 'next/image';
import React from 'react';
import { FaCode, FaPaintBrush, FaUserTie } from 'react-icons/fa'; 
import mkImage from '../assets/mk.webp'; 
import Link from 'next/link';
import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about-wrapper"> 
        {/* Left Section: Image */}
        <div className="image-section">
          <Image
            className="about-image"
            alt="about"
            src={mkImage.src}
            width={400}
            height={400}
          />
        </div>

        {/* Right Section: About Me and Info */}
        <div className="info-section">
          <h1 className="about-heading">
            About Me
          </h1>
          <p className="about-description">
            I'm a passionate frontend developer with experience in HTML, CSS, Tailwind CSS,
            JavaScript, TypeScript, React, and Next.js. I enjoy creating clean, modern, and
            responsive websites that provide a great user experience.
          </p>

          {/* Info with Icons */}
          <div className="info-cards">
            <div className="info-item">
              <FaCode className="info-icon" />
              <div>
                <h2 className="info-title">Frontend Development</h2>
                <p className="info-description">
                  Specializing in building responsive web applications using modern frameworks.
                </p>
              </div>
            </div>

            <div className="info-item">
              <FaPaintBrush className="info-icon" />
              <div>
                <h2 className="info-title">UI/UX Design</h2>
                <p className="info-description">
                  Focused on crafting visually appealing and user-friendly interfaces.
                </p>
              </div>
            </div>

            <div className="info-item">
              <FaUserTie className="info-icon" />
              <div>
                <h2 className="info-title">Team Collaboration</h2>
                <p className="info-description">
                  Experienced in collaborating with teams to build and deploy high-quality products.
                </p>
              </div>
            </div>
          </div>

          {/* Button Example */}
          <div className="contact-button-container">
            <Link href={'/contact'}>
              <button className="contact-button">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
