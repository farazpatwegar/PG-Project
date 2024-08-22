import React, { useEffect, useState } from 'react';

const ETicket = () => {
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    const total = sessionStorage.getItem('total');
    const selectedSeats = sessionStorage.getItem('selectedSeats');
    const movie = sessionStorage.getItem('Movie');
    const user = sessionStorage.getItem('user');
    const seatPrices = sessionStorage.getItem('seatPrices');

    if (total && selectedSeats && movie && user && seatPrices) {
      setTicketData({
        total: JSON.parse(total),
        selectedSeats: JSON.parse(selectedSeats),
        movie: JSON.parse(movie),
        user: JSON.parse(user),
        seatPrices: JSON.parse(seatPrices),
      });
    }
  }, []);

  if (!ticketData) {
    return <div className="text-white text-center py-10">Loading...</div>;
  }

  const { selectedSeats, movie, seatPrices } = ticketData;

  return (
    <div className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {selectedSeats.map((seat, index) => (
            <div
              key={index}
              className="ticket bg-gray-900 text-white rounded-lg shadow-lg p-4 flex flex-col"
            >
              <div className="flex-shrink-0">
                <img
                  src="https://media.istockphoto.com/id/2150387445/photo/classic-movie-night-essentials-with-clapperboard-popcorn-and-film-reel-on-blue-background.jpg?s=2048x2048&w=is&k=20&c=SccRVJuEXo3UJ4u9oof__nriSULKlhRocHOfrE8fWFM="
                  alt={`Movie: ${movie.title}`}
                  className="w-full h-40 object-cover rounded-lg border-4 border-yellow-500"
                />
              </div>
              <div className="mt-4 flex flex-col items-center">
                <p className="cinema text-xs font-semibold text-gray-400">TickItNow Entertainment PRESENTS</p>
                <p className="movie-title text-xl font-bold mt-2 text-yellow-300">{movie.title}</p>
                <p className="text-sm font-medium text-gray-400">{movie.releaseDate} | {movie.duration}</p>
              </div>

              <div className="mt-4 flex justify-between text-sm">
                <div>
                  <p className="font-semibold text-gray-300">SCREEN</p>
                  <p className="text-yellow-400">01</p> {/* Replace with actual screen data */}
                </div>
                <div>
                  <p className="font-semibold text-gray-300">ROW</p>
                  <p className="text-yellow-400">{seat.split('_')[0]}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-300">SEAT</p>
                  <p className="text-yellow-400">{seat.split('_')[1]}</p>
                </div>
              </div>

              <div className="mt-4 flex justify-between text-sm">
                <div>
                  <p className="font-semibold text-gray-300">PRICE</p>
                  <p className="text-yellow-400">Rs. {seatPrices[index]}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center">
                <div className="barcode w-full flex justify-center mb-2">
                  {[...Array(100)].map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-8 w-0.5 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-600'}`}
                    ></div>
                  ))}
                </div>
                <div className="numbers text-center text-yellow-300">
                  {[...'91737544454147852'].map((num, i) => (
                    <span key={i} className="px-1">{num}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ETicket;
