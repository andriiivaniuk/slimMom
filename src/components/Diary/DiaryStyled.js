import styled from "styled-components";

import { 
    GREY_INPUT_BORDER,
    MODAL_LIST_ITEM_COLOR,
    ORANGE_MAIN_COLOR
} from "../../assets/themes/colors";

export const DiaryWrapper = styled.article`
    max-width: 608px;
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    padding-right: 100px;
`
export const DateTitleSet = styled.div`
    padding-top: 300px;
    display: flex;
    gap: 21px;
    align-items: center;
`
export const DateTitle = styled.span`
    font-family: Verdana;
    font-size: 34px;
    font-weight: 700;
    line-height: 41px;
    letter-spacing: 0em;
`
export const CalendarImgWrapper = styled.div`
    height: 20px;
    width: 20px;
    display: block;
    cursor: pointer;
`
export const InputSet = styled.div`
    padding-top: 60px;
    display: flex;
    gap: 50px;

    font-family: Verdana;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0.04em;

    color: ${MODAL_LIST_ITEM_COLOR};

`
export const SearchNameInput = styled.input`
    width: 240px;
    padding-bottom: 20px;
    border-bottom: 1px ${GREY_INPUT_BORDER} solid;
`
export const GramsValInput = styled.input`
    width: 107px;
    padding-bottom: 20px;
    border-bottom: 1px ${GREY_INPUT_BORDER} solid;

`

export const AddMealButton = styled.button`
    height: 48px;
    width: 48px;
    border-radius: 50%;
    background-color: ${ORANGE_MAIN_COLOR};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover {
        box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    }
`

export const PlusSign = styled.span`
    font-size: 1.5em;
    transform: translateY(-1px);
    display: block;
`

export const ProductList = styled.div`
    padding-top: 60px;
    display: flex;
    flex-direction: column;
`