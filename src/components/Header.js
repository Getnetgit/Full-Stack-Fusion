

// export default Header;
import React from 'react';
import Navigation from './Navigation';

const PortfolioHeader = ({ activeSection, onSectionChange }) => {
    const headerStyle = {
        background: 'linear-gradient(to bottom right, #3a2618, #081c15)',
        fontSize: '1.5rem',
        color:'#00b4d8'
      };
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light " style={headerStyle}>
      <div className="container">
        <h1 style={{ fontSize: '2rem' }}>Portfolio</h1>
        <Navigation activeSection={activeSection} onSectionChange={onSectionChange} />
      </div>
    </header>
  );
};

export default PortfolioHeader;
