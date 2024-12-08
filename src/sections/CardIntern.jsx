import React from "react";
import { CardSpotlight } from "../components/ui/card-spotlight";
import webGif from '.././assets/lottie/imgWeb.png';
import '../components/Cards/cards.css'

export function CardSpotlightIntern() {
  return (
    <CardSpotlight className="h-96 w-96">
        {/* Image Section */}
      <div className="image-container">
        <img src={webGif} alt="Web Development" className="card-image text-xl font-bold relative z-20 mt-2" />
      </div>
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        Authentication steps
      </p>
      <p className="text-neutral-300 mt-4 relative z-20 text-sm">
        Ensuring your account is properly secured helps protect your personal
        information and data.
      </p>
      {/* Button */}
      <div className="flex justify-center">
        <button className="apply-button sparkle-button mt-3 mb-3">Apply</button>
      </div>
    </CardSpotlight>
  );
}
