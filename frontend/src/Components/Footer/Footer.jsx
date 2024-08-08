import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from './../Assets/logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'; 

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="col-1">
                    <img src={logo1} alt="" />
                    <p>Follow our Instagram channel named Apna Zaika. We regularly post updates about new products and promotion.
                    </p>
                </div>
                <div className="col-2">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/" className='l1'>Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/categories">Categories</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/services">Services</Link></li>
                    </ul>
                </div>
                <div className="col-3">
                    <h3>Open Hours</h3>
                    <ul>
                    <li><FontAwesomeIcon icon={faClock} className='f1'/>  Mon-Fri : 7am - 12pm</li>
                     <li><FontAwesomeIcon icon={faClock} className='f1' /> Sat-Sun : 8am - 12pm</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h3>Newsletter</h3>
                    <form>
                        <i className="far fa-envelope"></i>
                        <input type="email" placeholder="Enter your email" required />
                        <button><i className="fas fa-arrow-right"></i></button>
                    </form>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/yourpage"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="https://twitter.com/yourhandle"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://www.instagram.com/youraccount"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.linkedin.com/in/yourprofile"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                                 </div>
            </div>
        </footer>
    );
}

export default Footer;
