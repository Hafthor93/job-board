import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 10px;
  margin: 20px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  width: 340px; 
  height: 400px; 
  background-color: #fff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.2);
  }
`;

const BackgroundImage = styled.div`
  flex: 1; 
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
  padding-top: 50px;
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  position: absolute;
  top: 40%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  padding: 10px;
  background: white;
  border-radius: 30%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
`;

const CompanyName = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color: #38598b;
`;

const Address = styled.p`
  font-size: 0.75rem;
  color: #666;
  margin: 0;
`;

const About = styled.p`
  font-size: 0.85rem;
  color: #666;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const CompanyCard = ({ id,name, logo, address, about, backgroundImage, image }) => {
  return (
    <Link to={`/companydetails/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card>
      <BackgroundImage image={backgroundImage} />
        <InfoContainer>
          <Logo src={logo} alt={name} />
          <CompanyName>{name}</CompanyName>
          <Address>{address}</Address>
          <About>{about}</About>
        </InfoContainer>
      </Card>
    </Link>
  );
};

export default CompanyCard;
