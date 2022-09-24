import styled from "styled-components";

import { 
    GREY_LABEL_INPUT,
    ORANGE_MAIN_COLOR
} from "../../assets/themes/colors";

export const ProductListWrapper = styled.div`
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 2px ${ORANGE_MAIN_COLOR} solid;
    border-radius: 10px;
    padding: 20px;
    position: absolute;
    left: 50px;
    top: 475px;
    /* max-height: 400px; */
    overflow: hidden;

    font-family: 'Verdana';
    font-size: 14;
`

export const SearchTabTitleList = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    color: ${GREY_LABEL_INPUT};
`

export const SearchResultList = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    min-width: 500px;
    max-height: 500px;
    gap: 5px;
    padding: 10px;
`

export const SearchResultItem = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    cursor: pointer;
    padding: 3px;
    border-radius: 4px;

    :hover{
        background-color: ${ORANGE_MAIN_COLOR};
    }
`
export const SearchResultNum = styled.span`
    min-width: 20px;
    font-weight: 800;
`
export const SearchResultName = styled.span`
    font-weight: 500;
    flex-grow: 1;
    text-align: left;
`
export const SearchResultKcal = styled.span`
    font-weight: 300;
`