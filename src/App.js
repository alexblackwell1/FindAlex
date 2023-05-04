import React, { useState, useEffect } from 'react';
import Landing from './Components/Landing';
import Navigation from './Components/Navigation';
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setShowNav(true);
            } else {
                setShowNav(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  
    return (
        <div className="background">
            <Landing />
            <Navigation isFixedLocation={showNav}/>
            <Empty size={showNav ? 65 : 0}/>
            <About />
            <Divider />
            <Projects />
            <Empty size={50}/>
        </div>
    );
}

export default App;

function Empty(height) {
    const { size } = height;
    const formatHeight = size + "px";
    
    return (
        <div style={{
            height: formatHeight}}
        >
        </div>
    );
}

function Divider() {
    return (
        <div class="h-divider">
            <div class="shadow"></div>
        </div>
    );
}
