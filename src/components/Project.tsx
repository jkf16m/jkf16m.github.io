/**
 * This component is used to display
 * a box with the title, description and a related
 * image to a project.
 * 
 * Also is linked to a github repository
 * (if it exists) or it can be leaved empty.
 */

import React from "react";
import styled from "@emotion/styled";


const ProjectsContainer = styled.div`
// they have to be displayed in a row
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    border-top: 3px solid #1d1d1d;
    align-items: center;
    // center the projects
    width: 90% auto;
    height: 100%;
    padding: 1rem;
`;

const ProjectContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
    padding-top: 0;
    // gray border
    border: 3px solid #1d1d1d;
    // its a gradient from black to dark blue, from the top to the bottom
    background: linear-gradient(180deg, #000000 0%, #0d0a1d 100%);
    border-radius: .5rem;
    margin: 1rem;
`;

const Github = styled.a`
    // it should be bold
    font-weight: bold;
    display: text;
    &:hover{
        cursor: pointer;
    }
    margin: 0 auto;
    text-decoration: none;
    color: #fff;
`;



interface ProjectProps{
    title: string;
    description: string[];
    image?: string;
    githubLink?: string;
}
export const Project = ({title, description, image, githubLink}: ProjectProps) => {

    return (
        <ProjectContainer>
            <h3 style={
                // This should have a darker background, that covers the whole title
                {
                    // darker blue
                    padding: "0.5rem",
                    marginTop: "0",
                    marginBottom: "0",
                    borderRadius: "0.5rem",
                    width: "100%",
                    textAlign: "center",
                    color: "#fff"

                }

            }>{title}</h3>
            {description.map((_text,index)=>{
                return <p key={index}>{_text}</p>
            })}
            {image && <img src={image} alt={title} 
                style={
                    // the image should be a square
                        // has to be shown on the right
                    {
                        width: "100%",
                        height: "100%",
                        borderRadius: "0.5rem",
                        marginLeft: "auto",
                    }
                }
            />}
            {githubLink && <Github href={githubLink} target="_blank">Github</Github>}
        </ProjectContainer>
    )
}

export default ProjectsContainer;