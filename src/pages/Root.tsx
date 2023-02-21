import React from 'react';
import styled from '@emotion/styled';
import MainLayout from '../layouts/MainLayout';
import Navbar from '../components/Navbar';

import Main from './Main/Main';
import Footer from './Footer/Footer';


// background color should be dark blue
const Background = styled.div`
    background-color: #0d0a1d;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
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