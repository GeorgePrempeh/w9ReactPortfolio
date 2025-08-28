import React from 'react';
import './Footer.css';

function Footer() {
        <a href="https://step8up.com" target="_blank" rel="noopener noreferrer" aria-label="Step8up Academy">
          <img src="/step8up-academy-logo_1.png" alt="Step8up Academy Logo" className="footer-icon" />
        </a>
  return (
    <footer className="footer">
      <div>
        &copy; {new Date().getFullYear()} GeRosMedia Projects, CornBrook Studios
      </div>
      <div className="footer-social">
  {/* Step8uP.png icon removed as requested */}
        {/* Step8up Academy logo icon */}
        <a href="https://step8up.com" target="_blank" rel="noopener noreferrer" aria-label="Step8up Academy">
          <img src="/step8up-academy-logo_1.png" alt="Step8up Academy Logo - Step8uP Academy" className="footer-icon" />
        </a>
        {/* Facebook icon */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook Logo" className="footer-icon" />
        </a>
        {/* Instagram icon */}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="/Instagram_logo_2016.svg" alt="Instagram Logo" className="footer-icon" />
        </a>
        {/* TikTok icon */}
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <img src="/tiktok-logo-logo-svgrepo-com.svg" alt="TikTok Logo" className="footer-icon" />
        </a>
        {/* YouTube icon */}
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <img src="/3610206.png" alt="YouTube Logo" className="footer-icon" />
        </a>
        {/* WhatsApp icon */}
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <img src="/OIP.webp" alt="WhatsApp Logo" className="footer-icon" />
        </a>
        {/* LinkedIn icon */}
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn Logo" className="footer-icon" />
        </a>
      </div>
      <div>
        <a href="https://github.com/GeorgePrempeh/w9ReactPortfolio" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://your-render-link" target="_blank" rel="noopener noreferrer">Live Site</a>
      </div>
    </footer>
  );
}

export default Footer;
