import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/default.css';
import '../styling/about.css';

function About() {
    return (
        <div className='page'>
            <div className='title'>
                <Link to='/' className='return'><h1>◄</h1></Link>
                <h1>About</h1>
            </div>
            <div className='about-body'>
                <p>Hello there, I'm Alex!</p>
                <p>
                    I am a full stack engineer.
                    I'll be working on the embellish of this website as I work,
                    but my main goal was to have a place where I could post the <Link to='/projects'>projects</Link> I work on.
                </p>
                <p>
                    More about me, I am a graduate of Appalachian State University where I obtained my bachelor's degree in Computer Science.
                    I also studied Mathematics and Philosophy, minoring in each respectively.
                </p>
                <p>
                    There, I worked for the University's library as Technical Services for three of my years there.
                    My primary responsibilities there included ensuring every machine was constantly updated and working as expected.
                    This included any faculity/staff machine, work station, service point, and hundreds of floor computers.
                </p>
                <p>
                    I also started working for AthleteX at that time, becoming interested in blockchain and decentralized technologies.
                    At AthleteX, my first job was to get the UI up and running, and after learning Dart, I suceeded -- after I was given three iterations to build.
                    Because of this, our first handful of interns fell under my wing for me to teach Dart and how to meet AthleteX's expectations when building for us.
                    After that, my efforts shifted to primarly backend technologies, having one of those interns eventually taking lead on the frontend.
                </p>
                <p>
                    As far as some of the technologies I have worked with, that list includes:
                    Azure Functions, AWS, IPFS/Filecoin, REST APIs, Github, and Git.
                </p>
            </div>
        </div>
    );
}

export default About;
