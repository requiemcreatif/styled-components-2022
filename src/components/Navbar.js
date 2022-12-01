import React from "react";
import styled from "styled-components";

// Styled Components
const NavContainer = styled.nav`
    background-color: #F2F2F2;
    //background: #203F59;
    height: 80px ;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    
    nav {
    background-color: #F2F2F2;
    color: #203F59;
    //background-color: #203F59;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width:1400px;
    margin: 0 auto;
    padding: 2rem 4rem;
     ul {
        display: flex;
        list-style: none;

        li {
            margin-left: 2rem;
            
        a {
            text-decoration: none;
            color: #203F59;
            padding: 1rem;
        }

        &:hover {
            //background-color: #000;
            color: #fff;
        }
      }
     }
  }
`

const Navbar = () => {
  return( 
  <NavContainer>
    <nav>
        <h1>Logo</h1>
        <ul>
            <li><a href="/">One</a></li>
            <li><a href="/">Two</a></li>
            <li><a href="/">Three</a></li>
            <li><a href="/">Four</a></li>
        </ul>
    </nav>
  </NavContainer>);
};

export default Navbar;
