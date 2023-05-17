import React from "react";
import styled from "styled-components";
import JobCard from "./JobCard";
import { useSelector } from "react-redux";
import { useState } from "react";




const JobList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Jobs = () => {
const jobs = useSelector(state => state.jobs.jobs);





  return (
    <JobList>
      {jobs.map(job => (
        <JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          company={job.company}
          location={job.location}
          type={job.type}
          logo={job.logo}
          description={job.description}
          requirements={job.requirements}
          date={job.date}
          info={job.info}
          infrastructure={job.infrastructure}
          goals={job.goals}
        />
      ))}
    </JobList>
  );
};

export default Jobs;
