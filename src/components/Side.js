import React from "react";
import styled from "styled-components";

// Styled Components
const SideContainer = styled.div`
    margin: 2rem 0;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    background-color: #F2F2F2;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        h2 {
            color: #203F59;
            font-family: "Bebas Neue", cursive;
            font-size: 15em;
            text-align: center;
            &:hover {
                color: #F2A766;
                scale: 1.1;
        }
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
