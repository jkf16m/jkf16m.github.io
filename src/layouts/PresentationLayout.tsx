import styled from "@emotion/styled";
import React from "react";
import theme from "../theme";

const PrimaryColorBackground = styled.div`
    background-color: ${theme.colors.primary};
    width: 100%;
    height: 100%;

    display: grid;
`;

const DarkerColorBackground = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    background-color: ${theme.colors.primary};
    filter: brightness(0.8);
`;

const Presentation = styled.div`
    display: grid;
    height: 95%;
    width: 100%;

    grid-template: "main" 13fr
                    "secondary" 6fr
                    /1fr
`;


interface PresentationLayoutProps{
    Main: JSX.Element;
    Secondary: JSX.Element;
}
const PresentationLayout = ({
    Main,
    Secondary
}:PresentationLayoutProps)=>{
    return (
        <Presentation>
        <PrimaryColorBackground>
        {Main}
        </PrimaryColorBackground>
        <DarkerColorBackground>
            {Secondary}
        </DarkerColorBackground>
        </Presentation>

    )
}

export default PresentationLayout;