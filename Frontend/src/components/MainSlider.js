import React, { useEffect } from 'react';
import $ from 'jquery';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const MainSlider = () => {
  useEffect(() => {
    // Initialize Owl Carousel
    $('.owl-carousel').owlCarousel({
      items: 1,
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
          nav: false
        },
        480: {
          items: 1,
          stagePadding: 60,
          nav: true
        },
        667: {
          items: 1,
          stagePadding: 80,
          nav: true
        },
        1000: {
          items: 1,
          nav: true
        }
      }
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
      mainClass: 'my-mfp-zoom-in'
    });

    $('.popup-with-move-anim').magnificPopup({
      type: 'inline',
      fixedContentPos: false,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-slide-bottom'
    });

    // Initialize Easy Responsive Tabs (if needed)
    $('#parentHorizontalTab').easyResponsiveTabs({
      type: 'default',
      width: 'auto',
      fit: true,
      tabidentify: 'hor_1',
      activate: function (event) {
        var $tab = $(this);
        var $info = $('#nested-tabInfo');
        var $name = $('span', $info);
        $name.text($tab.text());
        $info.show();
      }
    });

    // Handle navbar scroll effect
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 80) {
        $("#site-header").addClass("nav-fixed");
      } else {
        $("#site-header").removeClass("nav-fixed");
      }
    });

    // Handle body scroll when navbar is active
    $('.navbar-toggler').click(function () {
      $('body').toggleClass('noscroll');
    });
  }, []);

  return (
    <section className="w3l-main-slider position-relative" id="home">
      <div className="companies20-content">
        <OwlCarousel className="owl-one owl-carousel owl-theme">
          <div className="item">
            <div className="slider-info banner-view bg bg2">
              <div className="banner-info">
                <h3>Latest Movie Trailers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span className="over-para">
                    Consequuntur hic odio
                    voluptatem tenetur consequatur.</span></p>
                <a href="#small-dialog1" className="popup-with-zoom-anim play-view1">
                  <span className="video-play-icon">
                    <span className="fa fa-play"></span>
                  </span>
                  <h6>Watch Trailer</h6>
                </a>
                <div id="small-dialog1" className="zoom-anim-dialog mfp-hide">
                  <iframe src="https://player.vimeo.com/video/358205676" allow="autoplay; fullscreen"
                    allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider-info banner-view banner-top1 bg bg2">
              <div className="banner-info">
                <h3>Latest Online Movies</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span className="over-para">
                    Consequuntur hic odio
                    voluptatem tenetur consequatur.</span></p>
                <a href="#small-dialog2" className="popup-with-zoom-anim play-view1">
                  <span className="video-play-icon">
                    <span className="fa fa-play"></span>
                  </span>
                  <h6>Watch Trailer</h6>
                </a>
                <div id="small-dialog2" className="zoom-anim-dialog mfp-hide">
                  <iframe src="https://player.vimeo.com/video/395376850" allow="autoplay; fullscreen"
                    allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider-info banner-view banner-top2 bg bg2">
              <div className="banner-info">
                <h3>Latest Movie Trailers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span className="over-para">
                    Consequuntur hic odio
                    voluptatem tenetur consequatur.</span></p>
                <a href="#small-dialog3" className="popup-with-zoom-anim play-view1">
                  <span className="video-play-icon">
                    <span className="fa fa-play"></span>
                  </span>
                  <h6>Watch Trailer</h6>
                </a>
                <div id="small-dialog3" className="zoom-anim-dialog mfp-hide">
                  <iframe src="https://player.vimeo.com/video/389969665" allow="autoplay; fullscreen"
                    allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider-info banner-view banner-top3 bg bg2">
              <div className="banner-info">
                <h3>Latest Online Movies</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span className="over-para">
                    Consequuntur hic odio
                    voluptatem tenetur consequatur.</span></p>
                <a href="#small-dialog4" className="popup-with-zoom-anim play-view1">
                  <span className="video-play-icon">
                    <span className="fa fa-play"></span>
                  </span>
                  <h6>Watch Trailer</h6>
                </a>
                <div id="small-dialog4" className="zoom-anim-dialog mfp-hide">
                  <iframe src="https://player.vimeo.com/video/323491174" allow="autoplay; fullscreen"
                    allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default MainSlider;
