import React, { useState } from 'react';
import PortfolioHeader from './Header';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import PotrfolioFooter from './Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PortfolioContainer = () => {
  const [activeSection, setActiveSection] = useState('About Me');

  const renderSection = () => {
    switch (activeSection) {
      case 'About Me':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return null;
    }
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div style={{minHeight:'100vh', backgroundColor: '#997b66'}}>
      <PortfolioHeader activeSection={activeSection} onSectionChange={handleSectionChange} />
      <div className="content-container"style={{ textAlign: 'center', padding: '20px 40px 20px 40px'}}>
        {renderSection()}
      </div>
      <PotrfolioFooter/>
    </div>
      
  );
};

export default PortfolioContainer;
