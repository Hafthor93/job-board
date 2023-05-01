import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #0068d6;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 20%;
  min-width: 300px;
  border-radius: 5px;
  background-color: #f5f5f5;
  padding: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 3px;
  border: 1px solid #0068d6;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #0068d6;
  color: #fff;
  border-radius: 3px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0051a8;
  }
`;

const BackLink = styled(Link)`
  padding: 0.5rem;
  margin-top: 1rem;
  background-color: #0068d6;
  color: #fff;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #0051a8;
  }
`;

function LoginScreen() {
  return (
    <Container>
      <Title>Sign In</Title>
      <FormContainer>
        <label htmlFor="email">Email</label>
        <Input type="email" id="email" required />
        <label htmlFor="password">Password</label>
        <Input type="password" id="password" required />
        <Button type="submit">Sign In</Button>
      </FormContainer>
      <BackLink to="/">Back to Home</BackLink>
    </Container>
  );
}

export default LoginScreen;
