import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div>
        &copy; {new Date().getFullYear()} George Prempeh &mdash; Step8up Academy UK BootCamp Portfolio
      </div>
      <div>
        <a href="https://github.com/GeorgePrempeh/w9ReactPortfolio" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://your-render-link" target="_blank" rel="noopener noreferrer">Live Site</a>
      </div>
    </footer>
  );
}

export default Footer;
