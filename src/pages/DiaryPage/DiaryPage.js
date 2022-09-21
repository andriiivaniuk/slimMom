import React from "react";

import { useSelector } from "react-redux";

import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";

import { Diary } from "../../components/Diary/Diary";

import { 
    DiaryPageWrapper 
} from "./DiaryPageStyled";

export const DiaryPage = () => {

    const isUserLogged = useSelector(state => state.userInfo.userLogged);

    return (
        
            <DiaryPageWrapper>
                <Diary />
                {isUserLogged && <PersonalInfo/>}
            </DiaryPageWrapper>
        
    )
}

export default DiaryPage;