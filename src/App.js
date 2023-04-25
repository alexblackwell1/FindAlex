import React, { useState, useEffect } from 'react';
import Landing from './Components/Landing';
import About from './Components/About';
import Navigation from './Components/Navigation';

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
      <About />
    </div>
  );
}

export default App;
