'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/admin/getAllContactDetails')
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        setError('Failed to load contacts');
      });
  }, []);

  const handleBack = () => {
    window.history.back(); // Navigate to the previous page
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="mb-6">
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
        >
          Back
        </button>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact List</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <ul className="space-y-4">
        {contacts.map(contact => (
          <li key={contact.contactDetailsId} className="p-4 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">{contact.name}</h3>
            <p className="text-gray-600"><strong>Email:</strong> {contact.email}</p>
            <p className="text-gray-600"><strong>Message:</strong> {contact.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
