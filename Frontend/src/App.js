import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInSignUp from './pages/Login/SignInSignUp.js';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import './assets/css/style-starter.css';
import './assets/css/sign-in.css';
import Home from './pages/Home/Home.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/Home" element={<Home/>} />
        <Route path="/SignInSignUp" element={<SignInSignUp />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
