import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link to='/addmovie'>
        <button className="w-full py-6 px-8 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-500 transition-colors duration-300">
          Add Movie
        </button>
        </Link>
        <Link to='/adminmovielist'>
        <button className="w-full py-6 px-8 bg-red-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-red-500 transition-colors duration-300">
          List All Movie
        </button>
        </Link>
        <Link to='/addshow'>
        <button className="w-full py-6 px-8 bg-green-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-green-500 transition-colors duration-300">
          Add Show
        </button>
        </Link>
        <button className="w-full py-6 px-8 bg-red-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-red-500 transition-colors duration-300">
          Delete Show
        </button>
        <Link to='/userlist'>
        <button className="w-full py-6 px-8 bg-indigo-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-indigo-500 transition-colors duration-300">
          View User List
        </button>
        </Link>
        <Link to='/paymentlist'>
        <button className="w-full py-6 px-8 bg-purple-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-purple-500 transition-colors duration-300">
          View Payment List
        </button>
        </Link>
      </div>
    </div>
  );
}
