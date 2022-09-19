import React, { useRef, useState } from "react";

import { useNavigate } from "react-router";

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

import { ErrorMessage } from "../DailyCaloriesForm/DailyCaloriesFormStyled";

export const RegisterForm = () => {

    const navigate = useNavigate();

    const [isEmailOk, setIsEmailOk] = useState(true);
    const [isPassOk, setIsPassOk] = useState(true);
    const [isNameOk, setIsNameOk] = useState(true);

    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();

    const registerClickHandler = () => {

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
        </div>
    )
}

export default RegisterForm;