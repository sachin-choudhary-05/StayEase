import React from "react";
import './Rooms.css'
const Rooms = () => {
  return (
    <section className="section" id="rooms-room">
      <h1>EXPLORE OUR ROOMS</h1><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

      <div className="two-column">
        <div>
          <h2>Classic Room</h2>
          <p>A "Classic Room" in a hotel typically denotes a standard accommodation that combines comfort with traditional design elements. These rooms often feature timeless décor and essential conveniences.</p>
        </div>
        <img src="project4.jpg" alt="Classic Room" />
      </div>

      <div className="two-column">
        <img src="project5.jpg" alt="Deluxe Room" />
        <div>
          <h2>Grand Deluxe Room</h2>
          <p>A Grand Deluxe Hotel Room represents a step above standard or classic rooms in terms of space, luxury, and amenities. These rooms offer guests a more refined and indulgent experience..</p>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
