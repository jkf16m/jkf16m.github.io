/**
 * These are small components that are used to show information about the technologies used in the projects
 * 
 * They have the name of the technology and a small image png of the technology
 */

import React from 'react';
import styled from '@emotion/styled';




const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
`;

const TechImage = styled.img`
    width: 2rem;
    height: 2rem;
`;

const TechName = styled.p`
    font-size: 0.8rem;
    margin: 0;
    margin-top: 0.6rem;
`;

interface TechProps{
    name: string;
    image: string;
}

const Tech = ({name, image}: TechProps) => {
    return (
        <Container>
            <TechImage src={image} alt={name} />
            <TechName>{name}</TechName>
        </Container>
    );
}


const default_image = "https://www.svgrepo.com/show/463603/package-alt.svg";

export const ReactJs = <Tech
    name="React"
    image='https://cdn.worldvectorlogo.com/logos/react-2.svg'
/>;

export const TypeScript = <Tech
    name="TypeScript"
    image='https://cdn.worldvectorlogo.com/logos/typescript.svg'
/>;

export const NETCore = <Tech
    name=".NET Core"
    image='https://cdn.worldvectorlogo.com/logos/dot-net-core-7.svg'
/>;

export const CSharp = <Tech
    name="C#"
    image='https://cdn.worldvectorlogo.com/logos/c--4.svg'
/>;

export const JavaScript = <Tech
    name="JavaScript"
    image='https://cdn.worldvectorlogo.com/logos/javascript.svg'
/>;

export const HTML = <Tech
    name="HTML"
    image='https://cdn.worldvectorlogo.com/logos/html-1.svg'
/>;

export const MSSQL = <Tech
    name="MSSQL"
    image='https://cdn.worldvectorlogo.com/logos/microsoft-sql-server-1.svg'
/>;

export const CSS = <Tech
    name="CSS"
    image='https://cdn.worldvectorlogo.com/logos/css-3.svg'
/>;

export const Python = <Tech
    name="Python"
    image='https://cdn.worldvectorlogo.com/logos/python-5.svg'
/>;

export const Lua = <Tech
    name="Lua"
    image='https://cdn.worldvectorlogo.com/logos/lua-2.svg'
/>;

export const EFCore = <Tech
    name="EF Core"
    image='https://cdn.worldvectorlogo.com/logos/dot-net-core-7.svg'
/>;

export const Emotion= <Tech
    name="Emotion"
    image={default_image}
/>;