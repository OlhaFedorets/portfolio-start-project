import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/logo";
import {Menu} from "../../components/menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: #a2f1a2;
    display: flex;
    justify-content: space-between;
`
