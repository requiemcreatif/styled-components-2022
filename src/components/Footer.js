import React from "react";
import styled from "styled-components";

// Styled Components
const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 4rem 4rem;
    background-color: #000;
    color: #fff;
`

const Footer = () => {
  return(
  <FooterContainer>
    <p>©MasterSchool 2022 - Styled Components</p>
  </FooterContainer>);
};

export default Footer;
