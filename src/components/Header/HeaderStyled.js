import styled from "styled-components";

import { 
    GREY_INPUT_BORDER 
} from "../../assets/themes/colors";

export const HeaderWrapper = styled.div`

    position: absolute;

    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    gap: 20px;

    border-bottom: 1px solid ${GREY_INPUT_BORDER};
    padding-bottom: 20px;
    padding-top: 20px;
    padding-left: 16px;

    @media (min-width: 768px) {
        padding-top: 80px;
        justify-content: stretch;
        border-bottom: none;
        padding-bottom: 0;
    }
`
export const VerticalDevider = styled.div`
    width: 2px;
    height: 32px;
    display: block;
    background-color: ${GREY_INPUT_BORDER};

    @media (max-width: 768px) {
        display: none;
    }
`
