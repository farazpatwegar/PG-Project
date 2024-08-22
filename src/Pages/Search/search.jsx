import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/users/searchMovie/${query}`);
      setFilteredMovies(response.data);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching movies:', error);
      setError('Failed to fetch movies. Please try again later.');
      setFilteredMovies([]); // Clear previous search results
    }
  };

  const handleBookNowClick = (movie) => {
    // Store the selected movie ID in session storage
    sessionStorage.setItem('selectedMovieId', movie.movieId);
    setSelectedMovie(movie);
  };

  const handleClosePopup = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="bg-black py-16 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-8">Search for Movies</h2>
        <div className="relative mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter movie title..."
            className="w-full h-12 pl-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="absolute inset-y-0 right-0 flex items-center pr-4"
          >
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M18.36 10.36A7.5 7.5 0 1110.36 3a7.5 7.5 0 018 7.36z"
              />
            </svg>
          </button>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredMovies.map((movie) => (
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

export default SearchPage;
