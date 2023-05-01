import React from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import styled from 'styled-components';
import jobs from "../mockData/jobListings";
import JobListing from "../components/JobListing";

const JobDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const JobLogo = styled.img`
  width: 128px;
  height: 128px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const JobTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 1rem;
`;

const JobLocation = styled.p`
  font-size: 24px;
  color: #666;
  margin-bottom: 0.5rem;
`;

const JobType = styled.p`
  font-size: 24px;
  color: #666;
  margin-bottom: 0.5rem;
`;

const JobCompany = styled.p`
  font-size: 24px;
  color: #666;
  margin-bottom: 2rem;
`;

const JobDescription = styled.p`
  font-size: 24px;
  margin-bottom: 2rem;
`;

const Requirements = styled.ul`
  font-size: 24px;
  margin-bottom: 2rem;
  list-style: circle;
  padding-left: 2rem;
`;

const RequirementItem = styled.li`
  margin: 0.5rem 0;
`;

const Date = styled.p`
  font-size: 24px;
  margin-bottom: 2rem;
  color: #666;
`;

const BackButton = styled(Link)`
  padding: 8px;
  font-size: 16px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
`;

const JobDetails = () => {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));
  if (!job) {
    return <div>Job not found</div>;
  }


  return (
    <JobDetailsContainer>
      <JobLogo src={job && job.logo} alt={job && job.company} />
      <JobTitle>{job && job.title}</JobTitle>
      <JobDescription>{job && job.description}</JobDescription>
      <JobLocation>{job && job.location}</JobLocation>
      <JobType>{job && job.type}</JobType>
      <JobCompany>Company: {job && job.company}</JobCompany>
      <Requirements>
        {job && job.requirements.map((requirement, index) => (
          <RequirementItem key={index}>{requirement}</RequirementItem>
        ))}
      </Requirements>
      <Date>{job && job.date}</Date>
      <BackButton to="/">Back to Home</BackButton>
    </JobDetailsContainer>
  );
};

export default JobDetails;
