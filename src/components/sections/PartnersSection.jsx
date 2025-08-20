import React from 'react';
import partnersData from '../../data/partnersData.json';
function PartnersSection() {
  return (
    <section className="partners-section">
      <h2>OUR PARTNERS</h2>
      <div className="partners-grid">
        {partnersData.partners.map((partner, index) => (
          <div key={index} className="partner-logo">
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default PartnersSection;