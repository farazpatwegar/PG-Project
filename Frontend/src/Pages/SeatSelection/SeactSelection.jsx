import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatPricesArray, setSeatPricesArray] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const seatMap = [
    'ssssssssss', // Silver seats
    'ssssssssss',
    '__________',
    'gggggggg__', // Gold seats
    'gggggggggg',
    'gggggggggg',
    'pppppppppp', // Premium seats
    'pppppppppp',
    'pppppppppp',
    '__pppppp__'
  ];

  const seatPrices = {
    s: 110, // Silver seat price
    g: 150, // Gold seat price
    p: 200, // Premium seat price
  };

  const handleSeatClick = (rowIndex, seatIndex) => {
    const seatId = `${rowIndex}_${seatIndex}`;
    const seatType = seatMap[rowIndex][seatIndex];
    const seatPrice = seatPrices[seatType];

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
      setSeatPricesArray(seatPricesArray.filter(price => price !== seatPrice));
      setTotal(total - seatPrice);
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
      setSeatPricesArray([...seatPricesArray, seatPrice]);
      setTotal(total + seatPrice);
    }
  };

  const renderSeatMap = () => {
    return seatMap.map((row, rowIndex) => (
      <div key={rowIndex} className="flex justify-center mb-2">
        {row.split('').map((seat, seatIndex) => (
          <div
            key={seatIndex}
            className={`h-10 w-10 m-1 flex items-center justify-center rounded ${
              seat !== '_'
                ? selectedSeats.includes(`${rowIndex}_${seatIndex}`)
                  ? 'bg-blue-600'
                  : seat === 's'
                  ? 'bg-gray-600 cursor-pointer'
                  : seat === 'g'
                  ? 'bg-yellow-600 cursor-pointer'
                  : 'bg-red-600 cursor-pointer'
                : 'bg-gray-800'
            } text-white`}
            onClick={() => seat !== '_' && handleSeatClick(rowIndex, seatIndex)}
          >
            {seat !== '_' ? (rowIndex * 10 + seatIndex + 1) : ''}
          </div>
        ))}
      </div>
    ));
  };

  const handlePaymentClick = () => {
    // Save selected seats, prices, and total to session storage
    sessionStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
    sessionStorage.setItem('seatPrices', JSON.stringify(seatPricesArray));
    sessionStorage.setItem('total', total);

    // Navigate to the payment page
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-4xl font-bold text-center mb-8">Seat Booking</h2>
      <div className="flex flex-col items-center">
        <div className="bg-gray-800 shadow-lg p-8 rounded-lg w-full max-w-4xl">
          <div className="text-center mb-6 font-bold text-xl text-red-600">
            <div className="p-4 border-4 border-red-600 bg-gray-900 text-white rounded-md">
              SCREEN
            </div>
          </div>
          <div className="flex flex-col items-center">
            {renderSeatMap()}
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-bold">Booking Details:</h3>
            <p className="mt-2">
              Selected Seats: {selectedSeats.join(', ')}
            </p>
            <p className="mt-2">
              Seat Prices: {seatPricesArray.join(', ')}
            </p>
            <p className="mt-2">
              Total: <span className="font-bold text-lg">₹{total}</span>
            </p>
            <button
              onClick={handlePaymentClick}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
            >
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
