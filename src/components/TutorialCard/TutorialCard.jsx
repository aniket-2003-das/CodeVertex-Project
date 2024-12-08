import React from "react";
import { CardSpotlight } from "../ui/card-spotlight";
import "../Cards/cards.css";

const TutorialCards = ({ image, name }) => {
  return (
    <CardSpotlight className="card-container spotlight-container w-[394px] h-[400px] bg-gray-800 rounded-lg shadow-lg flex flex-col overflow-hidden">
      {/* Image Section */}
      <div className="image-container h-[50%] w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="card-image w-full h-full object-cover relative z-20"
        />
      </div>

      {/* Content Section */}
      <div className="card-content h-[50%] flex items-center justify-center">
        <h1 className="card-title text-xl font-bold text-white relative z-20">{name}</h1>
      </div>
    </CardSpotlight>
  );
};

export default TutorialCards;
