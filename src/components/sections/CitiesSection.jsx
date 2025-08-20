import React from 'react';
import citiesData from '../../data/citiesData.json';
function CitiesSection() {
  return (
    <section className="cities-section">
      <h2>CITIES WE ARE GOING TO</h2>
      <div className="cities-grid">
        {citiesData.cities.map((city, index) => (
          <div key={index} className="city-card">
            <p>{city.name}</p>
            <p>{city.date}</p>
          </div>
        ))}
      </div>
      <button>Explore Cities</button>
    </section>
  );
}
export default CitiesSection;