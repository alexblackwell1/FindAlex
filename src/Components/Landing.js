import React from 'react';
import TextLoop from "react-text-loop";
import './Styling/TextFormat.css';
import './Styling/Landing.css';

function Landing() {
    return (
        <div className="Landing textPrimary">
            <div className="constrainedBox">
                <h1>
                    Hello there, I'm<span style={{ color: "#2589bd" }}> Alex</span>
                </h1>
                <TextLoop
                    interval={4000}
                    springConfig={{ stiffness: 100, damping: 10 }}
                >
                    <p>Full-Stack Developer for AthleteX</p>
                    <p>Avid Board Game Collector</p>
                    <p>Based in Wake Forest, NC</p>
                    <p>Seeker of Quidditch</p>
                    <p>Appalachian State University Graduate</p>
                    <p>StarFleet Captain</p>
                </TextLoop>
            </div>
        </div>
    );
}

export default Landing;
