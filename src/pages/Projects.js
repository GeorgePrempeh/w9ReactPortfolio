import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Weather App',
    description: 'A React app that fetches weather data from an API.',
    link: '#',
  },
  {
    title: 'Task Manager',
    description: 'A full stack CRUD app using React and Node.js.',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React.',
    link: '#',
  },
  {
    title: 'Blog Platform',
    description: 'A blog platform with authentication and REST API.',
    link: '#',
  },
  {
    title: 'E-commerce Store',
    description: 'Online store built with React and Express.',
    link: '#',
  },
  {
    title: 'Chat App',
    description: 'Real-time chat app using Node.js and Socket.io.',
    link: '#',
  },
  {
    title: 'Recipe Finder',
    description: 'Search recipes using a public API.',
    link: '#',
  },
  {
    title: 'Quiz App',
    description: 'Interactive quiz app built with React.',
    link: '#',
  },
];

function Projects() {
  return (
    <main>
      <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </main>
  );
}

export default Projects;
