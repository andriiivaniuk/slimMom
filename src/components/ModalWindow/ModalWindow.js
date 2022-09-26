import React, {useEffect, useState } from "react";

import { useNavigate } from "react-router"

import { disableBodyScroll, enableBodyScroll} from "body-scroll-lock";

import { useSelector, useDispatch } from "react-redux";

import withLoader from "../../hocs/withLoader/withLoader";

import {executeLogoutLocally} from "../../ducks/userInfo";

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

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const entryInfoExist = useSelector(state => state.userInfo.entryInfoExist);
    const userLogged = useSelector(state => state.userInfo.userLogged);

    const userData = useSelector(state =>  state.userInfo.lastDailyIntakeData );

    //     if (userLogged) {
    //         if (entryInfoExist) {
    //             return state.userInfo.user.userData;
    //         }
    //         return state.userInfo.lastDailyIntakeData;
    //     } else {
    //         return state.userInfo.lastDailyIntakeData;
    //     }
    // });

    const [topOffset, setTopOffset] 
        = useState(Math.abs(document.querySelector("body").getBoundingClientRect().top));

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
        if (!userLogged) {
            dispatch(executeLogoutLocally());
        }

    }

    const resizeListener = () => {
        setTopOffset(Math.abs(document.querySelector("body").getBoundingClientRect().top));
    }

    function closeModalByClick(e) {
        if (e.target?.id === "modalBackground" || e.target?.id === "modalCloseBtn") {
            closeModal();
        }
    }

    const handleModalBtnClick = () => {
        if (!userLogged) {
            navigate("/register")
        } else {
            navigate("/diary")
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
                            {userData.dailyKcal}
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
                            {
                                userData.notAllowedFoods && userData.notAllowedFoods.map((item, index) => {
                                return <BadFoodItem key = {index}>
                                    {item}
                                </BadFoodItem>
                            })
                            }
                        </BadFoodsList>
                    </FoodsToAvoidSet>
                    <StartLosingWeighBtn onClick={handleModalBtnClick}>
                        Start losing weight
                    </StartLosingWeighBtn>
                </ModalContentWrapper>

            </ModalContainer>
        </ModalBackground>
    )
}

export default withLoader(ModalWindow);