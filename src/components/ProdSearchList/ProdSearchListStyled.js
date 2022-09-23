import styled from "styled-components";

import { 
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
    max-height: 400px;
    overflow: hidden;
`