import React from 'react';


function Home() {
  return (
    <main className="hero">
      <div className="hero-content">
  <img src="/logo.jpg" alt="GeRosMedia Logo" className="avatar" />
        <h1>George Prempeh</h1>
        <h2>Digital Product Designer &amp; Full Stack Web Developer</h2>
        <div className="hero-icons">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="hero-icon" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop" className="hero-icon" />
          <img src="/Adobe_Express.png" alt="Adobe Express" className="hero-icon" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" alt="Canva" className="hero-icon" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="hero-icon" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="hero-icon" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="hero-icon" />
        </div>
        <p>
          Welcome! I specialize in building modern, high-performance web applications that help businesses grow and delight their users. After completing an intensive 12-week Full Stack BootCamp at Step8up Academy UK, I’ve delivered solutions using React, Node.js, and the latest web technologies.
        </p>
        <p>
          Whether you need a sleek portfolio, a robust e-commerce site, or a custom business tool, I bring creativity, reliability, and a results-driven mindset to every project. My work is trusted by teams and users for its quality, security, and seamless experience.
        </p>
        <p>
          Let’s turn your ideas into reality! Explore my portfolio and contact me to discuss how I can help your business succeed.
        </p>
        <a href="/projects" className="hero-btn">View My Projects</a>
      </div>
    </main>
  );
}

export default Home;
