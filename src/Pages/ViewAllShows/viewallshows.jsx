import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ViewAllShows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Fetch shows data from the API
    axios.get('http://localhost:8080/admin/getAllShows')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the shows!', error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">All Shows</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="py-4 px-6 text-left">Show ID</th>
              <th className="py-4 px-6 text-left">Show Date</th>
              <th className="py-4 px-6 text-left">Show Time</th>
              <th className="py-4 px-6 text-left">Movie ID</th>
              <th className="py-4 px-6 text-left">Screen ID</th>
            </tr>
          </thead>
          <tbody>
            {shows.map(show => (
              <tr key={show.showId} className="border-b border-gray-700">
                <td className="py-4 px-6">{show.showId}</td>
                <td className="py-4 px-6">{show.showDate}</td>
                <td className="py-4 px-6">{show.showTime}</td>
                <td className="py-4 px-6">{show.movie_id}</td> {/* Accessing movie_id */}
                <td className="py-4 px-6">{show.screen_id}</td> {/* Accessing screen_id */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
