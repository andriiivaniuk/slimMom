import React, { useEffect, useState, useRef }  from "react";

import { useSelector, useDispatch, useStore } from "react-redux";

import { useNavigate } from "react-router";

import { 
    fetchSearchedFood,
    cleanLastFoodSearchResult,
    sendEatenFoodToServer,
    deleteFoodFromServer
} from "../../ducks/userInfo/userInfoActions";

import ProdSearchList from "../ProdSearchList/ProdSearchList";

import Spinner from "../Spinner/Spinner";

import { 
    DiaryWrapper,
    DateTitleSet,
    DateTitle,
    CalendarImgWrapper,
    InputSet,
    SearchNameInput,
    GramsInputSet,
    GramsValInput,
    ErrorPlaceholder,
    AddMealButton,
    PlusSign,
    TodayMeals,
    TodayMealsList,
    MealListItem,
    ItemName,
    ItemWeight,
    ItemKcal,
    DeleteItemBtn
} from "./DiaryStyled";

import { getTodayDateString, getTodayDateObj } from "../../utils/utils";

import calendarImg from "../../assets/Diary/calendar.svg";
import deleteBtn from "../../assets/Diary/deleteItemBtn.svg"


export const Diary = () => {

    const [isSearching, setIsSearching] = useState(false);
    const [isLoadingFood, setIsLoadingFood] = useState(false);
    const [isChangingFoodInfo, setIsChangingFoodInfo] = useState(false);

    const searchInputRef = useRef();
    const gramsInputRef = useRef();

    const [isGramsOk, setIsGramsOk] = useState(true);

    const isUserLogged = useSelector(state => state.userInfo.userLogged);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const foodSearchResult = useSelector(state => state.userInfo?.lastFoodSearchResult);
    const token = useSelector(state => state.userInfo?.loginData?.accessToken);

    const eatenProducts = useSelector(state => state.userInfo?.todaySummary?.eatenProducts);

    const store = useStore();
    const dayInfo = store.getState().userInfo?.todaySummary;

    const [productToAdd, setProductToAdd] = useState({
        id: null,
        name: null
    });

    useEffect(() => {
        if (!isUserLogged) {
            navigate("/");
        }
    }, [isUserLogged])

    useEffect(() => {
        setIsSearching(false);
        setIsLoadingFood(false);
        searchInputRef.current.value = productToAdd.name;
        searchInputRef.current.blur();
        dispatch(cleanLastFoodSearchResult());
    }, [productToAdd])

    const handleInputChange = () => {
        const input = searchInputRef.current.value;
        if (input.length > 0) {
            setIsSearching(true);
            setIsLoadingFood(true);
            dispatch(fetchSearchedFood(input, token));
        } else {
            setIsSearching(false);
        }
    }

    const handleGramsChange = () => {
        const grams = gramsInputRef.current.value;
        if (!grams.match(/^[1-9][0-9]*$/)) {
            setIsGramsOk(false);
        } else {
            setIsGramsOk(true);
        }
    }

    const handleAddMealButtonClick = () => {
        if (isGramsOk && gramsInputRef.current.value !== "" &&
         productToAdd.id !== null && searchInputRef.current.value === productToAdd.name) {
            setIsChangingFoodInfo(true);
            dispatch(sendEatenFoodToServer({
                date: getTodayDateObj().date,
                productId: productToAdd.id,
                weight: Number(gramsInputRef.current.value)
            }, token));
        }
    }

    useEffect(() => {
        setIsLoadingFood(false);
    }, [foodSearchResult]);

    useEffect(() => {
        setIsChangingFoodInfo(false);
        searchInputRef.current.value = "";
        gramsInputRef.current.value = "";
    }, [eatenProducts]);

    const handleDeleteFoodClick = (productId, productName) => {
        setIsChangingFoodInfo(true);
        if (window.confirm(`delete selected product ${productName}?`)) {
            dispatch(deleteFoodFromServer({
                dayId: dayInfo.id,
                eatenProductId: productId
        }, token));
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
                    ref={searchInputRef}
                    placeholder={"Enter product name:"}
                    maxLength={30}
                    rows="2" />
                <GramsInputSet>
                    <GramsValInput
                        ref={gramsInputRef}
                        onChange={handleGramsChange}
                        placeholder={"Grams"}
                        maxLength={5}
                        rows="2" />
                        <ErrorPlaceholder>
                            {!isGramsOk && "bad value"}
                        </ErrorPlaceholder>
                </GramsInputSet>
                <AddMealButton onClick={handleAddMealButtonClick}>
                    <PlusSign>
                        +
                    </PlusSign>
                </AddMealButton>
            </InputSet>
            {
                isSearching &&
                <ProdSearchList
                    loading = {isLoadingFood}
                    setProductToAdd = {setProductToAdd}/>
            }
            <TodayMeals>
                <TodayMealsList>
                    {eatenProducts && eatenProducts.map((food, i) => {
                        return (
                            <MealListItem key = {food.id}>
                                <ItemName>
                                    {food.title}
                                </ItemName>
                                <ItemWeight>
                                    {food.weight.toFixed(2)} г
                                </ItemWeight>
                                <ItemKcal>
                                    {food.kcal.toFixed(2)} ккал
                                </ItemKcal>
                                <DeleteItemBtn onClick={() => handleDeleteFoodClick(food.id, food.title)}>
                                    <img src = {deleteBtn} />
                                </DeleteItemBtn>
                            </MealListItem>
                        )
                    })}
                </TodayMealsList>
            </TodayMeals>
            {
                isChangingFoodInfo && <Spinner/>
            }
        </DiaryWrapper>
    )
}