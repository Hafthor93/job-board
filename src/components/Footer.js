import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #113f67;
  color: #ffffff;
  font-size: 1rem;
  margin-top: 1rem;
  bottom: 0;
`;

const Link = styled.a`
  color: #ffffff;
  margin: 0 15px;
  text-decoration: none;

  &:hover {
    color: #87ceeb;
  }
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; {new Date().getFullYear()} Job Board. All rights reserved. | 
      <Link href="#">Privacy Policy</Link> | 
      <Link href="#">Terms of Service</Link>
    </p>
  </FooterContainer>
);

export default Footer;
