import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/addJobAction'; 

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #FFFF;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #507DBC;
  margin-bottom: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px; 
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.1);
  background-color: white;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 10px 15px 25px 10px rgba(0,0,0,0.2);
  }
`;

const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  border: 2px solid #507DBC;
  font-size: 1.2rem;
  outline: none;

  &:focus {
    border-color: #113f67;
  }
`;


const Button = styled.button`
  padding: 1rem;
  background-color: #507DBC;
  color: #fff;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #38598b;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  color: #fff;
  margin-top: 2rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;


const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  margin-bottom: 1rem;
`;

function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

    

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    

    const response = await fetch("https://localhost:7053/api/User/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password }) // Senda user og pass i request
    });

    const data = await response.json();
    if(response.ok) {
      localStorage.setItem("username", username);
      dispatch(setUser(username)); // dispatch setUser action
      navigate("/");
      
    } else {
      setError(data.message || "An error occurred during login.");
      setUsername("");
      setPassword("");
    }
    setLoading(false);
  };


    

  return (
    <Container>
      
      <Title>Sign In</Title>
      <FormContainer onSubmit={handleSubmit}>
        <label htmlFor="email">Username</label>
        <Input type="text" id="username" name="username" required 
          value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <Input type="password" id="password" name="password" required 
          value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Sign In"}
        </Button>
      </FormContainer>
      <BackLink to="/">Back to Home</BackLink>
    </Container>
  );
}

export default LoginScreen;
