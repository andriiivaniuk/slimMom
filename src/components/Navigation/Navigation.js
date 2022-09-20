import React from "react";

import { useNavigate } from "react-router";

import { useSelector } from "react-redux"; 

import { 
    UnloggedNavWrapper,
    LoggedWrapper,
    SignInButton,
    RegisterButton,
    ButtonsSet,
    DiaryButton,
    CalculatorButon
} from "./NavigationStyled";

export const Navigation = () => {

    const isUserLogged = useSelector(state => state.userInfo.userLogged);

    const navigate = useNavigate();

    return(
        <nav>
            {
                isUserLogged ?
                <LoggedWrapper>
                    <ButtonsSet>
                        <DiaryButton>
                            Diary
                        </DiaryButton>
                        <CalculatorButon>
                            Calculator
                        </CalculatorButon>
                    </ButtonsSet>
                </LoggedWrapper>
                
                :

                <UnloggedNavWrapper>
                    <ButtonsSet>
                        <SignInButton onClick={() => navigate("/login")}>
                            Sign In
                        </SignInButton>
                        <RegisterButton onClick={() => navigate("/register")}>
                            Register
                        </RegisterButton>
                    </ButtonsSet>
                </UnloggedNavWrapper>
            }
        </nav>
    )
}

export default Navigation;