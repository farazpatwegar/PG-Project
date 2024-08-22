import React from 'react';
import Slideshow from './SlideShow'; // Make sure the path is correct
import Movie from '../Movie/Movie';
import About from '../About/about';

const HomePage = () => {
  return (
    <div className="home-page bg-gray-800 min-h-screen text-white">
      <div className="slider-section">
        <Slideshow />
        <Movie/>
        <About/>
      </div>
    </div>
  );
};

export default HomePage;
