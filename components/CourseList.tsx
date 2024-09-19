import styled from 'styled-components';
import CourseCard from './CourseCard';
import React from 'react';

const courses = [
  {
    id: '1',
    title: 'Einführung in die Programmierung',
    description: 'Lerne die Grundlagen der Programmierung mit Python.',
    image: '/images/course1.jpg',
  },
  {
    id: '2',
    title: 'Webentwicklung mit React',
    description: 'Erstelle moderne Webanwendungen mit React.',
    image: '/images/course2.jpg',
  },
  // Weitere Kurse...
];

const CourseListContainer = styled.section`
  padding: 32px;
  background-color: ${(props) => props.theme.colors.background};
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;

const CourseList = () => (
  <CourseListContainer>
    <h2>Kurse</h2>
    <CourseGrid>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </CourseGrid>
  </CourseListContainer>
);

export default CourseList;
