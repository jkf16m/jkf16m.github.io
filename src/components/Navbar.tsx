import styled from "@emotion/styled";
import React from "react";


import NavbarLayout, {Logo, Nav as Nav2} from "../layouts/NavbarLayout";
/**
 * This is a centered navbar component, the elements are centered in the navbar
 * It is dark blue and has a small border at the bottom
 * @description Navbar component
 * @returns {JSX.Element} Navbar component
 * 
 */
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 10vh;
    width: 100vw;
    background-color: #090916;
    border-bottom: 1px solid #1d1d1d;
    margin: 0 auto;
    align-items: center;
    // its sticky
    position: sticky;

    font-size: 0.8em;
`;

// centered element
const Element = styled.a`
    display: text;
    &:hover{
        cursor: pointer;
        // the background color should be black and change with animated transition
        background-color: #000000;
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
        <NavbarLayout>
            <Logo></Logo>
            <Nav2>
                <Element href="#about-me">About me</Element>
                <Element href="#projects">Projects I made</Element>
                <Element href="#contact-me">Contact me</Element>
            </Nav2>
        </NavbarLayout>
    );
}

export default Navbar;