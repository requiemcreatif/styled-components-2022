import React from "react";
import styled from "styled-components";

// Styled Components
const NavContainer = styled.nav`
    nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width:1400px;
    margin: 0 auto;
    padding: 2rem 4rem;
     ul {
        display: flex;
        list-style: none;
        a {
            text-decoration: none;
            color: #000;
            padding: 1rem;
        }
     }}
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
