import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Weather App',
    description: 'A React app that fetches weather data from an API.',
    link: '/projects/weather-app',
  },
  {
    title: 'Task Manager',
    description: 'A full stack CRUD app using React and Node.js.',
    link: '/projects/task-manager',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React.',
    link: '/projects/portfolio-website',
  },
  {
    title: 'Blog Platform',
    description: 'A blog platform with authentication and REST API.',
    link: '/projects/blog-platform',
  },
  {
    title: 'E-commerce Store',
    description: 'Online store built with React and Express.',
    link: '/projects/ecommerce-store',
  },
  {
    title: 'Chat App',
    description: 'Real-time chat app using Node.js and Socket.io.',
    link: '/projects/chat-app',
  },
  {
    title: 'Recipe Finder',
    description: 'Search recipes using a public API.',
    link: '/projects/recipe-finder',
  },
  {
    title: 'Quiz App',
    description: 'Interactive quiz app built with React.',
    link: '/projects/quiz-app'
  }
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
