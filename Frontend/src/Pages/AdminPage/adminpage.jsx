import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900">
      {/* Background with gradient and blur effect */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-blue-800 to-gray-900" />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40" />
        {/* Blur effect */}
        <div className="absolute inset-0 backdrop-blur-md" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-white shadow-lg">Admin Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          <Link to='/addmovie'>
            <button className="w-full py-6 px-8 bg-blue-700 text-white font-semibold text-lg rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-blue-600 hover:shadow-xl">
              Add Movie
            </button>
          </Link>
          <Link to='/adminmovielist'>
            <button className="w-full py-6 px-8 bg-red-700 text-white font-semibold text-lg rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-red-600 hover:shadow-xl">
              List All Movies
            </button>
          </Link>
          <Link to='/addshow'>
            <button className="w-full py-6 px-8 bg-green-700 text-white font-semibold text-lg rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-green-600 hover:shadow-xl">
              Add Show
            </button>
          </Link>
          <Link to='/contactlist'>
            <button className="w-full py-6 px-8 bg-red-700 text-white font-semibold text-lg rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-red-600 hover:shadow-xl">
              Contact List
            </button>
          </Link>
          <Link to='/userlist'>
            <button className="w-full py-6 px-8 bg-indigo-700 text-white font-semibold text-lg rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-indigo-600 hover:shadow-xl">
              View User List
            </button>
          </Link>
          <Link to='/paymentlist'>
            <button className="w-full py-6 px-8 bg-purple-700 text-white font-semibold text-lg rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-purple-600 hover:shadow-xl">
              View Payment List
            </button>
          </Link>
          <Link to='/viewallshows'>
            <button className="w-full py-6 px-8 bg-teal-700 text-white font-semibold text-lg rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-teal-600 hover:shadow-xl">
              List All Shows
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
