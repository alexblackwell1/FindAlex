import './Styling/TextFormat.css';
import './Styling/Projects.css'
import React from 'react';
import Project from './Project';

function Projects() {
    const projects = [

    ];
    
    return (
        <div className="ProjectsPage textPrimary">
            <h1>Projects</h1>
            <p>Checkout my <a href="https://github.com/alexblackwell1" style={{ color: "#2589BD", textDecoration: "none" }}>Github</a> to see more work there!</p>
            {projects.map(project => (
                <Project
                    githubLink={project.githubLink}
                />
            ))}
        </div>
    );
}

export default Projects;
