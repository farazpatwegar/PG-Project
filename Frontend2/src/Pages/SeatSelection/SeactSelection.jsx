import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SeatSelection = () => {
  const price = 110;
  const [selectedSeats, setSelectedSeats] = useState([]);
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
      setTotal(total - seatPrice);
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
      setTotal(total + seatPrice);
    }
  };

  const renderSeatMap = () => {
    return seatMap.map((row, rowIndex) => (
      <div key={rowIndex} className="flex justify-center flex-wrap"> {/* Ensure seats wrap properly */}
        {row.split('').map((seat, seatIndex) => (
          <div
            key={seatIndex}
            className={`h-8 w-8 m-1 flex items-center justify-center rounded ${
              seat !== '_'
                ? selectedSeats.includes(`${rowIndex}_${seatIndex}`)
                  ? 'bg-blue-500'
                  : seat === 's'
                  ? 'bg-green-500 cursor-pointer'
                  : seat === 'g'
                  ? 'bg-yellow-500 cursor-pointer'
                  : 'bg-red-500 cursor-pointer'
                : 'bg-gray-200'
            }`}
            onClick={() => seat !== '_' && handleSeatClick(rowIndex, seatIndex)}
          >
            {seat !== '_' ? seatIndex + 1 : ''}
          </div>
        ))}
      </div>
    ));
  };

  const handlePaymentClick = () => {
    // Navigate to payment page
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Seat Booking</h2>
      <div className="flex flex-col items-center">
        <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-4xl">
          <div className="text-center mb-6 font-bold text-xl text-red-500">SCREEN</div>
          <div className="flex flex-wrap justify-center">{renderSeatMap()}</div> {/* Updated */}
          <div className="mt-8">
            <h3 className="text-lg font-bold">Booking Details:</h3>
            <p className="mt-2">
              Selected Seats: {selectedSeats.join(', ')}
            </p>
            <p className="mt-2">
              Total: <span className="font-bold text-lg">₹{total}</span>
            </p>
            <button
              onClick={handlePaymentClick}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
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
