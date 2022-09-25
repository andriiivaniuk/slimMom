import React, { useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import { fetchRegisterUser } from "../../ducks/userInfo/userInfoActions";

import { ErrorMessage } from "../DailyCaloriesForm/DailyCaloriesFormStyled";
import Spinner from "../Spinner/Spinner";

import { 
    RegisterFormWrapper 
} from "./RegisterFormStyled";

import { 
    LoginFormTitle,
    AuthButtonSet,
    LoginBtn,
    RegisterBtn
} from "../LoginForm/LoginFormStyled";

import { 
    Input,
    FormInputsSet,
    InputSetItem,
    InputTitleLabel
} from "../DailyCaloriesForm/DailyCaloriesFormStyled";


export const RegisterForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userInfo = useSelector(state => state.userInfo);

    const [fetching, setFetching] = useState(false);

    const [isEmailOk, setIsEmailOk] = useState(true);
    const [isPassOk, setIsPassOk] = useState(true);
    const [isNameOk, setIsNameOk] = useState(true);

    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();

    const registerClickHandler = () => {
        if (checkInputData()) {
            setFetching(true);
            dispatch(fetchRegisterUser({
                email: emailRef.current.value,
                password: passRef.current.value,
                username: nameRef.current.value
            }))
        }
    }

    useEffect(() => {
        setFetching(false);
    }, [userInfo]);

    const checkInputData = () => {
        if (nameRef.current.value !== "" && emailRef.current.value !== ""
            && passRef.current.value !== "" && isEmailOk && isNameOk && isPassOk) {
            return true
        } else {
            return false
        }
    }

    const checkEmail = () => {
        const email = emailRef.current.value;
        if(email.match(/[-.\w]+@([\w-]+\.)+[\w-]+/g) && email.length > 4){
            setIsEmailOk(true);
        } else {
            setIsEmailOk(false);
        }
    }
    
    const checkPass = () => {
        const pass = passRef.current.value;
        if (pass.length > 3 && pass.length < 20) {
            setIsPassOk(true);
        } else {
            setIsPassOk(false);
        }
    }

    const checkName = () => {
        const name = nameRef.current.value;
        const nameRegEx = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/
        if( name.match(nameRegEx)) {
            setIsNameOk(true);
        } else {
            setIsNameOk(false);
        }
    }

    return (
        <div>
            <RegisterFormWrapper>
                <LoginFormTitle>
                    Register
                </LoginFormTitle>
                <FormInputsSet>
                    <InputSetItem>
                        <InputTitleLabel>
                            Name *
                        </InputTitleLabel>
                        <Input ref = {nameRef} onChange = {checkName}/>
                        <ErrorMessage>
                            {!isNameOk && "bad name"}
                        </ErrorMessage>
                    </InputSetItem>
                    <InputSetItem>
                        <InputTitleLabel>
                            Email *
                        </InputTitleLabel>
                        <Input ref = {emailRef} onChange = {checkEmail}/>
                        <ErrorMessage>
                            {!isEmailOk && "bad email"}
                        </ErrorMessage>
                    </InputSetItem>
                    <InputSetItem>
                        <InputTitleLabel>
                            Password *
                        </InputTitleLabel>
                        <Input ref = {passRef} type = "password" onChange={checkPass}/>
                        <ErrorMessage>
                            {!isPassOk && "bad password"}
                        </ErrorMessage>
                    </InputSetItem>
                </FormInputsSet>
                <AuthButtonSet>
                    <LoginBtn onClick={() => navigate("/login")}>
                        Sign In
                    </LoginBtn>
                    <RegisterBtn onClick={() => registerClickHandler()}>
                        Register
                    </RegisterBtn>
                </AuthButtonSet>
            </RegisterFormWrapper>
            {
                fetching && <Spinner />
            }
        </div>
    )
}

export default RegisterForm;