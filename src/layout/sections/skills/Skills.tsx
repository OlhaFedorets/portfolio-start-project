import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from './Skills_Styles';

const skillData = [
    {
        iconId: "code",
        title: "HTML5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "css",
        title: "CSS3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "react",
        title: "REACT",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "typescript",
        title: "TypeScript",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "styled-components",
        title: "Styled Components",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },
    {
        iconId: "figma",
        title: "WEB DESIGN",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
    },

]

export const Skills = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                    {skillData.map((s, index) => {
                        return <Skill iconId={s.iconId} key={index}
                                      title={s.title}
                                      description={s.description}/>
                    })}

                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};




