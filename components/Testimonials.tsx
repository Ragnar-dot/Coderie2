import React from 'react';
import styled from 'styled-components';

const testimonials = [
  {
    name: 'Max Mustermann',
    role: 'Softwareentwickler bei TechCorp',
    quote:
      'Dank Coderie konnte ich meinen Traum verwirklichen und in die IT-Branche wechseln.',
  },
  {
    name: 'Julia Beispiel',
    role: 'Webentwicklerin bei WebSolutions',
    quote:
      'Die Kurse von Coderie sind topaktuell und praxisnah. Absolut empfehlenswert!',
  },
  // Weitere Testimonials...
];

const TestimonialsContainer = styled.section`
  padding: 32px;
  background-color: ${(props) => props.theme.colors.white};
  text-align: center;
`;

const TestimonialCard = styled.div`
  margin-bottom: 24px;
  padding: 16px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 8px;
`;

const Testimonials = () => (
  <TestimonialsContainer>
    <h2>Erfolgsgeschichten</h2>
    {testimonials.map((testimonial, index) => (
      <TestimonialCard key={index}>
        <p>"{testimonial.quote}"</p>
        <strong>{testimonial.name}</strong>
        <p>{testimonial.role}</p>
      </TestimonialCard>
    ))}
  </TestimonialsContainer>
);

export default Testimonials;
