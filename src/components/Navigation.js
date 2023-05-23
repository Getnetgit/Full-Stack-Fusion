
import React, { useState } from 'react';

const Navigation = ({ activeSection, onSectionChange }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pages = ['About Me', 'Portfolio', 'Contact', 'Resume'];
  
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent">
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleNavToggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
        <ul className="navbar-nav ml-auto">
          {pages.map((page) => (
            <li key={page} className="nav-item">
              <button
                onClick={() => onSectionChange(page)}
                className={`nav-link ${activeSection === page ? 'active' : ''}`}
                style={{ border: 'none', background: 'none', cursor: 'pointer',color:'#00b4d8' }}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
