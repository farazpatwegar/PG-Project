import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MovieDb = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    // Fetch movie data from your API
    axios.get('http://localhost:8080/admin/getAllMovies')
      .then(response => setMovies(response.data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const handleBookNowClick = (movie) => {
    // Store the selected movie ID in session storage
    sessionStorage.setItem('Movie',JSON.stringify(movie));
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
            <div key={movie.movieId} className="relative group rounded-lg overflow-hidden bg-gray-800" style={{ width: '258px', height: '400px' }}>
              <div className="relative h-full w-full overflow-hidden rounded-lg bg-gray-800 transition-transform duration-300 ease-in-out transform group-hover:scale-105">
                <div className="h-full w-full bg-gray-600 flex items-center justify-center text-white text-xl font-semibold">
                  {movie.title}
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center p-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <p className="text-sm text-gray-300 mb-2">Duration: {movie.duration ? movie.duration.substring(0, 5) : 'N/A'}</p>
                  <p className="text-sm text-gray-300 mb-2">Release Date: {new Date(movie.releaseDate).toLocaleDateString()}</p>
                  <p className="text-sm text-gray-300 mb-4">Rating: {movie.rating}</p>
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
            <div className="h-64 w-full bg-gray-600 flex items-center justify-center text-white text-xl font-semibold mb-4">
              {selectedMovie.title}
            </div>
            <p className="text-sm text-gray-700 mb-2">Duration: {selectedMovie.duration ? selectedMovie.duration.substring(0, 5) : 'N/A'}</p>
            <p className="text-sm text-gray-700 mb-2">Release Date: {new Date(selectedMovie.releaseDate).toLocaleDateString()}</p>
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
};

export default MovieDb;
