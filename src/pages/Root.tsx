import React from 'react';
import styled from '@emotion/styled';
import MainLayout from '../layouts/MainLayout';
import Navbar from '../components/Navbar';

import Main from './Main/Main';
import Footer from './Footer/Footer';


// background color should be dark blue
const Background = styled.div`
    background-color: #0d0a1d;
    top: 0;
    left: 0;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-x: hidden;
    max-width: 100vw !important;

    text-align: center;
    // the text should be white
    color: #fff;
    // the text should be bold
    // the text size should be 1.5rem
    font-size: 1.3rem;

    // inter font should be used
    font-family: 'Inter', sans-serif;
`;

const BuiltProjects = () => {
    return (
        <Background>
            <MainLayout
                Nav={<Navbar />}
                Main={<Main />}
                Footer={<Footer />}
            />
        </Background>
    );
}


export default BuiltProjects;