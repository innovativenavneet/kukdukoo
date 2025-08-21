import React from 'react';
import partnersData from '../../data/partnersData.json';
import leftArm from '../../assets/images/left-arm.png';
import rightArm from '../../assets/images/right-arm.png';
import '../../styling/PartnerSection.css';
function PartnersSection() {
  return (
    <section className="partners-section">
      <h2>
         <img src={leftArm} className='partner-icon'></img>
         OUR PARTNERS
          <img src={rightArm}  className='partner-icon'></img>
      </h2>
      <div className="partners-grid">
        {partnersData.partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
      
      <button className="partner-btn">PARTNER WITH US →</button>
    </section>
  );
}
export default PartnersSection;