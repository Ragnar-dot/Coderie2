import styled from 'styled-components';
import { motion } from 'framer-motion';
import React from 'react';

const HeroContainer = styled.section`
  position: relative;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url('/images/hero-bg.jpg') no-repeat center center/cover;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 24px;
  margin-bottom: 32px;
`;

const CTAButton = styled.a`
  padding: 16px 32px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );
  color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.secondary},
      ${(props) => props.theme.colors.primary}
    );
  }
`;

const HeroSection = () => (
  <HeroContainer>
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Title>Entfalte dein IT-Potenzial</Title>
      <Subtitle>Deine Zukunft beginnt hier mit Coderie</Subtitle>
      <CTAButton href="/signup">Jetzt durchstarten</CTAButton>
    </motion.div>
  </HeroContainer>
);

export default HeroSection;
