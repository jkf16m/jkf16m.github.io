import React from "react";
import ProjectsContainer, {Project} from "../../components/Project";

import * as Tech from "../../components/Tech";

const Projects = () => {
    return (
        <div>
            <ProjectsContainer>
                <Project
                    title="Ravisa - CartaPorte"
                    usedTechnologies={
                        [
                            Tech.ReactJs,
                            Tech.TypeScript,
                            Tech.NETCore,
                            Tech.MSSQL,
                            Tech.EFCore
                        ]
                    }
                    description={
                        [
                            "This project was made for a company called Ravisa",
                            "It is a web application that allows the user to create a \"Bill of Lading\" (CartaPorte)",
                            "with customizable templates and really different data from customer to customer.",
                            "The duration of the project was approximately 6 months.",
                            "Unfortunately, I can't provide the source code of this project but I can talk about how it was made"
                        ]
                    }
                />
                <Project
                    title="jkf16m - Portfolio website"
                    usedTechnologies={
                        [
                            Tech.ReactJs,
                            Tech.TypeScript,
                            Tech.HTML,
                            Tech.CSS,
                            Tech.Emotion
                        ]
                    }
                    description={
                        [
                            "This is the website you are currently visiting",
                            "It is a portfolio website that I made to show my projects and my skills",
                            "I thought about making it with Html and Css only but I wanted to try out Emotion first, and try to make the website more maintainable",

                        ]
                    }
                />
            </ProjectsContainer>

        </div>
    );
}

export default Projects;