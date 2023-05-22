
// export default Project;
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const Project = ({ title, description, demoLink, repoLink, backgroundImage }) => {
  const [hovered, setHovered] = useState(false);

  const cardStyle = {
    position: 'relative',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '2px solid #00b4d8'
  };

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `url(${backgroundImage}) center/cover`,
    opacity: hovered ? 0.1 : 1,
    transition: 'opacity 0.3s',
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    padding: '20px',
    color:'#00b4d8',
    opacity: hovered ? 1 : 0,
    transition: 'opacity 0.3s',
  };

  return (
    <div
      className="project"
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={backgroundStyle}></div>
      <div style={contentStyle}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
