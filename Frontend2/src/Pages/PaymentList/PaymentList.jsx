import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PaymentList = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch payment data from your API
    axios.get('/api/payments') // Replace with your actual API endpoint
      .then(response => setPayments(response.data))
      .catch(error => console.error('Error fetching payments:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-semibold text-gray-900">Payment List</h2>
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
                <tr key={payment.payment_id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.payment_id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.user?.user_id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(payment.date_time).toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${payment.total_amount.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.payment_mode}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.ticket?.ticket_id}</td>
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
