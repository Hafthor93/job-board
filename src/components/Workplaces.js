import React, { useState } from 'react';
import styled from 'styled-components';
import CompanyCard from '../components/CompanyCard';
import mockCompanies from '../mockData/mockCompanies';



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
  margin-bottom: -3rem;
  
`;


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-top: 1rem;
`;

const SearchContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 1rem;
  
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
`;



const Workplaces = () => {
    const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredCompanies = mockCompanies.filter((company) => {
    if (filter && company.type !== filter) {
      return false;
    }

    if (
      query &&
      !(
        (company.name && company.name.toLowerCase().includes(query.toLowerCase())) ||
        (company.about && company.about.toLowerCase().includes(query.toLowerCase())) ||
        (company.address && company.address.toLowerCase().includes(query.toLowerCase()))
      )
    ) {
      return false;
    }

    return true;
  });


  return (
    <MainContainer>
    
        <SearchContainer>
          <Input
            type="text"
            placeholder="Search companies..."
            onChange={handleInputChange}
          />
        </SearchContainer>
        <Container>
      {filteredCompanies.map((company) => (
        <CompanyCard key={company.name} {...company} />
      ))}
    </Container>
    </MainContainer>
  );
};

export default Workplaces;
