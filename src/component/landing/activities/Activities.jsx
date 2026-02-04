import React from "react";
import "./Activities.css";

const activities = [
  { title: "Swimming Pool", icon: "🏊‍♂️", desc: "Relax and enjoy our clean swimming pool." },
  { title: "Movie / Mini Theatre Night", icon: "🎬", desc: "Enjoy your favorite movies in our private mini theatre setup." },
  { title: "Gym & Fitness", icon: "🏋️‍♂️", desc: "Stay fit with modern gym equipment." },
  { title: "Restaurant", icon: "🍽️", desc: "Enjoy delicious multi-cuisine meals." },
  { title: "Indoor Games", icon: "🎯", desc: "Fun indoor games for all age groups." },
  { title: "Kids Play Area", icon: "🧒", desc: "Safe and fun play zone for children." },
  { title: "Bonfire Night", icon: "🔥", desc: "Enjoy memorable evenings with bonfire." },
  { title: "Local Sightseeing", icon: "🧳", desc: "Explore nearby attractions with our guide." }
];

const Activities = () => {
  return (
    <section className="activities" id="activities">
      <h2 className="activities-title">Our Activities</h2>
      <p className="activities-subtitle">
        Make your stay more enjoyable with our exclusive activities
      </p>

      <div className="activities-container">
        {activities.map((item, index) => (
          <div className="activity-card" key={index}>
            <div className="activity-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
