import styled from "styled-components";

import { 
    PERSONAL_INFO_BACKGROUND_COLOR,
    HEADER_SLIM_WORD_COLOR,
    MODAL_LIST_ITEM_COLOR
} from "../../assets/themes/colors";

export const PersonalInfoWrapper = styled.div`
    background-color: ${PERSONAL_INFO_BACKGROUND_COLOR};
    display: flex;
    flex-direction: column;
    height: 100vh;
    flex-grow: 1;

    padding-top: 300px;

    font-family: Verdana;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0.04em;


    @media (max-width: 768px) {
        flex-direction: row;
        padding-top: 80px;
        margin-top: 50px;
        height: fit-content;
        padding-bottom: 60px;
    }
`
export const SummaryWrapper = styled.div`
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        padding-left: 32px;
        padding-right: 32px;
        flex-basis: 50%;
        flex-grow: 1;
    }
`
export const SummaryTitle = styled.span`
    color: ${HEADER_SLIM_WORD_COLOR};
`

export const SummaryContent = styled.ul`
    color: ${MODAL_LIST_ITEM_COLOR};
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const SummaryContentLine = styled.li`
    display: flex;
    justify-content: space-between;
    max-width: 350px;
    font-weight: 400;
`
export const SummaryContentLineName = styled.span`
    display: block;
`
export const SummaryContentLineVal = styled.span`
    display: block;
`
export const FoodNotRecommended = styled.div`
    padding-top: 60px;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        flex-basis: 50%;
        flex-grow: 1;
        padding-top: 0;
        padding-left: 32px;
        padding-right: 32px;
    }
`
export const FoodNotRecommendedTitle = styled.span`
    color: ${HEADER_SLIM_WORD_COLOR};
    display: block;
`
export const FoodNotRecommendedList = styled.ul`
    padding-top: 40px;
    color: ${MODAL_LIST_ITEM_COLOR};
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 400;
`

export const FoodNotRecommendedItem = styled.li`
    display: block;
`

export const NoUserDataPresentDietText = styled.span`
    display: block;
    padding-top: 30px;
    font-weight: 300;
`