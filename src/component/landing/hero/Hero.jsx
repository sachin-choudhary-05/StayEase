import React from "react";
import './Hero.css'

function Hero (){
  return (
    <section className="hero" id="home-home">
    
      <div className="hero-text">
        <h1>Just Experience A New Level Of Luxury.</h1><br></br>
        <p>
           Welcome to StayEase Hotel, where comfort elegance.<br></br>meets Enjoy premium rooms, warm hospitality, and<br></br>meets a relaxing stay designed just for you.
        </p>
        <a href="/rooms" className="btn">Explore Rooms</a><br></br>
        <div className="book">
        <a href="/Booking" className="btn">Book </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
