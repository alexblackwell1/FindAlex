import React, { useEffect } from 'react';
import TextLoop from "react-text-loop";
import './Styling/TextFormat.css';
import './Styling/Landing.css';

function Landing() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const scrollDiv = document.createElement("div");
      scrollDiv.className = "scroll-downs";
      scrollDiv.innerHTML = `
        <div class="scroll-arrow-container">
          <div class="scroll-down"></div>
          <div class="scroll-down"></div>
          <div class="scroll-down"></div>
        </div>`;
      document.body.appendChild(scrollDiv);

      const arrows = document.querySelectorAll('.scroll-down');
      arrows.forEach((arrow, index) => {
        setTimeout(() => {
          arrow.classList.add("show");
        }, (index + 1) * 300);
      });
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="Landing textPrimary">
      <div className="constrainedBox">
        <h1>
          Hello there, I'm<span style={{ color: "#2589bd" }}> Alex</span>
        </h1>
        <TextLoop interval={4000} springConfig={{ stiffness: 100, damping: 10 }}>
          <p>Full-Stack Developer for AthleteX</p>
          <p>Avid Board Game Collector</p>
          <p>Based in Wake Forest, NC</p>
          <p>Seeker of Quidditch</p>
          <p>Appalachian State University Graduate</p>
          <p>StarFleet Captain</p>
        </TextLoop>
      </div>
    </div>
  );
}

export default Landing;
