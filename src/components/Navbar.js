import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #0068D6;
  color: #FFFFFF;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #FFFFFF;
  text-decoration: none;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LinkStyled = styled(Link)`
  margin-right: 1rem;
  font-size: 1.2rem;
  color: #FFFFFF;
  text-decoration: none;
`;

const SignInButton = styled(Link)`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background-color: #FFFFFF;
  color: #0068D6;
  border: 2px solid #FFFFFF;
  border-radius: 3px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0068D6;
    color: #FFFFFF;
    border: 2px solid #0068D6;
  }
`;

const SignUpButton = styled(SignInButton)`
  background-color: #0068D6;
  color: #FFFFFF;
  border: 2px solid #0068D6;

  &:hover {
    background-color: #FFFFFF;
    color: #0068D6;
    border: 2px solid #FFFFFF;
  }
`;


function Navbar() {
  return (
    <Container>
      <Logo to="/">Job Board</Logo>
      <LinksContainer>
        <LinkStyled to="/">New Listings</LinkStyled>
        <LinkStyled to="/">Info</LinkStyled>
        <SignInButton as={Link} to="/login">Sign In</SignInButton>
        <SignUpButton as={Link} to="/signup">Sign Up</SignUpButton>
      </LinksContainer>
    </Container>
  );
}

export default Navbar;
