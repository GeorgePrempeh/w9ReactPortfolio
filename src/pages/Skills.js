import React from 'react';

const skills = [
  'HTML5', 'CSS3', 'Bootstrap', 'JavaScript (ES6+)', 'Python', 'Node.js', 'Express.js', 'SQL', 'Sequelize ORM', 'React', 'Git'
];

function Skills() {
  return (
    <main>
      <h2>Skills & Technologies</h2>
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </main>
  );
}

export default Skills;
