import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import Side from "./Side";


// Styled Components
const MainContainer = styled.div`
    max-width: 1400px;
    margin: 2rem auto;
    display: grid;
    gap: 2rem;
    grid-template-columns: 2fr 1fr;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 1rem;
        
    }
`

const Main = ({images}) => {
  return(
  <MainContainer>
    <Cards images={images}/>
    <Side />
  </MainContainer>);
};

export default Main;
