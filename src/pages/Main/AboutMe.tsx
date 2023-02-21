import styled from "@emotion/styled";
import React from "react";
import AnimatedTextPresentation from "../../components/AnimatedTextPresentation";

import coding from "../../assets/coding.png";

/**
 * This component has a background image, darkened
 */
const Container = styled.div`
    // from assets/coding.png

    background-image:linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.5)), url(${coding});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: -1;

    // paddings to have the text content
    // in the center of the screen
    padding: 4rem;
    padding-top: 1rem !important;


`;

// to revert text brightness
const TextContainer = styled.div`
    filter: brightness(1);
`;

const Title = styled.h1``;
const Description = styled.div`
`;
const P = styled.p``;

const AboutMe = ()=>{
    return (<Container>
        <TextContainer>
            <Title>About me</Title>
            <Description>
                <AnimatedTextPresentation text={
                    [
                        "Hi, I'm José Daniel Flores Morales.<br/>",
                        "I am a software developer, born in Mexico, and I'd like to share my experience with you.<br/>",
                        "I have been working as a software developer for 3 years, and I have worked with different technologies, such as:<br/>",
                        "C#, C++, Python, JavaScript, and others.<br/>",
                        
                    ]
                }/>
            </Description>
        </TextContainer>
    </Container>);
}

export default AboutMe;