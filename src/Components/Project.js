import './Styling/TextFormat.css';
import './Styling/Projects.css'
import React from 'react';

function Project({ title, image, description }) {
  return (
    <div className="Project textDefault">
        <hr className="pageBreak" />
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <div className="description">{description}</div>
    </div>
  );
}

export default Project;
