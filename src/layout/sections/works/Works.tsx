import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/proj1.jpg";
import timerImg from "../../../assets/images/proj2.jpg";
import {Container} from "../../../components/Container";

const worksItems = ["All", "LANDING PAGE", "REACT", "SPA"]

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My work</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify="space-between">
                    <Work src={socialImg}
                          title={"Social Network"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
                              "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Work src={timerImg}
                          title={"Timer"}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. " +
                              "Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    
`

