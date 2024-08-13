import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h3 className="text-2xl font-bold text-center mb-6">Payment</h3>

        <div className="space-y-4">
          <div className="flex justify-between">
            <label className="method card flex items-center p-2 border rounded cursor-pointer">
              <div className="icon-container flex space-x-2">
                <i className="fa fa-cc-visa text-blue-800"></i>
                <i className="fa fa-cc-amex text-blue-600"></i>
                <i className="fa fa-cc-mastercard text-red-600"></i>
                <i className="fa fa-cc-discover text-orange-600"></i>
              </div>
              <div className="radio-input ml-4">
                <input type="radio" id="card" name="paymentMethod" />
                <label htmlFor="card" className="ml-2">Pay ₹200.00 with credit card</label>
              </div>
            </label>

            <label className="method paypal flex items-center p-2 border rounded cursor-pointer">
              <div className="icon-container">
                <i className="fa fa-paypal text-blue-800"></i>
              </div>
              <div className="radio-input ml-4">
                <input type="radio" id="paypal" name="paymentMethod" checked />
                <label htmlFor="paypal" className="ml-2">Pay $30.00 with PayPal</label>
              </div>
            </label>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="cname" className="block font-semibold">Cardholder's Name</label>
              <input
                type="text"
                id="cname"
                name="cardname"
                placeholder="Firstname Lastname"
                className="w-full p-2 border rounded mt-1"
                required
              />
            </div>

            <div>
              <label htmlFor="ccnum" className="block font-semibold">Credit card number</label>
              <input
                type="text"
                id="ccnum"
                name="cardnumber"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                className="w-full p-2 border rounded mt-1"
                required
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="expmonth" className="block font-semibold">Exp Month</label>
                <input
                  type="text"
                  id="expmonth"
                  name="expmonth"
                  placeholder="September"
                  className="w-full p-2 border rounded mt-1"
                  required
                />
              </div>

              <div className="w-1/2">
                <label htmlFor="expyear" className="block font-semibold">Exp Year</label>
                <input
                  type="text"
                  id="expyear"
                  name="expyear"
                  placeholder="yyyy"
                  className="w-full p-2 border rounded mt-1"
                  required
                />
              </div>
            </div>

            <div className="w-1/2">
              <label htmlFor="cvv" className="block font-semibold">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder="xxx"
                className="w-full p-2 border rounded mt-1"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <Link
            to="/Eticket"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center"
          >
            Confirm Payment
          </Link>
          <button
            type="button"
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            onClick={() => window.location.href = '/'}
          >
            Cancel Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
