// Footer.js
import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file for styling
import MapComponent from '../../MapComponent';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#45526e' }}>
      <div className="container p-4 pb-0">
        <section>
          <div className="row">
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Sai Shubham Tours & Travel</h6>
              <p>
                Sai Shubham Tours & Travel is your gateway to unforgettable journeys and adventures.
                We specialize in crafting personalized travel experiences that cater to your unique preferences and desires.
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>

            <ul className="list-unstyled">
                <li>
                  <a href="mailto:saishubhamtours8994@gmail.com" className="text-light">
                    <img src='https://i.postimg.cc/YjcQswkr/email-logo.webp' className='footer-img-height' alt="Email" />
                    saishubhamtours8994@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+918669881059" className="text-light">
                    <img src='https://i.postimg.cc/jqB9bwS5/icons8-call-48.png' className='footer-img-height' alt="Call" />
                    8669881059
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/8669881059" className="text-light">
                    <img src='https://i.postimg.cc/65RP5W8h/icons8-whatsapp-48.png' className='footer-img-height' alt="WhatsApp" />
                    8669881059
                  </a>
                </li>
              </ul>

            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">

            <h6 className="text-uppercase mb-4 font-weight-bold">Map</h6>

            <MapComponent />

            </div>
          </div>
        </section>

        <hr className="my-3" />

        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3">
                © 2024 Sai Shubham Tours & Travel
              </div>
            </div>

            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i className="fab fa-google"></i></a>
              <a className="btn btn-outline-light btn-floating m-1" href="#" role="button"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
