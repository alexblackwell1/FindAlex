import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing.js';
import About from './Components/About.js';
import Projects from './Components/Projects.js';
import Resume from './Components/Resume.js';
import './styling/default.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Landing />}/>
                <Route path='about' element={<About />}/>
                <Route path='projects' element={<Projects />}/>
                <Route path='resume' element={<Resume />}/>
            </Routes>
        </Router>
    );
}

export default App;

