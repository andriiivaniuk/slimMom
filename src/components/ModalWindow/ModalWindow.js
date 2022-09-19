import React, {useEffect, useState } from "react";

import { disableBodyScroll, enableBodyScroll} from "body-scroll-lock";

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

export const ModalWindow = ({setModalVisibility, children}) => {

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
                            2800
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
                            <BadFoodItem>
                                1. Flour products
                            </BadFoodItem>
                            <BadFoodItem>
                                2. Milk
                            </BadFoodItem>
                            <BadFoodItem>
                                3. Red meat
                            </BadFoodItem>
                            <BadFoodItem>
                                4. Smoked meat
                            </BadFoodItem>
                        </BadFoodsList>
                    </FoodsToAvoidSet>
                    <StartLosingWeighBtn>
                        Start losing weight
                    </StartLosingWeighBtn>
                </ModalContentWrapper>

            </ModalContainer>
        </ModalBackground>
    )
}

export default ModalWindow;