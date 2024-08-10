import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate('/SignInSignUp');
      // Scroll to the button after navigation
      setTimeout(() => {
        document.querySelector('[ref="loginButtonRef"]').scrollIntoView({ behavior: 'smooth' });
      }, 100); // Adjust timeout as needed
    };
  return (
    <header id="site-header" className="w3l-header fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-3">
        <div className="container">
          <h1><a className="navbar-brand" href="index.html"><span className="fa fa-play icon-log" aria-hidden="true"></span>TickItNow</a></h1>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="fa icon-expand fa-bars"></span>
            <span className="fa icon-close fa-times"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
              <li className="nav-item active"><a className="nav-link" href="movies.html">Movies</a></li>
              <li className="nav-item"><Link className="nav-link" to="/AboutPage">About</Link></li>
              <li className="nav-item"><a className="nav-link" href="Contact_Us.html">Contact</a></li>
            </ul>
            <div className="search-right">
              <a href="#search" className="btn search-hny mr-lg-3 mt-lg-0 mt-4" title="search">Search <span className="fa fa-search ml-3" aria-hidden="true"></span></a>
              <div id="search" className="pop-overlay">
                <div className="popup">
                  <form action="#" method="post" className="search-box">
                    <input type="search" placeholder="Search your Keyword" name="search" required="required" autoFocus />
                    <button type="submit" className="btn"><span className="fa fa-search" aria-hidden="true"></span></button>
                  </form>
                  <div className="browse-items">
                    <h3 className="hny-title two mt-md-5 mt-4">Browse all:</h3>
                    <ul className="search-items">
                      {/* List items here */}
                    </ul>
                  </div>
                </div>
                <a className="close" href="#close">×</a>
              </div>
            </div>
            <div className="Login_SignUp" id="login" style={{ fontSize: '2rem', display: 'inline-block', position: 'relative' }}>
            <Link className="nav-link" to="/SignInSignUp">
          <i className="fa fa-user-circle-o"></i>
        </Link>
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
  );
};

export default Header;
