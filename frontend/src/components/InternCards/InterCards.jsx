import React, { useEffect } from 'react';
// Removed unused Cards import
import './InternCard.css';
import { CardSpotlightIntern } from '../../sections/CardIntern'; // Correct import path
import Cards from '../Cards/cards';
import datasheet from '../Object/Object';
const InterCards = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card-wrapper');
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      cards.forEach((card) => {
        const { top } = card.getBoundingClientRect();
        if (top < windowHeight - 50) {
          card.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="InternCard w-[80%] mx-auto my-0">

      {/* Use CardSpotlightDemo instead of undefined Card */}
      {datasheet.map((data, index) => (
        <div className="card-wrapper" key={index}>
          <Cards
            image={data.image}
            title={data.title}
            description={data.description}
            link={data.link}
          />
        </div>
      ))}
    </div>
  );
};

export default InterCards;
