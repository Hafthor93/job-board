import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NewJobListing from "../pages/NewJobListing";
import UserIcon from "./UserIcon";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/actions/addJobAction';

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
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #FFFF;
  text-decoration: none;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  margin: 0 1rem;
  font-size: 1.2rem;
  color: #38598b;
  text-decoration: none;

  &:hover {
    color: #a2a8d3;
  }
`;

const Button = styled(Link)`
  margin-left: 2rem;
  padding: 0.5rem 1rem;
  background-color: #38598b;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #a2a8d3;
    color: #fff;
  }
`;

const StyledSpan = styled.span`
  color: #FFFF;
  margin-left: 2rem;
  font-size: 1.2rem;
`;



function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.jobs.user);

  const handleLogout = () => {
    localStorage.removeItem("username"); // remove username from local storage
    dispatch(logoutUser()); // dispatch logoutUser action
  };


  return (
    <Container>
      <Logo to="/">Job Board</Logo>
      <LinksContainer>
        <Button as={Link} to="/newjoblisting">New Listing</Button>
        <Button to="/">Info</Button>
        <Button as={Link} to="/workplaces">Workplaces</Button>
        {user ? ( // if user is logged in
          <>
            <StyledSpan>Welcome, {user}!</StyledSpan>
            <Button onClick={handleLogout}>Log out</Button> 
          </>
        ) : ( // ef user er ekki logged in
          <>
            <Button as={Link} to="/login">Sign In</Button>
            <Button as={Link} to="/signup">Sign Up</Button>
          </>
        )}
        <UserIcon />
      </LinksContainer>
    </Container>
  );
}

export default Navbar;
