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
                <p>
                    I am a Full-Stack Develpoer! I work on the edge of new and emerging technologies.
                    I graduated from Appalachian State University with my bachelor's in <b>Computer Science</b> and two minors in <b>Mathematics</b> and <b>Philosophy</b>.
                    Being able to focus on Theories and building Algorithms greatly contributed to my passion of the subject.
                </p>
                <p>
                    Starting in 2021, I joined the <b>AthleteX</b> project.
                    It's design is to analize select sports and tokenize player performance.
                    The purpose of this is to allow users to invest in their fdavorite players and follow them through their career.
                    I have contributed to different aspects of the project including <b>UI/UX</b>, <b>Growth</b>, <b>Backend</b>, and <b>Protocol</b> where the Smart Contracts are made.
                </p>
                <p>
                    Playing around with new innovations is always inspiring to see the direction that technology is headed in.
                    I have dabbled in <i>Cloud Computing</i> and <i>Decentralized Environments</i>.
                </p>
            </div>
        </div>
    );
}

export default About;
