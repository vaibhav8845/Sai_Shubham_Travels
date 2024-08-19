import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file for styling

const Footer = () => {
  return (
    <div className=" mt-3">
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#45526e' }}>
        <div className="container p-4 pb-0">
          <section>
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Sai Shubham Tours & Travel</h6>
                <p>
                Sai Shubham Tours & Travel is your gateway to unforgettable journeys and adventures.

We specialize in crafting personalized travel experiences that cater to your unique preferences and desires.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p><a className="text-white" href="#">Home</a></p>
                <p><a className="text-white" href="#">About</a></p>
                <p><a className="text-white" href="#">Gallery</a></p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p><a className="text-white" href="#">Services</a></p>
                <p><a className="text-white" href="#">Contact</a></p>
                <p><a className="text-white" href="#">Book Now</a></p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-4 mx-auto mt-3">
              <ul className="list-unstyled">
                            <li><a href="#" className="text-light"><a href="https://wa.me/8669881059" > <img src='\img\email-logo.png' className='footer-img-height'></img></a> saishubhamtours8994@gmail.com</a></li>
                            <li><a href="#" className="text-light">   <a href="tel:+91 8669881059" ><img src='\img\icons8-call-48.png' className='footer-img-height'></img></a> 8669881059</a></li>
                            <li><a href="#" className="text-light"> <a href="https://wa.me/8669881059" > <img src='\img\icons8-whatsapp-48.png' className='footer-img-height'></img></a> 8669881059</a></li>
                        </ul>
              
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
    </div>
  );
};

export default Footer;
