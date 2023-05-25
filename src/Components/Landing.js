import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { Link } from 'react-router-dom';
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
        <div className='landing-page'>
            <div className='landing-header'>
                <h1>Hello World, I'm Alex!</h1>
            </div>
            <p className='landing-description'>
                <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
            </p>
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
