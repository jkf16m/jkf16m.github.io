import React from "react";
import styled from "@emotion/styled";

const FooterStyle = styled.footer`
    display: flex;
    justify-content: space-between;
    height: 10vh;
    width: 100vw;
    background-color: #090916;
    border-top: 1px solid #1d1d1d;
    margin: 0 auto;
    align-items: center;
`;

const ContactMeLink = styled.a`
    display: text;
    &:hover{
        cursor: pointer;
    }
    margin: 0 auto;
    text-decoration: none;
    color: #fff;
`;

const ContactMe = ({ href, target, email, whatsapp }: { href: string, target: string, email: string, whatsapp: string }) =>
    <ContactMeLink href = {href} target = {target} />


const Footer = () => {
    return (
        <div>
            <FooterStyle>
                <ContactMe
                    href="https://www.linkedin.com/in/jos%C3%A9-daniel-flores-morales-5b1b3b1b3/"
                    target="_blank"
                    email="jkf16m@gmail.com"
                    whatsapp="https://wa.me/+528131078196"
                />
            </FooterStyle>
        </div>
    );
}

export default Footer;