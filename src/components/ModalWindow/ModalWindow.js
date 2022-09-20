import React, {useEffect, useState } from "react";

import { useNavigate } from "react-router"

import { disableBodyScroll, enableBodyScroll} from "body-scroll-lock";

import withLoader from "../../hocs/withLoader/withLoader";

import { 
    ModalBackground,
    ModalContainer,
    ModalContainerCloseBtnWrapper,
    CloseBtn,
    ModalContentWrapper,
    ModalTitle,
    ModalEnergyValSet,
    ModalEnergyVal,
    ModalEnergyUnitsVal,
    FoodsToAvoidSet,
    FoodsToAvoidTitle,
    BadFoodsList,
    BadFoodItem
} from "./ModalWindowsStyled";

import { StartLosingWeighBtn } from "../DailyCaloriesForm/DailyCaloriesFormStyled";

import closeCross from "../../assets/ModalWindow/closeCross.svg";
import { useSelector } from "react-redux";

export const ModalWindow = ({setModalVisibility, children}) => {

    const navigate = useNavigate();

    const dailyKcal = useSelector(state => state.userInfo.lastDailyIntakeData.dailyKcal);
    const notAllowedFoodArr = useSelector(state => state.userInfo.lastDailyIntakeData.notAllowedFoods);

    const [topOffset, setTopOffset] = useState(Math.abs(document.querySelector("body").getBoundingClientRect().top));

    const keyboardListener = (e) => {
        if (e.key === "Escape") {
            closeModal();
        }
    }

    function closeModal() {
        enableBodyScroll(document.querySelector("body"));
        document.removeEventListener("keydown", keyboardListener);
        window.removeEventListener("resize", resizeListener);
        setModalVisibility(false);
    }

    const resizeListener = () => {
        setTopOffset(Math.abs(document.querySelector("body").getBoundingClientRect().top));
    }

    function closeModalByClick(e) {
        if (e.target?.id === "modalBackground" || e.target?.id === "modalCloseBtn") {
            closeModal();
        }
    }

    useEffect(() => {
        disableBodyScroll(document.querySelector("body"));
        document.addEventListener("keydown", keyboardListener);
        window.addEventListener("resize", resizeListener);
    }, []);

    return (
        <ModalBackground top={topOffset} onClick = {closeModalByClick} id = "modalBackground">
            <ModalContainer>
                <ModalContainerCloseBtnWrapper onClick={closeModalByClick} >
                    <CloseBtn src={closeCross} id = "modalCloseBtn">
                    </CloseBtn>
                </ModalContainerCloseBtnWrapper>    
                {children}
                <ModalContentWrapper>
                    <ModalTitle>
                        Your recommended daily
                        calorie intake is
                    </ModalTitle>
                    <ModalEnergyValSet>
                        <ModalEnergyVal>
                            {dailyKcal}
                        </ModalEnergyVal>
                        <ModalEnergyUnitsVal>
                            kkal
                        </ModalEnergyUnitsVal>
                    </ModalEnergyValSet>
                    <FoodsToAvoidSet>
                        <FoodsToAvoidTitle>
                            Foods you should not eat
                        </FoodsToAvoidTitle>
                        <BadFoodsList>
                            {notAllowedFoodArr.map((item, index) => {
                                return <BadFoodItem key = {index}>
                                    {item}
                                </BadFoodItem>
                            })}
                        </BadFoodsList>
                    </FoodsToAvoidSet>
                    <StartLosingWeighBtn onClick={() => navigate("/register")}>
                        Start losing weight
                    </StartLosingWeighBtn>
                </ModalContentWrapper>

            </ModalContainer>
        </ModalBackground>
    )
}

export default withLoader(ModalWindow);