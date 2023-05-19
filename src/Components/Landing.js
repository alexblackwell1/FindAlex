import React from 'react';
import TextLoop from "react-text-loop";
import { Link } from 'react-router-dom';
import '../styling/landing.css';

function Landing() {
    return (
        <div className='landing-page'>
            <div className='landing-header'>
                <h1>Hello World, I'm Alex!</h1>
            </div>
            <div className='landing-description'>
                <TextLoop interval={4000} springConfig={{ stiffness: 100, damping: 10 }}>
                    <p>Full-Stack Developer for AthleteX</p>
                    <p>Avid Board Game Collector</p>
                    <p>Based in Wake Forest, NC</p>
                    <p>Seeker of Quidditch</p>
                    <p>Appalachian State University Graduate</p>
                    <p>StarFleet Captain</p>
                </TextLoop>
            </div>
            <div className='landing-btn-trio'>
                <Link to='/about' className='landing-btn'><p>About Me</p></Link>
                <div className='landing-btn-row'>
                    <Link to='/projects' className='landing-btn'><p>Projects</p></Link>
                    <Link to='/resume' className='landing-btn'><p>Resume</p></Link>
                </div>
            </div>
        </div>
    );
}

export default Landing;
