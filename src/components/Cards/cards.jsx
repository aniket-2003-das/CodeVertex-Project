import React from 'react';
import './cards.css';
import {Button} from '../Button'
import { CardSpotlight } from '../../components/ui/card-spotlight';

const Cards = ({ image, title, description, link }) => {
  return (
    // Wrap the card-container with CardSpotlight
    <CardSpotlight className="card-container spotlight-container">
      {/* Image Section */}
      <div className="image-container">
        <img src={image} alt="Web Development" className="card-image text-xl font-bold relative z-20 mt-2" />
      </div>

      {/* Content Section */}
      <div className="card-content">
        <h1 className="card-title text-xl font-bold relative z-20 mt-2 text-white">{title}</h1>
        <p className="card-description text-neutral-300 mt-4 relative z-20 text-sm">
          {description}
        </p>

        {/* Button */}
        <button className="apply-button sparkle-button"><a href= {link}>Apply</a></button>
        {/* <Button/> */}

      </div>
    </CardSpotlight>
  );
};

export default Cards;
