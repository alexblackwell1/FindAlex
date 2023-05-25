import React from 'react';
import '../../styling/projects.css'

function DefaultCard(name, image, text) {
    const image_alt = name;
    return (
        <div className='card'>
            <div className='card-title-row'>
                <div></div>
                <h1 className='card-title'>{name}</h1>
                <h1 className='card-link'>Θ</h1>
            </div>
            <div className='card-row'>
                <img className='card-image' src={image} alt={image_alt} />
                <p className='card-text'>{text}</p>
            </div>
        </div>
    );
}

export default DefaultCard;