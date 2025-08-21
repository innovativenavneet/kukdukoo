import React from 'react';
import achievementsData from '../../data/achievementsData.json';
import star from '../../assets/images/star-header-icon.png';
import '../../styling/AchievementsSection.css';
function AchievementsSection() {
  return (
    <section className="achievements-section">
      <h2>
        <img src={star} alt="Star Icon" className='star-icon'></img>
        FESTIVALS ACHIEVEMENTS
        <img src={star} alt=" Icon" className='star-icon'></img>
        </h2>
      <div className="achievements-grid">
        {achievementsData.achievements.map((item, index) => (
          <div key={index} className="achievement-item">
             {item.icon && (
              <img
                src={`src/assets/images/${item.icon}`}
                className="achievement-icon"
              />
            )}
            <p className='achievement-value'>{item.value}</p>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default AchievementsSection;