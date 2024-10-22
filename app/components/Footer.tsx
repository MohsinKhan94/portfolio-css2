import React from 'react';
import Link from 'next/link'; 
import { FaGithub, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import './Footer.css';  // Import the new CSS file

const Footer = () => {
  return (
    <div>
      <footer className="footer-container">
        <div className="footer-wrapper">
          <a className="footer-brand">
            <span className="footer-title">Mohsin Khan</span>
          </a>
          <p className="footer-copyright">
            © 2024 MOHSIN KHAN
          </p>
          <span className="footer-social-links">
            <Link 
              target='_blank' 
              className="footer-social-link" 
              href="https://www.facebook.com/mohsin.lkk.5" 
              passHref
            >
              <FaFacebookSquare className="social-icon" />
            </Link>
            <Link 
              target='_blank' 
              className="footer-social-link" 
              href="https://www.linkedin.com/in/mohsinkhanlkk/" 
              passHref
            >
              <FaLinkedin className="social-icon" />
            </Link>
            <Link 
              target='_blank' 
              className="footer-social-link" 
              href="https://github.com/MohsinKhan94" 
              passHref
            >
              <FaGithub className="social-icon" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
