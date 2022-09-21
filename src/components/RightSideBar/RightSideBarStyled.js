import styled from "styled-components";

import { 
    BLUE_TEXT_MODAL,
    WHITE_TEXT_COLOR,
    MODAL_LIST_ITEM_COLOR
} from "../../assets/themes/colors";

export const SideBarWrapper = styled.div`
    background-color: ${BLUE_TEXT_MODAL};
    height: 100vh;
    width: 100%;
    position: absolute;
    left: 0;
    top: 85px;
    z-index: +10;
`
export const OverlayButtonsSet = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    font-family: Verdana;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0.04em;

    text-transform: uppercase;
    height: 30%;
    gap: 24px;
`
export const OverlayButton = styled.button`
    color: ${MODAL_LIST_ITEM_COLOR};
    cursor: pointer;

    :hover{
        color: ${WHITE_TEXT_COLOR};
    }
`