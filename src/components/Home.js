import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./Navbar";
import Filter from "./Filter";
import JobListing from "./JobListing";
import jobListings from "../mockData/jobListings";
import NewJobListing from "../pages/NewJobListing"
import JobDetails from "../pages/JobDetails";
import JobList from "./JobList";



const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0; 
  }
`;


const Container = styled.div`
  max-width: 100%;
  margin: auto; 
  
`;


const JobListingsContainer = styled.div`
  display: flex;
  flex-direction: column; 
  margin-top: 2rem;
  
`;




function Home() {
  const [jobListingsToShow, setJobListingsToShow] = useState(jobListings);
  
  

  const handleFiltering = (selectedFilter) => {
    if (selectedFilter === "") {
      setJobListingsToShow(jobListings);
    } else {
      const filteredListings = jobListings.filter(
        (job) => job.type === selectedFilter
      );
      setJobListingsToShow(filteredListings);
    }
  };


  

  return (
    <>
      <GlobalStyle />
      <Container>
      <Filter handleFiltering={handleFiltering} />
      <JobListingsContainer />
      <JobList />
      </Container>
    </>
  );
}

export default Home;
