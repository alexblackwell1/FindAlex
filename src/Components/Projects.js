import React from 'react';
import { Link } from 'react-router-dom';
import { LaptopCartCard } from './projects/LaptopCart.js';
import '../styling/projects.css';
import './projects/LaptopCart.js';

function Projects() {
    return (
        <div className='projects-page'>
            <div className='projects-title'>
                <Link to='/' className='projects-return'><h1>◄</h1></Link>
                <h1>Projects</h1>
            </div>
            <div className='projects-horiz-list'>
                <div className='projects-arrow projects-arrow-left'></div>
                <div className='projects-list-items'>
                    <LaptopCartCard/>
                </div>
                <div className='projects-arrow projects-arrow-right'></div>
            </div>
            <div className='projects-read-more'>
                <p>Check out my Github page here!</p>
            </div>
        </div>
    );
}

export default Projects;
