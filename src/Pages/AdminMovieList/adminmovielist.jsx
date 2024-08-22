import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminMovieList = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Fetch the movie list from the backend
    axios.get('http://localhost:8080/admin/getAllMovies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  const deleteMovie = (movieId) => {
    // Confirm before deleting
    if (window.confirm("Are you sure you want to delete this movie?")) {
      // Delete the movie from the backend
      axios.delete(`http://localhost:8080/admin/deleteMovie/${movieId}`)
        .then(response => {
          // Remove the movie from the state
          setMovies(movies.filter(movie => movie.movieId !== movieId));
        })
        .catch(error => {
          console.error('Error deleting movie:', error);
        });
    }
  };

  const handleUpdate = (movie) => {
    // Navigate to the AddMovie page with movie details for editing
    navigate('/addmovie', { state: { movie } });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Movie List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Duration</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-left">Rating</th>
              <th className="py-3 px-6 text-left">Language</th>
              <th className="py-3 px-6 text-left">Release Date</th>
              <th className="py-3 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.movieId} className="border-b">
                <td className="py-3 px-6">{movie.title}</td>
                <td className="py-3 px-6">{movie.duration}</td>
                <td className="py-3 px-6">{movie.description}</td>
                <td className="py-3 px-6">{movie.rating}</td>
                <td className="py-3 px-6">{movie.language}</td>
                <td className="py-3 px-6">{movie.releaseDate}</td>
                <td className="py-3 px-6 text-right">
                  <button
                    onClick={() => handleUpdate(movie)}
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteMovie(movie.movieId)}
                    className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminMovieList;
