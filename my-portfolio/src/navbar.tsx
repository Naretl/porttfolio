// src/components/Navbar.tsx
import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // offset to avoid hiding behind navbar
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">Martin</div>
        <ul className="navbar-links">
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('about-me')}>About</li>
          <li onClick={() => scrollToSection('skills')}>Skills</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('education')}>Education</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;