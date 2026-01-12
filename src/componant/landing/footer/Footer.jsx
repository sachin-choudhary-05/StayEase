import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      
      <section className="newsletter">
        <h2>Join our Newsletter</h2>
        <p>
          Sign up to our newsletter to receive our latest news about offers &
          promotions
        </p>

        <div className="newsletter-form">
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
      </section>

     
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-box">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-box">
            <h3>About us</h3>
            <p>
              Welcome to StayEase, where comfort meets convenience. Our hotel is designed to provide a relaxing and memorable stay for every guest.
            </p>
          </div>

          <div className="footer-box">
            <h3>Contact</h3>
            <p>Tea Berry, Marinette, USA</p>
            <p>+31 939 777 4546233</p>
            <p>info@templatesjungle.com</p>
          </div>

          <div className="footer-box">
            <h3>Get Social</h3>
            <p>Follow us on social platforms and keep in touch.</p>
            <p><a href="#">Facebook</a></p>
            <p><a href="#">Instagram</a></p>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
