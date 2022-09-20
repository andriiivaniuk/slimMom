import React from "react";

import { useNavigate } from "react-router";

import { useSelector } from "react-redux"; 

import { 
    NavWrapper,
    UnloggedNavWrapper,
    LoggedWrapper,
    SignInButton,
    RegisterButton,
    ButtonsSet,
    DiaryButton,
    CalculatorButon,
    MenuBtnWrapper,
    LoggedUserMenu,
    LoggedUserName,
    LoggedUserExit,
    VerticalDeviderNav
} from "./NavigationStyled";

import menuBtn from "../../assets/Header/menuBtn.svg"

export const Navigation = () => {

    const isUserLogged = useSelector(state => state.userInfo.userLogged);
    const userInfo = useSelector(state => state.userInfo.user);

    const navigate = useNavigate();

    return(
        <NavWrapper>
            {
                isUserLogged ?
                <LoggedWrapper>
                    <ButtonsSet isUserLogged = {isUserLogged}>
                        <DiaryButton>
                            Diary
                        </DiaryButton>
                        <CalculatorButon>
                            Calculator
                        </CalculatorButon>
                    </ButtonsSet>
                    <LoggedUserMenu>
                        <LoggedUserName>
                            {userInfo.username}
                        </LoggedUserName>
                        <VerticalDeviderNav />
                        <LoggedUserExit>
                            Exit
                        </LoggedUserExit>
                    </LoggedUserMenu>
                    <MenuBtnWrapper>
                        <img src = {menuBtn} />
                    </MenuBtnWrapper>
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
        </NavWrapper>
    )
}

export default Navigation;