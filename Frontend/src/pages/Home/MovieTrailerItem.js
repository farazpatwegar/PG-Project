import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'magnific-popup/dist/magnific-popup.css';
import 'owl.carousel';
import 'magnific-popup';
import $ from 'jquery';

const MovieTrailerItem = () => {
  useEffect(() => {
    window.$ = $;
    window.jQuery = $;
    // Initialize Owl Carousel
    $('.owl-one').owlCarousel({
      stagePadding: 280,
      loop: true,
      margin: 20,
      nav: true,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplaySpeed: 1000,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 1,
          stagePadding: 40,
          nav: false,
        },
        480: {
          items: 1,
          stagePadding: 60,
          nav: true,
        },
        667: {
          items: 1,
          stagePadding: 80,
          nav: true,
        },
        1000: {
          items: 1,
          nav: true,
        },
      },
    });

    // Initialize Magnific Popup
    $('.popup-with-zoom-anim').magnificPopup({
      type: 'inline',
      fixedContentPos: false,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in',
    });

    // Handle navbar scroll effect
    $(window).on('scroll', function () {
      const scroll = $(window).scrollTop();
      if (scroll >= 80) {
        $('#site-header').addClass('nav-fixed');
      } else {
        $('#site-header').removeClass('nav-fixed');
      }
    });

    // Handle body scroll when navbar is active
    $('.navbar-toggler').click(function () {
      $('body').toggleClass('noscroll');
    });
  }, []);

  return (
    <div className="item">
      <li>
        <div className="slider-info banner-view bg bg2">
          <div className="banner-info">
            <h3>Latest Movie Trailers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <span className="over-para">Consequuntur hic odio voluptatem tenetur consequatur.</span>
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
      </li>
    </div>
  );
};

export default MovieTrailerItem;
