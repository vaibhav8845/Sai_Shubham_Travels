import React from 'react'
import './Footer.css'
function Footer() {
  return (
<>

<footer className="footer text-light pt-5 pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5 className="mb-3"><b>Sai Shubham</b><span className="text-primary"><b>Tours & Travel</b></span></h5>
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-3"><b>Company</b></h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light">Home</a></li>
                            <li><a href="#" className="text-light">About</a></li>
                            <li><a href="#" className="text-light">Gallery</a></li>
                            <li><a href="#" className="text-light">Services</a></li>
                            <li><a href="#" className="text-light">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-3"><b>Contact Us</b></h5>
                        <p className="mb-1">saishubhamtravel@gmail.com</p>
                        <p>+91 8010274863</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="mb-3"><b>Quick Link</b></h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light">Home</a></li>
                            <li><a href="#" className="text-light">Services </a></li>
                            <li><a href="#" className="text-light">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-center">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="#" className="text-light"><i className="fab fa-facebook-f logo-hover-color-f"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-light"><i className="fab fa-twitter logo-hover-color-t"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-light"><i className="fab fa-instagram logo-hover-color-i"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="text-light"><i className="fab fa-youtube logo-hover-color-y"></i></a>
                            </li>
                        </ul>
                    
                    </div>
                </div>
            </div>
        </footer>
        
</>
  )
}

export default Footer
