

import React from 'react';
import profilePicture from '../../assets/pictures/ProfilePicture.PNG';

const AboutMe = () => {
  return (
    <section style={{ background: '#f8f1e5', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', border: '2px solid #00b4d8', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2>About Me</h2>
      <div style={{ width: '100%', maxWidth: '1200px', padding: '20px' }}>
        <div style={{ width: '200px', height: '200px', borderRadius: '50%', border: '2px solid #00b4d8', overflow: 'hidden', margin: '0 auto' }}>
          <img src={profilePicture} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <p style={{ marginTop: '20px', textAlign: 'left' }}>
          A highly skilled Automation/Electrical Engineer with over 15 years of experience in the textile, food, and building materials industries. Proficient in Control Systems Design, Process Automation, Commissioning, and Industrial Automation. Possesses a Bachelor of Science degree in Electrical and Electronics Engineering from Arba Minch University.
          <br/>
          I am currently in the final stages of completing the University of Washington bootcamp as a full-stack developer. In less than a month, I will graduate from the bootcamp and further enhance my skills in backend and frontend development.
        </p>
      </div>
    </section>

  );
};

export default AboutMe;
