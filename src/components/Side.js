import React from "react";
import styled from "styled-components";

// Styled Components
const SideContainer = styled.div`
    margin: 2rem 0;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        h2 {
            color: #000;
            font-family: "Bebas Neue", cursive;
            font-size: 10em;
        }
    }
`

const Side = () => {
  return( 
  <SideContainer>
    <div>
        <h2>Side con tent</h2>
    </div>
  </SideContainer>);
};

export default Side;
