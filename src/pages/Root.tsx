import React from 'react';
import theme from '../theme';
import styled from '@emotion/styled';
import MainLayout from '../layouts/MainLayout';
import Navbar from '../components/Navbar';

import Main from './Main/Main';
import Footer from './Footer/Footer';
import PresentationLayout from '../layouts/PresentationLayout';


// background color should be dark blue
const Background = styled.div`
    background-color: #0d0a1d;
    top: 0;
    left: 0;
    position: relative;

    justify-content: space-between;
    overflow-x: hidden;
    overflow-y: hidden;
    width: 100vw;

    text-align: center;
    // the text should be white
    color: #fff;
    // the text should be bold
    // the text size should be 1.5rem
    font-size: 1rem;

    // inter font should be used
    font-family: 'Inter', sans-serif;


    // font-size for desktop
    @media (min-width: 1024px) {
        font-size: 1.2rem;
    }

    // font-size for tables
    @media (min-width: 768px) {
        font-size: 1.5rem;
    }

    // font-size for mobile
    @media (max-width: 425px) {
        font-size: 1rem;
    }
`;


// PRESENTATION COMPONENTS
/** 
    - the presentation should be a background image
    - the background image should be darkened
    - the background image should be centered
    - there is a ribbon with the contact information (icons).
    - the ribbon should be in the middle of the screen, between the image and the limit of the
        presentation
    - the ribbon should be a little transparent.
    - there is various geometrical figures in the background, SVGs
    - There is a navbar in the top of the screen
*/

const BuiltProjects = () => {
    return (
        <Background>
            <MainLayout
                Presentation={
                    <PresentationLayout 
                        Main={
                        <div>
                        <Navbar/>
                        </div>}
                        Secondary={<></>}
                    />
                }
                Nav={<></>}
                Main={<Main 
                    Footer={<Footer/>}
                    />}
            />
        </Background>
    );
}


export default BuiltProjects;