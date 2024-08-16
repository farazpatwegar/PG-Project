import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from your API
    axios.get('http://localhost:8080/admin/getAllUsers') // Replace with your actual API endpoint
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <Link to='/adminpage'>
        <button
          className="mb-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
        >
          Back
        </button>
      </Link>
      {/* User List Table */}
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-semibold text-gray-900">User List</h2>
        </div>
        <div className="border-t border-gray-200">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map(user => (
                <tr key={user.userId}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.userId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.firstName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.lastName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.contactNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
