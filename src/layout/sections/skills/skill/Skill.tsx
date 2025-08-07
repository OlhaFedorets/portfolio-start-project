import React from 'react';
import {Icon} from '../../../../components/icon/Icon';
import {FlexWrapper} from '../../../../components/FlexWrapper';
import {S} from '../Skills_Styles';

type SkillPropsType = {
    iconId: string;
    title: string;
    viewBox?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.IconWrapper>
                    <Icon iconId={props.iconId} viewBox={props.viewBox}/>
                </S.IconWrapper>
                <S.SkillTitle>{props.title}</S.SkillTitle>
            </FlexWrapper>
        </S.Skill>
    );
};


// export class IconWrapper {
// }