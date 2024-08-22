import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PaymentPage = () => {
  const navigate = useNavigate();

  // Retrieve total amount and user ID from session storage
  const totalAmount = sessionStorage.getItem('total') || 0;
  const user = sessionStorage.getItem('user') || 0;
  const userId = JSON.parse(user)?.userId;

  // State to manage form inputs and errors
  const [formValues, setFormValues] = useState({
    cardHolderName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: '',
    paymentMethod: 'card', // Default payment method
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    if (formValues.paymentMethod === 'card') {
      if (!formValues.cardHolderName) newErrors.cardHolderName = 'Cardholder name is required';
      if (!formValues.cardNumber) newErrors.cardNumber = 'Credit card number is required';
      else if (!/^\d{16}$/.test(formValues.cardNumber)) newErrors.cardNumber = 'Credit card number must be 16 digits';
      if (!formValues.expMonth) newErrors.expMonth = 'Expiration month is required';
      else if (!/^(0[1-9]|1[0-2])$/.test(formValues.expMonth)) newErrors.expMonth = 'Expiration month must be between 01 and 12';
      if (!formValues.expYear) newErrors.expYear = 'Expiration year is required';
      else if (!/^\d{4}$/.test(formValues.expYear)) newErrors.expYear = 'Expiration year must be 4 digits';
      if (!formValues.cvv) newErrors.cvv = 'CVV is required';
      else if (!/^\d{3}$/.test(formValues.cvv)) newErrors.cvv = 'CVV must be 3 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const paymentDetails = {
        paymentId: 0,
        totalAmount: parseFloat(totalAmount),
        paymentMethod: formValues.paymentMethod,
        paymentDateTime: new Date().toISOString(), // Current date and time
        cardHolderName: formValues.cardHolderName,
        cardNumber: formValues.cardNumber,
        expiryMonth: parseInt(formValues.expMonth, 10),
        expiryYear: parseInt(formValues.expYear, 10),
        cvv: parseInt(formValues.cvv, 10),
        user_id: parseInt(userId, 10),
      };
      try {
        console.log(paymentDetails);
        await axios.post('http://localhost:8080/customer/addNewPaymentDetails', paymentDetails);
        navigate('/eticket');
      } catch (error) {
        console.error('Error submitting payment details:', error);
        // Set a more specific error message from the server
        setServerError(error.response?.data?.message || 'An error occurred while processing your payment. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
      <form className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full" onSubmit={handleSubmit}>
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
                <input
                  type="radio"
                  id="card"
                  name="paymentMethod"
                  value="card"
                  checked={formValues.paymentMethod === 'card'}
                  onChange={handleInputChange}
                />
                <label htmlFor="card" className="ml-2">Pay ₹{totalAmount} with credit card</label>
              </div>
            </label>

            <label className="method paypal flex items-center p-2 border rounded cursor-pointer">
              <div className="icon-container">
                <i className="fa fa-paypal text-blue-800"></i>
              </div>
              <div className="radio-input ml-4">
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  checked={formValues.paymentMethod === 'paypal'}
                  onChange={handleInputChange}
                />
                <label htmlFor="paypal" className="ml-2">Pay $30.00 with PayPal</label>
              </div>
            </label>
          </div>

          {formValues.paymentMethod === 'card' && (
            <div className="space-y-4">
              <div>
                <label htmlFor="cardHolderName" className="block font-semibold">Cardholder's Name</label>
                <input
                  type="text"
                  id="cardHolderName"
                  name="cardHolderName"
                  placeholder="Firstname Lastname"
                  className="w-full p-2 border rounded mt-1"
                  value={formValues.cardHolderName}
                  onChange={handleInputChange}
                  required
                />
                {errors.cardHolderName && <p className="text-red-600">{errors.cardHolderName}</p>}
              </div>

              <div>
                <label htmlFor="cardNumber" className="block font-semibold">Credit card number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  className="w-full p-2 border rounded mt-1"
                  value={formValues.cardNumber}
                  onChange={handleInputChange}
                  required
                />
                {errors.cardNumber && <p className="text-red-600">{errors.cardNumber}</p>}
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="expMonth" className="block font-semibold">Exp Month</label>
                  <input
                    type="text"
                    id="expMonth"
                    name="expMonth"
                    placeholder="MM"
                    className="w-full p-2 border rounded mt-1"
                    value={formValues.expMonth}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.expMonth && <p className="text-red-600">{errors.expMonth}</p>}
                </div>

                <div className="w-1/2">
                  <label htmlFor="expYear" className="block font-semibold">Exp Year</label>
                  <input
                    type="text"
                    id="expYear"
                    name="expYear"
                    placeholder="YYYY"
                    className="w-full p-2 border rounded mt-1"
                    value={formValues.expYear}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.expYear && <p className="text-red-600">{errors.expYear}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="cvv" className="block font-semibold">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="xxx"
                  className="w-full p-2 border rounded mt-1"
                  value={formValues.cvv}
                  onChange={handleInputChange}
                  required
                />
                {errors.cvv && <p className="text-red-600">{errors.cvv}</p>}
              </div>
            </div>
          )}

          {serverError && <p className="text-red-600">{serverError}</p>}

          <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600">Submit Payment</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;
