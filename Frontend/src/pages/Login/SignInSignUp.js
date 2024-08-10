import React, { useState } from 'react';
import './SignInSignUp.css';
import { Helmet } from 'react-helmet';
// import 'path-to-your-css/style-starter.css';
// import 'path-to-your-css/sign-in.css';

const SignInSignUp = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [signUpForm, setSignUpForm] = useState({ name: '', email: '', password: '' });
  const [signInForm, setSignInForm] = useState({ email: '', password: '' });

  const asAlertMsg = ({ type, title, message, button }) => {
    // Replace this with your custom alert logic
    alert(`${title}: ${message}`);
  };

  const handleSignUpChange = (e) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  };

  const handleSignInChange = (e) => {
    setSignInForm({ ...signInForm, [e.target.name]: e.target.value });
  };

  const signUpValidateForm = (e) => {
    e.preventDefault();
    if (signUpForm.name === '') {
      asAlertMsg({
        type: 'error',
        title: 'Empty Field',
        message: "'Name' cannot be empty!!",
        button: {
          title: 'Close Button',
          bg: 'Cancel Button',
        },
      });
      return false;
    }
    if (signUpForm.email === '') {
      asAlertMsg({
        type: 'error',
        title: 'Empty Field',
        message: "'E-mail' cannot be empty!!",
        button: {
          title: 'Close Button',
          bg: 'Cancel Button',
        },
      });
      return false;
    }
    if (signUpForm.password === '') {
      asAlertMsg({
        type: 'error',
        title: 'Empty Field',
        message: "'Password' cannot be empty!!",
        button: {
          title: 'Close Button',
          bg: 'Cancel Button',
        },
      });
      return false;
    }
    // Submit form logic here
  };

  const signInValidateForm = (e) => {
    e.preventDefault();
    if (signInForm.email === '') {
      asAlertMsg({
        type: 'error',
        title: 'Empty Field',
        message: "'E-mail' cannot be empty!!",
        button: {
          title: 'Close Button',
          bg: 'Cancel Button',
        },
      });
      return false;
    }
    if (signInForm.password === '') {
      asAlertMsg({
        type: 'error',
        title: 'Empty Field',
        message: "'Password' cannot be empty!!",
        button: {
          title: 'Close Button',
          bg: 'Cancel Button',
        },
      });
      return false;
    }
    // Submit form logic here
  };

  return (
    <div>
            <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
        />
      </Helmet>
    <div className={`container_signup_signin ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container_signup_signin">
      <div className="form-container sign-up-container">
        <form onSubmit={signUpValidateForm}>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={signUpForm.name}
            onChange={handleSignUpChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={signUpForm.email}
            onChange={handleSignUpChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={signUpForm.password}
            onChange={handleSignUpChange}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={signInValidateForm}>
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={signInForm.email}
            onChange={handleSignInChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={signInForm.password}
            onChange={handleSignInChange}
          />
          <a href="#">Forgot your password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your login details</p>
            <button className="ghost" onClick={() => setIsRightPanelActive(false)}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Register and book your tickets now!!!</p>
            <button className="ghost" onClick={() => setIsRightPanelActive(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignInSignUp;
