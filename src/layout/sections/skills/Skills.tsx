import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from './Skills_Styles';
import {Fade} from "react-awesome-reveal";

const skillData = [
    {
        iconId: "html",
        title: "HTML5",
        viewBox: "0 -1 32 32"
    },
    {
        iconId: "js",
        title: "javascript",
        viewBox: "2 1 21 21"
    },
    {
        iconId: "typescript",
        title: "TypeScript",
        viewBox: "2 1 46 46"
    },
    {
        iconId: "css",
        title: "CSS3"
    },
    {
        iconId: "react",
        title: "REACT",
        viewBox: "2 2 46 46"
    },
    {
        iconId: "redux",
        title: "REDUX",
        viewBox: "0 0 32 32"
    },
    {
        iconId: "redux",
        title: "REDUX TOOLKIT",
        viewBox: "0 0 32 32"
    },
    {
        iconId: "rtk",
        title: "RTK QUERY",
        viewBox: "0 0 256 272"
    },
    {
        iconId: "restAPI",
        title: "REST API",
        viewBox: "0 0 20 20"
    },
    {
        iconId: "axios",
        title: "AXIOS",
        viewBox: "0 0 24 24"
    },
    {
        iconId: "reactRouter",
        title: "REACT ROUTER",
        viewBox: "0 0 128 128"
    },
    {
        iconId: "git",
        title: "git",
        viewBox: "0 0 16 16"
    },
     {
        iconId: "zod",
        title: "zod",
        viewBox: "0 0 24 24"
    },
    {
        iconId: "reactHookForm",
        title: "react Hook Form",
        viewBox: "0 0 24 24"
    },
    {
        iconId: "materialUI",
        title: "material UI",
        viewBox: "0 -1 24 24"
    },
    {
        iconId: "postman",
        title: "postman",
        viewBox: "0 0 32 32"
    },
    {
        iconId: "tdd",
        title: "unit test",
        viewBox: "0 0 2048 2048"
    },
    {
        iconId: "storyBook",
        title: "storybook",
        viewBox: "0 0 32 32"
    },
    {
        iconId: "styled-components",
        title: "Styled Components"
    },
    {
        iconId: "figma",
        title: "FIGMA"
    },

]

export const Skills = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Fade cascade={true} damping={0.2}>
                        {skillData.map((s, index) => {
                            return <Skill iconId={s.iconId} key={index}
                                          title={s.title}
                                          viewBox={s.viewBox}/>
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};




