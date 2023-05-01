import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Search from "./Search";
import JobListing from "./JobListing";
import jobListings from "../mockData/jobListings";
import JobDetails from "../pages/JobDetails";



const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-color: #F0F4FD;
  }
`;

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 1rem;
`;

const JobListingsContainer = styled.div`
  justify-content: space-between;
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
        
        <JobListingsContainer>
          {jobListingsToShow.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </JobListingsContainer>
      </Container>
    </>
  );
}

export default Home;
