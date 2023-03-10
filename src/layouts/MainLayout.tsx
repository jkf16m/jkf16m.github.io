import styled from "@emotion/styled";
import React from "react";

const Layout = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template: "nav nav nav" 1fr
                    "main main main" 5fr
                    "footer footer footer" 1fr / 1fr 1fr 1fr;

    // grid-template for tablet
    @media (max-width: 1024px){
        grid-template: "nav" 1fr
                        "main" 5fr
                        "footer" 1fr / 1fr;
    }


`;

const Nav = styled.div`
    grid-area: nav;
    width: 100%;
    height: 100%;
`;
const Main = styled.div`
    grid-area: main;
    width: 100%;
    height: 100%;
`;
const Footer = styled.div`
    grid-area: footer;
    width: 100%;
    height: 100%;
`;

interface MainLayoutProps{
    Nav: JSX.Element;
    Main: JSX.Element;
    Footer: JSX.Element;
}

const MainLayout = (props: MainLayoutProps)=>{
    return (
        <Layout>
            <Nav>{props.Nav}</Nav>
            <Main>{props.Main}</Main>
            <Footer>{props.Footer}</Footer>
        </Layout>
    );
}

export default MainLayout;