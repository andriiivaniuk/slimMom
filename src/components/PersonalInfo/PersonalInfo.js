import React from "react";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import { getTodayDateString } from "../../utils/utils";

import { fetchLoggedUserDayInfo } from "../../ducks/userInfo";

import { 
    PersonalInfoWrapper,
    SummaryWrapper,
    SummaryTitle,
    SummaryContent,
    SummaryContentLine,
    SummaryContentLineName,
    SummaryContentLineVal,
    FoodNotRecommended,
    FoodNotRecommendedTitle,
    FoodNotRecommendedList,
    FoodNotRecommendedItem
} from "./PersonalInfoStyled";

import { getTodayDateObj } from "../../utils/utils";

import { useEffect } from "react";

const dailySummaryLineTitles = ["Left", "Consumed", "Daily rate", "n% of normal"];

export const PersonalInfo = () => {

    const dispatch = useDispatch();

    const dayInfo = useSelector(
        state => 
            Object.keys(state.userInfo.todaySummary).includes("daySummary") ?
            state.userInfo.todaySummary.daySummary :  state.userInfo.todaySummary
        );
    const token = useSelector(state => state.userInfo.loginData.accessToken);
    const foodNotRec = useSelector(state => state.userInfo.user.userData.notAllowedProducts);

    useEffect(() => {
        if (Object.keys(dayInfo).length === 0 ) {
            dispatch(fetchLoggedUserDayInfo(getTodayDateObj(), token));
        }
    }, [])

    return (
        
            <PersonalInfoWrapper>
                <SummaryWrapper>
                    <SummaryTitle>
                        Summary for {getTodayDateString("/")}
                    </SummaryTitle>
                    <SummaryContent>
                        {   Object.keys(dailySummaryLineTitles).length !== 0
                            && dailySummaryLineTitles.map((line) => {
                                return (                         
                                    <SummaryContentLine key = {line}>
                                        <SummaryContentLineName>
                                            {line}
                                        </SummaryContentLineName>
                                        <SummaryContentLineVal>
                                            { line === "Daily rate" && dayInfo?.dailyRate }
                                            { line === "Consumed" && dayInfo?.kcalConsumed?.toFixed(2) }
                                            { line === "Left" && dayInfo?.kcalLeft.toFixed(2)}
                                            { line === "n% of normal" && dayInfo?.percentsOfDailyRate?.toFixed(2)}  
                                        </SummaryContentLineVal>
                                    </SummaryContentLine> 
                                )
                            })
                        }

                    </SummaryContent>
                </SummaryWrapper>
                <FoodNotRecommended>
                    <FoodNotRecommendedTitle>
                        Food not recommended
                    </FoodNotRecommendedTitle>
                    <FoodNotRecommendedList>
                        {foodNotRec.map((food, index) => {
                            if (index < 8) return (
                                <FoodNotRecommendedItem key = {food}>
                                    {food}
                                </FoodNotRecommendedItem>
                            )
                        })}
                    </FoodNotRecommendedList>
                </FoodNotRecommended>
            </PersonalInfoWrapper>
        
    )
}

export default PersonalInfo;