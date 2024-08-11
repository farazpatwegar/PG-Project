import React from 'react';
import './ContactUs.css';
// import './ThemeSwitch.css'; // if using a theme switch
import { validateForm, triggerAnim } from './contactUsHelpers'; // helpers for validation and animations

const ContactUs = () => {
  return (
    <div className="container">
      <header id="site-header" className="w3l-header fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-3">
          <div className="container">
            <h1><a className="navbar-brand" href="index.html"><span className="fa fa-play icon-log" aria-hidden="true"></span> MyShowz</a></h1>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="fa icon-expand fa-bars"></span>
              <span className="fa icon-close fa-times"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="movies.html">Movies</a></li>
                <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                <li className="nav-item active"><a className="nav-link" href="Contact_Us.html">Contact</a></li>
              </ul>
              <div className="Login_SignUp" id="login" style={{ fontSize: '2rem', display: 'inline-block', position: 'relative' }}>
                <a className="nav-link" href="sign_in.html"><i className="fa fa-user-circle-o"></i></a>
              </div>
            </div>
            <div className="mobile-position">
              <nav className="navigation">
                <div className="theme-switch-wrapper">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="mode-container">
                      <i className="gg-sun"></i>
                      <i className="gg-moon"></i>
                    </div>
                  </label>
                </div>
              </nav>
            </div>
          </div>
        </nav>
      </header>
      <div className="contact-form">
        <h4>Contact Us</h4>
        <h3>Leave a Message</h3>
        <p>If you have a question regarding our services, feel free to contact us using the form below.</p>
        <form name="contact-us-form" onSubmit={validateForm}>
          <div className="row100" id="fname-row100">
            <div className="col">
              <div className="inputBox" id="fname-inputBox">
                <input type="text" name="fname" onClick={() => triggerAnim('fname')} />
                <span className="text">First Name</span>
                <span className="line" id="fname-line"></span>
              </div>
            </div>
            <div className="col">
              <div className="inputBox" id="lname-inputBox">
                <input type="text" name="lname" onClick={() => triggerAnim('lname')} />
                <span className="text">Last Name</span>
                <span className="line" id="lname-line"></span>
              </div>
            </div>
          </div>
          <div className="row100" id="email-row100">
            <div className="col">
              <div className="inputBox" id="email-inputBox">
                <input type="email" name="email" pattern="[^ @]*@[^ @]*" onClick={() => triggerAnim('email')} />
                <span className="text">Email ID</span>
                <span className="line" id="email-line"></span>
              </div>
            </div>
            <div className="col">
              <div className="inputBox" id="tel-inputBox">
                <input type="tel" name="m-num" onClick={() => triggerAnim('tel')} />
                <span className="text">Mobile Number</span>
                <span className="line" id="tel-line"></span>
              </div>
            </div>
          </div>
          <div className="row100">
            <div className="col">
              <div className="inputBox textarea">
                <textarea name="msg"></textarea>
                <span className="text">Type your message Here...</span>
                <span className="line"></span>
              </div>
            </div>
          </div>
          <div className="row100">
            <div className="col">
              <div className="submitbutton">
                <button className="btn submitbtn" type="submit">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
