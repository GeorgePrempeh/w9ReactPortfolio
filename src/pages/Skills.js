import React from 'react';

const skills = [
  'HTML5', 'CSS3', 'Bootstrap', 'JavaScript (ES6+)', 'Python', 'Node.js', 'Express.js', 'SQL', 'Sequelize ORM', 'React', 'Git'
];

function Skills() {
  return (
    <main>
      <h2>Skills & Technologies</h2>
      <div className="skills-badges">
        {skills.map(skill => (
          <span className="skill-badge" key={skill}>{skill}</span>
        ))}
      </div>
    </main>
  );
}

export default Skills;
