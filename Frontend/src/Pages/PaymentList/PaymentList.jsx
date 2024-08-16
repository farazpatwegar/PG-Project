import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PaymentList = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch payment data from your API
    axios.get('http://localhost:8080/admin/getAllPayments') // Updated API endpoint
      .then(response => setPayments(response.data))
      .catch(error => console.error('Error fetching payments:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg mb-4">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-semibold text-gray-900">Payment List</h2>
          <Link to="/adminpage">
            <button
              className="mt-4 mb-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
            >
              Back
            </button>
          </Link>
        </div>
        <div className="border-t border-gray-200">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Mode</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticket ID</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {payments.map(payment => (
                <tr key={payment.paymentId}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.paymentId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.user?.userId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(payment.dateTime).toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${payment.totalAmount.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.paymentMode}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.ticket?.ticketId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentList;
