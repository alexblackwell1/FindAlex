import './Styling/TextFormat.css';
import './Styling/About.css'
import React from 'react';

function About() {
    return (
        <div className="AboutPage">
            <div className="AboutImage">
                <img src={"../../assets/Alex_Michala_waterfall.jpg"} alt="About" />
                <div className="textPrimary">
                    <p>Alex Blackwell</p>
                    <p>Email: AGBwell2@gmail.com</p>
                </div>
            </div>
            <div className="textPrimary">
                <h1>About Me</h1>
                <p>I am a Full-Stack Develpoer! I work on the edge of new and emerging technologies.</p>
                <p>Delete soon please</p>
            </div>
        </div>
    );
}

export default About;
