import styled from "styled-components";

import { 
    HEADER_SLIM_WORD_COLOR,
    ORANGE_MAIN_COLOR
} from "../../assets/themes/colors";

export const LogoWrapper = styled.div`
    display: flex;
    position: relative;

    @media (min-width: 768px) {
        align-items: center;
        gap: 20px;
    }
`

export const LogoImgWrapper = styled.div`
    display: block;
    cursor: pointer;
    width: 46px;
    height: 44px;
`

export const LogoTitle = styled.div`
    display: block;
    font-size: 1.5em;
    font-family: 'Verdana';
    font-weight: 300;
    position: absolute;
    left: 60px;
    bottom: 0;


    @media (min-width: 768px) {
        position: static;
    }
`

export const SlimWord = styled.span`
    color: ${HEADER_SLIM_WORD_COLOR};
`
export const MomWord = styled.span`
    color: ${ORANGE_MAIN_COLOR};
`