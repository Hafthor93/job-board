import React, { useState } from 'react';
import styled from 'styled-components';
import JobListing from '../components/JobListing';
import jobs from '../mockData/jobListings';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';


const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const FormTitle = styled.h2`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
  display: block;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const StyledTextArea = styled.textarea`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  height: 200px;
`;

const StyledButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: #113f67;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #0066cc;
  }
`;

function JobApplicationForm({}) {
        const [applicant, setApplicant] = useState({
          name: '',
          address: '',
          phoneNumber: '',
          email: '',
          profileImage: '',
          additionalInfo: '',
        });
        const navigate = useNavigate();
      
        const handleChange = (event) => {
          const { name, value } = event.target;
          setApplicant((prevApplicant) => ({
            ...prevApplicant,
            [name]: value
          }));
        };
      
        const handleFileChange = (event) => {
          const file = event.target.files[0];
          if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
            setApplicant((prevApplicant) => ({
              ...prevApplicant,
              profileImage: URL.createObjectURL(file) // naðum ekki að gera files
            }));
          } else {
            toast.error("Invalid file type. Please choose a JPEG or PNG file.");
          }
        };
      
        const handleSubmit = async (event) => {
          event.preventDefault();
      
          
          const response = await fetch('https://localhost:7053/api/Applicant', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(applicant),
          });
      
          if (!response.ok) {
            toast.error("Error submitting application. Please try again.");
          } else {
            toast.success("Application submitted successfully!");
            window.alert(`You have successfully applied for the position!`);
            navigate('/');
            setApplicant({
              name: '',
              address: '',
              phoneNumber: '',
              email: '',
              profileImage: '',
              additionalInfo: '',
            });
          }
        };

  return (
    <FormContainer>
      <FormTitle>Apply Now</FormTitle>
      <StyledForm onSubmit={handleSubmit}>
        <InputContainer>
          <StyledLabel htmlFor="name">Full Name:</StyledLabel>
          <StyledInput type="text" id="name" name="name" value={applicant.name} onChange={handleChange} required />
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="address">Address:</StyledLabel>
          <StyledInput type="text" id="address" name="address" value={applicant.address} onChange={handleChange} required />
        </InputContainer>
        <InputContainer>
        <StyledLabel htmlFor="phoneNumber">Phone Number:</StyledLabel>
  <StyledInput type="tel" id="phoneNumber" name="phoneNumber" value={applicant.phoneNumber} onChange={handleChange} required />
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <StyledInput type="email" id="email" name="email" value={applicant.email} onChange={handleChange} required />
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="profileImage">Upload Profile Image (JPEG or PNG):</StyledLabel>
          <StyledInput type="file" id="profileImage" name="profileImage" accept=".jpg,.png,.jpeg" onChange={handleFileChange} required />
          {applicant.profileImage && <img src={applicant.profileImage} alt="Profile" height="50" />}
        </InputContainer>
        <InputContainer>
          <StyledLabel htmlFor="additionalInfo">Additional Information:</StyledLabel>
          <StyledTextArea id="additionalInfo" name="additionalInfo" value={applicant.additionalInfo} onChange={handleChange} />
        </InputContainer>
        <StyledButton type="submit">Submit Application</StyledButton>
      </StyledForm>
    </FormContainer>
  );
}

export default JobApplicationForm;
