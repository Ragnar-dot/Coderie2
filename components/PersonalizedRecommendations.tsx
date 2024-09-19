import styled from 'styled-components';
import CourseCard from './CourseCard';
import React from 'react';

const recommendations = [
  {
    id: '3',
    title: 'Data Science mit Python',
    description: 'Entdecke die Welt der Datenanalyse.',
    image: '/images/course3.jpg',
  },
  {
    id: '4',
    title: 'Mobile App Entwicklung',
    description: 'Erstelle Apps für iOS und Android.',
    image: '/images/course4.jpg',
  },
];

const RecommendationsContainer = styled.section`
  padding: 32px;
`;

const Recommendations = () => (
  <RecommendationsContainer>
    <h2>Empfohlene Kurse für dich</h2>
    <div>
      {recommendations.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  </RecommendationsContainer>
);

export default Recommendations;
