import React from "react";
import { useEffect } from "react";

import { useSelector } from "react-redux";

import DailyCaloriesForm from "../../components/DailyCaloriesForm/DailyCaloriesForm";
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";

import { HomeWrapper } from "./HomeStyled";

export const Home = () => {

    const isUserLogged = useSelector(state => state.userInfo.userLogged);

    return (
        
            <HomeWrapper>
                <DailyCaloriesForm />
                {isUserLogged && <PersonalInfo/>}
            </HomeWrapper>
        
    )
}

export default Home;