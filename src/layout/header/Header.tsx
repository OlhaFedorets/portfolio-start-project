import React from 'react';
import styled from "styled-components";
import Logo from "../../components/logo/logo";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <nav>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Skills</a>
                    </li>
                    <li>
                        <a href="">Works</a>
                    </li>
                    <li>
                        <a href="">Testimony</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: #a2f1a2;
`
