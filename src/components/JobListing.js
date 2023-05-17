import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import JobDetails from "../pages/JobDetails";
import jobs from "../mockData/jobListings";
import NewJobListing from "../pages/NewJobListing";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBuilding, faCalendar } from '@fortawesome/free-solid-svg-icons';



const JobContainer = styled.div`
  border: 2px solid gray;
  border-radius: 7px;
  padding: 16px;
  margin-bottom: 16px;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  width: 50vw;
  display: flex;
  flex-direction: column;
  &:hover {
    border-color: #38598b;
  }
`;


const JobHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  text-decoration: none;
`;

const JobLogo = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
  margin-right: 16px;
`;

const JobInfo = styled.div`
  flex: 1;
  text-decoration: none;
`;

const JobTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
  color: #38598b;
  text-decoration: none;
`;

const JobLocation = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 4px;
  color: black;
  text-decoration: none;
`;

const JobType = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 4px;
  color: black;
`;

const JobCompany = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 4px;
  color: black;
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
  color: #38598b;
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
  background-color: #38598b;
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
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  display: flex;
`;


const LocationIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  color: #38598b;
`;

const CompanyIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  color: #38598b;
`;

const CalenderLogo = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  color: #38598b;
`;




const JobListing = ({job, type }) => {

  if (type && job.type !== type) {
    return null;
  }

  

  return (
    <>
    <JobContainer>
      <JobHeader>
        <JobLogo src={job.logo} alt={job.company} />
        <JobInfo>
          <JobTitle>{job.title}</JobTitle>
          <JobLocation><LocationIcon icon={faMapMarkerAlt} />{job.location}</JobLocation>
          <JobCompany><CompanyIcon icon={faBuilding} />{job.company}</JobCompany>
          <JobType>{job.type}</JobType>
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
      <JobDate>Date Posted: <CalenderLogo icon={faCalendar} />{job.date}</JobDate>
      <ButtonsContainer>
        <ViewButton as={Link} to={`/jobdetails/${job.id}`}>View</ViewButton>
        <ApplyButton>Apply Now</ApplyButton>
      </ButtonsContainer>
    </JobContainer></>
    
  );
};

const mapStateToProps = state => ({
  jobs: state.jobs
});

export default connect(mapStateToProps)(JobListing);
