import React from "react";
import ProjectsContainer, {Project} from "../../components/Project";


const Projects = () => {
    return (
        <div>
            <ProjectsContainer>
                <Project
                    title="Project 1"
                    description={["This is a description of the project"]}
                    githubLink="https://github.com/jkf16m/functional_tic_tac_toe"
                />
            </ProjectsContainer>

        </div>
    );
}

export default Projects;