import React from 'react';
import Layout from '../components/layout/Layout';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 32px;
`;

const AboutPage = () => (
  <Layout>
    <AboutContainer>
      <h1>Über Uns</h1>
      <p>
        Coderie ist ein innovatives Unternehmen, das sich auf Umschulungen und
        Praktika im IT-Bereich spezialisiert hat. Wir helfen Quereinsteigern,
        Studenten und IT-Interessierten dabei, ihr volles Potenzial zu entfalten.
      </p>
      {/* Weitere Inhalte */}
    </AboutContainer>
  </Layout>
);

export default AboutPage;
