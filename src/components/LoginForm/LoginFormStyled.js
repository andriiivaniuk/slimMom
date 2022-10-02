import styled from "styled-components";

import { 
    ORANGE_MAIN_COLOR
} from "../../assets/themes/colors";

export const LoginWrapper = styled.div`
    padding-top: 160px;
    padding-left: 16px;
    max-width: 500px;
`

export const LoginFormTitle = styled.span`
    color: ${ORANGE_MAIN_COLOR};
    font-size: 14px;
    font-family: 'Verdana';
    font-weight: 700;
    line-height: 13px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
`

export const AuthButtonSet = styled.div`
    padding-top: 60px;
    display: flex;
    gap: 32px;
    font-family: 'Verdana';
    font-weight: 700;
    line-height: 13px;
    letter-spacing: 0.04em;
    font-size: 14px;
    line-height: 17px;
`

export const LoginBtn = styled.button`
    height: 44px;
    width: 181px;
    border-radius: 30px;
    background-color: ${ORANGE_MAIN_COLOR};
    color: white;
    text-align: center;
    cursor: pointer;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
`

export const RegisterBtn = styled.button`
    height: 44px;
    width: 181px;
    border-radius: 30px;
    text-align: center;
    cursor: pointer;
    color: ${ORANGE_MAIN_COLOR};
    border: 2px ${ORANGE_MAIN_COLOR} solid;
    background-color: white;
`