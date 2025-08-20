import React from 'react';
import aboutData from '../../data/aboutData.json';
function AboutSection() {
  return (
    <section className="about-section">
      <h2>WHAT IS KUKDUKOO?</h2>
      <p>{aboutData.story}</p>
      <p>{aboutData.since}</p>
      <button>Read full story</button>
    </section>
  );
}
export default AboutSection;