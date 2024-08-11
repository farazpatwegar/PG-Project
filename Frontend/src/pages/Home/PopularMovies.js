import React from 'react';
import './PopularMovies.css'; // Import your CSS file
import wednesdayImage from '../../assets/images/n2.jpg';
import commandoImage from '../../assets/images/ks.png';
import gujjuImage from '../../assets/images/gujju2.jpeg';
import avatarImage from '../../assets/images/avtar-2.jpeg';

const PopularMovies = () => {
  return (
    <section className="w3l-grids">
      <div className="grids-main py-5">
        <div className="container py-lg-3">
          <div className="headerhny-title">
            <div className="w3l-title-grids">
              <div className="headerhny-left">
                <h3 className="hny-title">Popular Movies</h3>
              </div>
              <div className="headerhny-right text-lg-right">
                <h4><a className="show-title" href="movies.html">Show all</a></h4>
              </div>
            </div>
          </div>
          <div className="w3l-populohny-grids">
            <div className="item vhny-grid">
              <div className="box16">
                <a href="movies.html">
                  <figure>
                    <img className="img-fluid" src={wednesdayImage} alt="A Wednesday"/>
                  </figure>
                  <div className="box-content">
                    <h3 className="title">A Wednesday</h3>
                    <h4>
                      <span className="post">
                        <span className="fa fa-clock-o"></span> 1 Hr 4min
                      </span>
                      <span className="post fa fa-heart text-right"></span>
                    </h4>
                  </div>
                  <span className="fa fa-play video-icon" aria-hidden="true"></span>
                </a>
              </div>
            </div>
            <div className="item vhny-grid">
              <div className="box16">
                <a href="movies.html">
                  <figure>
                    <img className="img-fluid" src={commandoImage} alt="Commando-3"/>
                  </figure>
                  <div className="box-content">
                    <h3 className="title">Commando-3</h3>
                    <h4>
                      <span className="post">
                        <span className="fa fa-clock-o"></span> 1 Hr 4min
                      </span>
                      <span className="post fa fa-heart text-right"></span>
                    </h4>
                  </div>
                  <span className="fa fa-play video-icon" aria-hidden="true"></span>
                </a>
              </div>
            </div>
            <div className="item vhny-grid">
              <div className="box16">
                <a href="movies.html">
                  <figure>
                    <img className="img-fluid" src={gujjuImage} alt="Gujjubhai Most Wanted"/>
                  </figure>
                  <div className="box-content">
                    <h3 className="title">Gujjubhai Most Wanted</h3>
                    <h4>
                      <span className="post">
                        <span className="fa fa-clock-o"></span> 1 Hr 4min
                      </span>
                      <span className="post fa fa-heart text-right"></span>
                    </h4>
                  </div>
                  <span className="fa fa-play video-icon" aria-hidden="true"></span>
                </a>
              </div>
            </div>
            <div className="item vhny-grid">
              <div className="box16">
                <a href="movies.html">
                  <figure>
                    <img className="img-fluid" src={avatarImage} alt="Avatar"/>
                  </figure>
                  <div className="box-content">
                    <h3 className="title">Avatar</h3>
                    <h4>
                      <span className="post">
                        <span className="fa fa-clock-o"></span> 1 Hr 4min
                      </span>
                      <span className="post fa fa-heart text-right"></span>
                    </h4>
                  </div>
                  <span className="fa fa-play video-icon" aria-hidden="true"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularMovies;
