import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import jobs from"../mockData/jobListings";
import { useDispatch } from 'react-redux';
import { addJob, removeJob } from "../redux/actions/addJobAction";
import jobReducer from "../redux/reducers/jobReducer";
import JobDetails from "../pages/JobDetails";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBuilding, faCalendar } from '@fortawesome/free-solid-svg-icons';

const JobContainer = styled.div`
  border: 2px solid gray;
  border-radius: 7px;
  padding: 16px;
  margin-bottom: 16px;
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

const JobTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
  color: #38598b;
  text-decoration: none;
`;

const JobCompany = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 4px;
  color: black;
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

const JobInfo = styled.div`
  flex: 1;
  text-decoration: none;
`;

const JobLogo = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
  margin-right: 16px;
`;


const JobDescription = styled.p`
  font-size: 18px;
  margin-bottom: 16px;
`;

const JobRequirementsTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
  color: #38598b;
`;


const JobRequirements = styled.div`
  margin-bottom: 16px;
`;


const JobDate = styled.span`
  font-size: 16px;
  color: #666;
`;

const Info = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

const Infrastructure = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

const Goals = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

const RemoveButton = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  align-self: flex-end;

  &:hover {
    background-color: #ff6659;
  }
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


const JobCard = ({ id, title, company, location, type, logo, description, requirements, date, info, infrastructure, goals }) => {
    
      const dispatch = useDispatch();
      const handleRemoveJob = () => {
        dispatch(removeJob(id));
    };
    

    return (
    <JobContainer>
        <JobHeader>
        
      <JobLogo src={logo} alt="Company Logo" />
      <JobInfo>
      <JobTitle>{title}</JobTitle>
      <JobLocation><LocationIcon icon={faMapMarkerAlt} />{location}</JobLocation>
      <JobCompany><CompanyIcon icon={faBuilding} />{company}</JobCompany>
      <JobType>{type}</JobType>
      </JobInfo>
      </JobHeader>
      <JobDescription>{description}</JobDescription>
      <JobRequirements>
  <JobRequirementsTitle>Requirements: </JobRequirementsTitle> 
  <ul className="requirements-list">
    {requirements
      ?.split("\n")
      .map((requirement, index) => (
        <li key={index}>{requirement}</li>
      ))}
  </ul>
</JobRequirements>

      <JobDate>Date Posted: <CalenderLogo icon={faCalendar} />{date}</JobDate>
       <Info>{info}</Info>
      <Infrastructure>{infrastructure}</Infrastructure>
      <Goals>{goals}</Goals>
      <ButtonsContainer>
      <ViewButton as={Link} to={`/jobdetails/${id}`}>View</ViewButton>
        <ApplyButton>Apply Now</ApplyButton>
      </ButtonsContainer>
      <RemoveButton onClick={handleRemoveJob}>Remove</RemoveButton>

      
    </JobContainer>
  );
};

export default JobCard;



