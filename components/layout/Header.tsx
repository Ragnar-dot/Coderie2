import Link from 'next/link';
import styled from 'styled-components';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import React from 'react';

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }

  a {
    margin-left: 24px;
    color: ${(props) => props.theme.colors.text};
    font-size: 16px;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

const MobileIcon = styled.div`
  display: none;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: 768px) {
    display: block;
    font-size: 28px;
    cursor: pointer;
  }
`;

const MobileMenu = styled.nav<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  padding: 16px 0;

  a {
    display: block;
    padding: 12px 24px;
    color: ${(props) => props.theme.colors.text};

    &:hover {
      background-color: ${(props) => props.theme.colors.background};
    }
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <HeaderContainer>
      <Link href="/" passHref>
        <Logo>Coderie</Logo>
      </Link>
      <Nav>
        <Link href="/courses">Kurse</Link>
        <Link href="/about">Über Uns</Link>
        <Link href="/community">Community</Link>
        <Link href="/contact">Kontakt</Link>
      </Nav>
      <MobileIcon onClick={toggleMobileMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      <MobileMenu isOpen={isOpen}>
        <Link href="/courses">Kurse</Link>
        <Link href="/about">Über Uns</Link>
        <Link href="/community">Community</Link>
        <Link href="/contact">Kontakt</Link>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
