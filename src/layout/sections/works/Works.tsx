import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/proj1.jpg";
import timerImg from "../../../assets/images/proj2.jpg";
import {Container} from "../../../components/Container";
import {S} from './Works_Styles'

const worksItems = ["All", "LANDING PAGE", "REACT", "SPA"]

const workData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        title: "Timer",
        src: timerImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. " +
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
    },

]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My work</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>

                    {workData.map((w, index) => {
                        return <Work title={w.title}  key={index}
                                     src={w.src}
                                     text={w.text}/>
                    })}

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};



