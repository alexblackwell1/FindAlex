import React, { useState, useEffect } from 'react';
import './Styling/TextFormat.css';
import './Styling/Landing.css';

function Landing() {
    const [words] = useState([
        'Based in Wake Forest, NC',
        'Avid Board Game Collector',
        'Seeker of Quidditch'
    ]); // list of words
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [playAnimation, setPlayAnimation] = useState(false);

    useEffect(() => {
        setPlayAnimation(true);
        const interval = setInterval(() => {
            setCurrentWordIndex(currentWordIndex => (currentWordIndex + 1) % words.length);
        }, 4000); // change word every 2 seconds
    
        return () => clearInterval(interval);
    }, [words.length]);

    const staticText = '';
    const fadingWord = words[currentWordIndex];
    const text = staticText + fadingWord;

    return (
        <div className="Landing textPrimary">
            <div className="constrainedBox">
                <h1>
                Hello there, I'm<span style={{ color: "#2589bd" }}> Alex</span>
                </h1>
                <p className={playAnimation ? 'fade-down' : ''}>{text}</p>
            </div>
        </div>
    );
}

export default Landing;
