import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import todoImg from "../../../assets/images/proj1.jpg";
import resumeImg from "../../../assets/images/proj2.jpg";
import {Container} from "../../../components/Container";
import {S} from './Works_Styles'
import {AnimatePresence, motion} from "framer-motion"

//const tabsItems = ["All", "LANDING PAGE", "REACT", "SPA"]
const tabsItems: Array<{ status: TabsStatusType, title: string }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "LANDING PAGE",
        status: "landing"
    },
    {
        title: "REACT",
        status: "react"
    },
    {
        title: "SPA",
        status: "spa"
    }

]

const worksData = [
    {
        title: "Todo List",
        src: todoImg,
        text: "The \"Todo List\" project provides a convenient interface for creating, editing, deleting, and displaying tasks and to-do lists. Users can easily add new tasks, set their completion status. " ,
        type: "spa",
        id: 1
    },
    {
        title: "Resume",
        src: resumeImg,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. " +
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
        type: "react",
        id: 1
    },

]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }

    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }

    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>

                    <AnimatePresence>
                        {filteredWorks.map((w, index) => {
                            return (
                                <motion.div style={{width: "400px", flexGrow: 1, maxWidth: "540px"}}
                                    layout={true}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={w.id}
                                >
                                    <Work title={w.title}
                                          src={w.src}
                                          text={w.text}
                                          key={w.id}
                                    />
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};



