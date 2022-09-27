import React from "react";
import { useNavigate } from "react-router";

import logo from "./../../assets/Header/logo.svg"

import { 
    LogoWrapper,
    LogoImgWrapper,
    LogoTitle,
    SlimWord,
    MomWord,
} from "./LogoStyled";

export const Logo = () => {
    const navigate = useNavigate()

    return(
        <div>
            <LogoWrapper>
                <LogoImgWrapper>
                    <img src = {logo} alt = "logo" onClick={() => navigate("/")}/>
                </LogoImgWrapper>
                <LogoTitle>
                    <SlimWord>
                        Slim
                    </SlimWord>
                    <MomWord>
                        Mom
                    </MomWord>
                </LogoTitle>
            </LogoWrapper>
        </div>
    )
}

export default Logo;