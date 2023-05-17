import React, { useState } from "react";
import styled from "styled-components";
import JobListing from "./JobListing";
import jobListings from "../mockData/jobListings";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #f1f1f1;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  width: 100%;
`;

const SearchContainer = styled.div`
  margin-right: 1.5rem;
  width: 30%;
  display: flex;
`;

const Input = styled.input`
  padding: 0.5rem;
  width: 100%;
  border: none;
  border-radius: 25px;
  font-size: 0.9rem;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  outline: none;
  &:focus {
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.2);
  }
`;

const SearchIcon = styled.i`
  position: absolute;
  right: 20px;
`;

const FilterButton = styled.button`
  
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 25px;
  font-size: 0.7rem;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  outline: none;
  margin: 0.5rem 0;
  cursor: pointer;
  background: ${props => props.active ? '#38598b' : '#fff'};
  color: ${props => props.active ? '#fff' : '#38598b'};
  &:focus {
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.2);
  }
`;

function Filter() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
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
    <Container>
      <FilterContainer>
        <SearchContainer>
          <Input
            type="text"
            placeholder="Search jobs..."
            onChange={handleInputChange}
          />
          <SearchIcon icon={faSearch}></SearchIcon>
        </SearchContainer>
        <FilterButton active={filter === ""} onClick={() => handleFilterChange("")}>No filter</FilterButton>
        <FilterButton active={filter === "Summer Job"} onClick={() => handleFilterChange("Summer Job")}>Summer Job</FilterButton>
        <FilterButton active={filter === "Full-Time"} onClick={() => handleFilterChange("Full-Time")}>Full-Time</FilterButton>
        <FilterButton active={filter === "Part-Time"} onClick={() => handleFilterChange("Part-Time")}>Part-Time</FilterButton>
      </FilterContainer>
      {filteredJobs.map((job) => (
        <JobListing key={job.id} job={job} />
      ))}
      </Container>
    </>
  );
}

export default Filter;

