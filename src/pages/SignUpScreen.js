import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


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
  return (
    <Container>
      <Title>Sign Up</Title>
      <Form>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" required />

        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" required />

        <Label htmlFor="phone">Phone</Label>
        <Input type="tel" id="phone" name="phone" required />

        <Label htmlFor="education">Education History</Label>
        <TextArea id="education" name="education" rows="5" required />

        <Label htmlFor="workExperience">Work Experience</Label>
        <TextArea id="workExperience" name="workExperience" rows="5" required />

        <Label htmlFor="professionalReferences">Professional References</Label>
        <TextArea id="professionalReferences" name="professionalReferences" rows="5" />

        <Label htmlFor="availability">Availability</Label>
        <Input type="text" id="availability" name="availability" />

        <Label htmlFor="signature">Signature</Label>
        <Input type="text" id="signature" name="signature" required />

        <Label htmlFor="date">Date</Label>
        <Input type="date" id="date" name="date" required />

        <Button type="submit">Submit</Button>
        
      </Form>
      <BackLink to="/">Back to Home</BackLink>
    </Container>
  );
}

export default SignUpForm;
