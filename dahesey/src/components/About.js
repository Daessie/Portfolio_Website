import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import './About.css';

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      
      <div className={`glass-card about-card ${darkMode ? 'dark-mode' : ''}`}>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a passionate frontend developer with a keen eye for design and a commitment to creating intuitive, responsive web applications.
            </p>
            
            <p>
              With over 5 years of experience, I've worked on a wide range of projects from small business websites to complex web applications. I love turning complex problems into simple, beautiful, and intuitive interface designs.
            </p>
            
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and community events.
            </p>
            
            <div className="about-cta">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="/resume.pdf" className="btn btn-secondary" download>Download CV</a>
            </div>
          </div>
          
          <div className="about-info">
            <div className="info-group">
              <h3>Education</h3>
              <div className="info-item">
                <span className="info-title">BSc in Computer Science</span>
                <span className="info-subtitle">University of Technology</span>
                <span className="info-date">2015 - 2019</span>
              </div>
            </div>
            
            <div className="info-group">
              <h3>Work Experience</h3>
              <div className="info-item">
                <span className="info-title">Senior Frontend Developer</span>
                <span className="info-subtitle">Tech Solutions Inc.</span>
                <span className="info-date">2022 - Present</span>
              </div>
              <div className="info-item">
                <span className="info-title">Frontend Developer</span>
                <span className="info-subtitle">Digital Creators Agency</span>
                <span className="info-date">2019 - 2022</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="skills-overview">
          <h3>My Tech Stack</h3>
          <div className="tech-badges">
            <span className="tech-badge">HTML5</span>
            <span className="tech-badge">CSS3</span>
            <span className="tech-badge">JavaScript</span>
            <span className="tech-badge">TypeScript</span>
            <span className="tech-badge">React</span>
            <span className="tech-badge">Next.js</span>
            <span className="tech-badge">Redux</span>
            <span className="tech-badge">Tailwind CSS</span>
            <span className="tech-badge">SASS</span>
            <span className="tech-badge">Git</span>
            <span className="tech-badge">Figma</span>
            <span className="tech-badge">Responsive Design</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;