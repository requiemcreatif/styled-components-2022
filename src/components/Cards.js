import React from "react";
import styled from "styled-components";

// Styled Components
const CardContainer = styled.div`
    padding: 2rem 0;
    div {
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        @media (max-width: 768px) {
            margin: 2rem 0;
        }
        section {
            padding: 2rem;
            h2 {
                padding: 1rem 0;
            }
        }
    }
    
    img {
        width: 100%;
    }

    @media (min-width: 768px) {
        margin:  0 auto;
        max-width: 1400px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
`

const Cards = ({images}) => {
  return( 
  <CardContainer>
        {images.map((image) => (
            <div>
                <img src={image.imgUrl} alt="" />
                <section>
                <h2>{image.title} </h2>
                <p>{image.text} </p>
                </section>
            </div>
        ))}  
  </CardContainer>);
};

export default Cards;
