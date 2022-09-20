import React, { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import ModalWindow from "../ModalWindow/ModalWindow";

import { fetchDailyKcalInfo } from "../../ducks/userInfo/userInfoActions";

import {
    FormWrapper,
    FormTitleText,
    FormInputsSet,
    InputSetItem,
    Input,
    InputTitleLabel,
    BloodTypeInput,
    BloodTypeInputCircle,
    BloodTypeDigit,
    BloodTypeSelectedDot,
    ButtonArea,
    StartLosingWeighBtn,
    ErrorMessage,
} from "./DailyCaloriesFormStyled"

export const DailyCaloriesForm = () => {

    const dispatch = useDispatch();
    const [bloodType, setBloodType] = useState(1);

    const [loading, setLoading] = useState(false);
    const userInfo = useSelector(state => state.userInfo);

    const ageRef = useRef();
    const currentWeightRef = useRef();
    const desiredWeightRef = useRef();
    const heightRef = useRef()

    const [isAgeOk, setIsAgeOk] = useState(true);
    const [isHeightOk, setIsHeightOk] = useState(true);
    const [isCurrentWeightOk, setIsCurrentWeightOk] = useState(true);
    const [isDesiredWeightOk, setIsDesiredWeightOk] = useState(true);

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setLoading(false);
    }, [userInfo])

    const checkAge = () => {
        const age = ageRef.current.value;
        if (age.match(/^100|[1-9]?\d$/) && age < 121) {
            setIsAgeOk(true);
        } else {
            setIsAgeOk(false);
        }
    }

    const checkHeight = () => {
        const height = heightRef.current.value;
        if (height.match(/^\d{2,3}/g) && height > 50 && height < 250){
            setIsHeightOk(true);
        } else {
            setIsHeightOk(false);
        }
    }

    const checkCurrentWeight = () => {
        const currentWeight = currentWeightRef.current.value;
        if (currentWeight.match(/^300|[1-9]?\d$/) && currentWeight > 10 && currentWeight < 300){
            setIsCurrentWeightOk(true);
        } else {
            setIsCurrentWeightOk(false);
        }
    }

    const checkCDesiredWeight = () => {
        const desiredWeight = desiredWeightRef.current.value;
        if (desiredWeight.match(/^300|[1-9]?\d$/) && desiredWeight > 10 && desiredWeight < 300){
            setIsDesiredWeightOk(true);
        } else {
            setIsDesiredWeightOk(false);
        }
    }

    const checkInputDataOnBtnClick = () => {
        if (isAgeOk && isCurrentWeightOk && isDesiredWeightOk && isHeightOk && 
            ageRef.current.value !== "" &&
            currentWeightRef.current.value !== "" &&
            desiredWeightRef.current.value !== "" &&
            heightRef.current.value !== "") {
                return true;
            } else {
                return false;
            }
    }

    const getModal = () => {
        if (checkInputDataOnBtnClick()) {

            const formInfo = {
                weight: currentWeightRef.current.value,
                height: heightRef.current.value,
                age: ageRef.current.value,
                desiredWeight: desiredWeightRef.current.value,
                bloodType: bloodType
            }

            setLoading(true);
            dispatch(fetchDailyKcalInfo(formInfo));

            setIsModalOpen(true);
        }
    }

    return (
        <section>
            <FormWrapper>
                <FormTitleText>
                    Calculate your daily calorie intake right now
                </FormTitleText>
                <FormInputsSet>
                    <InputSetItem>
                        <InputTitleLabel>
                            Height *
                        </InputTitleLabel>
                        <Input 
                            ref = {heightRef}
                            onChange = {checkHeight}>
                        </Input>
                        <ErrorMessage>
                            {!isHeightOk && "bad height"}
                        </ErrorMessage>
                    </InputSetItem>
                    <InputSetItem>
                        <InputTitleLabel>
                            Age *
                        </InputTitleLabel>
                        <Input 
                            onChange={checkAge}
                            ref = {ageRef}/>
                        <ErrorMessage>
                            {!isAgeOk && "bad age"}
                        </ErrorMessage>
                    </InputSetItem>
                    <InputSetItem>
                        <InputTitleLabel>
                            Current weight *
                        </InputTitleLabel>
                        <Input 
                            ref = {currentWeightRef}
                            onChange = {checkCurrentWeight}/>
                        <ErrorMessage>
                            {!isCurrentWeightOk && "bad value"}
                        </ErrorMessage>
                    </InputSetItem>
                    <InputSetItem>
                        <InputTitleLabel>
                            Desired weight *
                        </InputTitleLabel>
                        <Input 
                            ref = {desiredWeightRef}
                            onChange = {checkCDesiredWeight}/>
                        <ErrorMessage>
                            {!isDesiredWeightOk && "bad value"}
                        </ErrorMessage>
                    </InputSetItem>
                    <InputSetItem>
                        <InputTitleLabel>
                            Blood type *
                        </InputTitleLabel>
                        <BloodTypeInput>
                            {[1,2,3,4].map((digit) => {
                                return <div key = {digit}>
                                    <BloodTypeInputCircle onClick={() => setBloodType(digit)}>
                                        <BloodTypeDigit isSelected = {bloodType === digit}>
                                        {digit}
                                        </BloodTypeDigit >
                                        {digit === bloodType && <BloodTypeSelectedDot/>}
                                    </BloodTypeInputCircle>
                                </div>
                            })}
                        </BloodTypeInput>
                    </InputSetItem>
                </FormInputsSet>
                <ButtonArea>
                    <StartLosingWeighBtn onClick={() => getModal()}>
                        Start losing weight
                    </StartLosingWeighBtn>
                </ButtonArea>
            </FormWrapper>
            {isModalOpen && <ModalWindow setModalVisibility={setIsModalOpen} loading = {loading} />}
        </section>
    )
}

export default DailyCaloriesForm;