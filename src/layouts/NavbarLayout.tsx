import React from "react";
import styled from "@emotion/styled";

const NavbarLayout = styled.div`
    width: 100vw;
    display: grid;
    grid-template: "logo nav . . ." 1fr/ 1fr 3fr 1fr 1fr 1fr;
`;

export const Logo = styled.div`
    grid-area: logo;
`;

export const Nav = styled.div`
    grid-area: nav;
`;

export default NavbarLayout;