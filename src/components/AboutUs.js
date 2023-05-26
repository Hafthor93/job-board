import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const HighlightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #113f67;
  padding: 50px;
  margin-bottom: 20px;
  text-align: center;
  
`;

const HighlightTitle = styled.h1`
  font-size: 2rem;
  color: white;
  margin-bottom: 20px;
`;

const HighlightText = styled.p`
  font-size: 2rem;
  color: white;
  line-height: 1.8;
`;

const TextImageContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  text-align: center;
  flex-wrap: wrap;
`;

const TextContainer = styled.div`
  max-width: 500px;
`;

const TextTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
`;

const Image = styled.img`
  max-width: 400px;
  height: auto;
  margin: 20px;
`;

const AboutPage = () => {
  return (
    <MainContainer>
      <HighlightContainer>
        
        <HighlightText>
        <HighlightTitle>About Our Job Board</HighlightTitle>
          Founded in 2023, our job board was created with a singular vision - to bridge the gap between qualified job seekers and the best job vacancies in the industry. We believe in creating opportunities and connecting possibilities. We are committed to providing our users with the latest and most relevant job vacancies tailored to their specific career preferences.
        </HighlightText>
      </HighlightContainer>
      <TextImageContainer>
        <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="About us" />
        <TextContainer>
          <TextTitle>Our Reputation</TextTitle>
          <Text>
            Over the years, we have developed a reputation for integrity and excellence. We have partnered with some of the top companies around the world and facilitated numerous successful job placements. Our platform is designed to be easy to navigate, making the job search process simple and seamless for our users.
          </Text>
        </TextContainer>
      </TextImageContainer>
      <TextImageContainer reverse>
        <Image src="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Our team" />
        <TextContainer>
          <TextTitle>Our Team</TextTitle>
          <Text>
            Our team is a group of passionate and dedicated individuals who work tirelessly to keep our job board updated with the latest vacancies. We believe in the value of work and the importance of finding a job that not only provides financial stability, but also personal fulfillment and growth.
          </Text>
        </TextContainer>
      </TextImageContainer>
      <TextImageContainer>
        <Image src="https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Our community" />
        <TextContainer>
          <TextTitle>Our Community</TextTitle>
          <Text>
            We are more than just a job board, we are a community. We stand by our users every step of the way in their job search journey, providing them with resources, tips, and support. We celebrate the victories of every job seeker that uses our platform, and we continue to strive to help more individuals find the job of their dreams.
          </Text>
        </TextContainer>
      </TextImageContainer>
      <TextContainer>
        <TextTitle>Our Mission</TextTitle>
        <Text>
          Thank you for choosing our job board. Together, let's create opportunities and connect possibilities.
        </Text>
      </TextContainer>
    </MainContainer>
  );
};

export default AboutPage;
