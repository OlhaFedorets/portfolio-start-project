import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Skill iconId={"code"}
                           title={"HTML5"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
                               "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"css"}
                           title={"CSS3"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
                               "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"react"}
                           title={"REACT"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
                               "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"typescript"}
                           title={"TypeScript"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
                               "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"styled-components"}
                           title={"Styled Components"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
                               "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                    <Skill iconId={"figma"}
                           title={"WEB DESIGN"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
                               "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`


