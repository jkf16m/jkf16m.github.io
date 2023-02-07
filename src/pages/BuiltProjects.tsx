import React from 'react';
import styled from '@emotion/styled';

const H1 = styled.h1`
`;

// background color should be dark blue
const Background = styled.div`
    background-color: #0f0f0f;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
`;

const BuiltProjects = () => {
    return (
        <Background>
            <H1>Built Projects</H1>
        </Background>
    );
}


export default BuiltProjects;