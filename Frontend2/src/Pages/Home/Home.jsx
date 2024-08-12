import React from 'react';
import Slideshow from './SlideShow'; // Make sure the path is correct

const HomePage = () => {
  return (
    <div className="home-page bg-gray-800 min-h-screen text-white">
      <div className="slider-section">
        <Slideshow />
      </div>
    </div>
  );
};

export default HomePage;
