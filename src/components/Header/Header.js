import React from "react";

import Logo from "../Logo/Logo";
import UserInfo from "../UserInfo/UserInfo";
import Navigation from "../Navigation/Navigation";

import { 
    HeaderWrapper,
    VerticalDevider
} from "./HeaderStyled"

export const Header = () => {
    return (
        <header>
            <HeaderWrapper>
                <Logo />
                <VerticalDevider />
                <UserInfo/>
                <Navigation/>
            </HeaderWrapper>
        </header>
    )
}

export default Header;