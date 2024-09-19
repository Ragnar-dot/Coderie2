import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 32px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  margin-top: auto;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; {new Date().getFullYear()} Coderie. Alle Rechte vorbehalten.</p>
  </FooterContainer>
);

export default Footer;
