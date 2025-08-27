import React from 'react';

const skills = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'JavaScript (ES6+)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Sequelize ORM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
];

function Skills() {
// Skills page displays skills table with icons and badges
  // Split skills into rows of 4 for table display
  const rows = [];
  for (let i = 0; i < skills.length; i += 4) {
    rows.push(skills.slice(i, i + 4));
  }
  return (
    <main>
      <h2>Skills, Technologies & Badges</h2>
      <p style={{maxWidth: '700px', margin: '0 auto 2rem auto', textAlign: 'center', fontSize: '1.15rem', color: '#222'}}>
        I specialise in developing modern, high-performance web applications utilising a broad range of technologies. Below are my core technical skills, tools, and achievement badges. I also value strong soft skills, which enable me to deliver successful projects and work collaboratively.
      </p>
      <div style={{maxWidth: '700px', margin: '0 auto 2rem auto', textAlign: 'center'}}>
        <h3 style={{marginBottom: '0.5rem', color: '#61dafb'}}>Soft Skills</h3>
        <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', fontSize: '1.08rem', color: '#222'}}>
          <li>Teamwork</li>
          <li>Communication</li>
          <li>Problem Solving</li>
          <li>Adaptability</li>
          <li>Creativity</li>
          <li>Attention to Detail</li>
          <li>Time Management</li>
        </ul>
      </div>
      <div className="badges-row">
        <img src="/JavaScript_Coder (1).png" alt="JS Coder Badge" className="badge-img" />
        <img src="/Responsive_Design_Champion.png" alt="Responsive Design Champion Badge" className="badge-img" />
        <img src="/HTMLCSS_Explorer.png" alt="HTML/CSS Explorer Badge" className="badge-img" />
      </div>
      <table className="skills-table">
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              {row.map(skill => (
                <td key={skill.name} className="skill-cell">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                  <span>{skill.name}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Skills;
