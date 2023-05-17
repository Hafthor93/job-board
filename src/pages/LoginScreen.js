import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #0068d6;
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
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.1);
  background-color: white;
  margin-bottom: 5rem;
`;

const Input = styled.input`
  padding: 0.7rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #e1e1e1;
  outline: none;
  &:focus {
    border-color: #0068d6;
  }
`;

const Button = styled.button`
  padding: 0.7rem;
  background-color: #0068d6;
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0051a8;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  
  color: #0068d6;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function LoginScreen(login) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  

    

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    /* try {
      await login(email, password); 
      navigate.push("/");  
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }; */


    const response = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password }) // Send username and password in the request body
    });

    const data = await response.json();
    if(response.ok) {
      // TODO: Handle successful login (e.g., redirect, store user info, etc.)
    } else {
      // TODO: Handle errors (data will contain error information)
    }
  };


    

  return (
    <Container>
      <Title>Sign In</Title>
      <FormContainer onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
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
