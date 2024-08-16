import React, { useState } from 'react';
import axios from 'axios';

export default function AddMovie() {
  const [movie, setMovie] = useState({
    title: '',
    releaseDate: '',
    duration: '',
    description: '',
    rating: '',
    language: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Format the duration to hh:mm:ss if not already
    const formattedDuration = movie.duration.includes(':')
      ? movie.duration
      : `${movie.duration}:00`;

    const movieData = {
      ...movie,
      duration: formattedDuration,
    };

    axios.post('http://localhost:8080/admin/addNewMovie', movieData)
      .then(response => {
        setSuccess('Movie added successfully!');
        console.log('Movie Added:', response.data);
        setMovie({
          title: '',
          releaseDate: '',
          duration: '',
          description: '',
          rating: '',
          language: '',
        });
      })
      .catch(error => {
        setError('Error adding movie. Please try again.');
        console.error('Error adding movie:', error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-8 text-center">Add Movie</h1>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        {success && <p className="mb-4 text-green-500">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={movie.title}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter movie title"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Release Date</label>
            <input
              type="date"
              name="releaseDate"
              value={movie.releaseDate}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Duration (HH:MM:SS)</label>
            <input
              type="time" 
              name="duration"
              value={movie.duration}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              step="1" // Allows input in HH:MM:SS format
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={movie.description}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter movie description"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <input
              type="number"
              step="0.1"
              name="rating"
              value={movie.rating}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter movie rating"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Language</label>
            <input
              type="text"
              name="language"
              value={movie.language}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter movie language"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors duration-300"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
}
