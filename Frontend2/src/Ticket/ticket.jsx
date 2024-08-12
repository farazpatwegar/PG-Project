import React from 'react';

const ETicket = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="ticket max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="holes-top h-4 bg-gray-200 rounded-t-lg"></div>
        
        <div className="title text-center">
          <p className="cinema text-lg font-semibold">MyShowz Entertainment PRESENTS</p>
          <p className="movie-title text-2xl font-bold mt-2">Movie Name</p>
        </div>
        
        <div className="poster mt-6">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/25240/only-god-forgives.jpg"
            alt="Movie: Only God Forgives"
            className="w-full rounded-lg"
          />
        </div>
        
        <div className="info mt-6 space-y-4">
          <table className="w-full text-center">
            <thead>
              <tr>
                <th className="font-semibold">SCREEN</th>
                <th className="font-semibold">ROW</th>
                <th className="font-semibold">SEAT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bigger text-lg">18</td>
                <td className="bigger text-lg">H</td>
                <td className="bigger text-lg">24</td>
              </tr>
            </tbody>
          </table>
          
          <table className="w-full text-center">
            <thead>
              <tr>
                <th className="font-semibold">PRICE</th>
                <th className="font-semibold">DATE</th>
                <th className="font-semibold">TIME</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-lg">Rs. 12.00</td>
                <td className="text-lg">4/13/21</td>
                <td className="text-lg">19:30</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="holes-lower h-4 bg-gray-200 mt-6 rounded-b-lg"></div>
        
        <div className="serial mt-6">
          <table className="barcode mx-auto text-center">
            <tbody>
              <tr className="flex justify-center space-x-0.5">
                {/* Generate barcode lines */}
                {[...Array(100)].map((_, index) => (
                  <td
                    key={index}
                    className={`h-24 w-0.5 ${index % 2 === 0 ? 'bg-black' : 'bg-white'}`}
                  ></td>
                ))}
              </tr>
            </tbody>
          </table>
          <table className="numbers w-full text-center mt-4">
            <tbody>
              <tr>
                <td className="px-1">9</td>
                <td className="px-1">1</td>
                <td className="px-1">7</td>
                <td className="px-1">3</td>
                <td className="px-1">7</td>
                <td className="px-1">5</td>
                <td className="px-1">4</td>
                <td className="px-1">4</td>
                <td className="px-1">4</td>
                <td className="px-1">5</td>
                <td className="px-1">4</td>
                <td className="px-1">1</td>
                <td className="px-1">4</td>
                <td className="px-1">7</td>
                <td className="px-1">8</td>
                <td className="px-1">7</td>
                <td className="px-1">3</td>
                <td className="px-1">4</td>
                <td className="px-1">1</td>
                <td className="px-1">4</td>
                <td className="px-1">5</td>
                <td className="px-1">2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ETicket;
