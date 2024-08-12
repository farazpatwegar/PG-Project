import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure to install axios if you use it

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from an API
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/api/movies'); // Adjust the API endpoint as needed
        setMovies(response.data);
        setFilteredMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = () => {
    const lowercasedQuery = query.toLowerCase();
    const results = movies.filter(movie =>
      movie.title.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredMovies(results);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Search for Movies</h1>
        <div className="relative mb-6">
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
        <div>
          {filteredMovies.length > 0 ? (
            <ul className="space-y-4">
              {filteredMovies.map((movie) => (
                <li key={movie.id} className="border border-gray-200 rounded-lg p-4">
                  <h2 className="text-xl font-semibold text-gray-800">{movie.title}</h2>
                  <p className="text-gray-600">Release Date: {movie.releaseDate}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No movies found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
