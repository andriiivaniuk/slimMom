import styled from "styled-components";

import {
    GREY_LABEL_INPUT,
    MODAL_LIST_TITLE_COLOR,
    GREY_INPUT_BORDER
} from "../../assets/themes/colors";

export const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-right: 30px;
    width: 100%;

    @media (max-width: 768px) {
        width: auto;
    }

`

export const LoggedWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-grow: 1;

    font-family: 'Verdana';
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    line-height: 13px;
    letter-spacing: 0.04em;
    align-items: center;

    //background-color: aliceblue;

    @media (max-width: 768px) {
        justify-content: space-between;
    }
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

    @media (max-width: 768px) {
        display: ${props => props.isUserLogged ? `none` : `flex`};
    }
`

export const SignInButton = styled.button`
    cursor: pointer;
    color: ${GREY_LABEL_INPUT};
    :hover{
        color: ${MODAL_LIST_TITLE_COLOR};
    }
`
export const RegisterButton = styled.button`
    cursor: pointer;
    color: ${GREY_LABEL_INPUT};
    :hover{
        color: ${MODAL_LIST_TITLE_COLOR};
    }
`
export const DiaryButton = styled.button`
    cursor: pointer;
    color: ${GREY_LABEL_INPUT};
    :hover{
        color: ${MODAL_LIST_TITLE_COLOR};
    }
`
export const CalculatorButon = styled.button`
    cursor: pointer;
    color: ${GREY_LABEL_INPUT};
    :hover{
        color: ${MODAL_LIST_TITLE_COLOR};
    }
`
export const MenuBtnWrapper = styled.div`
    margin-right: 35px;
    margin-left: 35px;
    height: 12px;
    width: 18px;
    cursor: pointer;

    @media (min-width: 768px) {
        display: none;
    }
`

export const LoggedUserMenu = styled.div`
    display: flex;
    font-family: 'Verdana';
    font-size: 14px;
    font-weight: 700;
    line-height: 13px;
    letter-spacing: 0.04em;
    align-items: center;
    gap: 10px;

`
export const LoggedUserName = styled.span`
    color: ${MODAL_LIST_TITLE_COLOR};
    text-transform: none;
    cursor: pointer;
`

export const LoggedUserExit = styled.button`
    cursor: pointer;
    text-transform: none;
    color: ${GREY_LABEL_INPUT};
`

export const VerticalDeviderNav = styled.div`
    width: 2px;
    height: 32px;
    display: block;
    background-color: ${GREY_INPUT_BORDER};

`