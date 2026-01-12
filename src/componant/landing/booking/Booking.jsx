import React from "react";
import './booking.css'

const Booking = () => {
  return (
    <section className="section" id="booking">
      <h1>Book Your Stay</h1>
      <form className="booking-form">
        <input type="date" />
        <input type="date" />
        <input type="text" placeholder="Rooms" />
        <input type="text" placeholder="Guests" />
        <button>Book</button>
      </form>
    </section>
    
  );
};


export default Booking;

