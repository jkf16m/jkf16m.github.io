import React from "react";
import styled from "@emotion/styled";

import AboutMe from "./AboutMe";
import Projects from "./Projects";
import AnimatedTextPresentation from "../../components/AnimatedTextPresentation";


const Main = () => {
    return (
        <div>
            <AboutMe/>
            <Projects/>
        </div>
    );
}

export default Main;