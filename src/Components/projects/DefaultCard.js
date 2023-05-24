import React from 'react';
import '../../styling/projects.css'

function DefaultCard(name, image, text) {
    const image_alt = name;
    return (
        <div className='card'>
            <h1 className='card-title'>{name}</h1>
            <div className='card-row'>
                <img className='card-image' src={image} alt={image_alt} />
                <p className='card-text'>{text}</p>
            </div>
        </div>
    );
}

export default DefaultCard;