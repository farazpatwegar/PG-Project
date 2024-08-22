// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/login.jsx';
import About from './Pages/About/about.jsx';
import ContactUs from './Pages/ContactUs/contactus.jsx';
import Navbars from './Pages/Navbars/Navbars';
import Movie from './Pages/Movie/MoviePage.jsx';
import SignUp from './Pages/SignUp/signup.jsx';
import Footer from './Pages/Footer/footer.jsx';
import SeatSelection from './Pages/SeatSelection/SeactSelection.jsx';
import PaymentPage from './Payment/payment.jsx';
import ETicket from './Ticket/ticket.jsx';
import ShowSelection from './Pages/Show/showpage.jsx';
import HomePage from './Pages/Home/Home.jsx';
import SearchPage from './Pages/Search/search.jsx';
import AdminPage from './Pages/AdminPage/adminpage.jsx';
import AddMovie from './Pages/AddMovie/AddMovie.jsx';
import AdminMovieList from './Pages/AdminMovieList/adminmovielist.jsx';
import PaymentList from './Pages/PaymentList/PaymentList.jsx';
import UserList from './Pages/UserList/userlist.jsx';
import AddShow from './Pages/AddShow/addshow.jsx';
import UpdateProfile from './Pages/UpdateProfile/updateprofile.jsx';
import ContactList from './Pages/ContactList/contactlist.jsx';
import ViewAllShows from './Pages/ViewAllShows/viewallshows.jsx';

function App() {
  const isLoggedIn = false;
  return (
    <Router>
      <div className="relative min-h-screen bg-gray-100">
      <Navbars isLoggedIn={isLoggedIn} />
        <div className="pt-16"> {/* Adjust padding-top to match the height of the fixed navbar */}
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path='/movie' element={<Movie/>} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path='/seatselection' element={<SeatSelection />} />
            <Route path='/payment' element={<PaymentPage />} />
            <Route path='/eticket' element={<ETicket/>} />
            <Route path='/showselection' element={<ShowSelection />} />
            <Route path='/search' element={<SearchPage/>} />
            <Route path='/adminpage' element={<AdminPage/>} />
            <Route path='/addmovie' element={<AddMovie/>} />
            <Route path='/adminmovielist' element={<AdminMovieList/>} />
            <Route path='/paymentlist' element={<PaymentList/>} />
            <Route path='/userlist' element={<UserList/>} />
            <Route path='/addshow' element={<AddShow/>} />
            <Route path='/updateprofile' element={<UpdateProfile/>} />
            <Route path='/contactlist' element={<ContactList/>} />
            <Route path='/viewallshows' element={<ViewAllShows/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
