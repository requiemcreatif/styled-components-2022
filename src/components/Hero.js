import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 4rem;
    background: #203F59;
    //background: #1A1826;
    color: #fff;
    height: auto;
    max-width: 1400px;
    margin: 0 auto;
    padding: 10rem 4rem;
    
    h1 {
        font-size: 10em;
        color: #F2A766;
    }
    h2 {
        font-size: 1.5em;
        font-weight: 300;
    }
    button {
        padding: 1.5rem 2.5rem;
        background: transparent;
        color: #F2A766;
        border: #F2A766 solid 1px;
        border-radius: 5px;
        font-size: 1.5rem;
        width:200px;
        cursor: pointer;
        &:hover {
            background: #F2A766;
            color: #fff;
        }
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 5em;
        }
        h2 {
            font-size: 1.2em;
        }
    }
`

const Hero = () => {
  return( 
  <HeroContainer>
    <h1>THIS IS STYLED COMPONENTS</h1>
    <h2>A React-specific CSS-in-JS styling solution</h2>
    <button>Read more</button>
  </HeroContainer>);
};

export default Hero;
