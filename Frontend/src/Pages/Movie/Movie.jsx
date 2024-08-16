import uttu from '../../asset/images/tzp.png';
import n1 from '../../asset/images/n1.jpg';
import n2 from '../../asset/images/n2.jpg';
import n3 from '../../asset/images/n3.jpg';
import n4 from '../../asset/images/n4.jpg';
import n5 from '../../asset/images/n5.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const movies = [
  {
    id: 1,
    title: 'End Game',
    imageSrc: uttu,
    imageAlt: "Poster for End Game movie.",
    duration: '1h 4min',
    releaseDate: '2019',
    description: "A thrilling conclusion to the Avengers saga.",
    rating: 8.5,
    language: 'English'
  },
  {
    id: 2,
    title: 'Frozen 2',
    imageSrc: n1,
    imageAlt: "Poster for Frozen 2 movie.",
    duration: '1h 43min',
    releaseDate: '2019',
    description: "Elsa and Anna embark on a new adventure.",
    rating: 7.0,
    language: 'English'
  },
  {
    id: 3,
    title: 'Jumanji: The Next Level',
    imageSrc: n2,
    imageAlt: "Poster for Jumanji: The Next Level movie.",
    duration: '2h 3min',
    releaseDate: '2019',
    description: "The gang is back but the game has changed.",
    rating: 6.7,
    language: 'English'
  },
  {
    id: 4,
    title: 'Star Wars: The Rise of Skywalker',
    imageSrc: n3,
    imageAlt: "Poster for Star Wars: The Rise of Skywalker movie.",
    duration: '2h 22min',
    releaseDate: '2019',
    description: "The final battle between the Resistance and the First Order.",
    rating: 6.9,
    language: 'English'
  },
  {
    id: 5,
    title: 'Spider-Man: Far From Home',
    imageSrc: n4,
    imageAlt: "Poster for Spider-Man: Far From Home movie.",
    duration: '2h 9min',
    releaseDate: '2019',
    description: "Peter Parker goes on a European vacation.",
    rating: 7.5,
    language: 'English'
  },
  {
    id: 6,
    title: 'Joker',
    imageSrc: n5,
    imageAlt: "Poster for Joker movie.",
    duration: '2h 2min',
    releaseDate: '2019',
    description: "An exploration of the origins of the iconic Joker.",
    rating: 8.4,
    language: 'English'
  }
];

export default function Movie() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleBookNowClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleClosePopup = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-8">MOVIES</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {movies.map((movie) => (
            <div key={movie.id} className="relative group rounded-lg overflow-hidden bg-gray-800" style={{ width: '258px', height: '400px' }}>
              <div className="relative h-full w-full overflow-hidden rounded-lg bg-gray-800 transition-transform duration-300 ease-in-out transform group-hover:scale-105">
                <img
                  alt={movie.imageAlt}
                  src={movie.imageSrc}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <h3 className="text-lg font-semibold text-white mb-2">{movie.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{movie.duration}</p>
                  <p className="text-sm text-gray-300 mb-4">{movie.releaseDate}</p>
                  <button
                    onClick={() => handleBookNowClick(movie)}
                    className="mt-4 text-white bg-red-600 px-4 py-2 rounded-lg text-lg font-bold transition-transform duration-300 ease-in-out transform hover:scale-105"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMovie && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">{selectedMovie.title}</h3>
            <img
              alt={selectedMovie.imageAlt}
              src={selectedMovie.imageSrc}
              className="h-64 w-full object-cover mb-4"
            />
            <p className="text-sm text-gray-700 mb-2">Duration: {selectedMovie.duration}</p>
            <p className="text-sm text-gray-700 mb-2">Release Date: {selectedMovie.releaseDate}</p>
            <p className="text-sm text-gray-700 mb-2">Rating: {selectedMovie.rating}</p>
            <p className="text-sm text-gray-700 mb-2">Language: {selectedMovie.language}</p>
            <p className="text-sm text-gray-700 mb-4">{selectedMovie.description}</p>
            <div className="flex justify-between">
              <Link
                to="/showselection"
                className="mt-4 text-white bg-blue-600 px-4 py-2 rounded-lg text-lg font-bold transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                Show Selection
              </Link>
              <button
                onClick={handleClosePopup}
                className="mt-4 text-white bg-red-600 px-4 py-2 rounded-lg text-lg font-bold transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
