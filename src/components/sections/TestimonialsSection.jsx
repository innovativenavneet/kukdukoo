import React from 'react';
import testimonialsData from '../../data/testimonialsData.json';
function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <h2>WHY FAMILIES LOVE US</h2>
      <div className="testimonials-grid">
        {testimonialsData.families.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>"{testimonial.quote}"</p>
            <p>- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default TestimonialsSection;