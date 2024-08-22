import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dialog } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

const ShowSelectionPage = () => {
  const [availableShows, setAvailableShows] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const getMovieFromSessionStorage = () => {
    const movieDataString = sessionStorage.getItem('Movie');
    return movieDataString ? JSON.parse(movieDataString) : null;
  };

  const getUserFromSessionStorage = () => {
    const userDataString = sessionStorage.getItem('user');
    return userDataString ? JSON.parse(userDataString) : null;
  };

  useEffect(() => {
    const fetchAvailableShows = async () => {
      try {
        const response = await axios.get('http://localhost:8080/admin/getAllShows');
        const movie = getMovieFromSessionStorage();
        const movieId = movie?.movieId; 
        if (movieId) {
          const filteredShows = response.data.filter(show => show.movie_id === parseInt(movieId)); // Filter shows based on movie ID
          setAvailableShows(filteredShows);
        }
      } catch (error) {
        console.error('Error fetching available shows:', error);
      }
    };

    fetchAvailableShows();
  }, []);

  const handleDateSelect = (date) => {
    if (selectedDate === date) {
      setSelectedDate(''); // Deselect if same date is clicked again
      setSelectedTime(''); // Clear selected time if date is deselected
    } else {
      setSelectedDate(date);
      setSelectedTime(''); // Reset time when date changes
    }
  };

  const handleTimeSelect = (time) => {
    if (selectedTime === time) {
      setSelectedTime(''); // Deselect if same time is clicked again
    } else {
      setSelectedTime(time);
    }
  };

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      setShowModal(true);
    }
  };

  const handleModalConfirm = () => {
    const user = getUserFromSessionStorage();

    if (user) {
      navigate('/seatselection', {
        state: { date: selectedDate, time: selectedTime }
      });
    } else {
      navigate('/login'); // Redirect to login page if user is not found in session storage
    }
  };

  const dates = [...new Set(availableShows.map(show => show.showDate))];
  const times = availableShows
    .filter(show => show.showDate === selectedDate)
    .map(show => show.showTime);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Select Show</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-medium text-gray-700 mb-2">Date</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {dates.map((date) => (
              <button
                key={date}
                onClick={() => handleDateSelect(date)}
                className={`py-2 px-4 rounded-md shadow-sm ${
                  selectedDate === date
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                } hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {date}
              </button>
            ))}
          </div>
        </div>
        {selectedDate && (
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-2">Time</h2>
            <div className="grid grid-cols-2 gap-4">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className={`py-2 px-4 rounded-md shadow-sm ${
                    selectedTime === time
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-800'
                  } hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}
        <button
          onClick={handleConfirm}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={!selectedDate || !selectedTime}
        >
          Confirm
        </button>
      </div>

      {/* Modal for confirmation */}
      <Dialog open={showModal} onClose={() => setShowModal(false)}>
        <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-4">
            <Dialog.Title className="text-lg font-bold">Show Confirmed</Dialog.Title>
            <p className="mt-2 text-gray-600">
              You have selected:
              <br />
              Date: {selectedDate}
              <br />
              Time: {selectedTime}
            </p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => {
                  setShowModal(false);
                  handleModalConfirm(); // Check user existence and navigate accordingly
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Proceed to Seat Selection
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default ShowSelectionPage;
