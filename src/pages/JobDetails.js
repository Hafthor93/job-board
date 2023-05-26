import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import jobs from "../mockData/jobListings";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchJobs } from '../redux/actions/addJobAction';
import { useState } from "react";
import NewJobListing from "./NewJobListing";



const JobDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 2rem;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
`;

const JobLogo = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 2rem;
  
`;

const JobTitle = styled.h2`
  font-size: 2.5rem;
  color: #345995;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const JobDescription = styled.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
  text-align: justify;
`;

const InfoBlock = styled.div`
  margin: 2rem 0;
`;

const InfoTitle = styled.h3`
  font-size: 1.8rem;
  color: #345995;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const InfoContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 5px 25px rgba(0,0,0,0.2);
  }
`;

const BackButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #345995;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2b487a;
  }
`;

const JobType = styled.p`
  font-size: 20px;
  color: #666;
  margin-bottom: 0.5rem;
`;

const JobCompany = styled.p`
  font-size: 20px;

  color: #666;
  margin-bottom: 2rem;
`;



const Requirements = styled.ul`
  font-size: 20px;
  margin-bottom: 2rem;
  list-style: circle;
  padding-left: 2rem;
`;


const JobLocation = styled.p`
  font-size: 20px;
  color: #666;
  margin-bottom: 0.5rem;
`;

const Info = styled.p`
  font-size: 1.2rem;
  
  line-height: 1.5;
  margin-bottom: 1.5rem;
  white-space: pre-wrap;
  text-align: center;
  
`;

const JobRequirementsTitle = styled.h3`
  font-size: 30px;
  margin-bottom: 1px;
  color: #38598b;
`;


const Infrastructure = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

const Goals = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

const RequirementItem = styled.li`
  margin: 0.5rem 0;
`;

const Date = styled.p`
  font-size: 20px;
  margin-bottom: 2rem;
  color: #666;
`;

const ApplyButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  margin-top: 2rem;
  font-size: 1rem;
  background: linear-gradient(to right, #42b883, #338a3e);
  color: #fff;
  
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.2s ease;
  margin-left: 2rem;
  &:hover {
    background: linear-gradient(to right, #338a3e, #2a6f31);
  }
`;

const Divider = styled.hr`
  margin: 20px 0;
  border: 0;
  border-top: 1px solid #ddd;
`;

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`https://localhost:7053/api/Jobs/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch job details');
        }
        const data = await response.json();
        setJob({ ...data, requirements: data.requirements.split('\n') });
      } catch (error) {
        console.error(error);
      }
    };
  
    const jobFromMockData = jobs.find((job) => job.id === parseInt(id));
    if (jobFromMockData) {
      setJob(jobFromMockData);
    } else {
      fetchJobDetails();
    }
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }


  return (
    <JobDetailsContainer>
      <JobLogo src={job && job.logo} alt={job && job.company} />
      <JobTitle>{job && job.title}</JobTitle>

      <InfoBlock>
        <InfoTitle>Description</InfoTitle>
        <JobDescription>{job.description}</JobDescription>
      </InfoBlock>

      <InfoContainer>
        <JobLocation>{job && job.location}</JobLocation>
        <JobType>{job && job.type}</JobType>
        <JobCompany>Company: {job && job.company}</JobCompany>
        <JobRequirementsTitle>Requirements </JobRequirementsTitle>
        {Array.isArray(job.requirements) && job.requirements.length > 0 ? (
          <Requirements>
            {job.requirements.map((requirement, index) => (
              <RequirementItem key={index}>{requirement}</RequirementItem>
            ))}
          </Requirements>
        ) : (
          <p>No requirements available.</p>
        )}
        <Divider />
        <Info>About <strong>{job.company}</strong>: {job.info}</Info>
        <Divider />
        <Infrastructure><strong>{job.company} Infrastructure</strong>: {job.infrastructure}</Infrastructure>
        <Divider />
        <Goals>Our Goals here at <strong>{job.company}</strong> {job.goals}</Goals>
        <Divider />
        <Date>Date Posted: {job && job.date}</Date>
        <BackButton to="/">Back to Home</BackButton>
        <ApplyButton to="/jobapplication">Apply</ApplyButton>
      </InfoContainer>
    </JobDetailsContainer>
  );
};

export default JobDetails;
