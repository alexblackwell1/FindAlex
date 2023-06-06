import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { Link } from 'react-router-dom';
import github from '../styling/assets/github-mark-white.png'
import linkedin from '../styling/assets/LI-In-Bug.png'
import '../styling/landing.css';

function Landing() {
    const TEXTS = [
        'Full-Stack Developer for AthleteX',
        'Avid Board Game Collector',
        'Based in Wake Forest, NC',
        'Seeker of Quidditch',
        'Appalachian State University Graduate',
        'StarFleet Captain'
    ];

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );

        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className='page'>
            <div className='landing-top'>
                <div className='landing-header'>
                    <h1>Hello World, I'm Alex!</h1>
                </div>
                <p className='landing-description'>
                    <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                </p>
            </div>
            <div className='landing-bottom'>
                <div className='landing-page-btn-row'>
                    <Link to='/projects' className='landing-page-btn'><p>Projects</p></Link>
                    <Link to='/about' className='landing-page-btn'><p>About Me</p></Link>
                </div>
                <div className='landing-link-btn-row'>
                    <Link to='/resume' className='landing-link-btn'><p>Resume</p></Link>
                    <Link to='https://github.com/alexblackwell1' className='landing-link-btn'>
                        <img className='landing-image' src={github} alt='github account' />
                    </Link>
                    <Link to='https://www.linkedin.com/in/agbwell/' className='landing-link-btn'>
                        <img className='landing-image' src={linkedin} alt='linkedin account' />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Landing;
