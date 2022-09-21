import React, {useState} from "react";

import { useNavigate } from "react-router";

import { useSelector } from "react-redux"; 

import { disableBodyScroll, enableBodyScroll} from "body-scroll-lock";

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

import { RightSideBar } from "../RightSideBar/RightSideBar";

import menuBtn from "../../assets/Header/menuBtn.svg"

export const Navigation = () => {

    const isUserLogged = useSelector(state => state.userInfo.userLogged);
    const userInfo = useSelector(state => state.userInfo.user);

    const navigate = useNavigate();
    const [overlayMenuShown, setOverlayMenuShown] = useState(false);

    const keyboardListener = (e) => {
        if (e.key === "Escape") {
            document.removeEventListener("keydown", keyboardListener);
            setOverlayMenuShown(false);
            enableBodyScroll(document.querySelector("body"));
        }
    }

    const handleHamburgerClick = () => {
        
        if (!overlayMenuShown) {
            document.addEventListener("keydown", keyboardListener);
            disableBodyScroll(document.querySelector("body"));
        } else {
            document.removeEventListener("keydown", keyboardListener);
            enableBodyScroll(document.querySelector("body"));
        }

        setOverlayMenuShown(!overlayMenuShown);
    }

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
                    <MenuBtnWrapper onClick={handleHamburgerClick}>
                        <img src = {menuBtn} alt = "menu-button"/>
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
                {
                    overlayMenuShown && 
                    <RightSideBar
                    handleHamburgerClick = {handleHamburgerClick}/>
                }
        </NavWrapper>
    )
}

export default Navigation;