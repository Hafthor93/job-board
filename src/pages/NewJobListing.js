import React, { useState } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { addJob } from '../redux/actions/addJobAction';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';



const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-weight: bold;
  }

  input[type="text"],
  input[type="date"],
  textarea {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;

    &:focus {
      outline: none;
      border-color: #0077ff;
      box-shadow: 0 0 5px rgba(0, 119, 255, 0.5);
    }
  }

  input[type="date"] {
    width: 100%;
    max-width: 200px;
  }

  input[type="file"] {
    margin-bottom: 20px;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    button {
      padding: 10px 20px;
      border-radius: 5px;
      border: none;
      background-color: #0077ff;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #0066cc;
      }
    }
  }
`;

const StyledRequirement = styled.div`
  margin-bottom: 0.5rem;
`;





const StyledTextArea = styled.textarea`
  height: 200px;
`;

const StyledBulletList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
`;


function NewJobListing(props) {
    console.log("NewJobListing rendered");
  const [job, setJob] = useState({
    id: '',
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

  const handleSubmit = (event) => {
    console.log("handleSubmit called");
    event.preventDefault();
    console.log("Dispatching addJob action with job:", job);
    dispatch(addJob(job));
    setJob({
      id: '',
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
    <StyledForm onSubmit={handleSubmit}>
      <label>
        Job ID:
        <input type="text" name="id" value={job.id} onChange={handleChange} />
      </label>
      <label>
        Job Title:
        <input type="text" name="title" value={job.title} onChange={handleChange} />
      </label>
      <label>
        Location:
        <input type="text" name="location" value={job.location} onChange={handleChange} />
        </label>
  <label>
    Job Type:
    <input type="text" name="type" value={job.type} onChange={handleChange} />
  </label>
  <label>
    Company:
    <input type="text" name="company" value={job.company} onChange={handleChange} />
  </label>
  <label>
    Logo:
    <input type="file" accept=".jpg,.png,.jpeg" name="logo" onChange={handleFileChange} />
    {job.logo && <img src={job.logo} alt="Job Logo" height="50" />}
  </label>
  <label>
    Description:
    <StyledTextArea name="description" value={job.description} onChange={handleChange} />
  </label>
  <label>
  Requirements:
  <ul className="requirements-list">
    {job.requirements
      ?.split("\n")
      .map((requirement, index) => (
        <li key={index}>{requirement}</li>
      ))}
  </ul>
  <textarea
    name="requirements"
    value={job.requirements}
    onChange={handleChange}
    placeholder="Enter requirements (each separated by a new line)"
    rows="5"
  />
</label>


  <label>
    Date:  
    <input type= "date" name="date" value={job.date} onChange={handleChange} />
  </label>
  <label>
    Info:
    <textarea name="info" value={job.info} onChange={handleChange} rows="5" />
  </label>
  <label>
    Infrastructure:
    <textarea name="infrastructure" value={job.infrastructure} onChange={handleChange} rows="5" />
  </label>
  <label>
    Goals:
    <textarea name="goals" value={job.goals} onChange={handleChange} rows="5" />
  </label>
  <div className="button-wrapper">
    <button type="submit">Submit</button>
  </div>
</StyledForm>
);
}

export default NewJobListing;
