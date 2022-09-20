import React, { useRef, useState } from "react";

import { useNavigate } from "react-router";

import { useDispatch } from "react-redux";

import { 
    LoginWrapper,
    LoginFormTitle,
    AuthButtonSet,
    LoginBtn,
    RegisterBtn
} from "./LoginFormStyled";

import { 
    Input,
    FormInputsSet,
    InputSetItem,
    InputTitleLabel,
    ErrorMessage
} from "../DailyCaloriesForm/DailyCaloriesFormStyled";

import { fetchLogin } from "../../ducks/userInfo/userInfoActions";

export const LoginForm = () => {

    const [isEmailOk, setIsEmailOk] = useState(true);
    const [isPassOk, setIsPassOk] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const passRef = useRef();
    const emailRef = useRef();

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

    const checkInputData = () => {
        if (isEmailOk && isPassOk && 
            emailRef.current.value !== "" && passRef.current.value !=="" ) {
            return true;
        } else {
            return false;
        }
    }

    const handleLoginClick = () => {
        if (checkInputData()) {
            dispatch(fetchLogin({
                email: emailRef.current.value,
                password: passRef.current.value
            }))
        }
    }

    return (
        <div>
            <LoginWrapper>
                <LoginFormTitle>
                    Sign In
                </LoginFormTitle>
                <FormInputsSet>
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
                        <Input ref = {passRef} onChange = {checkPass} type = "password"/>
                        <ErrorMessage>
                            {!isPassOk && "bad password"}
                        </ErrorMessage>
                    </InputSetItem>
                </FormInputsSet>
                <AuthButtonSet>
                    <LoginBtn onClick={() => handleLoginClick()}>
                        Sign in
                    </LoginBtn>
                    <RegisterBtn onClick={() => navigate("/register")}>
                        Register
                    </RegisterBtn>
                </AuthButtonSet>
            </LoginWrapper>
        </div>
    )
}

export default LoginForm;