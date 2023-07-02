import styled from "@emotion/styled";
import React from "react";

const Layout = styled.div`
    width: 100vw;
    display: grid;
    grid-template:  "presentation presentation presentation presentation presentation" 100vh
                    ". side main detail . " 5fr
    / 1fr 1fr 3fr 1fr 1fr;

    // grid-template for tablet
    @media (max-width: 1024px){
        grid-template: "presentation presentation presentation" 100vh
                        "side main detail" 5fr
        / 3fr 7fr 3fr;
    }


`;

const Presentation = styled.div`
    grid-area: presentation;
    width: 100%;
    height: 100%;
`;

const Nav = styled.div`
    grid-area: side;
    width: 100%;
    height: 100%;
`;
const Main = styled.div`
    grid-area: main;
    width: 100%;
    height: 100%;
`;

interface MainLayoutProps{
    Presentation: JSX.Element;
    Nav: JSX.Element;
    Main: JSX.Element;
}

const MainLayout = (props: MainLayoutProps)=>{
    return (
        <Layout>
            <Presentation>{props.Presentation}</Presentation>          
            <Nav>{props.Nav}</Nav>
            <Main>{props.Main}</Main>
        </Layout>
    );
}

export default MainLayout;