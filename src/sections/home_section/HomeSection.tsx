import React from 'react';
import './home_section.scss';

export const Home = () => {
  return (
    <section className="home-container">
      <h1 className="home-container__header">My Zoo</h1>
      <div className="home-container__hero">
        <p className="welcome">
        Välkommen till vår zoo sida! Vi är glada att du har hittat hit och hoppas att du kommer att ha en rolig och lärorik upplevelse hos oss. Hos oss kan du utforska en värld full av spännande djur och lära dig om deras liv och beteenden. Vi är stolta över att ha en mångfald av djur från olika delar av världen, allt från majestätiska lejon och tigrar till söta och lurviga apor och gnagare. Du kommer att ha möjlighet att lära dig om djurens naturliga miljöer och de utmaningar de möter i dagens värld.
        </p>
        <div className="home-container__hero__img-wrapper">
          <img
            src="https://zooatlanta.org/wp-content/uploads/Savanna-Hall-a.jpg"
            alt="hero-img"
          />
        </div>
      </div>
    </section>
  );
};
