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
//import my-birthday-hubble
import myBirthdayHubble from "../assets/my-birthday-hubble.jpg";
//import RetroGaming ttf
import "./Project.css";


const ProjectCard = styled.div`
    font-family: "RetroGaming";
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: auto;
    height: auto;
    padding: 1rem;
    padding-top: 0;
    // gray border
    border: 8px solid #ffffff;
    // its a gradient from black to dark blue, from the top to the bottom
    background: linear-gradient(180deg, #03010c 0%, #0d0a1d 100%);
    border-radius: .5rem;
    margin: 2rem;

    // when its a big screen, the project should have a width of 45%
    // and centered

`;



const ProjectsContainer = styled.div`
// they have to be displayed in a row
    // background image of my NASA birthday picture taken by hubble
    background-image: linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9)),url(${myBirthdayHubble});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    // darken the background image
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    border-top: 3px solid #1d1d1d;
    align-items: center;
    // center the projects
    width: 90% auto;
    height: 100%;
    background-color: black;
    margin: 0;

    // when the screen is big, the projects should be displayed in a column but intercalated from left to right
    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        
    }

    // align the projects to left ;


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
    usedTechnologies: JSX.Element[];
    image?: string;
    githubLink?: string;
}
export const Project = ({title, description, image, githubLink, usedTechnologies}: ProjectProps) => {

    return (
        <ProjectCard className="pixel-corners">
            <h3 style={
                // This should have a darker background, that covers the whole title
                {
                    // darker blue
                    borderRadius: "0.5rem",
                    width: "100%",
                    textAlign: "center",
                    color: "#fff"

                }

            }>{title}</h3>
            {/* Display used technologies horizontally */}
            {usedTechnologies &&
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
                    {usedTechnologies.map((tech, index) => {
                        return <div key={index} style={{margin: "0 0.5rem"}}>{tech}</div>
                    })}
                </div>
            }
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
        </ProjectCard>
    )
}

export default ProjectsContainer;