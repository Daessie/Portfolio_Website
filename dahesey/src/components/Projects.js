import React, { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import './Projects.css';

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);
  const [filter, setFilter] = useState('all');
  
  // Sample project data - you would replace this with your own projects
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart functionality, user authentication, and payment integration.',
      image: 'project1.jpg', // Replace with your image path
      category: 'react',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe'],
      demoUrl: 'https://demo-ecommerce.example.com',
      codeUrl: 'https://github.com/yourusername/ecommerce'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A Kanban-style task management application with drag-and-drop functionality and team collaboration.',
      image: 'project2.jpg', // Replace with your image path
      category: 'react',
      technologies: ['React', 'Firebase', 'Material UI', 'React DnD'],
      demoUrl: 'https://task-app.example.com',
      codeUrl: 'https://github.com/yourusername/task-app'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application showing current conditions and 5-day forecast using the OpenWeather API.',
      image: 'project3.jpg', // Replace with your image path
      category: 'javascript',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeather API'],
      demoUrl: 'https://weather.example.com',
      codeUrl: 'https://github.com/yourusername/weather-app'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern CSS techniques like Grid and Flexbox.',
      image: 'project4.jpg', // Replace with your image path
      category: 'design',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      demoUrl: 'https://portfolio.example.com',
      codeUrl: 'https://github.com/yourusername/portfolio'
    },
    {
      id: 5,
      title: 'Recipe Finder App',
      description: 'Search and save recipes with filtering options for dietary restrictions and ingredients.',
      image: 'project5.jpg', // Replace with your image path
      category: 'react',
      technologies: ['React', 'Context API', 'Recipe API', 'CSS Modules'],
      demoUrl: 'https://recipes.example.com',
      codeUrl: 'https://github.com/yourusername/recipe-app'
    },
    {
      id: 6,
      title: 'Company Landing Page',
      description: 'A modern, responsive landing page for a tech startup with animations and contact form.',
      image: 'project6.jpg', // Replace with your image path
      category: 'design',
      technologies: ['HTML5', 'SASS', 'JavaScript', 'AOS'],
      demoUrl: 'https://landing.example.com',
      codeUrl: 'https://github.com/yourusername/landing-page'
    }
  ];
  
  // Filter projects based on category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      
      <div className="project-filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'react' ? 'active' : ''}`}
          onClick={() => setFilter('react')}
        >
          React
        </button>
        <button 
          className={`filter-btn ${filter === 'javascript' ? 'active' : ''}`}
          onClick={() => setFilter('javascript')}
        >
          JavaScript
        </button>
        <button 
          className={`filter-btn ${filter === 'design' ? 'active' : ''}`}
          onClick={() => setFilter('design')}
        >
          UI/UX Design
        </button>
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div className={`project-card glass-card ${darkMode ? 'dark-mode' : ''}`} key={project.id}>
            <div className="project-image">
              {/* Placeholder for project image */}
              <div className="image-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                </svg>
              </div>
              <div className="project-links">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                  </svg>
                  <span>Demo</span>
                </a>
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                  </svg>
                  <span>Code</span>
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span className="tech-tag" key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="projects-cta">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          View More on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;