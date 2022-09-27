import styled from "styled-components";

import { 
    GREY_INPUT_BORDER,
    MODAL_LIST_ITEM_COLOR,
    ORANGE_MAIN_COLOR,
    BLUE_TEXT_MODAL
} from "../../assets/themes/colors";

export const DiaryWrapper = styled.article`
    max-width: 800px;
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
export const SearchNameInput = styled.textarea`
    width: 240px;
    padding-bottom: -5px;
    border-bottom: 1px ${GREY_INPUT_BORDER} solid;
`

export const GramsInputSet = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`

export const ErrorPlaceholder = styled.span`
    position: absolute;
    display: block;
    top: 55px;
    left: 0;
    height: 20;
    width: 240;
    color: red;
`

export const GramsValInput = styled.textarea`
    width: 107px;
    padding-bottom: -5px;
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
    opacity: ${props => props.canAdd ? 
        `1` : `0.7` };
    transition: 0.2s;

    :hover {
        box-shadow: ${props => props.canAdd ? 
        `0px 4px 10px rgba(252, 132, 45, 0.5)` : `none` }
    }
`
export const PlusSign = styled.span`
    font-size: 1.5em;
    transform: translateY(-1px);
    display: block;
`
export const TodayMeals = styled.div`
    padding-top: 60px;
`
export const TodayMealsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;

    font-family: Verdana;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0.04em;

    max-height: 400px;
    overflow-y: scroll;
    padding-right: 20px;

    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-track {
        background: ${GREY_INPUT_BORDER};
    }

    ::-webkit-scrollbar-thumb {
        background: ${BLUE_TEXT_MODAL};
    }
`

export const MealListItem = styled.li`
    display: flex;
    gap: 15px;
    justify-content: space-between;
`
export const ItemName = styled.span`
    display: block;
    width: 240px;
    border-bottom: 1px solid ${GREY_INPUT_BORDER};
    padding-bottom: 20px;
`

export const ItemWeight = styled.span`
    display: block;
    width: 100px;
    border-bottom: 1px solid ${GREY_INPUT_BORDER};
    padding-bottom: 20px;
    text-align: right;
`
export const ItemKcal = styled.span`
    display: block;
    width: 100px;
    border-bottom: 1px solid ${GREY_INPUT_BORDER};
    padding-bottom: 20px;
    text-align: right;
`
export const DeleteItemBtn = styled.button`
    height: 12px;
    width: 12px;
    margin-right: 10px;
    margin-left: 10px;
    cursor: pointer;

    padding-top: 5px;
`