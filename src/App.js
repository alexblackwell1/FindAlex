import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Resume from './components/Resume.js';
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

