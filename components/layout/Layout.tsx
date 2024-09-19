import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import React from 'react';

const Content = styled.div`
  margin-top: 80px; // Höhe des Headers berücksichtigen
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </>
);

export default Layout;
