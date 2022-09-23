import React, { useEffect, useState, useRef }  from "react";

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

    const [isSearching, setIsSearching] = useState(false);
    const [isLoadingFood, setIsLoadingFood] = useState(false);

    const searchInputRef = useRef();

    const isUserLogged = useSelector(state => state.userInfo.userLogged);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isUserLogged) {
            navigate("/");
        }
    }, [])

    const handleInputChange = () => {
        const input = searchInputRef.current.value;
        if (input.length > 0) {
            setIsSearching(true);
        } else {
            setIsSearching(false);
        }

    }

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
                <SearchNameInput
                    onChange={handleInputChange}
                    ref = {searchInputRef}
                    placeholder={"Enter product name:"} 
                    maxLength = {30} />
                <GramsValInput  placeholder = {"Grams"}/>
                <AddMealButton>
                    <PlusSign>
                        +
                    </PlusSign>
                </AddMealButton>
            </InputSet>
            {
                isSearching && <ProdSearchList loading = {isLoadingFood}/>
            }
            <ProductList>
                    
            </ProductList>
        </DiaryWrapper>
    )
}