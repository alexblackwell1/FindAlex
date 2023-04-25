import React, { useState, useEffect } from 'react';
import './Styling/TextFormat.css';
import './Styling/Landing.css';

const words = ['Star Wars', 'Dungeons and Dragons', 'Smite'];

function Landing() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }, 2000);
        return () => clearInterval(intervalId);
    }, [currentWordIndex]);
  
    return (
      <div className="Landing textPrimary">
        <div className="constrainedBox">
            <h1>
            Hello there, I'm<span style={{ color: "#2589bd" }}> Alex</span>
            </h1>
            <div className="word-carousel">
                <div className="words-container">
                    {words.map((word, index) => (
                        <span
                            key={word}
                            className={`word ${index === currentWordIndex ? 'active' : ''}`}
                        >
                            {word}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </div>
    );
  }

export default Landing;
