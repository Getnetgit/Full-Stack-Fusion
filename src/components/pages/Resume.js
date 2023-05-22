import React from 'react';
import resumePDF from '../../assets/resume.pdf'
const Resume = () => {
 

  return (
    <div style={{ textAlign: 'left' }}>
      <h2>
        Download my <a href={resumePDF} download>resume</a>
      </h2>
      <p>Front-end Proficiencies:</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>Bulma</li>
      </ul>
      <p>Back-end Proficiencies:</p>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
};

export default Resume;
