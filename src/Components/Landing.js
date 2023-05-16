import React, { useEffect } from 'react';
import TextLoop from "react-text-loop";
// import $ from 'jquery';
import './Styling/TextFormat.css';
import './Styling/Landing.css';

function Landing() {
  useEffect(() => {
    // makeItRain();

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

  // var makeItRain = function() {
  //   //clear out everything
  //   $('.rain').empty();
  
  //   var increment = 0;
  //   var drops = "";
  //   var backDrops = "";
  
  //   while (increment < 100) {
  //     //couple random numbers to use for various randomizations
  //     //random number between 98 and 1
  //     var randoHundo = (Math.floor(Math.random() * 98 + 1));
  //     //random number between 5 and 2
  //     var randoFiver = (Math.floor(Math.random() * 4 + 2));
  //     //increment
  //     increment += randoFiver;
  //     //add in a new raindrop with various randomizations to certain CSS properties
  //     drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver + 200) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" ></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
  //     backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver + 92) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
  //   }
  
  //   $('.rain.front-row').append(drops);
  //   $('.rain.back-row').append(backDrops);
  // }

  return (
    // <body class="back-row-toggle splat-toggle">
    //   <div class="rain front-row"></div>
    //   <div class="rain back-row"></div>
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
    // </body>
  );
}

export default Landing;
