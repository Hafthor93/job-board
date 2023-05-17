import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Label = styled.label`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border-radius: 3px;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border-radius: 3px;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  background-color: #0068D6;
  color: #FFFFFF;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  cursor: pointer;
`;

const BackLink = styled(Link)`
  padding: 0.5rem;
  margin-bottom: 2rem;
  background-color: #0068d6;
  color: #fff;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  &:hover {
    background-color: #0051a8;
  }
`;

function SignUpForm() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [professionalReferences, setProfessionalReferences] = useState("");
  const [availability, setAvailability] = useState("");
  const [signature, setSignature] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  



  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const response = await fetch("https://localhost:7262/api/accounts/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      name, username, password, email, phone, education, workExperience,
      professionalReferences, availability, signature, date
      }) 
    });



    const data = await response.json();
    if(response.ok) {
      localStorage.setItem("username", username);
      navigate("/loginscreen")
      
    } else {
      setErrorMessage(data.message || "An error occurred during registration.");
      
    }
  };


  





  return (
    <Container>
      <Title>Sign Up</Title>
      {errorMessage && <p>{errorMessage}</p>}
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" required 
          value={name} onChange={(e) => setName(e.target.value)} />

        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" name="username" required 
          value={username} onChange={(e) => setUsername(e.target.value)} />

        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" name="password" required 
          value={password} onChange={(e) => setPassword(e.target.value)} />

        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" required 
          value={email} onChange={(e) => setEmail(e.target.value)} />

        <Label htmlFor="phone">Phone</Label>
        <Input type="tel" id="phone" name="phone" required 
          value={phone} onChange={(e) => setPhone(e.target.value)} />

        <Label htmlFor="education">Education History</Label>
        <TextArea id="education" name="education" rows="5" required 
          value={education} onChange={(e) => setEducation(e.target.value)} />

        <Label htmlFor="workExperience">Work Experience</Label>
        <TextArea id="workExperience" name="workExperience" rows="5" required 
          value={workExperience} onChange={(e) => setWorkExperience(e.target.value)} />

        <Label htmlFor="professionalReferences">Professional References</Label>
        <TextArea id="professionalReferences" name="professionalReferences" rows="5"
          value={professionalReferences} onChange={(e) => setProfessionalReferences(e.target.value)} />

        <Label htmlFor="availability">Availability</Label>
        <Input type="text" id="availability" name="availability" 
          value={availability} onChange={(e) => setAvailability(e.target.value)} />

        <Input type="text" id="signature" name="signature" required 
          value={signature} onChange={(e) => setSignature(e.target.value)} />

        <Label htmlFor="date">Date</Label>
        <Input type="date" id="date" name="date" required 
          value={date} onChange={(e) => setDate(e.target.value)} />

        <Button type="submit">Submit</Button>
        
      </Form>
      <BackLink to="/">Back to Home</BackLink>
    </Container>
  );
}

export default SignUpForm;
