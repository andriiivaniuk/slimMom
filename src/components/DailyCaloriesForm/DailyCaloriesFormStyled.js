import styled from "styled-components";

import { 
    GREY_LABEL_INPUT,
    GREY_INPUT_BORDER,
    ORANGE_MAIN_COLOR
} from "../../assets/themes/colors";

export const FormWrapper = styled.div`
    max-width: 608px;
    padding-left: 16px;
    padding-top: 300px;

    @media (max-width: 768px) {
        max-width: 704px;
        padding-top: 200px;
    }
`

export const FormTitleText = styled.span`
    font-family: Verdana;
    font-size: 34px;
    font-weight: 700;
    line-height: 41px;
    letter-spacing: 0em;

`

export const FormInputsSet = styled.div`
    padding-top: 68px;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding-right: 32px;
    font-family: Verdana;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: ${GREY_LABEL_INPUT};
`
export const InputSetItem = styled.li`
    width: 240px;
    display: flex;
    flex-direction: column;
    position: relative;
`

export const InputTitleLabel = styled.span`
    
`
export const Input = styled.input`
    border-bottom: ${GREY_INPUT_BORDER} 1px solid;
    position: relative;
`
export const BloodTypeInput = styled.div`
    display: flex;
    margin-top: 15px;
    padding-top: 13px;
    gap: 35px;
    border-top: 1px solid ${GREY_INPUT_BORDER};
`
export const BloodTypeInputCircle = styled.div`
    border-radius: 50%;
    height: 20px;
    width: 20px;
    border: 1px solid ${GREY_LABEL_INPUT};
    cursor: pointer;
    position: relative;
`
export const BloodTypeDigit = styled.span`
    color: ${props => props.isSelected ? `${ORANGE_MAIN_COLOR}` : `${GREY_LABEL_INPUT}` };
    left: 21px;
    top: 0;
    position: absolute;
`
export const BloodTypeSelectedDot = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: ${ORANGE_MAIN_COLOR};
    left: 4px;
    top: 4px;
    position: absolute;
`
export const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    justify-content: flex-end;
    padding-right: 90px;

    @media (max-width: 768px) {
        justify-content: flex-start;
        padding-right: 0px;
    }
`

export const StartLosingWeighBtn = styled.button`
    margin-top: 73px;
    height: 43px;
    width: 210px;
    border-radius: 30px;
    background-color: ${ORANGE_MAIN_COLOR};
    color: white;

    font-family: Verdana;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0.04em;
    text-align: center;

    cursor: pointer;

    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
`

export const ErrorMessage = styled.span`
    position: absolute;
    display: block;
    top: 40px;
    left: 0;
    height: 20;
    width: 240;
    color: red;
`