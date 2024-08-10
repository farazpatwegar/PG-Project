import React from 'react';

const Footer = () => {
    return (
        <footer className="w3l-footer">
            <section className="footer-inner-main">

                <div className="below-section">
                    <div className="container">
                        <div className="copyright-footer">
                            <div className="columns text-lg-left">
                                <p>&copy; 2024 TickItNow. All rights reserved</p>
                            </div>
                            <ul className="social text-lg-right">
                                <li><a href="https://www.facebook.com/faraj.patwegar"><span className="fa fa-facebook" aria-hidden="true"></span></a></li>
                                <li><a href="https://www.instagram.com/faraz_patwegar/"><span className="fa fa-instagram" aria-hidden="true"></span></a></li>
                                <li><a href="https://www.linkedin.com/in/faraz-patwegar/"><span className="fa fa-linkedin" aria-hidden="true"></span></a></li>
                                <li><a href="https://wa.me/+919834401497"><span className="fa fa-whatsapp" aria-hidden="true"></span></a></li>

                                {/* Other social icons */}
                            </ul>
                        </div>
                    </div>
                </div>
                <button onClick={topFunction} id="movetop" title="Go to top">
                    <span className="fa fa-arrow-up" aria-hidden="true"></span>
                </button>
            </section>
        </footer>
    );

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
};

export default Footer;
