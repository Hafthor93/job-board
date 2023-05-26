import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { addJob, removeJob } from "../redux/actions/addJobAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBuilding, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";


const JobContainer = styled.div`
  border: none;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;
  margin-top: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  width: 50vw;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.2);
  }
`;

const JobHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  text-decoration: none;
`;

const JobCompany = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 4px;
  color: black;
`;

const JobTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
  color: #38598b;
`;

const JobLocation = styled.p`
  font-size: 16px;
  margin-bottom: 4px;
  color: #666;
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
  margin-top: 2rem;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #2a4565;
  }
`;

const ApplyButton = styled.button`
  padding: 8px;
  font-size: 16px;
  background: linear-gradient(to right, #42b883, #338a3e);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  display: flex;
  transition: all 0.3s ease;
  text-decoration: none;
  &:hover {
    background: linear-gradient(to right, #338a3e, #2a6f31);
  }
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

        fetch(`https://localhost:7053/api/Jobs/${id}`, {
      method: "DELETE",
    })
      .then(response => {
        if (response.ok) {
        
          console.log("Job removed successfully");
        } else {
          
          console.error("Failed to remove job");
        }
      })
      .catch(error => {
        console.error("Error removing job:", error);
      });
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
       {/* <Info>{info}</Info>
      <Infrastructure>{infrastructure}</Infrastructure>
      <Goals>{goals}</Goals> */}
      <ButtonsContainer>
      <ViewButton as={Link} to={`/jobdetails/${id}`}>View</ViewButton>
        <ApplyButton as={Link} to={`/jobapplication`} >Apply Now</ApplyButton>
      </ButtonsContainer>
      <RemoveButton onClick={handleRemoveJob}>Remove</RemoveButton>

      
    </JobContainer>
  );
};

export default JobCard;



