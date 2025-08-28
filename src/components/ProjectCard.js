
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProjectCard.css';


// ProjectCard component displays individual project details
function ProjectCard({ title, description, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className="project-link" aria-label={`View details for ${title}`}>View Project</Link>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
