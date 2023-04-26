import './Styling/TextFormat.css';
import './Styling/Projects.css'
import React from 'react';
import Project from './Project';

function Projects() {
    const projects = [
        {
            title: 'Laptop Checkout Cart',
            image: '',
            description: (
                <>
                    <p>Project 1 description paragraph 1</p>
                    <p>Project 1 description paragraph 2</p>
                </>
            ),
        },
        {
            title: 'Tabletop Virtulizer',
            image: '',
            description: (
                <>
                    <p>Project 2 description paragraph 1</p>
                    <p>Project 2 description paragraph 2</p>
                </>
            ),
        },
        {
            title: 'Turning Machine',
            image: '',
            description: (
                <>
                    <p>Project 2 description paragraph 1</p>
                    <p>Project 2 description paragraph 2</p>
                </>
            ),
        }
    ];

    return (
        <div className="ProjectsPage textPrimary">
            <h1>Projects</h1>
            <p>Checkout my <a href="https://github.com/alexblackwell1" style={{ color: "#2589BD", textDecoration: "none" }}>Github</a> to see more work there!</p>
            {projects.map(project => (
                <Project
                    key={project.title}
                    title={project.title}
                    image={project.image}
                    description={project.description}
                />
            ))}
        </div>
    );
}

export default Projects;
