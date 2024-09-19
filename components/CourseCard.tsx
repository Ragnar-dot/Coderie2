import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = styled.div`
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  margin-bottom: 24px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

const CardImage = styled.div`
  position: relative;
  height: 200px;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CourseCard = ({ course }: { course: any }) => (
  <Card>
    <CardImage>
      <Image
        src={course.image}
        alt={course.title}
        layout="fill"
        objectFit="cover"
      />
    </CardImage>
    <CardContent>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <Link href={`/courses/${course.id}`}>Mehr erfahren</Link>
    </CardContent>
  </Card>
);

export default CourseCard;
