import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div>
        &copy; {new Date().getFullYear()} George Prempeh &mdash; Step8up Academy UK BootCamp Portfolio
      </div>
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" className="footer-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="/instagram.png" alt="Instagram" className="footer-icon" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tiktok/tiktok-original.svg" alt="TikTok" className="footer-icon" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/youtube/youtube-original.svg" alt="YouTube" className="footer-icon" />
        </a>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/whatsapp/whatsapp-original.svg" alt="WhatsApp" className="footer-icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="footer-icon" />
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
