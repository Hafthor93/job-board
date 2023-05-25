import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import mockCompanies from '../mockData/mockCompanies';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CompanyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 5px 25px rgba(0,0,0,0.2);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 5px 25px rgba(0,0,0,0.2);
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
`;

const DetailContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-right: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #38598b;
`;

const About = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Address = styled.p`
  font-size: 1rem;
  color: #666;
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #38598b;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #2a3f66;
  }
`;

const CompanyDetails = () => {
  const { id } = useParams();

  const company = mockCompanies.find((company) => company.id === parseInt(id));

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <MainContainer>
      <CompanyContainer>
        <DetailContainer>
          <TitleContainer>
            <Logo src={company.logo} alt={company.name} />
            <Title>{company.name}</Title>
          </TitleContainer>
          <h2>Workplaces</h2>
        </DetailContainer>
        <ImageContainer bgImage={company.backgroundImage} />
      </CompanyContainer>
      <InfoContainer>
        <DetailContainer>
          <h3>About the Company</h3>
          <About>{company.about}<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat, ligula ac consectetur auctor, risus mi facilisis velit, a interdum est metus id augue. Morbi laoreet.</About>
        </DetailContainer>
        <DetailContainer>
          <h3>Address</h3>
          <Address>{company.address}</Address>
        </DetailContainer>
      </InfoContainer>
      <BackButton onClick={() => window.history.back()}>Go back</BackButton>
    </MainContainer>
  );
};

export default CompanyDetails;
