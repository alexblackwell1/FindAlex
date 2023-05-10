import React from 'react';
import './Styling/TextFormat.css';
import './Styling/Navigation.css';

function Navigation(fixed) {
    const { isFixedLocation } = fixed;
    const navigationClass = isFixedLocation ? "Navigation Fixed textPrimary" : "Navigation textPrimary";
    const hide = isFixedLocation ? 'show' : 'hide';
    
    const handleClick_home = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    
    return (
        <div className={navigationClass}>
            <h3>Alex Blackwell</h3>
            <nav>
                <ul className={hide}>
                    <li className="NavButton" onClick={handleClick_home}>Home</li>
                    <li className="NavButton">About</li>
                    <li className="NavButton">Projects</li>
                    <li className="NavButton">Resume</li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;

