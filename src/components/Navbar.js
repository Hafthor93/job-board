import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NewJobListing from "../pages/NewJobListing";

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #113f67;
  color: #FFFFFF;
  justify-content: center;
  text-align: center;
  width: 100vw;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #FFFFFF;
  text-decoration: none;
  margin-right: 5rem;
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
  margin-left: 2rem;
  padding: 0.5rem 1rem;
  background-color: #38598b;
  color: #FFFFFF;
  border: 1px solid #38598b;
  border-radius: 25px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: #FFFFFF;
    color: #0068D6;
    
  }
`;

const SignUpButton = styled(SignInButton)`
  background-color: #38598b;
  color: #FFFFFF;
  border: 1px solid #38598b;
  margin-right: 1rem;
  &:hover {
    background-color: #FFFFFF;
    color: #0068D6;
    
  }
`;


function Navbar() {
  return (
    <Container>
      <Logo to="/">Job Board</Logo>
      <LinksContainer>
        <SignInButton as={Link} to="/newjoblisting">New Listing</SignInButton>
        <SignInButton to="/">Info</SignInButton>
        <SignInButton as={Link} to="/workplaces">Workplaces</SignInButton>
        <SignInButton as={Link} to="/login">Sign In</SignInButton>
        <SignUpButton as={Link} to="/signup">Sign Up</SignUpButton>
      </LinksContainer>
    </Container>
  );
}

export default Navbar;
