import styled from "@emotion/styled";
import React from "react";


import NavbarLayout, {Logo} from "../layouts/NavbarLayout";
import theme from "../theme";

const margin = "1em";
/**
 * This is a centered navbar component, the elements are centered in the navbar
 * It is dark blue and has a small border at the bottom
 * @description Navbar component
 * @returns {JSX.Element} Navbar component
 * 
 */
const Nav = styled.nav`
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 30px;
    width: calc(100% - 2/${margin});
    background-color: ${theme.colors.navbar};
    align-items: center;
    // its sticky
    position: sticky;

    font-size: 0.8em;

`;

// centered element
const Element = styled.a`
    display: text;
    padding-left: 1rem;
    padding-right: 1rem;
    &:hover{
        cursor: pointer;
        // the background color should be black and change with animated transition
        background-color: #12101bdc;
        // the borders should be round
        border-radius: .5rem;
        // the padding should be 1rem
        
        // transition the background color and the padding
        transition: background-color .5s, padding .5s ease-in-out;
    }
    // on click the background should be brighter
    &:active{
        background-color: #1d1d1d;
    }
    margin: 0 auto;
    text-decoration: none;
    color: #fff;
`;

const Navbar = ()=>{
    return (
        <Nav>
            <Element href="#about-me">About</Element>
            <Element href="#projects">Projects</Element>
            <Element href="#contact-me">Contact me</Element>
        </Nav>
    );
}

export default Navbar;