import styled from "styled-components";

import { 
    BLUE_TEXT_MODAL,
    GREY_INPUT_BORDER,
    MODAL_LIST_TITLE_COLOR,
    MODAL_LIST_ITEM_COLOR
 } from "../../assets/themes/colors";

export const ModalBackground = styled.div`
    position: absolute;
    top: ${props => props.top}px;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
`
export const ModalContainer = styled.div`
    min-height: 573px;
    max-width: 672px;

    margin-left: 20px;
    margin-right: 20px;

    background-color: white;
    border-radius: 6px;
    position: relative;
    color: black;

    @media (max-width: 610px) {
        
    }
`
export const ModalContainerCloseBtnWrapper = styled.div`
    position: absolute;
    right: 8px;
    top: 8px;
    height: 14px;
    width: 14px;
    cursor: pointer;
    z-index: 2;
`
export const CloseBtn = styled.img`
    display: block;
    height: 100%;
    width: 100%;
`

export const ModalContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 64px;
    padding-left: 81px;
    padding-right: 81px;

    font-family: Verdana;
`

export const ModalTitle = styled.span`
    font-size: 26px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: center;
`
export const ModalEnergyValSet = styled.div`
    padding-top: 20px;
    display: flex;
    gap: 8px;
    justify-content: center;
    color: ${BLUE_TEXT_MODAL};
    align-items: flex-end;
    border-bottom: 1px solid ${GREY_INPUT_BORDER};
    width: 330px;
    padding-bottom: 32px;
`

export const ModalEnergyVal = styled.span`
    font-size: 48px;
    font-weight: 700;
    letter-spacing: 0.04em;
`

export const ModalEnergyUnitsVal = styled.span`
    font-size: 16px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0.04em;
`
export const FoodsToAvoidSet = styled.div`
    padding-top: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const FoodsToAvoidTitle = styled.span`
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: ${MODAL_LIST_TITLE_COLOR};
`

export const BadFoodsList = styled.ol`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 330px;
    gap: 15px;

`
export const BadFoodItem = styled.li`
    font-family: Verdana;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: ${MODAL_LIST_ITEM_COLOR};
`