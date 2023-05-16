import './Styling/TextFormat.css';
import './Styling/Projects.css';
import React from 'react';

function Projects() {
  const projects = [
    { title: 'Project 1', description: "fun" },
    { title: 'Project 2', description: "meh" },
    { title: 'Project 3', description: "ok" },
    { title: 'Project 4', description: "bad" },
    { title: 'Project 5', description: "something" },
    // Add more projects as needed
  ];

  return (
    <div className="ProjectsPage textPrimary">
      <h1>Projects</h1>
      <div className="horiz-project-list">
        {projects.map((project) => (
          <div className="project">
            <p>{project.title}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <p>
        Checkout my{' '}
        <a href="https://github.com/alexblackwell1" style={{ color: '#2589BD', textDecoration: 'none' }}>
          Github
        </a>{' '}
        to see more work there!
      </p>
    </div>
  );
}

export default Projects;
