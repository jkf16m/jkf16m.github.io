import React from "react";

import styled from "@emotion/styled";


const Text = styled.p`
    font-size: 1em;
    color: #fff;
    margin: 0 auto;
    text-align: center;
    // roboto mono font should be used
    font-family: 'Roboto Mono', monospace;
`;

/**
 * This component is used to display text in a animated way.
 * It will display the text char by char, respecting punctuation as a delay.
 * 
 * This code uses a timeout to display the text char by char.
 * 
 * It doesn't use intervals
 * It won't trigger a "React maximum update depth exceeded" error.
 * it shows a typewriter effect.
 */
const AnimatedTextPresentation = ({ text }: { text: string[]}) => {

    return (<Text>{text.map((t)=>{return t;})}</Text>);

}


export default AnimatedTextPresentation;