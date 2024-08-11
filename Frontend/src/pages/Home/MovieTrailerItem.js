import React from 'react';
import './MovieTrailerItem.css'; // Import your CSS file

const MovieTrailerItem = () => {
  return (
    <section className="w3l-main-slider position-relative" id="home">
      <div className="companies20-content">
        <div className="slider-container">
          <div className="slider-item">
            <div className="slider-info banner-view bg bg2">
              <div className="banner-info">
                <h3>Latest Movie Trailers</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <span className="over-para">
                    Consequuntur hic odio voluptatem tenetur consequatur.
                  </span>
                </p>
                <a href="#small-dialog1" className="popup-with-zoom-anim play-view1">
                  <span className="video-play-icon">
                    <span className="fa fa-play"></span>
                  </span>
                  <h6>Watch Trailer</h6>
                </a>
                <div id="small-dialog1" className="zoom-anim-dialog mfp-hide">
                  <iframe
                    src="https://player.vimeo.com/video/358205676"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="Trailer Video"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item">
            <div className="slider-info banner-view banner-top1 bg bg2">
              <div className="banner-info">
                <h3>Latest Online Movies</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <span className="over-para">
                    Consequuntur hic odio voluptatem tenetur consequatur.
                  </span>
                </p>
                <a href="#small-dialog2" className="popup-with-zoom-anim play-view1">
                  <span className="video-play-icon">
                    <span className="fa fa-play"></span>
                  </span>
                  <h6>Watch Trailer</h6>
                </a>
                <div id="small-dialog2" className="zoom-anim-dialog mfp-hide">
                  <iframe
                    src="https://player.vimeo.com/video/395376850"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="Trailer Video"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item">
            <div className="slider-info banner-view banner-top2 bg bg2">
              <div className="banner-info">
                <h3>Latest Movie Trailers</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <span className="over-para">
                    Consequuntur hic odio voluptatem tenetur consequatur.
                  </span>
                </p>
                <a href="#small-dialog3" className="popup-with-zoom-anim play-view1">
                  <span className="video-play-icon">
                    <span className="fa fa-play"></span>
                  </span>
                  <h6>Watch Trailer</h6>
                </a>
                <div id="small-dialog3" className="zoom-anim-dialog mfp-hide">
                  <iframe
                    src="https://player.vimeo.com/video/389969665"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="Trailer Video"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item">
            <div className="slider-info banner-view banner-top3 bg bg2">
              <div className="banner-info">
                <h3>Latest Online Movies</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <span className="over-para">
                    Consequuntur hic odio voluptatem tenetur consequatur.
                  </span>
                </p>
                <a href="#small-dialog4" className="popup-with-zoom-anim play-view1">
                  <span className="video-play-icon">
                    <span className="fa fa-play"></span>
                  </span>
                  <h6>Watch Trailer</h6>
                </a>
                <div id="small-dialog4" className="zoom-anim-dialog mfp-hide">
                  <iframe
                    src="https://player.vimeo.com/video/323491174"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="Trailer Video"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieTrailerItem;
