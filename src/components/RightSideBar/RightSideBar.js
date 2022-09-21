import React from "react";

import { useNavigate } from "react-router";

import { 
    SideBarWrapper,
    OverlayButtonsSet,
    OverlayButton
} from "./RightSideBarStyled";

export const RightSideBar = ({handleHamburgerClick}) => {

    const navigate = useNavigate();

    return (
        <SideBarWrapper>
            <OverlayButtonsSet>
                <OverlayButton onClick={() => {
                        navigate("diary");
                        handleHamburgerClick();}
                    }>
                    Diary
                </OverlayButton>
                <OverlayButton onClick={() => {
                    navigate("/");
                    handleHamburgerClick();}
                    }>
                    Calculator
                </OverlayButton>
            </OverlayButtonsSet>
        </SideBarWrapper>
    )
}