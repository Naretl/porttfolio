'use client'
import React from 'react';
import './homepage.css';
import profileImage from './assets/martin.jpg'; // <- update this path to your actual image


const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <h1>Hello, I'm Martin Luke Kioko</h1>
      <p>Developer | Innovator | Front-end Developer</p>
      <a href="/C:\Users\marti\OneDrive\Documents\CURRICULUM VITAE.docx" download className="hero-btn">Download Resume</a>
      <div className="hero-image">
        <img src= {profileImage} alt="Martin Luke Kioko" />
      </div>
    </section>
  );
};

export default HeroSection;