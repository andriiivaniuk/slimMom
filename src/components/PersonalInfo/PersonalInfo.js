import React from "react";

import { useSelector } from "react-redux";

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

const dailySummaryLineTitles = ["Left", "Consumed", "Daily rate", "n% of normal"];

const getDateStr = () => {
    const date = new Date(Date.now());
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export const PersonalInfo = () => {

    const dailyRate = useSelector(state => state.userInfo.user.userData.dailyRate);
    const foodNotRec = useSelector(state => state.userInfo.user.userData.notAllowedProducts);

    return (
        
            <PersonalInfoWrapper>
                <SummaryWrapper>
                    <SummaryTitle>
                        Summary for {getDateStr()}
                    </SummaryTitle>
                    <SummaryContent>
                        {
                            dailySummaryLineTitles.map((line) => {
                                return (                         
                                    <SummaryContentLine key = {line}>
                                        <SummaryContentLineName>
                                            {line}
                                        </SummaryContentLineName>
                                        <SummaryContentLineVal>
                                            { line === "Daily rate" && dailyRate }
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