import React, { useState } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { addJob } from '../redux/actions/addJobAction';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';



const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #eef1f5;
`;

const FormTitle = styled.h2`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 2rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  color: #444;
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;

  &:focus {
    border-color: #0077ff;
    box-shadow: 0 0 5px rgba(0, 119, 255, 0.5);
  }
`;

const StyledSelect = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;

  &:focus {
    border-color: #0077ff;
    box-shadow: 0 0 5px rgba(0, 119, 255, 0.5);
  }
`;

const StyledTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
  height: 100px;

  &:focus {
    border-color: #0077ff;
    box-shadow: 0 0 5px rgba(0, 119, 255, 0.5);
  }
`;

const RequirementList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const StyledButton = styled.button`
  cursor: pointer;
  background-color: #113f67;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0066cc;
  }
`;


function NewJobListing(props) {
    console.log("NewJobListing rendered");
  const [job, setJob] = useState({
    //id: '',
    title: '',
    location: '',
    type: '',
    company: '',
    logo: '',
    description: '',
    requirements: '',
    date: '',
    info: '',
    infrastructure: '',
    goals: ''
  });
  

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    console.log("handleSubmit called");
    event.preventDefault();
    console.log("Dispatching addJob action with job:", job);

    
    const response = await fetch('https://localhost:7053/api/Jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    if (!response.ok) {
      toast.error("Error adding job. Please try again.");
    } else {
      const addedJob = await response.json();
      dispatch(addJob(addedJob));  

      setJob({
        //id: '',
        title: '',
        location: '',
        type: '',
        company: '',
        logo: '',
        description: '',
        requirements: '',
        date: '',
        info: '',
        infrastructure: '',
        goals: ''
      });
      toast.success("Job added");
      navigate('/');
    }
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file.type === 'image/jpeg' || file.type === 'image/png') {
      setJob((prevJob) => ({
        ...prevJob,
        logo: URL.createObjectURL(file)
      }));
    } else {
      toast.error("Invalid file type. Please choose a JPEG or PNG file.");
    }
  };

  return (
    
    <FormContainer>
    <FormTitle>New Job Listing</FormTitle>
    <StyledForm onSubmit={handleSubmit}>
      <InputContainer>
        <StyledLabel htmlFor="title">Job Title:</StyledLabel>
        <StyledInput id="title" type="text" name="title" value={job.title} onChange={handleChange} required />
      </InputContainer>

      <InputContainer>
        <StyledLabel htmlFor="location">Location:</StyledLabel>
        <StyledInput id="location" type="text" name="location" value={job.location} onChange={handleChange} required />
      </InputContainer>

      <InputContainer>
        <StyledLabel htmlFor="type">Job Type:</StyledLabel>
        <StyledSelect id="type" name="type" value={job.type} onChange={handleChange} required>
          <option value="">Select a job type...</option>
          <option value="Summer Job">Summer Job</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
        </StyledSelect>
      </InputContainer>

      <InputContainer>
        <StyledLabel htmlFor="company">Company:</StyledLabel>
        <StyledInput id="company" type="text" name="company" value={job.company} onChange={handleChange} required />
      </InputContainer>

      <InputContainer>
        <StyledLabel htmlFor="logo">Logo:</StyledLabel>
        <StyledInput id="logo" type="file" accept=".jpg,.png,.jpeg" name="logo" onChange={handleFileChange} required />
        {job.logo && <img src={job.logo} alt="Job Logo" height="50" />}
      </InputContainer>

      <InputContainer>
        <StyledLabel htmlFor="description">Description:</StyledLabel>
        <StyledTextArea id="description" name="description" value={job.description} onChange={handleChange} required />
      </InputContainer>

      <InputContainer>
        <StyledLabel htmlFor="requirements">Requirements:</StyledLabel>
        <StyledTextArea
          id="requirements"
          name="requirements"
          value={job.requirements}
          onChange={handleChange}
          placeholder="Enter requirements (each separated by a new line)"
          rows="5"
        />
        <RequirementList>
          {job.requirements
            ?.split("\n")
            .map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
        </RequirementList>
      </InputContainer>

      <InputContainer>
        <StyledLabel htmlFor="date">Date:</StyledLabel>
        <StyledInput id="date" type="date" name="date" value={job.date} onChange={handleChange} required />
      </InputContainer>

      <InputContainer>
        <StyledLabel htmlFor="info">Info:</StyledLabel>
        <StyledTextArea id="info" name="info" value={job.info} onChange={handleChange} rows="5" required />
      </InputContainer>

      <InputContainer>
        <StyledLabel htmlFor="infrastructure">Infrastructure:</StyledLabel>
        <StyledTextArea id="infrastructure" name="infrastructure" value={job.infrastructure} onChange={handleChange} rows="5" required />
      </InputContainer>

      <InputContainer>
        <StyledLabel htmlFor="goals">Goals:</StyledLabel>
        <StyledTextArea id="goals" name="goals" value={job.goals} onChange={handleChange} rows="5" required />
      </InputContainer>

      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  </FormContainer>
);
}

export default NewJobListing;
