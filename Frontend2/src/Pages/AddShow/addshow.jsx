import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddShow() {
  const [show, setShow] = useState({
    showDate: '',
    showTime: '',
    movieId: '',
    screenId: '',
  });

  const [movies, setMovies] = useState([]);
  const [screens, setScreens] = useState([]);

  useEffect(() => {
    // Fetch movies and screens from your API
    const fetchData = async () => {
      try {
        const movieResponse = await axios.get('/api/movies');
        setMovies(movieResponse.data);

        const screenResponse = await axios.get('/api/screens');
        setScreens(screenResponse.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShow({ ...show, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/shows', show);
      // Clear the form after successful submission
      setShow({
        showDate: '',
        showTime: '',
        movieId: '',
        screenId: '',
      });
    } catch (error) {
      console.error('Error adding show', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-8 text-center">Add Show</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Show Date</label>
            <input
              type="date"
              name="showDate"
              value={show.showDate}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Show Time</label>
            <input
              type="time"
              name="showTime"
              value={show.showTime}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Movie</label>
            <select
              name="movieId"
              value={show.movieId}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a movie</option>
              {movies.map(movie => (
                <option key={movie.movieId} value={movie.movieId}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Screen</label>
            <select
              name="screenId"
              value={show.screenId}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a screen</option>
              {screens.map(screen => (
                <option key={screen.screenId} value={screen.screenId}>
                  {screen.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors duration-300"
          >
            Add Show
          </button>
        </form>
      </div>
    </div>
  );
}
