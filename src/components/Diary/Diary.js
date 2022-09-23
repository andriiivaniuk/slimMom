import React, { useEffect, useState }  from "react";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router";

import { 
    DiaryWrapper,
    DateTitleSet,
    DateTitle,
    CalendarImgWrapper,
    InputSet,
    SearchNameInput,
    GramsValInput,
    AddMealButton,
    PlusSign,
    ProductList
} from "./DiaryStyled";

import ProdSearchList from "../ProdSearchList/ProdSearchList";

import { getTodayDateString } from "../../utils/utils";

import calendarImg from "../../assets/Diary/calendar.svg";


export const Diary = () => {

    const [isSearching, setIsSearching] = useState(true);

    const isUserLogged = useSelector(state => state.userInfo.userLogged);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isUserLogged) {
            navigate("/");
        }
    }, [])

    return (
        <DiaryWrapper>
            <DateTitleSet>
                <DateTitle>
                    {getTodayDateString(".")}
                </DateTitle>
                <CalendarImgWrapper>
                    <img src = {calendarImg} alt = "calendar" />
                </CalendarImgWrapper>
            </DateTitleSet>
            <InputSet>
                <SearchNameInput type = "text" placeholder={"Enter product name:"} />
                <GramsValInput type = "text" placeholder = {"Grams"}/>
                <AddMealButton>
                    <PlusSign>
                        +
                    </PlusSign>
                </AddMealButton>
            </InputSet>
            {
                isSearching && <ProdSearchList loading = {false}/>
            }
            <ProductList>
                    
            </ProductList>
        </DiaryWrapper>
    )
}