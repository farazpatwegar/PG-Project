import React, { useState, useEffect } from 'react';
import banner1 from '../../asset/images/banner1.jpg';
import banner2 from '../../asset/images/banner2.jpg';
import banner3 from '../../asset/images/banner3.jpg';
import banner4 from '../../asset/images/banner4.jpg';

const slides = [
  { src: banner1, alt: 'Slide 1' },
  { src: banner2, alt: 'Slide 2' },
  { src: banner3, alt: 'Slide 3' },
  { src: banner4, alt: 'Slide 4' },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &#10095;
      </button>

      <div className="absolute bottom-20 left-20 p-9  bg-opacity-50 rounded-lg">
        <h1 className="text-5xl font-bold text-white mb-2">Welcome to Movie Booking</h1>
        <p className="text-lg text-white">Discover and book your favorite movies with ease.</p>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
