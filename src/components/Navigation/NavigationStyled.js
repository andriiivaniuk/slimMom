import styled from "styled-components";

import {
    GREY_LABEL_INPUT,
    MODAL_LIST_TITLE_COLOR
} from "../../assets/themes/colors";


export const LoggedWrapper = styled.div`
    display: block;
    justify-content: flex-end;
    width: 100%;

    font-family: 'Verdana';
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    line-height: 13px;
    letter-spacing: 0.04em;
`

export const UnloggedNavWrapper = styled.div`
    display: block;
    justify-content: flex-end;
    width: 100%;

    font-family: 'Verdana';
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    line-height: 13px;
    letter-spacing: 0.04em;
`
export const ButtonsSet = styled.div`
    display: flex;
    gap: 16px;
    padding-right: 20px;
`

export const SignInButton = styled.button`
    cursor: pointer;
    color: ${MODAL_LIST_TITLE_COLOR};
`
export const RegisterButton = styled.button`
    cursor: pointer;
    color: ${GREY_LABEL_INPUT};
`
export const DiaryButton = styled.button`
    cursor: pointer;
    color: ${MODAL_LIST_TITLE_COLOR};
`
export const CalculatorButon = styled.button`
    cursor: pointer;
    color: ${GREY_LABEL_INPUT};
`