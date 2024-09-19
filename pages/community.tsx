import React from 'react';
import Layout from '../components/layout/Layout';
import styled from 'styled-components';

const CommunityContainer = styled.section`
  padding: 32px;
`;

const CommunityPage = () => (
  <Layout>
    <CommunityContainer>
      <h1>Community</h1>
      <p>
        Trete unserer Community bei und vernetze dich mit Gleichgesinnten!
      </p>
      {/* Weitere Inhalte */}
    </CommunityContainer>
  </Layout>
);

export default CommunityPage;
