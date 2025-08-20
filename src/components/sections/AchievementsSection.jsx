import React from 'react';
import achievementsData from '../../data/achievementsData.json';
function AchievementsSection() {
  return (
    <section className="achievements-section">
      <h2>FESTIVALS ACHIEVEMENTS</h2>
      <div className="achievements-grid">
        {achievementsData.achievements.map((item, index) => (
          <div key={index} className="achievement-item">
            <p>{item.value}</p>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default AchievementsSection;