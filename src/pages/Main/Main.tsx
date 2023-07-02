import React from "react";
import styled from "@emotion/styled";
import theme from "../../theme";

import AboutMe from "./AboutMe";
import Projects from "./Projects";
import AnimatedTextPresentation from "../../components/AnimatedTextPresentation";


const Body = styled.div`
    display: flex;
    flex-direction: column;

    text-align: justify;
    // background and card styling
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.tertiary};
    border-radius: 2rem;
    padding: 1rem;
    margin: 1rem;

    // text size
    font-size: 1rem;


`;

interface ISectionProps {
    title: string;
    paragraphs: JSX.Element[];
}

const Section = ({
    title,
    paragraphs
}: ISectionProps) => {
    return (
        <div>
            <hr />
            <h3>{title}</h3>
            <hr />
            {paragraphs.map((paragraph, index) => <div key={index}>{paragraph}</div>)}
        </div>
    )
}

interface IPropsP {
    title: string;
    text: string[];
}
const P = ({
    title,
    text
}: IPropsP) => {
    return (
        <div>
            <h4>{title}</h4>
            {text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
    )
}

interface IMainProps {
    Footer: JSX.Element;
}
const Main = ({
    Footer
}: IMainProps) => {
    return (
        <Body>
            <h3>About me</h3>
            <p>Hi, I'm José Daniel Flores Morales</p>
            <p>I am a software engineer, born in México, and I'd like to share my experience with you.
                I have been working as a software engineer for 3 years, and I have worked with different technologies, such as:
            </p>
            <ul>
                <li>C#</li>
                <li>C++</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>...</li>
            </ul>

            <Section
                title="Education"
                paragraphs={[
                    <P title="Technical in computational systems"
                        text={[
                            'Bachiller in "Escuela Industrial y Preparatoria Técnica Pablo Livas"',
                            '3 years.'
                        ]}
                    />,
                    <P  title="Engineer in computational systems"
                    text={[
                        'Engineering in "Universidad Tecnolóica Latinoamericana en Línea',
                        '3 years - currently studying it.'
                    ]}
                    />
                ]}
            />
            <Section 
                title="Experience"
                paragraphs={[
                ]}
            />

            {Footer}
        </Body>
    );
}

export default Main;