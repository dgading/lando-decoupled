import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';


const StyledHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const SpinAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Logo = styled.img`
  animation: ${SpinAnimation} infinite 20s linear;
  height: 80px;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const Header = () => {
  return(
    <StyledHeader>
      <Logo src={logo} alt="Logo" />
      <Title>Welcome to Decoupled Drupal</Title>
    </StyledHeader>
  );
}

export default Header;
