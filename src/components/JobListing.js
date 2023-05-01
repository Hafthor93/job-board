import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import JobDetails from "../pages/JobDetails";
import jobs from "../mockData/jobListings";


const JobContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  margin-top: 2rem;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const JobHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const JobLogo = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
  margin-right: 16px;
`;

const JobInfo = styled.div`
  flex: 1;
`;

const JobTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`;

const JobLocation = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 4px;
`;

const JobType = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 4px;
`;

const JobCompany = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 4px;
`;

const JobDescription = styled.p`
  font-size: 18px;
  margin-bottom: 16px;
`;

const JobRequirements = styled.div`
  margin-bottom: 16px;
`;

const JobRequirementsTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const JobDate = styled.span`
  font-size: 16px;
  color: #666;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ViewButton = styled(Link)`
  padding: 8px;
  font-size: 16px;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  text-decoration: none;
`;

const ApplyButton = styled.button`
  padding: 8px;
  font-size: 16px;
  background-color: #33cc33;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
`;

const JobListing = ({ job, type }) => {
  if (type && job.type !== type) {
    return null;
  }

  return (
    <JobContainer>
      <JobHeader>
        <JobLogo src={job.logo} alt={job.company} />
        <JobInfo>
          <JobTitle>{job.title}</JobTitle>
          <JobLocation>{job.location}</JobLocation>
          <JobType>{job.type}</JobType>
          <JobCompany>{job.company}</JobCompany>
        </JobInfo>
      </JobHeader>
      <JobDescription>{job.description}</JobDescription>
      <JobRequirements>
        <JobRequirementsTitle>Requirements:</JobRequirementsTitle>
        <ul>
          {job.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </JobRequirements>
      <JobDate>{job.date}</JobDate>
      <ButtonsContainer>
      <ViewButton as={Link} to={`/jobdetails/${job.id}`}>View</ViewButton>
        <ApplyButton>Apply Now</ApplyButton>
      </ButtonsContainer>
    </JobContainer>
  );
};

export default JobListing;
