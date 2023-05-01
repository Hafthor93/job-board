import React, { useState } from "react";
import styled from "styled-components";
import JobListing from "./JobListing";
import jobListings from "../mockData/jobListings";

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 1rem;
`;

const Input = styled.input`
  width: 35%;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 3px;
  font-weight: bold;
  
`;

const Select = styled.select`
  margin-right: 1rem;
  padding: 0.5rem;
`;

function Filter() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredJobs = jobListings.filter((job) => {
    if (filter && job.type !== filter) {
      return false;
    }

    if (
      query &&
      !(
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase()) ||
        job.location.toLowerCase().includes(query.toLowerCase())
      )
    ) {
      return false;
    }

    return true;
  });

  return (
    <>
      <FilterContainer>
        <Label htmlFor="filter">Filter by:</Label>
        <Select id="filter" onChange={handleFilterChange}>
          <option value="">No filter added</option>
          <option value="Summer Job">Summer job</option>
          <option value="Full-Time">Full-time</option>
          <option value="Part-Time">Part-time</option>
          
        </Select>
        <Input type="text" placeholder="Search" onChange={handleInputChange} />
      </FilterContainer>
      {filteredJobs.map((job) => (
        <JobListing key={job.id} job={job} />
      ))}
    </>
  );
}

export default Filter;
