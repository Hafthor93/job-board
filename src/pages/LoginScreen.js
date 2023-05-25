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
  background: linear-gradient(120deg, #FFFF 0%, white 100%);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.1);
  background-color: white;
  margin-bottom: 15rem;
`;

const Input = styled.input`
  padding: 0.7rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #e1e1e1;
  outline: none;

  &:focus {
    border-color: #113f67;
  }
`;

const Button = styled.button`
  padding: 0.7rem;
  background-color: #113f67;
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0b2c4d;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const FormTitle = styled.h2`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
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
      <FormTitle>Sign In</FormTitle>
      <Title>Sign In</Title>
      <FormContainer onSubmit={handleSubmit}>
        <label htmlFor="email">Username</label>
        <Input type="text" id="username" name="username" required 
          value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <Input type="password" id="password" name="password" required 
          value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p>{error}</p>}
        <Button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Sign In"}
        </Button>
      </FormContainer>
      <BackLink to="/">Back to Home</BackLink>
    </Container>
  );
}

export default LoginScreen;
